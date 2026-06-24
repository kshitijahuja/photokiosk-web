# PhotoKiosk Marketing Website Design Spec

**Date:** 2026-06-24  
**Scope:** Homepage, Features, Contact pages  
**Tech Stack:** Next.js + Tailwind CSS  
**Status:** Approved

---

## Overview

Build a marketing website for PhotoKiosk.co — a school photo management platform. The site will consist of three pages (Homepage, Features, Contact) deployed as static HTML. All content will be generated and can be refined iteratively.

---

## Project Structure

```
photokiosk.web/
├── app/
│   ├── layout.tsx (shared nav, footer, metadata)
│   ├── page.tsx (homepage)
│   ├── features/
│   │   └── page.tsx (features page)
│   ├── contact/
│   │   └── page.tsx (contact page)
│   └── globals.css (Tailwind imports)
├── public/ (images, icons, assets)
├── package.json
├── tailwind.config.ts
└── next.config.ts
```

---

## Pages

### 1. Homepage (`/`)

**Purpose:** Convert school administrators — capture attention, explain problem, show solution, end with CTA.

**Sections:**
- Navigation header with logo and "Sign In" link
- Hero: headline, subheadline, "Request a Demo" CTA button
- Problem statement: pain points of photo collection
- How it works: 3-step visual (School sets up → Families get link → Photos submitted)
- Feature highlights: key features with icons/cards
- Testimonials: 2–3 quotes from school administrators
- "Who it's for" split section: Schools / Families sections
- Final CTA block
- Footer

### 2. Features (`/features`)

**Purpose:** Detailed feature breakdown for administrators evaluating the product.

**Sections:**
- Hero section with headline
- Feature categories with detailed descriptions:
  - **For Families:** mobile submission, take/upload, household members, instant confirmation, session management
  - **For Schools/Admins:** live coverage dashboard, photo feed, bulk export, user management, configurable visibility, timezone settings
  - **Platform:** PWA, offline-first, Google Drive, SSO (Google, Microsoft, custom), CSRF protection, mobile-first design
- Each feature with brief explanation (1-2 sentences)
- Final CTA: "Request a Demo"
- Footer

### 3. Contact (`/contact`)

**Purpose:** Lead capture and demo requests.

**Sections:**
- Hero: headline, brief intro
- Contact form: name, school name, role, email, school size (no submit backend yet—form structure only)
- Support contact info / response time expectation
- Footer

---

## Styling

**Color Scheme:**
- Primary: `#007bff` (app color, used for CTAs and accents)
- Neutral: white background, grays for text and borders
- Light theme, generous whitespace, clean modern SaaS aesthetic (yamm.com style)

**Typography & Spacing:**
- Mobile-first responsive design
- Clear hierarchy: H1 → H2 → body text
- Generous padding/margins for whitespace

**Tailwind CSS:**
- All styling via Tailwind utility classes
- No extracted components — all HTML/Tailwind inline in page files
- Responsive breakpoints: mobile, tablet, desktop

---

## Content

**Copy Generation:**
- Headlines, body text, feature descriptions, testimonials will be generated
- Content aligns with target audience: school administrators, IT directors, school photographers
- Messaging emphasizes ease of use, photo management at scale, family-friendly submission

**Assets:**
- Logo placeholder (can add real logo later)
- Icon placeholders for feature cards (can replace with SVGs/images)
- Testimonial author names/roles (generated)

---

## Build & Deployment

**Development:**
- `npm install` — install dependencies
- `npm run dev` — local dev server
- `npm run build` — build static site
- Output: static HTML in `public/` folder

**Directory Clarification:**
- `app/` — page components and routes (Next.js App Router)
- `public/` — static assets during development (images, logos, icons) AND build output destination
- Built files overwrite the `public/` folder when you run `npm run build`

**Deployment:**
- Next.js configured with `output: 'export'` and `distDir: 'public'` in `next.config.ts` to output static HTML directly to `public/`
- All pages pre-rendered at build time to the `public/` folder
- Upload the entire `public/` folder to your server
- Web server serves files from `public/` folder

**Workflow:**
1. Local development: `npm run dev` (page source in `app/`)
2. Build: `npm run build` (generates static HTML in `public/`)
3. Deploy: Upload `public/` folder to server

---

## Out of Scope (Phase 2)

- Contact form submission backend
- Blog / resources pages
- How It Works, Use Cases, Pricing, About, Integrations, Security pages
- Admin dashboard or authentication
- Database or backend services

---

## Success Criteria

- ✅ Three pages built and deployed to `public/` folder
- ✅ Mobile-responsive design
- ✅ Tailwind CSS styling matches yamm.com aesthetic (clean, modern, light)
- ✅ All pages linked with working navigation
- ✅ Footer appears on all pages
- ✅ CTAs visible and styled consistently
- ✅ Contact page has form structure (no backend submission yet)
