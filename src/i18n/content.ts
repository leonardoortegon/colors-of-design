import type { Locale } from './locale';
import { localizedPath } from './locale';
import { services, type Service } from '../data/services';
import { teamMembers, type TeamMember } from '../data/team';
import { awards, awardsIntro, type AwardRecognition } from '../data/awards';
import { journalPosts } from '../data/journal';
import { shopIntro, shopProducts, type ShopProduct } from '../data/shop';
import { getPortfolioProjects, type Project } from '../data/projects';
import { projectsEs } from './projects.es';
import { copy } from './ui';

const servicesEs: Record<string, Pick<Service, 'name' | 'scope' | 'summary' | 'description' | 'included' | 'imageAlt'>> = {
	'space-planning': {
		name: 'Planificación espacial',
		scope: 'Residencial · Planificación · Distribución',
		summary:
			'Un componente esencial del diseño de interiores y la arquitectura que define las zonas de un espacio y las actividades que ocurrirán en ellas.',
		description:
			'La planificación espacial es un componente importante para el trabajo de diseñadores de interiores y arquitectos. Define las zonas del espacio y las actividades que tendrán lugar en esas zonas.',
		included: ['Plan de zonas', 'Mapa de actividades', 'Flujo espacial', 'Distribución de mobiliario', 'Programación funcional'],
		imageAlt: 'Zonas de estar, comedor y cocina conectadas que muestran la planificación espacial residencial por Colors of Design Group',
	},
	'turn-key-services': {
		name: 'Servicios llave en mano',
		scope: 'Proyecto completo · Propietarios ausentes · Del concepto a la entrega',
		summary:
			'Liderazgo integral del proyecto para propietarios que necesitan un estudio de confianza que lleve una residencia de la idea a la conclusión.',
		description:
			'Si es un propietario ausente, puede estar seguro de que su proyecto estará en buenas manos, de la idea a la entrega. Cuidamos de obtener excelentes resultados finales.',
		included: ['Desarrollo de concepto', 'Dirección de diseño', 'Compras', 'Instalación', 'Supervisión del proyecto'],
		imageAlt: 'Residencia concluida con estar, cocina y carpintería entregada llave en mano por Colors of Design Group',
	},
	'3d-rendering': {
		name: 'Renderizado 3D',
		scope: 'Visualización · Desarrollo de concepto · Preconstrucción',
		summary: 'Renders arquitectónicos que escenifican y visualizan espacios antes de construirlos.',
		description:
			'Los renders arquitectónicos 3D se usan para escenificar y visualizar espacios antes de construirlos. Un render 3D es un plus para visualizar su interior.',
		included: ['Renders de interiores', 'Estudios de materiales', 'Previsualización de iluminación', 'Presentaciones de diseño', 'Visualización previa a la obra'],
		imageAlt: 'Render arquitectónico 3D de un espacio interior por Colors of Design Group',
	},
	'custom-woodwork': {
		name: 'Carpintería a medida',
		scope: 'Carpintería · Oficio · Empotrados',
		summary: 'Carpintería a medida realizada con artesanos expertos para detalles exclusivos y a la medida.',
		description:
			'Trabajamos con los mejores artesanos para ofrecer lo mejor a nuestros clientes. Los oficios garantizan diseños exclusivos para su lugar favorito.',
		included: ['Carpintería a medida', 'Gabinetes empotrados', 'Detalle artesanal', 'Tocadores y ebanistería', 'Diseños exclusivos en madera'],
		imageAlt: 'Carpintería de cocina en madera oscura a medida con superficies de mármol por Colors of Design Group',
	},
	'project-management': {
		name: 'Gestión de proyectos',
		scope: 'Coordinación · Programación · Planificación de obra',
		summary: 'Gestión dedicada del proyecto, desde la revisión de diseño hasta la planificación y el desarrollo de la obra.',
		description:
			'Realizamos investigación de mercado y facilitamos reuniones de revisión de diseño y planificación de obra. Nuestro gestor de proyectos cuida el desarrollo del proyecto.',
		included: ['Reuniones de revisión de diseño', 'Planificación de obra', 'Coordinación de proveedores', 'Gestión de cronograma', 'Investigación de mercado'],
		imageAlt: 'Gestión de proyectos de diseño de interiores por Colors of Design Group',
	},
	'lighting-design': {
		name: 'Diseño de iluminación',
		scope: 'Interior · Arquitectónica · Iluminación exterior',
		summary: 'Planes de iluminación alrededor de luminarias icónicas, luz arquitectónica y las necesidades de cada estancia.',
		description:
			'Diseño de iluminación con lámparas icónicas e innovadoras para el hogar, iluminación exterior y luces arquitectónicas. Creamos planes de iluminación según su espacio y necesidades.',
		included: ['Planes de iluminación', 'Selección de luminarias', 'Iluminación arquitectónica', 'Iluminación exterior', 'Iluminación en capas'],
		imageAlt: 'Iluminación en riel e iluminación en capas en una sala moderna con pared de listones de madera por Colors of Design Group',
	},
	'furniture-design': {
		name: 'Diseño de mobiliario',
		scope: 'Mobiliario a medida · Materiales sostenibles · Oficio',
		summary: 'Diseños de mobiliario a medida desarrollados con materiales sostenibles y un oficio excepcional.',
		description:
			'Ofrecemos mobiliario a medida, diseños exclusivos y el uso de materiales sostenibles. Contará también con la mejor artesanía.',
		included: ['Mobiliario a medida', 'Diseños exclusivos', 'Materiales sostenibles', 'Dirección de tapicería', 'Oficio artesanal'],
		imageAlt: 'Consola de mármol a medida diseñada para un interior residencial por Colors of Design Group',
	},
	'budget-management': {
		name: 'Administración de presupuesto',
		scope: 'Planificación · Compras · Control de costos',
		summary: 'Guía disciplinada del presupuesto para que las decisiones de diseño se alineen con su inversión.',
		description:
			'Sin un presupuesto, un proyecto de diseño de interiores puede desbordarse con facilidad. Aproveche al máximo su inversión. Trabajamos dentro del presupuesto de nuestros clientes.',
		included: ['Planificación presupuestaria', 'Seguimiento de costos', 'Estrategia de compras', 'Ingeniería de valor', 'Guía de inversión'],
		imageAlt: 'Cocina con materiales y acabados especificados por Colors of Design Group',
	},
	'feng-shui': {
		name: 'Feng shui',
		scope: 'Flujo de energía · Armonía espacial · Colocación intencionada',
		summary: 'Disposición intencionada del entorno para mejorar el flujo, la claridad y una sensación de equilibrio.',
		description:
			'El feng shui trabaja el despeje del desorden y la disposición intencionada del entorno para que refleje y sostenga a quien lo habita, mejorando el flujo de buena energía y bienestar.',
		included: ['Armonía espacial', 'Despeje del desorden', 'Colocación intencionada', 'Flujo de energía', 'Entornos equilibrados'],
		imageAlt: 'Dormitorio principal de descanso con mobiliario equilibrado y paleta serena por Colors of Design Group',
	},
	'interior-architecture': {
		name: 'Arquitectura de interiores',
		scope: 'Diseño espacial · Seguridad · Función · Estética',
		summary: 'El diseño arquitectónico de interiores centrado en la seguridad, la funcionalidad y la estética.',
		description:
			'La arquitectura de interiores es el diseño de un interior en términos arquitectónicos: el arte espacial del diseño ambiental. Diseñamos interiores para seguridad, funcionalidad y estética.',
		included: ['Planificación espacial', 'Detalle arquitectónico', 'Especificación de acabados', 'Dibujos de construcción', 'Diseño consciente de normativa'],
		imageAlt: 'Arquitectura de interiores con balcón interior y vistas costeras por Colors of Design Group',
	},
	'interior-design': {
		name: 'Diseño de interiores',
		scope: 'Residencial · Desarrollo de concepto · Interiores completos',
		summary: 'Un proceso de diseño centrado en el cliente, basado en cómo cada espacio debe verse, sentirse y funcionar.',
		description:
			'Escuchamos con atención las necesidades, proyecciones e intenciones del cliente para cada espacio. Esto incluye la revisión y comprensión de sus deseos.',
		included: ['Conceptos de diseño', 'Selección de materiales', 'Planos de mobiliario', 'Paletas de acabados', 'Instalación'],
		imageAlt: 'Sala residencial amueblada de diseño de interiores integral por Colors of Design Group',
	},
	'custom-window-treatment': {
		name: 'Tratamientos de ventana a medida',
		scope: 'Cortinería · Persianas · Instalación a medida',
		summary:
			'Tratamientos de ventana especificados para proporción, control de luz y un acabado que complementa la arquitectura.',
		description:
			'Los tratamientos de ventana definen cómo se siente una estancia a lo largo del día. Colors of Design especifica cortinería, persianas y herrajes a medida para cada vano, equilibrando privacidad, luz y la composición general del diseño.',
		included: [
			'Selección de telas y materiales',
			'Cortinería a medida',
			'Persianas y stores',
			'Coordinación de herrajes',
			'Instalación profesional',
		],
		imageAlt: 'Cortinería a medida enmarcando ventanas de piso a techo en una sala por Colors of Design Group',
	},
	'custom-millwork-cabinetry': {
		name: 'Carpintería y gabinetes a medida',
		scope: 'Empotrados · Tocadores · Ebanistería a medida',
		summary:
			'Gabinetes y carpintería a medida diseñados para integrarse a la arquitectura y sostener la vida cotidiana con detalle refinado.',
		description:
			'Desde empotrados y tocadores hasta paquetes completos de ebanistería, nuestra carpintería se especifica como parte de la composición interior, con materiales, proporciones y herrajes elegidos para una calidad duradera.',
		included: [
			'Diseño de gabinetes',
			'Almacenamiento empotrado',
			'Tocadores y ebanistería',
			'Selección de acabados',
			'Supervisión de instalación',
		],
		imageAlt: 'Gabinetes empotrados de carpintería con acabados en madera cálida por Colors of Design Group',
	},
	'wallpaper-selections-and-installation': {
		name: 'Selección e instalación de papel tapiz',
		scope: 'Revestimientos · Patrón · Instalación profesional',
		summary:
			'Selección de papeles tapiz curada por escala, tono y carácter de la estancia, con instalación supervisada para un acabado preciso y duradero.',
		description:
			'Los revestimientos aportan profundidad, textura y personalidad a una estancia. Seleccionamos papeles adecuados a cada espacio, coordinamos patrón y paleta con el diseño general y supervisamos la instalación para un resultado limpio y refinado.',
		included: [
			'Selección de revestimientos',
			'Revisión de patrón y escala',
			'Coordinación de muestras',
			'Coordinación con instaladores',
			'Detalle de acabados',
		],
		imageAlt: 'Revestimiento texturizado detrás de un cabecero a medida por Colors of Design Group',
	},
	'sustainable-green-outdoor-design': {
		name: 'Diseño exterior sostenible',
		scope: 'Terrazas · Jardines · Vida al aire libre consciente',
		summary:
			'Espacios exteriores diseñados con materiales sostenibles, plantación y mobiliario que extienden la vida cómoda más allá del interior.',
		description:
			'El diseño exterior debe sentirse tan intencional como las estancias interiores. Desarrollamos terrazas, jardines y áreas de estar al aire libre con selecciones duraderas y ecológicas, y distribuciones adecuadas para vivir en el sur de Florida.',
		included: [
			'Planificación del exterior',
			'Selección de materiales sostenibles',
			'Mobiliario y sombra',
			'Dirección de plantación',
			'Coordinación de instalación',
		],
		imageAlt: 'Área de estar exterior con mobiliario para vivir en el sur de Florida por Colors of Design Group',
	},
	'sustainable-green-indoor-design': {
		name: 'Diseño interior sostenible',
		scope: 'Materiales · Acabados · Interiores conscientes',
		summary:
			'Especificaciones interiores que priorizan materiales sostenibles, acabados más saludables y diseño atemporal con menor huella ambiental.',
		description:
			'El diseño interior sostenible equilibra belleza y responsabilidad. Especificamos materiales, acabados y mobiliario que apoyan interiores más saludables, preservando la atmósfera refinada y de colección que nuestros clientes esperan.',
		included: [
			'Abastecimiento de materiales sostenibles',
			'Selección de acabados de bajo impacto',
			'Mobiliario y textiles',
			'Investigación de proveedores',
			'Documentación de especificaciones',
		],
		imageAlt: 'Interior sostenible con superficies de piedra y madera cálida por Colors of Design Group',
	},
	'plants-selections': {
		name: 'Selección de plantas',
		scope: 'Plantación interior · Escala · Colocación',
		summary:
			'Selección de plantas para suavizar la arquitectura, dar vida a la estancia y complementar la composición interior.',
		description:
			'Las plantas aportan movimiento, textura y calidez a un interior. Seleccionamos especies y ubicaciones adecuadas a la luz, escala y mantenimiento de cada estancia, integrando la vegetación como parte del diseño concluido.',
		included: [
			'Selección de plantas',
			'Escala y colocación',
			'Coordinación de contenedores',
			'Evaluación de luz',
			'Estilismo e instalación',
		],
		imageAlt: 'Sala Placeres con plantación interior y detalles de diseño en capas por Colors of Design Group',
	},
	'art-selections': {
		name: 'Selección de arte',
		scope: 'Curaduría · Colocación · Desarrollo de colección',
		summary:
			'Selección de arte curada para dar a cada estancia un punto focal y un carácter personal.',
		description:
			'El arte completa una estancia cuando se elige con intención. Curamos piezas, esculturas y composiciones murales que reflejan el gusto del cliente y fortalecen la narrativa general del diseño.',
		included: [
			'Búsqueda de arte',
			'Planificación de colocación',
			'Revisión de escala y proporción',
			'Coordinación de instalación',
			'Desarrollo de colección',
		],
		imageAlt: 'Cuadro curado como punto focal de un pasillo residencial por Colors of Design Group',
	},
	'luxury-accessories-selections': {
		name: 'Selección de accesorios de lujo',
		scope: 'Estilismo · Objetos · Capas de acabado',
		summary:
			'Accesorios de lujo seleccionados para completar cada estancia con textura, contraste y una sensación de colección serena.',
		description:
			'Los accesorios son la capa final que hace que un espacio se sienta personal y completo. Seleccionamos objetos, piezas de mesa y acentos de estilismo que elevan el interior sin saturarlo.',
		included: [
			'Búsqueda de accesorios',
			'Estilismo de mesa y objetos',
			'Acentos textiles',
			'Acentos de iluminación decorativa',
			'Instalación y colocación',
		],
		imageAlt: 'Detalle de mobiliario de lujo con contraste suave y materiales a medida por Colors of Design Group',
	},
};

