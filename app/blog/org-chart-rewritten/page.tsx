import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'The Org Chart Is Being Rewritten. Is Your Company Ready? | Zachary Leifer',
  description:
    'AI is dismantling the traditional management pyramid. The question is not whether your org chart will change — it is whether you will redesign it intentionally or let the disruption happen to you.',
  authors: [{ name: 'Zachary Leifer', url: 'https://zacharyleifer.com' }],
  alternates: { canonical: 'https://zacharyleifer.com/blog/org-chart-rewritten' },
  openGraph: {
    type: 'article',
    title: 'The Org Chart Is Being Rewritten. Is Your Company Ready?',
    description:
      'AI is dismantling the traditional management pyramid. The question is not whether your org chart will change — it is whether you will redesign it intentionally.',
    url: 'https://zacharyleifer.com/blog/org-chart-rewritten',
    authors: ['Zachary Leifer'],
    publishedTime: '2026-05-07',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'The Org Chart Is Being Rewritten. Is Your Company Ready?',
  author: {
    '@type': 'Person',
    name: 'Zachary Leifer',
    url: 'https://zacharyleifer.com',
  },
  datePublished: '2026-05-07',
  url: 'https://zacharyleifer.com/blog/org-chart-rewritten',
  description:
    'AI is dismantling the traditional management pyramid. The question is not whether your org chart will change — it is whether you will redesign it intentionally or let the disruption happen to you.',
  publisher: {
    '@type': 'Person',
    name: 'Zachary Leifer',
    url: 'https://zacharyleifer.com',
  },
};

