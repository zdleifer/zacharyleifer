'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';
  const base = isHome ? '' : '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  const links = [
    { label: 'About', href: `${base}#about` },
    { label: 'Work', href: `${base}#work` },
    { label: 'Experience', href: `${base}#experience` },
    { label: 'Insights', href: `${base}#insights` },
    { label: 'Speaking', href: '/speaking' },
    { label: 'Connect', href: `${base}#contact` },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 nav-blur transition-all duration-500 ${
          scrolled || menuOpen ? 'bg-[#0A0A0A]/95 border-b border-white/10' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-8 md:px-12 h-16 flex items-center justify-between">
          {/* Monogram */}
          <a href={isHome ? '#' : '/'} className="font-display text-xl font-bold text-white tracking-wider">
            ZL
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs tracking-[0.15em] uppercase text-white/60 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop LinkedIn CTA */}
          <a
            href="https://linkedin.com/in/zacharyleifer"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 text-xs tracking-widest uppercase text-white/60 hover:text-white transition-colors border border-white/20 hover:border-white/50 px-4 py-2 rounded"
          >
            LinkedIn →
          </a>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <span className={`block w-5 h-px bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block w-5 h-px bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-px bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0A0A0A]/98 flex flex-col justify-center px-8 pt-16">
          <nav className="flex flex-col gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-display text-3xl font-bold text-white/80 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://linkedin.com/in/zacharyleifer"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-4 text-xs tracking-widest uppercase text-white/40 hover:text-white transition-colors"
            >
              LinkedIn →
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