export function localizeServices(locale: Locale): Service[] {
	if (locale === 'en') return services;
	return services.map((service) => ({ ...service, ...servicesEs[service.slug] }));
}

const teamEs: Record<string, Pick<TeamMember, 'role' | 'imageAlt' | 'paragraphs'>> = {
	'Margaret Van Puffelen': {
		role: 'Fundadora',
		imageAlt: 'Margaret Van Puffelen de Colors of Design',
		paragraphs: [
			'Nacida en Viña del Mar, Chile, Margaret estudió artes decorativas en Bellas Artes antes de explorar estas disciplinas en Estados Unidos, trabajando para Smith Architects, Leonard Pardon y Richard Palmer Design en Palm Beach, Florida, decorando grandes residencias.',
			'El camino de las artes decorativas la llevó a estudiar diseño de interiores y arquitectura de interiores en Miami International University of Art and Design, donde se graduó con un Bachelor of Fine Arts in Interior Design.',
			'Margaret desarrolló su carrera como diseñadora de interiores en proyectos para clientes de Estados Unidos y América Latina. Hoy, Margaret y su equipo en Colors of Design desarrollan proyectos para clientes en todo el país, rodeados de profesionales experimentados y talentosos, comprometidos a ir más allá del estándar, en proyectos grandes o pequeños.',
		],
	},
	'William Riveros': {
		role: 'Arquitecto',
		imageAlt: 'William Riveros, arquitecto en Colors of Design',
		paragraphs: [
			'William es un talentoso diseñador de interiores. Completó sus estudios como arquitecto en Bolivia y se mudó a Miami para continuar su formación y práctica profesional. Su personalidad abierta lo lleva siempre a nuevos retos y aprendizajes. William ha trabajado en proyectos en Londres, Nueva York y Miami.',
			'Impulsado por la pasión y el logro, el talento de William es un activo para nuestro estudio. Su amor por el diseño se alimenta del viaje y la exploración, de visitas a exposiciones, de sumergirse en proyectos los fines de semana y de descubrir salidas creativas como la realidad virtual para el diseño de interiores, nuevo software y la pintura.',
			'William combina estos intereses con su trabajo diario, creando entornos donde puede prosperar y evolucionar ideas que conducen a grandes conceptos de diseño de interiores.',
		],
	},
	'Yusnelis Alvarez': {
		role: 'Arquitecta, diseñadora de interiores',
		imageAlt: 'Yusnelis Alvarez, arquitecta y diseñadora de interiores en Colors of Design',
	},
	Ulysses: {
		role: 'Diseñador de interiores y arquitecto',
		imageAlt: 'Ulysses, diseñador de interiores y arquitecto en Colors of Design',
		paragraphs: [
			'Con un título en arquitectura y construcción general de la Universidad de México, Ulysses se especializó en diseño de interiores, arquitectura, visualización conceptual y planificación espacial.',
			'Con amplia experiencia en estudios como FREE, Fernando Romero y Michel Rojkind, y en proyectos en México, Estados Unidos, América Latina y Europa, Ulysses aporta un conjunto de habilidades de gran valor a Colors of Design, donde su expertise ayuda a reunir hermosos proyectos para nuestros clientes.',
			'Ulysses cuenta con el respeto de clientes y colegas de la industria por su ética de trabajo y su enfoque en el detalle. Su trabajo ha sido publicado en revistas especializadas de arquitectura y por compañías alrededor del mundo.',
		],
	},
};

