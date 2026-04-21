# Portfolio v2.0 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ship v2.0 of the personal portfolio — two top-level careers (SaaS and Automations; Industry 4.0 and Engineering with Data Engineer subcareer), new minimalist editorial visual system with dual-personality hero, editorial hobbies rewrite, `src/`-based folder reorg, zero emojis, new CVs — while keeping Next 16 + Tailwind v4 + Motion + static export to GitHub Pages.

**Architecture:** Keep the current stack untouched. Restructure the repo into `src/{app,features,ui,content,i18n,styles}`. Split the monolithic `lib/constants.ts` into one file per project detail. Rewrite components against a CSS-first design system defined in Tailwind v4 `@theme` (palette, fonts, easings). Replace career routes (`/career/industry`, `/career/engineer`, `/career/automation-it`) with two new routes and explicitly delete deprecated components.

**Tech Stack:** Next.js 16.1.6 (App Router, `output: 'export'`), React 19, Tailwind CSS v4 (CSS-first `@theme`), Motion (`motion/react`), `next/font/google` for Fraunces + Inter Tight + JetBrains Mono, lucide-react for icons, gh-pages for deploy.

**Spec:** `docs/superpowers/specs/2026-04-21-portfolio-v2-design.md`

---

## Static-site testing convention

The site has no unit-test runner and introducing one is out of scope. Verification in this plan is:

- `npm run lint` — ESLint clean.
- `npm run build` — Next build produces the expected `/out/**/*.html` tree.
- `grep` audits — zero emoji in code/content, no lingering references to deleted components.
- Manual route walk on `npx serve out` — every route responds, toggles work, CVs download.

Every task that ends in working code ends with one or more of these as the verification step, plus a commit.

---

## File structure map

```
/
├── public/files/
│   ├── Automation_IT_Engineer_2026.pdf   (new, moved from repo root)
│   ├── Data_Engineer.pdf                 (new, moved from repo root)
│   └── Engineer_Industry_4_0.pdf         (new, moved from repo root)
│
├── src/
│   ├── app/
│   │   ├── layout.tsx                    (fonts, LocaleProvider, metadata)
│   │   ├── page.tsx                      (home — DualHero + 2 CareerIndexCards)
│   │   ├── not-found.tsx                 (404 with "Looking for…?" block)
│   │   ├── globals.css                   (re-exports ../styles/globals.css)
│   │   ├── hobbies/page.tsx
│   │   └── career/
│   │       ├── saas-automations/page.tsx
│   │       ├── saas-automations/projects/[slug]/page.tsx
│   │       ├── industry-engineering/page.tsx
│   │       └── industry-engineering/projects/[slug]/page.tsx
│   │
│   ├── features/
│   │   ├── hero/        DualHero.tsx, SplitPortrait.tsx
│   │   ├── careers/     CareerPage.tsx, CareerIndexCard.tsx, CVDownloads.tsx
│   │   ├── projects/    ProjectGrid.tsx, ProjectCard.tsx, ComingSoonCard.tsx,
│   │   │                ProjectDetail.tsx, NextProjectLink.tsx
│   │   ├── hobbies/     HobbyStory.tsx
│   │   ├── timeline/    ExperienceTimeline.tsx
│   │   ├── skills/      SkillsCluster.tsx
│   │   └── navigation/  Navbar.tsx, MobileNav.tsx, Footer.tsx, LocaleToggle.tsx
│   │
│   ├── ui/
│   │   ├── Section.tsx        (container + eyebrow number + heading)
│   │   ├── Eyebrow.tsx        (mono number + label)
│   │   ├── Prose.tsx          (body text wrapper)
│   │   ├── Tag.tsx            (mono tag pill)
│   │   ├── Reveal.tsx         (whileInView wrapper, replaces FadeIn)
│   │   ├── Button.tsx         (primary / ghost / link variants)
│   │   └── Link.tsx           (internal arrow link)
│   │
│   ├── content/
│   │   ├── owner.ts           (SITE_OWNER, SOCIAL_LINKS)
│   │   ├── careers.ts         (metadata for saas-automations, industry-engineering)
│   │   ├── projects.ts        (PROJECTS_SAAS, PROJECTS_INDU aggregates)
│   │   ├── project-details/
│   │   │   ├── saas/julius.ts
│   │   │   ├── saas/linkedin-auto-post.ts
│   │   │   └── indu/{ai-data-platform,hotas-remote-control,high-payload-ugv,
│   │   │                 spirit-ugv,drone-assist-base,agro-drone,ttd,
│   │   │                 siemens-stewart}.ts
│   │   ├── experience.ts      (EXPERIENCE_SAAS, EXPERIENCE_INDU)
│   │   ├── skills.ts          (SKILLS_SAAS, SKILLS_INDU with data-engineer cluster)
│   │   ├── education.ts
│   │   ├── hobbies.ts         (6 editorial stories EN/PT)
│   │   └── types.ts
│   │
│   ├── i18n/
│   │   ├── locale-context.tsx
│   │   ├── dictionary.ts
│   │   └── types.ts
│   │
│   └── styles/globals.css     (@import 'tailwindcss' + @theme)
│
├── next.config.ts             (unchanged: output 'export', images.unoptimized)
├── tsconfig.json              ("@/*" -> "./src/*")
└── package.json               (unchanged)
```

---

## Phase 1 — Foundation (sequential, one worker)

### Task 1: Create a worktree for v2 work

**Files:** git state only.

- [ ] **Step 1: Create worktree**

Run:

```bash
git worktree add -b v2 ../0xFelipeGD-v2 main
cd ../0xFelipeGD-v2
```

Expected: new worktree directory at `../0xFelipeGD-v2` on branch `v2`, main branch untouched.

- [ ] **Step 2: Confirm clean state**

Run:

```bash
git status
```

Expected: `nothing to commit, working tree clean` on branch `v2`.

- [ ] **Step 3: Install deps in worktree**

Run:

```bash
npm install
```

Expected: installs in the new worktree with the existing lockfile; no version changes.

---

### Task 2: Move new CVs into /public/files/ and delete obsolete ones

**Files:**
- Move: `/Automation_IT_Engineer_2026.pdf` → `/public/files/Automation_IT_Engineer_2026.pdf` (overwrites old)
- Move: `/Data_Engineer.pdf` → `/public/files/Data_Engineer.pdf`
- Move: `/Engineer_Industry_4_0.pdf` → `/public/files/Engineer_Industry_4_0.pdf`
- Delete: `/public/files/Developer_2026.pdf`
- Delete: `/public/files/Engineer_2026.pdf`

- [ ] **Step 1: Remove the two obsolete PDFs**

Run:

```bash
git rm public/files/Developer_2026.pdf public/files/Engineer_2026.pdf
```

Expected: both files staged for deletion.

- [ ] **Step 2: Move the three new PDFs in (overwriting the stale Automation_IT one)**

Run:

```bash
git mv -f Automation_IT_Engineer_2026.pdf public/files/Automation_IT_Engineer_2026.pdf
git mv Data_Engineer.pdf public/files/Data_Engineer.pdf
git mv Engineer_Industry_4_0.pdf public/files/Engineer_Industry_4_0.pdf
```

Expected: three renames staged.

- [ ] **Step 3: Verify**

Run:

```bash
ls public/files/
```

Expected output:

```
Automation_IT_Engineer_2026.pdf
Data_Engineer.pdf
Engineer_Industry_4_0.pdf
```

And:

```bash
ls *.pdf 2>/dev/null || echo "no stray PDFs at root"
```

Expected: `no stray PDFs at root`.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "chore(v2): install new CVs in public/files, remove obsolete ones"
```

---

### Task 3: Move app/, components/, lib/ into src/ preserving git history

**Files:**
- Move: `app/` → `src/app/`
- Move: `components/` → `src/components/` (temporary — will be refactored further in later tasks)
- Move: `lib/` → `src/lib/` (temporary — content will be split later)

- [ ] **Step 1: Create src/ and git mv existing directories**

Run:

```bash
mkdir src
git mv app src/app
git mv components src/components
git mv lib src/lib
```

Expected: three renames staged.

- [ ] **Step 2: Update tsconfig path alias**

Replace the `paths` entry in `tsconfig.json`:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

(Merge — do not overwrite other compiler options.)

- [ ] **Step 3: Verify build still works with old code under new paths**

Run:

```bash
npm run lint && npm run build
```

Expected: both succeed (Next resolves `@/...` to `./src/...`); `/out` directory regenerates.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "refactor(v2): move app/components/lib into src/, update path alias"
```

---

### Task 4: Create new directory shells for the v2 structure

**Files:** create empty directories with `.gitkeep` so the tree is real before we start filling it.

- [ ] **Step 1: Create directories**

Run:

```bash
mkdir -p src/features/{hero,careers,projects,hobbies,timeline,skills,navigation}
mkdir -p src/ui
mkdir -p src/content/project-details/{saas,indu}
mkdir -p src/i18n
mkdir -p src/styles
```

- [ ] **Step 2: Verify tree**

Run:

```bash
ls src/
```

Expected directories present: `app components features i18n lib styles ui content`.

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "chore(v2): scaffold v2 src/ subdirectories"
```

---

### Task 5: Rewrite `src/styles/globals.css` with the v2 `@theme` block

**Files:**
- Create: `src/styles/globals.css`
- Modify: `src/app/globals.css` (make it re-export the new file)

- [ ] **Step 1: Write the new theme stylesheet**

Create `src/styles/globals.css`:

```css
@import "tailwindcss";

/* ============================================================================
   v2 — minimalist editorial, warm palette, dual-personality hero.
   Tailwind v4 auto-generates utilities from these CSS variables
   (e.g. --color-saas -> bg-saas / text-saas / border-saas).
   ============================================================================ */

@theme {
  --color-bg:      oklch(0.97 0.012 85);
  --color-surface: oklch(0.99 0.008 85);
  --color-ink:     oklch(0.20 0.015 270);
  --color-muted:   oklch(0.55 0.010 270);
  --color-line:    oklch(0.90 0.010 85);

  --color-saas:    oklch(0.62 0.14 240);
  --color-indu:    oklch(0.65 0.13 45);
  --color-signal:  oklch(0.72 0.18 55);

  --font-display: var(--font-display);
  --font-sans:    var(--font-sans);
  --font-mono:    var(--font-mono);

  --ease-fluid:  cubic-bezier(0.3, 0, 0, 1);
  --ease-snappy: cubic-bezier(0.2, 0, 0, 1);

  --animate-reveal: reveal 0.6s var(--ease-fluid) both;

  @keyframes reveal {
    from { opacity: 0; transform: translateY(12px); }
    to   { opacity: 1; transform: translateY(0); }
  }
}

/* Optional dark variant — off by default in v2 ship. */
.dark {
  --color-bg:      oklch(0.15 0.015 270);
  --color-surface: oklch(0.18 0.015 270);
  --color-ink:     oklch(0.96 0.010 85);
  --color-muted:   oklch(0.70 0.015 85);
  --color-line:    oklch(0.28 0.015 270);
}

html { scroll-behavior: smooth; overflow-x: hidden; }

body {
  background: var(--color-bg);
  color: var(--color-ink);
  font-family: var(--font-sans), system-ui, -apple-system, sans-serif;
  font-feature-settings: "cv11", "ss01";
  -webkit-font-smoothing: antialiased;
}

::selection { background: var(--color-signal); color: var(--color-bg); }
```

- [ ] **Step 2: Point the app entry at the new stylesheet**

Replace contents of `src/app/globals.css` with:

```css
@import "../styles/globals.css";
```

(Next auto-imports `app/globals.css`; keeping a thin re-export preserves that convention without duplicating the theme.)

- [ ] **Step 3: Verify build**

Run:

```bash
npm run build
```

Expected: succeeds. Old pages now render with the new palette (will look different — that is intentional and will be cleaned up as components get rewritten in Phase 2).

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "feat(v2): introduce Tailwind v4 @theme with warm editorial palette"
```

---

### Task 6: Install display, sans, and mono fonts via `next/font/google`

**Files:**
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Replace font imports and variables**

Open `src/app/layout.tsx` and replace the `geistSans`/`geistMono` block with:

