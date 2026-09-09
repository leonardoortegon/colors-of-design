import type { APIRoute } from 'astro';
import { projects } from '../data/projects';
import { absoluteUrl } from '../data/site';

export const GET: APIRoute = () => {
	const lastmod = new Date().toISOString().slice(0, 10);
	const urls = ['/', '/work', '/services', ...projects.map((project) => `/work/${project.slug}`)];

	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
	.map(
		(path) => `  <url>
    <loc>${absoluteUrl(path)}</loc>
    <lastmod>${lastmod}</lastmod>
  </url>`,
	)
	.join('\n')}
</urlset>
`;

	return new Response(body, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8',
		},
	});
};
