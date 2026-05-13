// ============================================================================
// i18n — Simple translation system (EN / PT-BR)
// Edit ONLY the text values below to customize.
// ============================================================================

export type Locale = "en" | "pt";

const translations = {
  // ── Navbar ──────────────────────────────────────────────────────────────
  "nav.home": { en: "Home", pt: "Início" },
  "nav.industry": { en: "Engineering", pt: "Engenharia" },
  "nav.automation": { en: "SaaS & Automation", pt: "SaaS & Automação" },
  "nav.hobbies": { en: "Hobbies", pt: "Hobbies" },
  "nav.projects": { en: "Projects", pt: "Projetos" },

  // ── Hero (main landing) ────────────────────────────────────────────────
  "hero.greeting": { en: "Hi, I'm Felipe!", pt: "Olá, eu sou o Felipe!" },
  "hero.bio": {
    en: "Control & Automation Engineer, SaaS & Automation Developer and Industry 4.0 Architect — bridging field devices, industrial IoT and AI-driven analytics. Startup founder focused on unmanned ground vehicles (UGVs), delivering autonomous solutions to industrial, agricultural and logistics clients. Developing automations is my passion. Based in Portugal 🇵🇹🇪🇺",
    pt: "Engenheiro de Controle e Automação, Desenvolvedor de SaaS & Automações e Arquiteto de Indústria 4.0 — conectando dispositivos de campo, IoT industrial e analytics com IA. Fundador de startup focada em veículos terrestres não tripulados (UGVs), entregando soluções autônomas para clientes industriais, agrícolas e logísticos. Desenvolver automações é minha paixão. Baseado em Portugal 🇵🇹🇪🇺",
  },
  "hero.downloadCV": { en: "Download CV", pt: "Baixar CV" },
  "hero.downloadCVMain": { en: "Industry 4.0 Engineer", pt: "Engenheiro Indústria 4.0" },
  "hero.downloadCVDataEngineer": { en: "Data Engineer CV", pt: "CV Data Engineer" },
  "hero.downloadCVRobotics": { en: "Robotics Engineer", pt: "Engenheiro de Robótica" },
  "hero.explore": {
    en: "Explore my careers",
    pt: "Explore minhas carreiras",
  },

  // ── Career cards on main page ──────────────────────────────────────────
  "career.industry.title": {
    en: "Industry 4.0 & Engineering",
    pt: "Indústria 4.0 & Engenharia",
  },
  "career.industry.desc": {
    en: "Industrial IoT, edge-to-cloud architectures, PLC/SCADA, electrical panels, UGV/drone development and data engineering — with a Data Engineer specialization for time-series analytics on industrial data.",
    pt: "IoT industrial, arquiteturas edge-to-cloud, CLP/SCADA, painéis elétricos, desenvolvimento de UGVs/drones e engenharia de dados — com especialização em Data Engineer para analytics de séries temporais em dados industriais.",
  },
  "career.automation.title": {
    en: "SaaS & Automation",
    pt: "SaaS & Automação",
  },
  "career.automation.desc": {
    en: "End-to-end SaaS products and automation workflows — n8n, Node-RED, AI-driven pipelines, REST APIs, full-stack web apps and cloud-connected data architectures.",
    pt: "Produtos SaaS ponta a ponta e workflows de automação — n8n, Node-RED, pipelines com IA, REST APIs, apps web full-stack e arquiteturas de dados na nuvem.",
  },
  "career.viewMore": { en: "View projects →", pt: "Ver projetos →" },

  // ── Career pages ───────────────────────────────────────────────────────
  "industry.hero.title": {
    en: "Industry 4.0 & Engineering",
    pt: "Indústria 4.0 & Engenharia",
  },
  "industry.hero.subtitle": {
    en: "From industrial control cabinets to autonomous UGVs and edge-to-cloud IIoT",
    pt: "De painéis de controle industrial a UGVs autônomos e IIoT edge-to-cloud",
  },
  "industry.hero.bio": {
    en: "Mechatronic, Automation and Control Engineer with 8+ years of hands-on experience — PLC and SCADA programming, electrical and automation design, UGV/drone development, and full Industry 4.0 solutions spanning field devices to cloud dashboards. Also a Data Engineer specialization: MQTT/OPC-UA pipelines, Telegraf, InfluxDB time-series databases and AI-augmented analytics on industrial data. Founder of Movewer Technologies.",
    pt: "Engenheiro Mecatrônico, de Automação e Controle com 8+ anos de experiência prática — programação de CLPs e SCADA, projeto elétrico e de automação, desenvolvimento de UGVs/drones, e soluções Indústria 4.0 completas, do dispositivo de campo ao dashboard na nuvem. Também especialização em Data Engineer: pipelines MQTT/OPC-UA, Telegraf, bancos de séries temporais InfluxDB e analytics aumentado por IA em dados industriais. Fundador da Movewer Technologies.",
  },

  "automation.hero.title": {
    en: "SaaS & Automation",
    pt: "SaaS & Automação",
  },
  "automation.hero.subtitle": {
    en: "Building SaaS products, AI agents and intelligent automation systems",
    pt: "Construindo produtos SaaS, agentes de IA e sistemas de automação inteligentes",
  },
  "automation.hero.bio": {
    en: "SaaS and Automation Developer with 5+ years building end-to-end systems — from event-driven pipelines and AI integrations to production web apps and cloud-connected data architectures. Strong Python and JS/TS background with hands-on experience in n8n, Make, REST APIs, Next.js and low-code/pro-code solutions. Founder of Movewer Technologies.",
    pt: "Desenvolvedor de SaaS & Automação com 5+ anos construindo sistemas ponta a ponta — de pipelines orientados a eventos e integrações de IA a aplicações web em produção e arquiteturas de dados na nuvem. Forte background em Python e JS/TS com experiência prática em n8n, Make, REST APIs, Next.js e soluções low-code/pro-code. Fundador da Movewer Technologies.",
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
