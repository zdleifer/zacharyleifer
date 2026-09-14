// Verbatim excerpts from LinkedIn recommendations, rendered as plain quotes (no Review markup).
// Select only, never edit: "…" marks skipped whole sentences. Source: Recommendations_Received.csv.

type PageQuote = {
  quote: string;
  name: string;
  title: string;
  context: string;
};

export default function PageQuotes({ heading, quotes }: { heading: string; quotes: PageQuote[] }) {
  return (
    <section className="mt-16">
      <h2 className="font-display text-2xl font-bold text-[#0A0A0A] mb-6">{heading}</h2>
      <div className="space-y-6">
        {quotes.map((q) => (
          <figure key={q.name} className="border-l-2 border-[#3B5998] bg-white p-6 md:p-8">
            <blockquote className="text-[#334155] text-base leading-[1.8] italic">
              <p>&ldquo;{q.quote}&rdquo;</p>
            </blockquote>
            <figcaption className="mt-5">
              <span className="block font-semibold text-[#0A0A0A] text-sm">{q.name}</span>
              <span className="block text-[#64748B] text-xs mt-0.5">{q.title}</span>
              <span className="block text-[#64748B] text-[10px] mt-1 tracking-wide uppercase">{q.context}</span>
            </figcaption>
          </figure>
        ))}
      </div>
      <p className="text-xs text-[#64748B] mt-4">Excerpts from LinkedIn recommendations.</p>
    </section>
  );
}
