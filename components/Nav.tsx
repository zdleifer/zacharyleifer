'use client';

import { useState, useEffect } from 'react';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'About', href: '#about' },
    { label: 'Work', href: '#work' },
    { label: 'Experience', href: '#experience' },
    { label: 'Insights', href: '#insights' },
    { label: 'Connect', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 nav-blur transition-all duration-500 ${
        scrolled ? 'bg-[#0A0A0A]/90 border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 md:px-12 h-16 flex items-center justify-between">
        {/* Monogram */}
        <a href="#" className="font-display text-xl font-bold text-white tracking-wider">
          ZL
        </a>

        {/* Links */}
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

        {/* LinkedIn CTA */}
        <a
          href="https://linkedin.com/in/zacharyleifer"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 text-xs tracking-widest uppercase text-white/60 hover:text-white transition-colors border border-white/20 hover:border-white/50 px-4 py-2 rounded"
        >
          LinkedIn →
        </a>
      </div>
    </nav>
  );
}
