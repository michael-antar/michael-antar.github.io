import { skillCategoriesData } from '@/data/skillCategories';
import { SkillBadge } from './SkillBadge';

export const SkillCategories = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategoriesData.map((category) => (
                <div key={category.title} className="flex flex-col gap-4">
                    <h3 className="text-lg font-bold">{category.title}</h3>
                    <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill) => (
                            <SkillBadge key={skill} skill={skill} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};
