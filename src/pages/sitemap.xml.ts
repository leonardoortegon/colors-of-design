import type { APIRoute } from 'astro';
import { journalPosts } from '../data/journal';
import { services } from '../data/services';
import { getPortfolioProjects } from '../data/projects';
import { shopBasePath, shopProducts } from '../data/shop';
import { absoluteUrl } from '../data/site';
import { localizedPath, stripLocalePrefix, type Locale } from '../i18n/locale';

const englishPaths = [
	'/',
	'/work/',
	'/services/',
	'/about-us/',
	'/work-process/',
	'/contact-us/',
	'/awards-and-recognitions/',
	'/key-biscayne-luxury-interior-design-services/',
	'/interior-design-blog/',
	`${shopBasePath}/`,
	'/privacy-policy/',
	...journalPosts.map((post) => post.url),
	...services.map((service) => `/services/${service.slug}/`),
	...getPortfolioProjects().map((project) => `/work/${project.slug}/`),
	...shopProducts.map((product) => `${shopBasePath}/${product.slug}/`),
];

function urlsForLocale(locale: Locale) {
	return englishPaths.map((path) => localizedPath(locale, path));
}

export const GET: APIRoute = () => {
	const urls = [...urlsForLocale('en'), ...urlsForLocale('es')];

	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls
	.map((path) => {
		const loc = absoluteUrl(path);
		const unprefixed = stripLocalePrefix(path);
		const en = absoluteUrl(localizedPath('en', unprefixed));
		const es = absoluteUrl(localizedPath('es', unprefixed));
		return `  <url>
    <loc>${loc}</loc>
    <xhtml:link rel="alternate" hreflang="en" href="${en}" />
    <xhtml:link rel="alternate" hreflang="es" href="${es}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${en}" />
  </url>`;
	})
	.join('\n')}
</urlset>
`;

	return new Response(body, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8',
		},
	});
};
