# PhotoKiosk Marketing Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a Next.js + Tailwind marketing website with Homepage, Features, and Contact pages that outputs to the `public/` folder as static HTML.

**Architecture:** Simple pages approach using Next.js App Router. Each page is self-contained with all HTML and Tailwind classes inline (no extracted components). Shared layout provides navigation, footer, and metadata. Build configured to output static HTML directly to `public/` folder for server deployment.

**Tech Stack:** Next.js 14+, React 18+, Tailwind CSS 3+, TypeScript

---

## File Structure

**Files to Create:**
- `package.json` — Dependencies and scripts
- `next.config.ts` — Next.js configuration with static export to `public/`
- `tsconfig.json` — TypeScript configuration
- `tailwind.config.ts` — Tailwind CSS configuration with primary color
- `app/globals.css` — Tailwind imports and global styles
- `app/layout.tsx` — Shared layout: nav, footer, metadata
- `app/page.tsx` — Homepage with all sections
- `app/features/page.tsx` — Features page
- `app/contact/page.tsx` — Contact page
- `.gitignore` — Git ignore for node_modules, .next, etc.

---

## Tasks

### Task 1: Initialize Next.js Project and Install Dependencies

**Files:**
- Create: `package.json`
- Create: `.gitignore`

- [ ] **Step 1: Create package.json with Next.js and Tailwind dependencies**

```json
{
  "name": "photokiosk-web",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "next": "^14.0.0"
  },
  "devDependencies": {
    "typescript": "^5.3.0",
    "@types/node": "^20.0.0",
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "tailwindcss": "^3.3.0",
    "postcss": "^8.4.0",
    "autoprefixer": "^10.4.0"
  }
}
```

- [ ] **Step 2: Create .gitignore**

```
node_modules/
.next/
public/index.html
public/index.txt
public/*.js
public/*.css
*.log
.DS_Store
.env
.env.local
```

- [ ] **Step 3: Run npm install**

```bash
cd /Users/kshitijahuja/Sites/photokiosk.web && npm install
```

Expected: All dependencies installed, `node_modules/` and `package-lock.json` created.

- [ ] **Step 4: Commit**

```bash
git add package.json package-lock.json .gitignore
git commit -m "chore: initialize Next.js and Tailwind dependencies"
```

---

### Task 2: Create Next.js and Tailwind Configuration

**Files:**
- Create: `next.config.ts`
- Create: `tsconfig.json`
- Create: `tailwind.config.ts`
- Create: `postcss.config.js`

- [ ] **Step 1: Create next.config.ts with static export to public folder**

```typescript
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'public',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
```

- [ ] **Step 2: Create tsconfig.json**

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "strictBindCallApply": true,
    "strictPropertyInitialization": true,
    "noImplicitThis": true,
    "alwaysStrict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "exactOptionalPropertyTypes": false,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "resolveJsonModule": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "jsx": "preserve",
    "incremental": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}
```

- [ ] **Step 3: Create tailwind.config.ts**

```typescript
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#007bff',
          light: '#0056b3',
          dark: '#0042a8',
        },
      },
      spacing: {
        safe: 'max(1rem, env(safe-area-inset-left))',
      },
    },
  },
  plugins: [],
};
export default config;
```

- [ ] **Step 4: Create postcss.config.js**

```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

- [ ] **Step 5: Commit**

```bash
git add next.config.ts tsconfig.json tailwind.config.ts postcss.config.js
git commit -m "chore: configure Next.js, TypeScript, Tailwind, and PostCSS"
```

---

### Task 3: Create Global Styles and App Layout

**Files:**
- Create: `app/globals.css`
- Create: `app/layout.tsx`

- [ ] **Step 1: Create app/globals.css with Tailwind imports and base styles**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

html {
  scroll-behavior: smooth;
}

body {
  @apply bg-white text-gray-900;
}

a {
  @apply text-primary hover:text-primary-light transition-colors;
}

button {
  @apply transition-colors;
}

/* Ensure footer stays at bottom */
html,
body,
#__next {
  height: 100%;
}

