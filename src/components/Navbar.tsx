import { ThemeToggle } from './ThemeToggle';

export const Navbar = () => {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <nav className="container mx-auto px-4 h-14 flex items-center justify-between">
                <a href="/" className="font-bold text-lg">
                    Michael Antar
                </a>
                <div className="flex items-center space-x-4">
                    <a
                        href="#hero"
                        className="text-sm font-medium hover:underline"
                    >
                        About me
                    </a>
                    <a
                        href="#education"
                        className="text-sm font-medium hover:underline"
                    >
                        Education
                    </a>
                    <a
                        href="#experience"
                        className="text-sm font-medium hover:underline"
                    >
                        Experience
                    </a>
                    <a
                        href="#projects"
                        className="text-sm font-medium hover:underline"
                    >
                        Projects
                    </a>
                </div>
                <ThemeToggle />
            </nav>
        </header>
    );
};
