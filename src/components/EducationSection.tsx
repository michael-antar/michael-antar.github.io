import { Section } from './Section';

export const EducationSection = () => {
    return (
        <Section id="education">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-6">
                    Education
                </h2>
                <p className="text-sm text-muted-foreground">
                    August 2021 - May 2025
                </p>
                <h3 className="font-bold text-lg mt-1">
                    Arizona State University
                </h3>
                <h4 className="font-medium text-primary/80 mb-1">
                    Bachelor of Science in Computer Science,{' '}
                    <i>Summa Cum Laude</i>
                </h4>
                <h4 className="font-medium text-primary/80 mb-3">
                    Certificate in Business Data Analytics
                </h4>
                <p className="mb-2">GPA: 4.00</p>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                    <li>
                        Developed a strong foundation in software development
                        and computer science through rigorous coursework in{' '}
                        <strong>
                            Data Structures & Algorithms, Software Engineering,
                            Database Management, and Software Testing
                        </strong>
                        .
                    </li>
                    <li>
                        Recognized for consistent academic excellence by
                        receiving the <strong>ASU Moeur Award</strong> and being
                        named to the{' '}
                        <strong>
                            Ira A. Fulton Schools of Engineering Dean's List
                        </strong>{' '}
                        for all 8 semesters.
                    </li>
                </ul>
            </div>
        </Section>
    );
};
