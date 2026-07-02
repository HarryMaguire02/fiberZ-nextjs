# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

---

## Architecture

**Next.js 16 App Router** marketing site for FiberZ (a dietary fiber product).

- **Routing:** All pages live under `app/[locale]/` — Serbian is the default locale (no URL prefix, e.g. `/product`), English uses `/en/` prefix (e.g. `/en/product`). Routes: `/`, `/product`, `/benefits`, `/research`, `/research/resistant-dextrin`, `/blog`, `/faq`, `/how-it-works`, `/terms-of-use`, `/privacy-policy`, `/shipping`, `/disclaimer`.
- **Components:** Feature-grouped under `app/components/` — `header/`, `footer/`, `home/`, `benefits/`, `research/`, `blog/`, `faq/`, `legal/`, `product/`, `how-it-works/`. Pages are thin composers that import and sequence these section components.
- **API Routes:** `app/api/newsletter/subscribe/` and `app/api/newsletter/unsubscribe/` — handle newsletter subscription via Resend. API routes do NOT use the `[locale]` prefix.
- **Server components by default.** Client components (`'use client'`) only where interactivity is needed (Header, ScrollHeader, ContactPopup, ProductHero, FAQ accordion, Testimonials scroll, BlogListingSection, LanguageSwitcher).
- **Layout:** `app/layout.tsx` is a passthrough (`return children`). `app/[locale]/layout.tsx` is the real shell — it sets `lang={locale}`, loads fonts, wraps content in `NextIntlClientProvider`, and renders `ScrollHeader` + `Footer` + `Analytics` + `SpeedInsights`.
- **Two `not-found.tsx` files, and they are not interchangeable:** `app/[locale]/not-found.tsx` only renders for an explicit `notFound()` call thrown from *within* an already-matched `[locale]` segment (e.g. the invalid-locale check in `app/[locale]/layout.tsx`). Any URL that doesn't match a route pattern at all (e.g. `/blog/some-unknown-slug` — there's no `[slug]` page) never enters `app/[locale]/layout.tsx`, so Next.js falls back to the root `app/not-found.tsx` instead — which, because the root layout is a passthrough with no `<html>`/`<body>`, must provide its own self-contained HTML document (plain inline styles, no Tailwind/font dependency). If you add real 404s to more routes, keep both files in sync.
- **Home hero overlaps header:** The home hero uses `-mt-16 md:-mt-20` to extend behind the header. `ScrollHeader` detects `pathname === '/'` (via `usePathname` from `@/i18n/navigation`, which strips the locale prefix) and renders transparent bg when not scrolled.
- **Company info:** Single source of truth in `app/lib/company.ts` (`COMPANY` constant — legal name, address, PIB, MB, email, phone, hours). **Update here, not in components**, when company details change.

---

## Localization (next-intl)

- **Library:** `next-intl` v4 with App Router support.
- **Locales:** `sr` (Serbian, default — no URL prefix) and `en` (English — `/en/` prefix). Configured via `localePrefix: 'as-needed'` in `i18n/routing.ts`.
- **Config files:**
  - `i18n/routing.ts` — `defineRouting({ locales, defaultLocale, localePrefix })`
  - `i18n/request.ts` — `getRequestConfig`, loads `messages/[locale].json`
  - `i18n/navigation.ts` — `createNavigation` exports locale-aware `Link`, `useRouter`, `usePathname`