export default function OrgChartArticle() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Nav />
      <main className="bg-[#F8F7F4] min-h-screen">
        <article className="max-w-3xl mx-auto px-8 md:px-12 py-24">

          {/* Breadcrumb */}
          <p className="text-[10px] tracking-[0.35em] uppercase text-[#64748B] mb-10">
            <a href="/" className="hover:text-[#0A0A0A] transition-colors">Zachary Leifer</a>
            <span className="mx-2">·</span>
            <a href="/#insights" className="hover:text-[#0A0A0A] transition-colors">Insights</a>
          </p>

          {/* Header */}
          <header className="mb-16">
            <span className="inline-block text-[9px] tracking-[0.3em] uppercase text-[#3B5998] mb-5">Article</span>
            <h1 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold text-[#0A0A0A] leading-tight mb-6">
              The Org Chart Is Being Rewritten. Is Your Company Ready?
            </h1>
            <div className="flex items-center gap-4 text-sm text-[#64748B]">
              <span>Zachary Leifer</span>
              <span>·</span>
              <time dateTime="2026-05-07">May 7, 2026</time>
              <span>·</span>
              <a
                href="https://www.linkedin.com/pulse/org-chart-being-rewritten-your-company-ready-zachary-leifer-dxgye"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#0A0A0A] transition-colors"
              >
                Originally published on LinkedIn →
              </a>
            </div>
          </header>

          {/* Body */}
          <div className="prose prose-slate max-w-none text-[#334155] leading-[1.9] text-base space-y-6">

            <p className="text-xl text-[#1A1A1A] leading-relaxed font-light">
              The traditional pyramid organizational structure has dominated business for nearly a century. AI is fundamentally challenging that model. The question is not whether your org chart will change — it is whether you will redesign it intentionally or let the disruption happen to you.
            </p>

            <p>
              Most organizations are still approaching AI the way they approached every prior technology wave: as a tool to bolt onto existing structures. Add an AI layer here. Automate a process there. Keep the hierarchy intact and see what sticks. That approach will not be enough.
            </p>

            <h2 className="font-display text-2xl font-bold text-[#0A0A0A] mt-12 mb-4">
              Why the Pyramid Was Built the Way It Was
            </h2>

            <p>
              The traditional management pyramid was not designed around people. It was designed around information. Information was slow, expensive to move, and unevenly distributed. Middle management existed to route it — to gather data from the front lines, synthesize it, and pass decisions back down. The wider the base, the more information nodes you needed.
            </p>

            <p>
              AI eliminates that constraint. It can gather, synthesize, and present information faster and more consistently than any layer of human middle management. The processes that justified the pyramid structure are being automated. The org chart built around those processes is no longer the most efficient shape.
            </p>

            <h2 className="font-display text-2xl font-bold text-[#0A0A0A] mt-12 mb-4">
              The Diamond Is Replacing the Pyramid
            </h2>

            <p>
              Researchers are increasingly describing what comes next as a diamond structure: fewer entry-level generalists at the base, a stronger middle tier of experienced workers who can direct and oversee AI-enabled systems, and a slimmer but still essential leadership layer at the top.
            </p>

            <p>
              This is not a story about mass layoffs, though in some cases that will happen. It is a story about what kind of work gets valued. The work that gets done by following a process becomes automated. The work that requires judgment, priority-setting, ambiguity resolution, and coaching becomes more valuable — not less.
            </p>

            <p>
              The middle of the organization does not disappear. It evolves. The managers who survive and thrive are those who can work with AI systems rather than being replaced by them. They set direction. They validate outputs. They identify where the model is wrong. They understand the business well enough to ask the right questions.
            </p>

            <h2 className="font-display text-2xl font-bold text-[#0A0A0A] mt-12 mb-4">
              The Risk No One Is Talking About
            </h2>

            <p>
              There is a leadership pipeline problem hidden inside this transformation that most executives are not seeing yet.
            </p>

            <p>
              Entry-level roles have historically been the training ground for future leaders. Junior analysts learn to think by doing the analysis. Junior account managers learn client relationships by managing small ones. When AI automates the entry-level work, we risk eliminating the developmental path through which leaders learn judgment, organizational context, and business fundamentals.
            </p>

            <p>
              You cannot develop a great senior leader in a company where junior employees never had to wrestle with messy data, ambiguous instructions, or a dissatisfied customer. The experiences that build judgment are embedded in the work we are now automating.
            </p>

            <p>
              Companies that think carefully about this now will design talent pipelines that preserve the developmental value of early-career experience even as the task content of those roles changes. Companies that do not will find themselves, five years from now, with AI systems that run efficiently and a leadership bench with no one who knows how to lead anything that does not run on a model.
            </p>

            <h2 className="font-display text-2xl font-bold text-[#0A0A0A] mt-12 mb-4">
              Three Questions Every Leadership Team Should Be Asking
            </h2>

            <p>Before your next strategic planning cycle, ask your organization:</p>

            <ol className="list-decimal pl-6 space-y-3">
              <li>
                <strong>How many of your core processes predate AI and have never been questioned?</strong> Not just automated — genuinely interrogated. Does the process exist because it creates value, or because it was the best way to do something before AI existed?
              </li>
              <li>
                <strong>Does your technology infrastructure allow AI to work across organizational silos?</strong> AI is most powerful when it can see the whole system. Fragmented data, disconnected platforms, and siloed teams limit what AI can do more than any algorithm constraint.
              </li>
              <li>
                <strong>Does your leadership team have the knowledge to guide this transformation?</strong> Not just to authorize it. To ask the right questions, evaluate the tradeoffs, and make decisions that require business judgment, not technical expertise.
              </li>
            </ol>

            <h2 className="font-display text-2xl font-bold text-[#0A0A0A] mt-12 mb-4">
              Organizational Design Is Strategy
            </h2>

            <p>
              The org chart is not just a reporting structure. It is a reflection of how your company believes value gets created.
            </p>

            <p>
              For a century, value was created through coordination, information routing, and process execution. The org chart reflected that. AI is shifting where value comes from — toward judgment, design, and the ability to direct and improve systems that do the execution work.
            </p>

            <p>
              The companies that will lead the next decade are the ones that treat organizational design as a strategic activity, not an administrative one. They will redesign how work gets done, not just what tools get used. They will retrain managers for the AI-enabled world, not just retool individual employees. And they will build the leadership pipelines now that their organizations will depend on later.
            </p>

            <p>
              The org chart is being rewritten. The question is whether you are the author or the audience.
            </p>

          </div>

          {/* Footer CTA */}
          <div className="mt-20 pt-12 border-t border-[#E2E8F0]">
            <p className="text-[10px] tracking-[0.35em] uppercase text-[#64748B] mb-4">About the Author</p>
            <p className="text-[#475569] text-sm leading-relaxed max-w-xl mb-6">
              Zachary Leifer is a Las Vegas-based commercial growth executive, former CMO, CCO, and GM with experience across gaming, hospitality, AI, and digital transformation. He is open to board, advisory, and senior operating roles.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/"
                className="text-xs tracking-[0.2em] uppercase text-[#475569] hover:text-[#0A0A0A] transition-colors border-b border-[#475569]/40 hover:border-[#0A0A0A] pb-0.5"
              >
                ← Full Profile
              </a>
              <a
                href="https://linkedin.com/in/zacharyleifer"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs tracking-[0.2em] uppercase text-[#475569] hover:text-[#0A0A0A] transition-colors border-b border-[#475569]/40 hover:border-[#0A0A0A] pb-0.5"
              >
                Connect on LinkedIn →
              </a>
            </div>
          </div>

        </article>
      </main>
      <Footer />
    </>
  );
}
