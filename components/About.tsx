'use client';

import { useEffect, useRef } from 'react';

export default function About() {
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
    <section id="about" ref={ref} className="grain bg-[#070B14] py-28 px-8 md:px-12 relative">
      {/* Subtle diagonal line pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: 'repeating-linear-gradient(135deg, rgba(255,255,255,0.8) 0px, rgba(255,255,255,0.8) 1px, transparent 1px, transparent 60px)',
        }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Label */}
          <div className="lg:col-span-3 reveal">
            <p className="text-[10px] tracking-[0.35em] uppercase text-[#475569] lg:sticky top-24">
              About
            </p>
          </div>

          {/* Content */}
          <div className="lg:col-span-9">
            {/* Pull quote */}
            <blockquote className="font-display text-[clamp(1.4rem,2.8vw,2.1rem)] italic font-normal text-white/75 leading-snug mb-16 border-l-2 border-[#3B5998] pl-8 reveal">
              "Senior commercial growth executive who drives revenue, improves EBITDA, and turns customer data, AI, and technology investments into measurable business results."
            </blockquote>

            <div className="space-y-6 text-white/60 text-base leading-[1.9] reveal reveal-delay-1">
              <p>
                I combine senior marketing leadership with executive enterprise technology experience. It is a rare combination that came together when I was recruited from VP of Digital Marketing &amp; eCommerce into VP of Corporate IT at Las Vegas Sands. That crossover shaped how I think: strategy without execution is theory, and technology without commercial purpose is overhead.
              </p>
              <p>
                My career spans Fortune 500 hospitality and gaming, global B2B and B2C platforms, and direct-to-consumer brands across Las Vegas and beyond. In every context, I've focused on the same fundamentals: set clear priorities, align teams around outcomes, build accountability into the operating model, and create the conditions for people to do their best work.
              </p>
              <p>
                I recently completed the Harvard Business School Advanced Management Program, with a capstone focused on{' '}
                <em className="text-white/65">
                  Driving Enterprise Value from Data, Digital Transformation, and Artificial Intelligence
                </em>.
              </p>
            </div>

            {/* Education */}
            <div className="mt-16 pt-12 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 gap-8 reveal reveal-delay-2">
              <div className="group">
                <p className="text-[9px] tracking-[0.35em] uppercase text-[#475569] mb-3">Education</p>
                <p className="font-display text-white text-lg font-semibold group-hover:text-white/90 transition-colors">
                  Harvard Business School
                </p>
                <p className="text-white/55 text-sm mt-1">Advanced Management Program · 2026</p>
                <p className="text-[#64748B] text-xs mt-1 italic">
                  Capstone: Enterprise Value from Data, Digital Transformation & AI
                </p>
              </div>
              <div className="group">
                <p className="text-[9px] tracking-[0.35em] uppercase text-[#475569] mb-3">&nbsp;</p>
                <p className="font-display text-white text-lg font-semibold group-hover:text-white/90 transition-colors">
                  Cornell University
                </p>
                <p className="text-white/55 text-sm mt-1">B.S., Applied Economics &amp; Management</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
