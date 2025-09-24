export interface Project {
    title: string;
    pitch: string;
    description: string;
    features: string[];
    techStack: string[];
    links: {
        live: string;
        repo: string;
    };
    gifPath: string;
}

export const projectsData: Project[] = [
    {
        title: 'Orderly - Elo Rating App',
        pitch: 'A web app for logging and ranking your experiences.',
        description:
            'I built this app to solve the problem of ranking items in a list subjectively. Using the Elo rating system, users can easily compare two items at a time to generate a dynamically updated, ranked list.',
        features: [
            'Dynamic Elo rating calculation',
            'User authentication and data persistence',
            'Robust sorting and filtering with custom tags',
            'Responsive design for mobile and desktop',
        ],
        techStack: ['React', 'TypeScript', 'Supabase', 'Tailwind CSS'],
        links: {
            live: 'https://orderly-rank.vercel.app/',
            repo: 'https://github.com/michael-antar/orderly',
        },
        gifPath: '/assets/ranked-reviews-demo.gif',
    },
];
