'use client';

import { useEffect, useRef } from 'react';

const awards = [
  { tier: 'Gold', color: '#C9A227', work: 'Brand Site Improvements' },
  { tier: 'Silver', color: '#B8BCC2', work: 'Ultimo Campaign' },
  { tier: 'Bronze', color: '#B08D57', work: 'Breakfast Offer Campaign' },
  { tier: 'Bronze', color: '#B08D57', work: 'The Palazzo Suite Campaign, "Every Key Unlocks A Suite"' },
];

export default function Recognition() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting)
          el.querySelectorAll('.reveal').forEach((r) => r.classList.add('visible'));
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="recognition" ref={ref} className="grain bg-[#070B14] py-24 px-8 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-3 reveal">
            <p className="text-[10px] tracking-[0.35em] uppercase text-[#475569] lg:sticky top-24">
              Recognition
            </p>
          </div>

          <div className="lg:col-span-9">
            {/* HSMAI Adrian Awards */}
            <div className="flex items-center gap-5 mb-8 reveal">
              <div className="bg-white rounded-md h-14 px-5 flex items-center flex-shrink-0">
                <img src="/images/logos/hsmai.png" alt="HSMAI" className="h-7 w-auto object-contain" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-white leading-tight">
                  HSMAI Adrian Awards
                </h3>
                <p className="text-[#64748B] text-xs mt-1 tracking-wide">
                  Global hospitality &amp; travel marketing excellence · 2015
                </p>
              </div>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4 reveal reveal-delay-1">
              {awards.map((a, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="mt-1.5 w-2.5 h-2.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: a.color }}
                  />
                  <span className="text-sm text-white/75 leading-snug">
                    <span className="text-white font-semibold">{a.tier}</span>
                    <span className="text-white/45"> · </span>
                    {a.work}
                  </span>
                </li>
              ))}
            </ul>

            {/* Certifications */}
            <div className="mt-12 pt-8 border-t border-white/[0.08] reveal reveal-delay-2">
              <p className="text-[9px] tracking-[0.35em] uppercase text-[#475569] mb-3">Certifications</p>
              <p className="text-white/60 text-sm">
                Google Analytics Individual Qualification · Google Analytics Platform Principles
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