export function localizeTeam(locale: Locale): TeamMember[] {
	if (locale === 'en') return teamMembers;
	return teamMembers.map((member) => ({ ...member, ...teamEs[member.name] }));
}

const awardsIntroEs = {
	heading: 'Premios y reconocimientos',
	description:
		'Colors of Design ha sido distinguido por pares de la industria, publicaciones y la comunidad Houzz por excelencia en diseño y servicio al cliente.',
};

const awardsEs: AwardRecognition[] = [
	{
		eyebrow: 'Reconocimiento de la industria',
		heading: 'Luxury Lifestyle Awards',
		image: {
			src: '/luxury-lifestyle.jpg',
			alt: 'Reconocimiento Luxury Lifestyle Awards 2023 para Colors of Design Group',
			width: 798,
			height: 1024,
		},
		imageCaption: 'Luxury Lifestyle Awards · 2023',
		paragraphs: [
			'Colors of Design fue reconocido en los Luxury Lifestyle Awards 2023, que celebran estudios que combinan un oficio excepcional con un enfoque profundamente personal del diseño residencial.',
			'El honor refleja nuestro compromiso de crear interiores armoniosos y atemporales en Miami y más allá, espacios pensados para cómo viven, se reúnen y descansan nuestros clientes.',
		],
	},
	{
		eyebrow: 'Prensa local',
		heading: 'Design Minds',
		image: {
			src: '/design-minds.jpg',
			alt: 'Invitación al evento Design Minds 2023 con Colors of Design Group',
			width: 734,
			height: 1024,
		},
		imageCaption: 'Design Minds · Miami',
		paragraphs: [
			'Nuestro estudio fue invitado a Design Minds 2023, un encuentro que reúne a la comunidad de diseño de Miami para compartir ideas, inspiración y nuevas perspectivas sobre el hogar.',
			'El evento fue presentado por Magazine Key Biscayne y Magazine Brickell, publicaciones en el centro de la cultura de arquitectura, interiores y estilo de vida del sur de Florida.',
		],
	},
	{
		eyebrow: 'Key Biscayne Magazine',
		heading: 'Margaret Van Puffelen',
		image: {
			src: '/margaret-magazine.avif',
			alt: 'Margaret Van Puffelen en Key Biscayne Magazine, foto de Carlos Toledo',
			width: 1320,
			height: 1668,
		},
		imageCaption: 'Foto de Carlos Toledo',
		logos: [{ src: '/key-biscayne-logo.svg', alt: 'Magazine Key Biscayne' }],
		paragraphs: [
			'Cuando vio por primera vez la residencia de inspiración renacentista italiana en Pine Tree Drive, Miami Beach, que se convertiría en su primer proyecto de diseño, Margaret Van Puffelen de Colors of Design supo que su futuro en el campo era brillante. Nacida en Chile, estudió artes decorativas y se graduó en diseño de interiores y arquitectura, completando certificaciones en ADA Interior Design, técnicas de diseño universal y feng shui.',
			'«Me inspira la forma y la planificación espacial, y cómo la arquitectura y el diseño impactan la vida de las personas», dice. «Mi estética es moderna y contemporánea, con acentos de color, toques étnicos, acabados de lujo, texturas finas y todo lo que inspira». ColorsofDesign.com.',
		],
	},
	{
		eyebrow: 'Decor Book',
		heading: 'Margaret Van Puffelen',
		stackedImage: {
			src: '/decor-01.avif',
			alt: 'Retrato de Margaret Van Puffelen en Decor Book',
			width: 1086,
			height: 1335,
		},
		image: {
			src: '/decor-01.jpg',
			alt: 'Página de Decor Book con Colors of Design Group',
			width: 1448,
			height: 1086,
		},
		imageCaption: 'Decor Book · página 312',
		lead: 'Colors of Design',
		paragraphs: [
			'Con una visión anclada en el modernismo orgánico y el naturalismo refinado, Colors of Design transformó este apartamento mid-century—diseñado originalmente por el arquitecto Morris Lapidus—en un retiro eco-chic en el corazón de Miami Beach. El proyecto une lujo contenido y sostenibilidad, y ofrece a sus propietarios sudamericanos un escape sereno de una vida de ritmo intenso.',
			'Dirigido por un equipo multidisciplinario, el estudio abordó esta remodelación integral con énfasis en funcionalidad, equilibrio y elegancia atemporal. Paletas neutras, texturas en capas y mobiliario a medida se unieron para evocar calma y sofisticación costera. Un elemento destacado: la chimenea escultórica, que ancla el área de estar mientras integra a la perfección iluminación, almacenamiento y tecnología doméstica.',
			'Conocido por diseñar hogares de concepto a finalización, Colors of Design aporta una mentalidad arquitectónica a su trabajo de interiores, con especial atención a la planificación espacial, la luz natural y la longevidad de los materiales. Este proyecto refleja no solo la estética del cliente, sino el compromiso del estudio con espacios que se sienten personales, arraigados y duraderos.',
		],
	},
	{
		eyebrow: 'Elección de clientes',
		heading: 'Best of Houzz',
		badges: awards[4].badges,
		lead: 'El premio anual de elección popular reconoce a profesionales de la comunidad Houzz que destacan tanto en talento como en servicio al cliente.',
		paragraphs: [
			'Colors of Design Group ha sido reconocido de forma constante por excelencia en diseño de interiores y satisfacción del cliente. El estudio ha recibido el premio Best of Houzz – Service durante cinco años (2020, 2022–2025), reflejando comentarios destacados de clientes.',
			'Además, cuenta con múltiples distintivos Houzz por herramientas profesionales, recomendaciones de la comunidad y proyectos guardados.',
		],
	},
	{
		eyebrow: 'Afiliación profesional',
		heading: 'American Society of Interior Designers',
		badges: awards[5].badges,
		paragraphs: [
			'Colors of Design también está afiliado a la American Society of Interior Designers (ASID), lo que subraya su compromiso con los estándares de la industria y la excelencia en el diseño.',
		],
	},
];

