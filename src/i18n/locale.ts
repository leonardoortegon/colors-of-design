export const locales = ['en', 'es'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export function isLocale(value: string): value is Locale {
	return locales.includes(value as Locale);
}

export function getLocale(pathname: string): Locale {
	return pathname === '/es' || pathname.startsWith('/es/') ? 'es' : 'en';
}

export function stripLocalePrefix(pathname: string): string {
	if (pathname === '/es' || pathname === '/es/') return '/';
	if (pathname.startsWith('/es/')) {
		const rest = pathname.slice(3);
		return rest.startsWith('/') ? rest : `/${rest}`;
	}
	return pathname || '/';
}

export function withTrailingSlash(path: string): string {
	if (!path || path === '/') return '/';
	if (/\.[^/]+$/.test(path)) return path;
	return path.endsWith('/') ? path : `${path}/`;
}

export function localizedPath(locale: Locale, path: string): string {
	const normalized = withTrailingSlash(path.startsWith('/') ? path : `/${path}`);
	if (locale === 'en') return normalized;
	if (normalized === '/') return '/es/';
	return `/es${normalized}`;
}

export function switchLocalePath(pathname: string, target: Locale): string {
	return localizedPath(target, stripLocalePrefix(pathname));
}

export function localeMeta(locale: Locale) {
	return locale === 'es'
		? { htmlLang: 'es', ogLocale: 'es_US', intl: 'es-US' }
		: { htmlLang: 'en', ogLocale: 'en_US', intl: 'en-US' };
}
