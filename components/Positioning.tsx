'use client';

import { useReveal } from '@/components/useReveal';

const valueAreas = [
  {
    title: 'Commercial Growth and Customer Economics',
    body: 'Revenue growth, EBITDA improvement, acquisition efficiency, retention, pricing, customer lifetime value and direct-channel performance.',
  },
  {
    title: 'Data, Digital and AI Value Realization',
    body: 'Connecting customer data, digital platforms, technology and AI investments to defined commercial outcomes and measurable financial value.',
  },
  {
    title: 'Transformation and Organizational Alignment',
    body: 'Aligning strategy, operating models, teams, incentives, resources, workflows and measurement around a defined business outcome.',
  },
  {
    title: 'Executive Leadership and Capital Allocation',
    body: 'Building business cases, setting priorities, securing budget and investment approval, aligning executives and establishing accountability for results.',
  },
];

export default function Positioning() {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="value" ref={ref} className="bg-[#F8F7F4] py-28 px-8 md:px-12 border-y border-[#E2E8F0]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-[10px] tracking-[0.35em] uppercase text-[#475569] mb-8 reveal">
          Where I Create Value
        </h2>

        <p className="font-display text-[clamp(1.5rem,3vw,2.25rem)] font-normal text-[#0A0A0A] leading-snug reveal">
          I am open to select board, advisory and senior operating roles where commercial growth,
          customer data, AI strategy and AI value realization drive the agenda.
        </p>

        <p className="text-[#475569] text-base md:text-lg leading-relaxed mt-6 max-w-3xl reveal reveal-delay-1">
          My signature is connecting business strategy, customer insight, digital capabilities, and
          technology initiatives to measurable commercial outcomes. I bring the governance discipline used
          for data, digital transformation and enterprise technology investments to AI, helping
          leaders connect strategy, organizational readiness, execution and measurement to financial
          value.
        </p>

        {/* Value areas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8 mt-12 pt-10 border-t border-[#E2E8F0] reveal reveal-delay-2">
          {valueAreas.map((a) => (
            <div key={a.title}>
              <h3 className="font-display text-lg font-semibold text-[#0A0A0A] leading-snug">{a.title}</h3>
              <p className="text-[#475569] text-sm leading-relaxed mt-2">{a.body}</p>
            </div>
          ))}
        </div>

        {/* Who I Help */}
        <div className="mt-12 pt-10 border-t border-[#E2E8F0] reveal reveal-delay-3">
          <h3 className="text-[9px] tracking-[0.35em] uppercase text-[#475569] mb-5">Who I Help</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              'CEOs needing stronger commercial execution and a measurable marketing operating model',
              'Boards needing marketing, AI, customer data, or digital-risk expertise at the table',
              'Companies in gaming, hospitality, sports wagering, iGaming, and consumer technology',
              'Investors evaluating growth, marketing efficiency, or go-to-market readiness',
              'Organizations connecting AI and customer data to P&L rather than running experiments',
              'Leadership teams building from founder-led growth to repeatable commercial systems',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 text-sm text-[#475569]">
                <span aria-hidden="true" className="text-[#3B5998] mt-1 flex-shrink-0 text-[8px]">●</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10 pt-10 border-t border-[#E2E8F0] reveal reveal-delay-4">
          <div>
            <h3 className="text-[9px] tracking-[0.35em] uppercase text-[#475569] mb-3">Open To</h3>
            <p className="text-[#1A1A1A] text-sm leading-relaxed">
              Available for selected Chief Marketing Officer, Chief Commercial Officer, President,
              General Manager, commercial transformation,{' '}
              <a
                href="/board-executive-advisory/"
                className="underline decoration-[#1A1A1A]/25 underline-offset-4 hover:text-[#3B5998] hover:decoration-[#3B5998]/50 transition-colors"
              >
                board advisory
              </a>
              , executive advisory, and speaking opportunities, as well as selected portfolio-company advisory
              or value-creation opportunities.
            </p>
            <p className="text-[#1A1A1A] text-sm leading-relaxed mt-3">
              For{' '}
              <a
                href="https://www.somstrategies.com/fractional-cmo/"
                className="underline decoration-[#1A1A1A]/25 underline-offset-4 hover:text-[#3B5998] hover:decoration-[#3B5998]/50 transition-colors"
              >
                fractional CMO
              </a>{' '}
              and{' '}
              <a
                href="https://www.somstrategies.com/executive-enterprise-advisory/"
                className="underline decoration-[#1A1A1A]/25 underline-offset-4 hover:text-[#3B5998] hover:decoration-[#3B5998]/50 transition-colors"
              >
                organizational advisory
              </a>{' '}
              engagements, visit State of Mind Strategies.
            </p>
          </div>
          <div>
            <h3 className="text-[9px] tracking-[0.35em] uppercase text-[#475569] mb-3">Strengths Boards Value</h3>
            <p className="text-[#1A1A1A] text-sm leading-relaxed">
              Technology &amp; digital risk · Marketing &amp; customer strategy · AI investment governance, organizational readiness and value realization
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
