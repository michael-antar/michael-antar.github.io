import orderlyVideoLight from '@/assets/orderly-demo-light.mp4';
import orderlyVideoDark from '@/assets/orderly-demo-dark.mp4';
import orderlyThumbnailLight from '@/assets/orderly-thumb-light.png';
import orderlyThumbnailDark from '@/assets/orderly-thumb-dark.png';

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
    videoLight: string;
    videoDark: string;
    thumbnailLight: string;
    thumbnailDark: string;
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
        techStack: [
            'React',
            'TypeScript',
            'Supabase',
            'Tailwind CSS',
            'PostgreSQL',
            'shadcn',
            'Vite',
            'Vercel',
        ],
        links: {
            live: 'https://orderly-rank.vercel.app/',
            repo: 'https://github.com/michael-antar/orderly',
        },
        videoLight: orderlyVideoLight,
        videoDark: orderlyVideoDark,
        thumbnailLight: orderlyThumbnailLight,
        thumbnailDark: orderlyThumbnailDark,
    },
];
