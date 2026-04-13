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

- **Routing:** File-based App Router. Current routes: `/` (home), `/benefits`, `/research`, `/research/resistant-dextrin`, `/blog`, `/faq`, `/product`, `/how-it-works`, `/terms-of-use`, `/privacy-policy`, `/shipping`, `/disclaimer`.
- **Components:** Feature-grouped under `app/components/` — `header/`, `footer/`, `home/`, `benefits/`, `research/`, `blog/`, `faq/`, `legal/`, `product/`, `how-it-works/`. Pages are thin composers that import and sequence these section components.
- **API Routes:** `app/api/newsletter/subscribe/` and `app/api/newsletter/unsubscribe/` — handle newsletter subscription via Resend.
- **Server components by default.** Client components (`'use client'`) only where interactivity is needed (Header, ScrollHeader, ContactPopup, ProductHero, FAQ accordion, Testimonials scroll, BlogListingSection).
- **Layout:** `app/layout.tsx` wraps all pages with `ScrollHeader` (fixed nav) + `Footer` + `<Analytics />` + `<SpeedInsights />`. Main content has `pt-16 md:pt-20` to account for the fixed header height.
- **Home hero overlaps header:** The home hero uses `-mt-16 md:-mt-20` to extend behind the header. ScrollHeader detects `pathname === '/'` and renders transparent bg when not scrolled (other pages keep white bg).
- **Company info:** Single source of truth in `app/lib/company.ts` (`COMPANY` constant — legal name, address, PIB, MB, email, phone, hours). Used by Footer, ContactPopup, and all legal pages. **Update here, not in components**, when company details change.

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
- **Gold gradient for icon circles:** `linear-gradient(to right, #D4AC77, #A6813F)` — used in KeyBenefits, KeyScientificFindings, HowToUse step numbers, CategoryCards, TrustCards.
- Complex backgrounds/overlays use inline `style` props; layout and spacing use Tailwind classes.

## Images

- All static assets are in `public/`. Use Next.js `<Image>` component.
- For small icons (inside circles, icon grids), use fixed `width`/`height` props — do NOT use `sizes="100vw"` as it causes icons to shrink on mobile.
- For card images, use `fill` + `object-cover` inside a container with a fixed aspect ratio, and provide accurate `sizes` prop (e.g. `"(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 350px"`). Avoid `unoptimized` — if images look blurry, provide larger source files or better `sizes` hints instead.
- Hero sections use `<Image fill>` with gradient overlays.
- For responsive hero height, use `height: 'clamp(min, vw-based, max)'` or `min-h-*` classes rather than `aspect-ratio` with min/max constraints (they conflict).

## Product Page

- **Page:** `app/product/page.tsx` — thin composer sequencing 8 sections: PromoBanner → ProductHero → WhatIsFiberZProduct → Testimonials → TrustCards → ScientificallyProvenStats → NutritionalInfo → FAQ.
- **Product data:** All product constants live in `app/lib/productData.ts` — packages (pricing in RSD), benefits, nutrition tables, promo banner text, trust card data, stat data, product images, and `formatRSD()` helper. **Update here, not in components**, when product details change.
- **ProductHero** (`app/components/product/ProductHero.tsx`) is the only client component — handles image gallery, package selection (radio), quantity stepper, dynamic price calculation, and ORDER NOW button.
- **ORDER NOW button:** Currently shows an inline notice ("Online ordering is coming soon") with contact email/phone from `company.ts`. This satisfies AllSecure's merchant review requirement. Replace with real checkout flow after payment integration.
- **PromoBanner** (`app/components/product/PromoBanner.tsx`) — thin `bg-oak` bar with promo text. Toggleable via `PROMO.active` flag in `productData.ts`. Renders nothing when `active === false`.
- **Reused components:** Testimonials and FAQ are imported from `app/components/home/` with `variant="linen"` prop for different background colors on the product page.

## Components — Patterns & Gotchas

