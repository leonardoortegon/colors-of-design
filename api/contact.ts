import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const MAX_LENGTH = {
	name: 100,
	email: 160,
	phone: 40,
	location: 150,
	service: 120,
	message: 1800,
} as const;

function trim(value: unknown, max: number): string {
	return String(value ?? '')
		.trim()
		.slice(0, max);
}

function isValidEmail(email: string): boolean {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value: string): string {
	return value
		.replaceAll('&', '&amp;')
		.replaceAll('<', '&lt;')
		.replaceAll('>', '&gt;')
		.replaceAll('"', '&quot;')
		.replaceAll("'", '&#39;');
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
	if (req.method === 'OPTIONS') {
		res.setHeader('Allow', 'POST, OPTIONS');
		return res.status(204).end();
	}

	if (req.method !== 'POST') {
		res.setHeader('Allow', 'POST, OPTIONS');
		return res.status(405).json({ error: 'Method not allowed' });
	}

	const apiKey = process.env.RESEND_API_KEY;
	if (!apiKey) {
		return res.status(500).json({ error: 'Email service is not configured.' });
	}

	const body = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body ?? {});

	// Honeypot — bots fill this; humans never see it.
	if (trim(body.website, 200)) {
		return res.status(200).json({ ok: true });
	}

	const name = trim(body.name, MAX_LENGTH.name);
	const email = trim(body.email, MAX_LENGTH.email);
	const phone = trim(body.phone, MAX_LENGTH.phone);
	const location = trim(body.location, MAX_LENGTH.location);
	const service = trim(body.service, MAX_LENGTH.service);
	const message = trim(body.message, MAX_LENGTH.message);
	const source = trim(body.source, 40) || 'website';

	if (!name || !message) {
		return res.status(400).json({ error: 'Name and message are required.' });
	}

	if (email && !isValidEmail(email)) {
		return res.status(400).json({ error: 'Please provide a valid email address.' });
	}

	const to = process.env.CONTACT_TO_EMAIL || 'interiors@colorsofdesign.com';
	const from =
		process.env.CONTACT_FROM_EMAIL || 'Colors of Design <onboarding@resend.dev>';

	const subjectParts = [name, location || service].filter(Boolean);
	const subject = `Project inquiry from ${subjectParts.join(' · ')}`;

	const textLines = [
		'New project inquiry from colorsofdesign.com',
		'',
		message,
		'',
		`Name: ${name}`,
		`Email: ${email || 'Not provided'}`,
		`Phone: ${phone || 'Not provided'}`,
		`Location: ${location || 'To discuss'}`,
		`Service: ${service || 'To discuss'}`,
		`Source: ${source}`,
	];

	const htmlRows = [
		['Name', name],
		['Email', email || 'Not provided'],
		['Phone', phone || 'Not provided'],
		['Location', location || 'To discuss'],
		['Service', service || 'To discuss'],
		['Source', source],
	]
		.map(
			([label, value]) =>
				`<tr><td style="padding:4px 12px 4px 0;color:#666;">${escapeHtml(label)}</td><td style="padding:4px 0;">${escapeHtml(value)}</td></tr>`,
		)
		.join('');

	const html = `
		<div style="font-family:Georgia,serif;font-size:16px;line-height:1.6;color:#222;">
			<p style="margin:0 0 1rem;">New project inquiry from colorsofdesign.com</p>
			<p style="white-space:pre-wrap;margin:0 0 1.5rem;">${escapeHtml(message)}</p>
			<table style="font-size:14px;border-collapse:collapse;">${htmlRows}</table>
		</div>
	`;

	try {
		const resend = new Resend(apiKey);
		const { error } = await resend.emails.send({
			from,
			to: [to],
			replyTo: email || undefined,
			subject,
			text: textLines.join('\n'),
			html,
		});

		if (error) {
			console.error('Resend error:', error);
			return res.status(502).json({ error: 'Unable to send your message right now.' });
		}

		return res.status(200).json({ ok: true });
	} catch (error) {
		console.error('Contact API error:', error);
		return res.status(500).json({ error: 'Unable to send your message right now.' });
	}
}
