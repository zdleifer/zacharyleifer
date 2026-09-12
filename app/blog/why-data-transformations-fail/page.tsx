import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const TITLE = 'Why Data and Digital Transformations Fail: Evidence from 74 Senior Executives';
const DESC =
  'Capstone research by Zachary Leifer for the Harvard Business School Advanced Management Program: a survey of 74 senior executives on why data and digital initiatives fail to deliver, why AI is repeating the same pattern, and the readiness architecture that changes the odds.';
const URL = 'https://zacharyleifer.com/blog/why-data-transformations-fail/';
const PUBLISHED = '2026-09-12';

export const metadata: Metadata = {
  title: `${TITLE} | Zachary Leifer`,
  description: DESC,
  authors: [{ name: 'Zachary Leifer', url: 'https://zacharyleifer.com' }],
  alternates: { canonical: URL },
  openGraph: {
    type: 'article',
    title: TITLE,
    description: DESC,
    url: URL,
    authors: ['Zachary Leifer'],
    publishedTime: PUBLISHED,
    images: [{ url: 'https://zacharyleifer.com/images/headshot.png' }],
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: TITLE,
  author: {
    '@id': 'https://zacharyleifer.com/#zachary-leifer',
    '@type': 'Person',
    name: 'Zachary Leifer',
    url: 'https://zacharyleifer.com',
  },
  publisher: { '@id': 'https://zacharyleifer.com/#zachary-leifer' },
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  url: URL,
  mainEntityOfPage: { '@type': 'WebPage', '@id': URL },
  image: 'https://zacharyleifer.com/images/headshot.png',
  description: DESC,
  about: [
    'Artificial intelligence',
    'Digital transformation',
    'Data strategy',
    'Organizational readiness',
    'Change management',
    'Enterprise value',
  ],
};

const findings = [
  {
    stat: '51%',
    label:
      'report that fewer than half of their data and digital initiatives delivered the commercial outcomes that justified them.',
  },
  {
    stat: '56%',
    label:
      'said their organization selected the technology before the business outcome had been defined.',
  },
  {
    stat: '2.6x',
    label:
      'higher scores on ability to demonstrate ROI among organizations that redesigned incentives before launch. Only six respondents had done so.',
  },
  {
    stat: '6x',
    label:
      'more likely to fully deliver when the initiative had dedicated ownership and dedicated resources rather than being added to business as usual.',
  },
  {
    stat: 'Zero',
    label:
      'of the respondents whose organizations did none of the five conditions reported an initiative that fully delivered. That group was a minority of the 74, so read it as a pattern rather than a precise rate.',
  },
];

const leash = [
  { k: 'L', t: 'Leader actions', d: 'What leadership visibly does, funds, and protects, which is read as the real priority regardless of what is announced.' },
  { k: 'E', t: 'Employee involvement', d: 'Bringing the people who will live with the change into the design of it, early enough that their input still changes something.' },
  { k: 'A', t: 'Aligned rewards', d: 'Compensation and recognition that pay out on the new outcome rather than the old one.' },
  { k: 'S', t: 'Stories, symbols and signals', d: 'The narrative and the small visible decisions that tell the organization which way is now up.' },
  { k: 'H', t: 'HR systems', d: 'Hiring, promotion, and performance management adjusted so the structure sustains the change after attention moves on.' },
];

export default function WhyDataTransformationsFail() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema).replace(/</g, '\\u003c') }}
      />
      <Nav />
      <main className="bg-[#F8F7F4] min-h-screen">
        <article className="max-w-3xl mx-auto px-8 md:px-12 py-24">

          <p className="text-[10px] tracking-[0.35em] uppercase text-[#64748B] mb-10">
            <a href="/" className="hover:text-[#0A0A0A] transition-colors">Zachary Leifer</a>
            <span className="mx-2">·</span>
            <a href="/blog/" className="hover:text-[#0A0A0A] transition-colors">Insights</a>
          </p>

          <header className="mb-16">
            <span className="inline-block text-[9px] tracking-[0.3em] uppercase text-[#3B5998] mb-5">
              Original Research &middot; Harvard Business School AMP Capstone
            </span>
            <h1 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold text-[#0A0A0A] leading-tight mb-6">
              {TITLE}
            </h1>
            <div className="flex items-center gap-4 text-sm text-[#64748B]">
              <span>Zachary Leifer</span>
              <span>·</span>
              <time dateTime={PUBLISHED}>September 12, 2026</time>
            </div>
          </header>

          <div className="prose prose-slate max-w-none text-[#334155] leading-[1.9] text-base space-y-6">

            <p className="text-xl text-[#1A1A1A] leading-relaxed font-light">
              Most data, digital, and now AI initiatives do not fail because the business case was wrong.
              They fail because the organization was never adjusted to deliver it. I surveyed 74
              senior executives to find out how often that happens, and what separates the
              initiatives that deliver from the ones that quietly do not.
            </p>

            <p>
              This is the research behind my capstone project for the Advanced Management Program
              at Harvard Business School, formally the Leadership Impact Project. The capstone
              focused on driving enterprise value from data, digital transformation, and AI.
              Respondents were senior leaders across general management, technology, finance, and
              commercial functions, surveyed in 2026. Responses are reported in aggregate.
            </p>

            <h2 className="font-display text-2xl font-bold text-[#0A0A0A] mt-12 mb-6">
              What 74 executives reported
            </h2>

            <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#0A0A0A]/10 my-10">
              {findings.map((f, i) => (
                <div
                  key={f.stat}
                  className={`bg-[#F8F7F4] p-6${
                    i === findings.length - 1 ? ' sm:col-span-2' : ''
                  }`}
                >
                  <p className="font-display text-3xl font-bold text-[#0A0A0A] mb-2">{f.stat}</p>
                  <p className="text-sm text-[#334155] leading-relaxed">{f.label}</p>
                </div>
              ))}
            </div>

            <p className="text-sm text-[#64748B]">
              Survey of 74 senior executives, 2026. Figures are self-reported and describe the
              respondents&rsquo; own organizations.
            </p>

            <p>
              The last finding is the one worth sitting with. Among respondents whose organizations
              did none of the five things, clear ownership, a dedicated team, aligned incentives,
              defined measurement, and an assessed readiness, not one reported an initiative that
              fully delivered. Not a reduced return. None.
            </p>

            <h2 className="font-display text-2xl font-bold text-[#0A0A0A] mt-12 mb-4">
              This is a transformation problem, not a technology problem
            </h2>

            <p>
              That reading is consistent with the wider literature. Bain &amp; Company found that 88%
              of business transformations fall short of their original ambitions, with only about 12%
              achieving what they set out to deliver. Boston Consulting Group&rsquo;s 2025 study of
              more than 1,250 companies across 68 countries found 60% achieving no material value
              from AI at all, and just 5% generating value at scale. My survey adds a
              practitioner-level observation to both: 56% of these organizations chose the
              technology before the commercial outcome had been defined, which is the point at
              which the rest becomes hard.
            </p>

            <p>
              The failure is rarely dramatic. Resources get quietly withdrawn to cover business as
              usual. Two initiatives draw on the same finite talent pool with no stated first
              priority. The people who stand to lose control, budget, or status do not object in
              the meeting, they simply do not move. None of that shows up on a milestone dashboard
              until the return is already gone.
            </p>

            <h2 className="font-display text-2xl font-bold text-[#0A0A0A] mt-12 mb-4">
              AI is repeating the pattern, faster
            </h2>

            <p>
              This survey asked about data and digital initiatives, because that is the wave most
              of these organizations have already been through. What is striking is how exactly
              the AI conversation is now reproducing it. The technology is being selected before
              the commercial outcome is defined. Pilots are being added to teams who already have
              day jobs. Nobody is being paid differently if it works. Those are the same three
              conditions that predicted failure in the data era, and there is no reason to expect
              a different result from a different acronym.
            </p>

            <p>
              If anything AI compresses the timeline. The technology is easier to acquire than a
              data platform was, which removes the procurement friction that used to force at
              least some organizational conversation. It is now entirely possible to have AI
              running in a dozen places in the business without anyone having defined what
              commercial outcome it is meant to produce, who owns it, or how the return will be
              verified. Ease of adoption is not the same as readiness to benefit.
            </p>

            <h2 className="font-display text-2xl font-bold text-[#0A0A0A] mt-12 mb-4">
              Readiness, then strategy, then deployment
            </h2>

            <p>
              Readiness means diagnosing where today&rsquo;s norms, power, and incentives will
              resist tomorrow&rsquo;s strategy, and adjusting them before capital is committed. It
              is not a checklist run at kickoff. Four structural conditions need to be true before
              launch rather than after it:
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
                <strong>Sustained support.</strong> Not for a year. Short-cycle support is how
                initiatives die before they can deliver.
              </li>
            </ol>

            <h2 className="font-display text-2xl font-bold text-[#0A0A0A] mt-12 mb-4">
              The LEASH model
            </h2>

            <p>
              Where the diagnostic finds gaps, five levers close them. The framework I apply here
              is the LEASH model, developed by Charles O&rsquo;Reilly of Stanford and taught in the
              Harvard Business School change and renewal curriculum. It is not mine, and I use it
              because in practice it is the most complete account of what actually has to move:
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

            <h2 className="font-display text-2xl font-bold text-[#0A0A0A] mt-12 mb-4">
              What it looks like when it works
            </h2>

            <p>
              The two openings look different and are worth naming separately. Michael Tushman and
              Charles O&rsquo;Reilly draw the distinction in Winning Through Innovation: a
              performance gap is something broken or inefficient in the business you already run, an
              opportunity gap is new value you could create. They argue the two need structurally
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
              The opportunity gap was priced differently. Combining guest willingness to pay with
              competitive pricing data by date and segment let the right offer reach the right
              guest at the right price before a competitor could make one. A single use case paid
              for the entire program.
            </p>

            <p>
              Neither depended on novel technology. Both depended on defining the commercial
              outcome first, funding a discovery phase rather than a platform, embedding the
              project team inside the business rather than beside it, and having an independent
              finance validator confirm the result rather than the project team reporting on
              itself.
            </p>

            <h2 className="font-display text-2xl font-bold text-[#0A0A0A] mt-12 mb-4">
              Governance as a sensing instrument
            </h2>

            <p>
              Most governance tracks milestones and spend. That catches problems after they have
              cost something. Governance that works surfaces resource withdrawal, misaligned
              incentives, and passive resistance early, which means it has to be looking at the
              organization and not only at the plan. A monthly steering review comparing capital
              approved against independently verified result will find drift sooner than any status
              report.
            </p>

            <p>
              Governance is not a stop mechanism. It is a navigation instrument, and its real job
              is to protect the new behaviors long enough for them to take hold.
            </p>

            <h2 className="font-display text-2xl font-bold text-[#0A0A0A] mt-12 mb-4">
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

          </div>

          <div className="mt-20 pt-10 border-t border-[#0A0A0A]/10">
            <p className="text-sm text-[#64748B]">
              Zachary Leifer is a Las Vegas-based commercial growth executive who has led both
              marketing and corporate IT at the same Fortune 500 company. This research formed the
              basis of his capstone project for the Advanced Management Program at Harvard Business
              School.{' '}
              <a href="/" className="text-[#3B5998] hover:text-[#0A0A0A] transition-colors">
                Read the full profile
              </a>
              {' '}or{' '}
              <a href="/speaking/" className="text-[#3B5998] hover:text-[#0A0A0A] transition-colors">
                see speaking topics
              </a>.
            </p>
          </div>

        </article>
      </main>
      <Footer />
    </>
  );
}
