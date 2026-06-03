'use client';

import { useEffect, useRef } from 'react';

const employers = [
  {
    name: 'Las Vegas Sands',
    sub: 'The Venetian Resort · Fortune 500',
    type: 'employer',
  },
  {
    name: '1/ST Technology',
    sub: 'The Stronach Group',
    type: 'employer',
  },
  {
    name: 'PokerAtlas',
    sub: 'Overlay Gaming Corp.',
    type: 'employer',
  },
];

const education = [
  {
    name: 'Harvard Business School',
    sub: 'Advanced Management Program',
    type: 'education',
  },
  {
    name: 'Cornell University',
    sub: 'B.S. Applied Economics & Management',
    type: 'education',
  },
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

        <p className="text-[10px] tracking-[0.35em] uppercase text-[#94A3B8] mb-10 reveal">
          Career & Education
        </p>

        {/* Employer logos */}
        <div className="mb-8 reveal reveal-delay-1">
          <p className="text-[9px] tracking-[0.3em] uppercase text-[#CBD5E1] mb-6">Experience</p>
          <div className="flex flex-wrap gap-x-10 gap-y-6 items-center">
            {employers.map((item, i) => (
              <div key={i} className="group cursor-default">
                <p
                  className="font-display font-bold text-[#0A0A0A]/30 group-hover:text-[#0A0A0A]/80 transition-colors duration-300"
                  style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', letterSpacing: '0.03em' }}
                >
                  {item.name}
                </p>
                <p className="text-[10px] text-[#94A3B8] tracking-wider mt-0.5">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full h-px bg-[#E2E8F0] my-8" />

        {/* Education logos */}
        <div className="reveal reveal-delay-2">
          <p className="text-[9px] tracking-[0.3em] uppercase text-[#CBD5E1] mb-6">Education</p>
          <div className="flex flex-wrap gap-x-10 gap-y-6 items-center">
            {education.map((item, i) => (
              <div key={i} className="group cursor-default">
                <p
                  className="font-display font-bold text-[#0A0A0A]/30 group-hover:text-[#0A0A0A]/80 transition-colors duration-300"
                  style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', letterSpacing: '0.03em' }}
                >
                  {item.name}
                </p>
                <p className="text-[10px] text-[#94A3B8] tracking-wider mt-0.5">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="text-[10px] text-[#CBD5E1] mt-8 reveal reveal-delay-3">
          Hover to reveal · Actual logo assets can be added at{' '}
          <code className="text-[#94A3B8]">public/images/logos/</code>
        </p>
      </div>
    </section>
  );
}
