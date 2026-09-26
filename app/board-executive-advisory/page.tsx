import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { OG_IMAGE } from '@/data/og-image';
import PageQuotes from '@/components/PageQuotes';

const TITLE_TAG = 'Zachary Leifer | Board Candidate & Executive Advisor';
const DESC =
  'Board-facing experience in commercial growth, technology investment, AI governance, customer data, capital allocation, and enterprise transformation.';
const URL = 'https://zacharyleifer.com/board-executive-advisory/';
const PUBLISHED = '2026-09-13';
const MODIFIED = '2026-09-26';

export const metadata: Metadata = {
  title: TITLE_TAG,
  description: DESC,
  authors: [{ name: 'Zachary Leifer', url: 'https://zacharyleifer.com/' }],
  alternates: { canonical: URL },
  openGraph: {
    type: 'website',
    title: TITLE_TAG,
    description: DESC,
    url: URL,
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE_TAG,
    description: DESC,
    images: [{ url: OG_IMAGE.url, alt: OG_IMAGE.alt }],
  },
};

const PERSON_REF = {
  '@id': 'https://zacharyleifer.com/#zachary-leifer',
  '@type': 'Person',
  name: 'Zachary Leifer',
  url: 'https://zacharyleifer.com/',
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': URL,
  url: URL,
  name: 'Board Candidate & Executive Advisor',
  description: DESC,
  inLanguage: 'en-US',
  isPartOf: { '@id': 'https://zacharyleifer.com/#website' },
  about: PERSON_REF,
  mainEntity: PERSON_REF,
  datePublished: PUBLISHED,
  dateModified: MODIFIED,
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Zachary Leifer', item: 'https://zacharyleifer.com/' },
    { '@type': 'ListItem', position: 2, name: 'Board & Executive Advisory' },
  ],
};

const LINK =
  'text-[#3B5998] underline underline-offset-4 decoration-[#3B5998]/30 hover:text-[#0A0A0A] hover:decoration-[#0A0A0A]/40 transition-colors';

const H2 = 'font-display text-2xl font-bold text-[#0A0A0A] mt-14 mb-4 scroll-mt-24';
const H3 = 'font-display text-lg font-semibold text-[#0A0A0A] leading-snug mt-8 mb-2';

export default function BoardExecutiveAdvisoryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema).replace(/</g, '\\u003c') }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, '\\u003c') }}
      />
      <Nav />
      <main className="bg-[#F8F7F4] min-h-screen">
        <article className="max-w-3xl mx-auto px-8 md:px-12 py-24">

          {/* Breadcrumb */}
          <p className="text-[10px] tracking-[0.35em] uppercase text-[#475569] mb-10">
            <a href="/" className="hover:text-[#0A0A0A] transition-colors">Zachary Leifer</a>
            <span aria-hidden="true" className="mx-2">·</span>
            Board &amp; Executive Advisory
          </p>

          {/* Header */}
          <header className="mb-16">
            <span className="inline-block text-[9px] tracking-[0.3em] uppercase text-[#3B5998] mb-5">
              Board &amp; Executive Advisory
            </span>
            <h1 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold text-[#0A0A0A] leading-tight mb-6">
              Zachary Leifer: Board Candidate &amp; Executive Advisor
            </h1>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-[#475569]">
              <span>Las Vegas, Nevada</span>
              <span aria-hidden="true">·</span>
              <span>Available nationally and internationally</span>
            </div>
          </header>

          {/* Body */}
          <div className="prose prose-slate max-w-none text-[#334155] leading-[1.9] text-base space-y-6">

            <p className="text-xl text-[#1A1A1A] leading-relaxed font-light">
              Zachary Leifer is a Las Vegas-based commercial growth and transformation executive and Board
              Candidate. He brings board-relevant experience across commercial growth, technology investment,
              customer data, AI governance, capital allocation, and enterprise transformation. His experience
              includes serving as Chief Marketing Officer of 1/ST Technology, Chief Commercial Officer of
              PokerAtlas, and Vice President of Corporate Information Technology at Las Vegas Sands.
            </p>

            <h2 className={H2}>Commercial leadership and enterprise technology</h2>

            <p>
              As a commercial growth and transformation executive, I help companies connect data, digital
              transformation, technology and AI to measurable results: revenue growth, EBITDA improvement,
              stronger customer economics and enterprise value.
            </p>

            <p>
              My perspective comes from leading the commercial functions responsible for growth and the
              enterprise technology capabilities needed to support it. At Las Vegas Sands, I was recruited from
              Vice President of Digital Marketing and eCommerce at The Venetian to Vice President of Corporate
              Information Technology. I bring that experience to the
              questions behind major investment decisions: where value will come from, what must change to
              capture it, and how leadership will know whether the investment is working.
            </p>

            {/* What I bring */}
            <h2 className={H2}>What I bring to a board</h2>

            <h3 className={H3}>Commercial growth and customer economics</h3>
            <p>
              I test whether the growth plan improves the economics of acquiring, retaining and serving
              customers, and whether growth depends on unsustainable acquisition spending, discounting or
              reinvestment.
            </p>

            <h3 className={H3}>Digital and technology investment</h3>
            <p>
              I bring a commercial perspective to technology proposals, connecting capabilities to the business
              decisions and operating changes they must support. The central question is whether the
              organization can turn a new capability into financial value once it is in place.
            </p>

            <h3 className={H3}>AI investment governance</h3>
            <p>
              I help leadership teams make AI decisions through AI investment governance, organizational
              readiness and value realization, using the{' '}
              <a href="#ai-investment-governance" className={LINK}>
                approach outlined below
              </a>. I write about the gap between scattered AI use and enterprise value in{' '}
              <a href="/blog/ai-enterprise-value/" className={LINK}>
                AI Is Already in Your Company. Is It Creating Enterprise Value?
              </a>
            </p>

            <h3 className={H3}>Customer data and personalization</h3>
            <p>
              I evaluate how customer data informs acquisition, retention, pricing and experience. Leading
              customer data platform and predictive customer-valuation initiatives gives me a basis for asking
              whether proposed personalization capabilities change customer behavior and contribution, or simply
              increase campaign activity.
            </p>

            <h3 className={H3}>Capital allocation and ROI discipline</h3>
            <p>
              I bring experience securing investment through commercial forecasting and presenting the case to
              senior decision-makers, with a focus on assumptions, alternatives, resource requirements and the
              evidence needed to continue, change or stop an investment.
            </p>

            <h3 className={H3}>Transformation oversight and organizational alignment</h3>
            <p>
              I examine whether a transformation has an accountable leader, aligned incentives and sufficient
              operating support, and I weigh adoption and organizational friction alongside financial
              performance and delivery milestones. These conditions were a focus of research I completed during
              the Harvard Business School Advanced Management Program, summarized in{' '}
              <a href="/blog/why-data-transformations-fail/" className={LINK}>
                Why Data and Digital Transformations Fail
              </a>. I look at how AI is reshaping organizational structure and leadership pipelines in{' '}
              <a href="/blog/org-chart-rewritten/" className={LINK}>
                The Org Chart Is Being Rewritten
              </a>.
            </p>

            <h3 className={H3}>Gaming, hospitality and wagering</h3>
            <p>
              My industry experience spans integrated resorts and gaming, hospitality, horse racing and
              wagering, and B2B and B2C gaming technology, sectors where customer experience, loyalty,
              distribution and commercial performance are tightly linked.
            </p>

            {/* Board-level engagement */}
            <h2 className={H2}>Board-level engagement</h2>

            <p>
              My board-facing experience comes from the executive side of the table: presenting investment
              priorities, supporting capital decisions and connecting operating plans to commercial outcomes.
            </p>

            <p>
              At 1/ST Technology, I secured an increase in the board-approved marketing budget from $8 million
              to $15 million through direct board-level briefings and ROI forecasting.
            </p>

            <p>
              During my four years as Chief Marketing Officer, 1/ST Technology delivered 67% revenue growth and
              a 22% EBITDA CAGR, while customer acquisition cost fell 56% and LTV/CAC improved 73%. Those
              results reflect the work of the broader organization.{' '}
              <a href="/work/1st-technology-commercial-growth/" className={LINK}>
                Read the 1/ST Technology commercial growth case study
              </a>.
            </p>

            <p>
              I secured $13 million in capital investment for digital transformation initiatives that generated
              $36 million in incremental direct-channel revenue at The Venetian, then part of Las Vegas Sands.{' '}
              <a href="/work/venetian-direct-channel-transformation/" className={LINK}>
                Explore The Venetian direct-channel transformation case study
              </a>.
            </p>

            <p>
              My subsequent Corporate Information Technology role at Las Vegas Sands included leading a global
              cloud governance program across the U.S., Singapore and China and setting capital-project, ROI and
              delivery governance standards for property marketing-technology teams worldwide.
            </p>

            {/* AI Investment Governance (approved text, verbatim) */}
            <h2 id="ai-investment-governance" className={H2}>
              AI Investment Governance and Value Realization
            </h2>

            <p>
              The governance principles that determine whether AI creates value are similar to those that have
              shaped earlier investments in big data, digital transformation and enterprise technology. Leaders
              must define the business outcome before selecting the technology, establish accountable ownership,
              assess organizational readiness, protect the required resources and determine how financial value
              will be measured.
            </p>

            <p>
              My perspective is informed by experience governing digital transformation, customer-data,
              predictive-analytics, marketing-technology and global cloud initiatives, as well as research
              completed during the Harvard Business School Advanced Management Program.
            </p>

            <p>
              I help boards and leadership teams examine whether an AI investment has a defensible business case,
              appropriate ownership, organizational support, clear decision rights and a credible method for
              measuring value. This includes asking where AI belongs in the business, which workflows must
              change, what risks require oversight and how leadership will determine whether the investment is
              producing the intended commercial or operating result.
            </p>

            {/* Executive advisory */}
            <h2 className={H2}>Executive advisory</h2>

            <p>
              I advise CEOs and leadership teams where commercial growth and transformation meet. That can mean
              clarifying why customer acquisition is becoming less efficient, evaluating a data or technology
              investment, improving coordination across commercial functions, or assessing whether an AI
              initiative is ready to move beyond experimentation. The work begins with the economics of the
              business: what outcome matters, where performance is constrained, and which decisions,
              capabilities or organizational conditions must change.
            </p>

            <p>
              My advisory perspective combines marketing and commercial leadership with enterprise technology
              experience. At PokerAtlas, my mandate as Chief Commercial Officer spanned sales, product, revenue
              operations, finance and customer success. I built the multi-year operating P&amp;L and long-term
              organizational structure and led go-to-market and product marketing.
            </p>

            <p>
              Through{' '}
              <a href="https://www.somstrategies.com/" className={LINK}>
                State of Mind Strategies, my commercial growth and transformation advisory
              </a>
              , I work with leadership teams on commercial growth, customer economics, digital transformation
              and the business application of technology and AI, with ownership of the work remaining inside
              the business.
            </p>

            {/* Availability */}
            <h2 className={H2}>Availability</h2>

            <p>
              I am open to corporate, private-company and nonprofit board opportunities and executive advisory
              engagements. I am based in Las Vegas and available nationally and internationally.
            </p>

            <p>
              To discuss a board or advisory role, email{' '}
              <a href="mailto:zacharyleifer@gmail.com?subject=Board%20or%20advisory%20inquiry" className={LINK}>
                zacharyleifer@gmail.com
              </a>{' '}
              with the organization, the business challenge and the expected timing so I can assess the fit. I
              also speak to executive and board audiences; see{' '}
              <a href="/speaking/" className={LINK}>
                keynote, panel and board-session topics
              </a>.
            </p>

            <p>
              For organizational board and executive advisory delivered through State of Mind
              Strategies, visit{' '}
              <a href="https://www.somstrategies.com/board-executive-advisory/" className={LINK}>
                State of Mind Strategies&rsquo; Board &amp; Executive Advisory page
              </a>.
            </p>

          </div>

          <PageQuotes
            heading="What operating and finance leaders say"
            quotes={[
              {
                quote:
                  "At 1/ST, he took a methodical approach to defining our North Star, enforcing disciplined capital allocation, and aligning marketing, tech, and ops across the enterprise. He established an operating cadence that gave the C-suite and Board clear transparency into performance.",
                name: 'Michael Jordan',
                title: 'CIO | CTO | Digital COO',
                context: 'Worked together at 1/ST Technology',
              },
              {
                quote:
                  "Zachary drove the acquisition, conversion and retention for both Links of London and Folli Follie meeting and exceeding organizational revenue and profit goals. … His knowledge of customer behavior, industry trends, best practices, and drive for success made him a key strategist and growth champion for our North American business.",
                name: 'Clint Byrne',
                title: 'CFO · Juliska',
                context: 'Worked together at Folli Follie North America',
              },
            ]}
          />

          {/* Footer nav */}
          <div className="mt-20 pt-10 border-t border-[#0A0A0A]/10">
            <p className="text-sm text-[#475569]">
              Zachary Leifer is a Las Vegas-based commercial growth and transformation executive who has
              served as Chief Marketing Officer, Chief Commercial Officer, and Vice President of Corporate
              Information Technology. He completed the Harvard Business School Advanced Management Program in 2026.{' '}
              <a href="/" className="text-[#3B5998] hover:text-[#0A0A0A] transition-colors">
                Read the full profile
              </a>.
            </p>
          </div>

        </article>
      </main>
      <Footer />
    </>
  );
}
