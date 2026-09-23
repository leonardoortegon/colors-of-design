export interface AwardRecognition {
	eyebrow: string;
	heading: string;
	image?: {
		src: string;
		alt: string;
		width?: number;
		height?: number;
	};
	stackedImage?: {
		src: string;
		alt: string;
		width?: number;
		height?: number;
	};
	imageCaption?: string;
	logos?: {
		src: string;
		alt: string;
	}[];
	logosPosition?: 'media' | 'copy';
	lead?: string;
	paragraphs: string[];
	badges?: {
		src: string;
		alt: string;
	}[];
}

export const awardsIntro = {
	heading: 'Awards & Recognition',
	subheading: 'Recognized for Excellence in Design',
	description:
		'Colors of Design Group has been honored by leading industry organizations, publications, and design communities for excellence in interior design and client service. Each recognition reflects our commitment to thoughtful design, enduring quality, and a highly personalized experience for every client.',
};

export const awards: AwardRecognition[] = [
	{
		eyebrow: 'Industry recognition',
		heading: 'Luxury Lifestyle Awards',
		image: {
			src: '/luxury-lifestyle.jpg',
			alt: 'Luxury Lifestyle Awards 2023 recognition for Colors of Design Group',
			width: 798,
			height: 1024,
		},
		imageCaption: 'Luxury Lifestyle Awards · 2023',
		paragraphs: [
			'Colors of Design was recognized at the Luxury Lifestyle Awards 2023, celebrating studios that combine exceptional craftsmanship with a deeply personal approach to residential design.',
			'The honor reflects our commitment to creating harmonious, timeless interiors throughout Miami and beyond, spaces shaped around how our clients live, gather, and unwind.',
		],
	},
	{
		eyebrow: 'Local press',
		heading: 'Design Minds',
		image: {
			src: '/design-minds.jpg',
			alt: 'Design Minds 2023 event invitation featuring Colors of Design Group',
			width: 734,
			height: 1024,
		},
		imageCaption: 'Design Minds · Miami',
		paragraphs: [
			'Our studio was invited to Design Minds 2023, a gathering that brings together Miami’s design community to share ideas, inspiration, and new perspectives on the home.',
			'The event was presented by Magazine Key Biscayne and Magazine Brickell, publications at the center of South Florida’s architecture, interiors, and lifestyle culture.',
		],
	},
	{
		eyebrow: 'Key Biscayne Magazine',
		heading: 'Margaret Van Puffelen',
		image: {
			src: '/margaret-magazine.avif',
			alt: 'Margaret Van Puffelen featured in Key Biscayne Magazine, photo by Carlos Toledo',
			width: 1320,
			height: 1668,
		},
		imageCaption: 'Photo by Carlos Toledo',
		logos: [{ src: '/key-biscayne-logo.svg', alt: 'Magazine Key Biscayne' }],
		paragraphs: [
			'When she first set eyes on the Italian Renaissance estate on Pine Tree Drive in Miami Beach that would become her first design project, Margaret Van Puffelen of Colors of Design knew her future in the field was bright. Born in Chile, she studied decorative arts and earned a degree in interior design & architecture, completing certifications for ADA Interior Design, Universal Design Techniques and Feng Shui.',
			'“I’m inspired by form and space planning and how architecture and design impact the lives of people,” she says. “My aesthetics are modern and contemporary with pops of colors, ethnic touches, luxury finishes, fine textures and all that is inspired.” ColorsofDesign.com.',
		],
	},
	{
		eyebrow: 'Decor Book',
		heading: 'Colors of Design',
		stackedImage: {
			src: '/decor-01.avif',
			alt: 'Margaret Van Puffelen portrait from Decor Book',
			width: 1086,
			height: 1335,
		},
		image: {
			src: '/decor-01.jpg',
			alt: 'Decor Book spread featuring Colors of Design Group',
			width: 1448,
			height: 1086,
		},
		imageCaption: 'Decor Book · page 312',
		lead: 'Margaret Van Puffelen',
		paragraphs: [
			'With a vision grounded in organic modernism and refined naturalism, Colors of Design transformed this mid-century apartment—originally designed by architect Morris Lapidus—into an eco-chic retreat in the heart of Miami Beach. The project blends understated luxury with sustainability, offering its South American owners a serene escape from their fast-paced lives.',
			'Led by a multidisciplinary team, the firm approached this full remodel with an emphasis on functionality, balance, and timeless elegance. Neutral palettes, layered textures, and custom-crafted furnishings came together to evoke a sense of calm and coastal sophistication. A standout feature: the sculptural fireplace, which anchors the living area while seamlessly integrating lighting, storage, and home technology.',
			'Known for designing homes from concept to completion, Colors of Design brings an architectural mindset to their interior work, with strong attention to spatial planning, natural light, and material longevity. This project reflects not only the client’s aesthetic but the firm’s commitment to spaces that feel personal, grounded, and enduring.',
		],
	},
	{
		eyebrow: 'Client choice',
		heading: 'Best of Houzz',
		badges: [
			{ src: '/best-of-houzz-2020.svg', alt: 'Best of Houzz 2020 Service award badge' },
			{ src: '/best-of-houzz-2022.svg', alt: 'Best of Houzz 2022 Service award badge' },
			{ src: '/best-of-houzz-2023.svg', alt: 'Best of Houzz 2023 Service award badge' },
			{ src: '/best-of-houzz-2024.svg', alt: 'Best of Houzz 2024 Service award badge' },
			{ src: '/best-of-houzz-2025.svg', alt: 'Best of Houzz 2025 Service award badge' },
			{ src: '/software-pro.svg', alt: 'Houzz Software Pro badge' },
		],
		lead:
			'The annual people’s choice award recognizes professionals among the Houzz community who stand out in both talent and customer service.',
		paragraphs: [
			'Colors of Design Group has been consistently recognized for excellence in interior design and client satisfaction. The studio has received the Best of Houzz – Service award for five years (2020, 2022–2025), reflecting outstanding customer feedback.',
			'Additionally, it holds multiple Houzz badges for professional tools, community recommendations, and project saves.',
		],
	},
	{
		eyebrow: 'Professional affiliation',
		heading: 'American Society of Interior Designers',
		badges: [{ src: '/ASID.svg', alt: 'American Society of Interior Designers (ASID) member badge' }],
		paragraphs: [
			'Colors of Design is also affiliated with the American Society of Interior Designers (ASID), underscoring its commitment to industry standards and design excellence.',
		],
	},
];
