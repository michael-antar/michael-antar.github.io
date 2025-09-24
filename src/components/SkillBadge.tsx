type SkillBadgeProps = {
    skill: string;
};

export const SkillBadge = ({ skill }: SkillBadgeProps) => {
    return <span>{skill}</span>;
};
