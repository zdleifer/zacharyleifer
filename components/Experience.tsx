'use client';

import { useReveal } from '@/components/useReveal';
import experience from '@/data/experience.json';

type Role = {
  company: string;
  parent: string;
  companyDescription: string;
  title: string;
  years: string;
  location: string;
  highlights: string[];
  group?: string;
  scale?: string;
};

type Block =
  | { type: 'single'; role: Role }
  | { type: 'group'; group: string; roles: Role[] };

function buildBlocks(roles: Role[]): Block[] {
  const blocks: Block[] = [];
  roles.forEach((role) => {
    if (role.group) {
      const last = blocks[blocks.length - 1];
      if (last && last.type === 'group' && last.group === role.group) {
        last.roles.push(role);
      } else {
        blocks.push({ type: 'group', group: role.group, roles: [role] });
      }
    } else {
      blocks.push({ type: 'single', role });
    }
  });
  return blocks;
}

function spanOf(roles: Role[]) {
  const start = roles[roles.length - 1].years.split('-')[0].trim();
  const endParts = roles[0].years.split('-');
  const end = (endParts[1] || endParts[0]).trim();
  const years = Number(end) - Number(start);
  return { label: `${start}–${end}`, years: isNaN(years) ? null : years };
}

// "2014 - 2017" in data renders as "2014–2017" (en dash, no spaces).
function formatYears(years: string) {
  return years.replace(/\s*-\s*/g, '–');
}

// "Director → Executive Director" renders the arrow visually but reads as "to".
function RoleTitle({ title }: { title: string }) {
  const parts = title.split('→').map((p) => p.trim());
  return (
    <>
      {parts.map((p, i) => (
        <span key={i}>
          {i > 0 && (
            <>
              <span aria-hidden="true"> → </span>
              <span className="sr-only"> to </span>
            </>
          )}
          {p}
        </span>
      ))}
    </>
  );
}

function Highlights({ items }: { items: string[] }) {
  if (!items.length) return null;
  return (
    <ul className="space-y-2 mt-4">
      {items.map((h, j) => (
        <li key={j} className="text-sm text-[#475569] flex items-start gap-3">
          <span aria-hidden="true" className="text-[#94A3B8] mt-1.5 flex-shrink-0 text-[8px]">●</span>
          <span>{h}</span>
        </li>
      ))}
    </ul>
  );
}

export default function Experience() {
  const ref = useReveal<HTMLElement>();

  const blocks = buildBlocks(experience as Role[]);

  return (
    <section id="experience" ref={ref} className="bg-[#F8F7F4] py-28 px-8 md:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <div className="flex items-end justify-between mb-20 reveal">
          <div>
            <p className="text-[10px] tracking-[0.35em] uppercase text-[#475569] mb-4">Career</p>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold text-[#0A0A0A]">
              Experience
            </h2>
          </div>
          <a
            href="https://linkedin.com/in/zacharyleifer"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex text-xs tracking-widest uppercase text-[#475569] hover:text-[#0A0A0A] transition-colors border-b border-[#475569]/40 hover:border-[#0A0A0A] pb-0.5"
          >
            Full Profile <span aria-hidden="true">→</span>
          </a>
        </div>

        {/* Roles */}
        <div className="space-y-0 divide-y divide-[#E2E8F0]">
          {blocks.map((block, i) => {
            if (block.type === 'single') {
              const role = block.role;
              return (
                <div
                  key={i}
                  className={`py-12 grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-4 reveal reveal-delay-${Math.min(i + 1, 4)}`}
                >
                  <div className="lg:col-span-2">
                    <div className="text-sm font-medium text-[#475569] tracking-wide">{formatYears(role.years)}</div>
                    <div className="text-xs text-[#475569] mt-1">{role.location}</div>
                  </div>
                  <div className="lg:col-span-10">
                    <h3 className="font-display text-xl font-semibold text-[#0A0A0A]"><RoleTitle title={role.title} /></h3>
                    <div className="flex flex-wrap items-center gap-2 mt-1">
                      <span className="text-[#0A0A0A] font-medium text-sm">{role.company}</span>
                      <span aria-hidden="true" className="text-[#94A3B8] text-sm">·</span>
                      <span className="text-[#475569] text-xs">{role.parent}</span>
                    </div>
                    <p className="text-[#475569] text-xs italic mt-3 leading-relaxed max-w-3xl">
                      {role.companyDescription}
                    </p>
                    <Highlights items={role.highlights} />
                  </div>
                </div>
              );
            }

            // Grouped employer (e.g., Las Vegas Sands across multiple roles)
            const { roles, group } = block;
            const span = spanOf(roles);
            const scale =
              roles.find((r) => /Fortune|NYSE/.test(r.parent))?.parent || roles[0].parent;
            return (
              <div
                key={i}
                className={`py-12 grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-4 reveal reveal-delay-${Math.min(i + 1, 4)}`}
              >
                <div className="lg:col-span-2">
                  <div className="text-sm font-medium text-[#475569] tracking-wide">{span.label}</div>
                  <div className="text-xs text-[#475569] mt-1">{roles[0].location}</div>
                </div>
                <div className="lg:col-span-10">
                  {/* Single employer header */}
                  <h3 className="font-display text-xl font-semibold text-[#0A0A0A]">{group}</h3>
                  <p className="text-[#475569] text-xs mt-1">{scale}</p>
                  <p className="text-[#475569] text-sm mt-2">
                    Recruited and promoted through {roles.reduce((n, r) => n + r.title.split('→').length, 0)} roles
                    {span.years ? ` over ${span.years} years` : ''}, from digital marketing leadership
                    into the executive ranks.
                  </p>

                  {/* Nested roles on a timeline rail */}
                  <div className="mt-8 border-l border-[#CBD5E1] pl-6 md:pl-8 space-y-9">
                    {roles.map((role, j) => (
                      <div key={j} className="relative">
                        <span aria-hidden="true" className="absolute -left-[1.95rem] md:-left-[2.45rem] top-1.5 w-2.5 h-2.5 rounded-full bg-[#3B5998] ring-4 ring-[#F8F7F4]" />
                        <h4 className="font-display text-lg font-semibold text-[#0A0A0A] leading-snug">
                          <RoleTitle title={role.title} />
                        </h4>
                        <div className="flex flex-wrap items-center gap-2 mt-1">
                          <span className="text-[#475569] text-sm">{role.company}</span>
                          {role.scale && (
                            <>
                              <span aria-hidden="true" className="text-[#94A3B8] text-sm">·</span>
                              <span className="text-[#475569] text-xs">{role.scale}</span>
                            </>
                          )}
                          <span aria-hidden="true" className="text-[#94A3B8] text-sm">·</span>
                          <span className="text-[#475569] text-xs">{formatYears(role.years)}</span>
                        </div>
                        <Highlights items={role.highlights} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
