export const site = {
	name: 'Colors of Design Group',
	shortName: 'Colors of Design',
	url: 'https://colorsofdesign.com',
	locale: 'en_US',
	email: 'interiors@colorsofdesign.com',
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

export const inquiryFormIntro = {
	heading: 'Start your project',
	copy: 'Tell us about your property, what you hope to create, and where you are in the process.',
} as const;

export function absoluteUrl(path: string): string {
	const normalized = path.startsWith('/') ? path : `/${path}`;
	const url = new URL(normalized, `${site.url}/`);
	if (!url.pathname.endsWith('/') && !/\.[^/]+$/.test(url.pathname)) url.pathname += '/';
	return url.toString();
}