```tsx
import type { Metadata } from "next";
import { Fraunces, Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE_OWNER } from "@/lib/constants";
import { LocaleProvider } from "@/lib/locale-context";

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const sans = Inter_Tight({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${SITE_OWNER.fullName} — Engineer of connected systems`,
    template: `%s | ${SITE_OWNER.fullName}`,
  },
  description:
    "Felipe Gonçalves Diogo — SaaS & Automations, Industry 4.0 & Engineering. Lisbon, Portugal.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body className="bg-bg text-ink antialiased">
        <LocaleProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </LocaleProvider>
      </body>
    </html>
  );
}
```

- [ ] **Step 2: Verify build**

Run:

```bash
npm run build
```

Expected: succeeds; Google fonts fetched at build time, CSS variables `--font-display`, `--font-sans`, `--font-mono` exposed on `<html>`.

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "feat(v2): swap Geist for Fraunces + Inter Tight + JetBrains Mono"
```

---

### Task 7: Split `lib/constants.ts` into `src/content/*` files

**Files:**
- Create:
  - `src/content/types.ts`
  - `src/content/owner.ts`
  - `src/content/careers.ts`
  - `src/content/experience.ts`
  - `src/content/skills.ts`
  - `src/content/education.ts`
  - `src/content/hobbies.ts`
  - `src/content/projects.ts`
  - `src/content/project-details/saas/julius.ts`
  - `src/content/project-details/saas/linkedin-auto-post.ts`
  - `src/content/project-details/indu/ai-data-platform.ts`
  - `src/content/project-details/indu/hotas-remote-control.ts`
  - `src/content/project-details/indu/high-payload-ugv.ts`
  - `src/content/project-details/indu/spirit-ugv.ts`
  - `src/content/project-details/indu/drone-assist-base.ts`
  - `src/content/project-details/indu/agro-drone.ts`
  - `src/content/project-details/indu/ttd.ts`
  - `src/content/project-details/indu/siemens-stewart.ts`
- Modify: `src/lib/constants.ts` (becomes a re-export shim for backwards compat during migration; deleted in Phase 3)

- [ ] **Step 1: Write the shared types file**

Create `src/content/types.ts`:

```ts
export type Locale = "en" | "pt";
export type CareerId = "saas-automations" | "industry-engineering";

export interface Localized<T = string> { en: T; pt: T; }

export interface Experience {
  company: string;
  role: Localized;
  period: string;
  location: string;
  bullets: Localized<string[]>;
}

export interface Education {
  school: string;
  degree: Localized;
  period: string;
  location: string;
}

export interface Project {
  slug: string;
  title: string;
  description: Localized;
  coverImage: string;
  tags: string[];
  comingSoon?: boolean;
}

export interface ProjectDetailSection {
  heading: Localized;
  body: Localized;
  image?: string;
  images?: string[];
  imageCaption?: Localized;
}

export interface ProjectDetail {
  slug: string;
  career: CareerId;
  title: string;
  subtitle: Localized;
  bannerImage: string;
  liveUrl?: string;
  tags: string[];
  sections: ProjectDetailSection[];
}

export interface Hobby {
  slug: string;
  title: Localized;
  body: Localized;                   // 3–5 sentence prose
  meta: { label: Localized; value: Localized }[];
  image: string;
  imageSide: "left" | "right";
}
```

- [ ] **Step 2: Write owner.ts**

Create `src/content/owner.ts`:

```ts
export const SITE_OWNER = {
  firstName: "Felipe",
  fullName: "Felipe Gonçalves Diogo",
  initials: "FD",
  location: { en: "Lisbon, Portugal", pt: "Lisboa, Portugal" },
  role: { en: "Engineer of connected systems", pt: "Engenheiro de sistemas conectados" },
  avatarSrc: "/images/me3.jpeg",
  cv: {
    saasAutomations: "/files/Automation_IT_Engineer_2026.pdf",
    industryEngineering: "/files/Engineer_Industry_4_0.pdf",
    dataEngineer: "/files/Data_Engineer.pdf",
  },
} as const;

export const SOCIAL_LINKS = {
  linkedin: "https://linkedin.com/in/felipegdiogo",
  github: "https://github.com/0xFelipeGD",
  email: "mailto:felipe.g.diogo@gmail.com",
  website: "https://0xfelipegd.github.io",
} as const;
```

- [ ] **Step 3: Write careers.ts**

Create `src/content/careers.ts`:

```ts
import type { CareerId, Localized } from "./types";

export interface CareerMeta {
  id: CareerId;
  index: string;               // "01", "02"
  accent: "saas" | "indu";
  slug: string;                // URL segment
  title: Localized;
  tagline: Localized;
  bio: Localized;
  lead: Localized;             // short 1-sentence lead for the home card
}

export const CAREERS: CareerMeta[] = [
  {
    id: "saas-automations",
    index: "01",
    accent: "saas",
    slug: "saas-automations",
    title: { en: "SaaS & Automations", pt: "SaaS & Automações" },
    tagline: {
      en: "n8n · AI agents · REST pipelines · production PWAs",
      pt: "n8n · agentes IA · pipelines REST · PWAs em produção",
    },
    bio: {
      en: "End-to-end automation systems — event-driven pipelines, AI-integrated workflows, cloud-connected SaaS. Python and TypeScript, n8n and Make, REST and webhooks. Founder of Movewer Technologies.",
      pt: "Sistemas de automação ponta a ponta — pipelines orientados a eventos, workflows com IA integrada, SaaS na nuvem. Python e TypeScript, n8n e Make, REST e webhooks. Fundador da Movewer Technologies.",
    },
    lead: {
      en: "Automations and AI-driven workflows that run themselves.",
      pt: "Automações e fluxos com IA que se mantêm sozinhos.",
    },
  },
  {
    id: "industry-engineering",
    index: "02",
    accent: "indu",
    slug: "industry-engineering",
    title: { en: "Industry 4.0 & Engineering", pt: "Indústria 4.0 & Engenharia" },
    tagline: {
      en: "IIoT · SCADA · PLC · UGV · data — with a Data Engineer track",
      pt: "IIoT · SCADA · CLP · UGV · dados — com trilha de Data Engineer",
    },
    bio: {
      en: "Mechatronic and control engineer with 8+ years turning field devices into connected systems — PLC and SCADA, UGV and drone platforms, IT/OT convergence, time-series pipelines and AI-driven analytics. A Data Engineer track sits inside this practice.",
      pt: "Engenheiro mecatrônico e de controle com 8+ anos transformando dispositivos de campo em sistemas conectados — CLP e SCADA, plataformas UGV e drone, convergência IT/OT, pipelines time-series e analytics com IA. A trilha de Data Engineer faz parte dessa prática.",
    },
    lead: {
      en: "From control cabinets to cloud dashboards — the full Industry 4.0 stack.",
      pt: "Do painel de controle ao dashboard na nuvem — stack completa de Indústria 4.0.",
    },
  },
];

export const careerBySlug = (slug: string) => CAREERS.find((c) => c.slug === slug);
```

- [ ] **Step 4: Write one project detail file (template)**

Create `src/content/project-details/indu/ai-data-platform.ts` by copying the `"ai-data-platform-iot"` entry from `src/lib/constants.ts` (the `PROJECT_DETAILS` record) into this shape:

```ts
import type { ProjectDetail } from "../../types";

export const aiDataPlatform: ProjectDetail = {
  slug: "ai-data-platform-iot",
  career: "industry-engineering",
  title: "AI Data Platform",
  subtitle: { /* copy from PROJECT_DETAILS["ai-data-platform-iot"].subtitle */ },
  bannerImage: "/images/projects/industry-engineering/ai-data-platform-architecture.png",
  tags: ["Docker", "MQTT", "InfluxDB", "Grafana", "Telegraf", "Python", "TLS"],
  sections: [ /* copy sections array verbatim; update any image path prefix
                 from /images/projects/industry/... to
                 /images/projects/industry-engineering/... */ ],
};
```

**Rule of the migration:** every piece of EN/PT copy and every image reference is **preserved verbatim** except for the image path prefix change (`industry/` → `industry-engineering/`, `automation-it/` → `saas-automations/`). Do not rewrite copy yet.

- [ ] **Step 5: Repeat Step 4 for the remaining 9 real projects**

Create, one file per project, using the same shape:

- `src/content/project-details/saas/julius.ts` (`julius-finance-bot`)
- `src/content/project-details/saas/linkedin-auto-post.ts` (`linkedin-auto-post`)
- `src/content/project-details/indu/hotas-remote-control.ts` (`hotas-remote-control`)
- `src/content/project-details/indu/high-payload-ugv.ts` (`high-payload-ugv`)
- `src/content/project-details/indu/spirit-ugv.ts` (`spirit-ugv`)
- `src/content/project-details/indu/drone-assist-base.ts` (`drone-assist-base`)
- `src/content/project-details/indu/agro-drone.ts` (`agro-drone`)
- `src/content/project-details/indu/ttd.ts` (`ttd`)
- `src/content/project-details/indu/siemens-stewart.ts` (`siemens-portable-case`)

For each:

1. Copy the object from `PROJECT_DETAILS` in `src/lib/constants.ts`.
2. Add the surrounding `export const <name>: ProjectDetail = { … }` with the correct `career` field (`"saas-automations"` or `"industry-engineering"`).
3. Update image path prefixes (`industry/` → `industry-engineering/`, `engineer/` → `industry-engineering/`, `automation-it/` → `saas-automations/`).
4. Do **not** include the 4 placeholder "Coming soon" slugs (`industry-project-3…6`, `automation-project-3…6`) — they get Coming Soon cards, not detail pages.

- [ ] **Step 6: Write projects.ts aggregate**

Create `src/content/projects.ts`:

```ts
import type { Project, ProjectDetail } from "./types";
import { julius } from "./project-details/saas/julius";
import { linkedinAutoPost } from "./project-details/saas/linkedin-auto-post";
import { aiDataPlatform } from "./project-details/indu/ai-data-platform";
import { hotasRemoteControl } from "./project-details/indu/hotas-remote-control";
import { highPayloadUgv } from "./project-details/indu/high-payload-ugv";
import { spiritUgv } from "./project-details/indu/spirit-ugv";
import { droneAssistBase } from "./project-details/indu/drone-assist-base";
import { agroDrone } from "./project-details/indu/agro-drone";
import { ttd } from "./project-details/indu/ttd";
import { siemensStewart } from "./project-details/indu/siemens-stewart";

/**
 * Coming Soon placeholders: only slug/title/description/coverImage/tags are
 * defined — no ProjectDetail is generated (they render as ComingSoonCard only).
 */
const comingSoon = (slug: string, index: number, folder: string): Project => ({
  slug,
  title: "Coming soon",
  description: {
    en: "In pipeline. Case study will land once the project ships.",
    pt: "No pipeline. O case study chega quando o projeto for publicado.",
  },
  coverImage: `/images/projects/${folder}/C${index}.png`,
  tags: ["in pipeline"],
  comingSoon: true,
});

const detailToProject = (d: ProjectDetail): Project => ({
  slug: d.slug,
  title: d.title,
  description: { en: d.sections[0].body.en.split(".")[0] + ".", pt: d.sections[0].body.pt.split(".")[0] + "." },
  coverImage: d.bannerImage,
  tags: d.tags,
});

export const PROJECT_DETAILS: Record<string, ProjectDetail> = Object.fromEntries(
  [
    julius, linkedinAutoPost,
    aiDataPlatform, hotasRemoteControl, highPayloadUgv, spiritUgv,
    droneAssistBase, agroDrone, ttd, siemensStewart,
  ].map((d) => [d.slug, d]),
);

export const PROJECTS_SAAS: Project[] = [
  detailToProject(julius),
  detailToProject(linkedinAutoPost),
  comingSoon("saas-coming-01", 1, "saas-automations"),
  comingSoon("saas-coming-02", 2, "saas-automations"),
  comingSoon("saas-coming-03", 3, "saas-automations"),
  comingSoon("saas-coming-04", 4, "saas-automations"),
];

export const PROJECTS_INDU: Project[] = [
  detailToProject(aiDataPlatform),
  detailToProject(hotasRemoteControl),
  detailToProject(highPayloadUgv),
  detailToProject(spiritUgv),
  detailToProject(droneAssistBase),
  detailToProject(agroDrone),
  detailToProject(ttd),
  detailToProject(siemensStewart),
  comingSoon("indu-coming-01", 1, "industry-engineering"),
  comingSoon("indu-coming-02", 2, "industry-engineering"),
  comingSoon("indu-coming-03", 3, "industry-engineering"),
  comingSoon("indu-coming-04", 4, "industry-engineering"),
];
```

**Note:** the per-card `description` for real projects is derived (first sentence of the first section). If the derived sentence reads poorly, override by adding an explicit `description` field to the detail file and reading it here. Keep migration minimal — override only if needed.

- [ ] **Step 7: Write experience.ts, skills.ts, education.ts, hobbies.ts shells**

