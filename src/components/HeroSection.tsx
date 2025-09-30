import { Section } from './Section';
import { SkillCategories } from './SkillCategories';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

export const HeroSection = () => {
    return (
        <Section id="hero">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold">
                    Michael Antar
                </h1>
                <div className="flex space-x-6 mt-6">
                    <a
                        href="https://github.com/michael-antar"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                    >
                        <Github className="h-6 w-6 hover:opacity-75" />
                    </a>
                    <a
                        href="https://linkedin.com/in/michaelantar"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                    >
                        <Linkedin className="h-6 w-6 hover:opacity-75" />
                    </a>
                    <a href="mailto:michaeldantar@gmail.com" aria-label="Email">
                        <Mail className="h-6 w-6 hover:opacity-75" />
                    </a>
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Resume"
                    >
                        <FileText className="h-6 w-6 hover:opacity-75" />
                    </a>
                </div>
                <p className="text-lg text-muted-foreground mt-6">
                    Coding is my passion and main hobby. I'm looking for an
                    opportunity to contribute to a team where I can work hard,
                    take ownership of a product, and be proud of what I build.
                </p>

                <div className="mt-10">
                    <SkillCategories />
                </div>
            </div>
        </Section>
    );
};
