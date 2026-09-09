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
		imageSrc: '/asheville/asheville-kitchen-01.avif',
		imageAlt: 'Space planning for a residential kitchen by Colors of Design Group',
		imageWidth: 1200,
		imageHeight: 1200,
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
		imageSrc: '/full-service-interior-design.jpg',
		imageAlt: 'Turn key interior design project by Colors of Design Group',
		imageWidth: 1200,
		imageHeight: 1200,
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
		imageSrc: '/placeres/placeres-living-room-01.avif',
		imageAlt: '3D rendering visualization for an interior design project',
		imageWidth: 1200,
		imageHeight: 1200,
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
		imageSrc: '/casa-del-mar/living-room-03.avif',
		imageAlt: 'Custom woodwork in a residential interior by Colors of Design Group',
		imageWidth: 1200,
		imageHeight: 1200,
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
		imageWidth: 1200,
		imageHeight: 1200,
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
		imageSrc: '/solaris/solaris-living-room-01.avif',
		imageAlt: 'Lighting design in a residential living room by Colors of Design Group',
		imageWidth: 1200,
		imageHeight: 1200,
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
		imageSrc: '/furnishings-and-styling.jpg',
		imageAlt: 'Custom furniture design by Colors of Design Group',
		imageWidth: 1200,
		imageHeight: 1200,
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
		imageSrc: '/living-room-01.jpg',
		imageAlt: 'Budget-managed interior design project by Colors of Design Group',
		imageWidth: 1200,
		imageHeight: 1200,
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
		imageSrc: '/asheville/asheville-bedroom-01.avif',
		imageAlt: 'Feng shui inspired bedroom interior by Colors of Design Group',
		imageWidth: 1200,
		imageHeight: 1200,
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
		imageSrc: '/hero.jpg',
		imageAlt: 'Interior architecture project by Colors of Design Group in Miami',
		imageWidth: 1200,
		imageHeight: 1200,
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
		imageSrc: '/Delray-Beach-Interior-Design-Miami.jpg',
		imageAlt: 'Interior design project by Colors of Design Group in Delray Beach',
		imageWidth: 1200,
		imageHeight: 1200,
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
