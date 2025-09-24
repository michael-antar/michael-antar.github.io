import React from 'react';

type SectionProps = React.HTMLAttributes<HTMLElement> & {
    children: React.ReactNode;
};

export const Section = ({ children, className, ...props }: SectionProps) => {
    return (
        <section {...props} className={`py-8 ${className || ''}`}>
            <div className="bg-card/50 backdrop-blur-lg border border-border/20 shadow-lg rounded-xl p-8 md:p-12">
                {children}
            </div>
        </section>
    );
};