export function localizeAwards(locale: Locale) {
	const localizedAwards = locale === 'es' ? awardsEs : awards;
	const preferredOrder = ['Decor Book', 'Design Minds', 'Key Biscayne Magazine', 'Luxury Lifestyle Awards'];
	const awardOrderKey = (award: AwardRecognition) =>
		['Design Minds', 'Luxury Lifestyle Awards'].includes(award.heading) ? award.heading : award.eyebrow;

	const orderedAwards = localizedAwards
		.map((award, index) => ({ award, index }))
		.sort((a, b) => {
			const aRank = preferredOrder.indexOf(awardOrderKey(a.award));
			const bRank = preferredOrder.indexOf(awardOrderKey(b.award));
			return (aRank === -1 ? preferredOrder.length : aRank) - (bRank === -1 ? preferredOrder.length : bRank) || a.index - b.index;
		})
		.map(({ award }) => award);

	return locale === 'es'
		? { intro: awardsIntroEs, items: orderedAwards }
		: { intro: awardsIntro, items: orderedAwards };
}

const journalEs = [
	{
		url: '/home-decor-tips/5-ways-to-prepare-for-your-design-consultation/',
		title: 'Cinco formas de prepararse para su consulta de diseño',
		category: 'Planificar un hogar',
		description:
			'Una preparación breve deja espacio para una conversación más útil. Empiece por la forma en que vive y luego reúna los detalles.',
		alt: 'Mobiliario de comedor en la residencia Asheville',
	},
	{
		url: '/interior-design-blog/layered-lighting-for-a-more-comfortable-home/',
		title: 'Un resplandor más suave: el arte de la iluminación en capas',
		category: 'Notas de diseño',
		description: 'Desde la primera luz de la mañana hasta la última lámpara de la noche, una iluminación pensada cambia cómo se siente una habitación.',
		alt: 'Lámparas colgantes escultóricas sobre una mesa de comedor en Solaris',
	},
	{
		url: '/interior-design-blog/materials-that-give-a-room-character/',
		title: 'Materiales que dan carácter a una habitación',
		category: 'Notas de diseño',
		description:
			'La piedra, la madera, el lino y el yeso aportan cada uno su propio ritmo a un hogar. Elegir con intención crea estancias serenas y en capas.',
		alt: 'Arte y mobiliario dispuesto con cuidado en la sala de Casa del Mar',
	},
	{
		url: '/interior-design-blog/space-planning-before-you-furnish/',
		title: 'Planificación espacial antes de amueblar',
		category: 'Planificar un hogar',
		description:
			'Un plano pensado aclara la circulación y la proporción antes de seleccionar una sola pieza de mobiliario.',
		alt: 'Mobiliario y proporciones de la sala en la residencia Placeres',
	},
] as const;

