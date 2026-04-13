// ============================================================================
// i18n — Simple translation system (EN / PT-BR)
// Edit ONLY the text values below to customize.
// ============================================================================

export type Locale = "en" | "pt";

const translations = {
  // ── Navbar ──────────────────────────────────────────────────────────────
  "nav.home": { en: "Home", pt: "Início" },
  "nav.industry": { en: "Industry 4.0", pt: "Indústria 4.0" },
  "nav.automation": { en: "IT Automation", pt: "Automação IT" },
  "nav.engineer": { en: "Engineer", pt: "Engenheiro" },
  "nav.hobbies": { en: "Hobbies", pt: "Hobbies" },
  "nav.projects": { en: "Projects", pt: "Projetos" },

  // ── Hero (main landing) ────────────────────────────────────────────────
  "hero.greeting": { en: "Hi, I'm Felipe!", pt: "Olá, eu sou o Felipe!" },
  "hero.bio": {
    en: "Control & Automation Engineer, IT Automation Specialist and Industry 4.0 Architect — bridging field devices, industrial IoT and AI-driven analytics. Startup founder focused on unmanned ground vehicles (UGVs), delivering autonomous solutions to industrial, agricultural and logistics clients. Developing automations is my passion. Based in Portugal 🇵🇹🇪🇺",
    pt: "Engenheiro de Controle e Automação, Especialista em Automação IT e Arquiteto de Indústria 4.0 — conectando dispositivos de campo, IoT industrial e analytics com IA. Fundador de startup focada em veículos terrestres não tripulados (UGVs), entregando soluções autônomas para clientes industriais, agrícolas e logísticos. Desenvolver automações é minha paixão. Baseado em Portugal 🇵🇹🇪🇺",
  },
  "hero.downloadCV": { en: "Download CV", pt: "Baixar CV" },
  "hero.explore": {
    en: "Explore my careers",
    pt: "Explore minhas carreiras",
  },

  // ── Career cards on main page ──────────────────────────────────────────
  "career.industry.title": {
    en: "Industry 4.0",
    pt: "Indústria 4.0",
  },
  "career.industry.desc": {
    en: "Industrial IoT and edge-to-cloud architectures — MQTT, OPC-UA, Node-RED, time-series databases, Grafana dashboards and AI analytics for connected operations.",
    pt: "IoT industrial e arquiteturas edge-to-cloud — MQTT, OPC-UA, Node-RED, bancos time-series, dashboards Grafana e analytics com IA para operações conectadas.",
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
    en: "Control systems, PLC programming, UGV/drone development, embedded systems, SCADA, IoT solutions, electrical panels and Industry 4.0 integrations.",
    pt: "Sistemas de controle, programação de CLPs, desenvolvimento de UGVs/drones, sistemas embarcados, SCADA, soluções IoT, painéis elétricos e integrações Indústria 4.0.",
  },
  "career.viewMore": { en: "View projects →", pt: "Ver projetos →" },

  // ── Career pages ───────────────────────────────────────────────────────
  "industry.hero.title": {
    en: "Industry 4.0",
    pt: "Indústria 4.0",
  },
  "industry.hero.subtitle": {
    en: "Bridging field devices to the cloud — IIoT, edge computing and intelligent industrial automation",
    pt: "Conectando dispositivos de campo à nuvem — IIoT, edge computing e automação industrial inteligente",
  },
  "industry.hero.bio": {
    en: "Industry 4.0 specialist focused on IT/OT convergence — building end-to-end industrial IoT platforms, edge-to-cloud data pipelines, MQTT-driven architectures with TLS-grade security and AI-augmented analytics for unmanned vehicles, factories and field operations. Founder of Movewer Technologies.",
    pt: "Especialista em Indústria 4.0 focado em convergência IT/OT — construindo plataformas IIoT ponta a ponta, pipelines de dados edge-to-cloud, arquiteturas orientadas a MQTT com segurança nível TLS e analytics aumentado por IA para veículos não-tripulados, fábricas e operações de campo. Fundador da Movewer Technologies.",
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
    en: "Automation Specialist with 5+ years building end-to-end automation systems — from event-driven pipelines and AI integrations to production web apps and cloud-connected data architectures. Strong Python and JS/TS background with hands-on experience in n8n, Make, REST APIs and low-code/pro-code solutions. Founder of Movewer Technologies.",
    pt: "Especialista em Automação com 5+ anos construindo sistemas de automação ponta a ponta — de pipelines orientados a eventos e integrações de IA a aplicações web em produção e arquiteturas de dados na nuvem. Forte background em Python e JS/TS com experiência prática em n8n, Make, REST APIs e soluções low-code/pro-code. Fundador da Movewer Technologies.",
  },

  "engineer.hero.title": {
    en: "Engineer",
    pt: "Engenheiro",
  },
  "engineer.hero.subtitle": {
    en: "From industrial control cabinets to autonomous UGV platforms",
    pt: "De painéis de controle industrial a plataformas UGV autônomas",
  },
  "engineer.hero.bio": {
    en: "Mechatronic, Automation and Control Engineer with 8+ years of hands-on experience delivering industrial automation projects — PLC and SCADA programming, electrical and automation design, UGV/drone development, and full Industry 4.0 solutions from field devices to cloud dashboards. Equally comfortable in a control cabinet or a code editor. Founder of Movewer Technologies.",
    pt: "Engenheiro Mecatrônico, de Automação e Controle com 8+ anos de experiência prática entregando projetos de automação industrial — programação de CLPs e SCADA, projeto elétrico e de automação, desenvolvimento de UGVs/drones e soluções Indústria 4.0 completas, do dispositivo de campo ao dashboard na nuvem. Igualmente confortável em um painel elétrico ou em um editor de código. Fundador da Movewer Technologies.",
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
