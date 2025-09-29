export type SkillCategory = {
    title: string;
    skills: string[];
};

export const skillCategoriesData: SkillCategory[] = [
    {
        title: 'Frontend Development',
        skills: [
            'TypeScript',
            'React',
            'HTML/CSS',
            'Tailwind CSS',
            'Shadcn',
            'Vite',
        ],
    },
    {
        title: 'Backend & Data',
        skills: [
            'Python',
            'SQL',
            'PostgreSQL',
            'Pandas',
            'REST APIs',
            'Supabase',
            'MongoDB',
        ],
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
    },
];
