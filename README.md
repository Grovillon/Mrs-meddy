# Mrs Meddy

Home-cooked Greek food, made slowly. A Next.js 15 (App Router) marketing site
for the Mrs Meddy brand — pastel, warm, and built around Mrs Meddy herself as
a living mascot.

## Stack

- **Next.js 15** (App Router, React 19, TypeScript)
- **Tailwind CSS v4** — pastel design tokens defined in `src/app/globals.css`
- **Framer Motion** — hero mascot animation, scroll reveals, micro-interactions
- **lucide-react** — icon set

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
src/
  app/                 routes (App Router), one folder per page
  components/
    home/              homepage section components
    layout/            header, footer, mobile order bar
    mascot/            the animated Mrs Meddy character
    menu/              menu filtering grid
    preorder/          pre-order form
    contact/           contact form + map placeholder
    faq/               FAQ accordion
    cart/              basket drawer
    ui/                shared primitives (Button, Card, Reveal, etc.)
  lib/
    data/              static content (meals, categories, weekly menu, deli, testimonials, FAQ)
    site-config.ts     brand-wide constants (nav, hours, contact info)
    cart-context.tsx   client-side basket state
    types.ts           shared domain types
```

## Notes for future integration

The codebase is intentionally structured so the following can be wired in
without restructuring:

- **Stripe** — the basket (`lib/cart-context.tsx`) and pre-order form already
  compute totals; checkout currently ends at a confirmation state rather than
  payment.
- **Resend** — newsletter and contact forms are client-only today; both
  `onSubmit` handlers are the natural place to call a server action / API
  route that sends via Resend.
- **Supabase / CMS** — all content (`lib/data/*.ts`) is static and typed;
  swapping the static arrays for fetched data keeps every consuming
  component unchanged.
- **Auth / admin dashboard** — no auth exists yet; routes are all public.

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run lint` — ESLint
