# JP VIP Charter V1

Multilingual React/Vite landing site for Japan premium private charter consultation. V1 is focused on qualified WhatsApp leads for high-end charter, Fuji private tours, medical visit transportation, study-abroad inspection trips, and business inspection trips.

## Routes

- `/en` English default
- `/zh-hk` Traditional Chinese
- `/ar` Arabic with `html dir="rtl"`
- `/admin` protected Supabase lead admin

## Setup

1. Install dependencies with `npm install`.
2. Copy `.env.example` to `.env.local`.
3. Add Supabase URL, anon key, WhatsApp Business number, and analytics IDs.
4. Run `supabase/schema.sql` in Supabase SQL editor.
5. Create at least one Supabase Auth user for `/admin`.
6. Run `npm run dev`.

For an existing Supabase project, also run
`supabase/migrations/001_lead_admins_and_rls.sql` and
`supabase/migrations/002_lead_rate_limit.sql`, then insert the UUID of each
authorized lead-admin user into `public.lead_admins`.

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
LEAD_RATE_LIMIT_SALT=long_random_secret
LEAD_RATE_LIMIT_PER_MINUTE=5
```

For production, also configure the Edge Function with
`RECAPTCHA_REQUIRED=true` and
`ALLOWED_ORIGINS=https://www.jpairport.jp,https://jpairport.jp`. Add the first
authorized lead-admin user after creating it in Supabase Auth:

`LEAD_RATE_LIMIT_REQUIRED=true` makes the endpoint fail closed if the rate-limit
salt or migration is missing.

```sql
insert into public.lead_admins (user_id)
values ('AUTH_USER_UUID');
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

## WorkflowAI assistant

Set `VITE_WORKFLOWAI_WIDGET_SRC` to the signed embed script generated in WorkflowAI. The widget loads only when the page URL includes `?workflowai=pilot` and starts in its closed state.

The public banner asks visitors not to enter payment details or sensitive personal information. Routes, vehicle availability, and prices continue to require human confirmation.
