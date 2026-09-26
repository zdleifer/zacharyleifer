import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import speakingFaqs from '@/data/speaking-faqs.json';
import { OG_IMAGE } from '@/data/og-image';
import SpeakingInquiryForm from '@/components/SpeakingInquiryForm';

const SPEAKER_IMAGE_ALT =
  'Zachary Leifer, speaker on AI strategy, digital transformation and commercial growth, Las Vegas';

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
    images: [{ ...OG_IMAGE, alt: SPEAKER_IMAGE_ALT }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zachary Leifer | AI & Growth Speaker | Las Vegas',
    description: 'Zachary Leifer speaks on AI Strategy, AI Investment Governance, customer data and commercial growth. Keynotes, panels and executive sessions from Las Vegas.',
    images: [{ url: OG_IMAGE.url, alt: SPEAKER_IMAGE_ALT }],
  },
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://zacharyleifer.com/speaking/',
  name: 'Zachary Leifer, Speaker',
  url: 'https://zacharyleifer.com/speaking/',
  isPartOf: { '@id': 'https://zacharyleifer.com/#website' },
  description:
    'Zachary Leifer speaks on AI strategy, AI investment governance, customer data, commercial growth and digital transformation. Keynotes, executive panels and board sessions from Las Vegas, Nevada.',
  dateModified: '2026-09-26',
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
    subtitle: 'Creating More Predictable Value from Data, Technology and AI Investment',
    abstractParagraphs: [
      'Most organizations do not struggle to find technology ideas. They struggle to turn investment into measurable commercial value.',
      'In this practical executive session, Zachary Leifer explains why AI, data, digital and technology initiatives often stall after approval, and what leaders can do differently before committing significant capital. Drawing on research with senior executives and experience leading commercial growth and corporate technology functions, he provides a disciplined approach to defining the business objective, diagnosing organizational readiness, funding discovery, establishing accountable ownership and measuring proof of value.',
      'Attendees leave with a practical framework for identifying where technology can create value, recognizing the organizational conditions that put initiatives at risk, and holding transformation investments accountable to revenue, EBITDA, customer economics and enterprise value.',
    ],
    outcomes: [
      'Define the commercial or enterprise outcome before selecting a technology solution.',
      'Identify the ownership, incentives, operating-model and readiness conditions that determine whether an initiative can be adopted.',
      'Distinguish a proof of concept from a proof of value and establish the measures that will verify the result.',
    ],
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

// Linkifies a bare domain/path substring in FAQ answer text for display only.
// The underlying faq.a string (used for the FAQPage JSON-LD) stays plain text,
// so the schema answer and visible text remain word-for-word identical.
function linkifyDomain(text: string, domainPath: string, href: string) {
  const i = text.indexOf(domainPath);
  if (i === -1) return text;
  return (
    <>
      {text.slice(0, i)}
      <a href={href} target="_blank" rel="noopener noreferrer" className="text-[#3B5998] hover:text-[#0A0A0A] transition-colors">
        {domainPath}
      </a>
      {text.slice(i + domainPath.length)}
    </>
  );
}

