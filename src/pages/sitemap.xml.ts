import type { APIRoute } from 'astro';
import { journalPosts } from '../data/journal';
import { services } from '../data/services';
import { projects } from '../data/projects';
import { shopBasePath, shopProducts } from '../data/shop';
import { absoluteUrl } from '../data/site';

export const GET: APIRoute = () => {
	const urls = ['/', '/work', '/services', '/about-us/', '/work-process/', '/contact-us/', '/awards-and-recognitions/', '/interior-design-blog/', `${shopBasePath}/`, '/privacy-policy/', ...journalPosts.map(post => post.url), ...services.map(service => `/services/${service.slug}/`), ...projects.map((project) => `/work/${project.slug}`), ...shopProducts.map((product) => `${shopBasePath}/${product.slug}/`)];

	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
	.map(
		(path) => `  <url>
    <loc>${absoluteUrl(path)}</loc>
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
