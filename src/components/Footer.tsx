export const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="py-6 border-t border-border/40">
            <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
                <p>&copy; {currentYear} Michael Antar. All Rights Reserved.</p>
            </div>
        </footer>
    );
};