- **NewsletterSignup** (`app/components/research/NewsletterSignup.tsx`) is shared across pages (research, blog, faq). It does NOT include an `<hr>` divider — pages that need one (research) add it in their own page composer. Wired up to `/api/newsletter/subscribe` with loading/success/error states, honeypot spam protection, and auto-clearing status messages after 5 seconds.
- **Disabled pagination buttons:** Do NOT use `disabled` attribute on pagination arrows — it blocks hover styles. Instead, use opacity classes for visual styling and guard clicks in the handler (`if (page < 1 || page > totalPages) return`).
- **Avoid `useEffect` for syncing URL params to state** — Next.js strict mode triggers "setState in effect" errors. Instead, derive values directly from `useSearchParams()`.
- **`JSX.Element` type** doesn't exist in this project's TS config. Use `React.ReactNode` instead.
- **ContactPopup** (`app/components/header/ContactPopup.tsx`) is opened from the header CONTACT button. Open state lives in `ScrollHeader` and is passed down to `Header → Navigation → NavLink`. Closes on Escape, backdrop click, or × button. Locks body scroll while open.
- **Testimonials variant prop:** `variant?: "default" | "linen"`. `"default"` = white bg with linen-to-beige card gradient (home page). `"linen"` = linen bg with white-to-linen card gradient (product page). Same pattern used by FAQ.
- **FAQ variant prop:** `variant?: "default" | "linen"`. `"default"` = white bg, linen closed items. `"linen"` = linen bg, white closed items. FAQ is centered with `max-w-3xl` (no product image beside it).

## Legal Pages

- **Pages:** `/terms-of-use`, `/privacy-policy`, `/shipping`, `/disclaimer`. All four are statically prerendered server components.
- **Shared layout:** `app/components/legal/LegalPageLayout.tsx` provides a branded gold-gradient hero + a constrained `max-w-3xl` prose container. New legal pages should reuse this layout for consistency.
- **Prose styling:** `.legal-prose` class in `globals.css` styles `h2`, `h3`, `p`, `ul`, `a`, `strong` inside legal content. Don't restyle these inline — extend `.legal-prose` if new elements are needed.
- **Content language:** Currently English. References Serbian laws by name (Zakon o zaštiti potrošača, ZZPL, Zakon o fiskalizaciji). **A Serbian lawyer should review before going live** — the content is template language drafted from legal requirements, not lawyer-validated.
- **`Last updated` dates** are hardcoded in each page. Update them whenever content changes.
- **SEO:** Every legal page exports full Metadata with explicit `alternates.canonical`, `robots: { index: true, follow: true }`, and OpenGraph URL. Required for Google Search Console submission.

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
- **SEO optimized:** Every page needs proper Metadata exports (title, description, OpenGraph, `alternates.canonical`, explicit `robots: { index: true, follow: true }`). Use semantic HTML, proper heading hierarchy (single h1 per page), alt text on images, and structured data where appropriate.
- **Pages will be submitted to Google Search Console.** Every new route should be indexable from day one — no `noindex` on marketing or legal pages.
- **Vercel Web Analytics + Speed Insights** are loaded directly in `layout.tsx`. Both are cookieless and GDPR-compliant without consent — no cookie banner needed. Both are named explicitly in the Privacy Policy. If a cookie-based tool is added later, a consent banner would need to be introduced.

## How It Works Page

- **Page:** `app/how-it-works/page.tsx` — thin composer sequencing 6 sections: HowItWorksHero → SimpleToAdd (reused from benefits/) → HowToUse (reused from home/) → WhenToTake → FAQ (reused, `variant="linen"`) → CTASection.
- **New components** in `app/components/how-it-works/`: `HowItWorksHero`, `WhenToTake`, `CTASection`.
- **Reused components:** `SimpleToAdd` (benefits/), `HowToUse` (home/), `FAQ` (home/) — no modifications needed.

## Research

- **Research listing page:** `app/research/page.tsx` — sequences ResearchHero → ResearchStats → WhyFiberZScienceBased → KeyScientificFindings → FeaturedClinicalStudies → NewsletterSignup.
- **Research article page:** `app/research/resistant-dextrin/page.tsx` — full research article on resistant dextrin as a prebiotic, covering 7 sections (prebiotics definition, SCFA mechanisms, production/properties, clinical evidence, synergistic effects, about FiberZ, conclusion) with references, nutritional tables, flowchart diagram, and product image. Uses `.research-prose` styles (defined in `globals.css`).
- **FeaturedClinicalStudies** (`app/components/research/FeaturedClinicalStudies.tsx`) — displays 4 real peer-reviewed studies from the research PDF references (Cai 2018, Włodarczyk 2021, Yoshida 2024, Hu 2020). Links to the full article page.
- **KeyScientificFindings** (`app/components/research/KeyScientificFindings.tsx`) — 4 findings backed by real citations from the research PDF.
- **Research data source:** `public/research/research.pdf` (original research document). Product image at `public/research/fiberz-research.jpg`.
- **Nutritional data** in `app/lib/productData.ts` updated to match research PDF values (Energy: 48 kJ/11 kcal, Fiber: 2.1g per sachet, plus saturates/sugars/salt rows).

