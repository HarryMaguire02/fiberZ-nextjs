# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Architecture

**Next.js 16 App Router** marketing site for FiberZ (a dietary fiber product).

- **Routing:** File-based App Router. Current routes: `/` (home), `/benefits`, `/research`, `/blog`, `/faq`. Nav also references `/product`, `/how-it-works` (not yet built).
- **Components:** Feature-grouped under `app/components/` — `header/`, `footer/`, `home/`, `benefits/`, `research/`, `blog/`, `faq/`. Pages are thin composers that import and sequence these section components.
- **API Routes:** `app/api/newsletter/subscribe/` and `app/api/newsletter/unsubscribe/` — handle newsletter subscription via Resend.
- **Server components by default.** Client components (`'use client'`) only where interactivity is needed (Header, ScrollHeader, FAQ accordion, Testimonials scroll, BlogListingSection).
- **Layout:** `app/layout.tsx` wraps all pages with `ScrollHeader` (fixed nav) + `Footer`. Main content has `pt-16 md:pt-20` to account for the fixed header height.
- **Home hero overlaps header:** The home hero uses `-mt-16 md:-mt-20` to extend behind the header. ScrollHeader detects `pathname === '/'` and renders transparent bg when not scrolled (other pages keep white bg).

## Blog

- **Content storage:** MDX files with frontmatter in `content/blog/posts/`. No CMS — posts are added by editing files and deploying. Can migrate to a headless CMS (e.g. Sanity) later if the client needs independence.
- **Data layer:** `content/blog/types.ts` (BlogPost, BlogCategory, BlogFilterCategory types), `content/blog/utils.ts` (server-only, reads files with `fs` + `gray-matter`), `content/blog/helpers.ts` (client-safe: searchPosts, paginatePosts, formatDate).
- **Important:** `utils.ts` uses `fs` and can only be imported in server components. `helpers.ts` is safe for client components. Never mix them.
- **Categories:** Nutrition, Digestion, Recipes, Health, Lifestyle, Tips. `BlogFilterCategory` adds `'ALL'` for the filter UI.
- **Blog listing page sections:** BlogHero → BlogListingSection (client, manages search/filter/pagination state) → CategoryCards (server) → NewsletterSignup (reused from research).
- **BlogListingSection** derives `activeCategory` from URL search params (`useSearchParams`), not from state. Category changes use `router.replace()` to update the URL. Wrapped in `<Suspense>` in the page composer.
- **Individual blog post page** (`/blog/[slug]`) is not yet built — planned as a separate task.
- **Blog images:** Stored in `public/blog/` as `.png` files. Category icons in `public/` with `category-` prefix (except Digestion which uses `icon-microbiota.png`).

## Styling

