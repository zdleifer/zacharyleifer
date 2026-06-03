'use client';

import { useEffect, useRef } from 'react';
import expertise from '@/data/expertise.json';

export default function Expertise() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll('.reveal').forEach((r) => r.classList.add('visible'));
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="expertise" ref={ref} className="bg-[#0A0A0A] py-28 px-8 md:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-20 reveal">
          <p className="text-[10px] tracking-[0.35em] uppercase text-[#475569] mb-4">Capabilities</p>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold text-white">
            Core Leadership Areas
          </h2>
        </div>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {expertise.categories.map((category, i) => (
            <div
              key={i}
              className={`py-10 md:py-0 md:px-10 first:pl-0 last:pr-0 reveal reveal-delay-${i + 1}`}
            >
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#475569] mb-6">
                {String(i + 1).padStart(2, '0')}
              </p>
              <h3 className="font-display text-lg font-semibold text-white mb-8">{category.name}</h3>
              <ul className="space-y-3">
                {category.areas.map((area, j) => (
                  <li key={j} className="text-sm text-white/40 hover:text-white/70 transition-colors flex items-start gap-2">
                    <span className="text-[#475569] mt-1 flex-shrink-0 text-xs">›</span>
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
