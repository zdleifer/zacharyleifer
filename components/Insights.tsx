'use client';

import { useEffect, useRef } from 'react';

const items = [
  {
    type: 'Article',
    title: 'The Org Chart Is Being Rewritten. Is Your Company Ready?',
    meta: 'LinkedIn · 2026',
    href: 'https://www.linkedin.com/pulse/org-chart-being-rewritten-your-company-ready-zachary-leifer-dxgye',
  },
  {
    type: 'Article',
    title: 'AI Is Already in Your Company. Is It Creating Enterprise Value? Is It Secure?',
    meta: 'LinkedIn · 2026',
    href: 'https://www.linkedin.com/pulse/ai-already-your-company-creating-enterprise-value-secure-leifer-3q0ve',
  },
  {
    type: 'Press',
    title: '1/ST Technology Names Abel Cedillo Brand Ambassador',
    meta: 'Past The Wire · Quoted as CMO',
    href: 'https://pastthewire.com/1-st-technology-announces-abel-cedillo-as-newest-brand-ambassador/',
  },
  {
    type: 'Podcast',
    title: 'Awesome in Action',
    meta: 'NC Labs Podcast · 2021',
    href: 'https://open.spotify.com/episode/4xHYHVFm9V7GcMO1Si4sl7',
  },
  {
    type: 'Presentation',
    title: 'Digital Transformation in the Age of the Customer',
    meta: 'World Tote Association',
    href: '/decks/digital-transformation-age-of-the-customer.pdf',
  },
  {
    type: 'Deck',
    title: 'The GEO Frontier',
    meta: 'Generative Engine Optimization',
    href: '/decks/the-geo-frontier.pdf',
  },
  {
    type: 'Deck',
    title: 'Rewiring the C-Suite',
    meta: 'AI and the modern operating model',
    href: '/decks/rewiring-the-c-suite.pdf',
  },
  {
    type: 'Deck',
    title: 'The 2026 AI Marketing Playbook',
    meta: 'Practical AI for marketing teams',
    href: '/decks/2026-ai-marketing-playbook.pdf',
  },
];

export default function Insights() {
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
    <section id="insights" ref={ref} className="bg-[#F8F7F4] py-28 px-8 md:px-12 border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-16 reveal">
          <div>
            <p className="text-[10px] tracking-[0.35em] uppercase text-[#64748B] mb-4">Insights</p>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold text-[#0A0A0A]">
              Writing &amp; Perspectives
            </h2>
          </div>
          <a
            href="https://www.linkedin.com/in/zacharyleifer/recent-activity/articles/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex text-xs tracking-widest uppercase text-[#475569] hover:text-[#0A0A0A] transition-colors border-b border-[#475569]/40 hover:border-[#0A0A0A] pb-0.5"
          >
            All on LinkedIn →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 reveal reveal-delay-1">
          {items.map((item, i) => (
            <a
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-lg border border-[#E2E8F0] shadow-sm p-8 flex flex-col justify-between hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
            >
              <div>
                <span className="inline-block text-[9px] tracking-[0.3em] uppercase text-[#3B5998] mb-5">
                  {item.type}
                </span>
                <h3 className="font-display text-lg md:text-xl font-semibold text-[#0A0A0A] leading-snug group-hover:text-[#3B5998] transition-colors">
                  {item.title}
                </h3>
              </div>
              <div className="flex items-center justify-between mt-8">
                <span className="text-xs text-[#64748B]">{item.meta}</span>
                <span className="text-[#475569] group-hover:text-[#3B5998] group-hover:translate-x-1 transition-all text-sm">
                  →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