## SEO

- **Sitemap:** `app/sitemap.ts` — dynamic sitemap covering all 12 public routes. Base URL from `NEXT_PUBLIC_SITE_URL` env var.
- **Robots:** `app/robots.ts` — allows all crawlers, references `/sitemap.xml`.
- **JSON-LD structured data** in `app/lib/jsonLd.ts` — shared utility exporting `getOrganizationJsonLd()`, `getProductJsonLd()`, `getFAQJsonLd()`, `getBreadcrumbJsonLd()`. Added to:
  - Home page (`/`) — Organization schema
  - Product page (`/product`) — Product schema (all packages with RSD pricing) + BreadcrumbList
  - FAQ page (`/faq`) — FAQPage schema (all questions from `faqData.ts`) + BreadcrumbList
  - Research article (`/research/resistant-dextrin`) — BreadcrumbList

## Styling

- **`.legal-prose`** in `globals.css` — typographic styles for legal pages (h2, h3, p, ul, a, strong). Wrapped in `@layer base` for Tailwind v4 specificity.
- **`.research-prose`** in `globals.css` — similar to `legal-prose` but uses Roboto for h2 and scopes `ul` styles to direct children (`> ul`) to avoid conflicts with nested components like the flowchart diagram.

## Security

- **HTTP security headers** configured in `next.config.ts` via `headers()`. Applied to all routes (`/(.*)`):
  - `X-Content-Type-Options: nosniff` — prevents MIME-type sniffing
  - `X-Frame-Options: DENY` — blocks iframe embedding (clickjacking protection)
  - `X-XSS-Protection: 1; mode=block` — legacy XSS filter
  - `Referrer-Policy: strict-origin-when-cross-origin` — controls referrer info sent to other sites
  - `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload` — forces HTTPS
  - `Permissions-Policy: camera=(), microphone=(), geolocation=(), interest-cohort=()` — restricts browser APIs

## Payments (planned — AllSecure)

- **Provider:** AllSecure (Belgrade office). Chosen because Stripe is not available in Serbia, and AllSecure already has live Apple Pay + Google Pay support and a Belgrade-based team.
- **Status:** Pre-onboarding. The website is being prepared for AllSecure's merchant review (legal pages, contact info, PIB/MB visible, payment method icons in footer).
- **Payment method icons** in `app/components/footer/PaymentMethods.tsx` are currently **text placeholders**. Swap them for the official Visa/Mastercard/Maestro/DinaCard/Apple Pay/Google Pay logos provided by AllSecure after onboarding.
- **Fiscalization (V-PFR)** is a **separate, mandatory** integration with the Serbian Tax Administration. AllSecure does not handle fiscal receipts — they must be generated server-side after every successful payment, in accordance with the Serbian Law on Fiscalization (Zakon o fiskalizaciji). Plan: integrate a certified ESIR provider's API (e.g. Younify, eFiskal, Fiskalko, Fiscal.rs) rather than building a custom ESIR.

## TypeScript

Strict mode enabled. Path alias `@/*` maps to the project root.

## Important Things to Know

- **Legal page content is template English** drafted from Serbian law requirements. **Have a Serbian lawyer review** Terms of Service, Privacy Policy, Shipping & Returns, and Disclaimer before going live. Acquirers (like AllSecure) don't legally validate content — that's on you.
- **Payment method icons in the footer are text placeholders.** AllSecure provides an official brand kit with Visa/Mastercard/Maestro/DinaCard/Apple Pay/Google Pay logos after onboarding — swap them in then.
- **All "Last updated" dates in legal pages are hardcoded** (currently 2026-04-07). Update them whenever you change the content.
- **No cookie banner** is currently needed. Vercel Web Analytics and Speed Insights are both cookieless. If a cookie-based tool is added later (e.g. advertising pixels), a consent banner must be introduced at that point.
- **The checkout flow does not exist yet.** Will be built after AllSecure onboarding provides sandbox credentials.
- **Fiscalization (V-PFR) is a separate, mandatory integration** from the payment gateway. AllSecure does not handle fiscal receipts — you must integrate a certified ESIR provider's API after each successful payment.

