# Portfolio v2.0 — Design Spec

**Date:** 2026-04-21
**Owner:** Felipe Gonçalves Diogo
**Scope:** Full redesign + information-architecture rework of `0xFelipeGD.github.io`.
**Stack decision:** keep current — Next.js 16.1.6 + React 19 + Tailwind CSS v4 + Motion + static export to GitHub Pages. No re-scaffold.

---

## 1. Goals and non-goals

### Goals

1. Replace the three-career structure (`industry`, `engineer`, `automation-it`) with **two top-level careers**:
   - **SaaS and Automations** (was `IT Automation`)
   - **Industry 4.0 and Engineering** (merge of `industry` + `engineer`)
   - **Data Engineer is a subcareer** of Industry 4.0 and Engineering — exposed as a second CV download and a dedicated skills cluster on that career page, not as a nav entry.
2. Adopt a new visual system: minimalist editorial, warm palette, dual-personality hero inspired by adhamdannaway.com adapted to Felipe's two careers. No emojis anywhere in UI or content.
3. Upgrade hobbies from six shallow cards to six editorial stories with real voice, meta, and larger imagery.
4. Reorganise folder structure around `src/` with domain-oriented features and a split content layer (one file per real project).
5. Replace CVs: move the three new PDFs at repo root (`Automation_IT_Engineer_2026.pdf`, `Data_Engineer.pdf`, `Engineer_Industry_4_0.pdf`) into `/public/files/`; delete the old CVs (`Developer_2026.pdf`, `Engineer_2026.pdf`, the superseded `Automation_IT_Engineer_2026.pdf`).
6. Ship a static export that deploys to GitHub Pages exactly like today (`npm run deploy`).

### Non-goals

- No framework change, no runtime server features, no CMS.
- No new photography session — dual-portrait is achieved via CSS duotone on the existing `/public/images/me3.jpeg`.
- No test runner introduction (site is static content; verification is via `next build`, `next lint`, and manual route audit).
- No i18n framework swap — keep the homemade EN/PT dictionary system.

---

## 2. Information architecture

### 2.1 Top-level navigation

```
/                                     Home (dual-personality hero + 2 career index)
/career/saas-automations              Career: SaaS and Automations
/career/saas-automations/projects/:slug
/career/industry-engineering          Career: Industry 4.0 and Engineering
/career/industry-engineering/projects/:slug
/hobbies                              Editorial hobbies page
```

### 2.2 Careers

**SaaS and Automations**
- CV: `Automation_IT_Engineer_2026.pdf`
- 6 projects (2 real + 4 Coming Soon):
  - `julius-finance-bot` (real)
  - `linkedin-auto-post` (real)
  - `saas-coming-01` … `saas-coming-04` (placeholder slugs; styled Coming Soon cards, no detail pages)

**Industry 4.0 and Engineering**
- Primary CV: `Engineer_Industry_4_0.pdf`
- Secondary CV (Data Engineer track): `Data_Engineer.pdf`
- 12 projects (8 real + 4 Coming Soon):
  1. `ai-data-platform-iot` (real — former industry)
  2. `hotas-remote-control` (real — former industry)
  3. `high-payload-ugv` (real — former engineer, title: ARMAX)
  4. `spirit-ugv` (real — former engineer)
  5. `drone-assist-base` (real — former engineer, AURA)
  6. `agro-drone` (real — former engineer)
  7. `ttd` (real — former engineer, Thrust Testing Device)
  8. `siemens-portable-case` (real — former engineer, Siemens S7-1200 + 6-DOF Stewart Platform)
  9. `indu-coming-01` … `indu-coming-04` (placeholder slugs; Coming Soon cards, no detail pages)

Slug renames: none for real projects — all existing detailed slugs are preserved so that `PROJECT_DETAILS` content ports 1:1.

### 2.3 Old routes

Old `/career/industry`, `/career/engineer`, `/career/automation-it` are removed. The `not-found.tsx` (404 page) gets an "Looking for…?" block linking to the new two career pages so stale links still lead somewhere useful. No server-side redirect is attempted (incompatible with static export).

---

## 3. Visual system

### 3.1 Palette (Tailwind v4 `@theme` in `src/styles/globals.css`)

Light base (default):

