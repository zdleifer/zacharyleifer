import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const TITLE = 'Why Data and Digital Transformations Fail: Evidence from 82 Senior Executives';
const DESC =
  'Original research from 82 senior executives on why data, digital transformation and AI investments fail, with a risk checklist and board questions.';
const SEO_TITLE = 'Why Data and Digital Transformations Fail';
const ALT_TITLE = 'Architecting More Predictable Enterprise Value from Data, Technology and AI Investment';
const URL = 'https://zacharyleifer.com/blog/why-data-transformations-fail/';
const PUBLISHED = '2026-09-12';
const MODIFIED = '2026-09-20';
const RESEARCH_IMAGE = {
  url: 'https://zacharyleifer.com/images/og-why-data-transformations-fail.jpg',
  width: 1200,
  height: 630,
  type: 'image/jpeg',
  alt: 'Why Data and Digital Transformations Fail: Evidence from 82 Senior Executives, original research by Zachary Leifer.',
};

export const metadata: Metadata = {
  title: `${SEO_TITLE} | Zachary Leifer`,
  description: DESC,
  authors: [{ name: 'Zachary Leifer', url: 'https://zacharyleifer.com/' }],
  alternates: { canonical: URL },
  openGraph: {
    type: 'article',
    title: TITLE,
    description: DESC,
    url: URL,
    authors: ['Zachary Leifer'],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
    images: [RESEARCH_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESC,
    images: [{ url: RESEARCH_IMAGE.url, alt: RESEARCH_IMAGE.alt }],
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: TITLE,
  alternativeHeadline: ALT_TITLE,
  author: {
    '@id': 'https://zacharyleifer.com/#zachary-leifer',
    '@type': 'Person',
    name: 'Zachary Leifer',
    url: 'https://zacharyleifer.com/',
  },
  publisher: { '@id': 'https://zacharyleifer.com/#zachary-leifer', '@type': 'Person', name: 'Zachary Leifer', url: 'https://zacharyleifer.com/' },
  datePublished: PUBLISHED,
  dateModified: MODIFIED,
  url: URL,
  mainEntityOfPage: { '@type': 'WebPage', '@id': URL },
  isPartOf: { '@id': 'https://zacharyleifer.com/#website' },
  image: [RESEARCH_IMAGE.url],
  description: DESC,
  about: [
    'Artificial intelligence',
    'Digital transformation',
    'Data strategy',
    'Organizational readiness',
    'Change management',
    'Enterprise value',
  ],
  isBasedOn: {
    '@type': 'CreativeWork',
    name: ALT_TITLE,
    description:
      'Survey of 82 senior executives from the Harvard Business School Advanced Management Program AMP 210 cohort, fielded March 16 through April 7, 2026, with two follow-up executive interviews.',
  },
  citation: [
    'https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai-how-organizations-are-rewiring-to-capture-value',
    'https://www.deloitte.com/us/en/about/press-room/state-of-generative-ai.html',
    'https://www.pwc.com/gx/en/issues/c-suite-insights/ceo-survey.html',
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Zachary Leifer', item: 'https://zacharyleifer.com/' },
    { '@type': 'ListItem', position: 2, name: 'Writing & Perspectives', item: 'https://zacharyleifer.com/blog/' },
    { '@type': 'ListItem', position: 3, name: TITLE },
  ],
};

const findings = [
  {
    stat: '52.4%',
    label: '43 of 82 respondents reported that half or fewer of their data and digital initiatives fully delivered the expected commercial outcomes.',
  },
  {
    stat: '65.9%',
    label: '54 of 82 respondents said technology was selected before the business outcome at least half the time.',
  },
  {
    stat: '9.2x',
    label: 'Respondents with dedicated ownership and resources were 9.2 times more likely to report full delivery than those where the initiative was an additional responsibility for the business-as-usual team (26.3% vs 2.9%; small subgroups; observed association, not causal proof).',
  },
  {
    stat: 'Zero',
    label: 'of 32 respondents whose organizations had none of five key operating conditions reported an initiative that fully delivered, compared with 7 of 50 with at least one condition.',
  },
];

const descriptiveTable = [
  { measure: 'Half or fewer initiatives fully delivered expected commercial outcomes', count: '43 of 82', pct: '52.4%' },
  { measure: 'Technology selected before business outcome at least half the time', count: '54 of 82', pct: '65.9%' },
  { measure: 'Technology selected first more often than not or almost always', count: '40 of 82', pct: '48.8%' },
  { measure: 'Organizational readiness assessed before capital committed', count: '16 of 82', pct: '19.5%' },
  { measure: 'Method for measuring value defined in advance', count: '16 of 82', pct: '19.5%' },
  { measure: 'Dedicated ownership and resources', count: '19 of 80', pct: '23.8%' },
  { measure: 'Incentives redesigned to support the initiative', count: '6 of 82', pct: '7.3%' },
  { measure: 'Strong, clearly named executive ownership', count: '22 of 82', pct: '26.8%' },
];

const relationshipsTable = [
  {
    comparison: 'Dedicated ownership vs business as usual',
    result: '26.3% vs 2.9% full delivery, 9.2x',
    note: 'Fisher exact p=.0168 (5 of 19 vs 1 of 35). Strong observed association; small groups; not causal proof.',
  },
  {
    comparison: 'Dedicated vs shared ownership',
    result: '26.3% vs 4.5%, 5.8x',
    note: 'Fisher exact p=.0795 (5 of 19 vs 1 of 22). Directional; not conventionally significant.',
  },
  {
    comparison: 'Incentives redesigned vs no change',
    result: '50% vs 20% reporting at least half delivered, 2.5x',
    note: 'Fisher exact p=.1506; redesigned group n=6. Exploratory only.',
  },
  {
    comparison: 'Zero key conditions vs at least one',
    result: '0 of 32 vs 7 of 50 fully delivered',
    note: 'Fisher exact p=.0391. Observed sample difference; avoid universal claims.',
  },
  {
    comparison: 'Number of conditions present vs verified-return score',
    result: 'Spearman rho=.424',
    note: 'p<.001. Moderate positive association; not causal proof.',
  },
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

const boardQuestions = [
  'What business hypothesis are we testing?',
  'What evidence would confirm or reject it?',
  'What commercial or enterprise outcome are we funding?',
  'Did we define the outcome before selecting the technology?',
  'Who is financially accountable for the result?',
  'Does the initiative have a dedicated team or rely on existing resources?',
  'If it relies on existing resources, what work has been stopped, deferred or reassigned?',
  'Have we mapped the tasks, workflows, interdependencies, systems and data involved?',
  'Do we have the required skills and an accountable project leader?',
  'Do the formal structure, decision rights and governance process support the work?',
  'Are incentives and cultural signals aligned with the new priority?',
  'Does the team have the access and organizational authority required to investigate and act?',
  'What proof of value will justify further investment?',
  'What milestones should we expect for delivery, adoption and value?',
  'Which metrics measure delivery, which measure adoption and which measure business value?',
  'How will the business owner demonstrate value and how will Finance verify it?',
  'What assumptions are most likely to be wrong?',
  'What conditions would cause us to pause, redesign or stop?',
  'What must be true before the initiative is scaled?',
  'Who will own continuous optimization after implementation?',
];

const diagnosticDocuments = [
  'Business case, project charter and approved objectives',
  'Project plan, milestones, budget and financial model',
  'Board, investment committee and executive presentations',
  'Product requirements and business requirements documents',
  'Existing process maps and customer or employee workflows',
  'Architecture diagrams, architecture-review materials and technical specifications',
  'APIs, integrations and data flows',
  'Vendor proposals, contracts and statements of work',
  'Governance records, status reports, decision logs and RAID logs',
  'Adoption plans, performance measures and value-verification reports',
];

const approvalChecklist = [
  'Define the enterprise objective and the commercial outcome before selecting the technology.',
  'Identify the accountable business owner and the executive sponsor with authority to resolve conflicts and secure resources.',
  'Determine whether the initiative requires a dedicated team, shared resources or a protected operating structure.',
  'Map the work, workflows, dependencies, systems and data before finalizing the solution.',
  'Assess whether the organization has the skills, structure, incentives and cultural support required for adoption.',
  'Establish milestones for delivery, adoption and business value.',
  'Define the evidence that will confirm or reject the business hypothesis.',
  'Agree in advance on how the business owner and transformation team will demonstrate value and how Finance will verify it.',
  'Set the conditions that would trigger continuation, correction, redesign, scaling or termination.',
];

const leash = [
  { k: 'L', t: 'Leader actions', d: 'What leadership visibly does, funds, and protects, which is read as the real priority regardless of what is announced.' },
  { k: 'E', t: 'Employee involvement', d: 'Bringing the people who will live with the change into the design of it, early enough that their input still changes something.' },
  { k: 'A', t: 'Aligned rewards', d: 'Compensation and recognition that pay out on the new outcome rather than the old one.' },
  { k: 'S', t: 'Stories, symbols and signals', d: 'The narrative and the small visible decisions that tell the organization which way is now up.' },
  { k: 'H', t: 'HR systems', d: 'Hiring, promotion, and performance management adjusted so the structure sustains the change after attention moves on.' },
];

const h2 = 'font-display text-2xl font-bold text-[#0A0A0A] mt-12 mb-4 scroll-mt-24';
const link = 'text-[#3B5998] hover:text-[#0A0A0A] transition-colors';

function DataTable({ head, rows }: { head: string[]; rows: string[][] }) {
  return (
    <div className="not-prose my-8 overflow-x-auto">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="border-b-2 border-[#0A0A0A]/15">
            {head.map((h) => (
              <th key={h} className="text-left font-semibold text-[#0A0A0A] py-3 pr-4 align-bottom">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-b border-[#0A0A0A]/10">
              {r.map((c, j) => (
                <td key={j} className={`py-3 pr-4 align-top ${j === 0 ? 'text-[#0A0A0A]' : 'text-[#475569]'}`}>
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function WhyDataTransformationsFail() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema).replace(/</g, '\\u003c') }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, '\\u003c') }}
      />
      <Nav />
      <main className="bg-[#F8F7F4] min-h-screen">
        <article className="max-w-3xl mx-auto px-8 md:px-12 py-24">

          <p className="text-[10px] tracking-[0.35em] uppercase text-[#475569] mb-10">
            <a href="/" className="hover:text-[#0A0A0A] transition-colors">Zachary Leifer</a>
            <span aria-hidden="true" className="mx-2">·</span>
            <a href="/blog/" className="hover:text-[#0A0A0A] transition-colors">Writing &amp; Perspectives</a>
          </p>

          <header className="mb-16">
            <span className="inline-block text-[9px] tracking-[0.3em] uppercase text-[#3B5998] mb-5">
              Original Research &middot; Harvard Business School AMP Leadership Impact Project
            </span>
            <h1 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold text-[#0A0A0A] leading-tight mb-6">
              {TITLE}
            </h1>
            <p className="text-lg text-[#334155] leading-relaxed mb-6">
              What separates data, digital transformation and AI investments that create measurable
              commercial value from those that do not?
            </p>
            <div className="flex items-center gap-4 text-sm text-[#475569]">
              <span>Zachary Leifer</span>
              <span aria-hidden="true">·</span>
              <span>Published September 12, 2026</span>
              <span aria-hidden="true">·</span>
              <time dateTime={MODIFIED}>Updated September 20, 2026</time>
            </div>
          </header>

          <div className="prose prose-slate max-w-none text-[#334155] leading-[1.9] text-base space-y-6">

            <p className="text-xl text-[#1A1A1A] leading-relaxed font-light">
              Most data, digital, and now AI initiatives do not fail because the business case was wrong.
              They fail because the organization was never adjusted to deliver it. I surveyed 82
              senior executives to find out how often that happens, and what separates the
              initiatives that deliver from the ones that quietly do not.
            </p>

            <p>
              This is the research behind my Leadership Impact Project, the capstone of the Advanced
              Management Program at Harvard Business School, which focused on driving enterprise value
              from data, digital transformation, and AI. Responses are reported in aggregate. I designed and conducted the survey as part of the
              program. This independent research is my own; Harvard Business School did not sponsor,
              review or endorse the study.
            </p>

            <nav aria-label="On this page" className="not-prose text-sm text-[#475569] border-y border-[#0A0A0A]/10 py-4 flex flex-wrap gap-x-6 gap-y-2">
              <a href="#findings" className={link} data-ga-event="research_toc_click" data-ga-label="Findings">Findings</a>
              <a href="#methodology" className={link} data-ga-event="research_toc_click" data-ga-label="Methodology">Methodology</a>
              <a href="#limitations" className={link} data-ga-event="research_toc_click" data-ga-label="Limitations">Limitations</a>
              <a href="#checklist" className={link} data-ga-event="research_toc_click" data-ga-label="Risk checklist">Risk checklist</a>
              <a href="#board-questions" className={link} data-ga-event="research_toc_click" data-ga-label="Board questions">Board questions</a>
              <a href="#report" className={link} data-ga-event="research_toc_click" data-ga-label="Full report">Full report</a>
              <a href="#research-contact" className={link} data-ga-event="research_toc_click" data-ga-label="Contact">Contact</a>
            </nav>

            <h2 id="findings" className={h2}>
              What 82 executives reported
            </h2>

            <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#0A0A0A]/10 my-10">
              {findings.map((f) => (
                <div key={f.stat} className="bg-[#F8F7F4] p-6">
                  <p className="font-display text-3xl font-bold text-[#0A0A0A] mb-2">{f.stat}</p>
                  <p className="text-sm text-[#334155] leading-relaxed">{f.label}</p>
                </div>
              ))}
            </div>

            <p className="text-sm text-[#475569]">
              Survey of 82 senior executives, 2026. All figures are self-reported by respondents
              about their own organizations.
            </p>

            <p>
              That last figure is the most telling. The five conditions behind it are organizational
              readiness assessed before capital was committed, dedicated ownership and resources,
              incentives redesigned to support the initiative, strong and clearly named executive
              ownership, and a method for measuring value defined in advance.
            </p>

            <h3 className="font-display text-lg font-semibold text-[#0A0A0A] mt-8 mb-2">Key descriptive findings</h3>
            <DataTable
              head={['Measure', 'Count', 'Percent']}
              rows={descriptiveTable.map((r) => [r.measure, r.count, r.pct])}
            />

            <h3 className="font-display text-lg font-semibold text-[#0A0A0A] mt-8 mb-2">Observed relationships</h3>
            <DataTable
              head={['Comparison', 'Observed result', 'Statistical note']}
              rows={relationshipsTable.map((r) => [r.comparison, r.result, r.note])}
            />

            <h2 className={h2}>
              This is a transformation problem, not a technology problem
            </h2>

            <p>
              That reading is consistent with the wider literature.{' '}
              <a
                href="https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai-how-organizations-are-rewiring-to-capture-value"
                target="_blank"
                rel="noopener noreferrer"
                className={link}
                data-ga-event="research_external_source_click"
                data-ga-label="McKinsey State of AI 2025"
              >
                McKinsey&rsquo;s 2025 State of AI survey
              </a>{' '}
              found more than 80% of respondents were not seeing a tangible enterprise-level
              EBIT impact from generative AI, and that workflow redesign had the largest effect among
              the attributes it tested.{' '}
              <a
                href="https://www.deloitte.com/us/en/about/press-room/state-of-generative-ai.html"
                target="_blank"
                rel="noopener noreferrer"
                className={link}
                data-ga-event="research_external_source_click"
                data-ga-label="Deloitte State of Generative AI"
              >
                Deloitte&rsquo;s January 2025 State of Generative AI in the Enterprise research
              </a>{' '}
              found more than two-thirds of respondents expected 30% or fewer of
              their experiments to be fully scaled within three to six months, while nearly
              three-quarters said their most advanced initiative was meeting or exceeding ROI
              expectations, a contrast that shows individual use cases can create value even while
              enterprise-wide scaling remains difficult.{' '}
              <a
                href="https://www.pwc.com/gx/en/issues/c-suite-insights/ceo-survey.html"
                target="_blank"
                rel="noopener noreferrer"
                className={link}
                data-ga-event="research_external_source_click"
                data-ga-label="PwC 29th Global CEO Survey"
              >
                PwC&rsquo;s 2026 Global CEO Survey
              </a>{' '}
              found 56%
              of CEOs reported neither higher revenue nor lower costs from AI during the prior year,
              while 12% reported both. My survey adds a practitioner-level observation to that
              pattern: 65.9% of respondents said their organizations selected the technology before
              the commercial outcome had been defined, which is the point at which the rest becomes
              hard.
            </p>

            <p>
              The failure is rarely dramatic. Resources get quietly withdrawn to cover business as
              usual. Two initiatives draw on the same finite talent pool with no stated first
              priority. The people who stand to lose control, budget, or status do not object in
              the meeting; they simply do not move. None of that shows up on a milestone dashboard
              until the return is already gone.
            </p>

            <h2 className={h2}>
              AI is repeating the pattern, faster
            </h2>

            <p>
              This survey asked about data and digital initiatives, because that is the wave most
              of these organizations have already been through. What is striking is how closely
              the AI conversation is now reproducing it. The technology is being selected before
              the commercial outcome is defined. Pilots are being added to teams who already have
              day jobs. Nobody will be paid differently if it works. Those are the same patterns
              that respondents associated with weaker delivery in the data era, and there is little
              reason to expect a different result from a different acronym.
            </p>

            <p>
              If anything, AI compresses the timeline. The technology is easier to acquire than a
              data platform was, which removes the procurement friction that used to force at
              least some organizational conversation. It is now entirely possible to have AI
              running in a dozen places in the business without anyone having defined what
              commercial outcome it is meant to produce, who owns it, or how the return will be
              verified. Ease of adoption is not the same as readiness to benefit.
            </p>

            <h2 id="methodology" className={h2}>
              Methodology
            </h2>

            <p>
              This research used a voluntary convenience sample drawn from one senior-executive
              education cohort. The full AMP 210 cohort at Harvard Business School, approximately
              148 participants though cohort membership changed during the program, was invited by
              direct email between March 16 and April 7, 2026, with at least two reminder messages.
              Eighty-two respondents completed the survey, an approximate participation rate of 55%.
              The findings describe the experiences reported by this sample and should not be
              generalized to all executives or organizations without further research.
            </p>

            <p>
              Two follow-up executive interviews were conducted by video. Each lasted approximately
              30 to 60 minutes and used a semi-structured format tailored to the participant&rsquo;s
              survey responses and experience. One conversation explored an initiative viewed as
              successful and the other explored an initiative that did not produce the intended
              result. Interview insights are presented only as anonymous paraphrased themes; no
              company, industry, location or individual is identified.
            </p>

            <h2 id="limitations" className={h2}>
              Limitations
            </h2>

            <ul className="list-disc pl-6 space-y-2">
              <li>The sample was not randomly selected and is not nationally or globally representative.</li>
              <li>Responses were self-reported and may reflect recall, perception and role-based bias.</li>
              <li>The survey was cross-sectional and cannot establish causality.</li>
              <li>Some subgroup analyses rely on small cell counts and are labeled exploratory.</li>
              <li>The meaning of success may vary by organization and initiative.</li>
              <li>Many initiatives were still in progress, which limits final-outcome interpretation.</li>
              <li>The two follow-up interviews were explanatory and not independently representative.</li>
              <li>The research did not validate a numerical risk score or universal success threshold.</li>
            </ul>

            <h2 className={h2}>
              What the follow-up interviews added
            </h2>

            <p>
              The two follow-up interviews highlighted different paths. The initiative described as
              successful had a clearer connection to the business objective, stronger accountability,
              and more disciplined attention to adoption and measurable outcomes. The initiative that
              underperformed reflected a gap between the intended strategy and the operating
              conditions required to execute it: a business case had been approved, but ownership,
              resourcing and the definition of value stayed unresolved after launch.
            </p>

            <p>
              Because the conversations were tailored and the sample was limited, they should not be
              treated as independent proof. Their value is explanatory. They illustrate how the
              conditions identified in the survey can appear in practice, and why technically sound
              initiatives can still struggle to create commercial value.
            </p>

            <h2 className={h2}>
              Readiness, then strategy, then deployment
            </h2>

            <p>
              Readiness means diagnosing where today&rsquo;s norms, power, and incentives will
              resist tomorrow&rsquo;s strategy, and adjusting them before capital is committed. It
              is not a checklist run at kickoff. Alongside the conditions the survey measured, four
              structural requirements need to be in place before launch rather than after it:
            </p>

            <ol className="list-decimal pl-6 space-y-3">
              <li>
                <strong>An aligned senior team.</strong> If key leaders are not genuinely on board,
                resolve that friction before launch. It does not dissolve on contact with a
                roadmap.
              </li>
              <li>
                <strong>Defined leadership.</strong> A clearly named leader, with the emotional
                intelligence to map where the cultural resistance sits and the standing to
                influence through inclusion rather than mandate.
              </li>
              <li>
                <strong>Explicit resources and architecture.</strong> Protected capital, protected
                talent, and a structure insulated from business as usual, which will otherwise
                reclaim both.
              </li>
              <li>
                <strong>Sustained support.</strong> Commitment has to outlast a single budget
                cycle; short-cycle support is how initiatives stall before they can deliver.
              </li>
            </ol>

            <h2 className={h2}>
              The LEASH model
            </h2>

            <p>
              Where the diagnostic finds gaps, five levers close them. The framework I apply here
              is the LEASH model, developed by Charles O&rsquo;Reilly of Stanford and taught in the
              Harvard Business School change and renewal curriculum. I use it because it covers the
              full set of levers that have to move:
            </p>

            <div className="not-prose my-10 divide-y divide-[#0A0A0A]/10 border-y border-[#0A0A0A]/10">
              {leash.map((l) => (
                <div key={l.k} className="py-5 flex gap-5">
                  <span className="font-display text-2xl font-bold text-[#3B5998] w-7 shrink-0">
                    {l.k}
                  </span>
                  <div>
                    <p className="font-semibold text-[#0A0A0A] mb-1">{l.t}</p>
                    <p className="text-sm text-[#334155] leading-relaxed">{l.d}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className={h2}>
              What it looks like when it works
            </h2>

            <p>
              Transformations that work start from one of two kinds of gap, and the two are worth
              naming separately. Michael Tushman and Charles O&rsquo;Reilly draw the distinction in
              Winning Through Innovation: a performance gap is something broken or inefficient in the
              business you already run; an opportunity gap is new value you could create. They argue the two need structurally
              separate teams, because the second will always lose to the first if they compete for
              the same people.
            </p>

            <p>
              At The Venetian, the performance gap was channel mix. Too much revenue was flowing
              through online travel agencies at high commission cost. Shifting those bookings to
              direct meant the same guest at a lower acquisition cost and a higher margin, which
              improved EBITDA without changing the product at all.
            </p>

            <p>
              The opportunity gap was in pricing. Combining guest willingness to pay with
              competitive pricing data by date and segment let the right offer reach the right
              guest at the right price before a competitor could make one. A single use case paid
              for the entire program.
            </p>

            <p>
              Neither depended on novel technology. Both depended on defining the commercial
              outcome first, funding a discovery phase before a platform, embedding the project team
              inside the business, and having an independent finance validator confirm the result.
            </p>

            <h2 className={h2}>
              Why I studied this problem
            </h2>

            <p>
              Earlier in my career, I was asked to help address complex technology initiatives that
              had defined objectives but lacked several conditions required for successful execution.
              Significant resources had been invested in engineering, development and product work,
              yet the initiatives were incomplete and the expected return had not materialized.
              Stakeholders were asking why the work was not finished and where the value was.
            </p>

            <p>
              The existing presentations were polished and the high-level vision appeared logical.
              When I looked beneath the presentations, much of the rigorous work required to make the
              vision executable was missing. Process maps were incomplete. Dependencies were not
              fully understood. Business requirements lacked necessary detail. Manual workarounds and
              tribal knowledge shaped how the work was actually performed.
            </p>

            <p>
              I met with the accountable stakeholders, reviewed the project documentation and
              financial objectives, assembled a cross-functional team spanning product management,
              architecture, engineering, business analysis and project management, and went to the
              front lines. We asked employees to show us how the work was performed, where their
              time went, what prevented them from accomplishing more, and which tasks or outcomes
              were not possible with the existing systems. Their knowledge revealed unnecessary
              workarounds, hidden dependencies and opportunities that were not visible in the
              executive-level materials.
            </p>

            <p>
              The work also produced an important leadership lesson. Involving frontline employees
              was not enough. Existing project leaders needed to participate earlier so they could
              help shape the solution rather than experience the work as a judgment on their prior
              decisions. Transformation affects ownership, authority, professional identity and
              internal influence, and those dynamics have to be managed alongside process and
              technology decisions.
            </p>

            <p>
              AI is the newest major transformation wave, following the internet, big data and broad
              digitalization. The technology is different, but many of the organizational risks are
              familiar. That is why I undertook this research.
            </p>

            <h2 className={h2}>
              What leaders should do before approving additional investment
            </h2>

            <p>
              Leaders should require a disciplined review of the objective, value hypothesis and
              operating conditions before committing additional capital. The purpose is not to slow
              innovation. It is to improve the probability that the investment can create measurable
              value.
            </p>

            <ul className="list-disc pl-6 space-y-2">
              {approvalChecklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h2 className={h2}>
              Proof of concept versus proof of value
            </h2>

            <p>
              A proof of concept establishes that a proposed solution can work. A proof of value
              establishes that it creates a measurable commercial or financial return.
            </p>

            <p>
              The initial proof of value should be selected so that its measurable upside can justify
              or recover a substantial portion of the initial investment. Once that value is
              verified, the organization has greater confidence in funding and scaling additional
              use cases. The work is not complete when the technology is delivered; completion
              should be defined by the accountable business owner before the work begins, using
              measurable acceptance criteria and financial verification where appropriate.
            </p>

            <h2 className={h2}>
              When to pause, redesign or stop
            </h2>

            <p>
              A missed milestone or modest cost increase does not necessarily justify stopping an
              initiative. Complex transformation work frequently takes longer or costs more than
              initially expected. The greater concern is a pattern of missed milestones, escalating
              costs or weak adoption combined with unresolved conditions that were already
              identifiable, such as unclear ownership, inadequate resources, misaligned incentives,
              incomplete process understanding or weak executive sponsorship.
            </p>

            <p>
              When delivery problems confirm previously visible readiness risks, leadership should
              pause additional investment and conduct a structured diagnosis before proceeding. The
              decision should be to continue because the hypothesis remains credible, correct
              specific execution or adoption issues, redesign the solution or operating model, or
              stop when the expected return no longer justifies additional investment.
            </p>

            <h2 className={h2}>
              How an underperforming initiative should be diagnosed
            </h2>

            <p>
              The diagnostic should begin with a comprehensive document review to establish what was
              approved, what was promised, how the solution was designed, and whether the
              documentation is sufficiently detailed to support execution.
            </p>

            <ul className="list-disc pl-6 space-y-2">
              {diagnosticDocuments.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <p>
              The first interview should normally be with the executive sponsor or business owner
              who is financially accountable for the result. The next conversations should include
              the project manager and cross-functional project team, compared against the
              documentation to identify differences among executive expectations, formal reporting
              and actual execution. The investigation then follows the evidence, which may expand
              into frontline observation, process mapping, technology architecture, data, financial
              assumptions, governance, resources, incentives or adoption. It should not impose a
              predetermined explanation on every troubled initiative.
            </p>

            <p>
              The final deliverable should include an executive summary, root causes, unsupported
              assumptions, financial exposure, remaining value opportunity, organizational barriers,
              prioritized corrective actions, a recommendation to continue, correct, redesign, scale
              or stop, and an implementation roadmap with accountable owners, milestones and value
              measures.
            </p>

            <h2 className={h2}>
              Governance as a sensing instrument
            </h2>

            <p>
              Most governance tracks milestones and spend. That catches problems after they have
              cost something. Governance that works surfaces resource withdrawal, misaligned
              incentives, and passive resistance early, which means it has to be looking at the
              organization and not only at the plan. The project team should maintain a current RAID
              log covering risks, assumptions, issues and dependencies, and at each governance review
              report progress against milestones, decisions required, scope or cost changes, emerging
              RAID items, adoption indicators, and movement toward the intended business outcome.
            </p>

            <p>
              The accountable business owner should interpret what the evidence means commercially.
              Finance should verify financial assumptions and realized value. A monthly steering
              review comparing approved capital against independently verified results will find
              drift sooner than any status report. Governance is not a stop mechanism. It is a
              navigation instrument, and its real job is to protect the new behaviors long enough for
              them to take hold. The same
              principles that shaped data and digital transformation investments now apply to{' '}
              <a
                href="/board-executive-advisory/"
                className={link}
                data-ga-event="research_internal_link_click"
                data-ga-label="Board and Executive Advisory"
              >
                AI investment governance and value realization
              </a>{' '}
              at the board level.
            </p>

            <h2 id="checklist" className={h2}>
              Technology Investment Risk Checklist
            </h2>

            <p>
              One missing condition does not guarantee failure, but every unresolved condition
              increases execution risk. Multiple warning signs indicate that leadership should
              diagnose the operating conditions before committing additional capital.
            </p>

            <ul className="not-prose list-none pl-0 space-y-2 my-8">
              {riskChecklist.map((item) => (
                <li key={item} className="flex gap-3 text-[#334155] text-sm leading-relaxed">
                  <span aria-hidden="true" className="text-[#475569]">&#9744;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h2 id="board-questions" className={h2} data-ga-view="research_board_tool_view">
              What should a CEO or board ask?
            </h2>

            <ul className="list-disc pl-6 space-y-2">
              {boardQuestions.map((q) => (
                <li key={q}>{q}</li>
              ))}
            </ul>

            <h2 className={h2}>
              The practical version
            </h2>

            <p>
              Before the next initiative is funded, three questions are worth answering honestly.
              Can we describe exactly what work needs doing and who owns each piece? Do we have a
              dedicated team, or are we adding this to people who already have day jobs? Will
              anyone be paid differently if this succeeds?
            </p>

            <p>
              If the answer to any of those is no, the business case is not the thing to revisit.
              The organization is.
            </p>

            <h2 id="report" className={h2}>
              Full executive research report
            </h2>

            <p>
              The findings above are the complete public research. A longer executive report,{' '}
              <em>{ALT_TITLE}</em>, adds the full methodology, detailed results, the anonymous
              interview themes, the external research comparison and a two-page executive tool for
              approval and governance decisions.
            </p>

            <p>
              <a
                href="/blog/why-data-transformations-fail/report/"
                className={link}
                data-ga-event="research_internal_link_click"
                data-ga-label="Read the full research report"
              >
                Read the full research report
              </a>
            </p>

            <h2 id="research-contact" className={h2}>
              Is a major technology investment underperforming?
            </h2>

            <p>
              Commission an independent diagnostic before approving more capital. If your
              organization is investing in data, digital transformation, technology or AI and is not
              seeing the expected progress or financial return, I can help determine what is
              preventing the initiative from creating value, right-size the investment and operating
              model, and lead the work through implementation and verified results. I am available
              for select full-time executive leadership, interim leadership and advisory mandates.
            </p>

            <p>
              <a
                href="mailto:zacharyleifer@gmail.com?subject=Technology%20investment%20review"
                className={link}
                data-ga-event="research_email_click"
                data-ga-label="Start a conversation"
              >
                Start a conversation
              </a>
            </p>

          </div>

          <div className="mt-20 pt-10 border-t border-[#0A0A0A]/10">
            <p className="text-sm text-[#475569]">
              Zachary Leifer is a Las Vegas-based commercial growth executive who has held vice
              president roles in both digital marketing and corporate information technology at Las
              Vegas Sands, a Fortune 500 company. He served as Chief Marketing Officer at 1/ST
              Technology and Chief Commercial Officer at PokerAtlas, a B2B SaaS and B2C gaming
              platform. This research formed the basis of his Leadership Impact Project for
              the Advanced Management Program at Harvard Business School.{' '}
              <a href="/" className={link} data-ga-event="research_internal_link_click" data-ga-label="Full profile">
                Read the full profile
              </a>
              {' '}or{' '}
              <a href="/speaking/" className={link} data-ga-event="research_internal_link_click" data-ga-label="Speaking topics">
                see speaking topics
              </a>.
            </p>
          </div>

        </article>
      </main>
      <Footer />
      <script
        dangerouslySetInnerHTML={{
          __html: `(function () {
            function ga() {
              if (typeof window.gtag !== 'function') return null;
              return window.gtag;
            }
            var g = ga();
            if (g) g('set', { content_type: 'original_research' });
            document.addEventListener('click', function (e) {
              var t = e.target.closest('[data-ga-event]');
              if (!t) return;
              var fn = ga();
              if (fn) fn('event', t.getAttribute('data-ga-event'), { link_label: t.getAttribute('data-ga-label') || t.textContent.trim() });
            });
            var seen = new Set();
            var targets = document.querySelectorAll('[data-ga-view]');
            if (targets.length && 'IntersectionObserver' in window) {
              var io = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                  var name = entry.target.getAttribute('data-ga-view');
                  if (entry.isIntersecting && !seen.has(name)) {
                    seen.add(name);
                    var fn = ga();
                    if (fn) fn('event', name, {});
                    io.unobserve(entry.target);
                  }
                });
              }, { threshold: 0.5 });
              targets.forEach(function (el) { io.observe(el); });
            }
          })();`,
        }}
      />
    </>
  );
}
