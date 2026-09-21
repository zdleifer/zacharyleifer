// Custom Worker script layered on top of the static-assets binding.
// Every route except /api/report-download falls straight through to the
// static export in ./out — see wrangler.jsonc's "assets" binding.

export interface Env {
  ASSETS: Fetcher;
  RESEND_API_KEY?: string;
  HUBSPOT_TOKEN?: string;
}

const REPORT_URL = 'https://zacharyleifer.com/downloads/architecting-more-predictable-enterprise-value.pdf';
const REPORT_SOURCE = '/blog/why-data-transformations-fail/';
const REPORT_ASSET = 'executive_research_report';
const REPORT_TAG = 'research_report_download';

function isValidEmail(value: unknown): value is string {
  return typeof value === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

async function sendReportEmail(env: Env, email: string) {
  if (!env.RESEND_API_KEY) return;
  await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'Zachary Leifer <reports@zacharyleifer.com>',
      to: [email],
      subject: 'Your report: Architecting More Predictable Enterprise Value',
      html: `<p>Thanks for your interest. Here is your copy of the executive research report:</p>
<p><a href="${REPORT_URL}">Architecting More Predictable Enterprise Value from Data, Technology and AI Investment</a></p>
<p>If the link above doesn't work, copy and paste this URL into your browser:<br>${REPORT_URL}</p>`,
    }),
  });
}

async function upsertHubspotContact(env: Env, email: string) {
  if (!env.HUBSPOT_TOKEN) return;
  await fetch('https://api.hubapi.com/crm/v3/objects/contacts/upsert', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.HUBSPOT_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      inputs: [
        {
          idProperty: 'email',
          id: email,
          properties: {
            email,
            report_download_tag: REPORT_TAG,
            report_download_source: REPORT_SOURCE,
            report_download_asset: REPORT_ASSET,
          },
        },
      ],
    }),
  });
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

  // Best-effort, independent: one failing must never block the other or the response.
  const results = await Promise.allSettled([
    sendReportEmail(env, trimmedEmail),
    upsertHubspotContact(env, trimmedEmail),
  ]);

  results.forEach((result, i) => {
    if (result.status === 'rejected') {
      console.error(i === 0 ? 'sendReportEmail failed' : 'upsertHubspotContact failed', result.reason);
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

    return env.ASSETS.fetch(request);
  },
} satisfies ExportedHandler<Env>;
