import fs from 'fs';
import path from 'path';

// Verbatim excerpts from LinkedIn recommendations, rendered as plain quotes (no Review markup).
// Select only, never edit: "…" marks skipped whole sentences. Source: Recommendations_Received.csv.

type PageQuote = {
  quote: string;
  name: string;
  title: string;
  context: string;
  image?: string;
};

const slugify = (name: string) =>
  name
    .split(',')[0]
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

const initialsOf = (name: string) =>
  name
    .split(',')[0]
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

// A photo saved as public/images/testimonials/<first-last>.jpg is picked up at build time.
function photoFor(q: PageQuote) {
  if (q.image) return q.image;
  const file = `${slugify(q.name)}.jpg`;
  const onDisk = path.join(process.cwd(), 'public', 'images', 'testimonials', file);
  return fs.existsSync(onDisk) ? `/images/testimonials/${file}` : null;
}

export default function PageQuotes({ heading, quotes }: { heading: string; quotes: PageQuote[] }) {
  return (
    <section className="mt-16">
      <h2 className="font-display text-2xl font-bold text-[#0A0A0A] mb-6">{heading}</h2>
      <div className="space-y-6">
        {quotes.map((q) => {
          const photo = photoFor(q);
          return (
            <figure key={q.name} className="border-l-2 border-[#3B5998] bg-white p-6 md:p-8">
              <blockquote className="text-[#334155] text-base leading-[1.8] italic">
                <p>&ldquo;{q.quote}&rdquo;</p>
              </blockquote>
              <figcaption className="mt-5 flex items-start gap-4">
                {photo ? (
                  <img
                    src={photo}
                    alt=""
                    width={96}
                    height={96}
                    loading="lazy"
                    decoding="async"
                    className="w-12 h-12 rounded-full object-cover flex-shrink-0 ring-1 ring-[#0A0A0A]/10"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full flex-shrink-0 ring-1 ring-[#0A0A0A]/10 bg-[#EEF2F8] flex items-center justify-center">
                    <span className="font-display text-[#3B5998] text-sm font-semibold tracking-wide select-none">
                      {initialsOf(q.name)}
                    </span>
                  </div>
                )}
                <div>
                  <span className="block font-semibold text-[#0A0A0A] text-sm">{q.name}</span>
                  <span className="block text-[#475569] text-xs mt-0.5">{q.title}</span>
                  <span className="block text-[#475569] text-[10px] mt-1 tracking-wide uppercase">{q.context}</span>
                </div>
              </figcaption>
            </figure>
          );
        })}
      </div>
      <p className="text-xs text-[#475569] mt-4">Excerpts from LinkedIn recommendations.</p>
    </section>
  );
}
