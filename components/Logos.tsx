'use client';

import { useEffect, useRef } from 'react';

const organizations = [
  { name: 'Las Vegas Sands', logo: '/images/logos/las-vegas-sands.jpg' },
  { name: '1/ST Technology', logo: '/images/logos/1st-technology.jpg' },
  { name: 'Xpressbet', logo: '/images/logos/xpressbet.jpg' },
  { name: 'AmTote', logo: '/images/logos/amtote.jpg' },
  { name: 'MLB Advanced Media', logo: '/images/logos/mlb.jpg' },
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
              className="bg-white rounded-lg border border-[#E2E8F0] shadow-sm h-24 w-44 flex items-center justify-center px-6 hover:shadow-md transition-shadow duration-300"
            >
              <img
                src={org.logo}
                alt={org.name}
                className="max-h-14 max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
