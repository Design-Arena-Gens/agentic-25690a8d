import type { Metadata } from 'next';
import { IBM_Plex_Sans } from 'next/font/google';
import './globals.css';

const plex = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'LumaStream | Immersive Video Stories',
  description:
    'Interactive cinematic experiences that blend curated video, narrative chapters, and behind-the-scenes content.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-slate-950">
      <body className={`${plex.className} min-h-screen`}>{children}</body>
    </html>
  );
}