```css
--color-bg         oklch(0.97 0.012 85);   /* warm off-white */
--color-surface    oklch(0.99 0.008 85);   /* raised surfaces */
--color-ink        oklch(0.20 0.015 270);  /* warm near-black */
--color-muted      oklch(0.55 0.010 270);  /* secondary text */
--color-line       oklch(0.90 0.010 85);   /* hairlines, borders */

--color-saas       oklch(0.62 0.14 240);   /* cool indigo — SaaS accent */
--color-indu       oklch(0.65 0.13 45);    /* warm amber — Industry accent */
--color-signal     oklch(0.72 0.18 55);    /* shared CTA accent */
```

Dark mode (optional toggle, off by default — not required for v2.0 ship but the variables are defined under `.dark` so it can be turned on later):

```css
.dark {
  --color-bg       oklch(0.15 0.015 270);
  --color-surface  oklch(0.18 0.015 270);
  --color-ink      oklch(0.96 0.010 85);
  --color-muted    oklch(0.70 0.015 85);
  --color-line     oklch(0.28 0.015 270);
}
```

Tailwind v4 automatically exposes these as utilities (`bg-bg`, `text-ink`, `border-line`, `text-saas`, etc.) — no config file needed.

### 3.2 Typography

Loaded via `next/font/google` in `src/app/layout.tsx`:

```ts
import { Fraunces, Inter_Tight, JetBrains_Mono } from "next/font/google";

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  axes: ["SOFT", "WONK", "opsz"],
});
const sans = Inter_Tight({ variable: "--font-sans", subsets: ["latin"] });
const mono = JetBrains_Mono({ variable: "--font-mono", subsets: ["latin"] });
```

`@theme` block wires them:

```css
--font-display: var(--font-display);
--font-sans:    var(--font-sans);
--font-mono:    var(--font-mono);
```

Type scale (fluid):

| Role | Class | Size |
|---|---|---|
| Hero display | `font-display` `text-[clamp(3rem,10vw,8rem)]` `leading-[0.95]` `tracking-tight` | fluid 48→128 px |
| H2 section | `font-display` `text-[clamp(1.75rem,4vw,3rem)]` `leading-tight` | fluid 28→48 px |
| H3 card | `font-sans` `text-xl` `font-medium` | 20 px |
| Body | `font-sans` `text-[17px]` `leading-[1.6]` | 17 px |
| Meta mono | `font-mono` `text-xs` `tracking-wider` `uppercase` | 12 px |

### 3.3 Motion

- Library: `motion` package (imports from `motion/react`), already installed.
- Custom easings in `@theme`:
  ```css
  --ease-fluid:  cubic-bezier(0.3, 0, 0, 1);
  --ease-snappy: cubic-bezier(0.2, 0, 0, 1);
  ```
- `Reveal` primitive replaces `FadeIn`. Uses `whileInView` with `once: true` and a 60 ms stagger between siblings via `custom` index. Respects `prefers-reduced-motion` via `useReducedMotion()` — when reduced, no animations, content is immediately visible.
- Explicit removals: `AuroraBackground`, `Spotlight`, `TextGenerateEffect`, `AnimatedCard`, `SkillBadge`, any gradient-shine on CTAs.

### 3.4 Dual-personality hero (practical approach)

The same image `me3.jpeg` is used twice, side-by-side, inside a `SplitPortrait` component:

- Two `<figure>` siblings in a flex row, 1 px `--color-line` divider between them.
- Each figure has an `img` plus a CSS `::after` overlay using `mix-blend-mode: color` and a semi-transparent tint:
  - Left figure: tint `--color-saas` (cool indigo duotone).
  - Right figure: tint `--color-indu` (warm amber duotone).
- On mobile (<640 px), the two figures stack vertically; the divider becomes horizontal.
- Small label above each figure (`SaaS & Automations` / `Industry 4.0 & Engineering`) in `font-mono` uppercase.
- Below the split, the name in `font-display` and a short intro in `font-sans`.

---

## 4. Folder structure

