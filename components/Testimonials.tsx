'use client';

import { useEffect, useRef } from 'react';
import testimonialsData from '@/data/testimonials.json';

type Testimonial = {
  quote: string;
  name: string;
  title: string;
  context: string;
  image?: string;
  initials?: string;
};

const testimonials = testimonialsData as Testimonial[];

export default function Testimonials() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting)
          el.querySelectorAll('.reveal').forEach((r) => r.classList.add('visible'));
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="grain bg-[#070B14] py-28 px-8 md:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 reveal">
          <div className="lg:col-span-3">
            <p className="text-[10px] tracking-[0.35em] uppercase text-[#475569] sticky top-24">
              Peer Perspectives
            </p>
          </div>
          <div className="lg:col-span-9">
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold text-white">
              What Leaders Say
            </h2>
            <p className="text-white/60 text-sm mt-3 max-w-lg">
              Selected from LinkedIn recommendations by C-suite executives, technology and data leaders, investors, and direct colleagues.
            </p>
          </div>
        </div>

        {/* Testimonial grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.07]">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`bg-[#070B14] p-10 md:p-12 hover:bg-[#0D1423] transition-colors duration-300 reveal reveal-delay-${Math.min(i + 1, 4)}`}
            >
              {/* Open quote mark */}
              <div
                className="font-display leading-none text-[#1E293B] mb-6 select-none"
                style={{ fontSize: '4rem' }}
              >
                "
              </div>

              <blockquote className="text-white/65 text-[0.95rem] leading-[1.8] mb-10 italic font-light">
                {t.quote}
              </blockquote>

              <div className="flex items-start gap-4 border-t border-white/[0.08] pt-6">
                {/* Recommender photo, or monogram avatar when no photo */}
                {'image' in t && t.image ? (
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover flex-shrink-0 ring-1 ring-white/15"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full flex-shrink-0 ring-1 ring-white/15 bg-[#0D1423] flex items-center justify-center">
                    <span className="font-display text-white/80 text-sm font-semibold tracking-wide select-none">
                      {'initials' in t ? t.initials : ''}
                    </span>
                  </div>
                )}
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-[#64748B] text-xs mt-0.5 leading-snug">{t.title}</p>
                  <p className="text-[#64748B] text-[10px] mt-1 tracking-wide uppercase">{t.context}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* LinkedIn CTA */}
        <div className="mt-12 text-center reveal">
          <a
            href="https://linkedin.com/in/zacharyleifer"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-[0.2em] uppercase text-[#475569] hover:text-white transition-colors border-b border-[#475569]/40 hover:border-white pb-0.5"
          >
            View all recommendations on LinkedIn →
          </a>
        </div>
      </div>
    </section>
  );
}
