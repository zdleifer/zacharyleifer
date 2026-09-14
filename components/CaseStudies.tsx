'use client';

import { useEffect, useRef } from 'react';

const cases = [
  {
    org: '1/ST Technology',
    role: 'Chief Marketing Officer · 2020-2024',
    headline: '67% revenue growth · 22% EBITDA CAGR · 56% lower CAC · 73% LTV/CAC improvement',
    challenge:
      'A racing, wagering, and entertainment business needed to modernize its commercial engine and prove the return on marketing to the board.',
    action:
      'Led a cloud customer data platform and a predictive customer-valuation model, rebuilt go-to-market around unit economics, and launched a new wagering app. Secured an increase in the board-approved marketing budget from $8M to $15M through direct board-level briefings and ROI forecasting.',
    result:
      'Over four years, the business delivered 67% revenue growth and a 22% EBITDA CAGR while marketing costs declined 2.7% through a restructured promotional strategy. Customer acquisition cost fell 56% and LTV/CAC improved 73%. The new wagering app generated $60M in handle, the total amount wagered, and $4M in net gaming revenue within 10 months.',
    href: '/work/1st-technology-commercial-growth/',
    linkLabel: 'Read the 1/ST Technology case study',
  },
  {
    org: 'Las Vegas Sands / The Venetian',
    role: 'Director to Executive Director to Vice President, Digital Marketing & eCommerce, then Vice President, Corporate Information Technology · 2014-2020',
    headline: '$13M capital investment · $36M incremental direct-channel revenue · 24 consecutive months of growth · 50% ROAS lift',
    challenge:
      'The Venetian, then the flagship Las Vegas property of a Fortune 500 resort operator, faced a five-year decline in direct-channel bookings.',
    action:
      'Secured $13M in capital investment for digital transformation initiatives, directed a new website and booking engine, led a 360-degree customer data platform for personalization across hotel and casino, and led the design of a price-elasticity model for pricing and offers.',
    result:
      'Those initiatives generated $36M in incremental direct-channel revenue and reversed the decline, with 24 consecutive months of year-over-year growth, a 50% increase in return on advertising spend and an 18% lift in CRM conversion. On the strength of those results, Las Vegas Sands recruited me from Digital Marketing into Corporate Information Technology to lead a global cloud governance program across the U.S., Singapore and China.',
    href: '/work/venetian-direct-channel-transformation/',
    linkLabel: 'Read The Venetian direct-channel case study',
  },
];

export default function CaseStudies() {
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
    <section id="work" ref={ref} className="grain bg-[#070B14] py-28 px-8 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 reveal">
          <div className="lg:col-span-3">
            <p className="text-[10px] tracking-[0.35em] uppercase text-[#475569] sticky top-24">
              Selected Work
            </p>
          </div>
          <div className="lg:col-span-9">
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold text-white">
              Where the Numbers Come From
            </h2>
            <p className="text-white/60 text-sm mt-3 max-w-lg">
              Two transformations that turned strategy into measurable, durable growth.
            </p>
          </div>
        </div>

        <div className="space-y-px bg-white/[0.07]">
          {cases.map((c, i) => (
            <div
              key={i}
              className={`bg-[#070B14] py-12 grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-6 reveal reveal-delay-${i + 1}`}
            >
              <div className="lg:col-span-3">
                <h3 className="font-display text-xl font-semibold text-white">{c.org}</h3>
                <p className="text-[#64748B] text-xs mt-1 tracking-wide">{c.role}</p>
              </div>
              <div className="lg:col-span-9 space-y-5">
                <p className="text-white/50 text-xs tracking-wide border-l-2 border-[#3B5998] pl-4 py-1 font-mono">
                  {c.headline}
                </p>
                <div>
                  <p className="text-[9px] tracking-[0.3em] uppercase text-[#475569] mb-1.5">The Challenge</p>
                  <p className="text-white/70 text-sm leading-relaxed">{c.challenge}</p>
                </div>
                <div>
                  <p className="text-[9px] tracking-[0.3em] uppercase text-[#475569] mb-1.5">What I Did</p>
                  <p className="text-white/70 text-sm leading-relaxed">{c.action}</p>
                </div>
                <div>
                  <p className="text-[9px] tracking-[0.3em] uppercase text-[#3B5998] mb-1.5">The Result</p>
                  <p className="text-white/85 text-sm leading-relaxed">{c.result}</p>
                </div>
                <a
                  href={c.href}
                  className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-white/70 hover:text-white transition-colors border-b border-white/30 hover:border-white pb-0.5"
                >
                  {c.linkLabel}
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
