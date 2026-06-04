'use client';

import { useEffect, useRef } from 'react';

// Per-logo height tuned to each logo's aspect ratio so they read at a
// similar optical weight (wide logos shorter, square logos taller).
const organizations = [
  { name: 'The Venetian Resort Las Vegas', logo: '/images/logos/venetian-logo.svg', h: 'h-[38px]' },
  { name: 'Venetian Macao', logo: '/images/logos/venetian-macao.png', h: 'h-[52px]' },
  { name: 'Marina Bay Sands', logo: '/images/logos/marina-bay-sands.svg', h: 'h-10' },
  { name: '1/ST Technology', logo: '/images/logos/1st-technology.jpg', h: 'h-[50px]' },
  { name: 'Xpressbet', logo: '/images/logos/xpressbet.jpg', h: 'h-14' },
  { name: 'AmTote', logo: '/images/logos/amtote.jpg', h: 'h-14' },
  { name: 'PokerAtlas', logo: '/images/logos/pokeratlas.png', h: 'h-7' },
  { name: 'MLB Advanced Media', logo: '/images/logos/mlb.jpg', h: 'h-[50px]' },
  { name: 'Links of London', logo: '/images/logos/links-of-london.svg', h: 'h-[38px]' },
];

export default function Logos() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting)
          el.querySelectorAll('.reveal').forEach((r) => r.classList.add('visible'));
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-[#F8F7F4] py-16 px-8 md:px-12 border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto">
        <p className="text-[10px] tracking-[0.35em] uppercase text-[#64748B] mb-10 reveal">
          Organizations I&apos;ve Led & Advised
        </p>

        <div className="flex flex-wrap items-center gap-5 reveal reveal-delay-1">
          {organizations.map((org, i) => (
            <div
              key={i}
              className="bg-white rounded-lg border border-[#E2E8F0] shadow-sm h-24 px-9 flex items-center justify-center hover:shadow-md transition-shadow duration-300"
            >
              <img
                src={org.logo}
                alt={org.name}
                className={`${org.h} w-auto object-contain`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
