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
            <h2 className="text-[10px] tracking-[0.35em] uppercase text-[#475569] lg:sticky top-24">
              About
            </h2>
          </div>

          {/* Content */}
          <div className="lg:col-span-9">
            {/* Pull quote */}
            <blockquote className="font-display text-[clamp(1.4rem,2.8vw,2.1rem)] italic font-normal text-white/75 leading-snug mb-16 border-l-2 border-[#3B5998] pl-8 reveal">
              "Strategy without execution is theory. Technology without commercial purpose is overhead."
            </blockquote>

            <div className="space-y-6 text-white/60 text-base leading-[1.9] reveal reveal-delay-1">
              <p className="text-white/80">
                Zachary Leifer is a Las Vegas-based commercial growth and transformation executive who helps companies create more predictable value from data, digital transformation, technology and AI. Through State of Mind Strategies, he advises executives on marketing strategy and customer growth, and on AI Strategy, AI Investment Governance, AI Readiness and AI Value Realization.
              </p>
              <p>
                He has served as Chief Marketing Officer at 1/ST Technology, Chief Commercial Officer at PokerAtlas, and Vice President of Corporate Information Technology at Las Vegas Sands. His career spans integrated resorts and gaming, hospitality, sports wagering and horse racing, B2B and B2C gaming technology, eCommerce, direct-to-consumer brands and sports media, beginning at MLB Advanced Media.
              </p>
              <p>
                His differentiator is having led both the commercial functions responsible for growth and the enterprise technology capabilities required to enable it. At Las Vegas Sands, a Fortune 500 integrated resort and gaming company, he was recruited from Vice President of Digital Marketing and eCommerce at The Venetian Resort into Corporate Information Technology. That experience gave him perspective on both sides of transformation: defining the commercial opportunity and aligning the data, technology, operating model and organization required to capture it. In every role, he has focused on the same fundamentals of clear priorities, teams aligned around outcomes, accountability built into the operating model, and conditions that let people do their best work.
              </p>
              <p>
                Zachary completed the Harvard Business School Advanced Management Program in 2026. His{' '}
                <a href="/blog/why-data-transformations-fail/" className="text-white/80 underline decoration-white/25 underline-offset-4 hover:text-white transition-colors">capstone research on why data and digital transformations fail</a>, a survey of 82 senior executives, focused on driving enterprise value from data, digital transformation and AI. He holds a B.S. in Applied Economics and Management from Cornell University.
              </p>
            </div>

            {/* Education */}
            <div className="mt-16 pt-12 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 gap-8 reveal reveal-delay-2">
              <div className="group">
                <p className="text-[9px] tracking-[0.35em] uppercase text-[#475569] mb-4">Education</p>
                <div className="bg-white rounded-md h-24 w-fit px-7 flex items-center mb-4">
                  <img
                    src="/images/logos/harvard.png"
                    alt="Harvard Business School"
                    className="max-h-14 w-auto object-contain"
                  />
                </div>
                <p className="font-display text-white text-lg font-semibold group-hover:text-white/90 transition-colors">
                  Harvard Business School
                </p>
                <p className="text-white/55 text-sm mt-1">Advanced Management Program · 2026</p>
                <p className="text-[#64748B] text-xs mt-1 italic">
                  Capstone: Enterprise Value from Data, Digital Transformation & AI
                </p>
              </div>
              <div className="group">
                <p className="text-[9px] tracking-[0.35em] uppercase text-[#475569] mb-4">&nbsp;</p>
                <div className="bg-white rounded-md h-24 w-fit px-7 flex items-center mb-4">
                  <img
                    src="/images/logos/cornell-cropped.png"
                    alt="Cornell University"
                    className="max-h-14 w-auto object-contain"
                  />
                </div>
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
