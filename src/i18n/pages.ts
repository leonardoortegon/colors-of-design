import type { Locale } from './locale';
import { localizedPath } from './locale';
import { copy } from './ui';
import { site } from '../data/site';

export function pageCopy(locale: Locale) {
	const path = (p: string) => localizedPath(locale, p);
	const c = copy(locale);

	if (locale === 'es') {
		return {
			seo: {
				homeTitle: 'Diseño de interiores de lujo en Miami | Colors of Design Group',
				homeDescription:
					'Colors of Design es un estudio de diseño de interiores en Miami que crea residencias refinadas y personales, desde el primer concepto hasta la instalación final, en el sur de Florida y más allá.',
			},
			home: {
				eyebrow: 'Diseño de interiores de lujo · Miami y más allá',
				heading: 'Interiores pensados para la forma en que usted vive.',
				description:
					'Colors of Design es un estudio de diseño de interiores en Miami que crea residencias refinadas y profundamente personales, desde el primer concepto hasta la instalación final.',
				ctas: [
					{ label: 'Inicie su proyecto', href: path('/contact-us/') },
					{ label: 'Explore nuestro trabajo', href: path('/work/') },
				],
				trustItems: [
					'Diseño de interiores premiado',
					'Proyectos residenciales',
					'Servicio de concepto a entrega',
					'Miami y proyectos en Estados Unidos',
				],
				heroAlt: 'Interior residencial de lujo por Colors of Design Group en Miami',
				splitHeading: 'Distintivo por diseño.\nPersonal por naturaleza.',
				splitCopy:
					'Creamos interiores considerados, cómodos e inconfundiblemente personales. Nuestro equipo multidisciplinario reúne diseño de interiores, arquitectura, mobiliario a medida, iluminación y gestión de proyectos para dar forma a cada detalle en un hogar cohesivo.',
				meetStudio: 'Conozca el estudio',
				selectedWork: 'Proyectos seleccionados',
				selectedIntro:
					'Una colección de hogares definidos por una planificación cuidadosa, materiales expresivos y las personas que los habitan.',
				exploreAll: 'Explorar todos los proyectos',
				howWeWork: 'Cómo podemos trabajar juntos',
				servicesIntro:
					'Desde residencias y renovaciones completas hasta mobiliario y toques finales, adaptamos nuestros servicios a su visión y guiamos cada detalle con claridad y cuidado.',
				exploreServices: 'Explorar todos los servicios',
				processHeading: 'Un camino claro de la visión al hogar',
				processSteps: [
					{
						title: 'Descubrir',
						description:
							'Comenzamos por comprender su propiedad, prioridades, estilo de vida, estética, tiempos e inversión en diseño.',
					},
					{
						title: 'Definir',
						description:
							'Definimos el alcance, la dirección de diseño, el plan de trabajo, el presupuesto y los hitos por delante.',
					},
					{
						title: 'Diseñar',
						description:
							'El equipo desarrolla el plan espacial, conceptos, renders, materiales, iluminación, mobiliario y detalles.',
					},
					{
						title: 'Entregar',
						description:
							'Coordinamos compras, fabricación, instalación y estilismo para dar vida a su visión completa.',
					},
				],
				seeProcess: 'Ver nuestro proceso',
				studioHeading: 'Una mirada artística. Un enfoque arquitectónico.',
				studioCopy:
					'Fundado por Margaret Van Puffelen, Colors of Design combina una base en artes decorativas con formación en diseño de interiores y arquitectura de interiores. Junto con un equipo multidisciplinario, Margaret ha creado residencias para clientes en Estados Unidos y América Latina, equilibrando la expresión creativa con una planificación y ejecución cuidadosas.',
				meetTeam: 'Conozca a Margaret y al equipo',
				studioAlt: 'Margaret Van Puffelen y el equipo de Colors of Design',
			},
			about: {
				title: 'Sobre nuestro estudio de diseño de interiores en Miami | Colors of Design',
				description:
					'Conozca a Margaret Van Puffelen, William Riveros, Ulysses y el equipo de Colors of Design, un estudio de diseño de interiores en Miami con una mirada artística y un enfoque personal de los interiores residenciales.',
				jsonName: 'Sobre Colors of Design',
				h1: 'Visión y propósito.',
				lead: 'Con sede en Miami, Colors of Design Group es un distinguido estudio de diseño de interiores que crea interiores refinados y altamente curados para residencias y proyectos en todo Estados Unidos.',
				p1: 'Nuestro trabajo se define por un equilibrio sofisticado entre elegancia atemporal, sensibilidad contemporánea e individualidad reflexiva.',
				p2: 'Cada proyecto se aborda como una expresión única del estilo de vida de nuestros clientes, donde arquitectura, materiales, mobiliario y arte se unen en un ambiente cohesionado y profundamente personal. Desde el concepto hasta la finalización, aportamos una atención al detalle sin concesiones y una perspectiva de diseño distintiva a cada espacio que creamos.',
				exploreWork: 'Explore nuestro trabajo residencial',
				teamEyebrow: 'Sobre el equipo',
				teamHeading: 'Diseñadores con experiencia, comprometidos con cada detalle.',
				teamLead:
					'Colors of Design reúne diseñadores, arquitectos y colaboradores que comparten una dedicación a los interiores pensados, desde el primer plano hasta la instalación final.',
				perspectiveEyebrow: 'Nuestra mirada',
				perspectiveHeading: 'Habitaciones hermosas.\nUn conjunto con sentido.',
				perspectiveCopy:
					'Miramos más allá de cada pieza: cómo se conectan las estancias, cómo se mueve la luz y cómo los objetos dan carácter al espacio, siempre partiendo de quien vivirá allí y del equilibrio entre belleza y facilidad cotidiana que el hogar pide.',
				discoverProcess: 'Descubra nuestro proceso',
			},
			contact: {
				title: 'Contacte nuestro estudio de diseño de interiores en Miami | Colors of Design',
				description:
					'Contacte a Colors of Design Group, un estudio de diseño de interiores en Miami que crea interiores residenciales refinados en el sur de Florida y más allá.',
				jsonName: 'Contacto Colors of Design',
				p1: 'Colors of Design es un estudio de diseño de interiores en Miami que crea hogares armoniosos, modernos y atemporales, desde el primer concepto hasta la instalación final.',
				p2: `Fundado por ${site.founder}, nuestro equipo trabaja con clientes en el sur de Florida, Carolina del Norte y más allá en planificación espacial, diseño a medida, mobiliario e instalación llave en mano.`,
				email: 'Correo',
				phone: 'Teléfono',
				studio: 'Estudio',
				hours: 'Horario',
				hoursValue: 'Lunes a viernes · 8 a. m.–5 p. m.',
				meetStudio: 'Conozca el estudio',
			},
			process: {
				title: 'Nuestro proceso de diseño de interiores | Colors of Design, Miami',
				description:
					'Explore el proceso de Colors of Design, desde la primera consulta y propuesta de diseño hasta la planificación, selección de materiales, coordinación e instalación.',
				eyebrow: 'De la primera conversación a los toques finales',
				h1: 'Un camino claro de la visión al hogar.',
				lead: 'El buen diseño nace de un proceso reflexivo. Aportamos estructura a las decisiones, creamos espacio para la colaboración y mantenemos el hogar completo a la vista.',
				p: 'Cada proyecto tiene su propio punto de partida. Ya sea que construya, renueve o amueble, damos forma al alcance alrededor de su hogar y sus prioridades.',
				exploreServices: 'Explore nuestros servicios de diseño',
				imageAlt: 'Iluminación escultórica y mobiliario de comedor en la residencia Solaris',
				steps: [
					[
						'Consulta',
						'Escuchamos primero: cómo vive, qué necesita su hogar y qué espera cambiar. Hablamos de la propiedad, sus prioridades y sus expectativas.',
					],
					[
						'Propuesta',
						'La propuesta define nuestro rol, el alcance de los servicios y los honorarios de diseño. Puede ver cómo trabajaremos juntos antes de que comience el diseño.',
					],
					[
						'Investigación y planificación',
						'Exploramos distribuciones, materiales, texturas y las personas que ayudarán a realizar el diseño. La planificación espacial conecta su brief con las posibilidades de la propiedad.',
					],
					[
						'Presentación de diseño',
						'Conceptos, selecciones de materiales, mobiliario y visualizaciones hacen tangible la dirección. Su retroalimentación ayuda a refinar el diseño en un hogar que se sienta personal.',
					],
					[
						'Presupuesto y coordinación',
						'Con la dirección acordada, revisamos el presupuesto, el cronograma y los requisitos. Las selecciones y prioridades se consideran juntas antes de la ejecución.',
					],
					[
						'Ejecución e instalación',
						'El diseño aprobado pasa a coordinación de obra, compras e instalación. El mobiliario, la iluminación y los detalles de acabado se reúnen en el espacio concluido.',
					],
				],
				faqEyebrow: 'Antes de comenzar',
				faqHeading: 'Algunas preguntas frecuentes.',
				faqs: [
					{
						q: '¿Cuándo debo incorporar a un diseñador de interiores al proyecto?',
						a: 'Tan pronto como pueda, especialmente en una renovación o una vivienda nueva. Las conversaciones tempranas ayudan a alinear distribución, acabados y mobiliario antes de que las decisiones sean difíciles de cambiar.',
					},
					{
						q: '¿Qué debo preparar para nuestra primera conversación?',
						a1: 'Algunas fotos, planos disponibles, sus prioridades y una idea de tiempos e inversión son un buen comienzo. Lea nuestra ',
						linkLabel: 'guía para preparar la consulta',
						a2: '.',
					},
					{
						q: '¿Pueden ayudar si vivo en otro lugar?',
						a1: 'Nuestro ',
						linkLabel: 'servicio llave en mano',
						a2: ' apoya a propietarios que necesitan coordinación del proyecto mientras están lejos. Comparta la ubicación de su propiedad y conversamos el alcance.',
					},
					{
						q: '¿Cuánto durará mi proyecto?',
						a: 'Los tiempos dependen de la propiedad, el alcance, las aprobaciones y la disponibilidad de materiales y mobiliario. Conversamos estos factores con usted al definir el proyecto.',
					},
				],
			},
			privacy: {
				title: 'Privacidad del sitio | Colors of Design',
				description:
					'Cómo el sitio de Colors of Design trata las consultas de proyecto, el correo y las solicitudes del sitio.',
				label: 'Privacidad',
				heading: 'Una nota sobre su privacidad.',
				intro: 'Así se trata la información cuando navega este sitio o envía una consulta de proyecto.',
				h2inquiries: 'Consultas de proyecto',
				p1: 'El formulario de consulta envía su nombre, datos de contacto y notas del proyecto al estudio por correo para que podamos responder. El sitio no guarda los envíos en una base de datos.',
				p2: 'Los mensajes se entregan a través de nuestro proveedor de correo. Incluya solo lo necesario para conversar su proyecto.',
				h2browse: 'Navegar el sitio',
				p3: 'Su navegador solicita páginas e imágenes a nuestro proveedor de alojamiento y tipografías a Google Fonts. Estos proveedores reciben información de conexión, incluida su dirección IP, para servir esos recursos. Este sitio no incluye actualmente rastreadores publicitarios, scripts de analítica ni un registro de boletín.',
				h2questions: 'Preguntas sobre su información',
				p4a: 'Para preguntas sobre información que haya compartido con el estudio, escriba a ',
			},
			notFound: {
				title: 'Página no encontrada | Colors of Design',
				label: 'Página no encontrada',
				eyebrow: '404 · Otro rumbo',
				heading: 'Encontremos el camino a casa.',
				description:
					'Esta página pudo haberse movido o ya no está disponible. Explore nuestro trabajo reciente o contacte al estudio.',
				exploreWork: 'Explore nuestro trabajo',
				contactStudio: 'Contacte al estudio',
			},
			awards: {
				title: 'Premios y reconocimientos | Colors of Design Group',
				description:
					'Explore premios y reconocimientos de Colors of Design Group, incluidos Luxury Lifestyle Awards, Design Minds y honores Best of Houzz en Miami.',
			},
			services: {
				title: 'Servicios de diseño de interiores en Miami | Colors of Design Group',
				description:
					'Servicios de diseño de interiores de lujo en Miami por Colors of Design Group, incluyendo planificación espacial, servicios llave en mano, renderizado 3D, carpintería a medida, gestión de proyectos, diseño de iluminación, diseño de mobiliario y más.',
				thingName: 'Servicios de diseño de interiores',
				heading: 'Lo que hacemos',
				introduction:
					'Nuestros servicios abarcan desde el análisis de diseño residencial completo hasta planificación espacial, desarrollo de concepto, planos de mobiliario, diseño a medida, dibujos de construcción, especificaciones, compras, instalación de materiales y gestión de proyectos. Trabajamos en Estados Unidos y América Latina.',
				detailNote:
					'Definimos el alcance adecuado para su propiedad en las conversaciones iniciales. Su propuesta establece los servicios y responsabilidades de su proyecto.',
				seeHow: 'Vea cómo trabajamos',
				inPractice: 'En la práctica',
				moreThanRooms: 'Un hogar es más que sus habitaciones individuales.',
				seeHowPlanning: 'Vea cómo la planificación, los materiales y el mobiliario se reúnen en nuestro trabajo residencial.',
				exploreProjects: 'Explore nuestros proyectos',
				exploreServices: 'Explore nuestros servicios.',
				titleSuffix: (name: string) => `${name} en Miami | Colors of Design`,
			},
			work: {
				title: 'Portafolio de diseño de interiores | Colors of Design Group',
				description:
					'Recorra proyectos residenciales de Colors of Design Group, incluidos hogares en Coral Gables, Miami Beach y Brickell.',
				thingName: 'Diseño de interiores residencial',
				listName: 'Proyectos de diseño de interiores',
				itemName: (name: string) => `Diseño de interiores ${name}`,
				heading: 'Portafolio de diseño de interiores',
				introduction:
					'Una colección de residencias de Colors of Design Group: diseño de interiores integral, arquitectura de interiores y mobiliario para hogares en Miami, Coral Gables y más allá. Seleccione un proyecto para ver el brief, los materiales y las estancias.',
				projectEyebrow: 'Proyecto de diseño de interiores',
				approach: 'El enfoque',
				result: 'El resultado',
				roomsDetails: 'Estancias y detalles',
				moreProjects: 'Más proyectos',
				jsonWorkName: 'Proyectos',
				jsonHome: 'Inicio',
				interiorPhotography: (name: string) => `Fotografía de interiores de ${name}`,
				interiorDesign: (name: string) => `Diseño de interiores ${name}`,
				keywords: ['diseño de interiores', 'interiores residenciales de lujo'],
			},
			journal: {
				title: 'Diario de diseño de interiores e ideas | Colors of Design',
				description:
					'Ideas de diseño de interiores y consejos prácticos del diario de Colors of Design. Explore iluminación, planificación y cómo prepararse para su consulta de diseño.',
				jsonName: 'Diario Colors of Design',
				heading: 'Notas sobre el arte de vivir.',
				eyebrow: 'El diario · Ideas para un hogar considerado',
				introduction:
					'Perspectivas sobre interiores, los detalles que hacen una habitación y las decisiones que reúnen un hogar.',
				previewHeading: 'Una forma considerada de vivir.',
				previewEyebrow: 'Del diario',
				continueReading: 'Seguir leyendo',
				articleCta1: 'Cuéntenos sobre su hogar',
				articleCta2: 'nuestro portafolio residencial',
				articleCtaMid: ' o explore ',
				articleCtaEnd: ' para ver estas ideas en la práctica.',
			},
			shop: {
				title: 'Tienda de decoración | Colors of Design Group',
				description:
					'Compre decoración, iluminación y mobiliario únicos de Colors of Design Group, piezas por encargo curadas para interiores de lujo.',
				listName: 'Tienda Colors of Design',
				heading: 'Piezas únicas',
				eyebrow: 'Tienda',
				descriptionPage:
					'Estos productos son por encargo y tardan de 4 a 12 semanas en llegar. La mayoría son hechos a medida o pedidos especiales. Compre con confianza para recibir algo extraordinario que eleve sus interiores.',
				about: 'Acerca de',
				details: 'Detalles',
				availability: 'Disponibilidad',
				availabilityCopy:
					'Pieza por encargo. Los tiempos de entrega varían. Contacte al estudio para consultar, confirmar plazos y coordinar la compra.',
				inquire: 'Consultar para comprar',
				youMayLike: 'También le puede interesar',
				titleSuffix: (name: string) => `${name} | Tienda Colors of Design`,
				imagesAria: (name: string) => `Imágenes de ${name}`,
			},
			navLinks: [
				{ label: c.nav.portfolio, href: path('/work/') },
				{ label: c.nav.services, href: path('/services/') },
				{ label: c.nav.about, href: path('/about-us/') },
				{ label: c.nav.awards, href: path('/awards-and-recognitions/') },
				{ label: c.nav.shop, href: path('/interior-design-online-shop/') },
				{ label: c.nav.contact, href: path('/contact-us/') },
			],
		};
	}

	return {
		seo: {
			homeTitle: site.defaultTitle,
			homeDescription: site.defaultDescription,
		},
		home: {
			eyebrow: 'Luxury interior design · Miami & beyond',
			heading: 'Interiors shaped around the way you live.',
			description:
				'Colors of Design is a Miami-based interior design studio creating refined, deeply personal residences, from the first concept to the final installation.',
			ctas: [
				{ label: 'Start Your Project', href: path('/contact-us/') },
				{ label: 'Explore Our Work', href: path('/work/') },
			],
			trustItems: [
				'Award-winning interior design',
				'Residential projects',
				'Concept-to-completion service',
				'Miami and projects across the United States',
			],
			heroAlt: 'Luxury residential interior by Colors of Design Group in Miami',
			splitHeading: 'Distinctive by design.\nPersonal by nature.',
			splitCopy:
				'At Colors of Design Group, exceptional interiors begin with exceptional service. We guide our clients through every stage of the design journey with a highly personalized approach, bringing together interior design, architecture, custom furnishings, lighting, and project coordination to create refined, enduring spaces that feel distinctly their own.',
			meetStudio: 'Meet the Studio',
			selectedWork: 'Selected Work',
			selectedIntro:
				'A collection of homes defined by thoughtful planning, expressive materials, and the people who inhabit them.',
			exploreAll: 'Explore All Projects',
			howWeWork: 'How We Can Work Together',
			servicesIntro:
				'From full-scale residences and renovations to furnishings and finishing touches, we tailor our services to your vision and guide every detail with clarity and care.',
			exploreServices: 'Explore All Services',
			processHeading: 'A Clear Path From Vision to Home',
			processSteps: [
				{
					title: 'Discover',
					description:
						'We begin by understanding your property, priorities, lifestyle, aesthetic, timeline, and design investment.',
				},
				{
					title: 'Define',
					description:
						'We define the scope, design direction, project roadmap, working budget, and milestones ahead.',
				},
				{
					title: 'Design',
					description:
						'Our team develops the space plan, concepts, renderings, materials, lighting, furnishings, and details.',
				},
				{
					title: 'Deliver',
					description:
						'We coordinate purchasing, fabrication, installation, and styling to bring your complete vision to life.',
				},
			],
			seeProcess: 'See Our Process',
			studioHeading: 'An Artistic Eye. An Architectural Approach.',
			studioCopy:
				'Founded by Margaret Van Puffelen, Colors of Design combines a foundation in decorative arts with formal training in interior design and interior architecture. Together with a multidisciplinary team, Margaret has created residences for clients throughout the United States and Latin America, balancing creative expression with careful planning and execution.',
			meetTeam: 'Meet Margaret and the Team',
			studioAlt: 'Margaret Van Puffelen and the Colors of Design team',
		},
		about: {
			title: 'About Our Miami Interior Design Studio | Colors of Design',
			description:
				'Meet Margaret Van Puffelen, William Riveros, Ulysses, and the Colors of Design team, a Miami interior design studio with an artistic perspective and a personal approach to residential interiors.',
			jsonName: 'About Colors of Design',
			h1: 'Vision and purpose.',
			lead: 'Based in Miami, Colors of Design Group is a distinguished interior design firm creating refined, highly curated interiors for residences and projects across the United States.',
			p1: 'Our work is defined by a sophisticated balance of timeless elegance, contemporary sensibility, and thoughtful individuality.',
			p2: 'Each project is approached as a unique expression of our client\'s lifestyle, where architecture, materials, furnishings, and art come together in a cohesive and deeply personal environment. From concept through completion, we bring an uncompromising attention to detail and a distinctive design perspective to every space we create.',
			exploreWork: 'Explore our residential work',
			teamEyebrow: 'About the Team',
			teamHeading: 'Experienced designers committed to every detail.',
			teamLead:
				'Colors of Design brings together designers, architects, and collaborators who share a dedication to thoughtful interiors, from the first floor plan to the final installation.',
			perspectiveEyebrow: 'Our perspective',
			perspectiveHeading: 'Beautiful rooms.\nA meaningful whole.',
			perspectiveCopy:
				'We look beyond individual pieces to how rooms connect, light moves, and objects give a space its character, always starting with the person who will live there, and the balance of beauty and everyday ease their home calls for.',
			discoverProcess: 'Discover our process',
		},
		contact: {
			title: 'Contact Our Miami Interior Design Studio | Colors of Design',
			description:
				'Contact Colors of Design Group, a Miami interior design studio creating refined residential interiors across South Florida and beyond.',
			jsonName: 'Contact Colors of Design',
			p1: 'Colors of Design is a Miami interior design studio creating harmonious, modern, and timeless homes, from first concept to final installation.',
			p2: `Founded by ${site.founder}, our team works with clients across South Florida, North Carolina, and beyond on space planning, custom design, furnishings, and turnkey installation.`,
			email: 'Email',
			phone: 'Phone',
			studio: 'Studio',
			hours: 'Hours',
			hoursValue: 'Monday–Friday · 8 am–5 pm',
			meetStudio: 'Meet the studio',
		},
		process: {
			title: 'Our Interior Design Process | Colors of Design, Miami',
			description:
				'Explore the Colors of Design process, from your first consultation and design proposal to planning, material selections, project coordination, and installation.',
			eyebrow: 'From first conversation to finishing touches',
			h1: 'A clear path from vision to home.',
			lead: 'Good design grows from a thoughtful process. We bring structure to the decisions, create space for collaboration, and keep the whole home in view.',
			p: 'Each project has its own starting point. Whether you are building, renovating, or furnishing, we shape the scope around your home and your priorities.',
			exploreServices: 'Explore our design services',
			imageAlt: 'Sculptural lighting and dining furnishings in the Solaris residence',
			steps: [
				[
					'Consultation',
					'We listen first: how you live, what your home needs, and what you hope to change. We discuss the property, your priorities, and your expectations.',
				],
				[
					'Proposal',
					'The proposal defines our role, the scope of services, and the design fees. You can see how we will work together before the design begins.',
				],
				[
					'Research & planning',
					'We explore layouts, materials, textures, and the people who will help realize the design. Space planning connects your brief with the possibilities of the property.',
				],
				[
					'Design presentation',
					'Concepts, material selections, furnishings, and visualizations make the direction tangible. Your feedback helps refine the design into a home that feels personal.',
				],
				[
					'Budget & coordination',
					'With the direction agreed, we review the project budget, timeline, and requirements. Selections and priorities are considered together before execution.',
				],
				[
					'Execution & installation',
					'The approved design moves into construction coordination, purchasing, and installation. Furniture, lighting, and finishing details come together in the completed space.',
				],
			],
			faqEyebrow: 'Before we begin',
			faqHeading: 'A few things you may be wondering.',
			faqs: [
				{
					q: 'When should I bring an interior designer into the project?',
					a: 'As early as you can, especially for a renovation or new home. Early conversations help align the layout, finishes, and furnishings before decisions become difficult to change.',
				},
				{
					q: 'What should I prepare for our first conversation?',
					a1: 'A few photos, available floor plans, your priorities, and an idea of your timing and investment are a useful start. Read our ',
					linkLabel: 'consultation preparation guide',
					a2: '.',
				},
				{
					q: 'Can you help if I live elsewhere?',
					a1: 'Our ',
					linkLabel: 'turnkey service',
					a2: ' supports owners who need project coordination while they are away. Share your property’s location and we can discuss the scope.',
				},
				{
					q: 'How long will my project take?',
					a: 'Timing depends on the property, scope, approvals, and the availability of materials and furnishings. We discuss these factors with you as the project is defined.',
				},
			],
		},
		privacy: {
			title: 'Website Privacy | Colors of Design',
			description: 'How the Colors of Design website handles project inquiries, email, and website requests.',
			label: 'Privacy',
			heading: 'A note on your privacy.',
			intro: 'Here is how information is handled when you browse this website or send a project inquiry.',
			h2inquiries: 'Project inquiries',
			p1: 'The inquiry form sends your name, contact details, and project notes to the studio by email so we can respond. The website does not store form submissions in a database.',
			p2: 'Messages are delivered through our email provider. Please include only what is needed to discuss your project.',
			h2browse: 'Browsing the website',
			p3: 'Your browser requests pages and images from our hosting provider and fonts from Google Fonts. These providers receive connection information, including your IP address, to serve those resources. This website does not currently include advertising trackers, analytics scripts, or a newsletter signup.',
			h2questions: 'Questions about your information',
			p4a: 'For questions about information you have shared with the studio, email ',
		},
		notFound: {
			title: 'Page Not Found | Colors of Design',
			label: 'Page not found',
			eyebrow: '404 · A different direction',
			heading: 'Let’s find your way home.',
			description:
				'This page may have moved or is no longer available. Explore our recent work or get in touch with the studio.',
			exploreWork: 'Explore our work',
			contactStudio: 'Contact the studio',
		},
		awards: {
			title: 'Awards & Recognitions | Colors of Design Group',
			description:
				'Explore awards and recognitions for Colors of Design Group, including Luxury Lifestyle Awards, Design Minds, and Best of Houzz honors in Miami.',
		},
		services: {
			title: 'Miami Interior Design Services | Colors of Design Group',
			description:
				'Luxury interior design services in Miami by Colors of Design Group, including space planning, turn key services, 3D rendering, custom woodwork, project management, lighting design, furniture design, and more.',
			thingName: 'Interior design services',
			heading: 'What We Do',
			introduction:
				'Our services include a wide range of design services, from full residential design analysis to space planning, design concept development, furniture plans, custom design, construction drawings, product specifications, purchasing, installation of materials, and project management. We work throughout the United States and Latin America.',
			detailNote:
				'We define the right scope for your property during our initial conversations. Your proposal sets out the services and responsibilities for your project.',
			seeHow: 'See how we work',
			inPractice: 'In practice',
			moreThanRooms: 'A home is more than its individual rooms.',
			seeHowPlanning: 'See how planning, materials, and furnishings come together in our residential work.',
			exploreProjects: 'Explore our projects',
			exploreServices: 'Explore our services.',
			titleSuffix: (name: string) => `${name} in Miami | Colors of Design`,
		},
		work: {
			title: 'Interior Design Portfolio | Colors of Design Group',
			description:
				'Browse residential interior design projects by Colors of Design Group, including homes in Coral Gables, Miami Beach, and Brickell.',
			thingName: 'Residential interior design',
			listName: 'Interior design projects',
			itemName: (name: string) => `${name} interior design`,
			heading: 'Interior Design Portfolio',
			introduction:
				'A collection of residences by Colors of Design Group, full-service interior design, interior architecture, and furnishings for homes in Miami, Coral Gables, and beyond. Select a project to see the brief, materials, and rooms.',
			projectEyebrow: 'Interior Design Project',
			approach: 'The approach',
			result: 'The result',
			roomsDetails: 'Rooms & Details',
			moreProjects: 'More Projects',
			jsonWorkName: 'Work',
			jsonHome: 'Home',
			interiorPhotography: (name: string) => `${name} interior photography`,
			interiorDesign: (name: string) => `${name} Interior Design`,
			keywords: ['interior design', 'luxury residential interiors'],
		},
		journal: {
			title: 'Interior Design Journal & Ideas | Colors of Design',
			description:
				'Interior design ideas and practical advice from the Colors of Design journal. Explore lighting, thoughtful planning, and preparing for your design consultation.',
			jsonName: 'Colors of Design Journal',
			heading: 'Notes on the art of living.',
			eyebrow: 'The journal · Ideas for a considered home',
			introduction:
				'Perspectives on interiors, the details that make a room, and the decisions that bring a home together.',
			previewHeading: 'A considered way of living.',
			previewEyebrow: 'From the journal',
			continueReading: 'Continue reading',
			articleCta1: 'Tell us about your home',
			articleCta2: 'our residential portfolio',
			articleCtaMid: ' or explore ',
			articleCtaEnd: ' to see these ideas in practice.',
		},
		shop: {
			title: 'Home Decor Online Shop | Colors of Design Group',
			description:
				'Shop one-of-a-kind home decor, lighting, and furniture from Colors of Design Group, special-order pieces curated for luxurious interiors.',
			listName: 'Colors of Design shop',
			heading: 'One of a Kind',
			eyebrow: 'Shop',
			descriptionPage:
				'These beautiful products are special order, they will take 4 to 12 weeks to arrive. Most are custom made or special orders. Buy with confidence to receive something extraordinary and special that will enhance with luxury your interiors.',
			about: 'About',
			details: 'Details',
			availability: 'Availability',
			availabilityCopy:
				'Special-order piece. Lead times vary by item. Contact the studio to inquire, confirm timing, and arrange purchase.',
			inquire: 'Inquire to purchase',
			youMayLike: 'You may also like',
			titleSuffix: (name: string) => `${name} | Colors of Design Shop`,
			imagesAria: (name: string) => `${name} images`,
		},
		navLinks: [
			{ label: c.nav.portfolio, href: path('/work/') },
			{ label: c.nav.services, href: path('/services/') },
			{ label: c.nav.about, href: path('/about-us/') },
			{ label: c.nav.awards, href: path('/awards-and-recognitions/') },
			{ label: c.nav.shop, href: path('/interior-design-online-shop/') },
			{ label: c.nav.contact, href: path('/contact-us/') },
		],
	};
}
