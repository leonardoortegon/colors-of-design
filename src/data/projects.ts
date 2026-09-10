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
		slug: 'petretta',
		name: 'Petretta',
		location: 'Miami, FL',
		scope: 'Full Residence · Interior Design & Furnishings',
		concept:
			'A Miami residence composed room by room, living areas, kitchen, and dining shaped by balanced proportions, warm materials, and a palette that feels calm, collected, and lived-in.',
		services: ['Full-Service Interior Design', 'Furnishings & Styling'],
		year: '2024',
		imageSrc: '/petretta/petretta-living-room-01.avif',
		imageAlt:
			'Petretta living room interior with layered furnishings and natural light by Colors of Design Group',
		imageWidth: 900,
		imageHeight: 1350,
		seoTitle: 'Petretta Interior Design | Colors of Design Group',
		seoDescription:
			'Interior design for Petretta, a Miami residence, living room, kitchen, and dining spaces composed with layered furnishings, warm materials, and everyday ease by Colors of Design Group.',
		challenge:
			'The home needed to feel finished across multiple rooms without losing flexibility. The clients wanted spaces that could support daily life and occasional entertaining, with furnishings and finishes that read as intentional rather than staged.',
		approach:
			'Colors of Design developed a cohesive palette and material language carried from the living room through the kitchen and dining areas. Proportional seating, tailored millwork, and lighting were specified to soften the architecture while keeping each room distinct and personal.',
		outcome:
			'The completed residence feels settled and personal, rooms that support conversation, everyday routines, and the slower rhythm of home.',
		materials: [
			'Warm neutrals',
			'Layered textiles',
			'Tailored upholstery',
			'Custom cabinetry',
			'Sculptural lighting',
			'Curated accents',
		],
		gallery: [
			{
				src: '/petretta/petretta-living-room-01.avif',
				alt: 'Petretta living room with layered interior design by Colors of Design Group',
				width: 900,
				height: 1350,
				caption: 'Living room',
				description:
					'Layered furnishings and proportional seating arranged for everyday ease and quiet gathering.',
			},
			{
				src: '/petretta/petretta-kitchen-01.avif',
				alt: 'Petretta kitchen interior with warm materials and tailored design by Colors of Design',
				width: 1350,
				height: 900,
				caption: 'Kitchen',
				description: 'Cabinetry, surfaces, and lighting composed for daily use with a calm, residential tone.',
			},
			{
				src: '/petretta/petretta-kitchen-02.avif',
				alt: 'Petretta kitchen view with custom cabinetry and natural light',
				width: 1350,
				height: 900,
				caption: 'Kitchen',
				description: 'A wider view of the kitchen showing circulation, storage, and the project’s material palette.',
			},
			{
				src: '/petretta/petretta-kitchen-03.avif',
				alt: 'Petretta kitchen composition with warm finishes and considered detailing',
				width: 1350,
				height: 900,
				caption: 'Kitchen detail',
				description: 'Finishes and fixtures selected to keep the room warm, functional, and visually quiet.',
			},
			{
				src: '/petretta/petretta-kitchen-04.avif',
				alt: 'Petretta kitchen interior with layered materials and tailored millwork',
				width: 900,
				height: 1350,
				caption: 'Millwork',
				description: 'Custom cabinetry and surfaces shaped to honor the architecture and support everyday cooking.',
			},
			{
				src: '/petretta/petretta-kitchen-05.avif',
				alt: 'Petretta kitchen cabinetry detail with warm wood tones',
				width: 900,
				height: 1350,
				caption: 'Cabinetry',
				description: 'Millwork and hardware composed for clarity, storage, and a collected residential feel.',
			},
			{
				src: '/petretta/petretta-kitchen-06.avif',
				alt: 'Petretta kitchen storage and finish detail by Colors of Design Group',
				width: 900,
				height: 1350,
				caption: 'Storage',
				description: 'Practical storage and finish selections carried through the kitchen with consistent proportion.',
			},
			{
				src: '/petretta/petretta-kitchen-07.avif',
				alt: 'Petretta kitchen interior with sculptural lighting and warm surfaces',
				width: 900,
				height: 1350,
				caption: 'Kitchen',
				description: 'Lighting and surfaces layered to soften the room and support both task and atmosphere.',
			},
			{
				src: '/petretta/petretta-kitchen-08.avif',
				alt: 'Petretta kitchen view with tailored furnishings and natural materials',
				width: 1350,
				height: 900,
				caption: 'Kitchen view',
				description: 'A composed kitchen vignette balancing function, warmth, and the home’s overall palette.',
			},
			{
				src: '/petretta/petretta-kitchen-09.avif',
				alt: 'Petretta kitchen detail with curated finishes and soft contrast',
				width: 1350,
				height: 900,
				caption: 'Finishes',
				description: 'Material contrasts and detailing that give the kitchen depth without visual noise.',
			},
			{
				src: '/petretta/petretta-table-01.avif',
				alt: 'Petretta dining table styled with layered furnishings and warm neutrals',
				width: 900,
				height: 1350,
				caption: 'Dining',
				description: 'A dining setting composed for gathering, with furnishings scaled to the room’s proportions.',
			},
			{
				src: '/petretta/petretta-table-02.avif',
				alt: 'Petretta dining area with curated table styling and natural light',
				width: 900,
				height: 1350,
				caption: 'Table styling',
				description: 'Objects, textiles, and seating arranged to make the dining area feel personal and complete.',
			},
			{
				src: '/petretta/petretta-cabinet-01.avif',
				alt: 'Petretta custom cabinet detail with warm wood and tailored hardware',
				width: 900,
				height: 1350,
				caption: 'Cabinet detail',
				description: 'Custom storage composed with warm materials and hardware chosen for quiet contrast.',
			},
			{
				src: '/petretta/petretta-cabinet-02.avif',
				alt: 'Petretta built-in cabinetry with layered interior design finishes',
				width: 900,
				height: 1350,
				caption: 'Built-ins',
				description: 'Built-in storage shaped to integrate with the architecture and keep daily life organized.',
			},
			{
				src: '/petretta/petretta-vase-01.avif',
				alt: 'Petretta interior styling detail with sculptural vase and curated accents',
				width: 900,
				height: 1350,
				caption: 'Styling',
				description: 'Accent pieces selected to give each room focus and a collected, residential character.',
			},
			{
				src: '/petretta/petretta-detail-01.avif',
				alt: 'Petretta interior design detail with layered textures and warm neutrals',
				width: 900,
				height: 1350,
				caption: 'Detail',
				description: 'Textiles, surfaces, and objects layered to add depth while keeping the palette restrained.',
			},
			{
				src: '/petretta/petretta-detail-02.avif',
				alt: 'Petretta furnishing detail with soft contrast and tailored materials',
				width: 1350,
				height: 900,
				caption: 'Material detail',
				description: 'A closer view of finishes and furnishings that carry the home’s tonal language.',
			},
			{
				src: '/petretta/petretta-detail-03.avif',
				alt: 'Petretta interior vignette with curated objects and warm lighting',
				width: 1350,
				height: 900,
				caption: 'Vignette',
				description: 'A quieter moment shaped by proportion, texture, and considered placement.',
			},
			{
				src: '/petretta/petretta-detail-04.avif',
				alt: 'Petretta styling detail with sculptural accents and neutral tones',
				width: 900,
				height: 1350,
				caption: 'Accent',
				description: 'Finishing layers that complete each room without disrupting the overall calm palette.',
			},
		],
	},
	{
		slug: 'massis',
		name: 'Massis',
		location: 'Miami, FL',
		scope: 'Full Residence · Interior Design & Furnishings',
		concept:
			'A Miami residence shaped across living, kitchen, corridor, and bedroom, warm materials, clear circulation, and rooms that feel composed without losing everyday ease.',
		services: ['Full-Service Interior Design', 'Furnishings & Styling'],
		year: '2024',
		imageSrc: '/massis/massis-living-room-01.avif',
		imageAlt:
			'Massis living room interior with layered furnishings and natural light by Colors of Design Group',
		imageWidth: 2000,
		imageHeight: 1125,
		seoTitle: 'Massis Interior Design | Colors of Design Group',
		seoDescription:
			'Interior design for Massis, a Miami residence, living room, kitchen, corridor, and bedroom spaces composed with warm materials and tailored furnishings by Colors of Design Group.',
		challenge:
			'The home needed a consistent design language across public and private rooms. The clients wanted spaces that felt finished and personal, with furnishings and finishes that could support daily routines and quiet retreat.',
		approach:
			'Colors of Design developed a cohesive palette carried from the living room through the kitchen, circulation spaces, and bedrooms. Proportional furnishings, layered lighting, and material selections were specified to soften the architecture while giving each room its own character.',
		outcome:
			'The completed residence reads as one thoughtful whole, rooms for gathering, cooking, and rest that share a calm, collected atmosphere.',
		materials: [
			'Warm neutrals',
			'Layered textiles',
			'Tailored upholstery',
			'Custom millwork',
			'Sculptural lighting',
			'Curated accents',
		],
		gallery: [
			{
				src: '/massis/massis-living-room-01.avif',
				alt: 'Massis living room with layered interior design by Colors of Design Group',
				width: 2000,
				height: 1125,
				caption: 'Living room',
				description:
					'Layered furnishings and proportional seating arranged for everyday ease and quiet gathering.',
			},
			{
				src: '/massis/massis-living-room-02.avif',
				alt: 'Massis living room view with curated furnishings and warm neutrals',
				width: 2000,
				height: 1125,
				caption: 'Living area',
				description:
					'A wider view of the living room showing circulation, seating, and the project’s tonal range.',
			},
			{
				src: '/massis/massis-kitchen-01.avif',
				alt: 'Massis kitchen interior with warm materials and tailored design by Colors of Design',
				width: 2000,
				height: 1125,
				caption: 'Kitchen',
				description: 'Cabinetry, surfaces, and lighting composed for daily use with a calm, residential tone.',
			},
			{
				src: '/massis/massis-corridor-01.avif',
				alt: 'Massis corridor with considered lighting and warm interior finishes',
				width: 2000,
				height: 1125,
				caption: 'Corridor',
				description: 'Circulation shaped with lighting and finishes that connect the home’s public and private rooms.',
			},
			{
				src: '/massis/bedroom-01.avif',
				alt: 'Massis primary bedroom with tailored furnishings and soft neutral palette',
				width: 2000,
				height: 1125,
				caption: 'Bedroom',
				description: 'A restful bedroom composed with proportional furnishings, textiles, and quiet contrast.',
			},
			{
				src: '/massis/bedroom-02.avif',
				alt: 'Massis bedroom interior with layered styling and warm materials',
				width: 2000,
				height: 1125,
				caption: 'Bedroom detail',
				description: 'Finishing layers and furnishings selected to make the bedroom feel personal and complete.',
			},
		],
	},
	{
		slug: 'park-grove',
		name: 'Park Grove',
		location: 'Miami, FL',
		scope: 'Full Residence · Interior Design & Furnishings',
		concept:
			'A Park Grove residence composed across living, kitchen, work, and circulation, warm materials, layered furnishings, and rooms shaped for both gathering and focused everyday life.',
		services: ['Full-Service Interior Design', 'Furnishings & Styling'],
		year: '2024',
		imageSrc: '/park-grove/park-grove-living-room-01.avif',
		imageAlt:
			'Park Grove living room interior with layered furnishings and natural light by Colors of Design Group',
		imageWidth: 2000,
		imageHeight: 1335,
		seoTitle: 'Park Grove Interior Design | Colors of Design Group',
		seoDescription:
			'Interior design for a Park Grove residence in Miami, living room, kitchen, work area, and tailored furnishings composed for everyday ease by Colors of Design Group.',
		challenge:
			'The residence needed to feel complete across open living areas, a functional kitchen, and spaces for work and daily routine. The clients wanted a home that could host comfortably while still offering quieter moments and clear circulation.',
		approach:
			'Colors of Design developed a cohesive palette and furnishing plan carried through the living room, kitchen, corridor, and work area. Proportional seating, layered lighting, and material selections soften the architecture while keeping each room distinct and personal.',
		outcome:
			'The finished home reads as one thoughtful whole, spaces for gathering, cooking, and work that share a calm, collected atmosphere.',
		materials: [
			'Warm neutrals',
			'Layered textiles',
			'Tailored upholstery',
			'Custom millwork',
			'Sculptural lighting',
			'Curated accents',
		],
		gallery: [
			{
				src: '/park-grove/park-grove-living-room-01.avif',
				alt: 'Park Grove living room with layered interior design by Colors of Design Group',
				width: 2000,
				height: 1335,
				caption: 'Living room',
				description:
					'Layered furnishings and proportional seating arranged for everyday ease and quiet gathering.',
			},
			{
				src: '/park-grove/park-grove-living-room-02.avif',
				alt: 'Park Grove living room view with curated furnishings and warm neutrals',
				width: 2000,
				height: 2996,
				caption: 'Living area',
				description:
					'A vertical view of the living room showing volume, seating, and the project’s tonal range.',
			},
			{
				src: '/park-grove/park-grove-living-room-03.avif',
				alt: 'Park Grove living room composition with natural light and tailored upholstery',
				width: 2000,
				height: 1335,
				caption: 'Gathering space',
				description:
					'Seating and surfaces planned for conversation, with materials chosen for warmth and longevity.',
			},
			{
				src: '/park-grove/park-grove-living-room-04.avif',
				alt: 'Park Grove living room with curated furnishings and a warm neutral palette',
				width: 2000,
				height: 1335,
				caption: 'Living room',
				description:
					'A collected arrangement of furniture and finishes designed to feel calm and residential.',
			},
			{
				src: '/park-grove/park-grove-kitchen-01.avif',
				alt: 'Park Grove kitchen interior with warm materials and tailored design by Colors of Design',
				width: 2000,
				height: 1335,
				caption: 'Kitchen',
				description: 'Cabinetry, surfaces, and lighting composed for daily use with a calm, residential tone.',
			},
			{
				src: '/park-grove/park-grove-work-area-01.avif',
				alt: 'Park Grove work area with tailored furnishings and warm interior finishes',
				width: 2000,
				height: 1335,
				caption: 'Work area',
				description: 'A dedicated work space shaped with furnishings and lighting for focus and everyday use.',
			},
			{
				src: '/park-grove/park-grove-corridor-01.avif',
				alt: 'Park Grove corridor with considered lighting and warm interior finishes',
				width: 2000,
				height: 2996,
				caption: 'Corridor',
				description: 'Circulation shaped with lighting and finishes that connect the home’s public and private rooms.',
			},
			{
				src: '/park-grove/park-grove-detail-01.avif',
				alt: 'Park Grove interior design detail with layered textures and warm neutrals',
				width: 2000,
				height: 1335,
				caption: 'Detail',
				description: 'Textiles, surfaces, and objects layered to add depth while keeping the palette restrained.',
			},
			{
				src: '/park-grove/park-grove-detail-02.avif',
				alt: 'Park Grove furnishing detail with soft contrast and tailored materials',
				width: 2000,
				height: 2996,
				caption: 'Material detail',
				description: 'A closer view of finishes and furnishings that carry the home’s tonal language.',
			},
			{
				src: '/park-grove/park-grove-detail-03.avif',
				alt: 'Park Grove styling detail with sculptural accents and neutral tones',
				width: 2000,
				height: 2996,
				caption: 'Styling',
				description: 'Finishing layers that complete each room without disrupting the overall calm palette.',
			},
			{
				src: '/park-grove/park-grove-detail-04.avif',
				alt: 'Park Grove interior vignette with curated objects and warm lighting',
				width: 2000,
				height: 2996,
				caption: 'Vignette',
				description: 'A quieter moment shaped by proportion, texture, and considered placement.',
			},
			{
				src: '/park-grove/park-grove-detail-05.avif',
				alt: 'Park Grove furnishing detail with layered neutral textures',
				width: 2000,
				height: 2996,
				caption: 'Furnishings',
				description: 'Furniture and accent selections chosen for comfort, scale, and harmony with the architecture.',
			},
		],
	},
	{
		slug: 'selassie',
		name: 'Selassie',
		location: 'Miami, FL',
		scope: 'Full Residence · Interior Design & Furnishings',
		concept:
			'A Miami residence shaped across living, bedroom, and circulation, custom storage, warm materials, and rooms composed for both gathering and quiet retreat.',
		services: ['Full-Service Interior Design', 'Furnishings & Styling'],
		year: '2024',
		imageSrc: '/selassie/selassie-living-room-01.avif',
		imageAlt:
			'Selassie living room interior with layered furnishings and natural light by Colors of Design Group',
		imageWidth: 2000,
		imageHeight: 1335,
		seoTitle: 'Selassie Interior Design | Colors of Design Group',
		seoDescription:
			'Interior design for Selassie, a Miami residence, living room, bedroom, custom storage, and tailored furnishings composed for everyday ease by Colors of Design Group.',
		challenge:
			'The home needed to feel complete across open living areas and private rooms, with storage and millwork that integrated cleanly into the architecture. The clients wanted spaces that could host comfortably while still offering quiet retreat.',
		approach:
			'Colors of Design developed a cohesive palette carried through the living room, bedroom, corridor, and built-in storage. Proportional furnishings, custom cabinetry, and layered lighting soften the architecture while giving each room its own character.',
		outcome:
			'The finished residence reads as one thoughtful whole, rooms for gathering and rest that share a calm, collected atmosphere.',
		materials: [
			'Warm neutrals',
			'Layered textiles',
			'Tailored upholstery',
			'Custom cabinetry',
			'Sculptural lighting',
			'Curated accents',
		],
		gallery: [
			{
				src: '/selassie/selassie-living-room-01.avif',
				alt: 'Selassie living room with layered interior design by Colors of Design Group',
				width: 2000,
				height: 1335,
				caption: 'Living room',
				description:
					'Layered furnishings and proportional seating arranged for everyday ease and quiet gathering.',
			},
			{
				src: '/selassie/selassie-living-room-02.avif',
				alt: 'Selassie living room view with curated furnishings and warm neutrals',
				width: 2000,
				height: 2722,
				caption: 'Living area',
				description:
					'A vertical view of the living room showing volume, seating, and the project’s tonal range.',
			},
			{
				src: '/selassie/selassie-bedroom-01.avif',
				alt: 'Selassie bedroom with tailored furnishings and soft neutral palette',
				width: 2000,
				height: 1335,
				caption: 'Bedroom',
				description: 'A restful bedroom composed with proportional furnishings, textiles, and quiet contrast.',
			},
			{
				src: '/selassie/selassie-corridor-01.avif',
				alt: 'Selassie corridor with considered lighting and warm interior finishes',
				width: 2000,
				height: 2996,
				caption: 'Corridor',
				description: 'Circulation shaped with lighting and finishes that connect the home’s public and private rooms.',
			},
			{
				src: '/selassie/selassie-cabinet-01.avif',
				alt: 'Selassie custom cabinet detail with warm wood and tailored hardware',
				width: 2000,
				height: 3028,
				caption: 'Cabinetry',
				description: 'Custom millwork composed with warm materials and hardware chosen for quiet contrast.',
			},
			{
				src: '/selassie/selassie-storage-01.avif',
				alt: 'Selassie built-in storage with layered interior design finishes',
				width: 2000,
				height: 2996,
				caption: 'Storage',
				description: 'Built-in storage shaped to integrate with the architecture and keep daily life organized.',
			},
			{
				src: '/selassie/selassie-detail-01.avif',
				alt: 'Selassie interior design detail with layered textures and warm neutrals',
				width: 2000,
				height: 2996,
				caption: 'Detail',
				description: 'Textiles, surfaces, and objects layered to add depth while keeping the palette restrained.',
			},
			{
				src: '/selassie/selassie-detail-02.avif',
				alt: 'Selassie furnishing detail with soft contrast and tailored materials',
				width: 2000,
				height: 1335,
				caption: 'Material detail',
				description: 'A closer view of finishes and furnishings that carry the home’s tonal language.',
			},
			{
				src: '/selassie/selassie-detail-03.avif',
				alt: 'Selassie styling detail with sculptural accents and neutral tones',
				width: 2000,
				height: 2996,
				caption: 'Styling',
				description: 'Finishing layers that complete each room without disrupting the overall calm palette.',
			},
		],
	},
	{
		slug: 'kitchen',
		name: 'Kitchen',
		location: 'Miami, FL',
		scope: 'Kitchen · Interior Design & Furnishings',
		concept:
			'A kitchen composed with warm materials, tailored millwork, and lighting that supports daily cooking while keeping the room calm and residential.',
		services: ['Full-Service Interior Design', 'Furnishings & Styling'],
		year: '2024',
		imageSrc: '/kitchen/kitchen-kitchen-01.avif',
		imageAlt:
			'Kitchen interior with warm materials and tailored design by Colors of Design Group',
		imageWidth: 2000,
		imageHeight: 1125,
		seoTitle: 'Kitchen Interior Design | Colors of Design Group',
		seoDescription:
			'Kitchen interior design by Colors of Design Group, custom cabinetry, warm materials, and a space composed for everyday ease in Miami.',
		challenge:
			'The kitchen needed to feel finished and functional without reading as purely utilitarian. The clients wanted storage, surfaces, and lighting that could support daily routines while still feeling personal and collected.',
		approach:
			'Colors of Design developed a material palette and millwork plan shaped around circulation, storage, and light. Cabinetry, fixtures, and finishing details were specified to integrate with the architecture and keep the room visually quiet.',
		outcome:
			'The completed kitchen feels warm, practical, and composed, a space ready for everyday cooking and the slower rhythm of home.',
		materials: ['Custom cabinetry', 'Stone surfaces', 'Warm wood tones', 'Layered lighting', 'Tailored hardware'],
		gallery: [
			{
				src: '/kitchen/kitchen-kitchen-01.avif',
				alt: 'Kitchen interior with warm materials and tailored design by Colors of Design Group',
				width: 2000,
				height: 1125,
				caption: 'Kitchen',
				description: 'Cabinetry, surfaces, and lighting composed for daily use with a calm, residential tone.',
			},
			{
				src: '/kitchen/kitchen-kitchen-02.avif',
				alt: 'Kitchen view with custom cabinetry and natural light',
				width: 2000,
				height: 1125,
				caption: 'Kitchen view',
				description: 'A wider view of the kitchen showing circulation, storage, and the project’s material palette.',
			},
			{
				src: '/kitchen/kitchen-kitchen-03.avif',
				alt: 'Kitchen composition with warm finishes and considered detailing',
				width: 2000,
				height: 1125,
				caption: 'Millwork',
				description: 'Finishes and fixtures selected to keep the room warm, functional, and visually quiet.',
			},
			{
				src: '/kitchen/kitchen-kitchen-04.avif',
				alt: 'Kitchen detail with layered materials and tailored millwork',
				width: 2000,
				height: 1125,
				caption: 'Detail',
				description: 'Material contrasts and detailing that give the kitchen depth without visual noise.',
			},
		],
	},
	{
		slug: 'placeres',
		name: 'Placeres',
		location: 'Miami, FL',
		scope: 'Full Residence · Interior Design & Furnishings',
		concept:
			'A living room composed in warm neutrals, layered textures, and quiet symmetry, designed to feel collected, calm, and unmistakably residential.',
		services: ['Full-Service Interior Design', 'Furnishings & Styling'],
		year: '2024',
		imageSrc: '/placeres/placeres-living-room-01.avif',
		imageAlt:
			'Placeres living room interior with warm neutral palette, layered furnishings, and natural light by Colors of Design',
		imageWidth: 2000,
		imageHeight: 1334,
		seoTitle: 'Placeres Interior Design | Colors of Design Group',
		seoDescription:
			'Interior design for Placeres, a Miami residence, warm neutrals, layered furnishings, and a living room designed for ease and everyday gathering by Colors of Design Group.',
		challenge:
			'The living room needed to feel complete without becoming formal. The clients wanted a space that could hold daily life and occasional entertaining, with furnishings and finishes that read as intentional rather than staged.',
		approach:
			'Colors of Design built the room around a restrained palette, proportional seating, and lighting that softens the architecture. Textiles, art, and accent pieces were selected to add depth while keeping the overall atmosphere calm and cohesive.',
		outcome:
			'The finished living room feels settled and personal, a room that supports conversation, quiet evenings, and the slower rhythm of home.',
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
					'An elevated perspective on the room’s layers, from structure and lighting to the final styling.',
			},
		],
	},
	{
		slug: 'solaris',
		name: 'Solaris',
		location: 'Miami Beach, FL',
		scope: 'Full Remodel · Interior Design & Furnishings',
		concept:
			'An eco-chic mid-century apartment by Morris Lapidus, reimagined with organic modernism, refined naturalism, and understated luxury for a serene Miami Beach retreat.',
		services: ['Full-Service Interior Design', 'Furnishings & Styling'],
		year: '2024',
		imageSrc: '/solaris/solaris-dinning-room-02.avif',
		imageAlt: 'Solaris dining area with layered lighting and refined table setting',
		imageWidth: 2000,
		imageHeight: 1333,
		seoTitle: 'Solaris Interior Design | Colors of Design Group',
		seoDescription:
			'Colors of Design transformed a Morris Lapidus mid-century apartment in Miami Beach into an eco-chic retreat, organic modernism, layered textures, and a sculptural fireplace anchoring the living space.',
		challenge:
			'With a vision grounded in organic modernism and refined naturalism, Colors of Design transformed this mid-century apartment, originally designed by architect Morris Lapidus, into an eco-chic retreat in the heart of Miami Beach. The project blends understated luxury with sustainability, offering its South American owners a serene escape from their fast-paced lives.',
		approach:
			'Led by a multidisciplinary team, the firm approached this full remodel with an emphasis on functionality, balance, and timeless elegance. Neutral palettes, layered textures, and custom-crafted furnishings came together to evoke a sense of calm and coastal sophistication. A standout feature: the sculptural fireplace, which anchors the living space while seamlessly integrating lighting, storage, and entertainment, form and function in perfect harmony.',
		outcome:
			'Known for designing homes from concept to completion, Colors of Design brings an architectural mindset to their interior design work, with strong attention to spatial planning, lighting design, and selection of timeless materials and textures. This project reflects not only the client’s aesthetic but the firm’s commitment to spaces that feel soulful, timelessly elegant, and intentionally composed.',
		materials: [
			'Neutral palettes',
			'Layered textures',
			'Custom-crafted furnishings',
			'Sculptural fireplace',
			'Sustainable finishes',
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
					'An outdoor room that extends the interior language, comfortable, durable, and open to the light.',
			},
		],
	},
	{
		slug: 'baby-room',
		name: 'Baby Room',
		location: 'Miami, FL',
		scope: 'Nursery · Interior Design & Furnishings',
		concept:
			'A nursery composed in soft neutrals, gentle texture, and thoughtful details, a calm room designed to grow with a family.',
		services: ['Full-Service Interior Design', 'Furnishings & Styling'],
		year: '2024',
		imageSrc: '/baby-room/baby-room.avif',
		imageAlt:
			'Baby room nursery interior with soft neutral palette and tailored furnishings by Colors of Design',
		imageWidth: 1920,
		imageHeight: 1080,
		seoTitle: 'Baby Room Interior Design | Colors of Design Group',
		seoDescription:
			'Nursery interior design by Colors of Design Group, a calm, layered baby room with soft neutrals, tailored furnishings, and details designed to grow with the family.',
		challenge:
			'The nursery needed to feel serene and complete without becoming overly themed. The clients wanted a room that would work from early months onward, with furnishings and finishes that could adapt as needs changed.',
		approach:
			'Colors of Design built the room around a restrained palette, comfortable proportions, and storage and styling that keep daily life simple. Textiles, lighting, and accent pieces add warmth while maintaining a quiet, restful atmosphere.',
		outcome:
			'The finished nursery feels soft, personal, and ready for everyday use, a room that supports rest, routine, and the slower rhythm of home.',
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
			'A mountain residence shaped by warm materials, clear circulation, and rooms that feel grounded,  from the entry and kitchen to private suites and everyday spaces.',
		services: ['Full-Service Interior Design', 'Furnishings & Styling'],
		year: '2024',
		imageSrc: '/asheville/asheville-dinning-room-01.avif',
		imageAlt: 'Asheville dining room with tailored furnishings and warm interior tones',
		imageWidth: 2000,
		imageHeight: 1331,
		seoTitle: 'Asheville Interior Design | Colors of Design Group',
		seoDescription:
			'Interior design for an Asheville residence, kitchen, dining, halls, bedroom, baths, and laundry composed in warm materials and everyday ease by Colors of Design Group.',
		challenge:
			'The home needed to feel welcoming and practical without losing refinement. The clients wanted open circulation, kitchens and baths that support daily life, and a material palette suited to the mountain setting.',
		approach:
			'Colors of Design planned the residence room by room, entry halls for first impressions, kitchen and dining for gathering, private suites for retreat, and utility spaces that work as hard as they look. Finishes, furnishings, and lighting were specified as one composition across the home.',
		outcome:
			'Asheville now reads as a cohesive residence, warm, composed, and shaped for the way the family actually lives from morning routines to quiet evenings.',
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
					'A utility room designed with the same care as the rest of the home, functional, durable, and composed.',
			},
		],
	},
	{
		slug: 'casa-del-mar',
		name: 'Casa del Mar',
		location: 'Miami, FL',
		scope: 'Full Residence · Interior Design & Furnishings',
		concept:
			'A coastal residence composed in light, art, and layered furnishings, from welcoming halls and living rooms to curated objects and an indoor balcony open to the sea air.',
		services: ['Full-Service Interior Design', 'Furnishings & Styling', 'Art Curation'],
		year: '2024',
		imageSrc: '/casa-del-mar/living-room-05.avif',
		imageAlt: 'Casa del Mar living room detail with art and neutral furnishings',
		imageWidth: 1350,
		imageHeight: 900,
		seoTitle: 'Casa del Mar Interior Design | Colors of Design Group',
		seoDescription:
			'Interior design for Casa del Mar, a Miami residence, living rooms, halls, art, and an indoor balcony composed in light, texture, and coastal ease by Colors of Design Group.',
		challenge:
			'The residence needed to honor its coastal setting without leaning on cliché. The clients wanted open living spaces, art and objects with real presence, and interiors that could hold daily life and entertaining with equal ease.',
		approach:
			'Colors of Design planned the home around circulation, proportion, and a restrained palette that lets light and views lead. Furnishings, sculpture, and paintings were curated as part of one composition, rooms shaped for gathering, with quieter moments in halls and alcoves.',
		outcome:
			'Casa del Mar now feels luminous and personal, a home where art, furnishings, and architecture work together, and the indoor balcony extends living toward the water.',
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
					'An indoor balcony that extends living toward the water, comfortable, open, and composed.',
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
			'Interior architecture and furnishings for a Coral Gables estate, classical proportions, custom millwork, and rooms designed for gathering and retreat by Colors of Design Group.',
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
		slug: 'sunny-isles',
		name: 'Sunny Isles',
		location: 'Sunny Isles Beach, FL',
		scope: 'Living Room · Interior Design & Furnishings',
		year: '2024',
		services: ['Full-Service Interior Design', 'Furnishings & Styling'],
		concept:
			'A Sunny Isles living room shaped by coastal light, layered furnishings, and a palette that feels calm, collected, and suited to everyday life by the water.',
		imageSrc: '/sunny-isles/sunny-isles-living-room-01.avif',
		imageAlt:
			'Sunny Isles living room interior with layered furnishings and natural light by Colors of Design Group',
		imageWidth: 2000,
		imageHeight: 1166,
		seoTitle: 'Sunny Isles Interior Design | Colors of Design Group',
		seoDescription:
			'Interior design for a Sunny Isles residence, layered furnishings, coastal light, and a living room composed for everyday ease by Colors of Design Group.',
		challenge:
			'The living room needed to feel complete without becoming formal. The clients wanted a space that could hold daily life and occasional entertaining, with furnishings and finishes that read as intentional rather than staged.',
		approach:
			'Colors of Design built the room around a restrained palette, proportional seating, and lighting that softens the architecture. Textiles, art, and accent pieces were selected to add depth while keeping the overall atmosphere calm and cohesive.',
		outcome:
			'The finished living room feels settled and personal, a room that supports conversation, quiet evenings, and the slower rhythm of home.',
		materials: ['Warm neutrals', 'Layered textiles', 'Tailored upholstery', 'Sculptural lighting', 'Curated accents'],
		gallery: [
			{
				src: '/sunny-isles/sunny-isles-living-room-01.avif',
				alt: 'Sunny Isles living room with layered interior design by Colors of Design Group',
				width: 2000,
				height: 1166,
				caption: 'Living room',
				description:
					'Layered furnishings and proportional seating arranged for everyday ease and quiet gathering.',
			},
			{
				src: '/sunny-isles/sunny-isles-living-room-02.avif',
				alt: 'Sunny Isles living room view with curated furnishings and warm neutrals',
				width: 2000,
				height: 1166,
				caption: 'Living area',
				description:
					'A wider view of the living room showing circulation, seating, and the project’s tonal range.',
			},
			{
				src: '/sunny-isles/sunny-isles-living-room-03.avif',
				alt: 'Sunny Isles living room composition with natural light and tailored upholstery',
				width: 2000,
				height: 1166,
				caption: 'Gathering space',
				description:
					'Seating and surfaces planned for conversation, with materials chosen for warmth and longevity.',
			},
			{
				src: '/sunny-isles/sunny-isles-living-room-04.avif',
				alt: 'Sunny Isles living room with curated furnishings and a warm neutral palette',
				width: 2000,
				height: 1166,
				caption: 'Living room',
				description:
					'A collected arrangement of furniture and finishes designed to feel calm and residential.',
			},
			{
				src: '/sunny-isles/sunny-isles-living-room-05.avif',
				alt: 'Sunny Isles living room detail with layered textiles and sculptural lighting',
				width: 2000,
				height: 1166,
				caption: 'Room view',
				description:
					'Lighting, textiles, and proportion work together to settle the architecture into a lived-in room.',
			},
		],
	},
	{
		slug: 'bathroom',
		name: 'Bathroom',
		location: 'Miami, FL',
		scope: 'Bathroom · Interior Design & Furnishings',
		concept:
			'A bathroom shaped by stone, warm materials, and lighting that turns daily routines into a calm, collected experience.',
		services: ['Full-Service Interior Design', 'Furnishings & Styling'],
		year: '2024',
		imageSrc: '/bathroom/bathroom-bathroom-02.avif',
		imageAlt: 'Bathroom view with warm materials and considered detailing',
		imageWidth: 2000,
		imageHeight: 2768,
		seoTitle: 'Bathroom Interior Design | Colors of Design Group',
		seoDescription:
			'Bathroom interior design by Colors of Design Group, stone surfaces, warm materials, and a space composed for everyday ease in Miami.',
		challenge:
			'The bathroom needed to feel spa-like without losing practicality. The clients wanted surfaces, storage, and lighting that could support daily routines while still feeling personal and refined.',
		approach:
			'Colors of Design developed a material palette and fixture plan shaped around light, proportion, and ease of use. Stone, millwork, and finishing details were specified to integrate with the architecture and keep the room visually quiet.',
		outcome:
			'The completed bathroom feels warm, practical, and composed, a space ready for everyday use and quiet retreat.',
		materials: ['Natural stone', 'Custom millwork', 'Layered lighting', 'Tailored fixtures', 'Warm wood tones'],
		gallery: [
			{
				src: '/bathroom/bathroom-bathroom-01.avif',
				alt: 'Bathroom interior with stone surfaces and tailored design by Colors of Design Group',
				width: 2000,
				height: 2996,
				caption: 'Bathroom',
				description: 'Stone, surfaces, and lighting composed for daily use with a calm, residential tone.',
			},
			{
				src: '/bathroom/bathroom-bathroom-02.avif',
				alt: 'Bathroom view with warm materials and considered detailing',
				width: 2000,
				height: 2768,
				caption: 'Bathroom detail',
				description: 'Finishes and fixtures selected to keep the room warm, functional, and visually quiet.',
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
