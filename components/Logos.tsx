'use client';

import { useEffect, useRef } from 'react';

// Set `logo` to a file in /public/images/logos/ to render the real mark.
// Until then, a styled wordmark is shown automatically.
const organizations = [
  { name: 'Las Vegas Sands', logo: null },
  { name: 'The Venetian', logo: null },
  { name: '1/ST Technology', logo: null },
  { name: 'The Stronach Group', logo: null },
  { name: 'PokerAtlas', logo: null },
  { name: 'MLB Advanced Media', logo: null },
  { name: 'Folli Follie', logo: null },
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

        <div className="flex flex-wrap items-center gap-x-12 gap-y-8 reveal reveal-delay-1">
          {organizations.map((org, i) => (
            <div key={i} className="flex items-center">
              {org.logo ? (
                <img
                  src={org.logo}
                  alt={org.name}
                  className="logo-item h-8 md:h-9 w-auto object-contain"
                />
              ) : (
                <span
                  className="font-display font-bold text-[#0A0A0A]/35 hover:text-[#0A0A0A]/80 transition-colors duration-300 cursor-default"
                  style={{ fontSize: 'clamp(1.05rem, 2vw, 1.35rem)', letterSpacing: '0.02em' }}
                >
                  {org.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