```
/
├── public/
│   ├── files/
│   │   ├── Automation_IT_Engineer_2026.pdf
│   │   ├── Data_Engineer.pdf
│   │   └── Engineer_Industry_4_0.pdf
│   └── images/
│       ├── portrait/
│       │   └── me3.jpeg
│       ├── projects/
│       │   ├── industry-engineering/   (union of former industry/ + engineer/ assets)
│       │   └── saas-automations/       (renamed from automation-it/)
│       └── hobbies/
│
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── not-found.tsx
│   │   ├── globals.css                 (re-export of styles/globals.css for Next)
│   │   ├── hobbies/page.tsx
│   │   └── career/
│   │       ├── saas-automations/
│   │       │   ├── page.tsx
│   │       │   └── projects/[slug]/page.tsx
│   │       └── industry-engineering/
│   │           ├── page.tsx
│   │           └── projects/[slug]/page.tsx
│   │
│   ├── features/
│   │   ├── hero/                  (DualHero, SplitPortrait)
│   │   ├── careers/               (CareerPage, CareerIndexCard, CVDownloads)
│   │   ├── projects/              (ProjectGrid, ProjectCard, ComingSoonCard, ProjectDetail, NextProjectLink)
│   │   ├── hobbies/               (HobbyStory)
│   │   ├── timeline/              (ExperienceTimeline)
│   │   ├── skills/                (SkillsCluster)
│   │   └── navigation/            (Navbar, MobileNav, Footer, LocaleToggle)
│   │
│   ├── ui/
│   │   ├── Section.tsx
│   │   ├── Eyebrow.tsx
│   │   ├── Prose.tsx
│   │   ├── Tag.tsx
│   │   ├── Reveal.tsx
│   │   ├── Button.tsx
│   │   └── Link.tsx
│   │
│   ├── content/
│   │   ├── owner.ts
│   │   ├── careers.ts
│   │   ├── projects.ts
│   │   ├── project-details/
│   │   │   ├── saas/
│   │   │   │   ├── julius.ts
│   │   │   │   └── linkedin-auto-post.ts
│   │   │   └── indu/
│   │   │       ├── ai-data-platform.ts
│   │   │       ├── hotas-remote-control.ts
│   │   │       ├── high-payload-ugv.ts
│   │   │       ├── spirit-ugv.ts
│   │   │       ├── drone-assist-base.ts
│   │   │       ├── agro-drone.ts
│   │   │       ├── ttd.ts
│   │   │       └── siemens-stewart.ts
│   │   ├── experience.ts
│   │   ├── skills.ts
│   │   ├── education.ts
│   │   ├── hobbies.ts
│   │   └── types.ts
│   │
│   ├── i18n/
│   │   ├── locale-context.tsx
│   │   ├── dictionary.ts
│   │   └── types.ts
│   │
│   └── styles/
│       └── globals.css
│
├── next.config.ts                  (output: 'export', images.unoptimized: true — preserved)
├── package.json
├── tsconfig.json                   (baseUrl '.', paths "@/*" -> "./src/*")
└── docs/superpowers/specs/
    └── 2026-04-21-portfolio-v2-design.md   (this file)
```

### 4.1 Content layer split (from the current 1225-line `lib/constants.ts`)

One file per concern, one file per real project detail. Shape of each detail file:

```ts
// src/content/project-details/indu/ai-data-platform.ts
import type { ProjectDetail } from "../../types";

export const aiDataPlatform: ProjectDetail = {
  slug: "ai-data-platform-iot",
  career: "industry-engineering",
  title: "AI Data Platform",
  subtitle: { en: "…", pt: "…" },
  bannerImage: "/images/projects/industry-engineering/ai-data-platform-architecture.png",
  liveUrl: undefined,
  tags: ["Docker", "MQTT", "InfluxDB", "Grafana", "Telegraf", "Python", "TLS"],
  sections: [ /* preserved verbatim from current PROJECT_DETAILS */ ],
};
```

`src/content/projects.ts` aggregates by career:

```ts
export const PROJECTS_SAAS = [julius, linkedinAutoPost, ...comingSoonSaas];
export const PROJECTS_INDU = [
  aiDataPlatform, hotas, armax, spirit, aura, agroDrone, ttd, siemensStewart,
  ...comingSoonIndu,
];
```

All EN/PT text from `lib/constants.ts` and `lib/i18n.ts` is preserved verbatim during migration — no copy is lost. Copy edits happen in a follow-up, not during the restructure.

---

## 5. Page templates

### 5.1 Home `/`

