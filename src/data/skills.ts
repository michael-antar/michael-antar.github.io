import * as si from 'simple-icons';
import type { SimpleIcon } from 'simple-icons';

type Skill = {
    name: string;
    icon?: SimpleIcon;
    lightColor: string; // HSL color for light mode
    darkColor: string; // HSL color for dark mode
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
        lightColor: '197 90% 41%', // Bright Blue
        darkColor: '197 90% 61%', // Lighter Blue
    },
    TypeScript: {
        icon: si.siTypescript,
        lightColor: '211 90% 48%',
        darkColor: '211 90% 68%',
    },
    Python: {
        icon: si.siPython,
        lightColor: '207 90% 54%',
        darkColor: '197 100% 60%',
    },
    'Tailwind CSS': {
        icon: si.siTailwindcss,
        lightColor: '197 100% 48%',
        darkColor: '197 100% 60%',
    },
    SQL: {
        lightColor: '34 97% 64%',
        darkColor: '34 97% 70%',
    },
    'Robot Framework': {
        icon: si.siRobotframework,
        lightColor: '0 0% 20%',
        darkColor: '0 0% 80%',
    },
    JSON: {
        icon: si.siJson,
        lightColor: '0 0% 20%',
        darkColor: '0 0% 80%',
    },
    C: {
        icon: si.siC,
        lightColor: '212 26% 50%',
        darkColor: '212 26% 73%',
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
    return { name: skillName, lightColor: color, darkColor: color };
};
