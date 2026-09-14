'use client';

import { useEffect, useRef } from 'react';

// Observes each `.reveal` element inside the returned ref individually, so very tall
// sections on short screens still reveal their content as each element scrolls in.
// Elements already above the viewport on load (anchor jumps, restored scroll) reveal too.
export function useReveal<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const targets = el.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      targets.forEach((t) => t.classList.add('visible'));
      return;
    }
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting || entry.boundingClientRect.bottom < 0) {
            entry.target.classList.add('visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: '0px 0px -10% 0px' }
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  return ref;
}
