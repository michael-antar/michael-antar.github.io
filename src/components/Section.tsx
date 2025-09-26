import React from 'react';
import { motion } from 'framer-motion';

type SectionProps = React.HTMLAttributes<HTMLElement> & {
    children: React.ReactNode;
};

export const Section = ({ children, className, ...props }: SectionProps) => {
    return (
        <section {...props} className={`py-8 ${className || ''}`}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -5, scale: 1.01 }}
                className="bg-card/50 backdrop-blur-lg rounded-xl p-8 md:p-12
                           shadow-lg shadow-black/20
                           ring-1 ring-inset ring-white/10"
            >
                {children}
            </motion.div>
        </section>
    );
};
