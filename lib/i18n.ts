// ============================================================================
// i18n — Simple translation system (EN / PT-BR)
// Edit ONLY the text values below to customize.
// ============================================================================

export type Locale = "en" | "pt";

const translations = {
  // ── Navbar ──────────────────────────────────────────────────────────────
  "nav.home": { en: "Home", pt: "Início" },
  "nav.developer": { en: "Full-Stack Dev", pt: "Dev Full-Stack" },
  "nav.automation": { en: "IT Automation", pt: "Automação IT" },
  "nav.engineer": { en: "Engineer", pt: "Engenheiro" },
  "nav.hobbies": { en: "Hobbies", pt: "Hobbies" },
  "nav.projects": { en: "Projects", pt: "Projetos" },

  // ── Hero (main landing) ────────────────────────────────────────────────
  "hero.greeting": { en: "Hi, I'm Felipe!", pt: "Olá, eu sou o Felipe!" },
  "hero.subtitle": {
    en: "Dual-Career Professional",
    pt: "Profissional de Dupla Carreira",
  },
  "hero.bio": {
    en: "Control & Automation Engineer, IT Automation Developer and Full-Stack Developer. Startup founder building innovative software and hardware solutions for Industry 4.0 and UGVs. Based in Portugal.",
    pt: "Engenheiro de Controle e Automação, Desenvolvedor de Automação IT e Full-Stack. Fundador de startup construindo soluções inovadoras de software e hardware para Indústria 4.0 e UGVs. Baseado em Portugal.",
  },
  "hero.downloadCV": { en: "Download CV", pt: "Baixar CV" },
  "hero.explore": {
    en: "Explore my careers",
    pt: "Explore minhas carreiras",
  },

  // ── Career cards on main page ──────────────────────────────────────────
  "career.developer.title": {
    en: "Full-Stack Developer",
    pt: "Desenvolvedor Full-Stack",
  },
  "career.developer.desc": {
    en: "Full-stack web and software development with Next.js, TypeScript, React, Node.js, databases, Docker and modern cloud deployments.",
    pt: "Desenvolvimento web e software full-stack com Next.js, TypeScript, React, Node.js, bancos de dados, Docker e deploy em nuvem moderna.",
  },
  "career.automation.title": {
    en: "IT Automation Developer",
    pt: "Desenvolvedor de Automação IT",
  },
  "career.automation.desc": {
    en: "End-to-end IT automation with n8n, Node-RED, AI-driven workflows, REST APIs, event-driven pipelines and cloud-connected data architectures.",
    pt: "Automação IT ponta a ponta com n8n, Node-RED, workflows com IA, REST APIs, pipelines orientados a eventos e arquiteturas de dados na nuvem.",
  },
  "career.engineer.title": {
    en: "Engineer",
    pt: "Engenheiro",
  },
  "career.engineer.desc": {
    en: "Control systems, UGV/drone development, embedded systems, SCADA, IoT solutions, electrical panels and Industry 4.0 integrations.",
    pt: "Sistemas de controle, desenvolvimento de UGVs/drones, sistemas embarcados, SCADA, soluções IoT, painéis elétricos e integrações Indústria 4.0.",
  },
  "career.viewMore": { en: "View projects →", pt: "Ver projetos →" },

  // ── Career pages ───────────────────────────────────────────────────────
  "developer.hero.title": {
    en: "Full-Stack Developer",
    pt: "Desenvolvedor Full-Stack",
  },
  "developer.hero.subtitle": {
    en: "Building modern web experiences with cutting-edge technologies",
    pt: "Construindo experiências web modernas com tecnologias de ponta",
  },
  "developer.hero.bio": {
    en: "Full-stack developer experienced with Next.js, TypeScript, React, Node.js, Docker, MongoDB, PostgreSQL, Vercel and modern CI/CD pipelines. Founder of Movewertech Technologies, building production-grade web and IoT platforms from scratch.",
    pt: "Desenvolvedor full-stack experiente com Next.js, TypeScript, React, Node.js, Docker, MongoDB, PostgreSQL, Vercel e pipelines CI/CD modernos. Fundador da Movewertech Technologies, construindo plataformas web e IoT de nível produção do zero.",
  },

  "automation.hero.title": {
    en: "IT Automation Developer",
    pt: "Desenvolvedor de Automação IT",
  },
  "automation.hero.subtitle": {
    en: "Building intelligent workflows and AI-driven automation systems",
    pt: "Construindo workflows inteligentes e sistemas de automação com IA",
  },
  "automation.hero.bio": {
    en: "IT Automation Developer with 4+ years building end-to-end automation systems — from industrial IoT pipelines to AI-driven workflows with n8n, Node-RED, MQTT and REST APIs. Experienced deploying production-grade platforms integrating generative AI, event-driven architectures and cloud-connected data pipelines.",
    pt: "Desenvolvedor de Automação IT com 4+ anos construindo sistemas de automação ponta a ponta — desde pipelines IoT industriais até workflows com IA usando n8n, Node-RED, MQTT e REST APIs. Experiente em implantar plataformas de nível produção integrando IA generativa, arquiteturas orientadas a eventos e pipelines de dados na nuvem.",
  },

  "engineer.hero.title": {
    en: "Engineer",
    pt: "Engenheiro",
  },
  "engineer.hero.subtitle": {
    en: "Designing intelligent systems from concept to deployment",
    pt: "Projetando sistemas inteligentes do conceito ao deploy",
  },
  "engineer.hero.bio": {
    en: "Control & Automation Engineer with 6+ years of hands-on experience — delivering a 1,200 kg UGV and a production-grade IIoT monitoring platform from scratch, while wiring industrial panels, programming PLCs and leading engineering teams. Deep expertise across the full Industry 4.0 stack. Founder of Movewer Technologies.",
    pt: "Engenheiro de Controle e Automação com 6+ anos de experiência prática — entregou um UGV de 1.200 kg e uma plataforma de monitoramento IIoT de nível produção do zero, enquanto cabeava painéis industriais, programava CLPs e liderava equipes. Expertise profunda em todo o stack Indústria 4.0. Fundador da Movewer Technologies.",
  },

  // ── Sections ───────────────────────────────────────────────────────────
  "section.projects": { en: "Projects", pt: "Projetos" },
  "section.experience": { en: "Experience", pt: "Experiência" },
  "section.skills": { en: "Skills", pt: "Habilidades" },
  "section.education": { en: "Education", pt: "Educação" },
  "section.hobbies": { en: "Hobbies & Interests", pt: "Hobbies & Interesses" },

  // ── Project page ───────────────────────────────────────────────────────
  "project.backToProjects": {
    en: "Back to projects",
    pt: "Voltar aos projetos",
  },

  // ── Hobbies ────────────────────────────────────────────────────────────
  "hobbies.title": { en: "Hobbies & Interests", pt: "Hobbies & Interesses" },
  "hobbies.subtitle": {
    en: "Beyond work, here's what I'm passionate about.",
    pt: "Além do trabalho, aqui está o que me apaixona.",
  },

  // ── Footer ─────────────────────────────────────────────────────────────
  "footer.rights": {
    en: "All rights reserved.",
    pt: "Todos os direitos reservados.",
  },

  // ── 404 ────────────────────────────────────────────────────────────────
  "notfound.title": { en: "Page not found", pt: "Página não encontrada" },
  "notfound.back": { en: "Go home", pt: "Voltar ao início" },
} as const;

export type TranslationKey = keyof typeof translations;

export function t(key: TranslationKey, locale: Locale): string {
  return translations[key][locale];
}

export const locales: Locale[] = ["en", "pt"];
export const defaultLocale: Locale = "en";
