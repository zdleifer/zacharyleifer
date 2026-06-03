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
              className={`py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 reveal reveal-delay-${Math.min(i + 1, 4)}`}
            >
              {/* Metric callout */}
              <div className="lg:col-span-2 flex flex-row lg:flex-col items-start gap-4 lg:gap-0">
                {role.metric && (
                  <div>
                    <div className="font-display text-3xl font-bold text-[#0A0A0A]">{role.metric}</div>
                    <div className="text-[10px] tracking-wider uppercase text-[#64748B] mt-1">{role.metricLabel}</div>
                  </div>
                )}
                <div className="lg:mt-6">
                  <div className="text-xs text-[#64748B]">{role.years}</div>
                </div>
              </div>

              {/* Role content */}
              <div className="lg:col-span-10">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-[#0A0A0A]">{role.title}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[#0A0A0A] font-medium text-sm">{role.company}</span>
                      <span className="text-[#94A3B8] text-sm">·</span>
                      <span className="text-[#64748B] text-xs">{role.parent}</span>
                    </div>
                  </div>
                  <span className="text-xs text-[#64748B] whitespace-nowrap">{role.location}</span>
                </div>

                <p className="text-[#475569] text-sm mt-3 mb-5 leading-relaxed">{role.description}</p>

                <ul className="space-y-2">
                  {role.highlights.map((h, j) => (
                    <li key={j} className="text-sm text-[#64748B] flex items-start gap-3">
                      <span className="text-[#64748B] mt-1.5 flex-shrink-0 text-xs">●</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Earlier career note */}
        <div className="mt-12 pt-8 border-t border-[#E2E8F0] reveal">
          <p className="text-xs text-[#64748B] tracking-wide">
            Earlier: <span className="text-[#64748B]">Director of Marketing, Overlay Gaming</span> · <span className="text-[#64748B]">eCommerce Manager, Folli Follie Group</span> · <span className="text-[#64748B]">Marketing Producer, MLB Advanced Media (Yankees.com)</span>
          </p>
        </div>
      </div>
    </section>
  );
}
