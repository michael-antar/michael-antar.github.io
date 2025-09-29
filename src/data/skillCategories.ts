import { getSkill } from './skills';

export type SkillCategory = {
    title: string;
    skills: string[];
    categoryColor: string;
};

const CATEGORY_COLORS = {
    'Frontend Development': getSkill('React').lightColor,
    'Backend & Data': getSkill('Python').lightColor,
    'QA & Test Automation': '340 82% 52%',
    'DevOps & Workflow': '217 91% 60%',
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
        categoryColor: CATEGORY_COLORS['Frontend Development'],
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
        categoryColor: CATEGORY_COLORS['Backend & Data'],
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
        categoryColor: CATEGORY_COLORS['QA & Test Automation'],
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
        categoryColor: CATEGORY_COLORS['DevOps & Workflow'],
    },
];