// Newest first. The HBS row is a participant presentation, not an invited engagement.
const appearances = [
  { event: 'Harvard Business School Advanced Management Program', topic: 'Leadership Impact Project presentation to the AMP cohort', year: '2026' },
  { event: 'NC Labs Podcast', topic: 'Awesome in Action', year: '2021', href: 'https://open.spotify.com/episode/4xHYHVFm9V7GcMO1Si4sl7' },
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
            <p className="text-[10px] tracking-[0.35em] uppercase text-[#94A3B8] mb-10">
              <a href="/" className="hover:text-white/60 transition-colors">Zachary Leifer</a>
              <span aria-hidden="true" className="mx-2">·</span>
              Speaking
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-8">
                <p className="text-[10px] tracking-[0.35em] uppercase text-[#7B96CC] mb-6">Speaking</p>
                <h1 className="font-display text-[clamp(1.8rem,3.5vw,3rem)] font-bold text-white leading-tight mb-8">
                  Zachary Leifer speaks on AI strategy, customer data, commercial growth, enterprise transformation, organizational readiness, and the operating models that connect technology investment to measurable business results.
                </h1>
                <p className="text-white/55 text-sm leading-relaxed max-w-2xl mb-10">
                  A commercial growth and transformation executive, he has served as Chief Marketing Officer of 1/ST Technology, Chief Commercial Officer of PokerAtlas, and Vice President of Corporate Information Technology at Las Vegas Sands. He is available for keynotes, executive panels, leadership roundtables, board sessions, workshops, virtual events and podcasts. Based in Las Vegas, Nevada, he travels nationally and internationally.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://www.linkedin.com/in/zacharyleifer/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-white text-[#0A0A0A] px-8 py-4 text-xs tracking-[0.18em] uppercase font-semibold hover:bg-white/90 transition-all duration-200"
                  >
                    Message on LinkedIn <span aria-hidden="true">→</span>
                  </a>
                  <a
                    href="#talks"
                    className="inline-flex items-center gap-3 border border-white/20 text-white/60 hover:text-white hover:border-white/50 px-8 py-4 text-xs tracking-[0.18em] uppercase font-medium transition-all duration-200"
                  >
                    Topics <span aria-hidden="true">→</span>
                  </a>
                  <a
                    href="/downloads/zachary-leifer-speaker-sheet.pdf"
                    className="inline-flex items-center gap-3 border border-white/20 text-white/60 hover:text-white hover:border-white/50 px-8 py-4 text-xs tracking-[0.18em] uppercase font-medium transition-all duration-200"
                    data-ga-event="speaker_sheet_download"
                    data-ga-label="Speaking page hero"
                  >
                    Download Speaker Sheet <span aria-hidden="true">↓</span>
                  </a>
                </div>
                <p className="text-white/60 text-xs mt-5">
                  Or email directly:{' '}
                  <a href={SPEAKING_MAILTO} className="text-white/50 hover:text-white transition-colors">
                    zacharyleifer@gmail.com
                  </a>
                </p>
              </div>

              <div className="hidden lg:block lg:col-span-4">
                <div className="border border-white/10 p-8 space-y-6">
                  <p className="text-[10px] tracking-[0.35em] uppercase text-[#94A3B8]">Format</p>
                  <ul className="space-y-2 text-white/60 text-sm">
                    {['Keynote', 'Executive Panel', 'Leadership Roundtable', 'Board Session', 'Workshop', 'Virtual Event', 'Podcast'].map((f) => (
                      <li key={f} className="flex items-center gap-3">
                        <span aria-hidden="true" className="w-1 h-1 rounded-full bg-[#3B5998] flex-shrink-0" />
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
                    <p className="text-[10px] tracking-[0.35em] uppercase text-[#94A3B8] mb-2">Location</p>
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
                  <p className="text-[10px] tracking-[0.35em] uppercase text-[#475569]">
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
                      alt="Zachary Leifer standing at a Harvard Business School lectern"
                      className="w-full h-auto block"
                    />
                    <figcaption className="text-[#475569] text-xs mt-3">
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
                  Zachary Leifer is a commercial growth and transformation executive who connects AI, digital, data, and technology investments to revenue, EBITDA, and enterprise value. He has served as Vice President, Corporate Information Technology at Las Vegas Sands, Chief Marketing Officer of 1/ST Technology and Chief Commercial Officer of PokerAtlas.
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
                  His Harvard Business School AMP capstone research (the{' '}
                  <a href="/blog/why-data-transformations-fail/" className="text-[#3B5998] hover:text-[#0A0A0A] transition-colors">
                    Leadership Impact Project
                  </a>), completed in 2026, examined the organizational conditions supporting value creation from data and transformation. He advises and speaks on commercial growth, digital transformation, AI strategy and AI value realization, connecting investment to accountable ownership and measurable outcomes. Based in Las Vegas, he welcomes{' '}
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
                      <p className="text-[#475569] text-xs leading-snug">{item.label}</p>
                    </div>
                  ))}
                </div>

                {/* 52-word program bio. Recount if edited. */}
                <div className="mt-12 border border-[#E2E8F0] bg-white p-8">
                  <h3 className="text-[10px] tracking-[0.35em] uppercase text-[#475569] mb-4">
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
                <p className="text-[10px] tracking-[0.35em] uppercase text-[#94A3B8] lg:sticky top-24">
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
                    <p aria-hidden="true" className="font-display text-5xl font-bold text-white/10 leading-none">{talk.number}</p>
                    <p className="text-[9px] tracking-[0.3em] uppercase text-[#7B96CC] mt-3">{talk.category}</p>
                  </div>
                  <div className="lg:col-span-9">
                    <h3 className="font-display text-xl font-semibold text-white leading-snug mb-2">
                      {talk.title}
                    </h3>
                    {talk.subtitle && (
                      <p className="text-[#7B96CC] text-sm font-medium mb-4">{talk.subtitle}</p>
                    )}
                    {talk.abstractParagraphs ? (
                      <div className="space-y-4 mb-6">
                        {talk.abstractParagraphs.map((p, i) => (
                          <p key={i} className="text-white/55 text-sm leading-relaxed">{p}</p>
                        ))}
                      </div>
                    ) : (
                      <p className="text-white/55 text-sm leading-relaxed mb-6">{talk.abstract}</p>
                    )}
                    {talk.outcomes && (
                      <div className="mb-6">
                        <p className="text-[9px] tracking-[0.25em] uppercase text-[#94A3B8] mb-3">Attendees will be able to:</p>
                        <ul className="space-y-2">
                          {talk.outcomes.map((o) => (
                            <li key={o} className="flex gap-3 text-white/55 text-sm leading-relaxed">
                              <span aria-hidden="true" className="text-[#7B96CC] mt-1 flex-shrink-0">&bull;</span>
                              <span>{o}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <div className="flex flex-wrap gap-2">
                      <span className="text-[9px] tracking-[0.25em] uppercase text-[#94A3B8] mr-1 self-center">Best for:</span>
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
              <p className="text-white/60 text-sm mb-4">All talks are customizable for your audience, format and duration.</p>
              <a
                href="https://www.linkedin.com/in/zacharyleifer/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 border border-white/20 text-white/60 hover:text-white hover:border-white/50 px-8 py-4 text-xs tracking-[0.18em] uppercase font-medium transition-all duration-200"
              >
                Get in Touch <span aria-hidden="true">→</span>
              </a>
              <p className="mt-6 text-sm">
                <a
                  href="https://www.somstrategies.com/executive-speaking-workshops/"
                  className="text-white/60 underline underline-offset-4 decoration-white/25 hover:text-white transition-colors"
                >
                  Explore executive speaking and leadership workshops for organizations.
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* ── PAST APPEARANCES ── */}
        <section className="bg-[#F8F7F4] py-24 px-8 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              <div className="lg:col-span-3">
                <p className="text-[10px] tracking-[0.35em] uppercase text-[#475569] lg:sticky top-24">
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
                        <p className="text-xs text-[#475569]">{a.year}</p>
                      </div>
                      <div className="sm:col-span-5">
                        <p className="font-semibold text-[#0A0A0A] text-sm">{a.event}</p>
                      </div>
                      <div className="sm:col-span-4">
                        <p className="text-[#475569] text-sm">
                          {a.href ? (
                            <a
                              href={a.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#3B5998] hover:text-[#0A0A0A] transition-colors"
                            >
                              {a.topic}
                            </a>
                          ) : (
                            a.topic
                          )}
                        </p>
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
                <p className="text-[10px] tracking-[0.35em] uppercase text-[#475569] lg:sticky top-24">
                  Speaking FAQ
                </p>
              </div>
              <div className="lg:col-span-9">
                <h2 className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-bold text-[#0A0A0A]">
                  Common Questions
                </h2>
                <p className="text-[#475569] text-sm mt-3 max-w-lg">
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
                    <p className="text-[#475569] text-sm leading-relaxed">
                      {linkifyDomain(faq.a, 'somstrategies.com/executive-speaking-workshops/', 'https://www.somstrategies.com/executive-speaking-workshops/')}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PODCASTS & MEDIA ── */}
        <section id="podcasts-media" className="bg-[#0B0F1A] border-t border-white/10 py-24 px-8 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-16">
              <div className="lg:col-span-3">
                <p className="text-[10px] tracking-[0.35em] uppercase text-[#94A3B8] lg:sticky top-24">
                  Podcasts &amp; Media
                </p>
              </div>
              <div className="lg:col-span-9">
                <h2 className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-bold text-white mb-6">
                  Podcasts &amp; Media
                </h2>
                <p className="text-white/55 text-sm leading-relaxed max-w-2xl mb-10">
                  Zachary Leifer is available for podcast interviews, executive roundtables, and
                  media conversations on commercial growth, technology investment, AI value
                  creation, digital transformation, customer economics, and the organizational
                  conditions required to turn investment into measurable business value.
                </p>

                <p className="text-[10px] tracking-[0.3em] uppercase text-[#7B96CC] mb-4">
                  Suggested Conversations
                </p>
                <ul className="space-y-2 mb-12">
                  {[
                    'Why AI is not a strategy',
                    'How CEOs and boards should evaluate AI and technology investment',
                    'Proof of concept versus proof of value',
                    'Building the operating model required for transformation',
                    'Turning customer data, technology, and AI into commercial growth',
                  ].map((topic) => (
                    <li key={topic} className="flex gap-3 text-white/70 text-sm leading-relaxed">
                      <span aria-hidden="true" className="text-[#7B96CC] mt-1 flex-shrink-0">&bull;</span>
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>

                <div className="border border-white/10 bg-white/5 p-8">
                  <p className="text-[10px] tracking-[0.3em] uppercase text-[#94A3B8] mb-3">
                    For Podcast Hosts and Media Inquiries
                  </p>
                  <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-xl">
                    Looking for an executive perspective on how to turn AI, data, technology, and
                    digital transformation into measurable business value?
                  </p>
                  <a
                    href="/speaking/?inquiry=podcast#book"
                    className="inline-flex items-center gap-3 bg-white text-[#0A0A0A] px-8 py-4 text-xs tracking-[0.18em] uppercase font-semibold hover:bg-white/90 transition-all duration-200"
                    data-ga-event="podcast_media_cta_click"
                    data-ga-label="Book Zachary for a Podcast or Media Conversation"
                  >
                    Book Zachary for a Podcast or Media Conversation
                  </a>
                  <p className="mt-4">
                    <a
                      href="/downloads/zachary-leifer-speaker-sheet.pdf"
                      className="text-white/50 hover:text-white text-xs underline underline-offset-2 transition-colors"
                      data-ga-event="speaker_sheet_download"
                      data-ga-label="Podcasts and media section"
                    >
                      Download Speaker Sheet
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── BOOKING CTA ── */}
        <section id="book" className="bg-[#060606] border-t border-white/10 py-24 px-8 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <p className="text-[10px] tracking-[0.35em] uppercase text-[#94A3B8] mb-6">Book Zachary to Speak</p>
                <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold text-white mb-6">
                  Bring an operator&rsquo;s perspective to your next event.
                </h2>
                <p className="text-white/55 text-sm leading-relaxed max-w-xl">
                  To inquire about speaking availability, share your event date, format, expected audience, and the session topic or challenge you want addressed. Session topics can be tailored to your audience, format and duration.
                </p>
              </div>
              <div className="lg:col-span-5 lg:text-right">
                <a
                  href="https://www.linkedin.com/in/zacharyleifer/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white text-[#0A0A0A] px-10 py-5 text-xs tracking-[0.18em] uppercase font-semibold hover:bg-white/90 transition-all duration-200"
                >
                  Message on LinkedIn <span aria-hidden="true">→</span>
                </a>
                <p className="text-white/60 text-xs mt-4">
                  or email:{' '}
                  <a href={SPEAKING_MAILTO} className="text-white/50 hover:text-white transition-colors">
                    zacharyleifer@gmail.com
                  </a>
                </p>
              </div>
            </div>

            <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-4">
                <p className="text-[10px] tracking-[0.35em] uppercase text-[#94A3B8] mb-4">Request Availability</p>
                <p className="text-white/55 text-sm leading-relaxed mb-4">
                  Share your event details and Zachary will follow up directly. Prefer email? Use
                  the address above instead.
                </p>
                <a
                  href="/downloads/zachary-leifer-speaker-sheet.pdf"
                  className="inline-flex items-center gap-3 border border-white/20 text-white/70 hover:text-white hover:border-white/50 px-6 py-3 text-xs tracking-[0.18em] uppercase font-medium transition-all duration-200"
                  data-ga-event="speaker_sheet_download"
                  data-ga-label="Speaking page"
                >
                  Download Speaker Sheet <span aria-hidden="true">↓</span>
                </a>
              </div>
              <div className="lg:col-span-8">
                <SpeakingInquiryForm />
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />

      <div
        id="sticky-book-cta"
        aria-hidden="true"
        className="fixed bottom-5 inset-x-5 sm:inset-x-auto sm:right-6 sm:bottom-6 z-40 opacity-0 pointer-events-none translate-y-3 transition-all duration-300 [&.is-visible]:opacity-100 [&.is-visible]:pointer-events-auto [&.is-visible]:translate-y-0"
      >
        <a
          href="#book"
          data-ga-event="speaking_sticky_cta_click"
          data-ga-label="Sticky get in touch CTA"
          className="flex items-center justify-center gap-2 bg-white text-[#0A0A0A] px-6 py-4 text-xs tracking-[0.15em] uppercase font-semibold shadow-[0_8px_30px_rgba(0,0,0,0.35)] hover:bg-white/90 transition-colors"
        >
          Get in Touch <span aria-hidden="true">→</span>
        </a>
      </div>

      <script
        dangerouslySetInnerHTML={{
          __html: `document.addEventListener('click', function (e) {
            var t = e.target.closest('[data-ga-event]');
            if (!t) return;
            if (typeof window.gtag !== 'function') return;
            window.gtag('event', t.getAttribute('data-ga-event'), { link_label: t.getAttribute('data-ga-label') || t.textContent.trim() });
          });

          // Sticky "Get in Touch" CTA: show once the reader has scrolled past the
          // hero, hide while the actual booking section is on screen so it never
          // covers the form.
          (function () {
            var sticky = document.getElementById('sticky-book-cta');
            var bookSection = document.getElementById('book');
            if (!sticky || !bookSection) return;
            var bookVisible = false;
            var setVisible = function (visible) {
              sticky.classList.toggle('is-visible', visible);
              if (visible) sticky.removeAttribute('aria-hidden');
              else sticky.setAttribute('aria-hidden', 'true');
            };
            var update = function () {
              setVisible(window.scrollY > 700 && !bookVisible);
            };
            if ('IntersectionObserver' in window) {
              new IntersectionObserver(function (entries) {
                bookVisible = entries[0].isIntersecting;
                update();
              }, { threshold: 0.15 }).observe(bookSection);
            }
            window.addEventListener('scroll', update, { passive: true });
            update();
          })();`,
        }}
      />
    </>
  );
}
