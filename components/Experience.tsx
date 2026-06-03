'use client';

import { useEffect, useRef } from 'react';
import experience from '@/data/experience.json';

export default function Experience() {
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
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" ref={ref} className="bg-[#F8F7F4] py-28 px-8 md:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <div className="flex items-end justify-between mb-20 reveal">
          <div>
            <p className="text-[10px] tracking-[0.35em] uppercase text-[#64748B] mb-4">Career</p>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold text-[#0A0A0A]">
              Experience
            </h2>
          </div>
          <a
            href="https://linkedin.com/in/zacharyleifer"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex text-xs tracking-widest uppercase text-[#475569] hover:text-[#0A0A0A] transition-colors border-b border-[#475569]/40 hover:border-[#0A0A0A] pb-0.5"
          >
            Full Profile →
          </a>
        </div>

        {/* Roles */}
        <div className="space-y-0 divide-y divide-[#E2E8F0]">
          {experience.map((role, i) => (
            <div
              key={i}
              className={`py-12 grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-4 reveal reveal-delay-${Math.min(i + 1, 4)}`}
            >
              {/* Year column — consistent position for every role */}
              <div className="lg:col-span-2">
                <div className="text-sm font-medium text-[#475569] tracking-wide">{role.years}</div>
                <div className="text-xs text-[#94A3B8] mt-1">{role.location}</div>
              </div>

              {/* Role content */}
              <div className="lg:col-span-10">
                <h3 className="font-display text-xl font-semibold text-[#0A0A0A]">{role.title}</h3>
                <div className="flex flex-wrap items-center gap-2 mt-1">
                  <span className="text-[#0A0A0A] font-medium text-sm">{role.company}</span>
                  <span className="text-[#94A3B8] text-sm">·</span>
                  <span className="text-[#64748B] text-xs">{role.parent}</span>
                </div>

                {/* Company description */}
                <p className="text-[#94A3B8] text-xs italic mt-3 leading-relaxed max-w-3xl">
                  {role.companyDescription}
                </p>

                {/* Achievements (only when present) */}
                {role.highlights.length > 0 && (
                  <ul className="space-y-2 mt-5">
                    {role.highlights.map((h, j) => (
                      <li key={j} className="text-sm text-[#475569] flex items-start gap-3">
                        <span className="text-[#94A3B8] mt-1.5 flex-shrink-0 text-[8px]">●</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
