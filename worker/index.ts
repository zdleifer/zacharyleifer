// Custom Worker script layered on top of the static-assets binding.
// Every route except /api/report-download falls straight through to the
// static export in ./out — see wrangler.jsonc's "assets" binding.

export interface Env {
  ASSETS: Fetcher;
  REPORT_LEADS: KVNamespace;
  RESEND_API_KEY?: string;
}

const REPORT_URL = 'https://zacharyleifer.com/downloads/architecting-more-predictable-enterprise-value.pdf';
const REPORT_SOURCE = '/blog/why-data-transformations-fail/';
const REPORT_ASSET = 'executive_research_report';
const REPORT_TAG = 'research_report_download';
const NOTIFY_EMAIL = 'zacharyleifer@gmail.com';

const SPEAKING_TAG = 'speaking_inquiry';
const SPEAKING_SOURCE = '/speaking/';

function isValidEmail(value: unknown): value is string {
  return typeof value === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

function escapeHtml(value: unknown): string {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

async function sendResendEmail(env: Env, opts: { to: string; subject: string; html: string }) {
  if (!env.RESEND_API_KEY) return;
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'Zachary Leifer <reports@zacharyleifer.com>',
      to: [opts.to],
      subject: opts.subject,
      html: opts.html,
    }),
  });
  if (!res.ok) {
    throw new Error(`Resend ${res.status}: ${await res.text()}`);
  }
}

function sendReportEmail(env: Env, email: string) {
  return sendResendEmail(env, {
    to: email,
    subject: 'Your report: Architecting More Predictable Enterprise Value',
    html: `<p>Thanks for your interest. Here is your copy of the executive research report:</p>
<p><a href="${REPORT_URL}">Architecting More Predictable Enterprise Value from Data, Technology and AI Investment</a></p>
<p>If the link above doesn't work, copy and paste this URL into your browser:<br>${REPORT_URL}</p>`,
  });
}

function sendNotificationEmail(env: Env, email: string) {
  return sendResendEmail(env, {
    to: NOTIFY_EMAIL,
    subject: `New report download: ${email}`,
    html: `<p>New report download.</p>
<ul>
  <li>Email: ${email}</li>
  <li>Source: ${REPORT_SOURCE}</li>
  <li>Asset: ${REPORT_ASSET}</li>
  <li>Time: ${new Date().toISOString()}</li>
</ul>`,
  });
}

function logLead(env: Env, email: string) {
  const key = `${email}:${Date.now()}`;
  return env.REPORT_LEADS.put(
    key,
    JSON.stringify({
      email,
      tag: REPORT_TAG,
      source: REPORT_SOURCE,
      asset: REPORT_ASSET,
      timestamp: new Date().toISOString(),
    }),
  );
}

async function handleReportDownload(request: Request, env: Env): Promise<Response> {
  if (request.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ ok: false, error: 'invalid_json' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const email = (body as { email?: unknown })?.email;
  if (!isValidEmail(email)) {
    return new Response(JSON.stringify({ ok: false, error: 'invalid_email' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const trimmedEmail = email.trim();

  // Best-effort, independent: one failing must never block another or the response.
  const results = await Promise.allSettled([
    sendReportEmail(env, trimmedEmail),
    sendNotificationEmail(env, trimmedEmail),
    logLead(env, trimmedEmail),
  ]);

  const labels = ['sendReportEmail', 'sendNotificationEmail', 'logLead'];
  results.forEach((result, i) => {
    if (result.status === 'rejected') {
      console.error(`${labels[i]} failed`, result.reason);
    }
  });

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}

interface SpeakingInquiryPayload {
  name: string;
  organization: string;
  email: string;
  eventDate: string;
  message: string;
  inquiryType: string;
}

function sendSpeakingNotificationEmail(env: Env, data: SpeakingInquiryPayload) {
  const rows: [string, string][] = [
    ['Name', data.name],
    ['Organization', data.organization],
    ['Work email', data.email],
    ['Event date and/or location', data.eventDate],
    ['Message', data.message],
  ];
  const subjectPrefix = data.inquiryType ? `[${data.inquiryType}] ` : '';
  const html = `<p>New speaking inquiry from ${escapeHtml(SPEAKING_SOURCE)}${data.inquiryType ? ` (${escapeHtml(data.inquiryType)})` : ''}.</p>
<ul>
${rows
  .filter(([, v]) => v && v.trim())
  .map(([label, value]) => `  <li><strong>${escapeHtml(label)}:</strong> ${escapeHtml(value)}</li>`)
  .join('\n')}
  <li><strong>Time:</strong> ${escapeHtml(new Date().toISOString())}</li>
</ul>`;
  return sendResendEmail(env, {
    to: NOTIFY_EMAIL,
    subject: `${subjectPrefix}New speaking inquiry: ${data.name}`,
    html,
  });
}

function logSpeakingInquiry(env: Env, data: SpeakingInquiryPayload) {
  const key = `speaking-inquiry:${data.email}:${Date.now()}`;
  return env.REPORT_LEADS.put(
    key,
    JSON.stringify({
      ...data,
      tag: SPEAKING_TAG,
      source: SPEAKING_SOURCE,
      timestamp: new Date().toISOString(),
    }),
  );
}

async function handleSpeakingInquiry(request: Request, env: Env): Promise<Response> {
  if (request.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ ok: false, error: 'invalid_json' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const b = body as Record<string, unknown>;
  const name = typeof b.name === 'string' ? b.name.trim() : '';
  const organization = typeof b.organization === 'string' ? b.organization.trim() : '';
  const email = typeof b.email === 'string' ? b.email.trim() : '';

  if (!name || !organization || !isValidEmail(email)) {
    return new Response(JSON.stringify({ ok: false, error: 'missing_required_fields' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const data: SpeakingInquiryPayload = {
    name,
    organization,
    email,
    eventDate: typeof b.eventDate === 'string' ? b.eventDate.trim() : '',
    message: typeof b.message === 'string' ? b.message.trim() : '',
    inquiryType: typeof b.inquiryType === 'string' ? b.inquiryType.trim() : '',
  };

  const results = await Promise.allSettled([
    sendSpeakingNotificationEmail(env, data),
    logSpeakingInquiry(env, data),
  ]);

  const labels = ['sendSpeakingNotificationEmail', 'logSpeakingInquiry'];
  results.forEach((result, i) => {
    if (result.status === 'rejected') {
      console.error(`${labels[i]} failed`, result.reason);
    }
  });

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}

export default {
  async fetch(request, env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === '/api/report-download') {
      return handleReportDownload(request, env);
    }

    if (url.pathname === '/api/speaking-inquiry') {
      return handleSpeakingInquiry(request, env);
    }

    return env.ASSETS.fetch(request);
  },
} satisfies ExportedHandler<Env>;
