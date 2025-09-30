import { type Experience } from '@/data/experiences';
import { Section } from './Section';
import { SkillBadge } from './SkillBadge';
import { useTheme } from 'next-themes';

type ExperienceSectionProps = {
    experiences: Experience[];
};

export const ExperienceSection = ({ experiences }: ExperienceSectionProps) => {
    return (
        <Section id="experience">
            <h2 className="text-3xl font-bold text-center mb-12">
                Work Experience
            </h2>
            <div className="relative max-w-2xl mx-auto">
                {/* The central vertical line of the timeline */}
                <div className="absolute left-0 w-0.5 h-full bg-muted"></div>

                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <ExperienceItem experience={exp} key={index} />
                    ))}
                </div>
            </div>
        </Section>
    );
};

type ExperienceItemProps = {
    experience: Experience;
};

const ExperienceItem = ({ experience }: ExperienceItemProps) => {
    const { theme } = useTheme();
    const logo = theme === 'dark' ? experience.logoDark : experience.logoLight;
    return (
        <div className="relative pl-8 md:pl-12 py-4">
            {/* The dot on the timeline */}
            <div className="absolute left-[-5px] top-6 w-3 h-3 bg-muted rounded-full border-4 border-muted"></div>

            <p className="text-sm text-muted-foreground">{experience.date}</p>
            <h3 className="font-bold text-lg mt-1">{experience.role}</h3>
            <div className="flex items-center gap-3 mb-3">
                <h4 className="font-medium text-primary/80">
                    {experience.company}
                </h4>
                {logo && (
                    <img
                        src={logo}
                        alt={`${experience.company} logo`}
                        className="h-5 object-contain"
                    />
                )}
            </div>

            <ul className="list-disc pl-5 space-y-2 text-sm">
                {experience.description.map((point, index) => (
                    <li key={index}>{point}</li>
                ))}
            </ul>

            <div className="flex flex-wrap gap-2 mt-4">
                {experience.techStack.map((tech) => (
                    <SkillBadge key={tech} skill={tech} />
                ))}
            </div>
        </div>
    );
};
