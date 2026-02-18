# Felipe Gonçalves Diogo — Personal Portfolio

Modern, dual-career portfolio website built with Next.js, featuring animated UI components and internationalization (EN/PT).

🔗 **Live Demo**: [0xfelipegd.github.io](https://0xfelipegd.github.io)

## ✨ Features

- 🎨 **Dual Career Structure**: Separate landing pages for Web Development and Automation Engineering careers
- 🌐 **Internationalization**: Full English/Portuguese support with easy language toggle
- 🎭 **Animated UI**: Aceternity-inspired components with Framer Motion animations
- 🌌 **Aurora Background**: Custom animated gradient backgrounds
- 📱 **Fully Responsive**: Optimized for mobile, tablet, and desktop
- 🎯 **Project Showcases**: Dynamic project detail pages with SSG
- ⚡ **Performance**: Built with Next.js 16 + Turbopack for blazing fast builds
- 🎨 **Tailwind CSS v4**: Modern utility-first styling

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📝 Customizing Content

All site content is centralized in **`lib/constants.ts`** for easy editing:

- **Personal Info**: Name, avatar, social links, CVs
- **Experience**: Timeline entries for both careers
- **Projects**: Project cards and detailed content
- **Skills**: Technology badges
- **Education**: Academic background
- **Hobbies**: Personal interests

### Example: Adding a New Project

```typescript
// In lib/constants.ts
export const PROJECTS_WEBDEV: Project[] = [
  {
    slug: "my-new-project",
    title: "My New Project",
    description: {
      en: "Project description in English",
      pt: "Descrição do projeto em português",
    },
    coverImage: "/images/projects/webdev/my-project.jpg",
    tags: ["React", "TypeScript", "Next.js"],
  },
  // ... other projects
];

// Add project details in PROJECT_DETAILS
export const PROJECT_DETAILS: Record<string, ProjectDetail> = {
  "my-new-project": {
    title: "My New Project",
    subtitle: {
      en: "Short description",
      pt: "Descrição curta",
    },
    bannerImage: "/images/projects/webdev/my-project-banner.jpg",
    career: "webdev",
    sections: [
      {
        heading: { en: "The Challenge", pt: "O Desafio" },
        body: {
          en: "Detailed description...",
          pt: "Descrição detalhada...",
        },
      },
      // ... more sections
    ],
  },
};
```

## 📁 Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Main landing page
│   ├── career/            # Career-specific pages
│   │   ├── webdev/        # Web Developer career
│   │   └── engineer/      # Engineer career
│   └── hobbies/           # Hobbies page
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── CareerPage.tsx    # Shared career template
│   ├── Navbar.tsx        # Navigation with dropdown
│   └── Footer.tsx        # Site footer
├── lib/                   # Utilities and data
│   ├── constants.ts      # ⭐ All site content here
│   ├── i18n.ts           # Translation keys
│   └── locale-context.tsx # i18n React Context
└── public/
    ├── images/           # All images
    │   ├── projects/     # Project screenshots
    │   └── hobbies/      # Hobby images
    └── files/            # Downloadable files (CVs)
```

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org) with App Router
- **Language**: TypeScript 5
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com)
- **Animations**: [Motion](https://motion.dev) (Framer Motion successor)
- **Icons**: [Lucide React](https://lucide.dev)
- **Build Tool**: Turbopack

## 🎨 Adding Images

Place images in the `public/images/` directory:

- **Avatar**: `public/images/Me.jpg`
- **Web Dev Projects**: `public/images/projects/webdev/`
- **Engineer Projects**: `public/images/projects/engineer/`
- **Hobbies**: `public/images/hobbies/`

Images are automatically optimized by Next.js Image component.

## 🌍 Internationalization

Edit translations in `lib/i18n.ts`:

```typescript
export const translations = {
  "key.name": {
    en: "English text",
    pt: "Texto em português",
  },
};
```

Use the `useLocale()` hook in components:

```typescript
const { locale, toggleLocale, t } = useLocale();
const text = t("key.name");
```

## 🚢 Deployment

### Deploy to GitHub Pages

Este repositório está configurado para deploy automático no GitHub Pages.

**Como fazer deploy:**

```bash
npm run deploy
```

Esse comando vai:

1. Fazer build do projeto (`next build`)
2. Criar arquivo `.nojekyll` no diretório `out/`
3. Publicar o conteúdo de `out/` na branch `gh-pages`

**Configurar GitHub Pages (apenas primeira vez):**

1. Vá para: https://github.com/0xFelipeGD/0xFelipeGD.github.io
2. Clique em **Settings** > **Pages**
3. Em **Source**, selecione **Deploy from a branch**
4. Em **Branch**, selecione **gh-pages** e **/ (root)**
5. Clique em **Save**

Aguarde alguns minutos e o site estará disponível em: https://0xfelipegd.github.io/

**Atualizações futuras:**
Após a configuração inicial, basta rodar `npm run deploy` sempre que quiser publicar novas mudanças.

### Deploy to Vercel

```bash
vercel
```

The site will auto-deploy on every push to main branch.

## 📄 License

This project is open source and available under the MIT License.

---

**Built with ❤️ by Felipe Gonçalves Diogo**
