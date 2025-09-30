import calampLogoLight from '@/assets/calamp-light.png';
import calampLogoDark from '@/assets/calamp-dark.png';
import cryoxLogoLight from '@/assets/cryox-light.png';
import mastercardLogo from '@/assets/mastercard.png';
import o9LogoLight from '@/assets/o9-light.png';
import o9LogoDark from '@/assets/o9-dark.png';

export interface Experience {
    role: string;
    type: string;
    company: string;
    date: string;
    description: string[];
    techStack: string[];
    logoLight?: string;
    logoDark?: string;
}

export const experienceData: Experience[] = [
    {
        role: 'Software Test Engineer Intern',
        type: 'Internship',
        company: 'CalAmp',
        logoLight: calampLogoLight,
        logoDark: calampLogoDark,
        date: 'June 2025 - Sep 2025',
        description: [
            'Developed Python scripts with Robot Framework to perform automated, byte-level validation of TCP/IP and UDP message protocols for embedded IoT devices.',
            'Collaborated directly with the firmware team to debug low-level C code, identifying and helping remove legacy calculations to optimize performance.',
            'Engineered a scalable, JSON-driven automation framework that increased test coverage across 15+ message types and enabled rapid implementation of future tests.',
        ],
        techStack: ['Python', 'Robot Framework', 'JSON', 'C', 'TCP/IP', 'UDP'],
    },
    {
        role: 'Full-Stack Developer (Web Simulation)',
        type: 'Capstone Project',
        company: 'CryoX',
        logoLight: cryoxLogoLight,
        date: 'Aug 2024 - May 2025',
        description: [
            'Owned the end-to-end development of a performant, data-intensive web application, leading the project from requirements gathering to final production deployment.',
            'Established a modern CI/CD pipeline using GitHub Actions and Vercel to automate unit/integration tests, builds, and deployments on every code commit.',
            'Engineered a robust client-side architecture using React, TypeScript, and Vite, focused on performance, reliability, and extensive error handling.',
        ],
        techStack: [
            'React',
            'TypeScript',
            'Vite',
            'CI/CD',
            'GitHub Actions',
            'Vercel',
        ],
    },
    {
        role: 'Applied AI Systems Intern',
        type: 'Internship',
        company: 'o9 Solutions',
        logoLight: o9LogoLight,
        logoDark: o9LogoDark,
        date: 'June 2024 - Aug 2024',
        description: [
            'Co-led the development of a "Generative AI Log Mining" project, boosting developer productivity by automating log analysis and query response with GPT-4o.',
            'Designed and implemented backend systems in Python, utilizing SQL and pandas to filter, extract, and store large-scale log data from MongoDB.',
            'Developed both frontend and backend components for an AI chatbot, enabling developers to query logs with natural language and receive real-time responses.',
        ],
        techStack: [
            'Python',
            'pandas',
            'Streamlit',
            'SQL',
            'LLM',
            'RAG',
            'NLP',
            'Vector Search',
        ],
    },
    {
        role: 'Software Quality Engineer Intern',
        type: 'Internship',
        company: 'Mastercard',
        logoLight: mastercardLogo,
        logoDark: mastercardLogo,
        date: 'June 2023 - Aug 2023',
        description: [
            'Spearheaded the creation and execution of automated end-to-end tests for a merchant loyalty platform, reducing manual testing efforts by 40%.',
            'Validated RESTful API endpoints against design specifications using Postman, enforcing schema, business logic, and proper HTTP status codes within a GitLab CI/CD pipeline.',
            'Thrived in an Agile/Scrum environment, utilizing Jira and Git to manage tasks, contribute to sprints, and enhance team workflow.',
        ],
        techStack: [
            'Postman',
            'REST API',
            'GitLab',
            'CI/CD',
            'Agile',
            'Jira',
            'Git',
        ],
    },
];
