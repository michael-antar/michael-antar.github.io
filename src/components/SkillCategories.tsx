import { skillCategoriesData } from '@/data/skillCategories';
import { SkillBadge } from './SkillBadge';

export const SkillCategories = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategoriesData.map((category) => {
                const baseColor = category.categoryColor;

                return (
                    <div
                        key={category.title}
                        className="flex flex-col gap-4 rounded-xl p-6 md:p-8 
                                   border bg-[hsl(var(--category-color)/0.08)] 
                                   border-[hsl(var(--category-color)/0.30)] 
                                   ring-1 ring-inset ring-white/5"
                        style={
                            {
                                '--category-color': baseColor,
                            } as React.CSSProperties
                        }
                    >
                        <h3 className="text-lg font-bold text-foreground">
                            {category.title}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill) => (
                                <SkillBadge key={skill} skill={skill} />
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
