import './globals.css';

import { Metadata } from 'next';
import React from 'react';

import Footer from './components/footer';
import { MainContent } from './components/mainContent';
import Navigation from './components/navigation';

export const metadata: Metadata = {
  title: 'DX',
  description: 'DX is where it all starts.',
  openGraph: {
    title: 'DX',
    description: 'DX is where it all starts.',
    url: 'https://dx-liart.vercel.app/',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <MainContent>{children}</MainContent>
        {/* <main className={`${isHome ? "" : "pt-20"} flex-grow`}>{children}</main> */}
        <Navigation />
        <Footer />
      </body>
    </html>
  );
}
