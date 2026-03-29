# SCI Domaine des Launes

Premium alpine investment land website — redesigned with a dark luxury editorial aesthetic.

## Tech stack

- **Next.js** (App Router, TypeScript)
- **Tailwind CSS v4** (custom design tokens)
- **Google Fonts**: Cormorant Garamond + Jost
- Custom SVG illustrations (no image dependencies)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build for production

```bash
npm run build
npm start
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero + overview + highlights |
| `/about` | Company overview and approach |
| `/location` | Geography, map, ski domain, four seasons |
| `/investment` | Investment thesis and development concept |
| `/contact` | Contact form + information pack request |

## Contact form

The `/api/contact` route logs submissions to the console. To connect a real email provider, edit `app/api/contact/route.ts` and add your preferred service (Resend, SendGrid, Nodemailer, etc.).

## Environment variables

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## Deployment

Works on any platform that supports Next.js:
- **Vercel** (recommended — zero config)
- **Netlify** (add `@netlify/plugin-nextjs`)
- **Self-hosted** — `npm run build && npm start` on any Node.js 18+ server

## Design system

All design tokens live in `app/globals.css` under `@theme`. Key variables:

- `--color-ink-*` — dark background scale
- `--color-gold-*` — gold accent scale
- `--color-cream-*` — light text scale
- `--font-cormorant` — display serif
- `--font-jost` — body sans-serif