Create `src/content/experience.ts` — union of the former `EXPERIENCE_INDUSTRY` and `EXPERIENCE_ENGINEER` into `EXPERIENCE_INDU` (deduplicate identical companies by taking the most comprehensive bullet set — Movewer, Psyche AeroSpace, Controvale — and keep the Industry 4.0 flavor in wording since Data Engineer is a subset). Keep `EXPERIENCE_SAAS` as-is from `EXPERIENCE_AUTOMATION_IT`:

```ts
import type { Experience } from "./types";

export const EXPERIENCE_SAAS: Experience[] = [ /* copy EXPERIENCE_AUTOMATION_IT */ ];

export const EXPERIENCE_INDU: Experience[] = [ /* merge of EXPERIENCE_INDUSTRY and
   EXPERIENCE_ENGINEER — one entry per company, preferring the bullet set that
   best reflects the combined Industry 4.0 + Engineering scope. The Data
   Engineer facet is represented in bullets that mention IIoT/time-series/AI
   analytics. */ ];
```

Create `src/content/skills.ts`:

```ts
export interface SkillCluster {
  id: string;
  label: { en: string; pt: string };
  items: string[];
}

export const SKILLS_SAAS: SkillCluster[] = [
  {
    id: "automation",
    label: { en: "Automation", pt: "Automação" },
    items: ["n8n", "Make (Integromat)", "Zapier", "Node-RED", "Power Automate"],
  },
  {
    id: "code",
    label: { en: "Code", pt: "Código" },
    items: ["Python", "JavaScript / TypeScript", "Node.js", "Next.js", "React"],
  },
  {
    id: "ai",
    label: { en: "AI integration", pt: "Integração com IA" },
    items: ["OpenAI API", "Claude API", "AI Agents", "Prompt engineering", "LLM workflow design"],
  },
  {
    id: "data-infra",
    label: { en: "Data & infra", pt: "Dados & infra" },
    items: ["REST / Webhook APIs", "PostgreSQL", "Supabase", "InfluxDB", "Docker", "Linux / VPS", "GitHub Actions"],
  },
];

export const SKILLS_INDU: SkillCluster[] = [
  {
    id: "control",
    label: { en: "Control & PLC", pt: "Controle & CLP" },
    items: [
      "PLC Programming (TIA Portal, CODESYS, GX Works)",
      "SCADA / HMI (AVEVA, WinCC, Indusoft)",
      "Industrial Protocols (Modbus, Profinet, EtherCAT, OPC-UA, LoRa)",
      "Electrical Panel Design (EPLAN, AutoCAD Electrical)",
      "Motion Control",
      "Power Electronics",
    ],
  },
  {
    id: "iiot",
    label: { en: "IIoT & IT/OT", pt: "IIoT & IT/OT" },
    items: [
      "Industrial IoT (IIoT)",
      "IT/OT Convergence",
      "MQTT / Mosquitto / TLS",
      "Node-RED", "Telegraf", "WebRTC",
      "Industrial Cybersecurity",
      "Digital Twin Concepts",
    ],
  },
  {
    id: "data-engineer",
    label: { en: "Data Engineer", pt: "Data Engineer" },
    items: [
      "InfluxDB / Time-Series DBs",
      "Grafana",
      "Python (pandas, numpy, analytics)",
      "Data pipelines (ingest → transform → persist)",
      "AI / LLM-driven analytics",
      "REST / Webhook integrations",
      "Real-time alerting",
    ],
  },
  {
    id: "edge",
    label: { en: "Edge & hardware", pt: "Edge & hardware" },
    items: [
      "Raspberry Pi", "NVIDIA Jetson", "ESP32", "Embedded Systems",
      "UGV / AGV Development", "Drone Systems",
      "SolidWorks", "MATLAB / LabView",
    ],
  },
  {
    id: "software",
    label: { en: "Software", pt: "Software" },
    items: ["Python", "Node.js / TypeScript", "Docker / Docker Compose", "Linux / VPS", "CI/CD (GitHub Actions)"],
  },
];
```

Create `src/content/education.ts` by copying the existing `EDUCATION` array.

Create `src/content/hobbies.ts` with the existing six entries as a shell (will be fully rewritten by Track D). For now, copy the current `HOBBIES` array into this file but strip the `icon` (emoji) field — leave `title`, `description`, `image`. Track D rewrites the shape later.

- [ ] **Step 8: Keep `src/lib/constants.ts` as a compatibility shim**

Replace the contents of `src/lib/constants.ts` with:

```ts
/**
 * Deprecated. This file re-exports the split content under src/content/ so
 * existing components continue to build during the v2 migration. Delete once
 * all imports have been migrated to @/content/*.
 */
export { SITE_OWNER, SOCIAL_LINKS } from "@/content/owner";
export { EXPERIENCE_SAAS, EXPERIENCE_INDU } from "@/content/experience";
export { SKILLS_SAAS, SKILLS_INDU } from "@/content/skills";
export { EDUCATION } from "@/content/education";
export { PROJECTS_SAAS, PROJECTS_INDU, PROJECT_DETAILS } from "@/content/projects";
export { CAREERS, careerBySlug } from "@/content/careers";
export type { Project, ProjectDetail, Experience, Education, Hobby, Locale, CareerId } from "@/content/types";
```

Old components that imported the v1 names (`EXPERIENCE_INDUSTRY`, `EXPERIENCE_ENGINEER`, `EXPERIENCE_AUTOMATION_IT`, etc.) will fail to build. That's expected — Phase 2 replaces them. If you need a temporary bridge to keep `npm run build` passing after this task, add temporary aliases in this shim (`export const EXPERIENCE_AUTOMATION_IT = EXPERIENCE_SAAS;` etc.) and drop them in Phase 3.

- [ ] **Step 9: Verify build**

Run:

```bash
npm run build
```

If it fails because of renamed symbols in old components, add temporary aliases to the shim as described above until it passes.

- [ ] **Step 10: Commit**

```bash
git add -A
git commit -m "refactor(v2): split constants.ts into src/content/* per domain"
```

---

### Task 8: Rename image folders

**Files:**
- Rename: `public/images/projects/industry` → `public/images/projects/industry-engineering`
- Rename: `public/images/projects/engineer` → merged into `public/images/projects/industry-engineering`
- Rename: `public/images/projects/automation-it` → `public/images/projects/saas-automations`
- Create: `public/images/portrait/me3.jpeg` (move from `public/images/me3.jpeg`)

- [ ] **Step 1: Rename folders**

Run:

```bash
git mv public/images/projects/industry public/images/projects/industry-engineering
git mv public/images/projects/automation-it public/images/projects/saas-automations
# Now merge the engineer folder contents into industry-engineering:
for f in public/images/projects/engineer/*; do
  git mv "$f" "public/images/projects/industry-engineering/$(basename "$f")"
done
rmdir public/images/projects/engineer
```

- [ ] **Step 2: Move the portrait**

```bash
mkdir public/images/portrait
git mv public/images/me3.jpeg public/images/portrait/me3.jpeg
```

- [ ] **Step 3: Update content file image path prefixes**

Run a search-replace across `src/content/project-details/` to shift all `/images/projects/industry/` and `/images/projects/engineer/` prefixes to `/images/projects/industry-engineering/`, and all `/images/projects/automation-it/` to `/images/projects/saas-automations/`. The content files you created in Task 7 should already reflect this; if any slipped through, fix now.

Also update `src/content/owner.ts` `avatarSrc` to `/images/portrait/me3.jpeg`.

- [ ] **Step 4: Verify build**

```bash
npm run build
```

Expected: succeeds.

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "chore(v2): rename project image folders, move portrait"
```

---

### Task 9: Phase 1 gate — clean build on the old UI with the new foundation

- [ ] **Step 1: Lint**

```bash
npm run lint
```

Expected: clean.

- [ ] **Step 2: Build**

```bash
npm run build
```

Expected: succeeds; the old UI renders under the new foundation (palette looks different, fonts changed — that's fine).

- [ ] **Step 3: Tag**

```bash
git tag -a v2-phase1 -m "v2 foundation complete"
```

This pins the exact state before Phase 2 parallel work begins. If any parallel track blocks, others can checkpoint against this tag.

---

## Phase 2 — Design system + features (parallel tracks)

**Orchestration:** after Task 9 lands, dispatch tracks A / B / C / D concurrently via `superpowers:dispatching-parallel-agents`. Track A is the gate — B, C, D all wait for A to finish before starting because they consume A's primitives. Inside each track, tasks are sequential.

```
                ┌─────────────────┐
 Task 9 done ─▶ │ Track A (prim.) │
                └────────┬────────┘
         ┌───────────────┼───────────────┐
         ▼               ▼               ▼
    Track B (home)   Track C (career)  Track D (hobbies)
```

---

### Track A — Design system primitives

**Owner files:** `src/ui/*`, `src/features/hero/SplitPortrait.tsx`.

### Task A.1: `src/ui/Reveal.tsx`

**Files:**
- Create: `src/ui/Reveal.tsx`

- [ ] **Step 1: Write Reveal component**

```tsx
"use client";

import { motion, useReducedMotion, type MotionProps } from "motion/react";
import type { ReactNode } from "react";

interface RevealProps extends Omit<MotionProps, "children"> {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "article" | "li";
}

export function Reveal({ children, delay = 0, className, as = "div", ...rest }: RevealProps) {
  const reduced = useReducedMotion();
  const Tag = motion[as] as typeof motion.div;

  if (reduced) {
    const Static = as as "div";
    return <Static className={className}>{children}</Static>;
  }

  return (
    <Tag
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-64px" }}
      transition={{ duration: 0.6, delay, ease: [0.3, 0, 0, 1] }}
      className={className}
      {...rest}
    >
      {children}
    </Tag>
  );
}
```

- [ ] **Step 2: Verify build**

```bash
npm run build
```

- [ ] **Step 3: Commit**

```bash
git add src/ui/Reveal.tsx
git commit -m "feat(ui): Reveal primitive (replaces FadeIn, respects reduced motion)"
```

---

### Task A.2: `src/ui/Eyebrow.tsx` and `src/ui/Section.tsx`

**Files:**
- Create: `src/ui/Eyebrow.tsx`
- Create: `src/ui/Section.tsx`

- [ ] **Step 1: Write Eyebrow**

```tsx
interface EyebrowProps {
  index?: string;          // "01", "02"
  label: string;
  className?: string;
}

export function Eyebrow({ index, label, className = "" }: EyebrowProps) {
  return (
    <div className={`font-mono text-xs uppercase tracking-[0.2em] text-muted ${className}`}>
      {index && <span className="mr-3 text-ink">{index}</span>}
      <span>{label}</span>
    </div>
  );
}
```

- [ ] **Step 2: Write Section**

```tsx
import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { Eyebrow } from "./Eyebrow";

interface SectionProps {
  id?: string;
  eyebrowIndex?: string;
  eyebrowLabel?: string;
  heading?: string;
  intro?: ReactNode;
  children: ReactNode;
  className?: string;
}

export function Section({
  id,
  eyebrowIndex,
  eyebrowLabel,
  heading,
  intro,
  children,
  className = "",
}: SectionProps) {
  return (
    <section id={id} className={`mx-auto max-w-6xl px-6 py-24 sm:px-8 sm:py-32 ${className}`}>
      {(eyebrowLabel || heading) && (
        <Reveal className="mb-10 max-w-3xl">
          {eyebrowLabel && <Eyebrow index={eyebrowIndex} label={eyebrowLabel} className="mb-4" />}
          {heading && (
            <h2 className="font-display text-[clamp(1.75rem,4vw,3rem)] font-medium leading-[1.05] tracking-tight text-ink">
              {heading}
            </h2>
          )}
          {intro && <div className="mt-5 max-w-2xl text-[17px] leading-[1.6] text-muted">{intro}</div>}
        </Reveal>
      )}
      {children}
    </section>
  );
}
```

- [ ] **Step 3: Verify build and commit**

```bash
npm run build
git add src/ui/Eyebrow.tsx src/ui/Section.tsx
git commit -m "feat(ui): Eyebrow + Section primitives"
```

---

### Task A.3: `src/ui/Button.tsx`, `src/ui/Link.tsx`, `src/ui/Tag.tsx`, `src/ui/Prose.tsx`

**Files:** four small primitives.

- [ ] **Step 1: Write Button**

Create `src/ui/Button.tsx`:

```tsx
import type { ComponentProps, ReactNode } from "react";
import NextLink from "next/link";
import { ArrowRight, ArrowUpRight, Download } from "lucide-react";

type Variant = "primary" | "ghost" | "download";

interface BaseProps {
  variant?: Variant;
  children: ReactNode;
  className?: string;
  icon?: "arrow" | "external" | "download" | "none";
}

const base = "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors";
const variants: Record<Variant, string> = {
  primary: "bg-ink text-bg hover:bg-signal",
  ghost:   "border border-line text-ink hover:border-ink",
  download:"border border-line text-ink hover:border-ink",
};

function iconFor(kind: BaseProps["icon"]) {
  if (kind === "arrow") return <ArrowRight size={16} />;
  if (kind === "external") return <ArrowUpRight size={16} />;
  if (kind === "download") return <Download size={16} />;
  return null;
}

export function Button({
  variant = "primary",
  icon = "arrow",
  children,
  className = "",
  ...rest
}: BaseProps & ComponentProps<"button">) {
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
      {iconFor(icon)}
    </button>
  );
}

export function LinkButton({
  href,
  variant = "primary",
  icon = "arrow",
  children,
  className = "",
  external = false,
}: BaseProps & { href: string; external?: boolean }) {
  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={`${base} ${variants[variant]} ${className}`}>
        {children}
        {iconFor(icon)}
      </a>
    );
  }
  return (
    <NextLink href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
      {iconFor(icon)}
    </NextLink>
  );
}
```

- [ ] **Step 2: Write Link**

Create `src/ui/Link.tsx`:

```tsx
import NextLink from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";

interface Props {
  href: string;
  children: ReactNode;
  direction?: "forward" | "back";
  className?: string;
}

export function ArrowLink({ href, children, direction = "forward", className = "" }: Props) {
  return (
    <NextLink
      href={href}
      className={`group inline-flex items-center gap-2 text-sm font-medium text-ink underline-offset-4 hover:underline ${className}`}
    >
      {direction === "back" && <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-0.5" />}
      {children}
      {direction === "forward" && <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />}
    </NextLink>
  );
}
```

- [ ] **Step 3: Write Tag**

Create `src/ui/Tag.tsx`:

```tsx
export function Tag({ children, muted = false }: { children: string; muted?: boolean }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-line px-2.5 py-0.5 font-mono text-[11px] tracking-wider uppercase ${
        muted ? "text-muted" : "text-ink"
      }`}
    >
      {children}
    </span>
  );
}
```

- [ ] **Step 4: Write Prose**

Create `src/ui/Prose.tsx`:

```tsx
import type { ReactNode } from "react";

export function Prose({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`max-w-prose text-[17px] leading-[1.6] text-ink whitespace-pre-line ${className}`}>
      {children}
    </div>
  );
}
```

- [ ] **Step 5: Verify build and commit**

```bash
npm run build
git add src/ui/Button.tsx src/ui/Link.tsx src/ui/Tag.tsx src/ui/Prose.tsx
git commit -m "feat(ui): Button + LinkButton + ArrowLink + Tag + Prose primitives"
```

---

### Task A.4: `src/features/hero/SplitPortrait.tsx`

**Files:**
- Create: `src/features/hero/SplitPortrait.tsx`

- [ ] **Step 1: Write the dual-duotone portrait**

```tsx
import Image from "next/image";
import { SITE_OWNER } from "@/content/owner";

/**
 * Displays the same portrait twice with two CSS duotone treatments,
 * separated by a 1px hairline. Stacks vertically under 640px.
 */
