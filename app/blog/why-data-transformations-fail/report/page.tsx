import type { Metadata } from 'next';

const TITLE = 'Architecting More Predictable Enterprise Value from Data, Technology and AI Investment';
const SUBTITLE = 'Research and Practical Guidance for Turning Transformation Investment into Measurable Business Value';
const URL = 'https://zacharyleifer.com/blog/why-data-transformations-fail/report/';
const SOURCE_URL = 'https://zacharyleifer.com/blog/why-data-transformations-fail/';

export const metadata: Metadata = {
  title: `${TITLE} | Zachary Leifer`,
  description:
    'Printable executive research report: methodology, full findings, anonymous interview themes, external research comparison, a risk checklist and a two-page board tool.',
  alternates: { canonical: URL },
  robots: { index: false, follow: true },
};

const descriptiveTable = [
  { measure: 'Half or fewer initiatives fully delivered expected commercial outcomes', count: '43 of 82', pct: '52.4%' },
  { measure: 'Technology selected before business outcome at least half the time', count: '54 of 82', pct: '65.9%' },
  { measure: 'Technology selected first more often than not or almost always', count: '40 of 82', pct: '48.8%' },
  { measure: 'Organizational readiness assessed before capital committed', count: '16 of 82', pct: '19.5%' },
  { measure: 'Method for measuring value defined in advance', count: '16 of 82', pct: '19.5%' },
  { measure: 'Dedicated ownership and resources', count: '19 of 80', pct: '23.8%' },
  { measure: 'Incentives redesigned to support the initiative', count: '6 of 82', pct: '7.3%' },
  { measure: 'Strong, clearly named executive ownership', count: '22 of 82', pct: '26.8%' },
  { measure: 'Verified commercial-return score (1 to 10 scale)', count: '82', pct: 'Mean 5.2, median 5' },
];

const relationshipsTable = [
  { comparison: 'Dedicated ownership vs business as usual', result: '26.3% vs 2.9% full delivery, 9.2x', note: 'Fisher exact p=.0168 (5 of 19 vs 1 of 35). Strong observed association; small groups; not causal proof.' },
  { comparison: 'Dedicated vs shared ownership', result: '26.3% vs 4.5%, 5.8x', note: 'Fisher exact p=.0795 (5 of 19 vs 1 of 22). Directional; not conventionally significant.' },
  { comparison: 'Incentives redesigned vs no change', result: '50% vs 20% reporting at least half delivered, 2.5x', note: 'Fisher exact p=.1506; redesigned group n=6. Exploratory only.' },
  { comparison: 'Zero key conditions vs at least one', result: '0 of 32 vs 7 of 50 fully delivered', note: 'Fisher exact p=.0391. Observed sample difference; avoid universal claims.' },
  { comparison: 'Number of conditions present vs verified-return score', result: 'Spearman rho=.424', note: 'p<.001. Moderate positive association; not causal proof.' },
];

const riskChecklist = [
  'The business outcome was not clearly defined before the technology was selected.',
  'The initiative lacks visible sponsorship from a senior leader with sufficient authority.',
  'Leadership is not aligned that the initiative is an enterprise priority.',
  'No executive is financially accountable for the value outcome.',
  'The operating model, decision rights or ownership are ambiguous.',
  'Employees are expected to deliver the transformation in addition to unchanged full-time responsibilities.',
  'The initiative lacks dedicated or protected resources.',
  'Existing incentives continue to reward legacy priorities and behaviors.',
  'Workflows, dependencies, frontline requirements or data flows have not been mapped adequately.',
  'Required capabilities are missing or unavailable.',
  'Governance tracks activity and delivery but not adoption and value.',
  'Progress is inconsistent, costs are escalating or the expected return cannot be verified.',
];

const page1 = [
  'Business hypothesis and the commercial outcome being funded',
  'Accountable business owner and financial responsibility',
  'Dedicated team versus existing resources, and what is stopped or deferred if resources are shared',
  'Tasks, workflows, interdependencies, systems and data mapped',
  'Required capabilities and an accountable project leader',
  'Formal structure, decision rights and governance process',
  'Incentives and cultural signals aligned with the new priority',
  'Access and organizational authority to investigate and act',
];

