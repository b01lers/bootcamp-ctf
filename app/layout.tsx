import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

// Components
import NavBar from '@/app/NavBar';
import Equalizer from '@/app/Equalizer';
import Footer from '@/app/Footer';
import ScrollableBackground from '@/app/ScrollableBackground';

// Providers
import TimeProvider from '@/components/TimeProvider';
import FilterProvider from '@/components/FilterProvider';
import PreferencesProvider from '@/components/PreferencesProvider';
import FlagDispatchProvider from '@/components/FlagDispatchProvider';

import '@/app/globals.css';


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: {
        absolute: 'b01lers bootcamp CTF 2025',
        template: '%s - b01lers bootcamp CTF 2025'
    },
    description: 'Bootcamp CTF is a training camp for Purdue students to sharpen their CTF skills.',
}

export default function RootLayout(props: { children: ReactNode }) {
    return (
        <html lang="en" className="h-full overflow-y-scroll scroll-smooth">
            <body
                className="bg-linear-to-b/srgb from-background from-25% to-theme bg-fixed text-white h-full flex flex-col"
                style={inter.style}
            >
                <TimeProvider>
                    <FilterProvider>
                        <PreferencesProvider>
                            <FlagDispatchProvider>
                                <ScrollableBackground />

                                <NavBar />
                                {props.children}

                                <Equalizer />
                                <Footer />
                            </FlagDispatchProvider>
                        </PreferencesProvider>
                    </FilterProvider>
                </TimeProvider>
            </body>
        </html>
    )
}
