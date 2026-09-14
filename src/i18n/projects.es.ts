import type { Project, ProjectImage } from '../data/projects';

export type ProjectEsOverlay = {
	scope: string;
	concept: string;
	services: string[];
	imageAlt: string;
	seoTitle: string;
	seoDescription: string;
	challenge: string;
	approach: string;
	outcome: string;
	materials: string[];
	gallery: Pick<ProjectImage, 'alt' | 'caption' | 'description'>[];
};

export const projectsEs: Record<string, ProjectEsOverlay> = {
	petretta: {
		scope: 'Residencia completa · Diseño de interiores y mobiliario',
		concept:
			'Una residencia en Miami compuesta habitación por habitación: estar, cocina y comedor definidos por proporciones equilibradas, materiales cálidos y una paleta serena, de colección y habitada.',
		services: ['Diseño de interiores integral', 'Mobiliario y estilismo'],
		imageAlt:
			'Sala de Petretta con mobiliario en capas y luz natural, por Colors of Design Group',
		seoTitle: 'Petretta | Diseño de interiores | Colors of Design Group',
		seoDescription:
			'Diseño de interiores para Petretta, una residencia en Miami: sala, cocina y comedor compuestos con mobiliario en capas, materiales cálidos y fluidez cotidiana, por Colors of Design Group.',
		challenge:
			'La vivienda debía sentirse concluida en varias estancias sin perder flexibilidad. Los clientes buscaban espacios capaces de sostener la vida cotidiana y, en ocasiones, la recepción de invitados, con mobiliario y acabados que se perciban intencionados, no escenificados.',
		approach:
			'Colors of Design desarrolló una paleta y un lenguaje material cohesivos, llevados desde la sala hasta la cocina y el comedor. Se especificaron asientos proporcionales, carpintería a medida e iluminación para suavizar la arquitectura, manteniendo cada estancia distinta y personal.',
		outcome:
			'La residencia concluida se siente asentada y personal: estancias que sostienen la conversación, las rutinas cotidianas y el ritmo más pausado del hogar.',
		materials: [
			'Neutrales cálidos',
			'Textiles en capas',
			'Tapicería a medida',
			'Gabinetes a medida',
			'Iluminación escultórica',
			'Acentos curados',
		],
		gallery: [
			{
				alt: 'Sala de Petretta con diseño de interiores en capas, por Colors of Design Group',
				caption: 'Sala',
				description:
					'Mobiliario en capas y asientos proporcionales dispuestos para la fluidez cotidiana y reuniones pausadas.',
			},
			{
				alt: 'Interior de cocina de Petretta con materiales cálidos y diseño a medida, por Colors of Design',
				caption: 'Cocina',
				description:
					'Gabinetes, superficies e iluminación compuestos para el uso diario, con un tono sereno y residencial.',
			},
			{
				alt: 'Vista de la cocina de Petretta con gabinetes a medida y luz natural',
				caption: 'Cocina',
				description:
					'Una vista más amplia de la cocina que muestra circulación, almacenamiento y la paleta material del proyecto.',
			},
			{
				alt: 'Composición de cocina de Petretta con acabados cálidos y detalle considerado',
				caption: 'Detalle de cocina',
				description:
					'Acabados y accesorios seleccionados para mantener la estancia cálida, funcional y visualmente serena.',
			},
			{
				alt: 'Interior de cocina de Petretta con materiales en capas y carpintería a medida',
				caption: 'Carpintería',
				description:
					'Gabinetes a medida y superficies definidos para honrar la arquitectura y sostener la cocina cotidiana.',
			},
			{
				alt: 'Detalle de gabinetes de la cocina de Petretta con tonos de madera cálidos',
				caption: 'Gabinetes',
				description:
					'Carpintería y herrajes compuestos para claridad, almacenamiento y un carácter residencial de colección.',
			},
			{
				alt: 'Detalle de almacenamiento y acabados de la cocina de Petretta, por Colors of Design Group',
				caption: 'Almacenamiento',
				description:
					'Almacenamiento práctico y selecciones de acabado llevados a lo largo de la cocina con proporción constante.',
			},
			{
				alt: 'Interior de cocina de Petretta con iluminación escultórica y superficies cálidas',
				caption: 'Cocina',
				description:
					'Iluminación y superficies en capas para suavizar la estancia y sostener tanto la tarea como la atmósfera.',
			},
			{
				alt: 'Vista de la cocina de Petretta con mobiliario a medida y materiales naturales',
				caption: 'Vista de la cocina',
				description:
					'Una viñeta de cocina equilibrada entre función, calidez y la paleta general del hogar.',
			},
			{
				alt: 'Detalle de cocina de Petretta con acabados curados y contraste suave',
				caption: 'Acabados',
				description:
					'Contrastes materiales y detalle que dan profundidad a la cocina sin ruido visual.',
			},
			{
				alt: 'Mesa de comedor de Petretta estilizada con mobiliario en capas y neutrales cálidos',
				caption: 'Comedor',
				description:
					'Un montaje de comedor compuesto para reunirse, con mobiliario a la escala de las proporciones de la estancia.',
			},
			{
				alt: 'Zona de comedor de Petretta con estilismo de mesa curado y luz natural',
				caption: 'Estilismo de mesa',
				description:
					'Objetos, textiles y asientos dispuestos para que el comedor se sienta personal y completo.',
			},
			{
				alt: 'Detalle de gabinete a medida de Petretta con madera cálida y herrajes a medida',
				caption: 'Detalle de gabinetes',
				description:
					'Almacenamiento a medida compuesto con materiales cálidos y herrajes elegidos para un contraste sereno.',
			},
			{
				alt: 'Gabinetes empotrados de Petretta con acabados de diseño de interiores en capas',
				caption: 'Muebles empotrados',
				description:
					'Almacenamiento empotrado definido para integrarse a la arquitectura y mantener organizada la vida cotidiana.',
			},
			{
				alt: 'Detalle de estilismo interior de Petretta con jarrón escultórico y acentos curados',
				caption: 'Estilismo',
				description:
					'Piezas de acento seleccionadas para dar foco a cada estancia y un carácter residencial de colección.',
			},
			{
				alt: 'Detalle de diseño de interiores de Petretta con texturas en capas y neutrales cálidos',
				caption: 'Detalle',
				description:
					'Textiles, superficies y objetos en capas para añadir profundidad, manteniendo la paleta contenida.',
			},
			{
				alt: 'Detalle de mobiliario de Petretta con contraste suave y materiales a medida',
				caption: 'Detalle de materiales',
				description:
					'Una vista más cercana de acabados y mobiliario que sostienen el lenguaje tonal del hogar.',
			},
			{
				alt: 'Viñeta interior de Petretta con objetos curados e iluminación cálida',
				caption: 'Viñeta',
				description:
					'Un momento más pausado, definido por proporción, textura y una colocación considerada.',
			},
			{
				alt: 'Detalle de estilismo de Petretta con acentos escultóricos y tonos neutros',
				caption: 'Acento',
				description:
					'Capas de acabado que completan cada estancia sin alterar la paleta serena del conjunto.',
			},
		],
	},
	massis: {
		scope: 'Residencia completa · Diseño de interiores y mobiliario',
		concept:
			'Una residencia en Miami definida a lo largo del estar, la cocina, el pasillo y el dormitorio: materiales cálidos, circulación clara y estancias que se sienten compuestas sin perder la fluidez cotidiana.',
		services: ['Diseño de interiores integral', 'Mobiliario y estilismo'],
		imageAlt:
			'Sala de Massis con mobiliario en capas y luz natural, por Colors of Design Group',
		seoTitle: 'Massis | Diseño de interiores | Colors of Design Group',
		seoDescription:
			'Diseño de interiores para Massis, una residencia en Miami: sala, cocina, pasillo y dormitorios compuestos con materiales cálidos y mobiliario a medida, por Colors of Design Group.',
		challenge:
			'La vivienda necesitaba un lenguaje de diseño consistente entre las estancias públicas y las privadas. Los clientes buscaban espacios que se sintieran concluidos y personales, con mobiliario y acabados capaces de sostener las rutinas diarias y el retiro sereno.',
		approach:
			'Colors of Design desarrolló una paleta cohesiva, llevada desde la sala hasta la cocina, los espacios de circulación y los dormitorios. Se especificaron mobiliario proporcional, iluminación en capas y selecciones materiales para suavizar la arquitectura, dando a cada estancia su propio carácter.',
		outcome:
			'La residencia concluida se lee como un conjunto pensado: estancias para reunirse, cocinar y descansar que comparten una atmósfera serena y de colección.',
		materials: [
			'Neutrales cálidos',
			'Textiles en capas',
			'Tapicería a medida',
			'Carpintería a medida',
			'Iluminación escultórica',
			'Acentos curados',
		],
		gallery: [
			{
				alt: 'Sala de Massis con diseño de interiores en capas, por Colors of Design Group',
				caption: 'Sala',
				description:
					'Mobiliario en capas y asientos proporcionales dispuestos para la fluidez cotidiana y reuniones pausadas.',
			},
			{
				alt: 'Vista de la sala de Massis con mobiliario curado y neutrales cálidos',
				caption: 'Estar',
				description:
					'Una vista más amplia de la sala que muestra circulación, asientos y el rango tonal del proyecto.',
			},
			{
				alt: 'Interior de cocina de Massis con materiales cálidos y diseño a medida, por Colors of Design',
				caption: 'Cocina',
				description:
					'Gabinetes, superficies e iluminación compuestos para el uso diario, con un tono sereno y residencial.',
			},
			{
				alt: 'Pasillo de Massis con iluminación considerada y acabados interiores cálidos',
				caption: 'Pasillo',
				description:
					'Circulación definida con iluminación y acabados que conectan las estancias públicas y privadas del hogar.',
			},
			{
				alt: 'Dormitorio principal de Massis con mobiliario a medida y paleta neutra suave',
				caption: 'Dormitorio',
				description:
					'Un dormitorio de descanso compuesto con mobiliario proporcional, textiles y un contraste sereno.',
			},
			{
				alt: 'Interior de dormitorio de Massis con estilismo en capas y materiales cálidos',
				caption: 'Detalle del dormitorio',
				description:
					'Capas de acabado y mobiliario seleccionados para que el dormitorio se sienta personal y completo.',
			},
		],
	},
	'park-grove': {
		scope: 'Residencia completa · Diseño de interiores y mobiliario',
		concept:
			'Una residencia en Park Grove compuesta a lo largo del estar, la cocina, el trabajo, la terraza exterior y la circulación: materiales cálidos, mobiliario en capas y estancias definidas tanto para reunirse como para una vida cotidiana concentrada.',
		services: ['Diseño de interiores integral', 'Mobiliario y estilismo'],
		imageAlt:
			'Sala de Park Grove con mobiliario en capas y luz natural, por Colors of Design Group',
		seoTitle: 'Park Grove | Diseño de interiores | Colors of Design Group',
		seoDescription:
			'Diseño de interiores para una residencia en Park Grove, Miami: sala, cocina, zona de trabajo, terraza exterior y mobiliario a medida compuestos para la fluidez cotidiana, por Colors of Design Group.',
		challenge:
			'La residencia debía sentirse completa a lo largo de áreas de estar abiertas, una cocina funcional y espacios para el trabajo y la rutina diaria. Los clientes querían un hogar capaz de recibir con holgura y, a la vez, ofrecer momentos más pausados y una circulación clara.',
		approach:
			'Colors of Design desarrolló una paleta y un plan de mobiliario cohesivos, llevados a través de la sala, la cocina, el pasillo y la zona de trabajo. Asientos proporcionales, iluminación en capas y selecciones materiales suavizan la arquitectura, manteniendo cada estancia distinta y personal.',
		outcome:
			'El hogar concluido se lee como un conjunto pensado: espacios para reunirse, cocinar y trabajar que comparten una atmósfera serena y de colección.',
		materials: [
			'Neutrales cálidos',
			'Textiles en capas',
			'Tapicería a medida',
			'Carpintería a medida',
			'Iluminación escultórica',
			'Acentos curados',
		],
		gallery: [
			{
				alt: 'Sala de Park Grove con diseño de interiores en capas, por Colors of Design Group',
				caption: 'Sala',
				description:
					'Mobiliario en capas y asientos proporcionales dispuestos para la fluidez cotidiana y reuniones pausadas.',
			},
			{
				alt: 'Vista de la sala de Park Grove con mobiliario curado y neutrales cálidos',
				caption: 'Estar',
				description:
					'Una vista vertical de la sala que muestra el volumen, los asientos y el rango tonal del proyecto.',
			},
			{
				alt: 'Composición de la sala de Park Grove con luz natural y tapicería a medida',
				caption: 'Espacio de reunión',
				description:
					'Asientos y superficies previstos para la conversación, con materiales elegidos por calidez y durabilidad.',
			},
			{
				alt: 'Sala de Park Grove con mobiliario curado y paleta neutra cálida',
				caption: 'Sala',
				description:
					'Una disposición de colección de mobiliario y acabados, pensada para sentirse serena y residencial.',
			},
			{
				alt: 'Interior de cocina de Park Grove con materiales cálidos y diseño a medida, por Colors of Design',
				caption: 'Cocina',
				description:
					'Gabinetes, superficies e iluminación compuestos para el uso diario, con un tono sereno y residencial.',
			},
			{
				alt: 'Zona de trabajo de Park Grove con mobiliario a medida y acabados interiores cálidos',
				caption: 'Zona de trabajo',
				description:
					'Un espacio de trabajo dedicado, definido con mobiliario e iluminación para la concentración y el uso cotidiano.',
			},
			{
				alt: 'Despacho de Park Grove con escritorio de mármol, cama abatible y estanterías empotradas',
				caption: 'Despacho',
				description:
					'Una estancia flexible de trabajo e invitados con escritorio de mármol, estanterías empotradas y cama abatible de doble uso.',
			},
			{
				alt: 'Pasillo de Park Grove con iluminación considerada y acabados interiores cálidos',
				caption: 'Pasillo',
				description:
					'Circulación definida con iluminación y acabados que conectan las estancias públicas y privadas del hogar.',
			},
			{
				alt: 'Terraza de Park Grove con asientos exteriores y vista al comedor',
				caption: 'Terraza',
				description:
					'Asientos exteriores y una mesa auxiliar dispuestos en la terraza, con el comedor visible más allá del cristal.',
			},
			{
				alt: 'Detalle de diseño de interiores de Park Grove con texturas en capas y neutrales cálidos',
				caption: 'Detalle',
				description:
					'Textiles, superficies y objetos en capas para añadir profundidad, manteniendo la paleta contenida.',
			},
			{
				alt: 'Detalle de mobiliario de Park Grove con contraste suave y materiales a medida',
				caption: 'Detalle de materiales',
				description:
					'Una vista más cercana de acabados y mobiliario que sostienen el lenguaje tonal del hogar.',
			},
			{
				alt: 'Detalle de estilismo de Park Grove con acentos escultóricos y tonos neutros',
				caption: 'Estilismo',
				description:
					'Capas de acabado que completan cada estancia sin alterar la paleta serena del conjunto.',
			},
			{
				alt: 'Viñeta interior de Park Grove con objetos curados e iluminación cálida',
				caption: 'Viñeta',
				description:
					'Un momento más pausado, definido por proporción, textura y una colocación considerada.',
			},
			{
				alt: 'Detalle de mobiliario de Park Grove con texturas neutras en capas',
				caption: 'Mobiliario',
				description:
					'Selecciones de mobiliario y acentos elegidas por confort, escala y armonía con la arquitectura.',
			},
			{
				alt: 'Detalle de terraza de Park Grove con sillones exteriores y mesa auxiliar hexagonal',
				caption: 'Detalle de terraza',
				description:
					'Sillones exteriores y una mesa auxiliar hexagonal con topiaria, compuestos para una vida serena en la terraza.',
			},
			{
				alt: 'Estilismo de terraza de Park Grove con topiaria, libros y mesa auxiliar redonda',
				caption: 'Estilismo exterior',
				description:
					'Una viñeta curada en la terraza con topiaria, libros apilados y una mesa auxiliar redonda frente a la vista urbana.',
			},
			{
				alt: 'Viñeta de arte de Park Grove con pintura abstracta y cómoda antigua pintada',
				caption: 'Viñeta de arte',
				description:
					'Arte abstracto junto a una cómoda antigua pintada, libros y acentos escultóricos para un momento interior de colección.',
			},
			{
				alt: 'Arte mural de Park Grove con dos cuadros abstractos figurativos enmarcados',
				caption: 'Arte mural',
				description:
					'Dos cuadros abstractos figurativos enmarcados sobre un banco texturizado, aportando profundidad y carácter a la estancia.',
			},
			{
				alt: 'Detalle de mesita de noche de Park Grove con lámpara de vidrio ahumado y escultura de conchas',
				caption: 'Detalle de mesita',
				description:
					'Una viñeta junto a la cama con lámpara de vidrio ahumado, escultura de conchas y libros en capas sobre una mesita de dos niveles.',
			},
			{
				alt: 'Detalle de terraza de Park Grove con mesa hexagonal y guirnalda de cuentas',
				caption: 'Estilismo de terraza',
				description:
					'Una mesa auxiliar hexagonal con topiaria y guirnalda de cuentas, flanqueada por sillones exteriores.',
			},
			{
				alt: 'Estanterías empotradas de Park Grove con libros, vasijas de vidrio y objetos escultóricos',
				caption: 'Estanterías',
				description:
					'Estanterías empotradas de madera y metal con libros, vasijas de vidrio y objetos escultóricos en contraste sereno.',
			},
		],
	},
	selassie: {
		scope: 'Residencia completa · Diseño de interiores y mobiliario',
		concept:
			'Una residencia en Miami definida a lo largo del estar, el dormitorio, el baño, el cuarto infantil y la circulación: almacenamiento a medida, materiales cálidos y estancias compuestas tanto para reunirse como para el retiro sereno.',
		services: ['Diseño de interiores integral', 'Mobiliario y estilismo'],
		imageAlt:
			'Sala de Selassie con mobiliario en capas y luz natural, por Colors of Design Group',
		seoTitle: 'Selassie | Diseño de interiores | Colors of Design Group',
		seoDescription:
			'Diseño de interiores para Selassie, una residencia en Miami: sala, dormitorio, baño, cuarto infantil, almacenamiento a medida y mobiliario compuesto para la fluidez cotidiana, por Colors of Design Group.',
		challenge:
			'La vivienda debía sentirse completa a lo largo de áreas de estar abiertas y estancias privadas, con almacenamiento y carpintería integrados con limpieza a la arquitectura. Los clientes querían espacios capaces de recibir con holgura y, a la vez, ofrecer un retiro sereno.',
		approach:
			'Colors of Design desarrolló una paleta cohesiva, llevada a través de la sala, el dormitorio, el baño, el pasillo y el almacenamiento empotrado. Mobiliario proporcional, gabinetes a medida e iluminación en capas suavizan la arquitectura, dando a cada estancia su propio carácter.',
		outcome:
			'La residencia concluida se lee como un conjunto pensado: estancias para reunirse y descansar que comparten una atmósfera serena y de colección.',
		materials: [
			'Neutrales cálidos',
			'Textiles en capas',
			'Tapicería a medida',
			'Gabinetes a medida',
			'Iluminación escultórica',
			'Acentos curados',
		],
		gallery: [
			{
				alt: 'Sala de Selassie con diseño de interiores en capas, por Colors of Design Group',
				caption: 'Sala',
				description:
					'Mobiliario en capas y asientos proporcionales dispuestos para la fluidez cotidiana y reuniones pausadas.',
			},
			{
				alt: 'Vista de la sala de Selassie con mobiliario curado y neutrales cálidos',
				caption: 'Estar',
				description:
					'Una vista vertical de la sala que muestra el volumen, los asientos y el rango tonal del proyecto.',
			},
			{
				alt: 'Entrada de Selassie con consola, espejo y alfombra abstracta',
				caption: 'Entrada',
				description:
					'Una entrada acogedora compuesta con consola, espejo, lámpara y una alfombra abstracta que conduce al hogar.',
			},
			{
				alt: 'Vestíbulo de entrada de Selassie con consola, espejo y muro de listones de madera',
				caption: 'Vestíbulo',
				description:
					'Un vestíbulo con consola, espejo redondo y muro de listones de madera que define una primera impresión serena.',
			},
			{
				alt: 'Dormitorio de Selassie con mobiliario a medida y paleta neutra suave',
				caption: 'Dormitorio',
				description:
					'Un dormitorio de descanso compuesto con mobiliario proporcional, textiles y un contraste sereno.',
			},
			{
				alt: 'Dormitorio de Selassie con consola multimedia, sillón amarillo y vistas al mar',
				caption: 'Vista del dormitorio',
				description:
					'Un rincón del dormitorio con consola multimedia, sillón de acento amarillo y ventanas de piso a techo con vistas al agua.',
			},
			{
				alt: 'Área de asientos del dormitorio de Selassie con sillones amarillos y espejo inclinado',
				caption: 'Área de asientos',
				description:
					'Sillones de acento amarillos y un espejo inclinado dispuestos junto a una consola multimedia y cortinas suaves.',
			},
			{
				alt: 'Cuarto infantil de Selassie con mural de mapa, cama nido y estanterías hexagonales',
				caption: 'Cuarto infantil',
				description:
					'Un cuarto infantil con mural de mapa, cama nido, estanterías hexagonales y una luminaria lúdica en el techo.',
			},
			{
				alt: 'Pasillo de Selassie con iluminación considerada y acabados interiores cálidos',
				caption: 'Pasillo',
				description:
					'Circulación definida con iluminación y acabados que conectan las estancias públicas y privadas del hogar.',
			},
			{
				alt: 'Detalle de gabinete a medida de Selassie con madera cálida y herrajes a medida',
				caption: 'Gabinetes',
				description:
					'Carpintería a medida compuesta con materiales cálidos y herrajes elegidos para un contraste sereno.',
			},
			{
				alt: 'Escritorio empotrado de Selassie con gabinetes superiores y divisor de listones de madera',
				caption: 'Escritorio',
				description:
					'Un escritorio empotrado con gabinetes superiores, taburetes cúbicos y un divisor de listones de madera que define el espacio de trabajo.',
			},
			{
				alt: 'Almacenamiento empotrado de Selassie con acabados de diseño de interiores en capas',
				caption: 'Almacenamiento',
				description:
					'Almacenamiento empotrado definido para integrarse a la arquitectura y mantener organizada la vida cotidiana.',
			},
			{
				alt: 'Detalle de diseño de interiores de Selassie con texturas en capas y neutrales cálidos',
				caption: 'Detalle',
				description:
					'Textiles, superficies y objetos en capas para añadir profundidad, manteniendo la paleta contenida.',
			},
			{
				alt: 'Detalle de mobiliario de Selassie con contraste suave y materiales a medida',
				caption: 'Detalle de materiales',
				description:
					'Una vista más cercana de acabados y mobiliario que sostienen el lenguaje tonal del hogar.',
			},
			{
				alt: 'Detalle de estilismo de Selassie con acentos escultóricos y tonos neutros',
				caption: 'Estilismo',
				description:
					'Capas de acabado que completan cada estancia sin alterar la paleta serena del conjunto.',
			},
			{
				alt: 'Detalle de estilismo de Selassie con escultura dorada en bandeja espejada',
				caption: 'Accesorios',
				description:
					'Una escultura dorada y portavelas acrílicos dispuestos en una bandeja espejada con contraste sereno.',
			},
			{
				alt: 'Estilismo de mesa de centro de Selassie con tulipanes, hortensias y libros en capas',
				caption: 'Estilismo de mesa',
				description:
					'Tulipanes, hortensias y libros en capas dispuestos sobre una mesa de centro de vidrio junto a un cojín amarillo de acento.',
			},
			{
				alt: 'Baño de Selassie con bañera independiente, paredes de mármol y lámpara de burbujas',
				caption: 'Baño',
				description:
					'Una bañera independiente sobre paredes de mármol con lámpara de burbujas y televisión empotrada.',
			},
			{
				alt: 'Baño de Selassie con ducha, tocador de madera y bañera independiente',
				caption: 'Vista del baño',
				description:
					'Una ducha acristalada, tocador de madera y bañera independiente compuestos bajo una lámpara de burbujas.',
			},
			{
				alt: 'Tocador de baño de Selassie con encimera de mármol y cajones de madera',
				caption: 'Detalle del tocador',
				description:
					'Un tocador de madera con encimera de mármol, accesorios cromados y objetos curados vistos desde arriba.',
			},
			{
				alt: 'Bañera de Selassie con paredes de mármol, TV empotrada y nicho iluminado',
				caption: 'Bañera',
				description:
					'Una bañera independiente bajo una lámpara de burbujas, televisión empotrada y nicho mural retroiluminado.',
			},
			{
				alt: 'Baño de Selassie con ducha de vidrio, tocador de madera y suelos de mármol',
				caption: 'Baño',
				description:
					'Suelos de mármol, ducha de vidrio y tocador flotante de madera dispuestos para el uso cotidiano.',
			},
			{
				alt: 'Baño de Selassie con bañera, ducha, tocador y lámpara de burbujas',
				caption: 'Vista del baño',
				description:
					'Una vista completa del baño con bañera independiente, ducha de vidrio, tocador de madera e iluminación en capas.',
			},
			{
				alt: 'Aseo de Selassie con inodoro suspendido y nicho mural iluminado',
				caption: 'Aseo',
				description:
					'Un inodoro suspendido con placa de doble descarga y un nicho retroiluminado con una pequeña suculenta.',
			},
			{
				alt: 'Detalle de aseo de Selassie con inodoro suspendido y nicho iluminado',
				caption: 'Detalle del aseo',
				description:
					'Una vista cenital de un inodoro suspendido, nicho iluminado y suelos de mármol en un aseo minimalista.',
			},
			{
				alt: 'Medio baño de Selassie con inodoro suspendido, nicho iluminado y arte mural',
				caption: 'Medio baño',
				description:
					'Un medio baño con inodoro suspendido, nicho retroiluminado y cuadro enmarcado sobre suelos de mármol.',
			},
			{
				alt: 'Zona de bañera de Selassie con puertas de vidrio esmerilado y paredes de mármol',
				caption: 'Detalle del baño',
				description:
					'Una bañera independiente junto a puertas de vidrio esmerilado, paredes de mármol y televisión empotrada.',
			},
			{
				alt: 'Bañera de Selassie con lámpara de burbujas y entorno de mármol',
				caption: 'Bañera',
				description:
					'Una bañera independiente centrada bajo una lámpara de burbujas con paredes de mármol y ducha de vidrio al fondo.',
			},
			{
				alt: 'Tocador de baño de Selassie con cajones de madera y paredes de mármol',
				caption: 'Tocador',
				description:
					'Un tocador flotante de madera con encimera de mármol y espejo que refleja la ducha de vidrio al fondo.',
			},
			{
				alt: 'Baño de Selassie con bañera, ducha de vidrio y superficies de mármol',
				caption: 'Vista del baño',
				description:
					'Una vista del baño con bañera independiente, ducha de vidrio, lámpara de burbujas y mármol en todo el espacio.',
			},
		],
	},
	kitchen: {
		scope: 'Cocina · Diseño de interiores y mobiliario',
		concept:
			'Una cocina compuesta con materiales cálidos, carpintería a medida e iluminación que sostiene la cocina cotidiana, manteniendo la estancia serena y residencial.',
		services: ['Diseño de interiores integral', 'Mobiliario y estilismo'],
		imageAlt:
			'Interior de cocina con materiales cálidos y diseño a medida, por Colors of Design Group',
		seoTitle: 'Cocina | Diseño de interiores | Colors of Design Group',
		seoDescription:
			'Diseño de interiores de cocina por Colors of Design Group: gabinetes a medida, materiales cálidos y un espacio compuesto para la fluidez cotidiana en Miami.',
		challenge:
			'La cocina debía sentirse concluida y funcional, sin leerse como puramente utilitaria. Los clientes querían almacenamiento, superficies e iluminación capaces de sostener las rutinas diarias y, a la vez, sentirse personales y de colección.',
		approach:
			'Colors of Design desarrolló una paleta material y un plan de carpintería definidos en torno a la circulación, el almacenamiento y la luz. Se especificaron gabinetes, accesorios y detalles de acabado para integrarse a la arquitectura y mantener la estancia visualmente serena.',
		outcome:
			'La cocina concluida se siente cálida, práctica y compuesta: un espacio listo para la cocina cotidiana y el ritmo más pausado del hogar.',
		materials: [
			'Gabinetes a medida',
			'Superficies de piedra',
			'Tonos de madera cálidos',
			'Iluminación en capas',
			'Herrajes a medida',
		],
		gallery: [
			{
				alt: 'Interior de cocina con materiales cálidos y diseño a medida, por Colors of Design Group',
				caption: 'Cocina',
				description:
					'Gabinetes, superficies e iluminación compuestos para el uso diario, con un tono sereno y residencial.',
			},
			{
				alt: 'Cocina con carpintería de madera clara, isla de mármol y vistas al mar',
				caption: 'Vista de la cocina',
				description:
					'Carpintería de madera clara e isla de mármol dispuestas para la cocina cotidiana con vistas al agua.',
			},
			{
				alt: 'Isla de cocina con encimera de mármol en cascada y taburetes',
				caption: 'Isla',
				description:
					'Una isla de mármol en cascada con fregadero integrado, taburetes y gabinetes superiores con puertas de vidrio.',
			},
			{
				alt: 'Cocina con carpintería de madera oscura, superficies de mármol y electrodomésticos integrados',
				caption: 'Carpintería',
				description:
					'Gabinetes de madera oscura, encimeras de mármol y electrodomésticos integrados en torno a una isla central y mesa de comedor.',
			},
			{
				alt: 'Cocina con comedor en la isla, superficies de mármol y vistas al jardín',
				caption: 'Cocina y comedor',
				description:
					'Una isla con comedor integrado, superficies de mármol y carpintería alta compuesta para la circulación y la luz.',
			},
			{
				alt: 'Isla de cocina con barra desayunadora de madera y electrodomésticos integrados',
				caption: 'Detalle de isla',
				description:
					'Una isla de mármol con barra desayunadora de madera, taburetes y electrodomésticos integrados en carpintería de madera clara.',
			},
			{
				alt: 'Isla de cocina con gabinetes beige y vistas tropicales desde la ventana',
				caption: 'Espacio de reunión',
				description:
					'Una isla de mármol con comedor integrado, gabinetes cálidos y ventanas que enmarcan el paisaje circundante.',
			},
			{
				alt: 'Cocina de madera clara con gabinetes de vidrio y superficies de mármol',
				caption: 'Composición de cocina',
				description:
					'Carpintería de madera clara, gabinetes superiores de vidrio e isla de mármol con barra desayunadora de madera y taburetes.',
			},
			{
				alt: 'Cocina con gabinetes metálicos, encimeras de mármol y taburetes',
				caption: 'Gabinetes',
				description:
					'Gabinetes superiores metálicos, unidades base beige e isla de mármol con fregadero integrado y taburetes.',
			},
			{
				alt: 'Detalle de isla de cocina con encimera de mármol y fregadero integrado',
				caption: 'Detalle de isla',
				description:
					'Una vista más cercana de la isla de mármol con fregadero integrado, grifo y gabinetes base sin tiradores.',
			},
			{
				alt: 'Muro de electrodomésticos con carpintería metálica y encimeras de mármol',
				caption: 'Muro de electrodomésticos',
				description:
					'Carpintería metálica de piso a techo que integra hornos, estación de café y refrigeración con encimeras de mármol.',
			},
			{
				alt: 'Carpintería de cocina a todo lo alto con electrodomésticos integrados y vistas urbanas',
				caption: 'Carpintería',
				description:
					'Gabinetes de madera clara a todo lo alto con electrodomésticos integrados, superficies de mármol y vistas a la ciudad.',
			},
			{
				alt: 'Muro de cocción con respaldo de mármol y gabinetes con puertas de vidrio',
				caption: 'Muro de cocción',
				description:
					'Un muro de cocción con respaldo de mármol, gabinetes superiores de vidrio y horno y cocina integrados.',
			},
			{
				alt: 'Cocina con gabinetes metálicos beige, isla de mármol y vistas urbanas',
				caption: 'Vista de la cocina',
				description:
					'Gabinetes metálicos beige, una isla de mármol con taburetes y ventanas de piso a techo con vistas a la ciudad.',
			},
			{
				alt: 'Cocina blanca con vigas de madera en el techo, isla de mármol y bodega de vinos',
				caption: 'Cocina',
				description:
					'Una cocina blanca luminosa con vigas de madera en el techo, isla de mármol con almacenamiento de vinos y electrodomésticos integrados.',
			},
			{
				alt: 'Cocina blanca minimalista abierta al estar con vigas de madera en el techo',
				caption: 'Cocina abierta',
				description:
					'Una cocina blanca minimalista con vigas de madera, superficies de mármol y conexión abierta al área de estar.',
			},
			{
				alt: 'Cocina y comedor con isla de mármol y refrigeradores de vino',
				caption: 'Cocina y comedor',
				description:
					'Una cocina y comedor unidos por una isla de mármol con almacenamiento de vinos, iluminación lineal y vistas al jardín.',
			},
		],
	},
	placeres: {
		scope: 'Residencia completa · Diseño de interiores y mobiliario',
		concept:
			'Una sala compuesta en neutrales cálidos, texturas en capas y una simetría serena, diseñada para sentirse de colección, calmada e inequívocamente residencial.',
		services: ['Diseño de interiores integral', 'Mobiliario y estilismo'],
		imageAlt:
			'Sala de Placeres con paleta neutra cálida, mobiliario en capas y luz natural, por Colors of Design',
		seoTitle: 'Placeres | Diseño de interiores | Colors of Design Group',
		seoDescription:
			'Diseño de interiores para Placeres, una residencia en Miami: neutrales cálidos, mobiliario en capas y una sala pensada para la fluidez y la reunión cotidiana, por Colors of Design Group.',
		challenge:
			'La sala debía sentirse completa sin volverse formal. Los clientes querían un espacio capaz de sostener la vida cotidiana y, en ocasiones, la recepción de invitados, con mobiliario y acabados que se perciban intencionados, no escenificados.',
		approach:
			'Colors of Design construyó la estancia en torno a una paleta contenida, asientos proporcionales e iluminación que suaviza la arquitectura. Se seleccionaron textiles, arte y piezas de acento para añadir profundidad, manteniendo la atmósfera general serena y cohesiva.',
		outcome:
			'La sala concluida se siente asentada y personal: una estancia que sostiene la conversación, las noches pausadas y el ritmo más lento del hogar.',
		materials: [
			'Neutrales cálidos',
			'Textiles en capas',
			'Tapicería a medida',
			'Iluminación escultórica',
			'Acentos curados',
		],
		gallery: [
			{
				alt: 'Sala de Placeres con diseño de interiores en neutrales cálidos, por Colors of Design Group',
				caption: 'Sala',
				description:
					'Neutrales cálidos, texturas en capas y asientos proporcionales dispuestos para la fluidez cotidiana.',
			},
			{
				alt: 'Zona de asientos de la sala de Placeres con mobiliario en capas y luz natural',
				caption: 'Zona de asientos',
				description:
					'Tapicería, arte y piezas de acento compuestos para suavizar la arquitectura y anclar la estancia.',
			},
			{
				alt: 'Sala de Placeres con mobiliario curado y paleta neutra cálida',
				caption: 'Sala',
				description:
					'Una disposición de colección de mobiliario y acabados, pensada para sentirse serena y residencial.',
			},
			{
				alt: 'Interior de la sala de Placeres con luz natural y tapicería a medida',
				caption: 'Espacio de reunión',
				description:
					'Asientos y superficies previstos para la conversación, con materiales elegidos por calidez y durabilidad.',
			},
			{
				alt: 'Vista de la sala de Placeres con textiles en capas e iluminación escultórica',
				caption: 'Sala principal',
				description:
					'Iluminación, textiles y proporción trabajan juntos para asentar la arquitectura en una estancia habitada.',
			},
			{
				alt: 'Composición de la sala de Placeres con arte y mobiliario neutro',
				caption: 'Arte y mobiliario',
				description:
					'Arte y objetos colocados para dar foco a la estancia sin alterar la paleta serena del conjunto.',
			},
			{
				alt: 'Detalle de la sala de Placeres con tonos de madera cálidos y tapicería neutra suave',
				caption: 'Detalle de materiales',
				description:
					'Acabados de madera, piedra y textil en capas para añadir profundidad, manteniendo la atmósfera contenida.',
			},
			{
				alt: 'Sala de Placeres con asientos amplios y luz natural de Miami',
				caption: 'Estar',
				description:
					'Una composición abierta que equilibra confort, simetría y la luz natural de la estancia.',
			},
			{
				alt: 'Viñeta de la sala de Placeres con acentos estilizados y tonos neutros',
				caption: 'Estilismo',
				description:
					'Piezas de acento y detalles de estilismo que completan la estancia con un carácter personal y de colección.',
			},
			{
				alt: 'Rincón de la sala de Placeres con mobiliario a medida y contraste suave',
				caption: 'Detalle de rincón',
				description:
					'Un momento más pausado de la estancia, definido por proporción, textura y una colocación considerada.',
			},
			{
				alt: 'Detalle de mobiliario de la sala de Placeres con texturas neutras en capas',
				caption: 'Mobiliario',
				description:
					'Selecciones de mobiliario elegidas por confort, escala y armonía con la arquitectura.',
			},
			{
				alt: 'Vista de la sala de Placeres con asientos equilibrados y tonos interiores cálidos',
				caption: 'Vista del espacio',
				description:
					'Una vista más amplia de la sala que muestra circulación, asientos y el rango tonal del proyecto.',
			},
			{
				alt: 'Vista vertical de la sala de Placeres con techos altos y diseño de interiores en capas',
				caption: 'Arquitectura',
				description:
					'Volumen vertical, vigas y mobiliario compuestos para honrar la escala del espacio.',
			},
			{
				alt: 'Sala de Placeres con distribución de asientos refinada y materiales naturales',
				caption: 'Distribución de asientos',
				description:
					'Asientos agrupados para sostener tanto el uso diario como la recepción, sin perder claridad visual.',
			},
			{
				alt: 'Interior de la sala de Placeres con altura dramática y mobiliario curado',
				caption: 'Volumen y luz',
				description:
					'La altura y la luz del día forman parte de la composición, enmarcadas por el mobiliario y las selecciones de acabado.',
			},
			{
				alt: 'Vista alta de la sala de Placeres con arte, iluminación y paleta neutra',
				caption: 'Espacio completo',
				description:
					'Un retrato completo de la arquitectura, el arte y el mobiliario de la estancia, trabajando como una sola composición.',
			},
			{
				alt: 'Vista elevada de la sala de Placeres con detalles de diseño de interiores en capas',
				caption: 'Vista general',
				description:
					'Una perspectiva elevada sobre las capas de la estancia, desde la estructura y la iluminación hasta el estilismo final.',
			},
		],
	},
	solaris: {
		scope: 'Remodelación completa · Diseño de interiores y mobiliario',
		concept:
			'Un apartamento mid-century eco-chic de Morris Lapidus, reimaginado con modernismo orgánico, naturalismo refinado y lujo contenido para un retiro sereno en Miami Beach.',
		services: ['Diseño de interiores integral', 'Mobiliario y estilismo'],
		imageAlt: 'Comedor de Solaris con iluminación en capas y mesa refinada',
		seoTitle: 'Solaris | Diseño de interiores | Colors of Design Group',
		seoDescription:
			'Colors of Design transformó un apartamento mid-century de Morris Lapidus en Miami Beach en un retiro eco-chic: modernismo orgánico, texturas en capas y una chimenea escultórica que ancla el estar.',
		challenge:
			'Con una visión anclada en el modernismo orgánico y el naturalismo refinado, Colors of Design transformó este apartamento mid-century, diseñado originalmente por el arquitecto Morris Lapidus, en un retiro eco-chic en el corazón de Miami Beach. El proyecto une lujo contenido y sostenibilidad, y ofrece a sus propietarios sudamericanos un escape sereno de una vida de ritmo intenso.',
		approach:
			'Dirigido por un equipo multidisciplinario, el estudio abordó esta remodelación completa con énfasis en la funcionalidad, el equilibrio y la elegancia atemporal. Paletas neutras, texturas en capas y mobiliario artesanal a medida se reunieron para evocar calma y sofisticación costera. Un rasgo distintivo: la chimenea escultórica, que ancla el estar e integra con fluidez iluminación, almacenamiento y entretenimiento: forma y función en armonía.',
		outcome:
			'Reconocido por diseñar hogares desde el concepto hasta la conclusión, Colors of Design aporta una mentalidad arquitectónica a su trabajo de interiores, con atención precisa a la planificación espacial, el diseño de iluminación y la selección de materiales y texturas atemporales. Este proyecto refleja no solo la estética del cliente, sino el compromiso del estudio con espacios que se sienten con alma, de elegancia atemporal y compuestos con intención.',
		materials: [
			'Paletas neutras',
			'Texturas en capas',
			'Mobiliario artesanal a medida',
			'Chimenea escultórica',
			'Acabados sostenibles',
		],
		gallery: [
			{
				alt: 'Sala de Solaris con luz natural y diseño de interiores en capas, por Colors of Design Group',
				caption: 'Sala',
				description:
					'Una sala abierta definida por la luz del día, asientos proporcionales y una paleta neutra serena.',
			},
			{
				alt: 'Vista de la sala de Solaris con mobiliario curado y tonos interiores cálidos',
				caption: 'Espacio de reunión',
				description:
					'Mobiliario y acabados compuestos para suavizar la arquitectura y anclar la estancia.',
			},
			{
				alt: 'Comedor de Solaris con mobiliario a medida y luz natural de Miami',
				caption: 'Comedor',
				description:
					'Un comedor previsto para las comidas cotidianas y para recibir, con materiales elegidos por calidez y durabilidad.',
			},
			{
				alt: 'Zona de comedor de Solaris con iluminación en capas y mesa refinada',
				caption: 'Comedor',
				description:
					'Iluminación, proporción y detalles de estilismo que completan la estancia sin formalidad.',
			},
			{
				alt: 'Cocina de Solaris con superficies de piedra y diseño interior en madera cálida',
				caption: 'Cocina',
				description:
					'Piedra, madera y gabinetes a medida dispuestos para el uso diario y la claridad visual.',
			},
			{
				alt: 'Detalle de cocina de Solaris con materiales en capas y luz natural',
				caption: 'Detalle de cocina',
				description: 'Volumen vertical y selecciones de acabado que honran la escala del espacio.',
			},
			{
				alt: 'Dormitorio principal de Solaris con textiles en capas y paleta neutra suave',
				caption: 'Suite principal',
				description: 'Un dormitorio de descanso compuesto en textura, proporción y contraste sereno.',
			},
			{
				alt: 'Dormitorio de Solaris con mobiliario a medida y tonos interiores cálidos',
				caption: 'Dormitorio',
				description:
					'Tapicería y acabados seleccionados para crear retiro sin perder conexión con el resto del hogar.',
			},
			{
				alt: 'Interior de dormitorio de Solaris con luz natural y mobiliario curado',
				caption: 'Suite de huéspedes',
				description:
					'Una estancia privada definida por la luz del día, materiales suaves y una colocación considerada.',
			},
			{
				alt: 'Vista de dormitorio de Solaris con ropa de cama en capas y diseño de interiores neutro',
				caption: 'Dormitorio',
				description:
					'Textiles y mobiliario en capas para añadir profundidad, manteniendo la atmósfera serena.',
			},
			{
				alt: 'Baño principal de Solaris con superficies de piedra y diseño de interiores refinado',
				caption: 'Baño principal',
				description:
					'Piedra, iluminación y carpintería compuestos para el ritual diario y una calidad material duradera.',
			},
			{
				alt: 'Terraza de Solaris con mobiliario pensado para la vida en South Florida',
				caption: 'Terraza',
				description:
					'Una estancia exterior que prolonga el lenguaje interior: cómoda, duradera y abierta a la luz.',
			},
		],
	},
	'baby-room': {
		scope: 'Cuarto de infantes · Diseño de interiores y mobiliario',
		concept:
			'Un cuarto de infantes compuesto en neutrales suaves, textura delicada y detalles pensados: una estancia serena diseñada para crecer con la familia.',
		services: ['Diseño de interiores integral', 'Mobiliario y estilismo'],
		imageAlt:
			'Interior de cuarto de infantes con paleta neutra suave y mobiliario a medida, por Colors of Design',
		seoTitle: 'Baby Room | Diseño de interiores | Colors of Design Group',
		seoDescription:
			'Diseño de interiores de cuarto de infantes por Colors of Design Group: una habitación de bebé serena y en capas, con neutrales suaves, mobiliario a medida y detalles pensados para crecer con la familia.',
		challenge:
			'El cuarto de infantes debía sentirse sereno y completo, sin volverse excesivamente temático. Los clientes querían una estancia que funcionara desde los primeros meses en adelante, con mobiliario y acabados capaces de adaptarse a medida que cambiaran las necesidades.',
		approach:
			'Colors of Design construyó la estancia en torno a una paleta contenida, proporciones cómodas, y almacenamiento y estilismo que simplifican la vida cotidiana. Textiles, iluminación y piezas de acento aportan calidez, manteniendo una atmósfera serena y de descanso.',
		outcome:
			'El cuarto de infantes concluido se siente suave, personal y listo para el uso cotidiano: una estancia que sostiene el descanso, la rutina y el ritmo más pausado del hogar.',
		materials: [
			'Neutrales suaves',
			'Textiles en capas',
			'Mobiliario a medida',
			'Iluminación suave',
			'Acentos curados',
		],
		gallery: [
			{
				alt: 'Cuarto de infantes con diseño de interiores en neutrales suaves, por Colors of Design Group',
				caption: 'Cuarto de infantes',
				description:
					'Un cuarto de infantes sereno, definido por neutrales suaves, textura delicada y mobiliario elegido por confort y durabilidad.',
			},
			{
				alt: 'Interior de cuarto de infantes con textiles en capas e iluminación suave',
				caption: 'Vista del cuarto',
				description:
					'Almacenamiento, estilismo y acabados suaves compuestos para el uso cotidiano en una estancia serena y personal.',
			},
		],
	},
	asheville: {
		scope: 'Residencia completa · Diseño de interiores y mobiliario',
		concept:
			'Una residencia de montaña definida por materiales cálidos, circulación clara y estancias que se sienten arraigadas, desde el recibidor y la cocina hasta las suites privadas y los espacios cotidianos.',
		services: ['Diseño de interiores integral', 'Mobiliario y estilismo'],
		imageAlt: 'Comedor de Asheville con mobiliario a medida y tonos interiores cálidos',
		seoTitle: 'Asheville | Diseño de interiores | Colors of Design Group',
		seoDescription:
			'Diseño de interiores para una residencia en Asheville: cocina, comedor, halls, dormitorio, baños y lavandería compuestos en materiales cálidos y fluidez cotidiana, por Colors of Design Group.',
		challenge:
			'La vivienda debía sentirse acogedora y práctica sin perder refinamiento. Los clientes querían circulación abierta, cocinas y baños que sostengan la vida cotidiana, y una paleta material acorde al entorno de montaña.',
		approach:
			'Colors of Design planificó la residencia estancia por estancia: recibidores para la primera impresión, cocina y comedor para reunirse, suites privadas para el retiro, y espacios de servicio tan rigurosos en su función como en su aspecto. Acabados, mobiliario e iluminación se especificaron como una sola composición a lo largo del hogar.',
		outcome:
			'Asheville se lee ahora como una residencia cohesiva: cálida, compuesta y definida para el modo en que la familia vive de verdad, de las rutinas matinales a las noches pausadas.',
		materials: [
			'Tonos de madera cálidos',
			'Piedra natural',
			'Textiles en capas',
			'Carpintería a medida',
			'Iluminación arquitectónica',
		],
		gallery: [
			{
				alt: 'Recibidor de Asheville con diseño de interiores cálido y materiales naturales, por Colors of Design Group',
				caption: 'Recibidor',
				description:
					'Un recibidor acogedor, definido por la proporción, materiales cálidos y visuales claras hacia el interior del hogar.',
			},
			{
				alt: 'Interior de hall de Asheville con acabados en capas y mobiliario a medida',
				caption: 'Hall',
				description:
					'Circulación y selecciones de acabado que conectan las estancias públicas con una paleta constante y arraigada.',
			},
			{
				alt: 'Cocina de Asheville con superficies de piedra y diseño interior en madera cálida',
				caption: 'Cocina',
				description:
					'Piedra, madera y gabinetes a medida dispuestos para el uso diario y la claridad visual.',
			},
			{
				alt: 'Detalle de cocina de Asheville con materiales en capas y diseño de interiores refinado',
				caption: 'Detalle de cocina',
				description: 'Iluminación y capas materiales que completan la cocina sin formalidad.',
			},
			{
				alt: 'Comedor de Asheville con mobiliario a medida y tonos interiores cálidos',
				caption: 'Comedor',
				description:
					'Un comedor previsto para las comidas cotidianas y para recibir, con mobiliario elegido por calidez y durabilidad.',
			},
			{
				alt: 'Dormitorio de Asheville con textiles en capas y paleta neutra suave',
				caption: 'Suite principal',
				description: 'Un dormitorio de descanso compuesto en textura, proporción y contraste sereno.',
			},
			{
				alt: 'Baño de Asheville con superficies de piedra y diseño de interiores refinado',
				caption: 'Baño principal',
				description:
					'Piedra, iluminación y carpintería compuestos para el ritual diario y una calidad material duradera.',
			},
			{
				alt: 'Interior de baño de Asheville con tonos cálidos y acabados a medida',
				caption: 'Baño',
				description:
					'Acabados y accesorios seleccionados para sentirse serenos, duraderos y alineados con el hogar.',
			},
			{
				alt: 'Detalle de baño de Asheville con materiales en capas y luz natural',
				caption: 'Detalle del baño',
				description:
					'Detalles de material e iluminación que suavizan la arquitectura y sostienen el uso diario.',
			},
			{
				alt: 'Viñeta de baño de Asheville con detalles de diseño de interiores refinados',
				caption: 'Viñeta del baño',
				description:
					'Una vista más cercana de las selecciones de acabado, accesorios y estilismo dentro del baño.',
			},
			{
				alt: 'Lavandería de Asheville con gabinetes a medida y diseño de interiores práctico',
				caption: 'Lavandería',
				description:
					'Un espacio de servicio diseñado con el mismo cuidado que el resto del hogar: funcional, duradero y compuesto.',
			},
		],
	},
	'casa-del-mar': {
		scope: 'Residencia completa · Diseño de interiores y mobiliario',
		concept:
			'Una residencia costera compuesta en luz, arte y mobiliario en capas, desde halls de bienvenida y salas hasta objetos curados y un balcón interior abierto al aire del mar.',
		services: [
			'Diseño de interiores integral',
			'Mobiliario y estilismo',
			'Curaduría de arte',
		],
		imageAlt: 'Detalle de la sala de Casa del Mar con arte y mobiliario neutro',
		seoTitle: 'Casa del Mar | Diseño de interiores | Colors of Design Group',
		seoDescription:
			'Diseño de interiores para Casa del Mar, una residencia en Miami: salas, halls, arte y un balcón interior compuestos en luz, textura y fluidez costera, por Colors of Design Group.',
		challenge:
			'La residencia debía honrar su entorno costero sin recaer en el cliché. Los clientes querían espacios de estar abiertos, arte y objetos con presencia real, e interiores capaces de sostener con igual fluidez la vida cotidiana y la recepción de invitados.',
		approach:
			'Colors of Design planificó el hogar en torno a la circulación, la proporción y una paleta contenida que deja que la luz y las vistas conduzcan. Mobiliario, escultura y pinturas se curaron como parte de una sola composición: estancias definidas para reunirse, con momentos más pausados en halls y alcobas.',
		outcome:
			'Casa del Mar se siente ahora luminosa y personal: un hogar en el que arte, mobiliario y arquitectura trabajan juntos, y el balcón interior prolonga el estar hacia el agua.',
		materials: [
			'Neutrales costeros',
			'Piedra natural',
			'Textiles en capas',
			'Arte curado',
			'Acentos escultóricos',
		],
		gallery: [
			{
				alt: 'Recibidor de Casa del Mar con diseño de interiores costero, por Colors of Design Group',
				caption: 'Recibidor',
				description:
					'Un recibidor acogedor, definido por la proporción, materiales cálidos y arte que marca el tono del hogar.',
			},
			{
				alt: 'Interior de hall de Casa del Mar con mobiliario curado y luz natural',
				caption: 'Hall',
				description:
					'Circulación y selecciones de acabado que conectan los espacios de estar con una paleta costera constante.',
			},
			{
				alt: 'Sala de Casa del Mar con diseño de interiores en capas y tonos costeros',
				caption: 'Sala',
				description:
					'Una sala abierta definida por la luz del día, asientos proporcionales y una paleta neutra serena.',
			},
			{
				alt: 'Zona de asientos de la sala de Casa del Mar con mobiliario a medida',
				caption: 'Zona de asientos',
				description:
					'Tapicería, arte y piezas de acento compuestos para suavizar la arquitectura y anclar la estancia.',
			},
			{
				alt: 'Sala de Casa del Mar con mobiliario curado y luz natural de Miami',
				caption: 'Sala',
				description:
					'Una disposición de colección de mobiliario y acabados, pensada para sentirse serena y residencial.',
			},
			{
				alt: 'Viñeta de la sala de Casa del Mar con diseño de interiores costero en capas',
				caption: 'Espacio de reunión',
				description:
					'Asientos y superficies previstos para la conversación, con materiales elegidos por calidez y durabilidad.',
			},
			{
				alt: 'Detalle de la sala de Casa del Mar con arte y mobiliario neutro',
				caption: 'Detalle de la sala',
				description:
					'Arte y objetos colocados para dar foco a la estancia sin alterar la paleta serena del conjunto.',
			},
			{
				alt: 'Balcón interior de Casa del Mar con vistas costeras y mobiliario refinado',
				caption: 'Balcón interior',
				description:
					'Un balcón interior que prolonga el estar hacia el agua: cómodo, abierto y compuesto.',
			},
			{
				alt: 'Pintura curada en el interior de Casa del Mar, por Colors of Design Group',
				caption: 'Arte',
				description:
					'Una pintura curada, colocada para dar foco y profundidad a la estancia dentro de la paleta costera.',
			},
			{
				alt: 'Colocación de arte en Casa del Mar con diseño de interiores en capas y luz natural',
				caption: 'Arte y luz',
				description:
					'Arte y arquitectura compuestos para honrar el volumen vertical y la luz natural del hogar.',
			},
			{
				alt: 'Acento escultórico en la residencia Casa del Mar, por Colors of Design Group',
				caption: 'Escultura',
				description:
					'Un acento escultórico que completa la estancia con presencia y carácter personal.',
			},
		],
	},
	'sunny-isles': {
		scope: 'Sala · Diseño de interiores y mobiliario',
		concept:
			'Una sala en Sunny Isles definida por la luz costera, el mobiliario en capas y una paleta serena, de colección y acorde a la vida cotidiana junto al agua.',
		services: ['Diseño de interiores integral', 'Mobiliario y estilismo'],
		imageAlt:
			'Sala de Sunny Isles con mobiliario en capas y luz natural, por Colors of Design Group',
		seoTitle: 'Sunny Isles | Diseño de interiores | Colors of Design Group',
		seoDescription:
			'Diseño de interiores para una residencia en Sunny Isles: mobiliario en capas, luz costera y una sala compuesta para la fluidez cotidiana, por Colors of Design Group.',
		challenge:
			'La sala debía sentirse completa sin volverse formal. Los clientes querían un espacio capaz de sostener la vida cotidiana y, en ocasiones, la recepción de invitados, con mobiliario y acabados que se perciban intencionados, no escenificados.',
		approach:
			'Colors of Design construyó la estancia en torno a una paleta contenida, asientos proporcionales e iluminación que suaviza la arquitectura. Se seleccionaron textiles, arte y piezas de acento para añadir profundidad, manteniendo la atmósfera general serena y cohesiva.',
		outcome:
			'La sala concluida se siente asentada y personal: una estancia que sostiene la conversación, las noches pausadas y el ritmo más lento del hogar.',
		materials: [
			'Neutrales cálidos',
			'Textiles en capas',
			'Tapicería a medida',
			'Iluminación escultórica',
			'Acentos curados',
		],
		gallery: [
			{
				alt: 'Sala de Sunny Isles con diseño de interiores en capas, por Colors of Design Group',
				caption: 'Sala',
				description:
					'Mobiliario en capas y asientos proporcionales dispuestos para la fluidez cotidiana y reuniones pausadas.',
			},
			{
				alt: 'Vista de la sala de Sunny Isles con mobiliario curado y neutrales cálidos',
				caption: 'Estar',
				description:
					'Una vista más amplia de la sala que muestra circulación, asientos y el rango tonal del proyecto.',
			},
			{
				alt: 'Composición de la sala de Sunny Isles con luz natural y tapicería a medida',
				caption: 'Espacio de reunión',
				description:
					'Asientos y superficies previstos para la conversación, con materiales elegidos por calidez y durabilidad.',
			},
			{
				alt: 'Sala de Sunny Isles con mobiliario curado y paleta neutra cálida',
				caption: 'Sala',
				description:
					'Una disposición de colección de mobiliario y acabados, pensada para sentirse serena y residencial.',
			},
			{
				alt: 'Detalle de la sala de Sunny Isles con textiles en capas e iluminación escultórica',
				caption: 'Vista del espacio',
				description:
					'Iluminación, textiles y proporción trabajan juntos para asentar la arquitectura en una estancia habitada.',
			},
		],
	},
	'bathroom-design': {
		scope: 'Baño · Diseño de interiores y mobiliario',
		concept:
			'Un baño definido por la piedra, materiales cálidos e iluminación que convierte las rutinas diarias en una experiencia serena y de colección.',
		services: ['Diseño de interiores integral', 'Mobiliario y estilismo'],
		imageAlt: 'Vista del baño con materiales cálidos y detalle considerado',
		seoTitle: 'Diseño de baño | Colors of Design Group',
		seoDescription:
			'Diseño de interiores de baño por Colors of Design Group: superficies de piedra, carpintería a medida y un espacio compuesto para la fluidez cotidiana en Miami.',
		challenge:
			'El baño debía sentirse de spa sin perder practicidad. Los clientes querían superficies, almacenamiento e iluminación capaces de sostener las rutinas diarias y, a la vez, sentirse personales y refinados.',
		approach:
			'Colors of Design desarrolló una paleta material y un plan de accesorios definidos en torno a la luz, la proporción y la facilidad de uso. Se especificaron piedra, carpintería y detalles de acabado para integrarse a la arquitectura y mantener la estancia visualmente serena.',
		outcome:
			'El baño concluido se siente cálido, práctico y compuesto: un espacio listo para el uso cotidiano y el retiro sereno.',
		materials: [
			'Piedra natural',
			'Carpintería a medida',
			'Iluminación en capas',
			'Grifería y accesorios a medida',
			'Tonos de madera cálidos',
		],
		gallery: [
			{
				alt: 'Interior de baño con superficies de piedra y diseño a medida, por Colors of Design Group',
				caption: 'Baño',
				description:
					'Piedra, superficies e iluminación compuestos para el uso diario, con un tono sereno y residencial.',
			},
			{
				alt: 'Vista del baño con materiales cálidos y detalle considerado',
				caption: 'Vista del baño',
				description:
					'Una vista más amplia del baño que muestra proporción, acabados y la paleta material del proyecto.',
			},
			{
				alt: 'Bañera independiente con superficies de piedra e iluminación en capas',
				caption: 'Bañera',
				description:
					'La zona de la bañera compuesta con piedra, iluminación y accesorios elegidos por comodidad y calma visual.',
			},
			{
				alt: 'Ducha con superficies de piedra y acabados de baño a medida',
				caption: 'Ducha',
				description:
					'Piedra y vidrio especificados para el uso diario con una atmósfera refinada, de spa.',
			},
			{
				alt: 'Detalle de tocador y lavabo con materiales cálidos y carpintería a medida',
				caption: 'Tocador',
				description:
					'Carpintería, grifería y acabados integrados para la función y un tono residencial de colección.',
			},
		],
	},
	greenberg: {
		scope: 'Residencia completa · Renderizado 3D',
		concept:
			'Una residencia en Miami visualizada en 3D a lo largo del estar, el comedor, la cocina, los dormitorios, los baños, los cuartos infantiles y la terraza junto a la piscina: materiales cálidos, mobiliario en capas y estancias definidas para reunirse y para la fluidez cotidiana.',
		services: ['Renderizado 3D', 'Diseño de interiores integral'],
		imageAlt:
			'Render 3D de la sala de Greenberg con mobiliario en capas y papel tapiz botánico azul, por Colors of Design Group',
		seoTitle: 'Greenberg · Renderizado 3D | Colors of Design Group',
		seoDescription:
			'Renders arquitectónicos 3D para Greenberg, una residencia en Miami: sala, comedor, cocina, dormitorios, baños, cuartos infantiles y terraza junto a la piscina visualizados antes de la construcción, por Colors of Design Group.',
		challenge:
			'Los clientes necesitaban ver la residencia completa antes de la obra, a lo largo de áreas de estar abiertas, suites privadas y espacios exteriores. Cada estancia debía leerse como concluida y habitable, con materiales, almacenamiento y mobiliario integrados con limpieza a la arquitectura.',
		approach:
			'Colors of Design desarrolló el concepto interior y lo tradujo en renders 3D fotorrealistas llevados a través de la sala, el comedor, la cocina, los dormitorios, los baños y la terraza junto a la piscina. Mobiliario proporcional, carpintería a medida e iluminación en capas se modelaron para suavizar la arquitectura y dar a cada estancia su propio carácter.',
		outcome:
			'El conjunto de renders se lee como un todo pensado: espacios para reunirse, cocinar, descansar y vivir al aire libre que comparten una atmósfera serena y de colección, y que orientan las decisiones antes de la construcción.',
		materials: [
			'Neutrales cálidos',
			'Textiles en capas',
			'Piedra natural',
			'Carpintería a medida',
			'Iluminación escultórica',
			'Acentos curados',
		],
		gallery: [
			{
				alt: 'Sala de Greenberg con mobiliario en capas y papel tapiz botánico azul, por Colors of Design Group',
				caption: 'Sala',
				description:
					'Mobiliario en capas, un bar empotrado y papel tapiz botánico azul dispuestos para la fluidez cotidiana y reuniones pausadas.',
			},
			{
				alt: 'Sala de Greenberg con muro multimedia, almacenamiento empotrado y vistas a la piscina',
				caption: 'Estar',
				description:
					'Un muro multimedia, estanterías empotradas y cristal de piso a techo que abre hacia la terraza junto a la piscina.',
			},
			{
				alt: 'Estar de entrada de Greenberg con suelos de mármol y estanterías empotradas',
				caption: 'Estar de entrada',
				description:
					'Suelos de mármol, un sillón de respaldo concha y estanterías de piso a techo que definen un estar de entrada luminoso.',
			},
			{
				alt: 'Vestíbulo de Greenberg con suelos de mármol, galería de arte y vistas al jardín',
				caption: 'Vestíbulo',
				description:
					'Un vestíbulo con suelos de mármol en damero, paredes de galería y ventanas de piso a techo con vistas al jardín.',
			},
			{
				alt: 'Pasillo de Greenberg con suelos de mármol, iluminación colgante y vistas a la piscina',
				caption: 'Pasillo',
				description:
					'Un pasillo central con suelos de mármol, iluminación colgante y vistas directas hacia la terraza junto a la piscina.',
			},
			{
				alt: 'Comedor de Greenberg con aparador de madera, espejo redondo y lámparas colgantes',
				caption: 'Comedor',
				description:
					'Un comedor con aparador de madera, espejo redondo y lámparas colgantes compuesto para reuniones cotidianas.',
			},
			{
				alt: 'Comedor de Greenberg con mesa ovalada, vitrinas y ventana al jardín',
				caption: 'Área de comedor',
				description:
					'Una mesa ovalada, vitrinas de vidrio y una ventana al jardín dispuestos sobre una alfombra azul con patrón.',
			},
			{
				alt: 'Comedor de Greenberg con sillas tejidas y vitrinas empotradas',
				caption: 'Comedor',
				description:
					'Sillas tejidas, vitrinas empotradas y una alfombra azul que definen un comedor luminoso.',
			},
			{
				alt: 'Comedor y estar de Greenberg con aparador y espejo redondo',
				caption: 'Comedor y estar',
				description:
					'Una mesa de comedor y aparador de madera conectados al área de estar en un plano abierto.',
			},
			{
				alt: 'Comedor de Greenberg con aparador de mármol y vitrinas de vidrio',
				caption: 'Vista del comedor',
				description:
					'Un comedor con aparador de mármol, vitrinas de vidrio y sillas tejidas sobre una alfombra azul.',
			},
			{
				alt: 'Cocina de Greenberg con isla de mármol, carpintería de madera y lámparas globo',
				caption: 'Cocina',
				description:
					'Una isla de mármol, carpintería de madera clara y lámparas globo compuestas para cocinar y reunirse.',
			},
			{
				alt: 'Dormitorio de Greenberg con cama tapizada, paredes de rafia y vistas al jardín',
				caption: 'Dormitorio',
				description:
					'Una cama tapizada, paredes de rafia y vistas al jardín compuestas en un dormitorio de descanso.',
			},
			{
				alt: 'Dormitorio principal de Greenberg con cabecero alado, muro de listones y lámparas de mármol',
				caption: 'Dormitorio principal',
				description:
					'Un cabecero alado, muro de acento con listones de madera y lámparas colgantes de mármol en un dormitorio principal sereno.',
			},
			{
				alt: 'Cuarto de infantes de Greenberg con mural de nubes, cunas gemelas y lámpara de nube',
				caption: 'Cuarto de infantes',
				description:
					'Un cuarto de infantes con mural de nubes, cunas gemelas y lámpara de nube definido para el uso cotidiano sereno.',
			},
			{
				alt: 'Sala de juegos de Greenberg con banco empotrado, mesa de actividades y papel tapiz floral',
				caption: 'Sala de juegos',
				description:
					'Una sala de juegos con banco empotrado, mesa de actividades y papel tapiz floral para el juego cotidiano.',
			},
			{
				alt: 'Baño de Greenberg con tocador de ratán, accesorios dorados y ducha de mármol',
				caption: 'Baño',
				description:
					'Un tocador con frente de ratán, accesorios dorados y azulejos de mármol en la ducha compuestos para el uso diario.',
			},
			{
				alt: 'Baño de Greenberg con paredes rosadas, espejo floral y accesorios dorados',
				caption: 'Baño',
				description:
					'Paredes rosadas suaves, un espejo con marco floral y accesorios dorados que definen un baño refinado.',
			},
			{
				alt: 'Bañera de Greenberg con paredes de mármol a juego y puertas de vidrio',
				caption: 'Bañera',
				description:
					'Una bañera independiente dentro de paredes de mármol a juego y puertas de vidrio con marco negro.',
			},
			{
				alt: 'Baño principal de Greenberg con tocador doble y pared de mármol a juego',
				caption: 'Baño principal',
				description:
					'Un tocador doble, pared de mármol a juego y conexión al vestidor en el baño principal.',
			},
			{
				alt: 'Terraza junto a la piscina de Greenberg con arquitectura blanca y asientos exteriores',
				caption: 'Terraza junto a la piscina',
				description:
					'Una terraza junto a la piscina con arquitectura blanca, asientos exteriores y paisajismo tropical.',
			},
		],
	},
	renders: {
		scope: 'Renderizado 3D',
		concept:
			'Una colección de visualizaciones 3D de interiores a lo largo del estar, el comedor, la cocina, el baño y espacios exteriores, modelando materiales, mobiliario e iluminación antes de la construcción.',
		services: ['Renderizado 3D'],
		imageAlt:
			'Render 3D de un área abierta de estar, comedor y cocina, por Colors of Design Group',
		seoTitle: 'Renders · Renderizado 3D | Colors of Design Group',
		seoDescription:
			'Renders arquitectónicos 3D por Colors of Design Group: estar, comedor, cocina, baño y espacios exteriores visualizados para apoyar decisiones de diseño antes de la obra.',
		challenge:
			'Cada espacio debía leerse como concluido y creíble antes de la construcción, con materiales, proporciones e iluminación precisos que ayudaran a clientes y colaboradores a evaluar la intención del diseño.',
		approach:
			'Colors of Design modeló mobiliario, acabados y detalles arquitectónicos estancia por estancia, equilibrando luz natural y artificial para producir renders fotorrealistas en distintos conceptos residenciales.',
		outcome:
			'El conjunto de renders ofrece una vista previa clara de cómo se verá y sentirá cada espacio, apoyando decisiones seguras sobre distribución, paleta y detalle antes de comenzar la obra.',
		materials: [
			'Piedra natural',
			'Tonos de madera cálidos',
			'Textiles en capas',
			'Carpintería a medida',
			'Iluminación escultórica',
			'Acentos curados',
		],
		gallery: [
			{
				alt: 'Render 3D de un área abierta de estar, comedor y cocina, por Colors of Design Group',
				caption: 'Sala',
				description:
					'Un área abierta de estar, comedor y cocina con suelos de mármol, sofá seccional y ventanas con vistas urbanas.',
			},
			{
				alt: 'Render 3D de un área de estar y comedor con arte abstracto y pilar de mármol',
				caption: 'Estar',
				description:
					'Un área de estar y comedor con arte abstracto, un pilar revestido de mármol y una cocina blanca al fondo.',
			},
			{
				alt: 'Render 3D de una sala con muro multimedia y arcos hacia el jardín',
				caption: 'Sala',
				description:
					'Un muro multimedia con panel de mármol, estanterías empotradas y arcos que abren hacia un jardín.',
			},
			{
				alt: 'Render 3D de un estar y comedor abiertos con chimenea de piedra',
				caption: 'Estar y comedor',
				description:
					'Un estar y comedor abiertos con muro multimedia empotrado, chimenea de piedra y vistas al jardín.',
			},
			{
				alt: 'Render 3D de una sala con vistas urbanas e iluminación dorada',
				caption: 'Vista de la sala',
				description:
					'Una sala y barra de cocina con suelos de mármol, iluminación dorada y vistas panorámicas urbanas.',
			},
			{
				alt: 'Render 3D de un estar y comedor con muro multimedia de mármol',
				caption: 'Estar y comedor',
				description:
					'Un estar y comedor con muro multimedia de mármol retroiluminado, sofá de cuero y vistas tropicales.',
			},
			{
				alt: 'Render 3D de un muro multimedia con panel de mármol y estanterías empotradas',
				caption: 'Muro multimedia',
				description:
					'Un muro multimedia con panel de mármol, consola de madera y estanterías iluminadas que abren a una terraza.',
			},
			{
				alt: 'Render 3D de un estar y comedor abiertos con lámpara circular',
				caption: 'Estar y comedor',
				description:
					'Un estar y comedor abiertos con lámpara circular, muro multimedia de mármol y puertas al jardín.',
			},
			{
				alt: 'Render 3D de un comedor abierto al estar y cocina con vigas de madera',
				caption: 'Comedor',
				description:
					'Un comedor con lámpara de vidrio, chimenea de piedra y conexión abierta con la cocina al fondo.',
			},
			{
				alt: 'Render 3D de una cocina con isla de mármol y gabinetes crema',
				caption: 'Cocina',
				description:
					'Una cocina con isla de mármol, gabinetes crema, taburetes dorados y ventanas de piso a techo.',
			},
			{
				alt: 'Render 3D de una cocina y rincón de comedor con encimeras de mármol y vigas de madera',
				caption: 'Cocina',
				description:
					'Una cocina con encimeras de mármol, vigas de madera expuestas y un rincón de comedor con arco al fondo.',
			},
			{
				alt: 'Render 3D de un cuarto de infantes con mural de osos y alfombra azul con estrellas',
				caption: 'Cuarto de infantes',
				description:
					'Un cuarto de infantes con mural de osos, cuna blanca, alfombra azul con estrellas y luz natural suave.',
			},
			{
				alt: 'Render 3D de un baño con tocador doble y vistas al mar',
				caption: 'Baño',
				description:
					'Un baño con tocador doble, superficies de mármol, listones de madera y vistas al agua.',
			},
			{
				alt: 'Render 3D de un tocador de baño con paredes de mármol y listones de madera',
				caption: 'Vista del baño',
				description:
					'Un tocador flotante con paredes de mármol, listones de madera y una ducha de vidrio al fondo.',
			},
			{
				alt: 'Render 3D de una ducha doble con accesorios dorados y nicho iluminado',
				caption: 'Ducha',
				description:
					'Una ducha doble con accesorios dorados, paredes de mármol y un nicho retroiluminado.',
			},
			{
				alt: 'Render 3D de un tocador doble con paredes de mármol y apliques dorados',
				caption: 'Tocador',
				description:
					'Un tocador doble con paredes de mármol, apliques dorados y lavabos integrados.',
			},
			{
				alt: 'Render 3D de un tocador de baño con tocador de maquillaje y listones de madera',
				caption: 'Área de tocador',
				description:
					'Un tocador con lavabos dobles, un escritorio central de maquillaje y paneles de listones de madera.',
			},
			{
				alt: 'Render 3D de un tocador de baño con taburete de maquillaje y reflejo de la ducha',
				caption: 'Baño',
				description:
					'Una distribución de tocador con taburete de maquillaje, listones de madera y ducha walk-in reflejada en los espejos.',
			},
			{
				alt: 'Render 3D de un baño con paredes de mármol oscuro y tocador de madera',
				caption: 'Detalle del baño',
				description:
					'Un baño con paredes de mármol oscuro, tocador de madera y vistas al mar desde la ventana.',
			},
			{
				alt: 'Render 3D de un área de estar con sillones azules y vistas al mar',
				caption: 'Estar',
				description:
					'Un área de estar con sillones de acento azul marino, mesa de centro de mármol y vistas al mar de piso a techo.',
			},
			{
				alt: 'Render 3D de un pasillo con puertas arqueadas, vigas de madera y vistas al jardín',
				caption: 'Espacio de transición',
				description:
					'Un espacio de transición con puertas de piedra arqueadas, vigas de madera en el techo y vistas al jardín.',
			},
		],
	},
};