export function SplitPortrait() {
  return (
    <div className="relative grid w-full overflow-hidden rounded-3xl border border-line bg-surface [grid-template-columns:1fr] sm:[grid-template-columns:1fr_1px_1fr]">
      <PortraitHalf tint="saas" label="SaaS & Automations" />
      <div className="hidden h-full w-px bg-line sm:block" aria-hidden />
      <PortraitHalf tint="indu" label="Industry 4.0 & Engineering" />
    </div>
  );
}

function PortraitHalf({ tint, label }: { tint: "saas" | "indu"; label: string }) {
  const tintVar = tint === "saas" ? "var(--color-saas)" : "var(--color-indu)";
  return (
    <figure className="relative aspect-[4/5] w-full">
      <Image
        src={SITE_OWNER.avatarSrc}
        alt={SITE_OWNER.fullName}
        fill
        sizes="(min-width: 640px) 50vw, 100vw"
        className="object-cover"
        priority
      />
      {/* Duotone overlay: colour layer blended over greyscale photo. */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundColor: tintVar,
          mixBlendMode: "color",
          opacity: 0.55,
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-ink"
        style={{ mixBlendMode: "saturation", opacity: 0.15 }}
      />
      <figcaption className="absolute bottom-4 left-4 rounded-full border border-bg/40 bg-bg/80 px-3 py-1 font-mono text-[11px] tracking-wider uppercase text-ink backdrop-blur">
        {label}
      </figcaption>
    </figure>
  );
}
```

- [ ] **Step 2: Verify build**

```bash
npm run build
```

- [ ] **Step 3: Commit**

```bash
git add src/features/hero/SplitPortrait.tsx
git commit -m "feat(hero): SplitPortrait — dual duotone on the same photo"
```

---

### Task A.5: Track A gate

- [ ] **Step 1: Verify all primitives build and typecheck**

```bash
npm run lint && npm run build
```

Expected: clean.

- [ ] **Step 2: Tag**

```bash
git tag -a v2-track-a -m "v2 design primitives complete"
```

Tracks B, C, D unblock.

---

### Track B — Home, Navbar, Footer, LocaleToggle

### Task B.1: `src/features/navigation/LocaleToggle.tsx`

**Files:**
- Create: `src/features/navigation/LocaleToggle.tsx`

- [ ] **Step 1: Write the toggle**

```tsx
"use client";

import { Globe } from "lucide-react";
import { useLocale } from "@/i18n/locale-context";

export function LocaleToggle() {
  const { locale, toggleLocale } = useLocale();
  return (
    <button
      onClick={toggleLocale}
      className="inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1 font-mono text-[11px] tracking-widest uppercase text-ink transition-colors hover:border-ink"
    >
      <Globe size={12} />
      {locale === "en" ? "PT" : "EN"}
    </button>
  );
}
```

- [ ] **Step 2: Verify build and commit**

```bash
npm run build
git add src/features/navigation/LocaleToggle.tsx
git commit -m "feat(nav): LocaleToggle"
```

---

### Task B.2: `src/features/navigation/Navbar.tsx` and `MobileNav.tsx`

**Files:**
- Create: `src/features/navigation/Navbar.tsx`
- Create: `src/features/navigation/MobileNav.tsx`

- [ ] **Step 1: Write Navbar**

```tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { SITE_OWNER } from "@/content/owner";
import { useLocale } from "@/i18n/locale-context";
import { LocaleToggle } from "./LocaleToggle";
import { MobileNav } from "./MobileNav";

export function Navbar() {
  const { t } = useLocale();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 border-b border-line bg-bg/85 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6 sm:px-8">
          <Link href="/" className="font-display text-[15px] font-medium tracking-tight text-ink">
            {SITE_OWNER.fullName}
          </Link>
          <nav className="hidden items-center gap-8 md:flex">
            <NavLink href="/career/saas-automations">{t("nav.saas")}</NavLink>
            <NavLink href="/career/industry-engineering">{t("nav.indu")}</NavLink>
            <NavLink href="/hobbies">{t("nav.hobbies")}</NavLink>
            <LocaleToggle />
          </nav>
          <div className="flex items-center gap-3 md:hidden">
            <LocaleToggle />
            <button
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className="rounded-md p-2 text-ink"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <MobileNav onClose={() => setOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-sm text-muted transition-colors hover:text-ink"
    >
      {children}
    </Link>
  );
}
```

- [ ] **Step 2: Write MobileNav**

```tsx
"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { useLocale } from "@/i18n/locale-context";

export function MobileNav({ onClose }: { onClose: () => void }) {
  const { t } = useLocale();
  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-bg">
      <div className="flex h-14 items-center justify-end px-6">
        <button aria-label="Close menu" onClick={onClose} className="rounded-md p-2 text-ink">
          <X size={20} />
        </button>
      </div>
      <nav className="mt-10 flex flex-col gap-8 px-8">
        <MobileLink href="/career/saas-automations" onClick={onClose}>{t("nav.saas")}</MobileLink>
        <MobileLink href="/career/industry-engineering" onClick={onClose}>{t("nav.indu")}</MobileLink>
        <MobileLink href="/hobbies" onClick={onClose}>{t("nav.hobbies")}</MobileLink>
      </nav>
    </div>
  );
}

function MobileLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="font-display text-3xl font-medium tracking-tight text-ink"
    >
      {children}
    </Link>
  );
}
```

- [ ] **Step 3: Verify build and commit**

```bash
npm run build
git add src/features/navigation/
git commit -m "feat(nav): slim Navbar + fullscreen MobileNav"
```

---

### Task B.3: `src/features/navigation/Footer.tsx`

**Files:**
- Create: `src/features/navigation/Footer.tsx`

- [ ] **Step 1: Write Footer**

```tsx
"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { SITE_OWNER, SOCIAL_LINKS } from "@/content/owner";
import { useLocale } from "@/i18n/locale-context";

export function Footer() {
  const { locale, t } = useLocale();
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <p className="font-display text-lg text-ink">{SITE_OWNER.fullName}</p>
          <p className="mt-1 text-sm text-muted">{SITE_OWNER.location[locale]}</p>
        </div>
        <div className="flex items-center gap-4">
          <IconLink href={SOCIAL_LINKS.linkedin} label="LinkedIn"><Linkedin size={18} /></IconLink>
          <IconLink href={SOCIAL_LINKS.github} label="GitHub"><Github size={18} /></IconLink>
          <IconLink href={SOCIAL_LINKS.email} label="Email"><Mail size={18} /></IconLink>
        </div>
      </div>
      <div className="border-t border-line px-6 py-4 text-center font-mono text-[11px] tracking-widest uppercase text-muted sm:px-8">
        © {year} — {t("footer.rights")}
      </div>
    </footer>
  );
}

function IconLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noreferrer"
      className="text-muted transition-colors hover:text-ink"
    >
      {children}
    </a>
  );
}
```

- [ ] **Step 2: Verify build and commit**

```bash
npm run build
git add src/features/navigation/Footer.tsx
git commit -m "feat(nav): minimalist Footer"
```

---

### Task B.4: `src/features/hero/DualHero.tsx`

**Files:**
- Create: `src/features/hero/DualHero.tsx`

- [ ] **Step 1: Write DualHero**

```tsx
"use client";

import { LinkButton } from "@/ui/Button";
import { Eyebrow } from "@/ui/Eyebrow";
import { SplitPortrait } from "./SplitPortrait";
import { SITE_OWNER, SOCIAL_LINKS } from "@/content/owner";
import { useLocale } from "@/i18n/locale-context";
import { Github, Linkedin, Mail } from "lucide-react";

