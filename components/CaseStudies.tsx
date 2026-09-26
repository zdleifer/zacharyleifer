'use client';

import { useReveal } from '@/components/useReveal';

const cases = [
  {
    org: '1/ST Technology',
    role: 'Chief Marketing Officer · 2020–2024',
    headline: '67% revenue growth · 22% EBITDA CAGR · 56% lower CAC · 73% LTV/CAC improvement',
    summary:
      'As Chief Marketing Officer at 1/ST Technology, Zachary led commercial transformation during a period in which the business delivered 67% revenue growth and a 22% EBITDA CAGR, with 56% lower customer acquisition cost and a 73% improvement in LTV/CAC. These results reflect the work of the broader organization and are not promises, guarantees, or results from State of Mind Strategies client engagements.',
    href: '/work/1st-technology-commercial-growth/',
    linkLabel: 'Read the 1/ST Technology case study',
  },
  {
    org: 'Las Vegas Sands / The Venetian',
    role: 'Director to Executive Director to Vice President, Digital Marketing & eCommerce, then Vice President, Corporate Information Technology · 2014–2020',
    headline: '$13M capital investment · $36M incremental direct-channel revenue · 24 consecutive months of growth · 50% ROAS lift',
    summary:
      'At The Venetian and Las Vegas Sands, Zachary secured $13 million in capital investment for digital and customer-data initiatives that generated $36 million in incremental direct-channel revenue.',
    href: '/work/venetian-direct-channel-transformation/',
    linkLabel: 'Read The Venetian direct-channel case study',
  },
];

export default function CaseStudies() {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="work" ref={ref} className="grain bg-[#070B14] py-28 px-8 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 reveal">
          <div className="lg:col-span-3">
            <p className="text-[10px] tracking-[0.35em] uppercase text-[#94A3B8] sticky top-24">
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
                <p className="text-[#94A3B8] text-xs mt-1 tracking-wide">{c.role}</p>
              </div>
              <div className="lg:col-span-9 space-y-5">
                <p className="text-white/50 text-xs tracking-wide border-l-2 border-[#3B5998] pl-4 py-1 font-mono">
                  {c.headline}
                </p>
                <p className="text-white/80 text-sm leading-relaxed max-w-2xl">{c.summary}</p>
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
