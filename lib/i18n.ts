// ============================================================================
// i18n — Simple translation system (EN / PT-BR)
// Edit ONLY the text values below to customize.
// ============================================================================

export type Locale = "en" | "pt";

const translations = {
  // ── Navbar ──────────────────────────────────────────────────────────────
  "nav.home": { en: "Home", pt: "Início" },
  "nav.webdev": { en: "Web Developer", pt: "Desenvolvedor Web" },
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
    en: "Control & Automation Engineer and Web Developer. Startup founder building innovative software and hardware solutions for Industry 4.0 and UGVs. Based in Portugal.",
    pt: "Engenheiro de Controle e Automação e Desenvolvedor Web. Fundador de startup construindo soluções inovadoras de software e hardware para Indústria 4.0 e UGVs. Baseado em Portugal.",
  },
  "hero.downloadCV": { en: "Download CV", pt: "Baixar CV" },
  "hero.explore": {
    en: "Explore my careers",
    pt: "Explore minhas carreiras",
  },

  // ── Career cards on main page ──────────────────────────────────────────
  "career.webdev.title": {
    en: "Web Developer",
    pt: "Desenvolvedor Web",
  },
  "career.webdev.desc": {
    en: "Full-stack web development with Next.js, TypeScript, React, Node.js, databases, and modern cloud deployments.",
    pt: "Desenvolvimento web full-stack com Next.js, TypeScript, React, Node.js, bancos de dados e deploy em nuvem moderna.",
  },
  "career.engineer.title": {
    en: "Automation & Robotics Engineer",
    pt: "Engenheiro de Automação & Robótica",
  },
  "career.engineer.desc": {
    en: "Control systems, UGV/drone development, embedded systems, SCADA, IoT solutions and Industry 4.0 integrations.",
    pt: "Sistemas de controle, desenvolvimento de UGVs/drones, sistemas embarcados, SCADA, soluções IoT e integrações Indústria 4.0.",
  },
  "career.viewMore": { en: "View projects →", pt: "Ver projetos →" },

  // ── Career pages ───────────────────────────────────────────────────────
  "webdev.hero.title": {
    en: "Web Developer",
    pt: "Desenvolvedor Web",
  },
  "webdev.hero.subtitle": {
    en: "Building modern web experiences with cutting-edge technologies",
    pt: "Construindo experiências web modernas com tecnologias de ponta",
  },
  "webdev.hero.bio": {
    en: "Full-stack developer experienced with Next.js, TypeScript, React, Node.js, Docker, MongoDB, SQL, Vercel, and modern CI/CD pipelines. Passionate about creating scalable, user-centric web applications.",
    pt: "Desenvolvedor full-stack experiente com Next.js, TypeScript, React, Node.js, Docker, MongoDB, SQL, Vercel e pipelines CI/CD modernos. Apaixonado por criar aplicações web escaláveis e centradas no usuário.",
  },

  "engineer.hero.title": {
    en: "Automation & Robotics Engineer",
    pt: "Engenheiro de Automação & Robótica",
  },
  "engineer.hero.subtitle": {
    en: "Designing intelligent systems from concept to deployment",
    pt: "Projetando sistemas inteligentes do conceito ao deploy",
  },
  "engineer.hero.bio": {
    en: "Control & Automation Engineer with hands-on experience in UGV development, drone systems, embedded programming, SCADA/HMI, IoT monitoring platforms, and Industry 4.0 solutions. Founder of Movewer Technologies.",
    pt: "Engenheiro de Controle e Automação com experiência prática em desenvolvimento de UGVs, sistemas de drones, programação embarcada, SCADA/HMI, plataformas de monitoramento IoT e soluções Indústria 4.0. Fundador da Movewer Technologies.",
  },

  // ── Sections ───────────────────────────────────────────────────────────
  "section.projects": { en: "Projects", pt: "Projetos" },
  "section.experience": { en: "Experience", pt: "Experiência" },
  "section.skills": { en: "Skills", pt: "Habilidades" },
  "section.education": { en: "Education", pt: "Educação" },
  "section.hobbies": { en: "Hobbies & Interests", pt: "Hobbies & Interesses" },

  // ── Project page ───────────────────────────────────────────────────────
  "project.backToProjects": {
    en: "← Back to projects",
    pt: "← Voltar aos projetos",
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