- `Navbar` (see 5.5).
- `DualHero` with `SplitPortrait`, name in display type, intro prose, three CTAs: `view work ↓` (scroll anchor), `CVs` (opens a small sheet with the 3 PDFs), social links (LinkedIn, GitHub).
- `Selected work` section: two `CareerIndexCard`s side by side — each shows a cover image, career number (`01` / `02`), title, 1-line description, project count, and `→ view`. Clicking routes to the career page.
- `About / Contact` footer strip with `Footer` component (year, rights, locale toggle).

### 5.2 Career page `/career/{career}`

Sections in order, each wrapped in `<Section>` with `<Eyebrow>`:

1. Compact hero: eyebrow `01 / career`, display title, one-paragraph intro. Industry page shows a pill: `includes Data Engineer track`.
2. `CVDownloads`:
   - SaaS page: 1 button (`Automation_IT_Engineer_2026.pdf`).
   - Industry page: 2 buttons (`Engineer_Industry_4_0.pdf` primary, `Data_Engineer.pdf` secondary).
3. `Selected work` — `ProjectGrid` of `ProjectCard`s (real) and `ComingSoonCard`s. Grid: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`. Coming Soon cards use a diagonal line pattern background, `[ in pipeline ]` tag in mono, no link.
4. `Experience` — `ExperienceTimeline`. Vertical line in `--color-line`, markers in career accent. Each card: role, company, period (mono), 3–5 bullets.
5. `Skills` — `SkillsCluster`. On Industry page, a dedicated sub-cluster `Data Engineering` (InfluxDB / time-series, pandas, Python pipelines, AI-driven analytics, SQL, REST/webhooks).
6. `Education` — 2 compact cards.

### 5.3 Project detail `/career/{career}/projects/{slug}`

- Back link in eyebrow position.
- Display title + subtitle.
- Meta row (mono): `role · period · tech · status`.
- Banner image full-width.
- Sections: heading + prose + optional image(s) + optional caption (current `ProjectDetail` shape preserved).
- Bottom: `NextProjectLink` — prev/next inside the same career.

Dynamic route uses `generateStaticParams` with `dynamicParams = false` (required by static export — only real-project slugs are generated; Coming Soon slugs do **not** produce detail pages).

### 5.4 Hobbies `/hobbies`

Full-width editorial. Six `<HobbyStory>` sections, alternating image side (left/right). Each contains:

- `Eyebrow` with index + uppercase name.
- Large image (`aspect-[4/5]` on desktop, `aspect-[16/10]` on mobile).
- 3–5 prose sentences in EN/PT.
- Meta strip: two or three `label / value` pairs in mono.
- No emoji.

Hobbies to write (i18n EN/PT, preserve existing image filenames):

| # | Title | Image | Meta examples |
|---|---|---|---|
| 01 | Gaming | `Game.png` | Favorites · Peak hours · Current obsession |
| 02 | Music | `Music.png` | Daily hours · Active artists · Favorite venue |
| 03 | Travel | `Travel.png` | Countries · Longest trip · Next on list |
| 04 | Electronics & DIY | `Rasp.png` | Current project · Favorite tool · Board count |
| 05 | Fitness | `gym.png` | Current split · Years training · Current lift |
| 06 | Reading | `Read.png` | Currently reading · Books this year · Favorite genre |

Draft copy will be written during implementation by the hobbies agent (D), then handed to the user for refinement — the draft must be specific (no platitudes), in Felipe's voice, and free of emoji.

### 5.5 Navigation

- Slim navbar, fixed top, `border-b border-line`, `bg-bg/85 backdrop-blur`.
- Left: name in `font-display` small. Right: links `Work` (opens inline menu with the two careers + "all projects" index), `Hobbies`, `EN/PT` toggle.
- Mobile: hamburger opens a fullscreen `MobileNav` with large links, never the 3-column dropdown of v1.

### 5.6 `not-found.tsx`

- Display title `Page not found`.
- Paragraph: `Looking for a previous section? Try one of these:`
- Two links: `SaaS and Automations → /career/saas-automations`, `Industry 4.0 and Engineering → /career/industry-engineering`.
- Link home.

---

## 6. i18n

- Dictionary keys from `lib/i18n.ts` migrate to `src/i18n/dictionary.ts`. Structure preserved.
- Stale keys removed: `nav.industry`, `nav.automation`, `nav.engineer`, all `industry.*`, `automation.*`, `engineer.*` replaced by `nav.saas`, `nav.indu`, `saas.*`, `indu.*`.
- Hero bio rewritten to remove flag emoji and the "🇵🇹🇪🇺" tail. New text: `Based in Lisbon, Portugal.` (EN) / `Baseado em Lisboa, Portugal.` (PT).
- `locale-context.tsx` logic unchanged; imports repath to `src/i18n/`.

---

## 7. Dependencies and tooling

No dependency additions or removals are required. `lucide-react` usage will be audited during implementation; only icons genuinely used are imported (likely: `ArrowRight`, `ArrowLeft`, `Download`, `Menu`, `X`, `ChevronDown`, `Globe`, `ExternalLink`, `Github`, `Linkedin`, `Mail`). The decorative `Factory` / `Cpu` / `Workflow` icons go away with the v1 career cards.

`next.config.ts` stays as-is (`output: 'export'`, `images.unoptimized: true`, SVG allowance). `tsconfig.json` only changes the path alias: `"@/*": ["./src/*"]`.

No CLI scaffolding is needed — the project already exists, and Next does not ship a first-party generator for routes/components beyond `create-next-app`. Where route files and components are created, we follow the App Router conventions directly (`page.tsx`, `layout.tsx`, `not-found.tsx`, `[slug]/page.tsx`).

---

## 8. Migration plan (phases)

### Phase 1 — Foundation (sequential, one agent)

1. Branch/worktree via `superpowers:using-git-worktrees` for isolation.
2. Move CVs: `git mv` the three PDFs from repo root to `/public/files/`; delete the three old PDFs.
3. Create `/src/` and move `app/`, `components/`, `lib/` into it using `git mv` (history preserved).
4. Update `tsconfig.json` alias.
5. Split `src/lib/constants.ts` → `src/content/*` (one file per project detail, one file per aggregate). Preserve all EN/PT text.
6. Rewrite `src/styles/globals.css` with new `@theme` block (palette, fonts, easings, animations).
7. Install fonts via `next/font/google` in `src/app/layout.tsx`; wire CSS vars through `@theme`.
8. Verify: `npm run lint && npm run build` passes with old pages still rendering under the new styles.

### Phase 2 — Components and pages (parallel via `superpowers:dispatching-parallel-agents`)

| Agent | Scope | Depends on |
|---|---|---|
| **A** | `src/ui/*` design primitives (Section, Eyebrow, Prose, Tag, Reveal, Button, Link) + `SplitPortrait` | Phase 1 |
| **B** | `src/app/page.tsx` home, `src/features/navigation/*` (Navbar, MobileNav, Footer, LocaleToggle) | A |
| **C** | Career pages + ProjectDetail: `src/app/career/{saas-automations,industry-engineering}/`, `src/features/careers/*`, `src/features/projects/*`, `src/features/timeline/*`, `src/features/skills/*` | A |
| **D** | `src/app/hobbies/page.tsx` + `src/features/hobbies/*` + `src/content/hobbies.ts` (6 editorial stories drafted, EN/PT) | A |

B, C, D run concurrently once A lands. Each agent commits its work on its own branch/worktree and opens a PR back to the v2 integration branch, or — simpler — all agents work on the same v2 branch but on disjoint directories (no merge conflicts by design of the split).

### Phase 3 — Cleanup, verification, deploy (sequential)

1. Delete all v1 deprecated components: `AuroraBackground`, `Spotlight`, `TextGenerateEffect`, `AnimatedCard`, `FadeIn`, `SkillBadge`. Delete v1 career routes.
2. Grep audit: `grep -R --include='*.ts' --include='*.tsx' -P '[\x{1F300}-\x{1FAFF}\x{2600}-\x{27BF}]' src/` returns zero matches (no emoji in code or content).
3. `npm run lint` — fix any issues.
4. `npm run build` — must pass with zero errors and generate:
   - `/out/index.html`
   - `/out/career/saas-automations/index.html` + `/out/career/saas-automations/projects/{julius-finance-bot,linkedin-auto-post}/index.html`
   - `/out/career/industry-engineering/index.html` + 8 project-detail directories
   - `/out/hobbies/index.html`
   - `/out/404.html`
   - `/out/files/{Automation_IT_Engineer_2026,Data_Engineer,Engineer_Industry_4_0}.pdf`
5. Local smoke test: `npx serve out` — click every route, toggle EN/PT everywhere, open every CV, open mobile menu, trigger `prefers-reduced-motion` in devtools.
6. Dispatch `superpowers:requesting-code-review` on the diff.
7. `npm run deploy`.

---

## 9. Success criteria

1. Two top-level career entries in nav; Data Engineer surfaces only inside Industry (CV + skills cluster).
2. 18 project slugs total — 6 under SaaS (2 detail + 4 Coming Soon), 12 under Industry (8 detail + 4 Coming Soon). Only the 10 real slugs generate detail pages via `generateStaticParams`.
3. Zero emoji in UI or content (grep audit clean, minus allowed proper nouns).
4. Hobbies page: 6 editorial sections with imagery, 3–5 sentence prose, mono meta row.
5. Dual-portrait hero renders the same source image with two distinct duotone treatments and stacks on mobile.
6. `npm run build` succeeds; `/out` static export functional when opened locally.
7. `npm run deploy` ships to GitHub Pages and the live site works end-to-end.
8. Git history preserved for moved files (verified by `git log --follow` on a sample file post-migration).

---

## 10. Deletions (explicit, tracked)

Files removed from disk:

- `/public/files/Developer_2026.pdf`
- `/public/files/Engineer_2026.pdf`
- `/public/files/Automation_IT_Engineer_2026.pdf` (old)
- `/components/ui/AuroraBackground.tsx`
- `/components/ui/Spotlight.tsx`
- `/components/ui/TextGenerateEffect.tsx`
- `/components/ui/AnimatedCard.tsx`
- `/components/ui/FadeIn.tsx`
- `/components/ui/SkillBadge.tsx`
- `/app/career/industry/**`, `/app/career/engineer/**`, `/app/career/automation-it/**` (after content is ported to the two new career directories)

Files moved (not deleted):

- `/Automation_IT_Engineer_2026.pdf`, `/Data_Engineer.pdf`, `/Engineer_Industry_4_0.pdf` → `/public/files/`
- `app/`, `components/`, `lib/` → `src/` (contents restructured per §4)

---

## 11. Risks and mitigations

| Risk | Mitigation |
|---|---|
| Color `mix-blend-mode` duotone doesn't render identically across browsers | Ship the effect behind `@supports (mix-blend-mode: color)`; fallback is a subtle `filter: sepia()` / `hue-rotate()` single-layer treatment |
| Fluid type (`clamp()`) hero overlaps portrait on narrow viewports | Hero layout uses CSS grid with `auto-fit`, portrait stacks above name under 640 px; test at 320, 390, 768, 1024, 1440, 1920 |
| Slug rename in URLs breaks inbound links (old industry/engineer URLs) | `not-found.tsx` ships with an "Looking for…" block linking to the new careers; acceptable for a personal portfolio with no external SEO investment |
| Removing `FadeIn` / `AnimatedCard` / `Spotlight` / `AuroraBackground` cascades into many files | Phase 1 compiles old pages unchanged; Phase 2 agents replace component-by-component; deletion happens only in Phase 3 after all call sites are gone |
| Content split (one file per project) is noisier for small edits | Offset by legibility wins and merge-friendliness; aggregator re-exports keep consumer code unchanged |

---

## 12. Out of scope

- Blog, writings, case studies beyond the existing project detail pages.
- Contact form (static site — mail link only).
- Analytics (no current instrumentation; not introduced here).
- CMS integration.
- Server-side redirects for legacy URLs.

---

## 13. Handoff

Once this spec is user-approved:

1. Invoke `superpowers:writing-plans` to produce a step-by-step implementation plan, broken into the phases above.
2. The plan will explicitly use `superpowers:dispatching-parallel-agents` for Phase 2 (agents A/B/C/D) and `superpowers:using-git-worktrees` if the user prefers worktree isolation.
3. Context7 is consulted throughout for any Next.js 16 / Tailwind v4 / Motion syntax question before searching the web (already queried during this spec for `output: 'export'`, `@theme`, `motion/react`).