export function localizeJournal(locale: Locale) {
	return journalPosts.map((post, index) => {
		const overlay = locale === 'es' ? journalEs[index] : null;
		return {
			...post,
			...(overlay ?? {}),
			url: localizedPath(locale, post.url),
		};
	});
}

const shopIntroEs = {
	eyebrow: 'Tienda',
	heading: 'Piezas únicas',
	description:
		'Estos productos son por encargo y tardan de 4 a 12 semanas en llegar. La mayoría son hechos a medida o pedidos especiales. Compre con confianza para recibir algo extraordinario que eleve sus interiores.',
};

const shopEs: Record<string, Pick<ShopProduct, 'name' | 'summary' | 'description' | 'categories' | 'imageAlt'> & { galleryAlts: string[] }> = {
	'table-lamp': {
		name: 'Lámpara de mesa',
		summary:
			'Lámpara portátil e inalámbrica de cristal de cuarzo, alojada en latón y sobre base de concreto. Esta lámpara de acento para meditación incluye interruptor regulable y bombilla LED recargable.',
		description: 'Tiempo de entrega: 4 semanas. Garantía: 3 semanas. Hecha en EE. UU.',
		categories: ['Pieza única'],
		imageAlt: 'Lámpara de mesa de cristal de cuarzo por Colors of Design Group',
		galleryAlts: ['Lámpara de mesa de cristal de cuarzo sobre base de concreto', 'Detalle de la lámpara de mesa de cristal de cuarzo'],
	},
	'one-of-a-kind': {
		name: 'Pieza única',
		summary:
			'Estas luminarias de retícula son únicas, hechas para el espacio de quien las ama. Están elaboradas con piedra natural, puntas de cuarzo cristalino y minerales de distintas partes del mundo.',
		description:
			'Uso residencial o comercial. Tiempo de entrega: 12–16 semanas (según disponibilidad). Garantía: 2 semanas. Hecha en EE. UU.',
		categories: ['Pieza única'],
		imageAlt: 'Luminaria de cristal única por Colors of Design Group',
		galleryAlts: ['Exhibición de luminaria de cristal única', 'Detalle de luminaria de cristal', 'Luminaria única en un interior'],
	},
	'selenite-sconces': {
		name: 'Apliques de selenita',
		summary:
			'La belleza natural de estas luminarias proviene de losas de selenita en bruto con delicados acentos de latón. Cada pieza es única, hecha con piedras directamente de las minas.',
		description:
			'LED regulable. Garantía: 3 semanas. Tiempo de entrega: 6 semanas (varía según disponibilidad). Tamaños a medida disponibles. Hechas en EE. UU.',
		categories: ['Pieza única'],
		imageAlt: 'Apliques de pared de selenita por Colors of Design Group',
		galleryAlts: ['Aplique de selenita con acentos de latón', 'Detalle del aplique de selenita', 'Aplique de selenita iluminado', 'Par de apliques de selenita'],
	},
	'crystal-floor-lamp': {
		name: 'Lámpara de pie de cristal',
		summary:
			'Nuestras lámparas de pie Soul, portátiles e inalámbricas, se crean con cuarzo cristalino, alojadas en latón y sobre base de concreto: una joya de acento para su hogar.',
		description:
			'Uso interior. Incluyen luz LED regulable, ruedas de cerámica para desplazarlas y bombilla LED recargable con cable. Garantía: 3 semanas. Tiempo de entrega: 12 semanas según disponibilidad. Tamaños y colores a medida disponibles. Hecha en EE. UU.',
		categories: ['Pieza única'],
		imageAlt: 'Lámpara de pie de cuarzo cristalino por Colors of Design Group',
		galleryAlts: [
			'Lámpara de pie de cristal en una sala',
			'Lámpara de pie de cristal con base de concreto',
			'Detalle de lámpara de pie de cristal',
			'Vista lateral de la lámpara de pie de cristal',
		],
	},
	'nest-pendant': {
		name: 'Colgante nido',
		summary:
			'Este colgante de vidrio se elabora con técnicas de soplado de Murano. Las formas pueden variar. Es una pieza hecha a mano y un hermoso acento para su flor o planta favorita.',
		description:
			'Tipo: decoración. Dimensiones: altura total 51 in ajustable, diámetro 6 in, altura del vidrio 12 in. Peso 4,3 kg / 9 lb.',
		categories: ['Accesorios', 'Decoración', 'Pieza única'],
		imageAlt: 'Colgante nido de vidrio de Murano por Colors of Design Group',
		galleryAlts: ['Colgante nido de vidrio de Murano', 'Colgante nido con acento botánico', 'Detalle del colgante nido'],
	},
	'luxe-indoor-swing': {
		name: 'Columpio interior Luxe',
		summary:
			'Columpio para uso interior. El asiento es de madera multilaminada, curva y cubierta en cuero natural con bajorrelieve. Las cadenas son de tiras de cuero natural trenzado a mano con alma de acero.',
		description:
			'Dimensiones: An 23 × Pr 12 in × Al 90 in. Garantía: 1 año. Tiempo de entrega: 4–6 semanas. Tamaños y colores a medida disponibles.',
		categories: ['Mobiliario', 'Pieza única'],
		imageAlt: 'Columpio interior de cuero Luxe por Colors of Design Group',
		galleryAlts: [
			'Columpio interior Luxe en una sala',
			'Detalle de cuero del columpio interior',
			'Vista lateral del columpio interior',
			'Detalle de instalación del columpio interior',
		],
	},
	'drop-pendant': {
		name: 'Colgante gota',
		summary:
			'Esta lámpara colgante está hecha de dos formas de vidrio soplado. Recuerda una gota de rocío apoyada una sobre otra, creando formas y reflejos naturales.',
		description:
			'Material: vidrio soplado a mano, acero cromado. Luz: LED, 3,5 W, 200 lm, 2700K. Opciones de regulación disponibles. Tiempo de entrega: 6–8 semanas. Hecha en Italia.',
		categories: ['Pieza única'],
		imageAlt: 'Lámpara colgante gota de vidrio por Colors of Design Group',
		galleryAlts: ['Lámpara colgante gota de vidrio', 'Colgante gota iluminado', 'Detalle del colgante gota'],
	},
	'outdoor-swing': {
		name: 'Columpio exterior',
		summary: 'Un acento hermoso y elegante para su terraza, listo para instalar.',
		description:
			'Dimensiones: ancho 23 in, profundidad 12 in, altura 90 in. Material: estructura de aluminio, cuerda náutica y madera de teca. Tiempo de entrega: 4 semanas. Garantía: 1 año. Tamaños a medida disponibles con costo adicional.',
		categories: ['Mobiliario', 'Pieza única'],
		imageAlt: 'Columpio exterior por Colors of Design Group',
		galleryAlts: ['Columpio exterior en una terraza', 'Detalle del columpio exterior', 'Vista lateral del columpio exterior'],
	},
	'interior-design-gift-card': {
		name: 'Tarjeta de regalo',
		summary:
			'¿Necesita un regalo de último momento o quiere sorprender a alguien ahora? Envíe una tarjeta de regalo por correo de inmediato: el presente perfecto para quienes aman el diseño.',
		description:
			'Al comprar esta tarjeta digital se crea un código único. El destinatario puede ingresarlo al pagar para restar el valor de la tarjeta del total. Esta tarjeta no caduca.',
		categories: ['Pieza única'],
		imageAlt: 'Tarjeta de regalo de Colors of Design Group',
		galleryAlts: ['Tarjeta de regalo de Colors of Design Group'],
	},
};

