export const site = {
	name: 'Colors of Design Group',
	shortName: 'Colors of Design',
	url: 'https://colors-of-design.vercel.app',
	locale: 'en_US',
	phone: '(786) 675-1484',
	phoneHref: 'tel:+17866751484',
	phoneE164: '+17866751484',
	founder: 'Margaret Van Puffelen',
	locality: 'Miami',
	region: 'FL',
	country: 'US',
	defaultTitle: 'Luxury Interior Design in Miami | Colors of Design Group',
	defaultDescription:
		'Colors of Design is a Miami interior design studio creating refined, personal residences—from first concept to final installation—across South Florida and beyond.',
	ogImage: '/hero.jpg',
} as const;

export function absoluteUrl(path: string): string {
	const normalized = path.startsWith('/') ? path : `/${path}`;
	return new URL(normalized, `${site.url}/`).toString();
}
