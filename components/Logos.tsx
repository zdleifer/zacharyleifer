'use client';

import { useReveal } from '@/components/useReveal';

// Per-logo height tuned to each logo's aspect ratio so they read at a
// similar optical weight (wide logos shorter, square logos taller).
// w/x are the files' intrinsic dimensions (about 2x the rendered height).
const organizations = [
  { name: 'PokerAtlas', logo: '/images/logos/pokeratlas.png', h: 'h-[19px]', w: 271, x: 38 },
  { name: '1/ST Technology', logo: '/images/logos/1st-technology-c.jpg', h: 'h-[19px]', w: 632, x: 60 },
  { name: 'Xpressbet', logo: '/images/logos/xpressbet-c.jpg', h: 'h-[34px]', w: 241, x: 68 },
  { name: 'AmTote', logo: '/images/logos/amtote-c.jpg', h: 'h-[36px]', w: 199, x: 74 },
  { name: 'Las Vegas Sands', logo: '/images/logos/sands-corp.png', h: 'h-[32px]', w: 265, x: 64 },
  { name: 'The Venetian Resort Las Vegas', logo: '/images/logos/venetian-logo.svg', h: 'h-[38px]', w: 292, x: 74 },
  { name: 'Links of London', logo: '/images/logos/links-london.png', h: 'h-[41px]', w: 199, x: 82 },
  { name: 'Yankees.com', logo: '/images/logos/yankees.png', h: 'h-[26px]', w: 278, x: 52 },
  { name: 'MLB Advanced Media', logo: '/images/logos/mlb.jpg', h: 'h-[41px]', w: 146, x: 82 },
];

export default function Logos() {
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} className="bg-[#F8F7F4] py-16 px-8 md:px-12 border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto">
        <p className="text-[10px] tracking-[0.35em] uppercase text-[#475569] mb-10 reveal">
          Career Experience
        </p>

        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-5 reveal reveal-delay-1">
          {organizations.map((org, i) => (
            <div
              key={i}
              className="bg-white rounded-lg border border-[#E2E8F0] shadow-sm h-20 px-8 flex items-center justify-center hover:shadow-md transition-shadow duration-300"
            >
              <img
                src={org.logo}
                alt={org.name}
                width={org.w}
                height={org.x}
                loading="lazy"
                decoding="async"
                className={`${org.h} w-auto max-w-full object-contain`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