export function localizeShopIntro(locale: Locale) {
	return locale === 'es' ? shopIntroEs : shopIntro;
}

export function localizeShopProducts(locale: Locale): ShopProduct[] {
	if (locale === 'en') return shopProducts;
	return shopProducts.map((product) => {
		const overlay = shopEs[product.slug];
		if (!overlay) return product;
		const { galleryAlts, ...rest } = overlay;
		return {
			...product,
			...rest,
			gallery: product.gallery.map((image, index) => ({
				...image,
				alt: galleryAlts[index] ?? image.alt,
			})),
		};
	});
}

export function localizeProject(project: Project, locale: Locale): Project {
	if (locale === 'en') return project;
	const overlay = projectsEs[project.slug];
	if (!overlay) return project;
	return {
		...project,
		...overlay,
		gallery: project.gallery.map((image, index) => ({
			...image,
			...overlay.gallery[index],
		})),
	};
}

export function localizeProjects(locale: Locale): Project[] {
	return getPortfolioProjects().map((project) => localizeProject(project, locale));
}

export function formatLocalizedPrice(locale: Locale, amount: number, options?: { from?: boolean }): string {
	const formatted = new Intl.NumberFormat(locale === 'es' ? 'es-US' : 'en-US', {
		style: 'currency',
		currency: 'USD',
		maximumFractionDigits: amount % 1 === 0 ? 0 : 2,
	}).format(amount);
	return options?.from ? copy(locale).fromPrice(formatted) : formatted;
}

export function shopHref(locale: Locale, slug?: string): string {
	const base = '/interior-design-online-shop/';
	return localizedPath(locale, slug ? `${base}${slug}/` : base);
}