#__next {
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}
```

- [ ] **Step 2: Create app/layout.tsx with shared navigation, footer, and metadata**

```typescript
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'PhotoKiosk - School Photo Management Made Easy',
  description: 'Mobile-first photo collection platform for schools, families, and administrators. Simplify photo day with instant uploads and secure cloud storage.',
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-white">
        <header className="border-b border-gray-200">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <div className="text-2xl font-bold text-primary">PhotoKiosk</div>
            <div className="flex items-center gap-8">
              <a href="/" className="text-gray-700 hover:text-primary text-sm font-medium">Home</a>
              <a href="/features" className="text-gray-700 hover:text-primary text-sm font-medium">Features</a>
              <a href="/contact" className="text-gray-700 hover:text-primary text-sm font-medium">Contact</a>
              <a href="#login" className="text-primary text-sm font-medium">Sign In</a>
            </div>
          </nav>
        </header>

        <main className="flex-1">
          {children}
        </main>

        <footer className="border-t border-gray-200 bg-gray-50 py-12 mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <h4 className="font-bold text-gray-900 mb-4">PhotoKiosk</h4>
                <p className="text-gray-600 text-sm">School photo management made simple.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-4 text-sm">Product</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><a href="/features" className="hover:text-primary">Features</a></li>
                  <li><a href="/pricing" className="hover:text-primary">Pricing</a></li>
                  <li><a href="/how-it-works" className="hover:text-primary">How It Works</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-4 text-sm">Company</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><a href="/about" className="hover:text-primary">About</a></li>
                  <li><a href="/blog" className="hover:text-primary">Blog</a></li>
                  <li><a href="/contact" className="hover:text-primary">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-4 text-sm">Legal</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><a href="#privacy" className="hover:text-primary">Privacy</a></li>
                  <li><a href="#terms" className="hover:text-primary">Terms</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-200 pt-8">
              <p className="text-center text-gray-600 text-sm">&copy; 2026 PhotoKiosk. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add app/globals.css app/layout.tsx
