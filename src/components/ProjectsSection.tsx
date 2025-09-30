import { type Project } from '@/data/projects';
import { Section } from './Section';
import { SkillBadge } from './SkillBadge';
import { Github, ExternalLink } from 'lucide-react';
import { useTheme } from 'next-themes';

type ProjectsSectionProps = {
    projects: Project[];
};

export const ProjectsSection = ({ projects }: ProjectsSectionProps) => {
    return (
        <Section id="projects">
            <h2 className="text-3xl font-bold text-center mb-12">
                My Projects
            </h2>
            <div className="grid gap-8 mx-auto">
                {projects.map((project, index) => (
                    <ProjectItem project={project} key={index} />
                ))}
            </div>
        </Section>
    );
};

type ProjectItemProps = {
    project: Project;
};

const ProjectItem = ({ project }: ProjectItemProps) => {
    const { theme } = useTheme();
    const videoSrc = theme === 'dark' ? project.videoDark : project.videoLight;

    return (
        <div className="flex flex-col lg:flex-row gap-8 border-t border-border/40 pt-8">
            {/* Visuals Column */}
            <div className="w-full lg:w-1/2">
                <video
                    key={videoSrc}
                    src={videoSrc}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="rounded-lg shadow-md object-contain"
                >
                    Your browser does not support the video tag.
                </video>
            </div>

            {/* Details Column */}
            <div className="w-full lg:w-1/2">
                <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                </p>

                {/* Features */}
                <ul className="list-disc pl-5 mb-4 text-sm space-y-1">
                    {project.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech) => (
                        <SkillBadge key={tech} skill={tech} />
                    ))}
                </div>

                {/* Links */}
                <div className="flex items-center space-x-4">
                    <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm hover:underline"
                    >
                        <ExternalLink size={16} /> Live Demo
                    </a>
                    <a
                        href={project.links.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm hover:underline"
                    >
                        <Github size={16} /> View Code
                    </a>
                </div>
            </div>
        </div>
    );
};
