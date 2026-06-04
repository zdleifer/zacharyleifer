'use client';

import { useEffect, useRef } from 'react';

export default function Positioning() {
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
    <section id="value" ref={ref} className="bg-[#F8F7F4] py-28 px-8 md:px-12 border-y border-[#E2E8F0]">
      <div className="max-w-5xl mx-auto">
        <p className="text-[10px] tracking-[0.35em] uppercase text-[#64748B] mb-8 reveal">
          Where I Create Value Next
        </p>

        <p className="font-display text-[clamp(1.5rem,3vw,2.25rem)] font-normal text-[#0A0A0A] leading-snug reveal">
          I am selectively exploring board, advisory, and senior operating roles where commercial
          growth, customer data, and AI transformation drive the agenda.
        </p>

        <p className="text-[#475569] text-base md:text-lg leading-relaxed mt-6 max-w-3xl reveal reveal-delay-1">
          My signature is building the marketing and commercial operating system: the data
          architecture, CRM and CDP infrastructure, operating model, and measurement framework that
          turn strategy into measurable, repeatable growth. I bring boards and CEOs the lens most
          leadership tables lack, connecting data, digital, and AI directly to P&amp;L and EBITDA,
          with the discipline to execute and prove the return.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12 pt-10 border-t border-[#E2E8F0] reveal reveal-delay-2">
          <div>
            <p className="text-[9px] tracking-[0.35em] uppercase text-[#64748B] mb-3">Open To</p>
            <p className="text-[#1A1A1A] text-sm leading-relaxed">
              Corporate board &amp; advisory seats · CMO / CCO / GM &amp; operating-partner mandates ·
              Growth &amp; transformation advisory
            </p>
          </div>
          <div>
            <p className="text-[9px] tracking-[0.35em] uppercase text-[#64748B] mb-3">Strengths Boards Value</p>
            <p className="text-[#1A1A1A] text-sm leading-relaxed">
              Technology &amp; digital risk · Marketing &amp; customer strategy · AI governance &amp; enablement
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
