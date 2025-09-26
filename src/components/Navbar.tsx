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
                {/* Left Section */}
                <div className="flex flex-1 justify-start">
                    <Link
                        to="hero"
                        {...scrollConfig}
                        className="font-bold text-lg cursor-pointer"
                    >
                        {/* Show initials on small screens */}
                        <span className="hidden md:inline">Michael Antar</span>
                        <span className="inline md:hidden">MA</span>
                    </Link>
                </div>

                {/* Left group of centered links */}
                <div className="absolute right-1/2 top-1/2 -translate-y-1/2 mr-2 md:mr-4 flex items-center space-x-4 md:space-x-8">
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
                </div>

                {/* Right group of centered links */}
                <div className="absolute left-1/2 top-1/2 -translate-y-1/2 ml-2 md:ml-4 flex items-center space-x-4 md:space-x-8">
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

                {/* Right Section */}
                <div className="flex flex-1 justify-end">
                    <ThemeToggle />
                </div>
            </nav>
        </header>
    );
};
