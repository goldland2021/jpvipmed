# JPVIPMedical.com V1

Multilingual React/Vite landing site for Japan premium medical checkup consultation. V1 is focused on qualified WhatsApp leads, not hospital booking, online diagnosis, payment, or CRM.

## Routes

- `/zh-hk` Traditional Chinese default
- `/en` English
- `/ar` Arabic with `html dir="rtl"`
- `/admin` protected Supabase lead admin

## Setup

1. Install dependencies with `npm install`.
2. Copy `.env.example` to `.env.local`.
3. Add Supabase URL, anon key, WhatsApp Business number, and analytics IDs.
4. Run `supabase/schema.sql` in Supabase SQL editor.
5. Create at least one Supabase Auth user for `/admin`.
6. Run `npm run dev`.

## Lead Capture

The public form validates inputs, applies a honeypot and minimum-time spam check, optionally executes reCAPTCHA v3, saves to Supabase, tracks conversion events, then redirects to WhatsApp with a prefilled message.

For stricter reCAPTCHA verification, deploy `supabase/functions/submit-lead` and set:

```env
VITE_SUPABASE_LEAD_FUNCTION_NAME=submit-lead
VITE_RECAPTCHA_SITE_KEY=your_site_key
```

The edge function expects:

```env
RECAPTCHA_SECRET_KEY=your_secret_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

## Analytics Events

- `page_view`
- `button_click`
- `whatsapp_click`
- `form_submit`
- `lead_created`

Events are pushed to `dataLayer` for GTM and to `gtag` for GA4/Google Ads when the matching environment variables are configured.

## Deployment

Deploy to Vercel as a Vite app. Add the same environment variables in Vercel project settings. The static SEO files live in `public/robots.txt` and `public/sitemap.xml`.
