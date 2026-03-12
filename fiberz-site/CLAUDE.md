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

- **Routing:** File-based App Router. Current routes: `/` (home), `/benefits`, `/research`. Nav also references `/product`, `/blog`, `/faq`, `/how-it-works` (not yet built).
- **Components:** Feature-grouped under `app/components/` — `header/`, `footer/`, `home/`, `benefits/`, `research/`. Pages are thin composers that import and sequence these section components.
- **Server components by default.** Client components (`'use client'`) only where interactivity is needed (Header, ScrollHeader, FAQ accordion, Testimonials scroll).
- **Layout:** `app/layout.tsx` wraps all pages with `ScrollHeader` (fixed nav) + `Footer`. Main content has `pt-16 md:pt-20` to account for the fixed header height.
- **Home hero overlaps header:** The home hero uses `-mt-16 md:-mt-20` to extend behind the header. ScrollHeader detects `pathname === '/'` and renders transparent bg when not scrolled (other pages keep white bg).

## Styling

- **Tailwind CSS v4** — config lives in `app/globals.css` via `@theme` block, not a separate `tailwind.config.*` file.
- **Custom color tokens:** `--color-brand` (#D4AC77), `--color-brand-dark`, `--color-linen`, `--color-body`, `--color-heading`, `--color-oak`, `--color-tag`.
- **Custom breakpoint:** `xs` at 500px (in addition to standard Tailwind breakpoints).
- **Fonts:** 6 Google fonts loaded in layout (Inter, Montserrat, Roboto, Playfair Display, Lato, Cormorant Garamond) exposed as CSS variables + `.font-*` utility classes in globals.css.
- **Section titles:** Always use `text-3xl lg:text-5xl` for h2 headings. Use `font-cormorant` for section titles.
- **Gold gradient for icon circles:** `linear-gradient(to right, #D4AC77, #A6813F)` — used in KeyBenefits, KeyScientificFindings, HowToUse step numbers.
- Complex backgrounds/overlays use inline `style` props; layout and spacing use Tailwind classes.

## Images

- All static assets are in `public/`. Use Next.js `<Image>` component.
- For small icons (inside circles, icon grids), use fixed `width`/`height` props — do NOT use `sizes="100vw"` as it causes icons to shrink on mobile.
- Hero sections use background images via inline `style` with `backgroundSize: 'cover'`.
- For responsive hero height, use `height: 'clamp(min, vw-based, max)'` rather than `aspect-ratio` with min/max constraints (they conflict).

## Deployment & SEO

- **Deployed to Vercel** with a custom domain. All code must be production-ready.
- **SEO optimized:** Every page needs proper Metadata exports (title, description, OpenGraph). Use semantic HTML, proper heading hierarchy, alt text on images, and structured data where appropriate.

## TypeScript

Strict mode enabled. Path alias `@/*` maps to the project root.

## TODO

- [ ] Create product page (`/product`)
- [ ] Integrate payment (checkout flow)
- [ ] Integrate email sending (transactional emails)
- [ ] Newsletter signup integration
