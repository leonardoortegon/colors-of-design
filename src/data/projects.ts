export interface ProjectImage {
	src: string;
	alt: string;
	width: number;
	height: number;
	caption: string;
	description: string;
}

export interface Project {
	slug: string;
	name: string;
	location: string;
	scope: string;
	concept: string;
	services: string[];
	year: string;
	imageSrc: string;
	imageAlt: string;
	imageWidth: number;
	imageHeight: number;
	seoTitle: string;
	seoDescription: string;
	challenge: string;
	approach: string;
	outcome: string;
	materials: string[];
	gallery: ProjectImage[];
}

export const projects: Project[] = [
	{
		slug: 'placeres',
		name: 'Placeres',
		location: 'Miami, FL',
		scope: 'Full Residence · Interior Design & Furnishings',
		concept:
			'A living room composed in warm neutrals, layered textures, and quiet symmetry—designed to feel collected, calm, and unmistakably residential.',
		services: ['Full-Service Interior Design', 'Furnishings & Styling'],
		year: '2024',
		imageSrc: '/placeres/placeres-living-room-01.avif',
		imageAlt:
			'Placeres living room interior with warm neutral palette, layered furnishings, and natural light by Colors of Design',
		imageWidth: 2000,
		imageHeight: 1334,
		seoTitle: 'Placeres Interior Design | Colors of Design Group',
		seoDescription:
			'Interior design for Placeres, a Miami residence—warm neutrals, layered furnishings, and a living room designed for ease and everyday gathering by Colors of Design Group.',
		challenge:
			'The living room needed to feel complete without becoming formal. The clients wanted a space that could hold daily life and occasional entertaining, with furnishings and finishes that read as intentional rather than staged.',
		approach:
			'Colors of Design built the room around a restrained palette, proportional seating, and lighting that softens the architecture. Textiles, art, and accent pieces were selected to add depth while keeping the overall atmosphere calm and cohesive.',
		outcome:
			'The finished living room feels settled and personal—a room that supports conversation, quiet evenings, and the slower rhythm of home.',
		materials: ['Warm neutrals', 'Layered textiles', 'Tailored upholstery', 'Sculptural lighting', 'Curated accents'],
		gallery: [
			{
				src: '/placeres/placeres-living-room-01.avif',
				alt: 'Placeres living room with warm neutral interior design by Colors of Design Group',
				width: 2000,
				height: 1334,
				caption: 'Living room',
				description:
					'Warm neutrals, layered textures, and proportional seating arranged for everyday ease.',
			},
			{
				src: '/placeres/placeres-living-room-02.avif',
				alt: 'Placeres living room seating area with layered furnishings and natural light',
				width: 2000,
				height: 1340,
				caption: 'Seating area',
				description:
					'Upholstery, art, and accent pieces composed to soften the architecture and anchor the room.',
			},
			{
				src: '/placeres/placeres-living-room-03.avif',
				alt: 'Placeres living room with curated furnishings and a warm neutral palette',
				width: 2000,
				height: 1334,
				caption: 'Living room',
				description:
					'A collected arrangement of furniture and finishes designed to feel calm and residential.',
			},
			{
				src: '/placeres/placeres-living-room-04.avif',
				alt: 'Placeres living room interior with natural light and tailored upholstery',
				width: 2000,
				height: 1334,
				caption: 'Gathering space',
				description:
					'Seating and surfaces planned for conversation, with materials chosen for warmth and longevity.',
			},
			{
				src: '/placeres/placeres-living-room-06.avif',
				alt: 'Placeres living room view with layered textiles and sculptural lighting',
				width: 2000,
				height: 1334,
				caption: 'Main room',
				description:
					'Lighting, textiles, and proportion work together to settle the architecture into a lived-in room.',
			},
			{
				src: '/placeres/placeres-living-room-07.avif',
				alt: 'Placeres living room composition with art and neutral furnishings',
				width: 2000,
				height: 1334,
				caption: 'Art & furnishings',
				description:
					'Art and objects placed to give the room focus without disrupting the overall quiet palette.',
			},
			{
				src: '/placeres/placeres-living-room-08.avif',
				alt: 'Placeres living room detail with warm wood tones and soft neutral upholstery',
				width: 2000,
				height: 1334,
				caption: 'Material detail',
				description:
					'Wood, stone, and textile finishes layered to add depth while keeping the atmosphere restrained.',
			},
			{
				src: '/placeres/placeres-living-room-09.avif',
				alt: 'Placeres living room with expansive seating and natural Miami light',
				width: 2000,
				height: 1334,
				caption: 'Living area',
				description:
					'An open composition that balances comfort, symmetry, and the room’s natural daylight.',
			},
			{
				src: '/placeres/placeres-living-room-10.avif',
				alt: 'Placeres living room vignette with styled accents and neutral tones',
				width: 2000,
				height: 1334,
				caption: 'Styling',
				description:
					'Accent pieces and styling details that complete the room with a personal, collected feel.',
			},
			{
				src: '/placeres/placeres-living-room-11.avif',
				alt: 'Placeres living room corner with tailored furniture and soft contrast',
				width: 2000,
				height: 1334,
				caption: 'Corner detail',
				description:
					'A quieter moment in the room, shaped by proportion, texture, and considered placement.',
			},
			{
				src: '/placeres/placeres-living-room-12.avif',
				alt: 'Placeres living room furnishing detail with layered neutral textures',
				width: 2000,
				height: 1334,
				caption: 'Furnishings',
				description:
					'Furniture selections chosen for comfort, scale, and harmony with the architecture.',
			},
			{
				src: '/placeres/placeres-living-room-15.avif',
				alt: 'Placeres living room view with balanced seating and warm interior tones',
				width: 2000,
				height: 1334,
				caption: 'Room view',
				description:
					'A wider view of the living room showing circulation, seating, and the project’s tonal range.',
			},
			{
				src: '/placeres/placeres-living-room-16.avif',
				alt: 'Placeres living room vertical view with high ceilings and layered interior design',
				width: 2000,
				height: 2999,
				caption: 'Architecture',
				description:
					'Vertical volume, beams, and furnishings composed to honor the scale of the space.',
			},
			{
				src: '/placeres/placeres-living-room-17.avif',
				alt: 'Placeres living room with refined seating arrangement and natural materials',
				width: 2000,
				height: 1334,
				caption: 'Seating plan',
				description:
					'Seating grouped to support both daily use and entertaining without losing visual clarity.',
			},
			{
				src: '/placeres/placeres-living-room-19.avif',
				alt: 'Placeres living room interior with dramatic height and curated furnishings',
				width: 2000,
				height: 2999,
				caption: 'Volume & light',
				description:
					'Height and daylight become part of the composition, framed by furnishings and finish selections.',
			},
			{
				src: '/placeres/placeres-living-room-21.avif',
				alt: 'Placeres living room tall view with art, lighting, and neutral palette',
				width: 2000,
				height: 2999,
				caption: 'Full room',
				description:
					'A full portrait of the room’s architecture, art, and furnishings working as one composition.',
			},
			{
				src: '/placeres/placeres-living-room-23.avif',
				alt: 'Placeres living room elevated view with layered interior design details',
				width: 2000,
				height: 2999,
				caption: 'Interior overview',
				description:
					'An elevated perspective on the room’s layers—from structure and lighting to the final styling.',
			},
		],
	},
	{
		slug: 'solaris',
		name: 'Solaris',
		location: 'Miami, FL',
		scope: 'Full Residence · Interior Design & Furnishings',
		concept:
			'A sun-washed residence composed in light, texture, and ease—from open living and dining to private suites and outdoor rooms designed for South Florida living.',
		services: ['Full-Service Interior Design', 'Furnishings & Styling'],
		year: '2024',
		imageSrc: '/solaris/solaris-living-room-01.avif',
		imageAlt:
			'Solaris living room interior with natural light, layered furnishings, and warm neutral tones by Colors of Design',
		imageWidth: 2000,
		imageHeight: 2800,
		seoTitle: 'Solaris Interior Design | Colors of Design Group',
		seoDescription:
			'Interior design for Solaris, a Miami residence—living, dining, kitchen, suites, and outdoor spaces composed in light, texture, and everyday ease by Colors of Design Group.',
		challenge:
			'The residence needed to feel luminous and relaxed without losing structure. The clients wanted open gathering spaces, private rooms with real retreat, and a material palette that could hold up to Miami light, humidity, and indoor-outdoor living.',
		approach:
			'Colors of Design planned the home room by room—living and dining for connection, kitchen for daily rhythm, bedrooms and baths for quiet, and outdoor areas as extensions of the interior. Furnishings, finishes, and lighting were specified as one composition so each space reads clearly while sharing a cohesive language.',
		outcome:
			'Solaris now moves easily from morning light in the kitchen to evening gatherings in the living room and out to the terrace—a home that feels bright, composed, and unmistakably personal.',
		materials: [
			'Natural stone',
			'Warm wood tones',
			'Layered textiles',
			'Tailored upholstery',
			'Indoor-outdoor furnishings',
		],
		gallery: [
			{
				src: '/solaris/solaris-living-room-01.avif',
				alt: 'Solaris living room with natural light and layered interior design by Colors of Design Group',
				width: 2000,
				height: 2800,
				caption: 'Living room',
				description:
					'An open living room shaped by daylight, proportional seating, and a calm neutral palette.',
			},
			{
				src: '/solaris/solaris-living-room-02.avif',
				alt: 'Solaris living room view with curated furnishings and warm interior tones',
				width: 2000,
				height: 2999,
				caption: 'Gathering space',
				description:
					'Furnishings and finishes composed to soften the architecture and anchor the room.',
			},
			{
				src: '/solaris/solaris-dinning-room-01.avif',
				alt: 'Solaris dining room with tailored furnishings and natural Miami light',
				width: 2000,
				height: 2999,
				caption: 'Dining room',
				description:
					'A dining room planned for everyday meals and hosting, with materials chosen for warmth and longevity.',
			},
			{
				src: '/solaris/solaris-dinning-room-02.avif',
				alt: 'Solaris dining area with layered lighting and refined table setting',
				width: 2000,
				height: 1333,
				caption: 'Dining',
				description:
					'Lighting, proportion, and styling details that complete the room without formality.',
			},
			{
				src: '/solaris/solaris-kitchen-01.avif',
				alt: 'Solaris kitchen with stone surfaces and warm wood interior design',
				width: 2000,
				height: 1332,
				caption: 'Kitchen',
				description:
					'Stone, wood, and tailored cabinetry arranged for daily use and visual clarity.',
			},
			{
				src: '/solaris/solaris-kitchen-02.avif',
				alt: 'Solaris kitchen detail with layered materials and natural light',
				width: 2000,
				height: 3003,
				caption: 'Kitchen detail',
				description:
					'Vertical volume and finish selections that honor the scale of the space.',
			},
			{
				src: '/solaris/solaris-bedroom-01.avif',
				alt: 'Solaris primary bedroom with layered textiles and soft neutral palette',
				width: 2000,
				height: 1334,
				caption: 'Primary suite',
				description:
					'A restful bedroom composed in texture, proportion, and quiet contrast.',
			},
			{
				src: '/solaris/solaris-bedroom-02.avif',
				alt: 'Solaris bedroom with tailored furnishings and warm interior tones',
				width: 2000,
				height: 2800,
				caption: 'Bedroom',
				description:
					'Upholstery and finishes selected to create retreat without losing connection to the home.',
			},
			{
				src: '/solaris/solaris-bedroom-03.avif',
				alt: 'Solaris bedroom interior with natural light and curated furnishings',
				width: 2000,
				height: 2999,
				caption: 'Guest suite',
				description:
					'A private room shaped by daylight, soft materials, and considered placement.',
			},
			{
				src: '/solaris/solaris-bedroom-04.avif',
				alt: 'Solaris bedroom view with layered bedding and neutral interior design',
				width: 2000,
				height: 1334,
				caption: 'Bedroom',
				description:
					'Textiles and furnishings layered to add depth while keeping the atmosphere calm.',
			},
			{
				src: '/solaris/solaris-bathroom-01.avif',
				alt: 'Solaris primary bathroom with stone surfaces and refined interior design',
				width: 2000,
				height: 3001,
				caption: 'Primary bath',
				description:
					'Stone, lighting, and millwork composed for daily ritual and lasting material quality.',
			},
			{
				src: '/solaris/solaris-outdoor-01.avif',
				alt: 'Solaris outdoor living area with furnishings designed for South Florida living',
				width: 2000,
				height: 2800,
				caption: 'Outdoor living',
				description:
					'An outdoor room that extends the interior language—comfortable, durable, and open to the light.',
			},
		],
	},
	{
		slug: 'baby-room',
		name: 'Baby Room',
		location: 'Miami, FL',
		scope: 'Nursery · Interior Design & Furnishings',
		concept:
			'A nursery composed in soft neutrals, gentle texture, and thoughtful details—a calm room designed to grow with a family.',
		services: ['Full-Service Interior Design', 'Furnishings & Styling'],
		year: '2024',
		imageSrc: '/baby-room/baby-room.avif',
		imageAlt:
			'Baby room nursery interior with soft neutral palette and tailored furnishings by Colors of Design',
		imageWidth: 1920,
		imageHeight: 1080,
		seoTitle: 'Baby Room Interior Design | Colors of Design Group',
		seoDescription:
			'Nursery interior design by Colors of Design Group—a calm, layered baby room with soft neutrals, tailored furnishings, and details designed to grow with the family.',
		challenge:
			'The nursery needed to feel serene and complete without becoming overly themed. The clients wanted a room that would work from early months onward, with furnishings and finishes that could adapt as needs changed.',
		approach:
			'Colors of Design built the room around a restrained palette, comfortable proportions, and storage and styling that keep daily life simple. Textiles, lighting, and accent pieces add warmth while maintaining a quiet, restful atmosphere.',
		outcome:
			'The finished nursery feels soft, personal, and ready for everyday use—a room that supports rest, routine, and the slower rhythm of home.',
		materials: ['Soft neutrals', 'Layered textiles', 'Tailored furnishings', 'Gentle lighting', 'Curated accents'],
		gallery: [
			{
				src: '/baby-room/baby-room.avif',
				alt: 'Baby room nursery with soft neutral interior design by Colors of Design Group',
				width: 1920,
				height: 1080,
				caption: 'Nursery',
				description:
					'A calm nursery shaped by soft neutrals, gentle texture, and furnishings chosen for comfort and longevity.',
			},
		],
	},
	{
		slug: 'asheville',
		name: 'Asheville',
		location: 'Asheville, NC',
		scope: 'Full Residence · Interior Design & Furnishings',
		concept:
			'A mountain residence shaped by warm materials, clear circulation, and rooms that feel grounded— from the entry and kitchen to private suites and everyday spaces.',
		services: ['Full-Service Interior Design', 'Furnishings & Styling'],
		year: '2024',
		imageSrc: '/asheville/asheville-kitchen-01.avif',
		imageAlt:
			'Asheville kitchen interior with warm wood tones, stone surfaces, and tailored design by Colors of Design',
		imageWidth: 2000,
		imageHeight: 1331,
		seoTitle: 'Asheville Interior Design | Colors of Design Group',
		seoDescription:
			'Interior design for an Asheville residence—kitchen, dining, halls, bedroom, baths, and laundry composed in warm materials and everyday ease by Colors of Design Group.',
		challenge:
			'The home needed to feel welcoming and practical without losing refinement. The clients wanted open circulation, kitchens and baths that support daily life, and a material palette suited to the mountain setting.',
		approach:
			'Colors of Design planned the residence room by room—entry halls for first impressions, kitchen and dining for gathering, private suites for retreat, and utility spaces that work as hard as they look. Finishes, furnishings, and lighting were specified as one composition across the home.',
		outcome:
			'Asheville now reads as a cohesive residence—warm, composed, and shaped for the way the family actually lives from morning routines to quiet evenings.',
		materials: [
			'Warm wood tones',
			'Natural stone',
			'Layered textiles',
			'Tailored millwork',
			'Architectural lighting',
		],
		gallery: [
			{
				src: '/asheville/asheville-hall-01.avif',
				alt: 'Asheville entry hall with warm interior design and natural materials by Colors of Design Group',
				width: 2000,
				height: 1331,
				caption: 'Entry hall',
				description:
					'A welcoming entry shaped by proportion, warm materials, and clear sightlines into the home.',
			},
			{
				src: '/asheville/asheville-hall-02.avif',
				alt: 'Asheville hall interior with layered finishes and tailored furnishings',
				width: 2000,
				height: 1331,
				caption: 'Hall',
				description:
					'Circulation and finish selections that connect public rooms with a consistent, grounded palette.',
			},
			{
				src: '/asheville/asheville-kitchen-01.avif',
				alt: 'Asheville kitchen with stone surfaces and warm wood interior design',
				width: 2000,
				height: 1331,
				caption: 'Kitchen',
				description:
					'Stone, wood, and tailored cabinetry arranged for daily use and visual clarity.',
			},
			{
				src: '/asheville/asheville-kitchen-02.avif',
				alt: 'Asheville kitchen detail with layered materials and refined interior design',
				width: 2000,
				height: 1331,
				caption: 'Kitchen detail',
				description:
					'Lighting and material layers that complete the kitchen without formality.',
			},
			{
				src: '/asheville/asheville-dinning-room-01.avif',
				alt: 'Asheville dining room with tailored furnishings and warm interior tones',
				width: 2000,
				height: 1331,
				caption: 'Dining room',
				description:
					'A dining room planned for everyday meals and hosting, with furnishings chosen for warmth and longevity.',
			},
			{
				src: '/asheville/asheville-bedroom-01.avif',
				alt: 'Asheville bedroom with layered textiles and soft neutral palette',
				width: 2000,
				height: 1331,
				caption: 'Primary suite',
				description:
					'A restful bedroom composed in texture, proportion, and quiet contrast.',
			},
			{
				src: '/asheville/asheville-bathroom-01.avif',
				alt: 'Asheville bathroom with stone surfaces and refined interior design',
				width: 2000,
				height: 1331,
				caption: 'Primary bath',
				description:
					'Stone, lighting, and millwork composed for daily ritual and lasting material quality.',
			},
			{
				src: '/asheville/asheville-bathroom-02.avif',
				alt: 'Asheville bathroom interior with warm tones and tailored finishes',
				width: 2000,
				height: 1331,
				caption: 'Bath',
				description:
					'Finishes and fixtures selected to feel calm, durable, and aligned with the home.',
			},
			{
				src: '/asheville/asheville-bathroom-03.avif',
				alt: 'Asheville bathroom detail with layered materials and natural light',
				width: 2000,
				height: 1331,
				caption: 'Bath detail',
				description:
					'Material and lighting details that soften the architecture and support daily use.',
			},
			{
				src: '/asheville/asheville-bathroom-04.avif',
				alt: 'Asheville bathroom vignette with refined interior design details',
				width: 677,
				height: 990,
				caption: 'Bath vignette',
				description:
					'A closer view of finish selections, fixtures, and styling within the bath.',
			},
			{
				src: '/asheville/asheville-laundry-01.avif',
				alt: 'Asheville laundry room with tailored cabinetry and practical interior design',
				width: 2000,
				height: 1331,
				caption: 'Laundry',
				description:
					'A utility room designed with the same care as the rest of the home—functional, durable, and composed.',
			},
		],
	},
	{
		slug: 'casa-del-mar',
		name: 'Casa del Mar',
		location: 'Miami, FL',
		scope: 'Full Residence · Interior Design & Furnishings',
		concept:
			'A coastal residence composed in light, art, and layered furnishings—from welcoming halls and living rooms to curated objects and an indoor balcony open to the sea air.',
		services: ['Full-Service Interior Design', 'Furnishings & Styling', 'Art Curation'],
		year: '2024',
		imageSrc: '/casa-del-mar/living-room-01.avif',
		imageAlt:
			'Casa del Mar living room with coastal interior design, layered furnishings, and natural light by Colors of Design',
		imageWidth: 2000,
		imageHeight: 1334,
		seoTitle: 'Casa del Mar Interior Design | Colors of Design Group',
		seoDescription:
			'Interior design for Casa del Mar, a Miami residence—living rooms, halls, art, and an indoor balcony composed in light, texture, and coastal ease by Colors of Design Group.',
		challenge:
			'The residence needed to honor its coastal setting without leaning on cliché. The clients wanted open living spaces, art and objects with real presence, and interiors that could hold daily life and entertaining with equal ease.',
		approach:
			'Colors of Design planned the home around circulation, proportion, and a restrained palette that lets light and views lead. Furnishings, sculpture, and paintings were curated as part of one composition—rooms shaped for gathering, with quieter moments in halls and alcoves.',
		outcome:
			'Casa del Mar now feels luminous and personal—a home where art, furnishings, and architecture work together, and the indoor balcony extends living toward the water.',
		materials: [
			'Coastal neutrals',
			'Natural stone',
			'Layered textiles',
			'Curated art',
			'Sculptural accents',
		],
		gallery: [
			{
				src: '/casa-del-mar/hall-01.avif',
				alt: 'Casa del Mar entry hall with coastal interior design by Colors of Design Group',
				width: 2000,
				height: 2999,
				caption: 'Entry hall',
				description:
					'A welcoming entry shaped by proportion, warm materials, and art that sets the tone for the home.',
			},
			{
				src: '/casa-del-mar/hall-02.avif',
				alt: 'Casa del Mar hall interior with curated furnishings and natural light',
				width: 900,
				height: 1350,
				caption: 'Hall',
				description:
					'Circulation and finish selections that connect living spaces with a consistent coastal palette.',
			},
			{
				src: '/casa-del-mar/living-room-01.avif',
				alt: 'Casa del Mar living room with layered interior design and coastal tones',
				width: 2000,
				height: 1334,
				caption: 'Living room',
				description:
					'An open living room shaped by daylight, proportional seating, and a calm neutral palette.',
			},
			{
				src: '/casa-del-mar/living-room-02.avif',
				alt: 'Casa del Mar living room seating area with tailored furnishings',
				width: 2000,
				height: 1334,
				caption: 'Seating area',
				description:
					'Upholstery, art, and accent pieces composed to soften the architecture and anchor the room.',
			},
			{
				src: '/casa-del-mar/living-room-03.avif',
				alt: 'Casa del Mar living room with curated furnishings and natural Miami light',
				width: 2000,
				height: 1334,
				caption: 'Living room',
				description:
					'A collected arrangement of furniture and finishes designed to feel calm and residential.',
			},
			{
				src: '/casa-del-mar/living-room-04.avif',
				alt: 'Casa del Mar living room vignette with layered coastal interior design',
				width: 1350,
				height: 900,
				caption: 'Gathering space',
				description:
					'Seating and surfaces planned for conversation, with materials chosen for warmth and longevity.',
			},
			{
				src: '/casa-del-mar/living-room-05.avif',
				alt: 'Casa del Mar living room detail with art and neutral furnishings',
				width: 1350,
				height: 900,
				caption: 'Living detail',
				description:
					'Art and objects placed to give the room focus without disrupting the overall quiet palette.',
			},
			{
				src: '/casa-del-mar/indoor-balcony-01.avif',
				alt: 'Casa del Mar indoor balcony with coastal views and refined furnishings',
				width: 1350,
				height: 900,
				caption: 'Indoor balcony',
				description:
					'An indoor balcony that extends living toward the water—comfortable, open, and composed.',
			},
			{
				src: '/casa-del-mar/painting-01.avif',
				alt: 'Curated painting in Casa del Mar interior design by Colors of Design Group',
				width: 900,
				height: 1350,
				caption: 'Art',
				description:
					'A curated painting placed to give the room focus and depth within the coastal palette.',
			},
			{
				src: '/casa-del-mar/painting-02.avif',
				alt: 'Casa del Mar art placement with layered interior design and natural light',
				width: 2000,
				height: 2999,
				caption: 'Art & light',
				description:
					'Art and architecture composed to honor vertical volume and the home’s natural daylight.',
			},
			{
				src: '/casa-del-mar/sculpture-01.avif',
				alt: 'Sculptural accent in Casa del Mar residence by Colors of Design Group',
				width: 2000,
				height: 2999,
				caption: 'Sculpture',
				description:
					'A sculptural accent that completes the room with presence and personal character.',
			},
		],
	},
	{
		slug: 'delray-beach-interior-design',
		name: 'Delray Beach',
		location: 'Delray Beach, FL',
		scope: 'Full Residence · Interior Architecture & Furnishings',
		concept:
			'A coastal retreat layered in limestone, bleached oak, and quiet tonal contrasts that soften the transition from sea to shelter.',
		services: ['Full-Service Interior Design', 'Furnishings & Styling'],
		year: '2024',
		imageSrc: '/Delray-Beach-Interior-Design-Miami.jpg',
		imageAlt:
			'Delray Beach living room with limestone floors, bleached oak furnishings, and coastal natural light by Colors of Design',
		imageWidth: 1273,
		imageHeight: 707,
		seoTitle: 'Delray Beach Interior Design | Colors of Design Group',
		seoDescription:
			'A full-residence interior design project in Delray Beach, Florida—coastal materials, custom furnishings, and rooms planned for indoor-outdoor living by Colors of Design Group.',
		challenge:
			'This Delray Beach residence needed to feel open to the Atlantic light without reading as a typical beach house. The clients asked for rooms that could host family gatherings, then settle into quiet evenings, with a material palette that would age well in South Florida humidity and sun.',
		approach:
			'Colors of Design planned the interior architecture around circulation from the entry to the garden and pool. Limestone, bleached oak, and a restrained tonal range keep the rooms cool and continuous. Custom furnishings, layered lighting, and considered art placement give each space a personal cadence rather than a showroom finish.',
		outcome:
			'The completed home reads as a coastal retreat with architectural clarity: living, dining, and private rooms share one language of texture and proportion, while still supporting the way the family actually lives day to day.',
		materials: ['Limestone', 'Bleached oak', 'Linen textiles', 'Custom millwork', 'Layered lighting'],
		gallery: [
			{
				src: '/Delray-Beach-Interior-Design-Miami.jpg',
				alt: 'Primary living area in a Delray Beach interior design project with limestone and oak',
				width: 1273,
				height: 707,
				caption: 'Living',
				description:
					'Limestone and bleached oak set the tone for a light-filled coastal living room.',
			},
			{
				src: '/furnishings-and-styling.jpg',
				alt: 'Styled seating and textiles in a South Florida residence by Colors of Design',
				width: 1200,
				height: 1200,
				caption: 'Furnishings',
				description:
					'Tailored upholstery and textiles selected to soften the architecture and add depth.',
			},
			{
				src: '/living-room-01.jpg',
				alt: 'Sitting area with curated furniture and natural materials in Delray Beach',
				width: 1600,
				height: 1000,
				caption: 'Gathering',
				description:
					'A sitting area composed for conversation, with natural materials and quiet contrast.',
			},
		],
	},
	{
		slug: 'coral-gables-estate',
		name: 'Coral Gables Estate',
		location: 'Coral Gables, FL',
		scope: 'Full Residence · Interior Architecture & Furnishings',
		year: '2023',
		services: ['Full-Service Interior Design', 'Renovation & Interior Architecture'],
		concept:
			'Classical proportions meet contemporary ease through custom millwork, curated art, and rooms designed for both gathering and retreat.',
		imageSrc: '/builder.jpg',
		imageAlt:
			'Coral Gables estate interior with custom millwork, classical proportions, and contemporary furnishings by Colors of Design',
		imageWidth: 1600,
		imageHeight: 1000,
		seoTitle: 'Coral Gables Estate Interior Design | Colors of Design Group',
		seoDescription:
			'Interior architecture and furnishings for a Coral Gables estate—classical proportions, custom millwork, and rooms designed for gathering and retreat by Colors of Design Group.',
		challenge:
			'The estate’s architecture already carried strong classical bones. The work was to honor those proportions while making the interiors feel current, livable, and suited to a family that entertains often without sacrificing private rooms for rest.',
		approach:
			'The studio developed a full interior architecture package: millwork, lighting, finishes, and furnishings specified as one composition. Art and custom pieces were placed to give each room a focal point, while circulation and sightlines were clarified so public and private areas feel distinct.',
		outcome:
			'The residence now holds both formality and ease. Gathering rooms feel composed for entertaining; quieter interiors offer retreat. Materials and millwork read as original to the house rather than applied after the fact.',
		materials: ['Custom millwork', 'Natural stone', 'Curated art', 'Tailored upholstery', 'Architectural lighting'],
		gallery: [
			{
				src: '/builder.jpg',
				alt: 'Coral Gables estate interior architecture with millwork and composed furnishings',
				width: 1600,
				height: 1000,
				caption: 'Residence',
				description:
					'Classical proportions framed by custom millwork and furnishings composed for gathering.',
			},
			{
				src: '/full-service-interior-design.jpg',
				alt: 'Full-service interior design detailing in a Coral Gables home',
				width: 1200,
				height: 1200,
				caption: 'Detail',
				description:
					'Material and finish selections carried through millwork, stone, and architectural lighting.',
			},
			{
				src: '/hero.jpg',
				alt: 'Refined residential interior in Coral Gables by Colors of Design Group',
				width: 1500,
				height: 1500,
				caption: 'Living',
				description:
					'A living room balanced between formality and ease, with art and upholstery in dialogue.',
			},
		],
	},
	{
		slug: 'brickell-penthouse',
		name: 'Brickell Penthouse',
		location: 'Miami, FL',
		scope: 'Penthouse · Interior Design & Art Curation',
		year: '2024',
		services: ['Full-Service Interior Design', 'Furnishings & Styling'],
		concept:
			'Elevated city living expressed through sculptural lighting, rich textures, and a palette drawn from the skyline at dusk.',
		imageSrc: '/sunny-isles.jpg',
		imageAlt:
			'Brickell penthouse primary suite with sculptural lighting, layered textures, and city views, interior design by Colors of Design',
		imageWidth: 2500,
		imageHeight: 1500,
		seoTitle: 'Brickell Penthouse Interior Design | Colors of Design Group',
		seoDescription:
			'Interior design and art curation for a Brickell penthouse in Miami—sculptural lighting, rich textures, and a skyline-inspired palette by Colors of Design Group.',
		challenge:
			'A Brickell penthouse lives in vertical light and long views. The clients wanted the interiors to feel as considered as the skyline—warm enough for daily life, precise enough for a high-floor Miami residence, with art and lighting doing real work rather than sitting as afterthoughts.',
		approach:
			'The plan concentrated on a dusk palette, tactile materials, and sculptural lighting that holds the rooms after dark. Furnishings were scaled to the volume of the penthouse, and art was curated to give each wall a clear purpose without competing with the view.',
		outcome:
			'The penthouse now feels composed from the entry through the primary suite: city living with a residential warmth, and a consistent language of texture, light, and proportion throughout.',
		materials: ['Sculptural lighting', 'Rich textiles', 'Stone surfaces', 'Custom furnishings', 'Curated art'],
		gallery: [
			{
				src: '/sunny-isles.jpg',
				alt: 'Primary suite in a Brickell Miami penthouse with layered lighting and textiles',
				width: 2500,
				height: 1500,
				caption: 'Primary suite',
				description:
					'Layered lighting and rich textiles shape a primary suite drawn from the skyline at dusk.',
			},
			{
				src: '/hero.jpg',
				alt: 'Luxury Miami penthouse interior with a dusk-inspired palette',
				width: 1500,
				height: 1500,
				caption: 'Living',
				description:
					'City views paired with tactile materials and furnishings scaled to the volume of the room.',
			},
			{
				src: '/furnishings-and-styling.jpg',
				alt: 'Art and furnishings styled for a Brickell penthouse interior',
				width: 1200,
				height: 1200,
				caption: 'Styling',
				description:
					'Art, objects, and finishing layers that complete the room without competing with the view.',
			},
		],
	},
];

export function getProjectBySlug(slug: string): Project | undefined {
	return projects.find((project) => project.slug === slug);
}

export function getRelatedProjects(slug: string): Project[] {
	return projects.filter((project) => project.slug !== slug);
}
