import React from 'react';

import { BubbleBackground } from './BubbleBackground';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

type LayoutProps = {
    children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
    return (
        <BubbleBackground interactive={true}>
            <Navbar />
            <main className="container mx-auto px-4 py-8">{children}</main>
            <Footer />
        </BubbleBackground>
    );
};
