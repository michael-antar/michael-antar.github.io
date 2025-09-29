import { Section } from './Section';
import { SkillBadge } from './SkillBadge';
import asuLogo from '@/assets/asuLogo.png';

const educationSkills = [
    'Java',
    'C++',
    'Data Structures',
    'Algorithms',
    'Software Engineering',
    'Databases',
    'Machine Learning',
];

export const EducationSection = () => {
    return (
        <Section id="education">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">
                    Education
                </h2>

                {/* Main flex for asu content */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    {/* Image container */}
                    <div className="hidden xl:block flex-shrink-0">
                        <img
                            src={asuLogo}
                            alt="Arizona State University Logo"
                            className="w-32 h-32 object-cover rounded-lg"
                        />
                    </div>

                    {/* Text container */}
                    <div className="flex-grow">
                        <p className="text-sm text-muted-foreground">
                            August 2021 - May 2025
                        </p>

                        <div className="flex justify-between items-baseline">
                            <h3 className="font-bold text-lg mt-1">
                                Arizona State University
                            </h3>
                            <p className="text-sm font-medium text-muted-foreground">
                                GPA: 4.00
                            </p>
                        </div>

                        <h4 className="font-medium text-primary/80 mb-1">
                            Bachelor of Science in Computer Science,{' '}
                            <i>Summa Cum Laude</i>
                        </h4>
                        <h4 className="font-medium text-primary/80 mb-4">
                            Certificate in Business Data Analytics
                        </h4>

                        <ul className="list-disc pl-5 space-y-2 text-sm">
                            <li>
                                Developed a comprehensive foundation in software
                                development through rigorous coursework in{' '}
                                <strong>
                                    Data Structures & Algorithms, Software
                                    Engineering, Database Management, and
                                    Software Testing
                                </strong>
                                .
                            </li>
                            <li>
                                Recognized for consistent academic excellence by
                                receiving the <strong>ASU Moeur Award</strong>{' '}
                                and being named to the{' '}
                                <strong>
                                    Ira A. Fulton Schools of Engineering Dean's
                                    List
                                </strong>{' '}
                                for all 8 semesters.
                            </li>
                        </ul>

                        <div className="flex flex-wrap gap-2 mt-4">
                            {educationSkills.map((skill) => (
                                <SkillBadge key={skill} skill={skill} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};
