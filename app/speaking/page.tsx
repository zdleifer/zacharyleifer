import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import speakingFaqs from '@/data/speaking-faqs.json';
import { OG_IMAGE } from '@/data/og-image';

export const metadata: Metadata = {
  title: 'Zachary Leifer | AI & Growth Speaker | Las Vegas',
  description:
    'Zachary Leifer speaks on AI Strategy, AI Investment Governance, customer data and commercial growth. Keynotes, panels and executive sessions from Las Vegas.',
  alternates: { canonical: 'https://zacharyleifer.com/speaking/' },
  openGraph: {
    type: 'website',
    title: 'Zachary Leifer | AI & Growth Speaker | Las Vegas',
    description:
      'Zachary Leifer speaks on AI Strategy, AI Investment Governance, customer data and commercial growth. Keynotes, panels and executive sessions from Las Vegas.',
    url: 'https://zacharyleifer.com/speaking/',
    images: [{ ...OG_IMAGE, alt: 'Zachary Leifer, speaker on AI strategy, digital transformation and commercial growth, Las Vegas' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zachary Leifer | AI & Growth Speaker | Las Vegas',
    description: 'Zachary Leifer speaks on AI Strategy, AI Investment Governance, customer data and commercial growth. Keynotes, panels and executive sessions from Las Vegas.',
    images: [{ url: OG_IMAGE.url, alt: OG_IMAGE.alt }],
  },
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Zachary Leifer, Speaker',
  url: 'https://zacharyleifer.com/speaking/',
  description:
    'Zachary Leifer speaks on AI strategy, AI investment governance, customer data, commercial growth and digital transformation. Keynotes, executive panels and board sessions from Las Vegas, Nevada.',
  dateModified: '2026-09-13',
  mainEntity: {
    '@id': 'https://zacharyleifer.com/#zachary-leifer',
    '@type': 'Person',
    name: 'Zachary Leifer',
    url: 'https://zacharyleifer.com',
  },
};

// Generated from data/speaking-faqs.json, the same source the visible FAQ renders from,
// so the markup can never assert an answer this page does not display.
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: speakingFaqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

const SPEAKING_MAILTO = 'mailto:zacharyleifer@gmail.com?subject=Speaking%20inquiry';

const talks = [
  {
    number: '01',
    category: 'AI Strategy & Commercial Value',
    title: 'AI Is Not a Strategy: The Operating Model Leaders Need Before They Scale It',
    abstract:
      'What must change inside a business before AI can produce measurable value? Zachary examines the leadership decisions behind adoption: a defined commercial outcome, accountable ownership, appropriate resources, aligned incentives and a credible measurement plan. Drawing on commercial and enterprise technology experience and his AMP Leadership Impact Project, he shows how lessons from data and digital transformation apply to AI investment, including where specialist risk oversight belongs. The session gives executive teams a practical set of questions for evaluating readiness before expanding deployment.',
    bestFor: ['CEOs', 'CMOs', 'CIOs', 'Boards', 'Transformation leaders', 'PE portfolio companies'],
  },
  {
    number: '02',
    category: 'Customer Data & Growth',
    title: 'From Customer Data to Commercial Value: Making Personalization Change Customer Economics',
    abstract:
      'Customer data creates value when it changes a decision, an experience or an economic outcome. This session connects customer data platforms, predictive analytics and personalization to acquisition, retention and reinvestment discipline. Zachary draws on his work at 1/ST Technology and The Venetian to explain how leaders can connect technical capabilities to customer economics. Audiences leave with a way to distinguish a platform implementation from a commercial improvement and to frame the measurements needed to evaluate the difference.',
    bestFor: ['Marketers', 'Hospitality leaders', 'Gaming executives', 'Loyalty professionals', 'Customer experience leaders'],
  },
  {
    number: '03',
    category: 'The CMO/CIO/CFO Triangle',
    title: 'The Growth Operating System: How Marketing, Technology and Finance Must Work Together',
    abstract:
      'Growth initiatives cross functional boundaries even when budgets and accountability do not. Zachary explores how marketing, technology and finance can establish a shared investment case, clear decision rights and a common definition of success. His experience moving from digital marketing into Corporate Information Technology at Las Vegas Sands grounds the discussion in operating practice. The session focuses on aligning the customer opportunity, delivery requirements and financial measurement so that no function declares success while the business outcome remains unresolved.',
    bestFor: ['Executive teams', 'Leadership offsites', 'Boards', 'Transformation programs', 'Technology and marketing conferences'],
  },
  {
    number: '04',
    category: 'Gaming & Hospitality',
    title: 'What Hospitality and Gaming Can Teach Businesses About Loyalty, Data and Customer Experience',
    abstract:
      'Hospitality and gaming make the connection between customer relationships and business economics unusually tangible. Zachary examines lessons from integrated resorts and wagering, including customer segmentation, personalization, direct-channel performance and reinvestment. He distinguishes practices that transfer to other industries from those that depend on the operating context. The session helps leaders evaluate loyalty through customer value and experience rather than enrollment or promotional activity alone, with attention to the organizational coordination needed to deliver a consistent customer experience.',
    bestFor: ['Hospitality and gaming events', 'Loyalty conferences', 'Marketing technology summits', 'Cross-industry executive forums'],
  },
  {
    number: '05',
    category: 'Marketing Operating Model',
    title: 'Beyond the MarTech Stack: Building a Marketing Operating System That Produces Results',
    abstract:
      'A technology portfolio is not an operating model. This session explores how leaders connect marketing capabilities to priorities, workflows, accountability and measurement. Zachary draws on executive experience spanning customer data, digital commerce, agency management and enterprise technology to explain why buying tools does not settle the underlying management decisions. Audiences leave with a clearer way to identify what the organization needs to do differently, which capabilities support that change and how to evaluate whether the investment is improving commercial performance.',
    bestFor: ['CMOs', 'Marketing leaders', 'MarTech conferences', 'CIO/CMO joint sessions', 'CFO-facing marketing discussions'],
  },
];

const faqs = speakingFaqs;

// Newest first. The HBS row is a participant presentation, not an invited engagement.
const appearances = [
  { event: 'Harvard Business School Advanced Management Program', topic: 'Leadership Impact Project presentation to the AMP cohort', year: '2026' },
  { event: 'NC Labs Podcast', topic: 'Awesome in Action', year: '2021' },
  { event: 'World Tote Association', topic: 'Digital Transformation in the Age of the Customer', year: '2020' },
];

export default function SpeakingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema).replace(/</g, '\\u003c') }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c') }}
      />
      <Nav />

      <main>

        {/* ── HERO ── */}
        <section className="grain relative bg-[#070B14] pt-24 md:pt-32 lg:pt-40 pb-20 md:pb-28 px-8 md:px-12 overflow-hidden">
          <div
            className="orb w-[500px] h-[500px] top-[-80px] right-[-80px] opacity-15"
            style={{ background: 'radial-gradient(circle, #3B5998 0%, #1E3A5F 50%, transparent 70%)' }}
          />

          <div className="max-w-7xl mx-auto">
            <p className="text-[10px] tracking-[0.35em] uppercase text-[#64748B] mb-10">
              <a href="/" className="hover:text-white/60 transition-colors">Zachary Leifer</a>
              <span className="mx-2">·</span>
              Speaking
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-8">
                <p className="text-[10px] tracking-[0.35em] uppercase text-[#3B5998] mb-6">Speaking</p>
                <h1 className="font-display text-[clamp(1.8rem,3.5vw,3rem)] font-bold text-white leading-tight mb-8">
                  Zachary Leifer speaks on AI strategy, customer data, commercial growth and the operating models that connect technology investment to measurable business results.
                </h1>
                <p className="text-white/55 text-sm leading-relaxed max-w-2xl mb-10">
                  A commercial growth and transformation executive, he has served as Chief Marketing Officer of 1/ST Technology and Chief Commercial Officer of PokerAtlas. He is available for keynotes, executive panels, leadership roundtables, board sessions, workshops, virtual events and podcasts. Based in Las Vegas, Nevada, he travels nationally and internationally.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://linkedin.com/in/zacharyleifer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-white text-[#0A0A0A] px-8 py-4 text-xs tracking-[0.18em] uppercase font-semibold hover:bg-white/90 transition-all duration-200"
                  >
                    Message on LinkedIn →
                  </a>
                  <a
                    href="#talks"
                    className="inline-flex items-center gap-3 border border-white/20 text-white/60 hover:text-white hover:border-white/50 px-8 py-4 text-xs tracking-[0.18em] uppercase font-medium transition-all duration-200"
                  >
                    View Talks →
                  </a>
                </div>
                <p className="text-white/30 text-xs mt-5">
                  Or email directly:{' '}
                  <a href={SPEAKING_MAILTO} className="text-white/50 hover:text-white transition-colors">
                    zacharyleifer@gmail.com
                  </a>
                </p>
              </div>

              <div className="hidden lg:block lg:col-span-4">
                <div className="border border-white/10 p-8 space-y-6">
                  <p className="text-[10px] tracking-[0.35em] uppercase text-[#475569]">Format</p>
                  <ul className="space-y-2 text-white/60 text-sm">
                    {['Keynote', 'Executive Panel', 'Leadership Roundtable', 'Board Session', 'Workshop', 'Virtual Event', 'Podcast'].map((f) => (
                      <li key={f} className="flex items-center gap-3">
                        <span className="w-1 h-1 rounded-full bg-[#3B5998] flex-shrink-0" />
                        {f === 'Board Session' ? (
                          <a href="/board-executive-advisory/" className="hover:text-white transition-colors">
                            {f}
                          </a>
                        ) : (
                          f
                        )}
                      </li>
                    ))}
                  </ul>
                  <div className="border-t border-white/10 pt-6">
                    <p className="text-[10px] tracking-[0.35em] uppercase text-[#475569] mb-2">Location</p>
                    <p className="text-white/60 text-sm">Las Vegas, NV · National · International</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── BIO ── */}
        <section className="bg-[#F8F7F4] py-24 px-8 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              <div className="lg:col-span-3">
                <div className="lg:sticky top-24">
                  <p className="text-[10px] tracking-[0.35em] uppercase text-[#64748B]">
                    About the Speaker
                  </p>
                  <figure className="mt-8 max-w-[260px]">
                    <img
                      src="/images/zachary-leifer-harvard-business-school-600.webp"
                      srcSet="/images/zachary-leifer-harvard-business-school-600.webp 600w, /images/zachary-leifer-harvard-business-school-900.webp 900w"
                      sizes="260px"
                      width={600}
                      height={800}
                      loading="lazy"
                      decoding="async"
                      alt="Zachary Leifer at a Harvard Business School lectern, 2026"
                      className="w-full h-auto block"
                    />
                    <figcaption className="text-[#64748B] text-xs mt-3">
                      Zachary Leifer at Harvard Business School, 2026
                    </figcaption>
                  </figure>
                </div>
              </div>
              <div className="lg:col-span-9">
                <h2 className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-bold text-[#0A0A0A] mb-8">
                  Executive experience behind every talk.
                </h2>
                {/* 150-word speaker bio. Recount if edited. */}
                <p className="text-[#334155] text-base leading-[1.9] mb-6">
                  Zachary Leifer is a commercial growth and transformation executive who helps companies create more predictable value from data, digital transformation, technology and AI. He has served as Vice President, Corporate Information Technology at Las Vegas Sands, Chief Marketing Officer of 1/ST Technology and Chief Commercial Officer of PokerAtlas.
                </p>
                <p className="text-[#334155] text-base leading-[1.9] mb-6">
                  At The Venetian, then part of Las Vegas Sands, he led a{' '}
                  <a href="/work/venetian-direct-channel-transformation/" className="text-[#3B5998] hover:text-[#0A0A0A] transition-colors">
                    direct-channel digital transformation
                  </a>{' '}
                  before being recruited from Digital Marketing and eCommerce leadership into Corporate Information Technology at the same Fortune 500 company. At 1/ST Technology, he{' '}
                  <a href="/work/1st-technology-commercial-growth/" className="text-[#3B5998] hover:text-[#0A0A0A] transition-colors">
                    connected marketing investment to commercial growth
                  </a>.
                </p>
                <p className="text-[#334155] text-base leading-[1.9] mb-10">
                  His Harvard Business School AMP capstone research (the Leadership Impact Project), completed in 2026, examined the organizational conditions supporting value creation from data and transformation. He advises and speaks on commercial growth, digital transformation, AI strategy and AI value realization, connecting investment to accountable ownership and measurable outcomes. Based in Las Vegas, he welcomes{' '}
                  <a href="/board-executive-advisory/" className="text-[#3B5998] hover:text-[#0A0A0A] transition-colors">
                    board and advisory opportunities
                  </a>.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-[#E2E8F0]">
                  {[
                    { stat: '67%', label: 'Revenue growth, 1/ST Technology' },
                    { stat: '$36M', label: 'Incremental direct-channel revenue, The Venetian' },
                    { stat: '56%', label: 'CAC reduction, 1/ST Technology' },
                    { stat: 'HBS', label: 'Advanced Management Program · 2026' },
                  ].map((item) => (
                    <div key={item.stat}>
                      <p className="font-display text-3xl font-bold text-[#0A0A0A] mb-1">{item.stat}</p>
                      <p className="text-[#64748B] text-xs leading-snug">{item.label}</p>
                    </div>
                  ))}
                </div>

                {/* 52-word program bio. Recount if edited. */}
                <div className="mt-12 border border-[#E2E8F0] bg-white p-8">
                  <h3 className="text-[10px] tracking-[0.35em] uppercase text-[#64748B] mb-4">
                    Short bio for event programs
                  </h3>
                  <p className="text-[#334155] text-sm leading-[1.8]">
                    Zachary Leifer is a Las Vegas-based commercial growth and transformation executive with Chief Marketing Officer, Chief Commercial Officer and enterprise technology roles at 1/ST Technology, PokerAtlas and Las Vegas Sands. Drawing on that experience and Harvard Business School capstone research, he speaks on AI strategy, investment governance, organizational readiness and value realization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── TALKS ── */}
        <section id="talks" className="grain bg-[#070B14] py-24 px-8 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-16">
              <div className="lg:col-span-3">
                <p className="text-[10px] tracking-[0.35em] uppercase text-[#475569] lg:sticky top-24">
                  Signature Talks
                </p>
              </div>
              <div className="lg:col-span-9">
                <h2 className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-bold text-white">
                  Five talks built from operating experience.
                </h2>
                <p className="text-white/50 text-sm mt-3 max-w-xl">
                  Each session draws on results, trade-offs and organizational challenges from his Chief Marketing Officer, Chief Commercial Officer and enterprise technology roles.
                </p>
              </div>
            </div>

            <div className="divide-y divide-white/10">
              {talks.map((talk) => (
                <div key={talk.number} className="py-12 grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-4">
                  <div className="lg:col-span-3">
                    <p className="font-display text-5xl font-bold text-white/10 leading-none">{talk.number}</p>
                    <p className="text-[9px] tracking-[0.3em] uppercase text-[#3B5998] mt-3">{talk.category}</p>
                  </div>
                  <div className="lg:col-span-9">
                    <h3 className="font-display text-xl font-semibold text-white leading-snug mb-4">
                      {talk.title}
                    </h3>
                    <p className="text-white/55 text-sm leading-relaxed mb-6">{talk.abstract}</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-[9px] tracking-[0.25em] uppercase text-[#475569] mr-1 self-center">Best for:</span>
                      {talk.bestFor.map((a) => (
                        <span
                          key={a}
                          className="text-[10px] border border-white/15 text-white/50 px-3 py-1 rounded-sm"
                        >
                          {a}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-10 border-t border-white/10 text-center">
              <p className="text-white/40 text-sm mb-4">All talks are customizable for your audience, format and duration.</p>
              <a
                href="https://linkedin.com/in/zacharyleifer"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 border border-white/20 text-white/60 hover:text-white hover:border-white/50 px-8 py-4 text-xs tracking-[0.18em] uppercase font-medium transition-all duration-200"
              >
                Get in Touch →
              </a>
            </div>
          </div>
        </section>

        {/* ── PAST APPEARANCES ── */}
        <section className="bg-[#F8F7F4] py-24 px-8 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              <div className="lg:col-span-3">
                <p className="text-[10px] tracking-[0.35em] uppercase text-[#64748B] lg:sticky top-24">
                  Past Appearances
                </p>
              </div>
              <div className="lg:col-span-9">
                <h2 className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-bold text-[#0A0A0A] mb-10">
                  Selected appearances and presentations.
                </h2>
                <div className="divide-y divide-[#E2E8F0]">
                  {appearances.map((a) => (
                    <div key={a.event} className="py-6 grid grid-cols-1 sm:grid-cols-12 gap-x-8 gap-y-1">
                      <div className="sm:col-span-3">
                        <p className="text-xs text-[#64748B]">{a.year}</p>
                      </div>
                      <div className="sm:col-span-5">
                        <p className="font-semibold text-[#0A0A0A] text-sm">{a.event}</p>
                      </div>
                      <div className="sm:col-span-4">
                        <p className="text-[#475569] text-sm">{a.topic}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="bg-[#F8F7F4] py-24 px-8 md:px-12 border-t border-[#E2E8F0]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
              <div className="lg:col-span-3">
                <p className="text-[10px] tracking-[0.35em] uppercase text-[#64748B] lg:sticky top-24">
                  Speaking FAQ
                </p>
              </div>
              <div className="lg:col-span-9">
                <h2 className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-bold text-[#0A0A0A]">
                  Common Questions
                </h2>
                <p className="text-[#64748B] text-sm mt-3 max-w-lg">
                  Questions event organizers and conference programmers typically ask.
                </p>
              </div>
            </div>

            <div className="divide-y divide-[#E2E8F0]">
              {faqs.map((faq, i) => (
                <div key={i} className="py-10 grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-3">
                  <div className="lg:col-span-5">
                    <h3 className="font-display text-lg font-semibold text-[#0A0A0A] leading-snug">
                      {faq.q}
                    </h3>
                  </div>
                  <div className="lg:col-span-7">
                    <p className="text-[#475569] text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── BOOKING CTA ── */}
        <section id="book" className="bg-[#060606] border-t border-white/10 py-24 px-8 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <p className="text-[10px] tracking-[0.35em] uppercase text-[#475569] mb-6">Book Zachary to Speak</p>
                <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold text-white mb-6">
                  Bring an operator&rsquo;s perspective to your next event.
                </h2>
                <p className="text-white/55 text-sm leading-relaxed max-w-xl">
                  To inquire about speaking availability, share your event date, format, expected audience, and the session topic or challenge you want addressed. Session topics can be tailored to your audience, format and duration.
                </p>
              </div>
              <div className="lg:col-span-5 lg:text-right">
                <a
                  href="https://linkedin.com/in/zacharyleifer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white text-[#0A0A0A] px-10 py-5 text-xs tracking-[0.18em] uppercase font-semibold hover:bg-white/90 transition-all duration-200"
                >
                  Message on LinkedIn →
                </a>
                <p className="text-white/30 text-xs mt-4">
                  or email:{' '}
                  <a href={SPEAKING_MAILTO} className="text-white/50 hover:text-white transition-colors">
                    zacharyleifer@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