const page2 = [
  'Proof of value that will justify further investment',
  'Milestones for delivery, adoption and business value',
  'Metrics that measure delivery, adoption and business value separately',
  'How the business owner will demonstrate value and how Finance will verify it',
  'Assumptions most likely to be wrong',
  'Conditions that would trigger pause, redesign or stop',
  'What must be true before the initiative is scaled',
  'Who owns continuous optimization after implementation',
];

const H2 = 'font-display text-2xl font-bold text-[#0A0A0A] mt-10 mb-3 print:break-inside-avoid';

function Table({ head, rows }: { head: string[]; rows: string[][] }) {
  return (
    <table className="w-full text-sm border-collapse my-4 print:break-inside-avoid">
      <thead>
        <tr className="border-b-2 border-[#0A0A0A]/20">
          {head.map((h) => (
            <th key={h} className="text-left font-semibold text-[#0A0A0A] py-2 pr-4 align-bottom">{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((r, i) => (
          <tr key={i} className="border-b border-[#0A0A0A]/10">
            {r.map((c, j) => (
              <td key={j} className={`py-2 pr-4 align-top ${j === 0 ? 'text-[#0A0A0A]' : 'text-[#475569]'}`}>{c}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function ReportPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-8 md:px-12 py-16 print:py-0 print:px-0 print:max-w-none">

        <div className="no-print mb-10 flex items-center justify-between border-b border-[#0A0A0A]/10 pb-6">
          <a href={SOURCE_URL} className="text-sm text-[#3B5998] hover:text-[#0A0A0A] transition-colors">
            &larr; Back to the research page
          </a>
          <button
            type="button"
            className="border border-[#0A0A0A]/20 text-[#0A0A0A] text-xs tracking-[0.15em] uppercase px-5 py-2.5 hover:bg-[#0A0A0A] hover:text-white transition-colors"
            data-print-trigger
          >
            Print or save as PDF
          </button>
        </div>

        {/* Cover */}
        <section className="print:min-h-[100vh] print:flex print:flex-col print:justify-center print:break-after-page mb-16 print:mb-0">
          <p className="text-[10px] tracking-[0.35em] uppercase text-[#3B5998] mb-6">Executive Research Report</p>
          <h1 className="font-display text-[clamp(1.8rem,4vw,3rem)] font-bold text-[#0A0A0A] leading-tight mb-4">
            {TITLE}
          </h1>
          <p className="text-lg text-[#475569] mb-10">{SUBTITLE}</p>
          <div className="text-sm text-[#334155] space-y-1">
            <p><strong>Author:</strong> Zachary Leifer</p>
            <p><strong>Affiliation:</strong> State of Mind Strategies</p>
            <p>
              Independent Leadership Impact Project completed while participating in the Harvard
              Business School Advanced Management Program. This research is the author&rsquo;s own;
              Harvard Business School did not sponsor, review or endorse the study.
            </p>
          </div>
        </section>

        <article className="prose prose-slate max-w-none text-[#334155] leading-[1.8] text-[15px]">

          <h2 className={H2}>Executive summary</h2>
          <p>
            Most data, digital, and now AI initiatives do not fail because the business case was
            wrong. They fail because the organization was never adjusted to deliver it. A survey of
            82 senior executives found that half or fewer of their organizations&rsquo; data and
            digital initiatives fully delivered the commercial outcomes that justified them, and that
            technology is routinely selected before the business outcome is defined. Initiatives with
            dedicated ownership and resources were substantially more likely to fully deliver than
            those treated as an additional responsibility for the business-as-usual team. Not one
            respondent whose organization had none of five key operating conditions reported full
            delivery.
          </p>

          <h2 className={H2}>Why I studied this problem</h2>
          <p>
            Earlier in my career, I was asked to help address complex technology initiatives that had
            defined objectives but lacked several conditions required for successful execution.
            Significant resources had been invested in engineering, development and product work, yet
            the initiatives were incomplete and the expected return had not materialized. When I
            looked beneath the presentations, much of the rigorous work required to make the vision
            executable was missing: process maps were incomplete, dependencies were not fully
            understood, and manual workarounds and tribal knowledge shaped how the work was actually
            performed.
          </p>
          <p>
            I assembled a cross-functional team spanning product management, architecture,
            engineering, business analysis and project management, and went to the front lines.
            Employees revealed unnecessary workarounds, hidden dependencies and opportunities that
            were not visible in the executive-level materials. The work also produced a leadership
            lesson: existing project leaders needed to participate earlier so they could help shape
            the solution rather than experience it as a judgment on their prior decisions.
            Transformation affects ownership, authority, professional identity and internal
            influence, and those dynamics have to be managed alongside process and technology
            decisions. AI is the newest major transformation wave, following the internet, big data
            and broad digitalization. The technology is different, but many of the organizational
            risks are familiar. That is why I undertook this research.
          </p>

          <h2 className={H2}>Research question and hypotheses</h2>
          <p>
            What separates data, digital transformation and AI investments that create measurable
            commercial value from those that do not? The research examined whether several operating
            conditions, organizational readiness, dedicated ownership, executive sponsorship,
            incentive alignment and a defined method for measuring value, were present, and whether
            their presence was associated with fuller delivery of expected outcomes.
          </p>

          <h2 className={H2}>Methodology and limitations</h2>
          <p>
            This research used a voluntary convenience sample drawn from one senior-executive
            education cohort. The full AMP 210 cohort at Harvard Business School, approximately 148
            participants though cohort membership changed during the program, was invited by direct
            email between March 16 and April 7, 2026, with at least two reminder messages. Eighty-two
            respondents completed the survey, an approximate participation rate of 55%. Two follow-up
            executive interviews were conducted by video, each lasting approximately 30 to 60 minutes
            in a semi-structured format tailored to the participant&rsquo;s responses.
          </p>
          <ul>
            <li>The sample was not randomly selected and is not nationally or globally representative.</li>
            <li>Responses were self-reported and may reflect recall, perception and role-based bias.</li>
            <li>The survey was cross-sectional and cannot establish causality.</li>
            <li>Some subgroup analyses rely on small cell counts and are labeled exploratory.</li>
            <li>The meaning of success may vary by organization and initiative.</li>
            <li>Many initiatives were still in progress, which limits final-outcome interpretation.</li>
            <li>The two follow-up interviews were explanatory and not independently representative.</li>
            <li>The research did not validate a numerical risk score or universal success threshold.</li>
          </ul>

          <h2 className={H2}>Respondent profile</h2>
          <p>
            Respondents were senior leaders across general management, technology, finance and
            commercial functions within the AMP 210 cohort, surveyed in 2026. Individual companies,
            industries and locations are not identified, and no respondent is named or quoted by
            name anywhere in this report.
          </p>

          <h2 className={H2}>Key findings</h2>
          <Table head={['Measure', 'Count', 'Percent or score']} rows={descriptiveTable.map((r) => [r.measure, r.count, r.pct])} />

          <h2 className={H2}>Detailed results and observed relationships</h2>
          <Table head={['Comparison', 'Observed result', 'Statistical note']} rows={relationshipsTable.map((r) => [r.comparison, r.result, r.note])} />
          <p>
            All statistical comparisons are two-sided Fisher exact tests or a Spearman rank
            correlation, run against the final 82-response dataset. These describe observed
            associations within this sample and should not be read as proof of causation.
          </p>

          <h2 className={H2}>Anonymous interview themes</h2>
          <p>
            The initiative described as successful had a clearer connection to the business
            objective, stronger accountability, and more disciplined attention to adoption and
            measurable outcomes. The initiative that underperformed reflected a gap between the
            intended strategy and the operating conditions required to execute it: a business case
            had been approved, but ownership, resourcing and the definition of value stayed
            unresolved after launch. Because the conversations were tailored and the sample was
            limited, they should be read as explanatory rather than independent proof.
          </p>

          <h2 className={H2}>Comparison with external research</h2>
          <p>
            McKinsey&rsquo;s 2025 State of AI survey found more than 80% of respondents were not
            seeing a tangible enterprise-level EBIT impact from generative AI, with workflow redesign
            showing the largest effect among the attributes it tested. Deloitte&rsquo;s January 2025
            State of Generative AI in the Enterprise research found more than two-thirds of
            respondents expected 30% or fewer of their experiments to be fully scaled within three to
            six months, while nearly three-quarters said their most advanced initiative was meeting
            or exceeding ROI expectations. PwC&rsquo;s 2026 Global CEO Survey found 56% of CEOs
            reported neither higher revenue nor lower costs from AI during the prior year, while 12%
            reported both. Together, these studies reinforce the need to distinguish experimentation,
            adoption and isolated use-case performance from verified enterprise value.
          </p>

          <h2 className={H2}>Leadership implications</h2>
          <p>
            Readiness means diagnosing where today&rsquo;s norms, power, and incentives will resist
            tomorrow&rsquo;s strategy, and adjusting them before capital is committed. The framework I
            apply is the LEASH model, developed by Charles O&rsquo;Reilly of Stanford: leader actions,
            employee involvement, aligned rewards, stories and symbols, and HR systems. Where the
            diagnostic finds gaps, these five levers close them.
          </p>

          <h2 className={H2}>Technology Investment Risk Checklist</h2>
          <p>
            One missing condition does not guarantee failure, but every unresolved condition
            increases execution risk.
          </p>
          <ul>
            {riskChecklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h2 className={H2}>CEO and Board Technology Investment Review</h2>
          <p className="font-semibold text-[#0A0A0A] mb-1">Approval and readiness</p>
          <ul>
            {page1.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <p className="font-semibold text-[#0A0A0A] mb-1 mt-4">Governance and value verification</p>
          <ul>
            {page2.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <p>
            Do not assign a numerical score or failure threshold. The study did not validate one.
            This tool is meant to prompt disciplined judgment rather than imply a diagnostic
            certainty the evidence does not support.
          </p>

          <h2 className={H2}>Decision guide for underperforming initiatives</h2>
          <p>
            A missed milestone or modest cost increase does not necessarily justify stopping an
            initiative. The greater concern is a pattern of missed milestones, escalating costs or
            weak adoption combined with unresolved conditions that were already identifiable. When
            delivery problems confirm previously visible readiness risks, leadership should pause
            additional investment and conduct a structured diagnosis, then decide to continue,
            correct, redesign, scale or stop.
          </p>

          <h2 className={H2}>Conclusion and contact invitation</h2>
          <p>
            Commission an independent diagnostic before approving more capital. If your organization
            is investing in data, digital transformation, technology or AI and is not seeing the
            expected progress or financial return, I can help determine what is preventing the
            initiative from creating value, right-size the investment and operating model, and lead
            the work through implementation and verified results. I am available for select
            full-time executive leadership, interim leadership and advisory mandates.
          </p>
          <p>
            Email <a href="mailto:zacharyleifer@gmail.com?subject=Technology%20investment%20review">zacharyleifer@gmail.com</a>{' '}
            or visit{' '}
            <a href={SOURCE_URL}>zacharyleifer.com</a>.
          </p>

          <h2 className={H2}>References and suggested citation</h2>
          <p>Leifer, Zachary. {TITLE}. State of Mind Strategies, 2026.</p>
          <ul className="text-sm">
            <li>McKinsey and Company, The state of AI: How organizations are rewiring to capture value, March 12, 2025.</li>
            <li>Deloitte, The Path to Sustainable Generative AI Value Balances Passion, Pragmatism and Patience, January 21, 2025.</li>
            <li>PwC, 29th Global CEO Survey: Leading through uncertainty in the age of AI, 2026.</li>
          </ul>

          <h2 className={H2}>About the author</h2>
          <p>
            Zachary Leifer is a Las Vegas-based commercial growth and transformation executive who
            has served as Chief Marketing Officer at 1/ST Technology, Chief Commercial Officer at
            PokerAtlas, a B2B SaaS and B2C gaming platform, and Vice President of Corporate
            Information Technology at Las Vegas Sands, giving him experience on both sides of
            transformation. Through State of Mind Strategies, he advises leadership teams on
            commercial growth, customer data, transformation, technology strategy and AI value
            creation. He completed the Harvard Business School Advanced Management Program in 2026.
          </p>

        </article>
      </div>

      <style>{`
        @media print {
          .no-print { display: none !important; }
          @page { margin: 0.75in; }
        }
      `}</style>
      <script
        dangerouslySetInnerHTML={{
          __html: `document.addEventListener('click', function (e) {
            var t = e.target.closest('[data-print-trigger]');
            if (t) window.print();
          });`,
        }}
      />
    </div>
  );
}
