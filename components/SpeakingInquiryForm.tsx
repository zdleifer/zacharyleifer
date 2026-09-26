'use client';

import { useState, useEffect, FormEvent } from 'react';

const INQUIRY_TYPE_LABELS: Record<string, string> = {
  podcast: 'Podcast or Media Inquiry',
};

type GtagWindow = Window & { gtag?: (...args: unknown[]) => void };

function gaEvent(name: string, params: Record<string, unknown> = {}) {
  const w = window as GtagWindow;
  if (typeof window !== 'undefined' && typeof w.gtag === 'function') {
    w.gtag('event', name, params);
  }
}

const inputClass =
  'w-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#7B96CC] transition-colors';
const labelClass = 'block text-[10px] tracking-[0.2em] uppercase text-[#94A3B8] mb-2';

export default function SpeakingInquiryForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'submitted' | 'error'>('idle');
  const [startedFired, setStartedFired] = useState(false);
  const [inquiryType, setInquiryType] = useState('');

  useEffect(() => {
    const param = new URLSearchParams(window.location.search).get('inquiry');
    if (param && INQUIRY_TYPE_LABELS[param]) {
      setInquiryType(INQUIRY_TYPE_LABELS[param]);
    }
  }, []);

  const handleFocus = () => {
    if (!startedFired) {
      gaEvent('speaking_inquiry_form_start', {});
      setStartedFired(true);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();
    const organization = String(data.get('organization') || '').trim();
    const email = String(data.get('email') || '').trim();

    if (!name || !organization || !email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error');
      return;
    }

    setStatus('submitting');

    const payload = Object.fromEntries(data.entries());

    try {
      const res = await fetch('/api/speaking-inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error('request failed');
      gaEvent('speaking_inquiry_submit', {});
      setStatus('submitted');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'submitted') {
    return (
      <div className="not-prose border border-white/15 bg-white/5 p-8">
        <p className="text-white font-semibold mb-2">Thank you.</p>
        <p className="text-white/60 text-sm leading-relaxed">
          I will review your inquiry and respond within two business days. For time-sensitive
          requests, email{' '}
          <a
            href="mailto:zacharyleifer@gmail.com?subject=Speaking%20inquiry%20(time-sensitive)"
            className="text-[#7B96CC] hover:text-white transition-colors"
          >
            zacharyleifer@gmail.com
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="not-prose border border-white/15 bg-white/5 p-6 md:p-8" noValidate>
      <input type="hidden" name="inquiryType" value={inquiryType} />
      {inquiryType && (
        <p className="text-[10px] tracking-[0.2em] uppercase text-[#7B96CC] mb-5">
          {inquiryType}
        </p>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="si-name" className={labelClass}>Full name *</label>
          <input id="si-name" name="name" type="text" required onFocus={handleFocus} className={inputClass} />
        </div>
        <div>
          <label htmlFor="si-org" className={labelClass}>Organization *</label>
          <input id="si-org" name="organization" type="text" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="si-email" className={labelClass}>Work email *</label>
          <input id="si-email" name="email" type="email" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="si-date" className={labelClass}>Event date and/or location</label>
          <input id="si-date" name="eventDate" type="text" placeholder="e.g. March 12, 2027, Las Vegas or virtual" className={inputClass} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="si-message" className={labelClass}>Message</label>
          <textarea
            id="si-message"
            name="message"
            rows={4}
            placeholder="Event name, format, audience, topic of interest, budget range, or whatever is useful."
            className={inputClass}
          />
        </div>
      </div>

      {status === 'error' && (
        <p className="text-sm text-[#E38B84] mt-4">
          Please enter your name, organization and work email to continue.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full sm:w-auto mt-6 inline-flex items-center justify-center gap-3 bg-white text-[#0A0A0A] px-8 py-4 text-xs tracking-[0.18em] uppercase font-semibold hover:bg-white/90 transition-all duration-200 disabled:opacity-60"
      >
        {status === 'submitting' ? 'Sending…' : 'Request Speaking Availability'}
      </button>

      <p className="text-white/40 text-xs mt-4 leading-relaxed">
        By submitting, you agree that Zachary Leifer or State of Mind Strategies may contact you
        about this speaking inquiry. You will not be added to a general newsletter unless you
        explicitly opt in.
      </p>
    </form>
  );
}
