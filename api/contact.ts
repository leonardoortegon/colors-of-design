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

const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const MIN_FORM_COMPLETION_MS = 2_000;
const requestHistory = new Map<string, number[]>();
const PRODUCTION_HOSTNAMES = new Set(['colorsofdesign.com', 'www.colorsofdesign.com']);

interface TurnstileResult {
	success: boolean;
	hostname?: string;
	action?: string;
	'error-codes'?: string[];
}

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

function getClientIp(req: VercelRequest): string {
	const forwarded = req.headers['x-forwarded-for'];
	const value = Array.isArray(forwarded) ? forwarded[0] : forwarded;
	return value?.split(',')[0]?.trim() || req.socket.remoteAddress || 'unknown';
}

function isRateLimited(ip: string): boolean {
	const now = Date.now();
	const cutoff = now - RATE_LIMIT_WINDOW_MS;
	const recent = (requestHistory.get(ip) || []).filter((timestamp) => timestamp > cutoff);

	if (recent.length >= RATE_LIMIT_MAX_REQUESTS) {
		requestHistory.set(ip, recent);
		return true;
	}

	recent.push(now);
	requestHistory.set(ip, recent);

	if (requestHistory.size > 1_000) {
		for (const [key, timestamps] of requestHistory) {
			if (!timestamps.some((timestamp) => timestamp > cutoff)) requestHistory.delete(key);
		}
	}

	return false;
}

async function verifyTurnstile(
	token: string,
	secret: string,
	remoteIp: string,
): Promise<TurnstileResult> {
	const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			secret,
			response: token,
			remoteip: remoteIp === 'unknown' ? undefined : remoteIp,
		}),
		signal: AbortSignal.timeout(8_000),
	});

	if (!response.ok) return { success: false, 'error-codes': ['siteverify-unavailable'] };
	return (await response.json()) as TurnstileResult;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
	res.setHeader('Cache-Control', 'no-store');

	if (req.method === 'OPTIONS') {
		res.setHeader('Allow', 'POST, OPTIONS');
		return res.status(204).end();
	}

	if (req.method !== 'POST') {
		res.setHeader('Allow', 'POST, OPTIONS');
		return res.status(405).json({ error: 'Method not allowed' });
	}

	const apiKey = process.env.RESEND_API_KEY?.trim();
	if (!apiKey) {
		console.error('RESEND_API_KEY is missing');
		return res.status(500).json({ error: 'Email service is not configured.' });
	}

	const turnstileSecret = process.env.TURNSTILE_SECRET_KEY?.trim();
	if (process.env.VERCEL_ENV === 'production' && !turnstileSecret) {
		console.error('TURNSTILE_SECRET_KEY is missing in production');
		return res.status(503).json({ error: 'Security verification is temporarily unavailable.' });
	}

	let body: Record<string, unknown> = {};
	try {
		body = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body ?? {});
	} catch {
		return res.status(400).json({ error: 'Invalid request body.' });
	}

	// Honeypot — bots fill this; humans never see it.
	if (trim(body.website, 200)) {
		return res.status(200).json({ ok: true });
	}

	const origin = req.headers.origin;
	if (
		origin &&
		origin !== 'https://colorsofdesign.com' &&
		origin !== 'https://www.colorsofdesign.com' &&
		!origin.startsWith('http://localhost:')
	) {
		return res.status(403).json({ error: 'Unable to verify this submission.' });
	}

	const startedAt = Number(body.startedAt);
	const completionTime = Date.now() - startedAt;
	if (!Number.isFinite(startedAt) || completionTime < MIN_FORM_COMPLETION_MS) {
		return res.status(200).json({ ok: true });
	}

	const remoteIp = getClientIp(req);
	if (isRateLimited(remoteIp)) {
		return res.status(429).json({
			error: 'Too many messages were submitted. Please wait a few minutes and try again.',
		});
	}

	if (turnstileSecret) {
		const turnstileToken = trim(body.turnstileToken, 2_048);
		if (!turnstileToken) {
			return res.status(400).json({ error: 'Please complete the security check.' });
		}

		try {
			const validation = await verifyTurnstile(turnstileToken, turnstileSecret, remoteIp);
			const hostnameIsValid =
				process.env.VERCEL_ENV !== 'production' ||
				(validation.hostname ? PRODUCTION_HOSTNAMES.has(validation.hostname) : false);
			if (!validation.success || validation.action !== 'contact_form' || !hostnameIsValid) {
				console.warn('Turnstile rejected contact form submission', validation['error-codes']);
				return res.status(403).json({ error: 'Security verification failed. Please try again.' });
			}
		} catch (error) {
			console.error('Turnstile verification error:', error);
			return res.status(503).json({ error: 'Security verification is temporarily unavailable.' });
		}
	}

	const name = trim(body.name, MAX_LENGTH.name);
	const email = trim(body.email, MAX_LENGTH.email);
	const phone = trim(body.phone, MAX_LENGTH.phone);
	const location = trim(body.location, MAX_LENGTH.location);
	const service = trim(body.service, MAX_LENGTH.service);
	const message = trim(body.message, MAX_LENGTH.message);
	const source = trim(body.source, 40) || 'website';

	if (!name || !email || !message) {
		return res.status(400).json({ error: 'Name, email, and message are required.' });
	}

	if (!isValidEmail(email)) {
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
			const detail =
				typeof error === 'object' && error && 'message' in error
					? String((error as { message?: string }).message || '')
					: '';
			return res.status(502).json({
				error: 'Unable to send your message right now.',
				detail: detail || undefined,
			});
		}

		return res.status(200).json({ ok: true });
	} catch (error) {
		console.error('Contact API error:', error);
		return res.status(500).json({ error: 'Unable to send your message right now.' });
	}
}
