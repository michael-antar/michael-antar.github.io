import { Link } from 'react-scroll';
import { ThemeToggle } from './ThemeToggle';

export const Navbar = () => {
    const scrollConfig = {
        smooth: true,
        duration: 500,
        offset: -70,
    };

    const linkClassName = 'text-sm font-medium hover:underline cursor-pointer';

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <nav className="container mx-auto px-4 h-14 flex items-center justify-between">
                <Link
                    to="hero"
                    {...scrollConfig}
                    className="font-bold text-lg cursor-pointer"
                >
                    Michael Antar
                </Link>
                <div className="flex items-center space-x-4">
                    <Link to="hero" {...scrollConfig} className={linkClassName}>
                        About
                    </Link>
                    <Link
                        to="education"
                        {...scrollConfig}
                        className={linkClassName}
                    >
                        Education
                    </Link>
                    <Link
                        to="experience"
                        {...scrollConfig}
                        className={linkClassName}
                    >
                        Experience
                    </Link>
                    <Link
                        to="projects"
                        {...scrollConfig}
                        className={linkClassName}
                    >
                        Projects
                    </Link>
                </div>
                <ThemeToggle />
            </nav>
        </header>
    );
};