- **Proxy (middleware):** `proxy.ts` at the project root — `createMiddleware(routing)` from next-intl. Handles locale detection and redirects. Named `proxy.ts` (Next.js 16 renamed `middleware.ts` → `proxy.ts`).
- **Messages:** `messages/en.json` and `messages/sr.json` — namespace-structured translation files. **`sr.json` now has real Serbian translations** across all 14 namespaces (translated content, not a placeholder). ICU plurals (`FAQ.questionsCount`, `Blog.CategoryCards.articleCount`) use full Serbian CLDR plural categories (`one`/`few`/`many`/`other`), not just `one`/`other`. Study citations, author names, and brand name (`FiberZ`) are intentionally left untranslated (proper nouns / scientific references).
- **CRITICAL — always import from `@/i18n/navigation`:** Never import `Link`, `usePathname`, or `useRouter` from `next/link` or `next/navigation` in components — always use `@/i18n/navigation`. This is what makes links locale-aware. `useSearchParams` is the only exception (kept from `next/navigation`).
- **`usePathname` strips the locale prefix** — `pathname === '/'` correctly matches both `/` (SR) and `/en/` (EN).
- **Server components** use `const t = await getTranslations('Namespace')` (must be `async`).
- **Client components** use `const t = useTranslations('Namespace')`.
- **`t.raw()`** returns `unknown` — always cast to the expected type.
- **All components and pages are wired to `useTranslations()`/`getTranslations()`** — no more hardcoded English strings outside of the intentionally-excluded legal pages and research article (see below). `generateMetadata` on every page reads from `Metadata.<page>`.
- **Translation namespaces in `messages/*.json`:** `Nav`, `Footer`, `ContactPopup`, `Home` (Hero/ModernDiets/WhatIsFiberZ/KeyBenefits/HowToUse/Testimonials/BackedByScience/FAQ), `Benefits`, `Research`, `FAQ` (all 6 categories + 50+ Q&A), `Blog`, `HowItWorks`, `Product` (packages/benefits/trustCards/stats/nutritionRows), `Newsletter`, `Metadata` (all 12 pages).
- **FAQ and Product text live only in `messages/*.json`** — `app/components/faq/faqData.ts` and `app/lib/productData.ts` were reduced to structural-only data (ids, icons, prices, numeric values). Components merge structural data with translated text at render time, keyed by `id` (FAQ, via the shared `app/components/faq/useFAQCategories.ts` hook) or zipped by array index (Product stats/nutrition rows/trust card icons). `app/lib/jsonLd.ts`'s `getProductJsonLd()`/`getFAQJsonLd()` now accept pre-translated params instead of importing text directly.
- **`company.ts` exception:** `COMPANY.workingHours` was removed — working hours is display text, not a legal fact, so it now lives in `messages/*.json` as `ContactPopup.workingHoursValue`. This is the one documented exception to "update company.ts, not components."
- **Blog category names** (`Nutrition`/`Digestion`/etc., from `content/blog/types.ts`'s `BlogCategory` union) are **not** translated — left as English data labels. Open decision: add a `Blog.categoryNames.*` map if these should be localized later.
- **Long-prose pages (legal + research article)** keep their content as JSX components, not in JSON — too much embedded markup (`<Link>`, `COMPANY` constants, tables, figures). Each locale page (`app/[locale]/terms-of-use/page.tsx` etc.) is a thin wrapper that renders the content component. **Intentionally left English-only** pending Serbian lawyer review — not wired to translations.
- **`LanguageSwitcher`** (`app/components/header/LanguageSwitcher.tsx`) — pill button with globe icon (`/localization.png`), current locale name, `›` chevron. Toggles between SR and EN. Added to both desktop nav and mobile menu in `Header.tsx`.

---

## Blog

- **Content storage:** MDX files with frontmatter in `content/blog/posts/<locale>/` (`en/` and `sr/`). No CMS — posts are added by editing files and deploying. **All 10 posts in both locales are currently stub placeholders** — frontmatter (title, excerpt, category, author, date, image) plus a single truncated intro line, no full article body yet. `sr/` frontmatter and intro lines are translated (not English copies); writing the actual full-length article bodies is still a future task for both locales.
- **Data layer:** `content/blog/types.ts` (BlogPost, BlogCategory, BlogFilterCategory types), `content/blog/utils.ts` (server-only, reads files with `fs` + `gray-matter`), `content/blog/helpers.ts` (client-safe: searchPosts, paginatePosts, formatDate).
- **Important:** `utils.ts` uses `fs` and can only be imported in server components. `helpers.ts` is safe for client components. Never mix them.
- **Locale-aware:** `getAllPosts(locale)`, `getFeaturedPost(locale)`, `getPostsByCategory(locale, category)`, `getCategories(locale)` all take a `locale` param and read from `content/blog/posts/<locale>/`. `formatDate(dateString, locale?)` switches `toLocaleString` locale code (defaults to `'en'`).
- **Categories:** Nutrition, Digestion, Recipes, Health, Lifestyle, Tips. `BlogFilterCategory` adds `'ALL'` for the filter UI.
- **Blog listing page sections:** BlogHero → BlogListingSection (client, manages search/filter/pagination state) → CategoryCards (server) → NewsletterSignup (reused from research).
- **BlogListingSection** derives `activeCategory` from URL search params (`useSearchParams`), not from state. Category changes use `router.replace({ pathname, query })` (object form required by next-intl's `useRouter`). Wrapped in `<Suspense>` in the page composer.
- **Individual blog post page** (`/blog/[slug]`) is not yet built — planned as a separate task. Since no route matches `/blog/<slug>` at all, hitting one currently falls through to the root `app/not-found.tsx` (see the two-`not-found.tsx` note in Architecture above) rather than crashing.
- **Blog images:** Stored in `public/blog/` as `.png` files. Category icons in `public/` with `category-` prefix (except Digestion which uses `icon-microbiota.png`).

---

## Styling

- **Tailwind CSS v4** — config lives in `app/globals.css` via `@theme` block, not a separate `tailwind.config.*` file.
- **Custom color tokens:** `--color-brand` (#D4AC77), `--color-brand-dark`, `--color-linen`, `--color-body`, `--color-heading`, `--color-oak`, `--color-tag`.
- **Custom breakpoint:** `xs` at 500px (in addition to standard Tailwind breakpoints).
- **Fonts:** 6 Google fonts loaded in `app/[locale]/layout.tsx` (Inter, Montserrat, Roboto, Playfair Display, Lato, Cormorant Garamond) exposed as CSS variables + `.font-*` utility classes in globals.css.
- **Section titles:** Always use `text-3xl lg:text-5xl` for h2 headings. Use `font-cormorant` for section titles.
- **Gold gradient for icon circles:** `linear-gradient(to right, #D4AC77, #A6813F)` — used in KeyBenefits, KeyScientificFindings, HowToUse step numbers, CategoryCards, TrustCards.
- **`.legal-prose`** in `globals.css` — typographic styles for legal pages (h2, h3, p, ul, a, strong).
- **`.research-prose`** in `globals.css` — similar to `legal-prose` but uses Roboto for h2 and scopes `ul` styles to direct children to avoid conflicts with nested components.
- Complex backgrounds/overlays use inline `style` props; layout and spacing use Tailwind classes.

---

## Images

- All static assets are in `public/`. Use Next.js `<Image>` component.
- For small icons (inside circles, icon grids), use fixed `width`/`height` props — do NOT use `sizes="100vw"` as it causes icons to shrink on mobile.
- For card images, use `fill` + `object-cover` inside a container with a fixed aspect ratio, and provide accurate `sizes` prop. Avoid `unoptimized`.
- Hero sections use `<Image fill>` with gradient overlays.
- For responsive hero height, use `height: 'clamp(min, vw-based, max)'` or `min-h-*` classes rather than `aspect-ratio` with min/max constraints (they conflict).

---

## Product Page

- **Page:** `app/[locale]/product/page.tsx` — thin composer: PromoBanner → ProductHero → WhatIsFiberZProduct → Testimonials → TrustCards → ScientificallyProvenStats → NutritionalInfo → FAQ.
- **Product data:** All product constants in `app/lib/productData.ts` — packages (RSD pricing), benefits, nutrition tables, promo text, trust cards, stats, images, `formatRSD()`. **Update here, not in components.**
- **ProductHero** (`app/components/product/ProductHero.tsx`) — only client component on this page. Handles image gallery, package selection, quantity stepper, dynamic price calculation, ORDER NOW button.
- **ORDER NOW button:** Shows "Online ordering is coming soon" with contact info from `company.ts`. Replace with real checkout after AllSecure integration.
- **PromoBanner** — toggleable via `PROMO.active` in `productData.ts`. Renders nothing when `active === false`.
- **Reused components:** Testimonials and FAQ use `variant="linen"` prop for linen background on this page.

---

## Components — Patterns & Gotchas

- **NewsletterSignup** (`app/components/research/NewsletterSignup.tsx`) — shared across research, blog, faq pages. Does NOT include an `<hr>` divider — pages that need one add it themselves.
- **Disabled pagination buttons:** Do NOT use `disabled` attribute on arrows — blocks hover styles. Use opacity classes and guard clicks in the handler instead.
- **Avoid `useEffect` for syncing URL params** — Next.js strict mode triggers errors. Derive values directly from `useSearchParams()`.
- **`JSX.Element` type** doesn't exist in this TS config. Use `React.ReactNode` instead.
- **ContactPopup** — opened from header CONTACT button. Open state lives in `ScrollHeader`, passed down to `Header → Navigation → NavLink`. Closes on Escape, backdrop click, or × button.
- **Testimonials / FAQ variant prop:** `variant?: "default" | "linen"` — controls background color for reuse on different pages.
- **`router.replace` in next-intl** requires object form for URLs with query params: `router.replace({ pathname: '/blog', query: Object.fromEntries(params) }, { scroll: false })` — string URL form is not supported.

---

## Legal Pages

- **Pages:** `app/[locale]/terms-of-use`, `app/[locale]/privacy-policy`, `app/[locale]/shipping`, `app/[locale]/disclaimer`.
- **Content components:** Each legal page has a shared content component in `app/components/legal/[section]/` (e.g. `TermsContent.tsx`). The page file is a thin wrapper that renders the content + exports `generateMetadata`.
- **Shared layout:** `app/components/legal/LegalPageLayout.tsx` — branded gold-gradient hero + `max-w-3xl` prose container.
- **Prose styling:** `.legal-prose` class in `globals.css`. Don't restyle inline — extend `.legal-prose` if needed.
- **Content language:** Currently English only. References Serbian laws by name. **A Serbian lawyer should review before going live.**
- **`Last updated` dates** are hardcoded in each content component. Update them whenever content changes.

---

## Research

- **Listing page:** `app/[locale]/research/page.tsx` — sequences ResearchHero → ResearchStats → WhyFiberZScienceBased → KeyScientificFindings → FeaturedClinicalStudies → NewsletterSignup.
- **Article page:** `app/[locale]/research/resistant-dextrin/page.tsx` — thin wrapper rendering `ResistantDextrinArticleContent` from `app/components/research/article/`. Full article content with 7 sections, flowchart diagram, nutritional tables, references.
- **Research data source:** `public/research/research.pdf`. Product image at `public/research/fiberz-research.jpg`.

---

## SEO

- **Sitemap:** `app/sitemap.ts` — generates two entries per route (SR without prefix + EN with `/en/`), each with `alternates.languages: { sr, en }`. Base URL from `NEXT_PUBLIC_SITE_URL`.
- **Robots:** `app/robots.ts` — allows all crawlers, references `/sitemap.xml`.
- **JSON-LD structured data** in `app/lib/jsonLd.ts` — `getOrganizationJsonLd()` (home), `getProductJsonLd()` (product), `getFAQJsonLd()` (faq), `getBreadcrumbJsonLd()` (product, faq, research article).
- **`generateMetadata`** on every `app/[locale]/*/page.tsx` includes `alternates.canonical` + `alternates.languages` + `openGraph.locale` based on the `locale` param.

---

## Newsletter

- **Provider:** Resend — subscriber management (Audiences), transactional email, campaign broadcasting.
- **No database** — Resend Audiences is the sole subscriber store.
- **Subscribe flow:** `NewsletterSignup` → `POST /api/newsletter/subscribe` → validates email, checks honeypot, rate limits → adds to Audience → sends welcome email.
- **Unsubscribe flow:** Welcome email link → `GET /api/newsletter/unsubscribe?email=...` → marks contact as `unsubscribed: true` → shows HTML confirmation.
- **Campaigns:** Done through Resend dashboard (Broadcasts). Template at `emails/broadcast-template.html`.
- **Welcome email:** `emails/WelcomeEmail.tsx` — React Email component.
- **Spam protection:** Honeypot (`_website`) + in-memory rate limiter in `app/lib/validation.ts`.
- **Environment variables:** `RESEND_API_KEY`, `RESEND_AUDIENCE_ID`, `RESEND_FROM_EMAIL` (defaults to `onboarding@resend.dev`). Must verify domain before production.

---

## Security

- **HTTP security headers** in `next.config.ts` — `X-Content-Type-Options`, `X-Frame-Options: DENY`, `X-XSS-Protection`, `Referrer-Policy`, `Strict-Transport-Security`, `Permissions-Policy`. Applied to all routes.

---

## Payments (planned — AllSecure)

- **Provider:** AllSecure (Belgrade). Stripe not available in Serbia.
- **Status:** Pre-onboarding. Site being prepared for AllSecure merchant review.
- **Payment method icons** in `app/components/footer/PaymentMethods.tsx` are text placeholders — swap for official logos after onboarding.
- **Fiscalization (V-PFR):** Separate mandatory integration with Serbian Tax Administration. Integrate a certified ESIR provider API (Younify / eFiskal / Fiskalko / Fiscal.rs) server-side after each successful payment.

---

## TypeScript

Strict mode enabled. Path alias `@/*` maps to the project root.

---

## Important Things to Know

- **`sr.json` has real Serbian translations** across all 14 namespaces (site copy, FAQ, product data, SEO metadata). Not yet reviewed by a native proofreader — spot-check before relying on it for launch.
- **Blog posts are still stub placeholders in both locales** (frontmatter + one intro line, no full body) — `sr/` frontmatter is translated, but writing the actual articles is unstarted for both `en/` and `sr/`.
- **Newsletter unsubscribe page (`/api/newsletter/unsubscribe`) SR copy is translated** — the `?locale=` mechanism, `lang` attribute, and Serbian text are all live.
- **Legal page content is template English** drafted from Serbian law requirements. **Have a Serbian lawyer review** before going live.
- **Payment method icons in the footer are text placeholders.** Swap after AllSecure onboarding.
- **"Last updated" dates in legal pages are hardcoded** (currently 2026-04-07). Update whenever content changes.
- **No cookie banner** needed. Vercel Analytics + Speed Insights are cookieless.
- **Checkout flow does not exist yet.** Built after AllSecure sandbox credentials.
- **Fiscalization (V-PFR) is a separate mandatory integration** — AllSecure does not handle fiscal receipts.

---

## TODO

### Localization — remaining content

- [ ] Have a native Serbian speaker proofread `messages/sr.json` (machine/AI-assisted translation, not yet reviewed by a native speaker)
- [ ] Decide whether to translate blog category names (`Nutrition`/`Digestion`/etc. from `content/blog/types.ts`) — currently left as English data labels; if yes, add a `Blog.categoryNames.*` map and update `CategoryCards.tsx`/`SearchAndFilters.tsx`

### Before AllSecure merchant review

- [ ] **Have a Serbian lawyer review** all four legal pages (Terms of Service, Privacy Policy, Shipping & Returns, Disclaimer)
- [ ] Translate legal pages to Serbian
- [ ] Add an "About Us" page or section with company history

### Blog & content

- [ ] Write full article bodies for the 10 blog post stubs, in both `en/` and `sr/` (currently frontmatter + one intro line only)
- [ ] Create individual blog post page (`/blog/[slug]`)

### Newsletter / email

- [ ] Verify domain in Resend and update `RESEND_FROM_EMAIL` env var for production
- [ ] Add unsubscribe link (`{{{RESEND_UNSUBSCRIBE_URL}}}`) to broadcast template footer
- [ ] Contact form integration (currently mailto/tel links and ContactPopup only)

### AllSecure onboarding & integration

- [ ] Initial sales meeting — confirm Apple Pay availability, settlement period, supported currencies
- [ ] Submit KYC documents (APR izvod, PIB, MB, business bank account, beneficial owner ID)
- [ ] Sign merchant agreement
- [ ] Integrate hosted payment page (HPP) or drop-in widget with sandbox credentials
- [ ] Configure Apple Pay (Merchant ID + domain verification file in `public/.well-known/`)
- [ ] Configure Google Pay (Google Pay Console registration + SDK)
- [ ] Replace placeholder payment icons with official AllSecure brand assets
- [ ] PCI SAQ A submission
- [ ] Switch to production credentials and smoke test

### Fiscalization (V-PFR) — mandatory by Serbian law

- [ ] Register with Poreska uprava as e-commerce taxpayer
- [ ] Apply for Bezbednosni element (security certificate)
- [ ] Choose certified ESIR provider and integrate their API
- [ ] Wire ESIR call into post-payment flow for fiscal receipt with QR code

---

## Done

- [x] Full localization infrastructure — next-intl v4, `i18n/routing.ts`, `i18n/request.ts`, `i18n/navigation.ts`, `proxy.ts` (middleware)
- [x] `next.config.ts` wrapped with `createNextIntlPlugin`
- [x] `app/layout.tsx` reduced to passthrough; `app/[locale]/layout.tsx` created as full HTML shell
- [x] All 12 pages moved to `app/[locale]/*/page.tsx` with locale-aware `generateMetadata` (hreflang alternates)
- [x] `messages/en.json` — all English strings extracted across all namespaces
- [x] `messages/sr.json` — placeholder (copy of en.json, ready for translation)
- [x] `LanguageSwitcher` component — globe icon pill button; added to desktop nav and mobile menu
- [x] All `Link` / `usePathname` / `useRouter` imports updated to `@/i18n/navigation` across all components
- [x] Sitemap updated — two entries per route (SR + EN) with `alternates.languages`
- [x] Legal content extracted to shared components (`TermsContent`, `PrivacyContent`, `ShippingContent`, `DisclaimerContent`)
- [x] Research article extracted to `ResistantDextrinArticleContent` component
- [x] `middleware.ts` renamed to `proxy.ts` (Next.js 16 convention)
- [x] Newsletter signup integration
- [x] Transactional welcome email via Resend
- [x] Build `/how-it-works` page
- [x] Build `/product` page with RSD pricing and 8 sections
- [x] Build all 4 legal pages (Terms, Privacy, Shipping, Disclaimer)
- [x] Shared `LegalPageLayout` and `.legal-prose` styles
- [x] Centralized company info in `app/lib/company.ts`
- [x] Centralized product data in `app/lib/productData.ts`
- [x] Header CONTACT button popup (ContactPopup)
- [x] Payment method placeholder badges in footer
- [x] Sitemap + robots.txt routes
- [x] Security headers in `next.config.ts`
- [x] Wired `useTranslations()`/`getTranslations()` into all ~42 components and all 12 pages' `generateMetadata` — no more hardcoded English strings outside legal pages/research article (intentionally excluded)
- [x] Consolidated FAQ and Product text into `messages/*.json` as single source of truth — `faqData.ts`/`productData.ts` reduced to structural-only data (ids, icons, prices), merged with translated text via `useFAQCategories()` hook (FAQ) and index-zipping (Product)
- [x] `messages/sr.json` translated to real Serbian across all 14 namespaces, including full CLDR plural categories for ICU plurals (`one`/`few`/`many`/`other`)
- [x] Blog locale split — MDX posts moved to `content/blog/posts/<locale>/`, `utils.ts` functions and `helpers.ts`'s `formatDate()` take a `locale` param; `sr/` frontmatter translated
- [x] Newsletter locale wiring — `NewsletterSignup.tsx` sends `locale` in POST body, subscribe route appends `?locale=` to unsubscribe URL, unsubscribe route branches HTML response by `?locale=` param with real Serbian copy
- [x] `app/lib/jsonLd.ts` — `getProductJsonLd()`/`getFAQJsonLd()` accept pre-translated params instead of importing text directly; `getBreadcrumbJsonLd()` accepts `locale` and fixes a bug where English-locale breadcrumb URLs were missing the `/en` prefix
- [x] Added `app/[locale]/not-found.tsx` and root `app/not-found.tsx` (self-contained HTML) so unmatched routes (e.g. `/blog/[slug]` before that page exists) render a proper 404 instead of a "missing html/body" crash
- [x] JSON-LD structured data — Organization (home), Product (product), FAQPage (faq), BreadcrumbList
- [x] Research article page with full PDF content, flowchart, nutritional tables
- [x] Updated FeaturedClinicalStudies and KeyScientificFindings with real peer-reviewed study data
- [x] Updated nutritional data in `productData.ts` to match research PDF values
- [x] Vercel Web Analytics + Speed Insights (cookieless, no consent banner needed)
