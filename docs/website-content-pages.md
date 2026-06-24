# PhotoKiosk.co — Website Content Pages

## Overview

PhotoKiosk is a mobile-first school photo management platform that lets families upload photos for students, parents, and staff directly from their phones. Admins get a dashboard to track photo coverage across the whole school community.

---

## Pages

### 1. Homepage (`/`)

**Goal:** Convert school administrators visiting for the first time.

**Sections:**
- Hero: headline + subheadline + CTA ("Request a Demo" / "Get Started")
- Problem statement: "Getting photo-day ready is a logistical nightmare — chasing families, managing uploads, tracking who submitted what."
- How it works: 3-step visual (School sets up → Families receive link → Photos submitted instantly)
- Feature highlights (see Feature page for detail)
- Social proof / testimonials
- "Who it's for" split: Schools / Families
- Final CTA block

---

### 2. Features (`/features`)

**Goal:** Explain what PhotoKiosk does in detail.

**Sections:**

**For Families**
- Mobile-optimized photo submission (works on any phone, no app download required)
- Take a photo in-app or upload from camera roll
- Submit photos for all household members in one place — students, parents, staff, emergency contacts
- Instant confirmation + recent submissions log
- Session management with auto-expiry warnings

**For Schools / Admins**
- Admin dashboard with live photo coverage stats (donut charts for Students, Staff/Faculty, Parents, Faculty Parents)
- Photo update feed: see who uploaded what and when
- Bulk ZIP export of submitted photos
- User management (multiple admin accounts)
- Configurable display: show/hide specific member types (students, parents, staff, emergency contacts)
- Timezone localization settings

**Platform**
- Progressive Web App (PWA) — installable on home screen, works offline-first
- Google Drive integration for cloud photo storage
- SSO support: Google Sign-In, Microsoft, and custom SSO
- CSRF protection and secure session handling
- Mobile-first design built for kiosk and on-the-go use

---

### 3. How It Works (`/how-it-works`)

**Goal:** Walk through the end-to-end flow for schools and families.

**Sections:**
1. **School setup** — Admin creates the kiosk, configures member visibility and storage
2. **Families get access** — Login via Google, Microsoft SSO, or custom credentials
3. **Household view** — Each family sees their own members (students, parents, emergency contacts)
4. **Photo submission** — Take a live photo or upload from library; preview before submitting
5. **Admin reviews** — Dashboard shows coverage %; photo updates feed shows all recent activity
6. **Export** — Download a ZIP of all photos at any time

---

### 4. Use Cases (`/use-cases`)

**Goal:** Help different buyer personas see themselves in the product.

**Sub-sections / cards:**

- **K–12 Schools** — student directory photos, ID card production, yearbook prep
- **Independent & Private Schools** — family directory with parents and emergency contacts
- **School Events** — collect photos from families before events like graduation
- **Staff Directories** — capture faculty and staff headshots at scale

---

### 5. Pricing (`/pricing`)

**Goal:** Transparent pricing to reduce sales friction.

**Sections:**
- Pricing tiers (e.g., per-school or per-household count)
- Feature comparison table
- FAQ: billing, cancellations, free trial availability
- CTA: "Start Free Trial" or "Talk to Sales"

*(Placeholder — pricing model TBD)*

---

### 6. Security & Privacy (`/security`)

**Goal:** Build trust with schools that handle student data.

**Sections:**
- CSRF token protection on all form submissions
- Secure session handling with auto-expiry
- Role-based access (admin vs. family)
- Google Drive storage with OAuth 2.0
- No photo data shared with third parties
- FERPA considerations / compliance posture

---

### 7. Integrations (`/integrations`)

**Goal:** Show compatibility with tools schools already use.

**Sections:**
- Google Drive (cloud photo storage)
- Google Sign-In (family authentication)
- Microsoft / Azure SSO (family authentication)
- Custom SSO (for schools with existing identity providers)
- Export formats (ZIP download)

---

### 8. About (`/about`)

**Goal:** Build credibility and brand affinity.

**Sections:**
- Origin story / why PhotoKiosk was built
- Mission: make photo collection effortless for school communities
- Team

---

### 9. Blog / Resources (`/blog`)

**Goal:** SEO + thought leadership for school administrators.

**Suggested first posts:**
- "How to collect school directory photos without the chaos"
- "What FERPA means for school photo management"
- "Why families hate photo day (and what to do about it)"
- "Google Drive vs local storage for school photos: a comparison"

---

### 10. Contact / Demo Request (`/contact`)

**Goal:** Capture qualified leads.

**Sections:**
- Short form: name, school name, role, email, school size
- "Request a Demo" CTA
- Support email / response time expectation

---

### 11. Login / Sign In (`/login`) *(functional page, not marketing)*

Redirect to the app login. Not a content page but should be linked in the nav.

---

## Navigation Structure

```
Home | Features | How It Works | Use Cases | Pricing | Blog | Contact
                                                              [Sign In]
```

---

## Notes

- All pages should reference yamm.com aesthetic: clean, modern SaaS site with light theme, generous whitespace, clear CTAs
- Primary color: `#007bff` (matches the app)
- Target audience: school administrators, IT directors, school photographers
- Mobile-friendly — many school staff browse on phones
