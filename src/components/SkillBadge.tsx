import React from 'react';
import { getSkill } from '@/data/skills';

type SkillBadgeProps = {
    skill: string;
};

export const SkillBadge = ({ skill }: SkillBadgeProps) => {
    const { name, icon: Icon, color } = getSkill(skill);

    return (
        <div
            className="flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium border
                       bg-[hsl(var(--skill-color)/0.10)]
                       border-[hsl(var(--skill-color)/0.30)]
                       text-[hsl(var(--skill-color))]
                       transition-colors hover:bg-[hsl(var(--skill-color)/0.20)]"
            style={{ '--skill-color': color } as React.CSSProperties}
        >
            {Icon && (
                <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3"
                    fill="currentColor"
                >
                    <title>{Icon.title}</title>
                    <path d={Icon.path} />
                </svg>
            )}
            {name}
        </div>
    );
};
