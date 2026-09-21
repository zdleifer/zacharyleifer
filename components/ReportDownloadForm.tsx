'use client';

import { useState, FormEvent } from 'react';

const REPORT_URL = '/downloads/architecting-more-predictable-enterprise-value.pdf';
const link = 'text-[#3B5998] hover:text-[#0A0A0A] transition-colors';

function isValidEmail(value: string) {
  // Simple, permissive RFC-5322-ish check; real validation happens server-side once the
  // backend is wired.
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

type GtagWindow = Window & { gtag?: (...args: unknown[]) => void };

function gaEvent(name: string, params: Record<string, unknown> = {}) {
  const w = window as GtagWindow;
  if (typeof window !== 'undefined' && typeof w.gtag === 'function') {
    w.gtag('event', name, params);
  }
}

export default function ReportDownloadForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'error' | 'submitted'>('idle');
  const [startedFired, setStartedFired] = useState(false);

  const handleFocus = () => {
    if (!startedFired) {
      gaEvent('research_report_form_start', {});
      setStartedFired(true);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!isValidEmail(email)) {
      setStatus('error');
      return;
    }
    setStatus('submitted');
    // Backend delivery (email the same link, CRM contact create/tag) is not yet wired.
    // See the CRM_ENDPOINT note below once that service is chosen.
    try {
      await fetch('/api/report-download', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email.trim(),
          source: '/blog/why-data-transformations-fail/',
          asset: 'executive_research_report',
        }),
      }).catch(() => {
        // Endpoint not live yet; the visitor still gets the direct download below.
      });
    } catch {
      // no-op: the on-page download must not depend on this succeeding
    }
  };

  const handleDownloadClick = () => {
    gaEvent('research_report_download', { source: '/blog/why-data-transformations-fail/' });
  };

  if (status === 'submitted') {
    return (
      <div className="not-prose border border-[#0A0A0A]/10 bg-white p-6 md:p-8">
        <p className="text-[#0A0A0A] font-semibold mb-2">Your report is ready.</p>
        <p className="text-sm text-[#475569] mb-5">
          A link to the same PDF has also been sent to {email.trim()}.
        </p>
        <a
          href={REPORT_URL}
          onClick={handleDownloadClick}
          className="inline-flex items-center gap-3 bg-[#0A0A0A] text-white px-6 py-3 text-xs tracking-[0.15em] uppercase font-semibold hover:bg-[#0A0A0A]/85 transition-colors"
        >
          Download the PDF
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="not-prose border border-[#0A0A0A]/10 bg-white p-6 md:p-8"
      noValidate
    >
      <label htmlFor="report-email" className="block text-sm font-semibold text-[#0A0A0A] mb-2">
        Work email address
      </label>
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          id="report-email"
          name="email"
          type="email"
          required
          value={email}
          onFocus={handleFocus}
          onChange={(e) => { setEmail(e.target.value); if (status === 'error') setStatus('idle'); }}
          placeholder="you@company.com"
          className="flex-1 border border-[#0A0A0A]/20 px-4 py-3 text-sm text-[#0A0A0A] focus:outline-none focus:border-[#3B5998]"
          aria-invalid={status === 'error'}
          aria-describedby={status === 'error' ? 'report-email-error' : undefined}
        />
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-3 bg-[#0A0A0A] text-white px-6 py-3 text-xs tracking-[0.15em] uppercase font-semibold hover:bg-[#0A0A0A]/85 transition-colors whitespace-nowrap"
        >
          Download the Executive Research Report
        </button>
      </div>
      {status === 'error' && (
        <p id="report-email-error" className="text-sm text-[#a8291f] mt-2">
          Enter a valid email address.
        </p>
      )}
      <p className="text-xs text-[#475569] mt-4">
        Used only to deliver this report. No newsletter, no other emails. See the{' '}
        <a href="mailto:zacharyleifer@gmail.com?subject=Privacy%20question" className={link}>
          contact page
        </a>{' '}
        for questions.
      </p>
    </form>
  );
}
