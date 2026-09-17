export interface TeamMember {
	name: string;
	role: string;
	imageSrc: string;
	imageAlt: string;
	paragraphs?: string[];
}

export const teamMembers: TeamMember[] = [
	{
		name: 'Margaret Van Puffelen',
		role: 'Founder',
		imageSrc: '/margaret.jpg',
		imageAlt: 'Margaret Van Puffelen of Colors of Design',
		paragraphs: [
			'Born in Viña del Mar, Chile, Margaret studied decorative arts at Bellas Artes before exploring these disciplines in the United States, working for Smith Architects, Leonard Pardon, and Richard Palmer Design in Palm Beach, Florida, decorating large homes.',
			'The path of decorative art led her to study interior design and interior architecture at Miami International University of Art and Design, where she graduated with a Bachelor of Fine Arts in Interior Design.',
			'Margaret pursued her career as an interior designer while working on projects for clients from the United States and Latin America. Today, Margaret and her team at Colors of Design develop projects for clients across the country, surrounded by experienced, talented professionals committed to delivering above and beyond the standard for projects big or small.',
		],
	},
	{
		name: 'William Riveros',
		role: 'Architect',
		imageSrc: '/william.avif',
		imageAlt: 'William Riveros, architect at Colors of Design',
		paragraphs: [
			'William is a talented interior designer. He completed his academic studies as an architect in Bolivia and moved to Miami to continue his education and professional practice. His outgoing personality always leads him to new challenges and learning experiences. William has worked on projects in London, New York, and Miami.',
			'Driven by passion and achievement, William’s talents are an asset to our interior design firm. His love for design is fueled by travel and exploration, visiting art exhibitions, immersing himself in projects on weekends, and discovering creative outlets such as virtual reality for interior design, new software, and painting.',
			'William combines these interests with his daily work, creating environments where he can thrive and evolve ideas that lead to great interior design concepts.',
		],
	},
	{
		name: 'Yusnelis Alvarez',
		role: 'Architect, Interior Designer',
		imageSrc: '/yusnelis-alvarez.avif',
		imageAlt: 'Yusnelis Alvarez, architect and interior designer at Colors of Design',
	},
	{
		name: 'Ulysses',
		role: 'Interior Designer & Architect',
		imageSrc: '/ulysses.avif',
		imageAlt: 'Ulysses, interior designer and architect at Colors of Design',
		paragraphs: [
			'With a degree in architecture and general construction from the University of Mexico, Ulysses specialized in interior design, architecture, conceptual visualization, and space planning.',
			'With wide experience at firms such as FREE, Fernando Romero, and Michel Rojkind, and on projects in Mexico, the United States, Latin America, and Europe, Ulysses brings a highly valuable skill set to Colors of Design, where his expertise helps assemble beautiful projects for our clients.',
			'Ulysses has the respect of clients and colleagues in the design industry for his work ethic and detail-oriented approach. His work has been published in specialty architectural magazines and by companies around the world.',
		],
	},
];
