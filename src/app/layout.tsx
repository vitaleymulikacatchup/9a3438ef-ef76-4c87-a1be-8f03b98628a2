import type { Metadata } from 'next';
import { Inter_Tight, Poppins } from 'next/font/google';
import './globals.css';

const interTight = Inter_Tight({
  variable: '--font-inter-tight',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: 'MemeWave',
  description: 'Deliver a lightweight, playful single-page meme site with clear sections, smooth navigation, and a bold meme-inspired visual identity.'
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${interTight.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