- **Tailwind CSS v4** — config lives in `app/globals.css` via `@theme` block, not a separate `tailwind.config.*` file.
- **Custom color tokens:** `--color-brand` (#D4AC77), `--color-brand-dark`, `--color-linen`, `--color-body`, `--color-heading`, `--color-oak`, `--color-tag`.
- **Custom breakpoint:** `xs` at 500px (in addition to standard Tailwind breakpoints).
- **Fonts:** 6 Google fonts loaded in layout (Inter, Montserrat, Roboto, Playfair Display, Lato, Cormorant Garamond) exposed as CSS variables + `.font-*` utility classes in globals.css.
- **Section titles:** Always use `text-3xl lg:text-5xl` for h2 headings. Use `font-cormorant` for section titles.
- **Gold gradient for icon circles:** `linear-gradient(to right, #D4AC77, #A6813F)` — used in KeyBenefits, KeyScientificFindings, HowToUse step numbers, CategoryCards.
- Complex backgrounds/overlays use inline `style` props; layout and spacing use Tailwind classes.

## Images

- All static assets are in `public/`. Use Next.js `<Image>` component.
- For small icons (inside circles, icon grids), use fixed `width`/`height` props — do NOT use `sizes="100vw"` as it causes icons to shrink on mobile.
- For card images, use `fill` + `object-cover` inside a container with a fixed aspect ratio, and provide accurate `sizes` prop (e.g. `"(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 350px"`). Avoid `unoptimized` — if images look blurry, provide larger source files or better `sizes` hints instead.
- Hero sections use `<Image fill>` with gradient overlays.
- For responsive hero height, use `height: 'clamp(min, vw-based, max)'` or `min-h-*` classes rather than `aspect-ratio` with min/max constraints (they conflict).

## Components — Patterns & Gotchas

- **NewsletterSignup** (`app/components/research/NewsletterSignup.tsx`) is shared across pages (research, blog, faq). It does NOT include an `<hr>` divider — pages that need one (research) add it in their own page composer. Wired up to `/api/newsletter/subscribe` with loading/success/error states, honeypot spam protection, and auto-clearing status messages after 5 seconds.
- **Disabled pagination buttons:** Do NOT use `disabled` attribute on pagination arrows — it blocks hover styles. Instead, use opacity classes for visual styling and guard clicks in the handler (`if (page < 1 || page > totalPages) return`).
- **Avoid `useEffect` for syncing URL params to state** — Next.js strict mode triggers "setState in effect" errors. Instead, derive values directly from `useSearchParams()`.
- **`JSX.Element` type** doesn't exist in this project's TS config. Use `React.ReactNode` instead.

## Newsletter

- **Provider:** Resend — handles email sending, subscriber management (Audiences), and campaign sending (Broadcasts).
- **No database** — Resend Audiences is the sole subscriber store. No Vercel Postgres or other DB needed.
- **Subscribe flow:** `NewsletterSignup` component → `POST /api/newsletter/subscribe` → validates email, checks honeypot, rate limits (5 req/min/IP) → adds contact to Resend Audience → sends welcome email via React Email template.
- **Unsubscribe flow:** Welcome email contains unsubscribe link → `GET /api/newsletter/unsubscribe?email=...` → marks contact as `unsubscribed: true` in Resend Audience (soft unsubscribe, preserves record) → shows HTML confirmation page.
- **Sending campaigns:** Done entirely through the Resend dashboard (Broadcasts). No code changes needed. The client creates a broadcast, picks the audience, uses the branded HTML template from `emails/broadcast-template.html`, and sends.
- **Resend Audiences API:** `contacts.create()` is idempotent — duplicate emails don't error, they return the existing contact. No need to check existence before creating.
- **Welcome email template:** `emails/WelcomeEmail.tsx` — React Email component branded with FiberZ colors.
- **Broadcast template:** `emails/broadcast-template.html` — standalone HTML template for pasting into Resend's broadcast editor. Uses `{{{RESEND_UNSUBSCRIBE_URL}}}` variable for the unsubscribe link.
- **Spam protection:** Honeypot field (`_website`) + in-memory rate limiter in `app/lib/validation.ts`. No CAPTCHA.
- **Resend client:** Lazily initialized via `getResend()` function in route handlers to avoid build-time errors when env vars aren't set.
- **Environment variables:** `RESEND_API_KEY`, `RESEND_AUDIENCE_ID`, and optionally `RESEND_FROM_EMAIL` (defaults to `onboarding@resend.dev` for testing). Must verify domain in Resend before production sending — unverified domains land in spam.

## Deployment & SEO

- **Deployed to Vercel** with a custom domain. All code must be production-ready.
- **SEO optimized:** Every page needs proper Metadata exports (title, description, OpenGraph). Use semantic HTML, proper heading hierarchy, alt text on images, and structured data where appropriate.

## TypeScript

Strict mode enabled. Path alias `@/*` maps to the project root.

## TODO

- [ ] Create individual blog post page (`/blog/[slug]`)
- [ ] Create product page (`/product`)
- [ ] Integrate payment (checkout flow)
- [ ] Verify domain in Resend and update `RESEND_FROM_EMAIL` env var for production email delivery
- [ ] Add unsubscribe link (`{{{RESEND_UNSUBSCRIBE_URL}}}`) to broadcast template footer
- [ ] Contact form integration (FAQ page — currently mailto/tel links only)
- [x] Newsletter signup integration
- [x] Integrate email sending (transactional welcome email via Resend)