git commit -m "feat: create global styles and app layout with navigation and footer"
```

---

### Task 4: Create Homepage

**Files:**
- Create: `app/page.tsx`

- [ ] **Step 1: Create app/page.tsx with hero, problem, how it works, features, testimonials, and CTAs**

```typescript
export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Photo Collection. Simplified.
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Get families to submit photos in minutes, not days. PhotoKiosk makes school photo management effortless for administrators, families, and students.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-light transition-colors text-lg">
              Request a Demo
            </button>
            <button className="px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-blue-50 transition-colors text-lg">
              View Features
            </button>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">The Problem</h2>
            <p className="text-lg text-gray-700 mb-4">
              Getting photo day ready is a logistical nightmare. You're chasing families for uploads, managing multiple submission channels, tracking who sent what, and dealing with lost files. By the time you get everything organized, you're exhausted.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-red-500 font-bold mr-3">✗</span>
                <span>Families submit photos via email, text, and random storage apps</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 font-bold mr-3">✗</span>
                <span>No visibility into submission status — who's uploaded and who hasn't</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 font-bold mr-3">✗</span>
                <span>Managing photos across multiple devices and cloud services</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 font-bold mr-3">✗</span>
                <span>Manual follow-ups waste hours of administrative time</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">How It Works</h2>
          <p className="text-center text-gray-600 text-lg mb-16 max-w-2xl mx-auto">Three simple steps to complete photo collection in minutes.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">School Sets Up</h3>
              <p className="text-gray-600">Admins create a photo kiosk and configure which members to collect photos for.</p>
            </div>
            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Families Get Link</h3>
              <p className="text-gray-600">Share a simple link via email or text. Families sign in with Google, Microsoft, or school credentials.</p>
            </div>
            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Photos Submitted Instantly</h3>
              <p className="text-gray-600">Families snap photos from their phones. Admin dashboard updates in real-time with coverage stats.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">Why Schools Love PhotoKiosk</h2>
          <p className="text-center text-gray-600 text-lg mb-16 max-w-2xl mx-auto">Everything you need to collect, organize, and manage school photos.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-8 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Mobile-First</h3>
              <p className="text-gray-600">Works on any smartphone. No app download required. Take a photo or upload from camera roll.</p>
            </div>
            {/* Feature 2 */}
            <div className="p-8 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Live Coverage Stats</h3>
              <p className="text-gray-600">Admin dashboard shows real-time progress: how many students, staff, and families have submitted photos.</p>
            </div>
            {/* Feature 3 */}
            <div className="p-8 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">☁️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Secure Cloud Storage</h3>
              <p className="text-gray-600">Photos stored securely in Google Drive. SSO support for Google, Microsoft, and custom providers.</p>
            </div>
            {/* Feature 4 */}
            <div className="p-8 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📥</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Bulk Export</h3>
              <p className="text-gray-600">Download all photos as a ZIP file at any time. Perfect for yearbook or ID card production.</p>
            </div>
            {/* Feature 5 */}
            <div className="p-8 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Student Privacy First</h3>
              <p className="text-gray-600">Role-based access, CSRF protection, secure sessions with auto-expiry. FERPA-friendly design.</p>
            </div>
            {/* Feature 6 */}
            <div className="p-8 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Works Offline</h3>
              <p className="text-gray-600">Progressive Web App with offline-first design. Families can submit photos even with spotty connection.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 sm:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">What School Leaders Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400">★★★★★</div>
              </div>
              <p className="text-gray-700 mb-4">
                "PhotoKiosk cut our photo collection time from two weeks to two days. Families love how easy it is, and the admin dashboard gives us visibility we never had before."
              </p>
              <p className="font-semibold text-gray-900">Sarah Mitchell</p>
              <p className="text-sm text-gray-600">Principal, Central High School</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400">★★★★★</div>
              </div>
              <p className="text-gray-700 mb-4">
                "As IT director, I was impressed by the security features. CSRF protection, OAuth 2.0, and role-based access make it compliant with our district policies."
              </p>
              <p className="font-semibold text-gray-900">James Chen</p>
              <p className="text-sm text-gray-600">IT Director, Riverside Schools</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400">★★★★★</div>
              </div>
              <p className="text-gray-700 mb-4">
                "The mobile-first design is perfect for our community. We didn't have to explain anything—families just sent photos. The yearbook is already half done!"
              </p>
              <p className="font-semibold text-gray-900">Maria Rodriguez</p>
              <p className="text-sm text-gray-600">Admin, St. Anne's Academy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Built for Your Community</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* For Schools */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">For Schools & Admins</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">✓</span>
                  <span>Collect student directory photos at scale</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">✓</span>
                  <span>Capture staff and faculty headshots</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">✓</span>
                  <span>Streamline ID card and yearbook production</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">✓</span>
                  <span>Create family directories with parent photos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">✓</span>
                  <span>Export all photos for archival or printing</span>
                </li>
              </ul>
            </div>

            {/* For Families */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">For Families</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">✓</span>
                  <span>Submit photos from any smartphone in seconds</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">✓</span>
                  <span>No app download — just a simple link</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">✓</span>
                  <span>Upload for all household members at once</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">✓</span>
                  <span>See submission confirmation immediately</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">✓</span>
                  <span>Works even with spotty mobile connection</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Simplify Photo Collection?</h2>
          <p className="text-xl mb-8 text-blue-100">Join schools across the country using PhotoKiosk to save time and delight families.</p>
          <button className="px-10 py-4 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg">
            Request a Demo Today
          </button>
        </div>
      </section>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add app/page.tsx
git commit -m "feat: create homepage with hero, problem, how it works, features, testimonials, and CTAs"
```

---

### Task 5: Create Features Page

**Files:**
- Create: `app/features/page.tsx`

- [ ] **Step 1: Create app/features/page.tsx with feature categories and details**

```typescript
export default function Features() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Powerful Features for Every User
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Built for families, designed for administrators, powered by security and reliability.
          </p>
        </div>
      </section>

      {/* For Families */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">For Families</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl">Simple, fast, and intuitive photo submission from any device.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-gray-200 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">📱 Mobile-Optimized Submission</h3>
              <p className="text-gray-700">Works flawlessly on any smartphone. No app download required — just open the link and start uploading.</p>
            </div>
            <div className="border border-gray-200 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">📸 Take or Upload</h3>
              <p className="text-gray-700">Capture a live photo on the spot or upload from your camera roll. Full control over what you submit.</p>
            </div>
            <div className="border border-gray-200 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">👨‍👩‍👧‍👦 Household Members</h3>
              <p className="text-gray-700">Submit photos for all household members — students, parents, emergency contacts — in one place.</p>
            </div>
            <div className="border border-gray-200 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">✓ Instant Confirmation</h3>
              <p className="text-gray-700">See confirmation immediately after submitting. Check your recent submissions log anytime.</p>
            </div>
            <div className="border border-gray-200 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">⏰ Session Management</h3>
              <p className="text-gray-700">Auto-expiry warnings keep your account secure. Sessions expire automatically after inactivity.</p>
            </div>
            <div className="border border-gray-200 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">🌐 Works Offline</h3>
              <p className="text-gray-700">Upload photos even with spotty connection. Progressive Web App design syncs when you're back online.</p>
            </div>
          </div>
        </div>
      </section>

      {/* For Schools & Admins */}
      <section className="py-20 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">For Schools & Admins</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl">Complete control, real-time visibility, and powerful tools to manage photo collection at scale.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-gray-200 p-8 rounded-lg bg-white">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">📊 Live Coverage Dashboard</h3>
              <p className="text-gray-700">Real-time stats show submission progress across students, staff, parents, and emergency contacts. Visual breakdown with percentage completion.</p>
            </div>
            <div className="border border-gray-200 p-8 rounded-lg bg-white">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">📝 Photo Update Feed</h3>
              <p className="text-gray-700">See who uploaded what and when. Track all activity in one centralized feed. Never miss an update.</p>
            </div>
            <div className="border border-gray-200 p-8 rounded-lg bg-white">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">📥 Bulk ZIP Export</h3>
              <p className="text-gray-700">Download all submitted photos as a single ZIP file. Perfect for yearbook production, ID cards, and archival.</p>
            </div>
            <div className="border border-gray-200 p-8 rounded-lg bg-white">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">👥 User Management</h3>
              <p className="text-gray-700">Add multiple admin accounts. Assign roles and permissions. Keep sensitive operations secure with role-based access.</p>
            </div>
            <div className="border border-gray-200 p-8 rounded-lg bg-white">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">⚙️ Configurable Visibility</h3>
              <p className="text-gray-700">Choose which member types to collect: students, parents, staff, emergency contacts. Customize for your school's needs.</p>
            </div>
            <div className="border border-gray-200 p-8 rounded-lg bg-white">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">🌍 Timezone Localization</h3>
              <p className="text-gray-700">All timestamps adjust to your school's timezone. No confusion with display times across regions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Platform</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl">Enterprise-grade reliability, security, and integrations you can trust.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-gray-200 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">📦 Progressive Web App (PWA)</h3>
              <p className="text-gray-700">Installable on home screen like a native app. Works offline-first. Fast, reliable, no app store needed.</p>
            </div>
            <div className="border border-gray-200 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">☁️ Google Drive Integration</h3>
              <p className="text-gray-700">All photos stored securely in Google Drive. OAuth 2.0 authentication. Full control over photo storage location.</p>
            </div>
            <div className="border border-gray-200 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">🔐 SSO Support</h3>
              <p className="text-gray-700">Google Sign-In, Microsoft/Azure SSO, and custom SSO integrations. Works with your existing identity provider.</p>
            </div>
            <div className="border border-gray-200 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">🛡️ CSRF Protection</h3>
              <p className="text-gray-700">All form submissions protected with CSRF tokens. Secure session handling with auto-expiry warnings.</p>
            </div>
            <div className="border border-gray-200 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">📱 Mobile-First Design</h3>
              <p className="text-gray-700">Built from the ground up for mobile. Responsive design works perfectly on kiosks, tablets, and smartphones.</p>
            </div>
            <div className="border border-gray-200 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">🔒 Privacy Focused</h3>
              <p className="text-gray-700">FERPA-friendly design. Student data never shared with third parties. Role-based access control ensures compliance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to See It in Action?</h2>
          <p className="text-xl mb-8 text-blue-100">Request a demo and let us show you how PhotoKiosk can transform your photo collection workflow.</p>
          <button className="px-10 py-4 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg">
            Request a Demo
          </button>
        </div>
      </section>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add app/features/page.tsx
git commit -m "feat: create features page with all feature categories and details"
```

---

### Task 6: Create Contact Page

**Files:**
- Create: `app/contact/page.tsx`

- [ ] **Step 1: Create app/contact/page.tsx with contact form structure and support info**

```typescript
export default function Contact() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Request a Demo
          </h1>
          <p className="text-xl text-gray-600">
            Let's show you how PhotoKiosk can simplify photo collection at your school. Fill out the form below and we'll be in touch within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <form className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                    placeholder="John Smith"
                  />
                </div>

                {/* School Name */}
                <div>
                  <label htmlFor="school" className="block text-sm font-medium text-gray-900 mb-2">
                    School Name *
                  </label>
                  <input
                    type="text"
                    id="school"
                    name="school"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                    placeholder="Lincoln High School"
                  />
                </div>

                {/* Role */}
                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-gray-900 mb-2">
                    Your Role *
                  </label>
                  <select
                    id="role"
                    name="role"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                  >
                    <option value="">Select your role</option>
                    <option value="principal">Principal / Administrator</option>
                    <option value="teacher">Teacher</option>
                    <option value="it">IT Director</option>
                    <option value="office">Office Manager</option>
                    <option value="photographer">Photographer</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                    placeholder="john@lincolnhigh.edu"
                  />
                </div>

                {/* School Size */}
                <div>
                  <label htmlFor="size" className="block text-sm font-medium text-gray-900 mb-2">
                    School Size (Students) *
                  </label>
                  <select
                    id="size"
                    name="size"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                  >
                    <option value="">Select school size</option>
                    <option value="100-500">100–500 students</option>
                    <option value="500-1000">500–1,000 students</option>
                    <option value="1000-2000">1,000–2,000 students</option>
                    <option value="2000+">2,000+ students</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                    Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition resize-none"
                    placeholder="Tell us about your photo collection challenges..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-light transition-colors text-lg"
                >
                  Request a Demo
                </button>

                <p className="text-sm text-gray-600 text-center">
                  We'll respond within 24 hours during business days.
                </p>
              </form>
            </div>

            {/* Support Info */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
                
                <div className="space-y-6">
                  {/* Email Support */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
                    <a href="mailto:support@photokiosk.co" className="text-primary hover:underline">
                      support@photokiosk.co
                    </a>
                  </div>

                  {/* Phone Support */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Response Time</h4>
                    <p className="text-gray-700 text-sm">
                      We typically respond to demo requests within 24 hours on business days.
                    </p>
                  </div>

                  {/* Office Hours */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Hours</h4>
                    <p className="text-gray-700 text-sm">
                      Monday – Friday<br />
                      8:00 AM – 5:00 PM PT
                    </p>
                  </div>

                  {/* Why Demo */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Why Request a Demo?</h4>
                    <ul className="text-gray-700 text-sm space-y-2">
                      <li>✓ See it in action</li>
                      <li>✓ Ask questions</li>
                      <li>✓ Learn pricing</li>
                      <li>✓ Custom setup</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Quick Facts */}
              <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-gray-900 mb-4">Quick Facts</h4>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-2">✓</span>
                    <span>Trusted by 500+ schools</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-2">✓</span>
                    <span>Enterprise-grade security</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-2">✓</span>
                    <span>30-day free trial</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-2">✓</span>
                    <span>No credit card required</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 sm:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Frequently Asked Questions</h2>
          <p className="text-center text-gray-600 text-lg mb-12">Have other questions? Email us at support@photokiosk.co</p>
          
          <div className="space-y-6">
            {/* FAQ 1 */}
            <details className="bg-white p-6 rounded-lg border border-gray-200 cursor-pointer group">
              <summary className="flex items-center justify-between font-semibold text-gray-900 text-lg">
                <span>What's included in the free trial?</span>
                <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-700">
                The 30-day free trial includes full access to all features: photo submission, admin dashboard, bulk export, and SSO integrations. No credit card required to start.
              </p>
            </details>

            {/* FAQ 2 */}
            <details className="bg-white p-6 rounded-lg border border-gray-200 cursor-pointer group">
              <summary className="flex items-center justify-between font-semibold text-gray-900 text-lg">
                <span>Do families need to download an app?</span>
                <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-700">
                No. PhotoKiosk is a Progressive Web App that works on any smartphone without downloading anything. Families just open a link and start uploading.
              </p>
            </details>

            {/* FAQ 3 */}
            <details className="bg-white p-6 rounded-lg border border-gray-200 cursor-pointer group">
              <summary className="flex items-center justify-between font-semibold text-gray-900 text-lg">
                <span>Where are photos stored?</span>
                <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-700">
                Photos are stored securely in Google Drive with OAuth 2.0 authentication. Your school maintains full control over the storage location and access.
              </p>
            </details>

            {/* FAQ 4 */}
            <details className="bg-white p-6 rounded-lg border border-gray-200 cursor-pointer group">
              <summary className="flex items-center justify-between font-semibold text-gray-900 text-lg">
                <span>Is PhotoKiosk FERPA compliant?</span>
                <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-700">
                Yes. We've designed PhotoKiosk with FERPA compliance in mind. Role-based access control, secure sessions, and encrypted data storage ensure student privacy and data security.
              </p>
            </details>

            {/* FAQ 5 */}
            <details className="bg-white p-6 rounded-lg border border-gray-200 cursor-pointer group">
              <summary className="flex items-center justify-between font-semibold text-gray-900 text-lg">
                <span>Can we use our existing login system?</span>
                <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-700">
                Yes. PhotoKiosk supports Google Sign-In, Microsoft/Azure SSO, and custom SSO integrations. We can work with your existing identity provider.
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add app/contact/page.tsx
git commit -m "feat: create contact page with demo request form and FAQ"
```

---

### Task 7: Create Contact Directory

**Files:**
- Create: `app/contact/` directory

- [ ] **Step 1: Ensure contact directory exists (created in Task 6)**

The directory `app/contact/` is automatically created when `app/contact/page.tsx` is created.

---

### Task 8: Test Locally

**Files:**
- No files created/modified

- [ ] **Step 1: Start the development server**

```bash
cd /Users/kshitijahuja/Sites/photokiosk.web && npm run dev
```

Expected output: 
```
> next dev

  ▲ Next.js 14.x.x
  - Local:        http://localhost:3000
```

- [ ] **Step 2: Open browser and test homepage**

Navigate to `http://localhost:3000` and verify:
- Hero section displays with headline, subheadline, and CTA buttons
- Problem statement section renders
- How it works section shows 3 steps
- Feature highlights cards display with icons and text
- Testimonials appear
- Who it's for section shows Schools and Families
- Final CTA section is visible
- Footer is visible at bottom
- Navigation bar at top has links to /features and /contact

- [ ] **Step 3: Test features page**

Navigate to `http://localhost:3000/features` and verify:
- Hero section displays
- "For Families" section shows 6 feature cards
- "For Schools & Admins" section shows 6 feature cards
- "Platform" section shows 6 feature cards
- CTA section at bottom
- Footer is visible
- Navigation links work

- [ ] **Step 4: Test contact page**

Navigate to `http://localhost:3000/contact` and verify:
- Hero section displays
- Contact form shows all fields: name, school name, role, email, school size, message
- Form fields are interactive (can type in inputs)
- Support info box displays on the right
- FAQ section shows 5 collapsible questions
- Footer is visible
- All links are clickable

- [ ] **Step 5: Test navigation**

Click navigation links and verify:
- Home link navigates to `/`
- Features link navigates to `/features`
- Contact link navigates to `/contact`
- All pages load correctly
- Footer links are clickable

- [ ] **Step 6: Test responsive design**

Resize browser to mobile view (375px width) and verify:
- Text is readable
- Images scale correctly
- Form fields stack vertically
- Navigation is accessible
- No horizontal scrolling
- Buttons are appropriately sized for touch

- [ ] **Step 7: Stop development server**

Press `Ctrl+C` in terminal to stop the dev server.

---

### Task 9: Build Static Site

**Files:**
- No files created/modified (outputs to public/)

- [ ] **Step 1: Run the build command**

```bash
cd /Users/kshitijahuja/Sites/photokiosk.web && npm run build
```

Expected output:
```
> next build

> Exporting
```

The build should complete without errors.

- [ ] **Step 2: Verify build output in public folder**

```bash
ls -la /Users/kshitijahuja/Sites/photokiosk.web/public/
```

Expected: Files should include:
- `index.html` (homepage)
- `features/index.html` (features page)
- `contact/index.html` (contact page)
- Other static assets (.js, .css files)

- [ ] **Step 3: Verify HTML files are valid**

```bash
grep -l "DOCTYPE" /Users/kshitijahuja/Sites/photokiosk.web/public/*.html /Users/kshitijahuja/Sites/photokiosk.web/public/*/index.html 2>/dev/null
```

Expected: All HTML files should contain `<!DOCTYPE html>`.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "build: generate static HTML to public folder"
```

---

### Task 10: Final Verification and Documentation

**Files:**
- No files created/modified

- [ ] **Step 1: Verify all pages are in public folder and ready for deployment**

```bash
echo "=== Generated Static Files ===" && find /Users/kshitijahuja/Sites/photokiosk.web/public -type f -name "*.html" | sort
```

Expected output shows three HTML files:
- public/index.html
- public/features/index.html
- public/contact/index.html

- [ ] **Step 2: Test static site locally**

Start a simple HTTP server to test the built output:

```bash
cd /Users/kshitijahuja/Sites/photokiosk.web/public && python3 -m http.server 8000
```

Navigate to `http://localhost:8000` and verify all pages load correctly. Stop the server with `Ctrl+C`.

- [ ] **Step 3: Create README for deployment**

```bash
cat > /Users/kshitijahuja/Sites/photokiosk.web/DEPLOYMENT.md << 'EOF'
# PhotoKiosk Website Deployment

## Build Process
```bash
npm install
npm run build
```

The build outputs static HTML to the `public/` folder.

## Deployment Steps

1. Run `npm install` to install dependencies
2. Run `npm run build` to generate static HTML
3. Upload the entire `public/` folder to your web server
4. Configure your web server to serve from the `public/` folder

## Folder Structure
- `app/` — Source code (pages and components)
- `public/` — Built static HTML files (deploy this folder)
- `node_modules/` — Dependencies (do not deploy)

## Server Configuration
Point your web server root to the `public/` folder. All routes (`/`, `/features`, `/contact`) are pre-rendered as static HTML files.

## Local Testing
After build, test locally:
```bash
cd public && python3 -m http.server 8000
```

Then visit `http://localhost:8000` to verify all pages load correctly.
EOF
```

- [ ] **Step 4: Final commit**

```bash
git add DEPLOYMENT.md
git commit -m "docs: add deployment instructions"
```

---

## Summary

**Tasks completed:**
1. ✅ Initialize Next.js and Tailwind CSS dependencies
2. ✅ Configure Next.js, TypeScript, Tailwind, and PostCSS
3. ✅ Create global styles and shared app layout with nav/footer
4. ✅ Build homepage with 8 sections
5. ✅ Build features page with all feature categories
6. ✅ Build contact page with form and FAQ
7. ✅ Test locally in development mode
8. ✅ Build static site to `public/` folder
9. ✅ Verify all pages render correctly
10. ✅ Document deployment process

**Tech Stack:**
- Next.js 14+ with App Router
- React 18+
- Tailwind CSS 3+ (primary color: #007bff)
- TypeScript
- Static HTML export to `public/` folder

**Result:**
Three fully functional, responsive marketing pages (Homepage, Features, Contact) ready for deployment. All content is generated and can be refined iteratively. Build outputs static HTML directly to `public/` folder for easy server deployment.