export function DualHero() {
  const { locale, t } = useLocale();
  return (
    <section className="mx-auto grid max-w-6xl gap-14 px-6 pt-28 pb-20 sm:px-8 sm:pt-40 md:grid-cols-[1fr_1.1fr] md:items-center md:gap-16">
      <div>
        <SplitPortrait />
      </div>
      <div>
        <Eyebrow index="00" label={t("hero.role")} />
        <h1 className="mt-6 font-display text-[clamp(3rem,9vw,7rem)] font-medium leading-[0.95] tracking-tight text-ink">
          {t("hero.lineOne")}<br />
          {t("hero.lineTwo")}
        </h1>
        <p className="mt-8 max-w-xl text-[17px] leading-[1.6] text-muted">
          {t("hero.bio")}
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <LinkButton href="#work" icon="arrow">{t("hero.viewWork")}</LinkButton>
          <LinkButton
            href={SITE_OWNER.cv.industryEngineering}
            variant="ghost"
            icon="download"
            external
          >
            {t("hero.primaryCV")}
          </LinkButton>
          <div className="ml-2 flex items-center gap-3 text-muted">
            <a href={SOCIAL_LINKS.linkedin} aria-label="LinkedIn" className="transition-colors hover:text-ink"><Linkedin size={18} /></a>
            <a href={SOCIAL_LINKS.github}   aria-label="GitHub"   className="transition-colors hover:text-ink"><Github size={18} /></a>
            <a href={SOCIAL_LINKS.email}    aria-label="Email"    className="transition-colors hover:text-ink"><Mail size={18} /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify build and commit**

```bash
npm run build
git add src/features/hero/DualHero.tsx
git commit -m "feat(hero): DualHero with SplitPortrait, name, intro, CTAs"
```

---

### Task B.5: `src/features/careers/CareerIndexCard.tsx`

**Files:**
- Create: `src/features/careers/CareerIndexCard.tsx`

- [ ] **Step 1: Write the home index card**

```tsx
"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { CareerMeta } from "@/content/careers";
import { useLocale } from "@/i18n/locale-context";

export function CareerIndexCard({ career, projectCount }: { career: CareerMeta; projectCount: number }) {
  const { locale } = useLocale();
  const accentVar = career.accent === "saas" ? "var(--color-saas)" : "var(--color-indu)";
  return (
    <Link
      href={`/career/${career.slug}`}
      className="group relative flex h-full flex-col justify-between rounded-3xl border border-line bg-surface p-8 transition-colors hover:border-ink sm:p-10"
      style={{ ["--accent" as string]: accentVar }}
    >
      <div>
        <div className="flex items-center justify-between font-mono text-[11px] tracking-widest uppercase text-muted">
          <span>{career.index}</span>
          <span style={{ color: "var(--accent)" }}>{projectCount} projects</span>
        </div>
        <h3 className="mt-8 font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-medium leading-[1.05] tracking-tight text-ink">
          {career.title[locale]}
        </h3>
        <p className="mt-4 max-w-md text-[15px] leading-[1.55] text-muted">
          {career.lead[locale]}
        </p>
      </div>
      <div className="mt-10 flex items-center justify-between">
        <span className="font-mono text-[11px] tracking-widest uppercase text-muted">
          {career.tagline[locale]}
        </span>
        <ArrowRight size={18} className="text-ink transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
}
```

- [ ] **Step 2: Verify build and commit**

```bash
npm run build
git add src/features/careers/CareerIndexCard.tsx
git commit -m "feat(home): CareerIndexCard"
```

---

### Task B.6: Replace `src/app/page.tsx`

**Files:**
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Write the new home**

Replace `src/app/page.tsx` entirely:

```tsx
"use client";

import { DualHero } from "@/features/hero/DualHero";
import { CareerIndexCard } from "@/features/careers/CareerIndexCard";
import { Section } from "@/ui/Section";
import { Reveal } from "@/ui/Reveal";
import { CAREERS } from "@/content/careers";
import { PROJECTS_SAAS, PROJECTS_INDU } from "@/content/projects";
import { useLocale } from "@/i18n/locale-context";

export default function HomePage() {
  const { t } = useLocale();
  const [saas, indu] = CAREERS;

  return (
    <>
      <DualHero />
      <Section
        id="work"
        eyebrowIndex="01"
        eyebrowLabel={t("home.work.eyebrow")}
        heading={t("home.work.heading")}
        intro={t("home.work.intro")}
      >
        <div className="grid gap-8 md:grid-cols-2">
          <Reveal><CareerIndexCard career={saas} projectCount={PROJECTS_SAAS.length} /></Reveal>
          <Reveal delay={0.1}><CareerIndexCard career={indu} projectCount={PROJECTS_INDU.length} /></Reveal>
        </div>
      </Section>
    </>
  );
}
```

- [ ] **Step 2: Verify build and commit**

```bash
npm run build
git add src/app/page.tsx
git commit -m "feat(home): new DualHero + career index"
```

---

### Track C — Career page, Project cards, Project detail

### Task C.1: `src/features/careers/CVDownloads.tsx`

**Files:**
- Create: `src/features/careers/CVDownloads.tsx`

- [ ] **Step 1: Write the CV strip**

```tsx
"use client";

import { LinkButton } from "@/ui/Button";
import { useLocale } from "@/i18n/locale-context";

interface CVItem { href: string; labelKey: string; }

export function CVDownloads({ items }: { items: CVItem[] }) {
  const { t } = useLocale();
  return (
    <div className="flex flex-wrap gap-3">
      {items.map((cv) => (
        <LinkButton key={cv.href} href={cv.href} variant="ghost" icon="download" external>
          {t(cv.labelKey)}
        </LinkButton>
      ))}
    </div>
  );
}
```

- [ ] **Step 2: Verify build and commit**

```bash
npm run build
git add src/features/careers/CVDownloads.tsx
git commit -m "feat(careers): CVDownloads strip (1 or 2 CVs)"
```

---

### Task C.2: `src/features/projects/ProjectCard.tsx` and `ComingSoonCard.tsx`

**Files:**
- Create: `src/features/projects/ProjectCard.tsx`
- Create: `src/features/projects/ComingSoonCard.tsx`

- [ ] **Step 1: Write ProjectCard**

```tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/content/types";
import { Tag } from "@/ui/Tag";
import { useLocale } from "@/i18n/locale-context";

export function ProjectCard({ project, basePath, accent }: {
  project: Project;
  basePath: string;
  accent: "saas" | "indu";
}) {
  const { locale } = useLocale();
  const accentColor = accent === "saas" ? "text-saas" : "text-indu";
  return (
    <Link
      href={`${basePath}/${project.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-colors hover:border-ink"
    >
      <div className="relative aspect-[16/10] w-full bg-line">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-xl font-medium tracking-tight text-ink">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-[1.55] text-muted">{project.description[locale]}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.slice(0, 5).map((t) => <Tag key={t} muted>{t}</Tag>)}
        </div>
        <div className={`mt-5 inline-flex items-center gap-1.5 text-sm font-medium ${accentColor}`}>
          View project
          <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
```

- [ ] **Step 2: Write ComingSoonCard**

```tsx
"use client";

import { Tag } from "@/ui/Tag";
import { useLocale } from "@/i18n/locale-context";

export function ComingSoonCard() {
  const { t } = useLocale();
  return (
    <div
      className="flex h-full flex-col overflow-hidden rounded-2xl border border-dashed border-line bg-bg"
      aria-disabled
    >
      <div
        className="relative aspect-[16/10] w-full"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, var(--color-line) 0 1px, transparent 1px 12px)",
        }}
      />
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-xl font-medium tracking-tight text-muted">
          {t("project.comingSoon.title")}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-[1.55] text-muted">
          {t("project.comingSoon.body")}
        </p>
        <div className="mt-4">
          <Tag muted>in pipeline</Tag>
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 3: Verify build and commit**

```bash
npm run build
git add src/features/projects/
git commit -m "feat(projects): ProjectCard + ComingSoonCard"
```

---

### Task C.3: `src/features/projects/ProjectGrid.tsx`

**Files:**
- Create: `src/features/projects/ProjectGrid.tsx`

- [ ] **Step 1: Write grid**

```tsx
"use client";

import type { Project } from "@/content/types";
import { Reveal } from "@/ui/Reveal";
import { ProjectCard } from "./ProjectCard";
import { ComingSoonCard } from "./ComingSoonCard";

export function ProjectGrid({ projects, basePath, accent }: {
  projects: Project[];
  basePath: string;
  accent: "saas" | "indu";
}) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((p, i) => (
        <Reveal key={p.slug} delay={i * 0.05}>
          {p.comingSoon ? <ComingSoonCard /> : <ProjectCard project={p} basePath={basePath} accent={accent} />}
        </Reveal>
      ))}
    </div>
  );
}
```

- [ ] **Step 2: Verify build and commit**

```bash
npm run build
git add src/features/projects/ProjectGrid.tsx
git commit -m "feat(projects): ProjectGrid"
```

---

### Task C.4: `src/features/timeline/ExperienceTimeline.tsx`

**Files:**
- Create: `src/features/timeline/ExperienceTimeline.tsx`

- [ ] **Step 1: Write timeline**

```tsx
"use client";

import type { Experience } from "@/content/types";
import { Reveal } from "@/ui/Reveal";
import { useLocale } from "@/i18n/locale-context";

export function ExperienceTimeline({ experience, accent }: {
  experience: Experience[];
  accent: "saas" | "indu";
}) {
  const { locale } = useLocale();
  const dotColor = accent === "saas" ? "bg-saas" : "bg-indu";
  return (
    <ol className="relative space-y-10 border-l border-line pl-8">
      {experience.map((exp, i) => (
        <Reveal key={`${exp.company}-${i}`} delay={i * 0.05} as="li">
          <span className={`absolute -left-[7px] mt-1.5 block h-3 w-3 rounded-full ring-4 ring-bg ${dotColor}`} aria-hidden />
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="font-display text-xl font-medium text-ink">{exp.company}</h3>
            <span className="font-mono text-[11px] tracking-widest uppercase text-muted">{exp.period}</span>
          </div>
          <p className="mt-1 text-sm font-medium text-ink">{exp.role[locale]}</p>
          <p className="text-xs text-muted">{exp.location}</p>
          <ul className="mt-3 space-y-1.5">
            {exp.bullets[locale].map((b, j) => (
              <li key={j} className="flex gap-2 text-[15px] leading-[1.55] text-muted">
                <span className={`mt-[0.45rem] h-1 w-1 shrink-0 rounded-full ${dotColor}`} />
                {b}
              </li>
            ))}
          </ul>
        </Reveal>
      ))}
    </ol>
  );
}
```

- [ ] **Step 2: Verify build and commit**

```bash
npm run build
git add src/features/timeline/ExperienceTimeline.tsx
git commit -m "feat(timeline): ExperienceTimeline"
```

---

### Task C.5: `src/features/skills/SkillsCluster.tsx`

**Files:**
- Create: `src/features/skills/SkillsCluster.tsx`

- [ ] **Step 1: Write SkillsCluster**

```tsx
"use client";

import type { SkillCluster } from "@/content/skills";
import { Reveal } from "@/ui/Reveal";
import { Tag } from "@/ui/Tag";
import { useLocale } from "@/i18n/locale-context";

export function SkillsCluster({ clusters, highlightId }: {
  clusters: SkillCluster[];
  /** Optional: cluster id to visually emphasise (e.g. "data-engineer"). */
  highlightId?: string;
}) {
  const { locale } = useLocale();
  return (
    <div className="grid gap-10 md:grid-cols-2">
      {clusters.map((c, i) => (
        <Reveal key={c.id} delay={i * 0.05}>
          <div className={highlightId === c.id ? "rounded-2xl border border-line bg-surface p-6" : ""}>
            <h3 className="font-mono text-[11px] tracking-widest uppercase text-muted">{c.label[locale]}</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {c.items.map((it) => <li key={it}><Tag>{it}</Tag></li>)}
            </ul>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
```

- [ ] **Step 2: Verify build and commit**

```bash
npm run build
git add src/features/skills/SkillsCluster.tsx
git commit -m "feat(skills): SkillsCluster with highlight slot for Data Engineer"
```

---

### Task C.6: `src/features/careers/CareerPage.tsx`

**Files:**
- Create: `src/features/careers/CareerPage.tsx`

- [ ] **Step 1: Write CareerPage template**

```tsx
"use client";

import type { CareerMeta } from "@/content/careers";
import type { Project, Experience, Education } from "@/content/types";
import type { SkillCluster } from "@/content/skills";
import { Section } from "@/ui/Section";
import { Eyebrow } from "@/ui/Eyebrow";
import { Reveal } from "@/ui/Reveal";
import { ProjectGrid } from "@/features/projects/ProjectGrid";
import { CVDownloads } from "./CVDownloads";
import { ExperienceTimeline } from "@/features/timeline/ExperienceTimeline";
import { SkillsCluster } from "@/features/skills/SkillsCluster";
import { useLocale } from "@/i18n/locale-context";

interface Props {
  career: CareerMeta;
  projects: Project[];
  experience: Experience[];
  skills: SkillCluster[];
  education: Education[];
  cvs: { href: string; labelKey: string }[];
  dataEngineerPill?: boolean;
  highlightSkillId?: string;
}

export function CareerPage({
  career, projects, experience, skills, education, cvs, dataEngineerPill, highlightSkillId,
}: Props) {
  const { locale, t } = useLocale();
  const projectBase = `/career/${career.slug}/projects`;

  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-28 pb-16 sm:px-8 sm:pt-40">
        <Reveal>
          <Eyebrow index={career.index} label={t("career.eyebrow")} />
          <h1 className="mt-6 font-display text-[clamp(3rem,9vw,7rem)] font-medium leading-[0.95] tracking-tight text-ink">
            {career.title[locale]}
          </h1>
          {dataEngineerPill && (
            <span className="mt-6 inline-flex items-center rounded-full border border-line px-3 py-1 font-mono text-[11px] tracking-widest uppercase text-muted">
              {t("career.indu.dataPill")}
            </span>
          )}
          <p className="mt-8 max-w-2xl text-[17px] leading-[1.6] text-muted">{career.bio[locale]}</p>
          <div className="mt-8"><CVDownloads items={cvs} /></div>
        </Reveal>
      </section>

      <Section eyebrowIndex="01" eyebrowLabel={t("section.work")} heading={t("career.work.heading")}>
        <ProjectGrid projects={projects} basePath={projectBase} accent={career.accent} />
      </Section>

      <Section eyebrowIndex="02" eyebrowLabel={t("section.experience")} heading={t("career.experience.heading")}>
        <ExperienceTimeline experience={experience} accent={career.accent} />
      </Section>

      <Section eyebrowIndex="03" eyebrowLabel={t("section.skills")} heading={t("career.skills.heading")}>
        <SkillsCluster clusters={skills} highlightId={highlightSkillId} />
      </Section>

      <Section eyebrowIndex="04" eyebrowLabel={t("section.education")} heading={t("career.education.heading")}>
        <div className="grid gap-6 md:grid-cols-2">
          {education.map((e, i) => (
            <Reveal key={e.school} delay={i * 0.05}>
              <div className="rounded-2xl border border-line bg-surface p-6">
                <h3 className="font-display text-lg font-medium text-ink">{e.school}</h3>
                <p className="mt-1 text-sm text-ink">{e.degree[locale]}</p>
                <p className="mt-1 font-mono text-[11px] tracking-widest uppercase text-muted">
                  {e.period} · {e.location}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
```

- [ ] **Step 2: Verify build and commit**

```bash
npm run build
git add src/features/careers/CareerPage.tsx
git commit -m "feat(careers): CareerPage template"
```

---

### Task C.7: Create `src/app/career/saas-automations/page.tsx`

**Files:**
- Create: `src/app/career/saas-automations/page.tsx`

- [ ] **Step 1: Write the route**

```tsx
"use client";

import { CareerPage } from "@/features/careers/CareerPage";
import { CAREERS } from "@/content/careers";
import { PROJECTS_SAAS } from "@/content/projects";
import { EXPERIENCE_SAAS } from "@/content/experience";
import { SKILLS_SAAS } from "@/content/skills";
import { EDUCATION } from "@/content/education";

export default function SaasAutomationsPage() {
  const career = CAREERS.find((c) => c.id === "saas-automations")!;
  return (
    <CareerPage
      career={career}
      projects={PROJECTS_SAAS}
      experience={EXPERIENCE_SAAS}
      skills={SKILLS_SAAS}
      education={EDUCATION}
      cvs={[{ href: "/files/Automation_IT_Engineer_2026.pdf", labelKey: "cv.saas" }]}
    />
  );
}
```

- [ ] **Step 2: Verify build and commit**

```bash
npm run build
git add src/app/career/saas-automations/page.tsx
git commit -m "feat(routes): /career/saas-automations"
```

---

### Task C.8: Create `src/app/career/industry-engineering/page.tsx`

**Files:**
- Create: `src/app/career/industry-engineering/page.tsx`

- [ ] **Step 1: Write the route**

```tsx
"use client";

import { CareerPage } from "@/features/careers/CareerPage";
import { CAREERS } from "@/content/careers";
import { PROJECTS_INDU } from "@/content/projects";
import { EXPERIENCE_INDU } from "@/content/experience";
import { SKILLS_INDU } from "@/content/skills";
import { EDUCATION } from "@/content/education";

export default function IndustryEngineeringPage() {
  const career = CAREERS.find((c) => c.id === "industry-engineering")!;
  return (
    <CareerPage
      career={career}
      projects={PROJECTS_INDU}
      experience={EXPERIENCE_INDU}
      skills={SKILLS_INDU}
      education={EDUCATION}
      cvs={[
        { href: "/files/Engineer_Industry_4_0.pdf", labelKey: "cv.indu" },
        { href: "/files/Data_Engineer.pdf",         labelKey: "cv.dataEngineer" },
      ]}
      dataEngineerPill
      highlightSkillId="data-engineer"
    />
  );
}
```

- [ ] **Step 2: Verify build and commit**

```bash
npm run build
git add src/app/career/industry-engineering/page.tsx
git commit -m "feat(routes): /career/industry-engineering with Data Engineer pill"
```

---

### Task C.9: `src/features/projects/ProjectDetail.tsx` and `NextProjectLink.tsx`

**Files:**
- Create: `src/features/projects/ProjectDetail.tsx`
- Create: `src/features/projects/NextProjectLink.tsx`

- [ ] **Step 1: Write ProjectDetail**

```tsx
"use client";

import Image from "next/image";
import { ArrowLink } from "@/ui/Link";
import { Reveal } from "@/ui/Reveal";
import { Tag } from "@/ui/Tag";
import { LinkButton } from "@/ui/Button";
import type { ProjectDetail } from "@/content/types";
import { useLocale } from "@/i18n/locale-context";

export function ProjectDetailView({ detail, backHref, accent }: {
  detail: ProjectDetail;
  backHref: string;
  accent: "saas" | "indu";
}) {
  const { locale, t } = useLocale();

  return (
    <article className="mx-auto max-w-4xl px-6 pt-28 pb-24 sm:px-8 sm:pt-40">
      <Reveal>
        <ArrowLink href={backHref} direction="back">{t("project.backToProjects")}</ArrowLink>
        <h1 className="mt-6 font-display text-[clamp(2.25rem,6vw,4.5rem)] font-medium leading-[1] tracking-tight text-ink">
          {detail.title}
        </h1>
        <p className={`mt-3 text-[17px] ${accent === "saas" ? "text-saas" : "text-indu"}`}>
          {detail.subtitle[locale]}
        </p>
        <div className="mt-5 flex flex-wrap gap-1.5">
          {detail.tags.map((t) => <Tag key={t} muted>{t}</Tag>)}
        </div>
        {detail.liveUrl && (
          <div className="mt-6">
            <LinkButton href={detail.liveUrl} icon="external" external>
              {t("project.tryLive")}
            </LinkButton>
          </div>
        )}
      </Reveal>

      <Reveal delay={0.05}>
        <div className="relative mt-10 aspect-video w-full overflow-hidden rounded-3xl border border-line bg-surface">
          <Image src={detail.bannerImage} alt={detail.title} fill className="object-contain" priority />
        </div>
      </Reveal>

      <div className="mt-16 space-y-16">
        {detail.sections.map((section, i) => (
          <Reveal key={`${section.heading.en}-${i}`} delay={0.05 * i}>
            <h2 className="font-display text-[clamp(1.5rem,3vw,2.25rem)] font-medium tracking-tight text-ink">
              {section.heading[locale]}
            </h2>
            <div className="mt-4 whitespace-pre-line text-[17px] leading-[1.6] text-muted">
              {section.body[locale]}
            </div>
            {section.image && (
              <figure className="mt-8">
                <div className="relative aspect-video overflow-hidden rounded-2xl border border-line bg-surface">
                  <Image src={section.image} alt={section.imageCaption?.[locale] ?? section.heading[locale]} fill className="object-contain" />
                </div>
                {section.imageCaption && (
                  <figcaption className="mt-2 text-center font-mono text-[11px] tracking-widest uppercase text-muted">
                    {section.imageCaption[locale]}
                  </figcaption>
                )}
              </figure>
            )}
            {section.images && section.images.length > 0 && (
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {section.images.map((img, j) => (
                  <div
                    key={j}
                    className={`relative aspect-video overflow-hidden rounded-2xl border border-line bg-surface${
                      section.images!.length % 2 !== 0 && j === 0 ? " sm:col-span-2" : ""
                    }`}
                  >
                    <Image src={img} alt={`${section.heading[locale]} — ${j + 1}`} fill className="object-contain" />
                  </div>
                ))}
              </div>
            )}
          </Reveal>
        ))}
      </div>
    </article>
  );
}
```

- [ ] **Step 2: Write NextProjectLink**

```tsx
"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/content/types";
import { useLocale } from "@/i18n/locale-context";

export function NextProjectLink({ next, basePath }: { next: Project; basePath: string }) {
  const { locale, t } = useLocale();
  return (
    <Link
      href={`${basePath}/${next.slug}`}
      className="group mx-auto flex max-w-4xl flex-col gap-4 border-t border-line px-6 py-12 sm:px-8 sm:flex-row sm:items-center sm:justify-between"
    >
      <div>
        <p className="font-mono text-[11px] tracking-widest uppercase text-muted">{t("project.next")}</p>
        <p className="mt-1 font-display text-2xl font-medium tracking-tight text-ink">{next.title}</p>
      </div>
      <span className="flex items-center gap-2 text-sm font-medium text-ink">
        {next.description[locale].split(".")[0]}
        <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
```

- [ ] **Step 3: Verify build and commit**

```bash
npm run build
git add src/features/projects/ProjectDetail.tsx src/features/projects/NextProjectLink.tsx
git commit -m "feat(projects): ProjectDetailView + NextProjectLink"
```

---

### Task C.10: Dynamic project detail routes

**Files:**
- Create: `src/app/career/saas-automations/projects/[slug]/page.tsx`
- Create: `src/app/career/industry-engineering/projects/[slug]/page.tsx`

- [ ] **Step 1: Write SaaS dynamic route**

```tsx
import { notFound } from "next/navigation";
import { PROJECT_DETAILS, PROJECTS_SAAS } from "@/content/projects";
import { ProjectDetailView } from "@/features/projects/ProjectDetail";
import { NextProjectLink } from "@/features/projects/NextProjectLink";

export const dynamicParams = false;

export async function generateStaticParams() {
  return PROJECTS_SAAS
    .filter((p) => !p.comingSoon)
    .map((p) => ({ slug: p.slug }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const detail = PROJECT_DETAILS[slug];
  if (!detail || detail.career !== "saas-automations") notFound();

  const realProjects = PROJECTS_SAAS.filter((p) => !p.comingSoon);
  const idx = realProjects.findIndex((p) => p.slug === slug);
  const next = realProjects[(idx + 1) % realProjects.length];

  return (
    <>
      <ProjectDetailView detail={detail} backHref="/career/saas-automations" accent="saas" />
      <NextProjectLink next={next} basePath="/career/saas-automations/projects" />
    </>
  );
}
```

- [ ] **Step 2: Write Industry dynamic route**

```tsx
import { notFound } from "next/navigation";
import { PROJECT_DETAILS, PROJECTS_INDU } from "@/content/projects";
import { ProjectDetailView } from "@/features/projects/ProjectDetail";
import { NextProjectLink } from "@/features/projects/NextProjectLink";

export const dynamicParams = false;

export async function generateStaticParams() {
  return PROJECTS_INDU
    .filter((p) => !p.comingSoon)
    .map((p) => ({ slug: p.slug }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const detail = PROJECT_DETAILS[slug];
  if (!detail || detail.career !== "industry-engineering") notFound();

  const realProjects = PROJECTS_INDU.filter((p) => !p.comingSoon);
  const idx = realProjects.findIndex((p) => p.slug === slug);
  const next = realProjects[(idx + 1) % realProjects.length];

  return (
    <>
      <ProjectDetailView detail={detail} backHref="/career/industry-engineering" accent="indu" />
      <NextProjectLink next={next} basePath="/career/industry-engineering/projects" />
    </>
  );
}
```

- [ ] **Step 3: Verify build**

```bash
npm run build
```

Expected: `/out/career/saas-automations/projects/{julius-finance-bot,linkedin-auto-post}/index.html` and 8 dirs under `/out/career/industry-engineering/projects/` generated.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "feat(routes): dynamic project detail pages with generateStaticParams"
```

---

### Track D — Hobbies editorial

### Task D.1: `src/features/hobbies/HobbyStory.tsx`

**Files:**
- Create: `src/features/hobbies/HobbyStory.tsx`

- [ ] **Step 1: Write story component**

```tsx
"use client";

import Image from "next/image";
import { Reveal } from "@/ui/Reveal";
import { Eyebrow } from "@/ui/Eyebrow";
import type { Hobby } from "@/content/types";
import { useLocale } from "@/i18n/locale-context";

export function HobbyStory({ hobby, index }: { hobby: Hobby; index: number }) {
  const { locale } = useLocale();
  const idx = String(index + 1).padStart(2, "0");

  return (
    <Reveal as="section" className="grid gap-10 md:grid-cols-12 md:items-center md:gap-16">
      <div className={`md:col-span-6 ${hobby.imageSide === "right" ? "md:order-2" : ""}`}>
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-line bg-surface">
          <Image src={hobby.image} alt={hobby.title[locale]} fill className="object-cover" sizes="(min-width:768px) 50vw, 100vw" />
        </div>
      </div>
      <div className="md:col-span-6">
        <Eyebrow index={idx} label={hobby.title[locale].toUpperCase()} />
        <div className="mt-6 max-w-prose text-[17px] leading-[1.6] text-ink whitespace-pre-line">
          {hobby.body[locale]}
        </div>
        <dl className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {hobby.meta.map((m, i) => (
            <div key={i} className="border-t border-line pt-3">
              <dt className="font-mono text-[11px] tracking-widest uppercase text-muted">{m.label[locale]}</dt>
              <dd className="mt-1 text-[15px] text-ink">{m.value[locale]}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Reveal>
  );
}
```

- [ ] **Step 2: Verify build and commit**

```bash
npm run build
git add src/features/hobbies/HobbyStory.tsx
git commit -m "feat(hobbies): HobbyStory editorial template"
```

---

### Task D.2: Rewrite `src/content/hobbies.ts` with six editorial stories

**Files:**
- Modify: `src/content/hobbies.ts`

- [ ] **Step 1: Write the six stories**

Replace the file with:

```ts
import type { Hobby } from "./types";

export const HOBBIES: Hobby[] = [
  {
    slug: "gaming",
    title: { en: "Gaming", pt: "Jogos" },
    body: {
      en: "Competitive FPS on one monitor, slow single-player RPGs on the other. Started on a CRT in the late 90s and never really stopped.\nCurrently grinding rank in CS2 and chipping away at Elden Ring — the only two genres where learning curves feel honest.",
      pt: "FPS competitivo num monitor, RPGs lentos de single-player no outro. Comecei num CRT no fim dos anos 90 e nunca mais parei.\nAtualmente subindo rank em CS2 e trilhando Elden Ring aos poucos — os dois únicos gêneros onde a curva de aprendizado é honesta.",
    },
    image: "/images/hobbies/Game.png",
    imageSide: "left",
    meta: [
      { label: { en: "Favourites",   pt: "Favoritos" },        value: { en: "CS2 · Elden Ring · RDR2", pt: "CS2 · Elden Ring · RDR2" } },
      { label: { en: "Hours logged", pt: "Horas jogadas" },    value: { en: "10,000+",                  pt: "10.000+" } },
      { label: { en: "Now playing",  pt: "Jogando agora" },    value: { en: "Counter-Strike 2",         pt: "Counter-Strike 2" } },
    ],
  },
  {
    slug: "music",
    title: { en: "Music", pt: "Música" },
    body: {
      en: "Mostly on in the background while I work, then fully present on the way home. Heavy rotation through post-punk, Brazilian funk and ambient techno — curiosity over loyalty.\nOccasional live shows when something genuinely interesting lands in Lisbon.",
      pt: "Quase sempre tocando no fundo enquanto trabalho, depois totalmente presente no caminho de casa. Rodízio pesado entre post-punk, funk e techno ambiente — curiosidade acima de fidelidade.\nShows ao vivo quando algo realmente interessante aparece em Lisboa.",
    },
    image: "/images/hobbies/Music.png",
    imageSide: "right",
    meta: [
      { label: { en: "Daily",   pt: "Diário" },                 value: { en: "~5 hours",               pt: "~5 horas" } },
      { label: { en: "Lately", pt: "Ultimamente" },             value: { en: "Caribou · Mano Brown",   pt: "Caribou · Mano Brown" } },
      { label: { en: "Setup",  pt: "Setup" },                   value: { en: "HD650 · Spotify Connect",pt: "HD650 · Spotify Connect" } },
    ],
  },
  {
    slug: "travel",
    title: { en: "Travel", pt: "Viagens" },
    body: {
      en: "The trick is always getting lost on day three. Best days on the road are usually the unscripted ones — a side street, a market, a conversation in a language I half-speak.\nAfter moving to Lisbon, the list of easy weekend trips got alarmingly long.",
      pt: "O truque é sempre se perder no terceiro dia. Os melhores dias numa viagem costumam ser os sem roteiro — uma rua lateral, um mercado, uma conversa em uma língua que eu falo pela metade.\nDepois de mudar pra Lisboa, a lista de fins de semana fáceis ficou perigosamente grande.",
    },
    image: "/images/hobbies/Travel.png",
    imageSide: "left",
    meta: [
      { label: { en: "Countries",     pt: "Países" },           value: { en: "12",                     pt: "12" } },
      { label: { en: "Longest trip",  pt: "Viagem mais longa" },value: { en: "5 weeks · Europe",       pt: "5 semanas · Europa" } },
      { label: { en: "Next on list",  pt: "Próximo na lista" }, value: { en: "Japan",                  pt: "Japão" } },
    ],
  },
  {
    slug: "electronics",
    title: { en: "Electronics & DIY", pt: "Eletrônica & DIY" },
    body: {
      en: "Half my living room is a lab. Raspberry Pis, an oscilloscope, a soldering station and a rotating stack of dev boards that keep finding new jobs.\nMost weekends there's a running build — sensor node, 3D-printed enclosure, or an excuse to test yet another MQTT topic.",
      pt: "Metade da minha sala é um laboratório. Raspberry Pis, um osciloscópio, uma estação de solda e uma pilha rotativa de dev boards que vão sempre ganhando um novo trabalho.\nQuase todo fim de semana tem uma build em andamento — nó de sensor, case impressa em 3D ou uma desculpa pra testar mais um tópico MQTT.",
    },
    image: "/images/hobbies/Rasp.png",
    imageSide: "right",
    meta: [
      { label: { en: "Current project", pt: "Projeto atual" },  value: { en: "UGV remote workstation", pt: "Estação remota de UGV" } },
      { label: { en: "Favourite tool",  pt: "Ferramenta favorita" }, value: { en: "Hakko FX-888D",          pt: "Hakko FX-888D" } },
      { label: { en: "Boards alive",    pt: "Placas vivas" },    value: { en: "8 (at last count)",      pt: "8 (última contagem)" } },
    ],
  },
  {
    slug: "fitness",
    title: { en: "Fitness", pt: "Fitness" },
    body: {
      en: "Mostly strength training, four days a week, upper/lower split. Started late and caught up — progress is slow and honest, which suits me.\nCardio lives outside the gym: long walks around Lisbon count.",
      pt: "Majoritariamente musculação, quatro dias por semana, split upper/lower. Comecei tarde e corri atrás — progresso lento e honesto, o que combina comigo.\nCardio mora fora da academia: caminhadas longas por Lisboa contam.",
    },
    image: "/images/hobbies/gym.png",
    imageSide: "left",
    meta: [
      { label: { en: "Split",         pt: "Split" },            value: { en: "Upper · Lower ×2",       pt: "Upper · Lower ×2" } },
      { label: { en: "Years",         pt: "Anos" },             value: { en: "6",                      pt: "6" } },
      { label: { en: "Current lift",  pt: "Levantamento atual" },value: { en: "DL 180 kg",              pt: "DL 180 kg" } },
    ],
  },
  {
    slug: "reading",
    title: { en: "Reading", pt: "Leitura" },
    body: {
      en: "Roughly half non-fiction (systems, economics, biographies) and half hard sci-fi. Currently on Peter Watts' Blindsight — uncomfortable in the best way.\nKindle for everything, paper for the ones I re-read.",
      pt: "Mais ou menos metade não-ficção (sistemas, economia, biografias) e metade hard sci-fi. Atualmente lendo Blindsight do Peter Watts — desconfortável da melhor maneira.\nKindle pra tudo, papel pros que eu releio.",
    },
    image: "/images/hobbies/Read.png",
    imageSide: "right",
    meta: [
      { label: { en: "Currently",      pt: "Atualmente" },      value: { en: "Blindsight — Peter Watts", pt: "Blindsight — Peter Watts" } },
      { label: { en: "This year",      pt: "Neste ano" },       value: { en: "14 books",                pt: "14 livros" } },
      { label: { en: "Favourite genre", pt: "Gênero favorito" },value: { en: "Hard sci-fi",             pt: "Hard sci-fi" } },
    ],
  },
];
```

- [ ] **Step 2: Verify build and commit**

```bash
npm run build
git add src/content/hobbies.ts
git commit -m "feat(hobbies): six editorial stories with meta rows, EN/PT"
```

---

### Task D.3: Rewrite `src/app/hobbies/page.tsx`

**Files:**
- Modify: `src/app/hobbies/page.tsx`

- [ ] **Step 1: Write the hobbies page**

```tsx
"use client";

import { HobbyStory } from "@/features/hobbies/HobbyStory";
import { Eyebrow } from "@/ui/Eyebrow";
import { Reveal } from "@/ui/Reveal";
import { HOBBIES } from "@/content/hobbies";
import { useLocale } from "@/i18n/locale-context";

export default function HobbiesPage() {
  const { t } = useLocale();
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pt-28 pb-16 sm:px-8 sm:pt-40">
        <Reveal>
          <Eyebrow index="03" label={t("hobbies.eyebrow")} />
          <h1 className="mt-6 font-display text-[clamp(3rem,9vw,7rem)] font-medium leading-[0.95] tracking-tight text-ink">
            {t("hobbies.title")}
          </h1>
          <p className="mt-8 max-w-2xl text-[17px] leading-[1.6] text-muted">{t("hobbies.subtitle")}</p>
        </Reveal>
      </section>
      <div className="mx-auto max-w-6xl space-y-24 px-6 pb-32 sm:px-8 sm:space-y-32">
        {HOBBIES.map((h, i) => (
          <HobbyStory key={h.slug} hobby={h} index={i} />
        ))}
      </div>
    </>
  );
}
```

- [ ] **Step 2: Verify build and commit**

```bash
npm run build
git add src/app/hobbies/page.tsx
git commit -m "feat(hobbies): editorial page with 6 stories"
```

---

## Phase 3 — Cleanup, audit, deploy

### Task 10: Rewrite `src/i18n/dictionary.ts` with the v2 keys

**Files:**
- Create: `src/i18n/types.ts`
- Create: `src/i18n/dictionary.ts`
- Create: `src/i18n/locale-context.tsx` (migrated from `src/lib/locale-context.tsx`)

- [ ] **Step 1: Copy locale context**

Run:

```bash
git mv src/lib/locale-context.tsx src/i18n/locale-context.tsx
```

Update any import paths inside the file from `@/lib/i18n` to `@/i18n/dictionary`.

- [ ] **Step 2: Write types**

Create `src/i18n/types.ts`:

```ts
export type Locale = "en" | "pt";
export const locales: Locale[] = ["en", "pt"];
export const defaultLocale: Locale = "en";
```

- [ ] **Step 3: Write dictionary**

Create `src/i18n/dictionary.ts`:

```ts
import type { Locale } from "./types";

const dict = {
  // Nav
  "nav.home":     { en: "Home",                      pt: "Início" },
  "nav.saas":     { en: "SaaS & Automations",        pt: "SaaS & Automações" },
  "nav.indu":     { en: "Industry 4.0 & Engineering", pt: "Indústria 4.0 & Engenharia" },
  "nav.hobbies":  { en: "Hobbies",                   pt: "Hobbies" },

  // Hero (home)
  "hero.role":    { en: "engineer of connected systems", pt: "engenheiro de sistemas conectados" },
  "hero.lineOne": { en: "Engineer of",                 pt: "Engenheiro de" },
  "hero.lineTwo": { en: "connected systems.",          pt: "sistemas conectados." },
  "hero.bio": {
    en: "From control cabinets to SaaS — building at the edge of IT and OT. Founder of Movewer Technologies. Based in Lisbon, Portugal.",
    pt: "Do painel de controle ao SaaS — construindo na fronteira entre IT e OT. Fundador da Movewer Technologies. Baseado em Lisboa, Portugal.",
  },
  "hero.viewWork":   { en: "View work",                pt: "Ver trabalhos" },
  "hero.primaryCV":  { en: "Engineering CV",           pt: "CV de Engenharia" },

  // Home sections
  "home.work.eyebrow": { en: "Selected work",         pt: "Trabalhos selecionados" },
  "home.work.heading": { en: "Two tracks, one engineer.", pt: "Duas trilhas, um engenheiro." },
  "home.work.intro": {
    en: "Pick a track. Each career page collects live projects, experience, and the skills stack behind them.",
    pt: "Escolha uma trilha. Cada página reúne projetos ao vivo, experiência e a stack de habilidades por trás deles.",
  },

  // Career pages (shared)
  "career.eyebrow":               { en: "Career",                 pt: "Carreira" },
  "career.work.heading":          { en: "Selected work",          pt: "Trabalhos selecionados" },
  "career.experience.heading":    { en: "Experience",             pt: "Experiência" },
  "career.skills.heading":        { en: "Skills",                 pt: "Habilidades" },
  "career.education.heading":     { en: "Education",              pt: "Educação" },
  "career.indu.dataPill":         { en: "includes Data Engineer track", pt: "inclui trilha de Data Engineer" },

  // Section labels
  "section.work":       { en: "Work",       pt: "Trabalhos" },
  "section.experience": { en: "Experience", pt: "Experiência" },
  "section.skills":     { en: "Skills",     pt: "Habilidades" },
  "section.education":  { en: "Education",  pt: "Educação" },

  // Project
  "project.backToProjects": { en: "Back to projects",  pt: "Voltar aos projetos" },
  "project.tryLive":        { en: "Try it live",       pt: "Experimente agora" },
  "project.next":           { en: "Next project",      pt: "Próximo projeto" },
  "project.comingSoon.title":{ en: "Coming soon",      pt: "Em breve" },
  "project.comingSoon.body":{
    en: "In pipeline. Case study lands once the project ships.",
    pt: "No pipeline. O case study chega quando o projeto for publicado.",
  },

  // Hobbies
  "hobbies.eyebrow":  { en: "Off the clock", pt: "Fora do trabalho" },
  "hobbies.title":    { en: "Hobbies",       pt: "Hobbies" },
  "hobbies.subtitle": {
    en: "Six things that keep me sharp outside of work — told in a few honest paragraphs each.",
    pt: "Seis coisas que me mantêm afiado fora do trabalho — contadas em poucos parágrafos honestos cada.",
  },

  // CVs
  "cv.saas":         { en: "Download CV",            pt: "Baixar CV" },
  "cv.indu":         { en: "Engineering CV",         pt: "CV de Engenharia" },
  "cv.dataEngineer": { en: "Data Engineer CV",       pt: "CV de Data Engineer" },

  // Footer
  "footer.rights":  { en: "All rights reserved.", pt: "Todos os direitos reservados." },

  // 404
  "notfound.title":     { en: "Page not found",          pt: "Página não encontrada" },
  "notfound.lookingFor":{ en: "Looking for a previous section? Try one of these:",
                          pt: "Procurando uma seção antiga? Tente uma destas:" },
  "notfound.back":      { en: "Go home",                 pt: "Voltar ao início" },
} as const;

export type TranslationKey = keyof typeof dict;

export function t(key: TranslationKey, locale: Locale): string {
  return dict[key][locale];
}
```

- [ ] **Step 4: Update `locale-context.tsx` to re-export `t` helper + `useLocale` hook shape**

Confirm `useLocale()` returns `{ locale, toggleLocale, t: (key) => string }` (curries the locale). If the old context returned a different shape, adjust now. Every component built in Tracks B/C/D assumes `t(key)` takes a single argument.

- [ ] **Step 5: Delete `src/lib/i18n.ts`**

```bash
git rm src/lib/i18n.ts
```

- [ ] **Step 6: Verify build and commit**

```bash
npm run build
git add -A
git commit -m "refactor(i18n): move to src/i18n with v2 key set"
```

---

### Task 11: Rewrite `src/app/not-found.tsx`

**Files:**
- Modify: `src/app/not-found.tsx`

- [ ] **Step 1: Write 404**

```tsx
"use client";

import Link from "next/link";
import { Eyebrow } from "@/ui/Eyebrow";
import { ArrowLink } from "@/ui/Link";
import { useLocale } from "@/i18n/locale-context";

export default function NotFound() {
  const { t } = useLocale();
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-3xl flex-col justify-center px-6 pt-28 sm:px-8 sm:pt-40">
      <Eyebrow label="404" />
      <h1 className="mt-6 font-display text-[clamp(2.5rem,7vw,5rem)] font-medium leading-[1] tracking-tight text-ink">
        {t("notfound.title")}
      </h1>
      <p className="mt-6 max-w-xl text-[17px] leading-[1.6] text-muted">{t("notfound.lookingFor")}</p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:gap-6">
        <Link href="/career/saas-automations" className="text-lg text-ink underline-offset-4 hover:underline">
          → SaaS &amp; Automations
        </Link>
        <Link href="/career/industry-engineering" className="text-lg text-ink underline-offset-4 hover:underline">
          → Industry 4.0 &amp; Engineering
        </Link>
      </div>
      <div className="mt-10">
        <ArrowLink href="/" direction="back">{t("notfound.back")}</ArrowLink>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify build and commit**

```bash
npm run build
git add src/app/not-found.tsx
git commit -m "feat(404): Looking for…? block linking to new careers"
```

---

### Task 12: Delete v1 components and v1 routes

**Files:** removals.

- [ ] **Step 1: Delete v1 UI primitives**

```bash
git rm src/components/ui/AuroraBackground.tsx
git rm src/components/ui/Spotlight.tsx
git rm src/components/ui/TextGenerateEffect.tsx
git rm src/components/ui/AnimatedCard.tsx
git rm src/components/ui/FadeIn.tsx
git rm src/components/ui/SkillBadge.tsx
```

- [ ] **Step 2: Delete v1 components**

```bash
git rm src/components/CareerPage.tsx
git rm src/components/ProjectDetailPage.tsx
git rm src/components/Navbar.tsx
git rm src/components/Footer.tsx
```

- [ ] **Step 3: Delete v1 career routes**

```bash
git rm -r src/app/career/industry
git rm -r src/app/career/engineer
git rm -r src/app/career/automation-it
```

(These directories still existed because Phase 1 moved the tree wholesale; they're now superseded by `src/app/career/saas-automations/` and `src/app/career/industry-engineering/`.)

- [ ] **Step 4: Delete the compatibility shim in `src/lib/constants.ts`**

```bash
git rm src/lib/constants.ts
```

If any component still imports from `@/lib/constants`, fix its import to point at `@/content/*` and re-run build.

- [ ] **Step 5: Remove empty `src/lib/` and `src/components/` if no files remain**

```bash
rmdir src/lib 2>/dev/null || true
rmdir src/components/ui 2>/dev/null || true
rmdir src/components    2>/dev/null || true
```

- [ ] **Step 6: Verify build**

```bash
npm run lint && npm run build
```

Expected: succeeds with no references to deleted files.

- [ ] **Step 7: Commit**

```bash
git add -A
git commit -m "refactor(v2): remove v1 components, routes, and constants shim"
```

---

### Task 13: Emoji audit

**Files:** all of `src/` and `public/` (content).

- [ ] **Step 1: Run the audit**

Run:

```bash
grep -RP --include='*.ts' --include='*.tsx' '[\x{1F300}-\x{1FAFF}\x{2600}-\x{27BF}\x{1F1E6}-\x{1F1FF}]' src/ || echo "no emoji found"
```

Expected: `no emoji found`.

- [ ] **Step 2: If emojis are found, remove them**

Each hit is a file + line. For every hit, open the file, delete the emoji character, and if that removal leaves dangling whitespace or punctuation, fix the surrounding text. Re-run Step 1 until clean.

- [ ] **Step 3: Commit (only if Step 2 made changes)**

```bash
git add -A
git commit -m "chore(v2): audit — zero emoji in code and content"
```

---

### Task 14: Lucide icon audit

**Files:**
- Modify: any file that imports from `lucide-react`.

- [ ] **Step 1: List current imports**

Run:

```bash
grep -RnP --include='*.tsx' --include='*.ts' "from ['\"]lucide-react['\"]" src/
```

- [ ] **Step 2: Normalise**

The v2 design only uses these Lucide icons: `ArrowRight`, `ArrowLeft`, `ArrowUpRight`, `Download`, `Menu`, `X`, `Globe`, `Github`, `Linkedin`, `Mail`. Anything else (e.g. `Factory`, `Cpu`, `Workflow`, `ChevronDown`) is carrying dead weight from v1 — remove them from imports and from any JSX.

- [ ] **Step 3: Verify build and commit**

```bash
npm run build
git add -A
git commit -m "chore(v2): prune lucide-react icons to the v2 set"
```

---

### Task 15: Final lint, build, and local smoke test

- [ ] **Step 1: Lint**

```bash
npm run lint
```

Expected: clean.

- [ ] **Step 2: Build**

```bash
npm run build
```

Expected: succeeds. `/out/` contains:

```
index.html
404.html
career/saas-automations/index.html
career/saas-automations/projects/julius-finance-bot/index.html
career/saas-automations/projects/linkedin-auto-post/index.html
career/industry-engineering/index.html
career/industry-engineering/projects/ai-data-platform-iot/index.html
career/industry-engineering/projects/hotas-remote-control/index.html
career/industry-engineering/projects/high-payload-ugv/index.html
career/industry-engineering/projects/spirit-ugv/index.html
career/industry-engineering/projects/drone-assist-base/index.html
career/industry-engineering/projects/agro-drone/index.html
career/industry-engineering/projects/ttd/index.html
career/industry-engineering/projects/siemens-portable-case/index.html
hobbies/index.html
files/Automation_IT_Engineer_2026.pdf
files/Data_Engineer.pdf
files/Engineer_Industry_4_0.pdf
```

- [ ] **Step 3: Serve locally**

Run:

```bash
npx serve out -p 4999
```

- [ ] **Step 4: Manual route walk**

Open each URL and confirm it renders without console errors. Tick each:

- [ ] `http://localhost:4999/` — hero split renders with two duotones; resizes to stack under 640 px; CTAs work
- [ ] `http://localhost:4999/career/saas-automations` — hero, 1 CV, 6 project cards (2 real + 4 Coming Soon), experience, skills, education
- [ ] `http://localhost:4999/career/industry-engineering` — hero with data pill, 2 CVs, 12 project cards (8 real + 4 Coming Soon), experience, skills (Data Engineer cluster highlighted), education
- [ ] Each of the 10 real project detail pages — banner, sections, next-project link
- [ ] `http://localhost:4999/hobbies` — 6 editorial stories alternating image side
- [ ] `http://localhost:4999/doesnotexist` — 404 with two career links
- [ ] Mobile menu opens fullscreen, closes, navigates
- [ ] EN/PT toggle changes every page's copy
- [ ] Each of the 3 CV PDFs downloads
- [ ] `prefers-reduced-motion: reduce` in devtools — no motion animations play

- [ ] **Step 5: Commit any fixes**

Any issue found in Step 4 → open the responsible file, fix, rebuild, re-check. Commit per fix with a clear message.

---

### Task 16: Request code review

- [ ] **Step 1: Invoke review**

Use `superpowers:requesting-code-review` on the v2 branch diff against `main`.

- [ ] **Step 2: Address review comments**

Apply `superpowers:receiving-code-review`. Fix real issues; push back on suggestions that conflict with the spec (don't blindly agree).

---

### Task 17: Merge and deploy

- [ ] **Step 1: Merge v2 into main**

From the main working tree:

```bash
cd /home/felipe/Desktop/0xFelipeGD.github.io
git fetch
git merge --no-ff v2 -m "feat: portfolio v2.0 — 2 careers, editorial redesign"
```

- [ ] **Step 2: Deploy**

```bash
npm run deploy
```

Expected: gh-pages pushes `/out/` to the `gh-pages` branch.

- [ ] **Step 3: Verify live**

Open `https://0xfelipegd.github.io/` and click through the checklist from Task 15 Step 4 on the live site.

- [ ] **Step 4: Clean up worktree**

```bash
git worktree remove ../0xFelipeGD-v2
git branch -d v2
```

---

## Self-review notes (plan author)

Coverage against the spec:

- §1 goals — all addressed across tasks 1–17.
- §2 info architecture — tasks 7 (content), C.7/C.8 (routes), C.10 (dynamic detail).
- §3 visual system — task 5 (@theme), task 6 (fonts), task A.* (primitives), task A.4 (split portrait).
- §4 folder structure — tasks 3, 4, 7, 8 set up the shape; later tracks fill it.
- §5 page templates — tasks B.* (home), C.* (career/detail), D.* (hobbies), task 11 (404).
- §6 i18n — task 10.
- §7 dependencies — no change required; task 14 audits lucide usage.
- §8 phased migration — literally reflected in the plan structure.
- §9 success criteria — task 13 (emoji audit), task 15 (route audit, routes list matches §9 #2, prefers-reduced-motion check).
- §10 deletions — task 12.

No placeholders in code steps. Types and prop names line up across tasks (`accent: "saas" | "indu"` is consistent; `CAREERS[]` id/slug fields used in the same way by routes and cards; `CVDownloads` takes the same shape that routes pass it; `useLocale()` shape asserted in task 10).

Known late-binding risks flagged in the plan: (1) task 7 step 7 asks for an experience merge that requires a judgement call on the Industry+Engineer company bullets — fine to do during execution but explicitly called out; (2) task 10 step 4 asserts `useLocale()` returns `t(key) => string`, which is an API contract the existing `LocaleProvider` must match — if it currently returns `t(key, locale)` the migration step adjusts it.
