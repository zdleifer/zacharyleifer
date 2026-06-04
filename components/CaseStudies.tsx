'use client';

import { useEffect, useRef } from 'react';

const cases = [
  {
    org: '1/ST Technology',
    role: 'Chief Marketing Officer · 2020-2024',
    challenge:
      'A racing, wagering, and entertainment business needed to modernize its commercial engine and prove the return on marketing to the board.',
    action:
      'Built a cloud customer data platform, rebuilt go-to-market around unit economics, launched a new wagering app, and instituted ROI forecasting to earn investment.',
    result:
      'Drove 67% revenue growth while cutting costs 2.7%, a 22% EBITDA CAGR over four years. Reduced customer acquisition cost 56% and lifted LTV/CAC 73%. The new wagering app delivered $60M in handle and $4M in net gaming revenue within 10 months, and board-approved budget grew from $8M to $15M on forecasted ROI.',
  },
  {
    org: 'Las Vegas Sands / The Venetian',
    role: 'VP Digital Marketing & eCommerce, then VP Corporate IT · 2014-2020',
    challenge:
      'A Fortune 500 resort of roughly $13B in revenue faced a five-year decline in direct-channel bookings.',
    action:
      'Led a $13M investment in a new website and booking engine, built a 360-degree customer data platform, and was then recruited internally to run global cloud governance.',
    result:
      'Generated $36M in incremental direct revenue from the $13M investment, reversed the trend with 24 consecutive months of growth and a 50% lift in ROAS, and improved CRM conversion 18%. Earned the rare crossover from marketing into enterprise technology leadership across the U.S., Singapore, and China.',
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
