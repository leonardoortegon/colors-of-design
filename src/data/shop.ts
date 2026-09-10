export interface ShopProduct {
	slug: string;
	name: string;
	summary: string;
	description: string;
	categories: string[];
	price: number;
	regularPrice: number;
	onSale: boolean;
	imageSrc: string;
	imageAlt: string;
	imageWidth: number;
	imageHeight: number;
	gallery: {
		src: string;
		alt: string;
		width?: number;
		height?: number;
	}[];
	legacyUrl: string;
}

export const shopIntro = {
	eyebrow: 'Shop',
	heading: 'One of a Kind',
	description:
		'These beautiful products are special order, they will take 4 to 12 weeks to arrive. Most are custom made or special orders. Buy with confidence to receive something extraordinary and special that will enhance with luxury your interiors.',
};

export const shopProducts: ShopProduct[] = [
	{
		slug: 'table-lamp',
		name: 'Table Lamp',
		summary:
			'Portable and cordless quartz crystal lamp, housed in brass and set on a concrete base. This beautiful accent meditation lamp includes a dimmable light switch and rechargeable LED bulb.',
		description:
			'Lead time: 4 weeks. Guarantee: 3 weeks. Made in USA.',
		categories: ['One of a Kind'],
		price: 3300,
		regularPrice: 3300,
		onSale: false,
		imageSrc: '/shop/table-lamp/hero.jpg',
		imageAlt: 'Quartz crystal table lamp by Colors of Design Group',
		imageWidth: 1200,
		imageHeight: 1200,
		gallery: [
			{ src: '/shop/table-lamp/hero.jpg', alt: 'Quartz crystal table lamp on a concrete base' },
			{ src: '/shop/table-lamp/02.jpg', alt: 'Detail of the quartz crystal table lamp' },
		],
		legacyUrl: 'https://colorsofdesign.com/online-shopping/table-lamp/',
	},
	{
		slug: 'one-of-a-kind',
		name: 'One of a kind',
		summary:
			'These grid luminaries are one of a kind, unique to the space of the person who loves them. These magical luminaries are made of natural stone, clear crystal quartz points, and minerals sourced from around the world.',
		description:
			'For residential or commercial use. Lead time: 12–16 weeks (depending on availability). Guarantee: 2 weeks. Made in USA.',
		categories: ['One of a Kind'],
		price: 2800,
		regularPrice: 2800,
		onSale: false,
		imageSrc: '/shop/one-of-a-kind/hero.jpg',
		imageAlt: 'One-of-a-kind crystal luminary by Colors of Design Group',
		imageWidth: 1200,
		imageHeight: 1200,
		gallery: [
			{ src: '/shop/one-of-a-kind/hero.jpg', alt: 'One-of-a-kind crystal luminary display' },
			{ src: '/shop/one-of-a-kind/02.jpg', alt: 'Crystal luminary detail' },
			{ src: '/shop/one-of-a-kind/03.jpg', alt: 'One-of-a-kind luminary in an interior setting' },
		],
		legacyUrl: 'https://colorsofdesign.com/online-shopping/one-of-a-kind/',
	},
	{
		slug: 'selenite-sconces',
		name: 'Selenite Sconces',
		summary:
			'The natural beauty of these luminaries comes from raw selenite slabs with delicate brass accents. Each piece is one of a kind, made of stones directly from the mines.',
		description:
			'LED dimmable. Guarantee: 3 weeks. Lead time: 6 weeks (varies on availability). Custom sizes available. Made in USA.',
		categories: ['One of a Kind'],
		price: 4050,
		regularPrice: 4500,
		onSale: true,
		imageSrc: '/shop/selenite-sconces/hero.jpg',
		imageAlt: 'Selenite wall sconces by Colors of Design Group',
		imageWidth: 1200,
		imageHeight: 1200,
		gallery: [
			{ src: '/shop/selenite-sconces/hero.jpg', alt: 'Selenite sconce with brass accents' },
			{ src: '/shop/selenite-sconces/02.jpg', alt: 'Selenite sconce detail' },
			{ src: '/shop/selenite-sconces/03.jpg', alt: 'Selenite sconce illuminated' },
			{ src: '/shop/selenite-sconces/04.jpg', alt: 'Pair of selenite sconces' },
		],
		legacyUrl: 'https://colorsofdesign.com/online-shopping/selenite-sconces/',
	},
	{
		slug: 'crystal-floor-lamp',
		name: 'Crystal floor lamp',
		summary:
			'Our portable cordless Soul floor lamps are created with crystal quartz, housed in brass and set in a concrete base, an accent jewel for your home.',
		description:
			'Indoor use. Features dimmable LED light, ceramic wheels to move them around, and a rechargeable LED bulb with cable. Guarantee: 3 weeks. Lead time: 12 weeks depending on availability. Custom sizes and colors available. Made in USA.',
		categories: ['One of a Kind'],
		price: 7200,
		regularPrice: 8000,
		onSale: true,
		imageSrc: '/shop/crystal-floor-lamp/hero.jpg',
		imageAlt: 'Crystal quartz floor lamp by Colors of Design Group',
		imageWidth: 1200,
		imageHeight: 1200,
		gallery: [
			{ src: '/shop/crystal-floor-lamp/hero.jpg', alt: 'Crystal floor lamp in a living room' },
			{ src: '/shop/crystal-floor-lamp/02.jpg', alt: 'Crystal floor lamp with concrete base' },
			{ src: '/shop/crystal-floor-lamp/03.jpg', alt: 'Detail of crystal floor lamp' },
			{ src: '/shop/crystal-floor-lamp/04.jpg', alt: 'Crystal floor lamp side view' },
		],
		legacyUrl: 'https://colorsofdesign.com/online-shopping/crystal-floor-lamp/',
	},
	{
		slug: 'nest-pendant',
		name: 'Nest pendant',
		summary:
			'This glass pendant is made using Italian Murano blown glass techniques. Shapes may vary. It is a handmade piece and a beautiful accent for your favorite flower or plant.',
		description:
			'Type: Home decor. Dimensions: total height 51 in adjustable, diameter 6 in, height of the glass 12 in. Weight 4.3 kg / 9 lb.',
		categories: ['Accessories', 'Home Decor', 'One of a Kind'],
		price: 230,
		regularPrice: 230,
		onSale: false,
		imageSrc: '/shop/nest-pendant/hero.jpg',
		imageAlt: 'Murano glass nest pendant by Colors of Design Group',
		imageWidth: 1200,
		imageHeight: 1200,
		gallery: [
			{ src: '/shop/nest-pendant/hero.jpg', alt: 'Murano glass nest pendant' },
			{ src: '/shop/nest-pendant/02.jpg', alt: 'Nest pendant with botanical accent' },
			{ src: '/shop/nest-pendant/03.jpg', alt: 'Nest pendant detail' },
		],
		legacyUrl: 'https://colorsofdesign.com/online-shopping/nest-pendant/',
	},
	{
		slug: 'luxe-indoor-swing',
		name: 'Luxe indoor swing',
		summary:
			'Swing for indoor use. This seat is made with multi-laminated wood, curved and covered in natural leather with a low relief. Chains are made of hand-woven natural leather straps with internal steel spines.',
		description:
			'Dimensions: W23 × D12 in × H90 in. Guarantee: 1 year. Lead time: 4–6 weeks. Custom sizes and custom colors available.',
		categories: ['Furniture', 'One of a Kind'],
		price: 2980,
		regularPrice: 3480,
		onSale: true,
		imageSrc: '/shop/luxe-indoor-swing/hero.jpg',
		imageAlt: 'Luxe indoor leather swing by Colors of Design Group',
		imageWidth: 1200,
		imageHeight: 1200,
		gallery: [
			{ src: '/shop/luxe-indoor-swing/hero.jpg', alt: 'Luxe indoor swing in a living room' },
			{ src: '/shop/luxe-indoor-swing/02.jpg', alt: 'Indoor swing leather detail' },
			{ src: '/shop/luxe-indoor-swing/03.jpg', alt: 'Indoor swing side view' },
			{ src: '/shop/luxe-indoor-swing/04.jpg', alt: 'Indoor swing installation detail' },
		],
		legacyUrl: 'https://colorsofdesign.com/online-shopping/luxe-indoor-swing/',
	},
	{
		slug: 'drop-pendant',
		name: 'Drop pendant',
		summary:
			'This pendant lamp is made of two blown glass forms. It resembles a dewdrop resting one on top of another, creating natural shapes and reflections all around.',
		description:
			'Material: hand-blown glass, chrome-plated steel. Light: LED, 3.5 W, 200 lm, 2700K. Dimming options available. Lead time: 6–8 weeks. Made in Italy.',
		categories: ['One of a Kind'],
		price: 2670,
		regularPrice: 2670,
		onSale: false,
		imageSrc: '/shop/drop-pendant/hero.jpg',
		imageAlt: 'Drop pendant glass lamp by Colors of Design Group',
		imageWidth: 1200,
		imageHeight: 1200,
		gallery: [
			{ src: '/shop/drop-pendant/hero.jpg', alt: 'Drop pendant glass lamp' },
			{ src: '/shop/drop-pendant/02.jpg', alt: 'Drop pendant illuminated' },
			{ src: '/shop/drop-pendant/03.jpg', alt: 'Drop pendant detail' },
		],
		legacyUrl: 'https://colorsofdesign.com/online-shopping/drop-pendant/',
	},
	{
		slug: 'outdoor-swing',
		name: 'Outdoor swing',
		summary:
			'A beautiful and chic accent for your patio, fun, elegant, and ready to install.',
		description:
			'Dimensions: width 23 in, depth 12 in, height 90 in. Material: aluminum structure, nautical rope, and teak wood. Lead time: 4 weeks. Guarantee: 1 year. Custom sizes available at an extra cost.',
		categories: ['Furniture', 'One of a Kind'],
		price: 2530,
		regularPrice: 2530,
		onSale: false,
		imageSrc: '/shop/outdoor-swing/hero.jpg',
		imageAlt: 'Outdoor swing by Colors of Design Group',
		imageWidth: 1200,
		imageHeight: 1200,
		gallery: [
			{ src: '/shop/outdoor-swing/hero.jpg', alt: 'Outdoor swing on a patio' },
			{ src: '/shop/outdoor-swing/02.jpg', alt: 'Outdoor swing detail' },
			{ src: '/shop/outdoor-swing/03.jpg', alt: 'Outdoor swing side view' },
		],
		legacyUrl: 'https://colorsofdesign.com/online-shopping/outdoor-swing/',
	},
	{
		slug: 'interior-design-gift-card',
		name: 'Gift Card',
		summary:
			'Need a last-minute gift, or want to surprise someone right now? Send a gift card via email immediately, the perfect present for design lovers.',
		description:
			'Purchasing this digital gift card creates a unique code. The recipient can enter this code at checkout to subtract the gift card value from their order total. This gift card never expires.',
		categories: ['One of a Kind'],
		price: 100,
		regularPrice: 100,
		onSale: false,
		imageSrc: '/shop/interior-design-gift-card/hero.png',
		imageAlt: 'Colors of Design Group gift card',
		imageWidth: 1200,
		imageHeight: 800,
		gallery: [{ src: '/shop/interior-design-gift-card/hero.png', alt: 'Colors of Design Group gift card' }],
		legacyUrl: 'https://colorsofdesign.com/online-shopping/interior-design-gift-card/',
	},
];

export const shopBasePath = '/interior-design-online-shop';

export function formatShopPrice(amount: number, options?: { from?: boolean }): string {
	const formatted = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
		maximumFractionDigits: amount % 1 === 0 ? 0 : 2,
	}).format(amount);

	return options?.from ? `From ${formatted}` : formatted;
}

export function getShopProductHref(slug: string): string {
	return `${shopBasePath}/${slug}/`;
}

export function getProductBySlug(slug: string): ShopProduct | undefined {
	return shopProducts.find((product) => product.slug === slug);
}

export function getRelatedProducts(slug: string, limit = 3): ShopProduct[] {
	return shopProducts.filter((product) => product.slug !== slug).slice(0, limit);
}

export function getProductDetailLines(description: string): string[] {
	return description
		.split(/(?<=[.!?])\s+/)
		.map((line) => line.trim())
		.filter(Boolean);
}