## TODO

### Before AllSecure merchant review (blockers)

- [x] ~~Build `/how-it-works` page~~ — done (reuses `SimpleToAdd`, `HowToUse`, `FAQ` components + 3 new: `HowItWorksHero`, `WhenToTake`, `CTASection`)
- [ ] **Have a Serbian lawyer review** all four legal pages (Terms of Service, Privacy Policy, Shipping & Returns, Disclaimer)
- [ ] Translate legal pages to Serbian (recommended for Serbian consumer base)
- [ ] Add an "About Us" page or section with company history (Fidelinka has long history — leverage for trust during review)

### AllSecure onboarding & integration

- [ ] Initial sales meeting with AllSecure — get written quote, confirm Apple Pay availability, settlement period, supported currencies
- [ ] Submit KYC documents (APR izvod, PIB, MB, business bank account, beneficial owner ID)
- [ ] Sign merchant agreement
- [ ] Receive sandbox credentials and integrate hosted payment page (HPP) or drop-in widget
- [ ] Configure Apple Pay (Merchant ID + domain verification file in `public/.well-known/`)
- [ ] Configure Google Pay (Google Pay Console registration + SDK integration)
- [ ] Replace placeholder payment icons in `PaymentMethods.tsx` with official AllSecure brand assets
- [ ] PCI SAQ A submission via AllSecure
- [ ] Switch to production credentials and smoke test with real low-value purchase

### Fiscalization (V-PFR) — mandatory by Serbian law

- [ ] Register with Poreska uprava as e-commerce taxpayer
- [ ] Apply for Bezbednosni element (security certificate)
- [ ] Choose certified ESIR provider (Younify / eFiskal / Fiskalko / Fiscal.rs) and integrate their API
- [ ] Wire ESIR call into the post-payment flow so a fiscal receipt with QR code is sent to the customer

### Blog & content

- [ ] Create individual blog post page (`/blog/[slug]`)

### Newsletter / email

- [ ] Verify domain in Resend and update `RESEND_FROM_EMAIL` env var for production email delivery
- [ ] Add unsubscribe link (`{{{RESEND_UNSUBSCRIBE_URL}}}`) to broadcast template footer
- [ ] Contact form integration (FAQ page — currently mailto/tel links and ContactPopup only)

### Nice-to-have

- [x] ~~Structured data (JSON-LD) for product, organization, breadcrumbs~~ — done (home, product, FAQ pages)

### Done

- [x] Newsletter signup integration
- [x] Integrate email sending (transactional welcome email via Resend)
- [x] Add PIB and Matični broj to footer
- [x] Build Terms of Service page
- [x] Build Privacy Policy page (with Vercel Web Analytics + Speed Insights named)
- [x] Build Shipping & Returns page (with 14-day right of withdrawal)
- [x] Build Disclaimer page (food supplement)
- [x] Header CONTACT button popup
- [x] ~~Cookie consent banner~~ — removed (Vercel Analytics + Speed Insights are cookieless, no banner needed)
- [x] Payment method placeholder badges in footer
- [x] Shared `LegalPageLayout` and `.legal-prose` styles
- [x] Centralized company info in `app/lib/company.ts`
- [x] Build `/product` page with RSD pricing, package selection, ORDER NOW placeholder, and 8 sections
- [x] Centralized product data in `app/lib/productData.ts`
- [x] Testimonials and FAQ variant props for reuse across pages with different bg colors
- [x] Build `/how-it-works` page (reuses `SimpleToAdd`, `HowToUse`, `FAQ` + 3 new components)
- [x] Sitemap (`app/sitemap.ts`) and `robots.txt` (`app/robots.ts`)
- [x] Footer PIB/MB labels translated to English (Tax ID / Registration No)
- [x] Security headers in `next.config.ts` (HSTS, X-Frame-Options, CSP, etc.)
- [x] JSON-LD structured data — Organization (home), Product (product), FAQPage (faq), BreadcrumbList
- [x] Research article page (`/research/resistant-dextrin`) with full PDF content, flowchart, nutritional tables, and product image
- [x] Updated `FeaturedClinicalStudies` and `KeyScientificFindings` with real peer-reviewed study data
- [x] Updated nutritional data in `productData.ts` to match research PDF values
