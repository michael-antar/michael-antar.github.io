import { Section } from './Section';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

export const HeroSection = () => {
    return (
        <Section id="hero">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Dedicated Developer Crafting High-Quality Web Experiences
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                    A passionate software developer with a focus on building
                    beautiful and functional applications. Ready to take
                    ownership and create something amazing.
                </p>
                <div className="flex justify-center items-center space-x-6">
                    <a
                        href="https://github.com/your-username"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                    >
                        <Github className="h-6 w-6 hover:opacity-75" />
                    </a>
                    <a
                        href="https://linkedin.com/in/your-username"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                    >
                        <Linkedin className="h-6 w-6 hover:opacity-75" />
                    </a>
                    <a href="mailto:your.email@example.com" aria-label="Email">
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
            </div>
        </Section>
    );
};
