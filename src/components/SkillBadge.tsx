import React from 'react';
import { getSkill } from '@/data/skills';
import { useTheme } from 'next-themes';

type SkillBadgeProps = {
    skill: string;
};

export const SkillBadge = ({ skill }: SkillBadgeProps) => {
    const { resolvedTheme } = useTheme();
    const { name, icon: Icon, lightColor, darkColor } = getSkill(skill);

    const accentColor = resolvedTheme === 'dark' ? darkColor : lightColor;

    return (
        <div
            className="flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium border
                       bg-muted/50 hover:bg-muted/70
                       border-[hsl(var(--skill-color)/0.40)]
                       text-[hsl(var(--skill-color))]"
            style={{ '--skill-color': accentColor } as React.CSSProperties}
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
