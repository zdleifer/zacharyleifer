'use client';

import { useEffect, useRef } from 'react';

const stats = [
  { number: '67%', label: 'Revenue Growth', context: '4-year run at 1/ST Technology' },
  { number: '$36M', label: 'Direct Revenue', context: 'Incremental channel revenue, The Venetian' },
  { number: '56%', label: 'CAC Reduction', context: 'Customer data platform, 1/ST Technology' },
  { number: '73%', label: 'LTV/CAC Improvement', context: 'Hyper-segmentation & CRM discipline' },
];

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll('.reveal').forEach((r) => r.classList.add('visible'));
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-[#F8F7F4] py-20 px-8 md:px-12">
      <div className="max-w-7xl mx-auto">
        <p className="text-[10px] tracking-[0.35em] uppercase text-[#94A3B8] mb-12 reveal">
          Impact at Scale
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 divide-x divide-[#E2E8F0]">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`px-8 py-2 reveal reveal-delay-${i + 1}`}
            >
              <div className="font-display text-[clamp(2.5rem,5vw,4rem)] font-bold text-[#0A0A0A] leading-none mb-3">
                {stat.number}
              </div>
              <div className="text-sm font-semibold text-[#1A1A1A] mb-1 tracking-wide">
                {stat.label}
              </div>
              <div className="text-xs text-[#94A3B8] leading-relaxed">
                {stat.context}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
