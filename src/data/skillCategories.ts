export type SkillCategory = {
    title: string;
    skills: string[];
    lightColor: string; // HSL color for light mode
    darkColor: string; // HSL color for dark mode
};

export const skillCategoriesData: SkillCategory[] = [
    {
        title: 'Frontend Development',
        skills: [
            'TypeScript',
            'React',
            'HTML',
            'CSS',
            'Tailwind CSS',
            'shadcn',
            'Vite',
        ],
        lightColor: '210 100% 30%',
        darkColor: '210 100% 60%',
    },
    {
        title: 'Backend & Data',
        skills: [
            'Python',
            'SQL',
            'PostgreSQL',
            'pandas',
            'REST APIs',
            'Supabase',
            'MongoDB',
            'JSON',
        ],
        lightColor: '34 100% 30%',
        darkColor: '34 100% 60%',
    },
    {
        title: 'QA & Test Automation',
        skills: [
            'Robot Framework',
            'Pytest',
            'Postman',
            'TCP/IP',
            'UDP',
            'CI/CD',
        ],
        lightColor: '340 82% 40%',
        darkColor: '340 82% 60%',
    },
    {
        title: 'DevOps & Workflow',
        skills: [
            'Git',
            'GitHub Actions',
            'GitLab',
            'Agile/Scrum',
            'Jira',
            'Vercel',
        ],
        lightColor: '118 100% 30%',
        darkColor: '118 100% 60%',
    },
];
