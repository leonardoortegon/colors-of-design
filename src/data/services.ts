export interface Service {
	slug: string;
	name: string;
	scope: string;
	summary: string;
	description: string;
	included: string[];
	imageSrc: string;
	imageAlt: string;
	imageWidth: number;
	imageHeight: number;
	secondaryImageSrc?: string;
	secondaryImageAlt?: string;
	secondaryImageWidth?: number;
	secondaryImageHeight?: number;
}

export const services: Service[] = [
	{
		slug: 'space-planning',
		name: 'Space Planning',
		scope: 'Residential · Planning · Layout',
		summary:
			'An essential component of interior design and architecture that defines the zones of a space and the activities that will take place within them.',
		description:
			'Space planning is an important component for the work of interior designers and architects. It defines the zones of the space and the activities that will take place in those zones.',
		included: [
			'Zone planning',
			'Activity mapping',
			'Spatial flow',
			'Furniture layouts',
			'Functional programming',
		],
		imageSrc: '/Delray-Beach-Interior-Design-Miami.jpg',
		imageAlt: 'Connected living, dining, and kitchen zones showing residential space planning by Colors of Design Group',
		imageWidth: 2500,
		imageHeight: 1500,
	},
	{
		slug: 'turn-key-services',
		name: 'Turn Key Services',
		scope: 'Full project · Absentee owners · Concept to completion',
		summary:
			'End-to-end project leadership for owners who need a trusted studio to carry a residence from idea to completion.',
		description:
			'If you are an absentee owner, you can rest assured that your project will be in good hands from idea to completion. We take care of having excellent final results.',
		included: [
			'Concept development',
			'Design direction',
			'Purchasing',
			'Installation',
			'Project oversight',
		],
		imageSrc: '/petretta/petretta-living-room-01.avif',
		imageAlt: 'Completed residence with living, kitchen, and millwork delivered turn key by Colors of Design Group',
		imageWidth: 1350,
		imageHeight: 900,
	},
	{
		slug: '3d-rendering',
		name: '3D Rendering',
		scope: 'Visualization · Concept development · Pre-construction',
		summary:
			'Architectural renderings that digitally stage and visualize spaces before they are built.',
		description:
			'3D architectural renderings are used to digitally stage and visualize spaces before they are constructed. A 3D render is a plus to visualize your interior.',
		included: [
			'Interior renderings',
			'Material studies',
			'Lighting previews',
			'Design presentations',
			'Pre-construction visualization',
		],
		imageSrc: '/3d-render-01.avif',
		imageAlt: '3D architectural rendering of an interior space by Colors of Design Group',
		imageWidth: 2000,
		imageHeight: 1182,
	},
	{
		slug: 'custom-woodwork',
		name: 'Custom Woodwork',
		scope: 'Millwork · Craftsmanship · Built-ins',
		summary:
			'Custom woodwork delivered with skilled craftsmen and artisans for exclusive, tailored details.',
		description:
			'We work with the best craftsman and artisans to deliver the best to our clients. Handicraft professionals guarantee exclusive designs for your favorite place.',
		included: [
			'Custom millwork',
			'Built-in cabinetry',
			'Artisan detailing',
			'Vanities & casework',
			'Exclusive wood designs',
		],
		imageSrc: '/kitchen/kitchen-kitchen-07.avif',
		imageAlt: 'Custom dark wood kitchen cabinetry and millwork with marble surfaces by Colors of Design Group',
		imageWidth: 2000,
		imageHeight: 1125,
	},
	{
		slug: 'project-management',
		name: 'Project Management',
		scope: 'Coordination · Scheduling · Build planning',
		summary:
			'Dedicated project management from design review through build planning and development.',
		description:
			'We conduct market research and facilitate design review and build planning meetings. Our project manager takes care of the development of the project.',
		included: [
			'Design review meetings',
			'Build planning',
			'Vendor coordination',
			'Schedule management',
			'Market research',
		],
		imageSrc: '/builder.jpg',
		imageAlt: 'Interior design project management by Colors of Design Group',
		imageWidth: 2500,
		imageHeight: 1500,
	},
	{
		slug: 'lighting-design',
		name: 'Lighting Design',
		scope: 'Interior · Architectural · Outdoor lighting',
		summary:
			'Lighting plans shaped around iconic fixtures, architectural lighting, and the needs of each room.',
		description:
			'Lighting design made of iconic and innovative lamps for home, outdoor lighting and architectural lights. We create lighting plans according to your space and needs.',
		included: [
			'Lighting plans',
			'Fixture selections',
			'Architectural lighting',
			'Outdoor lighting',
			'Layered illumination',
		],
		imageSrc: '/lighting-design.jpg',
		imageAlt: 'Track lighting and layered illumination in a modern living room with wood slat wall by Colors of Design Group',
		imageWidth: 1335,
		imageHeight: 817,
	},
	{
		slug: 'furniture-design',
		name: 'Furniture Design',
		scope: 'Custom furniture · Sustainable materials · Craftsmanship',
		summary:
			'Custom furniture designs developed with sustainable materials and exceptional craftsmanship.',
		description:
			'We offer custom made furniture, beautiful custom designs, and the use of sustainable materials. You will also count on the best craftsmanship.',
		included: [
			'Custom furniture',
			'Bespoke designs',
			'Sustainable materials',
			'Upholstery direction',
			'Artisan craftsmanship',
		],
		imageSrc: '/petretta/petretta-table-01.avif',
		imageAlt: 'Custom marble console table designed for a residential interior by Colors of Design Group',
		imageWidth: 900,
		imageHeight: 1350,
	},
	{
		slug: 'budget-management',
		name: 'Budget Management',
		scope: 'Planning · Procurement · Cost control',
		summary:
			'Disciplined budget guidance so design decisions stay aligned with your investment.',
		description:
			'Without a budget, an interior design project can easily spiral out of control. Get the most out of your decorating money. We work within our client’s budget.',
		included: [
			'Budget planning',
			'Cost tracking',
			'Procurement strategy',
			'Value engineering',
			'Investment guidance',
		],
		imageSrc: '/budget-management.avif',
		imageAlt: 'Budget management planning materials by Colors of Design Group',
		imageWidth: 2000,
		imageHeight: 1335,
		secondaryImageSrc: '/park-grove/park-grove-kitchen-01.avif',
		secondaryImageAlt: 'Kitchen interior with specified materials and finishes by Colors of Design Group',
		secondaryImageWidth: 2000,
		secondaryImageHeight: 1335,
	},
	{
		slug: 'feng-shui',
		name: 'Feng Shui',
		scope: 'Energy flow · Spatial harmony · Intentional placement',
		summary:
			'Intentional arrangement of the environment to improve flow, clarity, and a sense of balance.',
		description:
			'Feng Shui uses the work of clearing clutter and intentionally arranging the environment so it truly reflects and supports the user, improving the flow of good energy and happiness.',
		included: [
			'Spatial harmony',
			'Clutter clearing',
			'Intentional placement',
			'Energy flow',
			'Balanced environments',
		],
		imageSrc: '/solaris/solaris-bedroom-01.avif',
		imageAlt: 'Restful primary bedroom with balanced furnishings and a calm palette by Colors of Design Group',
		imageWidth: 2000,
		imageHeight: 1334,
	},
	{
		slug: 'interior-architecture',
		name: 'Interior Architecture',
		scope: 'Spatial design · Safety · Function · Aesthetics',
		summary:
			'The architectural design of interiors focused on safety, functionality, and aesthetics.',
		description:
			'Interior architecture is the design of an interior in architectural terms: the spatial art of environmental design. We design interiors for safety, functionality, and aesthetics.',
		included: [
			'Spatial planning',
			'Architectural detailing',
			'Finish specifications',
			'Construction drawings',
			'Code-aware design',
		],
		imageSrc: '/casa-del-mar/indoor-balcony-01.avif',
		imageAlt: 'Interior architecture with indoor balcony and coastal views by Colors of Design Group',
		imageWidth: 1350,
		imageHeight: 900,
	},
	{
		slug: 'interior-design',
		name: 'Interior Design',
		scope: 'Residential · Concept development · Full interiors',
		summary:
			'A client-centered design process built on understanding how each space should look, feel, and function.',
		description:
			'We listen carefully to the client’s needs, projections, and intentions for each space. This includes the review and understanding of the client’s needs and desires.',
		included: [
			'Design concepts',
			'Material selections',
			'Furniture plans',
			'Finish palettes',
			'Installation',
		],
		imageSrc: '/living-room-01.jpg',
		imageAlt: 'Fully furnished residential living room interior design by Colors of Design Group',
		imageWidth: 1500,
		imageHeight: 1104,
	},
	{
		slug: 'custom-window-treatment',
		name: 'Custom Window Treatment',
		scope: 'Drapery · Shades · Tailored installation',
		summary:
			'Custom window treatments specified for proportion, light control, and a finished look that complements the architecture.',
		description:
			'Window treatments shape how a room feels throughout the day. Colors of Design specifies drapery, shades, and hardware tailored to each opening, balancing privacy, light, and the overall design composition.',
		included: [
			'Fabric and material selections',
			'Custom drapery',
			'Shades and blinds',
			'Hardware coordination',
			'Professional installation',
		],
		imageSrc: '/custom-window-treatment.avif',
		imageAlt: 'Custom drapery framing floor-to-ceiling windows in a living room by Colors of Design Group',
		imageWidth: 2000,
		imageHeight: 1335,
	},
	{
		slug: 'custom-millwork-cabinetry',
		name: 'Custom Millwork Cabinetry',
		scope: 'Built-ins · Vanities · Tailored casework',
		summary:
			'Custom cabinetry and millwork designed to integrate with the architecture and support daily life with refined detail.',
		description:
			'From built-ins and vanities to full casework packages, our millwork is specified as part of the overall interior composition, with materials, proportions, and hardware chosen for lasting quality.',
		included: [
			'Cabinet design',
			'Built-in storage',
			'Vanities and casework',
			'Finish selections',
			'Installation oversight',
		],
		imageSrc: '/petretta/petretta-cabinet-02.avif',
		imageAlt: 'Built-in millwork cabinetry with warm wood finishes by Colors of Design Group',
		imageWidth: 900,
		imageHeight: 1350,
	},
	{
		slug: 'wallpaper-selections-and-installation',
		name: 'Wallpaper Selections and Installation',
		scope: 'Wallcoverings · Pattern · Professional installation',
		summary:
			'Wallpaper selections curated for scale, tone, and room character, with installation handled for a precise, lasting finish.',
		description:
			'Wallcoverings add depth, texture, and personality to a room. We source papers suited to each space, coordinate pattern and palette with the broader design, and oversee installation for a clean, refined result.',
		included: [
			'Wallcovering selections',
			'Pattern and scale review',
			'Sample coordination',
			'Installer coordination',
			'Finish detailing',
		],
		imageSrc: '/furnishings-and-styling.jpg',
		imageAlt: 'Textured wallcovering behind a custom bedroom headboard by Colors of Design Group',
		imageWidth: 1600,
		imageHeight: 1600,
	},
	{
		slug: 'sustainable-green-outdoor-design',
		name: 'Sustainable Green Outdoor Design',
		scope: 'Terraces · Gardens · Eco-conscious outdoor living',
		summary:
			'Outdoor spaces designed with sustainable materials, planting, and furnishings that extend comfortable living beyond the interior.',
		description:
			'Outdoor design should feel as intentional as the rooms inside. We develop terraces, gardens, and outdoor living areas with durable, eco-conscious selections and layouts suited to South Florida living.',
		included: [
			'Outdoor layout planning',
			'Sustainable material selections',
			'Furnishings and shade',
			'Planting direction',
			'Installation coordination',
		],
		imageSrc: '/solaris/solaris-outdoor-01.avif',
		imageAlt: 'Outdoor living area with furnishings for South Florida living by Colors of Design Group',
		imageWidth: 2000,
		imageHeight: 2800,
	},
	{
		slug: 'sustainable-green-indoor-design',
		name: 'Sustainable Green Indoor Design',
		scope: 'Materials · Finishes · Health-conscious interiors',
		summary:
			'Interior specifications that prioritize sustainable materials, healthier finishes, and timeless design with a lighter environmental footprint.',
		description:
			'Sustainable indoor design balances beauty with responsibility. We specify materials, finishes, and furnishings that support healthier interiors while preserving the refined, collected atmosphere our clients expect.',
		included: [
			'Sustainable material sourcing',
			'Low-impact finish selections',
			'Furnishings and textiles',
			'Vendor research',
			'Specification documentation',
		],
		imageSrc: '/solaris/solaris-kitchen-01.avif',
		imageAlt: 'Sustainable interior with stone surfaces and warm wood by Colors of Design Group',
		imageWidth: 2000,
		imageHeight: 1332,
	},
	{
		slug: 'plants-selections',
		name: 'Plants Selections',
		scope: 'Interior planting · Scale · Placement',
		summary:
			'Plant selections chosen to soften architecture, add life to a room, and complement the overall interior composition.',
		description:
			'Plants bring movement, texture, and warmth to an interior. We select species and placements suited to each room’s light, scale, and maintenance needs, integrating greenery as part of the finished design.',
		included: [
			'Plant selections',
			'Scale and placement',
			'Container coordination',
			'Light assessment',
			'Styling and installation',
		],
		imageSrc: '/placeres/placeres-living-room-23.avif',
		imageAlt: 'Placeres living room with interior planting and layered design details by Colors of Design Group',
		imageWidth: 2000,
		imageHeight: 2999,
	},
	{
		slug: 'art-selections',
		name: 'Art Selections',
		scope: 'Curation · Placement · Collection development',
		summary:
			'Art selections curated to give each room a focal point and a personal sense of character.',
		description:
			'Art completes a room when it is chosen with intention. We curate pieces, sculptures, and wall compositions that reflect the client’s taste and strengthen the overall design story.',
		included: [
			'Art sourcing',
			'Placement planning',
			'Scale and proportion review',
			'Installation coordination',
			'Collection development',
		],
		imageSrc: '/casa-del-mar/painting-01.avif',
		imageAlt: 'Curated painting placed as the focal point of a residential hall by Colors of Design Group',
		imageWidth: 900,
		imageHeight: 1350,
	},
	{
		slug: 'luxury-accessories-selections',
		name: 'Luxury Accessories Selections',
		scope: 'Styling · Objects · Finishing layers',
		summary:
			'Luxury accessories selected to finish each room with texture, contrast, and a sense of collected ease.',
		description:
			'Accessories are the final layer that makes a space feel personal and complete. We source objects, tabletop pieces, and styling accents that elevate the interior without overwhelming it.',
		included: [
			'Accessory sourcing',
			'Tabletop and object styling',
			'Textile accents',
			'Decorative lighting accents',
			'Installation and placement',
		],
		imageSrc: '/selassie/selassie-detail-02.avif',
		imageAlt: 'Luxury furnishing detail with soft contrast and tailored materials by Colors of Design Group',
		imageWidth: 2000,
		imageHeight: 1335,
	},
];

export const featuredServiceSlugs = [
	'interior-design',
	'interior-architecture',
	'turn-key-services',
] as const;

export const featuredServices = featuredServiceSlugs
	.map((slug) => services.find((service) => service.slug === slug))
	.filter((service): service is Service => service !== undefined);
