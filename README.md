# Lakeview Village — Aura by Caivan

Marketing site for Aura Lakeview Village townhomes (Next.js, deployed on Vercel).

## Local development

```bash
pnpm install
cp .env.example .env.local
# Edit .env.local with your Supabase values (never commit this file)
pnpm dev
```

## Vercel deployment

Connect this repo in Vercel. Set **Environment Variables** in the Vercel dashboard (Production + Preview):

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase **anon** (public) key only — never the service role key |

The anon key is safe in the browser when Row Level Security is enabled. Apply SQL migrations in `supabase/migrations/` via the Supabase SQL Editor.

## Security

- **Never commit** `.env`, `.env.local`, or `.vercel/` — they are gitignored.
- Use only the Supabase **anon** key in this app; keep the service role key server-side only (not used here).
- Lead data: RLS allows anonymous **inserts** only; reads/updates/deletes are denied for `anon`.
- HTTP security headers are set in `next.config.mjs`.

## Build

```bash
pnpm build
pnpm start
```
