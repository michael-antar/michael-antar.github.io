import * as si from 'simple-icons';
import type { SimpleIcon } from 'simple-icons';

type Skill = {
    name: string;
    icon?: SimpleIcon;
    color: string; // HSL color string, e.g., '217 91% 60%' for blue
};

// Predefined color pallet
const COLOR_PALETTE = [
    '217 91% 60%', // Blue
    '158 87% 36%', // Green
    '34 97% 64%', // Orange
    '340 82% 52%', // Pink
    '197 90% 41%', // Cyan
    '262 84% 59%', // Violet
];

// Directory for skill colors
const SKILLS_DATA: { [key: string]: Omit<Skill, 'name'> } = {
    React: {
        icon: si.siReact,
        color: '197 90% 41%',
    },
    TypeScript: {
        icon: si.siTypescript,
        color: '211 90% 48%',
    },
    Python: {
        icon: si.siPython,
        color: '207 90% 54%',
    },
    'Tailwind CSS': {
        icon: si.siTailwindcss,
        color: '197 100% 48%',
    },
    SQL: {
        color: '34 97% 64%',
    },
    'Robot Framework': {
        icon: si.siRobotframework,
        color: '0, 0%, 0%',
    },
    JSON: {
        icon: si.siJson,
        color: '0, 0%, 0%',
    },
    C: {
        icon: si.siC,
        color: '212, 26%, 73%',
    },
};

// Simple hash for fallback color
const simpleHash = (str: string) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash |= 0; // Convert to 32bit integer
    }
    return Math.abs(hash);
};

export const getSkill = (skillName: string): Skill => {
    const skillData = SKILLS_DATA[skillName];

    if (skillData) {
        return { name: skillName, ...skillData };
    }

    // Fallback for skills not in the directory
    const hash = simpleHash(skillName);
    const color = COLOR_PALETTE[hash % COLOR_PALETTE.length];
    return { name: skillName, color };
};
