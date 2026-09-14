import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  style: ['normal', 'italic'],
  weight: ['400', '600', '700', '900'],
});

export const metadata: Metadata = {
  title: 'Page Not Found | Zachary Leifer',
  description:
    'The page you requested could not be found. Return to zacharyleifer.com for Zachary Leifer’s background, speaking and board advisory information.',
  robots: { index: false, follow: true },
};

const linkClass = 'text-[#3B5998] hover:text-[#0A0A0A] transition-colors';

export default function GlobalNotFound() {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} antialiased`}>
      <body
        className="min-h-full"
        style={{ fontFamily: 'var(--font-inter), -apple-system, sans-serif' }}
      >
        <Nav />
        <main className="bg-[#F8F7F4] min-h-screen">
          <div className="max-w-3xl mx-auto px-8 md:px-12 py-24">
            <h1 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold text-[#0A0A0A] leading-tight mb-6">
              Page Not Found
            </h1>
            <p className="text-[#334155] leading-[1.9] text-base mb-8">
              The page you requested could not be found. These pages may help:
            </p>
            <ul className="space-y-3 text-base">
              <li>
                <a href="/" className={linkClass}>Zachary Leifer home</a>
              </li>
              <li>
                <a href="/speaking/" className={linkClass}>Speaking</a>
              </li>
              <li>
                <a href="/board-executive-advisory/" className={linkClass}>Board and executive advisory</a>
              </li>
            </ul>
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
