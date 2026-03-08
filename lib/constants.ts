// ============================================================================
// SITE CONSTANTS — Edit this file to personalise the entire site.
// All image paths point to /public/images/…
// ============================================================================

// ---------------------------------------------------------------------------
// 1. Personal data
// ---------------------------------------------------------------------------
export const SITE_OWNER = {
  firstName: "Felipe",
  fullName: "Felipe Gonçalves Diogo",
  initials: "FD",
  role: "Dual-Career Professional",
  avatarSrc: "/images/me3.jpeg",
  // CVs — one for each career
  cvWebDev: "/files/Developer_2026.pdf",
  cvEngineer: "/files/Engineer_2026.pdf",
  cvAutomationIT: "/files/Automation_IT_Engineer_2026.pdf",
};

// ---------------------------------------------------------------------------
// 2. Social links
// ---------------------------------------------------------------------------
export const SOCIAL_LINKS = {
  linkedin: "https://linkedin.com/in/felipegdiogo",
  github: "https://github.com/0xFelipeGD",
  email: "mailto:felipe.g.diogo@gmail.com",
  website: "https://0xfelipegd.github.io",
};

// ---------------------------------------------------------------------------
// 3. Experience entries (timeline)
// ---------------------------------------------------------------------------
export interface Experience {
  company: string;
  role: { en: string; pt: string };
  period: string;
  location: string;
  bullets: { en: string[]; pt: string[] };
}

export const EXPERIENCE_WEBDEV: Experience[] = [
  {
    company: "Movewertech Technologies",
    role: {
      en: "Founder & Full-Stack Developer",
      pt: "Fundador & Desenvolvedor Full-Stack",
    },
    period: "Jun 2025 – Present",
    location: "Braga, Portugal",
    bullets: {
      en: [
        "Designed and built a full-stack web platform using Next.js, TypeScript and React, with SSR, dynamic dashboards and real-time data visualization.",
        "Developed a RESTful API backend in Python, handling data ingestion from IoT sensors and delivering AI-generated insights to the frontend.",
        "Containerized the entire application with Docker, deployed on a VPS with CI/CD via GitHub Actions; production frontend hosted on Vercel.",
        "Managed the complete product lifecycle: architecture, development, testing, deployment and iteration — solo and end-to-end.",
      ],
      pt: [
        "Projetou e construiu plataforma web full-stack com Next.js, TypeScript e React, com SSR, dashboards dinâmicos e visualização em tempo real.",
        "Desenvolveu backend de API RESTful em Python, integrando sensores IoT e entregando insights de IA ao frontend.",
        "Containerizou toda a aplicação com Docker, implantada em VPS com CI/CD via GitHub Actions; frontend em produção no Vercel.",
        "Gerenciou o ciclo completo do produto: arquitetura, desenvolvimento, testes, deploy e iteração — solo e ponta a ponta.",
      ],
    },
  },
  {
    company: "Psyche AeroSpace",
    role: {
      en: "Engineering Team Lead",
      pt: "Líder de Equipe de Engenharia",
    },
    period: "Jun 2024 – Jun 2025",
    location: "São Paulo, Brazil",
    bullets: {
      en: [
        "Led a cross-functional team of 5 engineers, managing technical roadmaps and delivery using Scrum and Kanban on Jira.",
        "Drove technical decisions that contributed directly to new fundraising rounds.",
      ],
      pt: [
        "Liderou equipe cross-funcional de 5 engenheiros, gerenciando roadmaps técnicos e entregas com Scrum e Kanban no Jira.",
        "Conduziu decisões técnicas que contribuíram diretamente para novas rodadas de captação.",
      ],
    },
  },
];

export const EXPERIENCE_ENGINEER: Experience[] = [
  {
    company: "Movewer Technologies",
    role: { en: "Founder & Automation Engineer", pt: "Fundador & Engenheiro de Automação" },
    period: "Jun 2025 – Present",
    location: "Portugal",
    bullets: {
      en: [
        "Architected end-to-end Industry 4.0 solutions for UGV platforms: control systems, power electronics, wireless communication, remote-control stations and multi-sensor integration.",
        "Built a full-stack Industrial IoT Monitoring Platform using MQTT, Python, Node-RED, InfluxDB and Grafana with AI-driven analytics.",
        "Defined IT/OT convergence architecture, bridging field-level devices to cloud dashboards with real-time data pipelines and automated alerting.",
        "Collaborated with a mechanical specialist to co-design modular UGV systems aligned with client requirements and safety standards.",
      ],
      pt: [
        "Arquitetou soluções Indústria 4.0 ponta a ponta para plataformas UGV: sistemas de controle, eletrônica de potência, comunicação sem fio e integração multissensorial.",
        "Construiu Plataforma IIoT de Monitoramento full-stack com MQTT, Python, Node-RED, InfluxDB e Grafana com analytics de IA.",
        "Definiu arquitetura de convergência IT/OT, conectando dispositivos de campo a dashboards na nuvem com pipelines em tempo real.",
        "Colaborou com especialista mecânico para co-projetar sistemas UGV modulares alinhados com requisitos e normas de segurança.",
      ],
    },
  },
  {
    company: "Psyche AeroSpace",
    role: {
      en: "Automation Executive Manager",
      pt: "Gerente Executivo de Automação",
    },
    period: "Jun 2024 – Jun 2025",
    location: "São Paulo, Brazil",
    bullets: {
      en: [
        "Built the Automation and UGV divisions from zero; systems delivered contributed directly to a new fundraising round.",
        "Led cross-functional team of 5 engineers across two product lines, reducing time-to-prototype by ~30% through structured Scrum sprints.",
        "Owned full development lifecycle of UGV systems — control, power and communication — coordinating mechanical and electronics teams.",
        "Delivered a 10 kg-payload agricultural quadcopter from concept to flight-ready prototype in under 6 months.",
      ],
      pt: [
        "Construiu as divisões de Automação e UGV do zero; sistemas entregues contribuíram diretamente para nova rodada de captação.",
        "Liderou equipe cross-funcional de 5 engenheiros em duas linhas de produto, reduzindo tempo de protótipo em ~30%.",
        "Responsável pelo ciclo completo de desenvolvimento de sistemas UGV — controle, potência e comunicação.",
        "Entregou quadricóptero agrícola de 10 kg do conceito ao protótipo pronto para voo em menos de 6 meses.",
      ],
    },
  },
  {
    company: "Controvale",
    role: {
      en: "Automation Engineer",
      pt: "Engenheiro de Automação",
    },
    period: "Jun 2018 – Jun 2024",
    location: "São Paulo, Brazil",
    bullets: {
      en: [
        "Engineered 20+ special industrial machines integrating mechatronic systems, IoT connectivity, SCADA supervision and industrial protocols (Modbus, Profinet, EtherCAT).",
        "Designed and executed full electrical panel projects end-to-end: load calculations, schematics (EPLAN/AutoCAD), assembly, commissioning and field testing.",
        "Programmed PLCs and configured HMI/SCADA systems (TIA Portal, CODESYS, Indusoft) for manufacturing and process automation.",
        "Served as regional distributor for Siemens, Rockwell, Bosch, Wecon and Kinco; built 35+ industrial client partnerships over 6 years.",
      ],
      pt: [
        "Engenheirou 20+ máquinas industriais especiais com sistemas mecatrônicos, IoT, SCADA e protocolos industriais (Modbus, Profinet, EtherCAT).",
        "Projetou e executou projetos elétricos completos de painéis: cálculos, esquemáticos (EPLAN/AutoCAD), montagem e comissionamento.",
        "Programou CLPs e configurou HMI/SCADA (TIA Portal, CODESYS, Indusoft) para automação de manufatura e processos.",
        "Atuou como distribuidor regional de Siemens, Rockwell, Bosch, Wecon e Kinco; 35+ parcerias industriais em 6 anos.",
      ],
    },
  },
];

export const EXPERIENCE_AUTOMATION_IT: Experience[] = [
  {
    company: "Movewertech Technologies",
    role: {
      en: "Founder & Lead IT Automation Engineer",
      pt: "Fundador & Engenheiro Líder de Automação IT",
    },
    period: "Jun 2025 – Present",
    location: "Lisbon, Portugal",
    bullets: {
      en: [
        "Architected and deployed MOV Platform — a full-stack IoT monitoring solution on Linux VPS using MQTT, Node-RED, InfluxDB and Grafana, with an AI layer that generates actionable insights from raw sensor streams.",
        "Designed end-to-end automation workflows connecting edge devices (Raspberry Pi) to cloud dashboards: data ingestion, processing, real-time alerting and AI-driven reporting via REST APIs and webhooks.",
        "Built Julius, a fully automated AI-powered personal finance bot using n8n, OpenAI API and Google Sheets — no manual input required.",
        "Sole technical owner across full dev lifecycle: requirements gathering → architecture → deployment → iteration.",
      ],
      pt: [
        "Arquitetou e implantou a MOV Platform — solução IoT full-stack em VPS Linux com MQTT, Node-RED, InfluxDB e Grafana, com camada de IA que gera insights acionáveis de streams de sensores.",
        "Projetou workflows de automação ponta a ponta conectando dispositivos edge (Raspberry Pi) a dashboards na nuvem: ingestão, processamento, alertas em tempo real e reports de IA via REST APIs e webhooks.",
        "Construiu o Julius, bot financeiro pessoal com IA usando n8n, OpenAI API e Google Sheets — sem input manual.",
        "Responsável técnico único em todo o ciclo: levantamento → arquitetura → deploy → iteração.",
      ],
    },
  },
  {
    company: "Psyche AeroSpace",
    role: {
      en: "Automation Executive Manager",
      pt: "Gerente Executivo de Automação",
    },
    period: "Jun 2024 – Jun 2025",
    location: "São Paulo, Brazil",
    bullets: {
      en: [
        "Structured automation division from scratch and delivered intelligent control and workflow systems, contributing directly to new fundraising rounds.",
        "Managed team of 5 engineers using Scrum/Kanban on JIRA, coordinating multi-project delivery on time and within budget.",
        "Translated complex operational requirements into technical user stories, functional workflows and automation logic.",
      ],
      pt: [
        "Estruturou a divisão de automação do zero, entregando sistemas de controle e workflows inteligentes que contribuíram para novas rodadas de captação.",
        "Gerenciou equipe de 5 engenheiros com Scrum/Kanban no JIRA, coordenando entregas em prazo e orçamento.",
        "Traduziu requisitos operacionais complexos em histórias de usuário técnicas e lógica de automação.",
      ],
    },
  },
  {
    company: "Controvale",
    role: {
      en: "Automation & Application Junior Engineer",
      pt: "Engenheiro Jr. de Automação e Aplicação",
    },
    period: "Jun 2018 – Jun 2024",
    location: "São Paulo, Brazil",
    bullets: {
      en: [
        "Developed and deployed industrial automation systems with IoT, SCADA and data-flow integrations.",
        "Executed full project cycles: system design, programming (Python, structured text), testing and client-facing documentation.",
        "Built commercial automation partnerships with 35+ companies (Siemens, Bosch, Rockwell).",
      ],
      pt: [
        "Desenvolveu e implantou sistemas de automação industrial com IoT, SCADA e integrações de fluxo de dados.",
        "Ciclos completos de projeto: design, programação (Python, texto estruturado), testes e documentação para clientes.",
        "Construiu parcerias comerciais de automação com 35+ empresas (Siemens, Bosch, Rockwell).",
      ],
    },
  },
];

// ---------------------------------------------------------------------------
// 4. Skills
// ---------------------------------------------------------------------------
export const SKILLS_WEBDEV = [
  "Next.js",
  "React",
  "TypeScript",
  "JavaScript (ES6+)",
  "Node.js",
  "Python",
  "REST API Design",
  "MongoDB",
  "PostgreSQL / SQL",
  "Docker",
  "Vercel",
  "Git / GitHub",
  "GitHub Actions (CI/CD)",
  "Tailwind CSS",
  "OpenAI API",
  "SSR / SSG",
  "WebSockets",
  "Agile (Scrum/Kanban)",
];

export const SKILLS_ENGINEER = [
  "PLC (TIA Portal, CODESYS, GX Works)",
  "SCADA / HMI (Indusoft, WinCC)",
  "Modbus RTU/TCP",
  "Profinet / EtherCAT",
  "OPC-UA / LoRa",
  "IIoT Architecture",
  "IT/OT Convergence",
  "Edge Computing",
  "Electrical Panel Design",
  "Control Systems",
  "Power Electronics",
  "Embedded Systems",
  "UGV Development",
  "Drone Systems",
  "Python / Node.js",
  "MQTT / Node-RED",
  "SolidWorks / EPLAN",
  "Raspberry Pi / NVIDIA Jetson",
  "Industry 4.0",
  "Scrum / Kanban",
];

export const SKILLS_AUTOMATION_IT = [
  "n8n",
  "Node-RED",
  "Python",
  "REST / Webhook APIs",
  "MQTT",
  "OpenAI API",
  "Prompt Engineering",
  "LLM Workflow Integration",
  "InfluxDB",
  "Grafana",
  "Power BI",
  "JavaScript / TypeScript",
  "Linux / VPS",
  "Docker",
  "Git / GitHub",
  "CI/CD",
  "Raspberry Pi",
  "Power Automate",
  "Industry 4.0",
  "Scrum / Kanban",
];

// ---------------------------------------------------------------------------
// 5. Education
// ---------------------------------------------------------------------------
export const EDUCATION = {
  school: "Federal Institute of São Paulo (IFSP)",
  degree: {
    en: "Bachelor of Control and Automation Engineering",
    pt: "Bacharelado em Engenharia de Controle e Automação",
  },
  period: "Jan 2019 – Dec 2023",
  location: "São José dos Campos, SP",
};

// ---------------------------------------------------------------------------
// 6. Projects
//    6 per career — add more entries as needed
// ---------------------------------------------------------------------------
export interface Project {
  slug: string;
  title: string;
  description: { en: string; pt: string };
  coverImage: string;
  tags: string[];
}

export const PROJECTS_WEBDEV: Project[] = [
  {
    slug: "mov-platform",
    title: "MOV Platform",
    description: {
      en: "Full-stack IoT monitoring platform with Next.js frontend, Python REST API, real-time data pipeline and AI-powered insights. Containerized with Docker and self-hosted on a VPS.",
      pt: "Plataforma IoT full-stack com frontend Next.js, API REST em Python, pipeline de dados em tempo real e insights de IA. Containerizada com Docker e auto-hospedada em VPS.",
    },
    coverImage: "/images/projects/webdev/MOV3.png",
    tags: ["Next.js", "Python", "Docker", "InfluxDB", "AI"],
  },
  {
    slug: "nextjs-web-app",
    title: "Next.js Web App",
    description: {
      en: "Full-stack web application with SSR, API routes, JWT authentication via NextAuth, MongoDB database and production deployment on Vercel with CI/CD via GitHub.",
      pt: "Aplicação web full-stack com SSR, rotas de API, autenticação JWT via NextAuth, banco MongoDB e deploy em produção no Vercel com CI/CD.",
    },
    coverImage: "/images/projects/webdev/Dev3.png",
    tags: ["Next.js", "TypeScript", "NextAuth", "MongoDB"],
  },
  {
    slug: "fifa-simulator",
    title: "FIFA 2030 Simulator",
    description: {
      en: "Interactive browser-based app with dynamic bracket rendering, match simulation logic and responsive UI — built with vanilla JavaScript, HTML5 and CSS3.",
      pt: "App interativo no navegador com renderização dinâmica de chaves, lógica de simulação de partidas e UI responsiva — JavaScript puro, HTML5 e CSS3.",
    },
    coverImage: "/images/projects/webdev/FIFA-COVER-PROJECT.png",
    tags: ["JavaScript", "HTML5", "CSS3"],
  },
  {
    slug: "webdev-project-4",
    title: "Project 4",
    description: {
      en: "Coming soon",
      pt: "Em breve",
    },
    coverImage: "/images/projects/webdev/C1.png",
    tags: ["TBD"],
  },
  {
    slug: "webdev-project-5",
    title: "Project 5",
    description: {
      en: "Coming soon",
      pt: "Em breve",
    },
    coverImage: "/images/projects/webdev/C2.png",
    tags: ["TBD"],
  },
  {
    slug: "webdev-project-6",
    title: "Project 6",
    description: {
      en: "Coming soon",
      pt: "Em breve",
    },
    coverImage: "/images/projects/webdev/C3.png",
    tags: ["TBD"],
  },
];

export const PROJECTS_ENGINEER: Project[] = [
  {
    slug: "high-payload-ugv",
    title: "High Payload UGV",
    description: {
      en: "1200 kg payload UGV (Armax) — full development with documentation, performance studies and commercial analyses.",
      pt: "UGV de 1200 kg de payload (Armax) — desenvolvimento completo com documentação, estudos de desempenho e análises comerciais.",
    },
    coverImage: "/images/projects/engineer/ARMAX.png",
    tags: ["UGV", "Control Systems", "Power Electronics"],
  },
  {
    slug: "agro-drone",
    title: "Agro Drone",
    description: {
      en: "Medium-payload agricultural quadcopter drone — from project planning to electrical and mechanical systems.",
      pt: "Drone quadricóptero agrícola de carga média — do planejamento ao projeto elétrico e mecânico.",
    },
    coverImage: "/images/projects/engineer/AgroDrone.png",
    tags: ["Drone", "Quadcopter", "Agriculture"],
  },
  {
    slug: "drone-assist-base",
    title: "Drone Assistance Base",
    description: {
      en: "Drone-assist complex with automated refueling, energy management and intelligent control hub.",
      pt: "Complexo de assistência a drones com reabastecimento automatizado, gestão de energia e hub de controle inteligente.",
    },
    coverImage: "/images/projects/engineer/AURA.png",
    tags: ["Distributed Systems", "IoT", "Automation"],
  },
  {
    slug: "mov-monitoring",
    title: "Thrust Testing Device (TTD)",
    description: {
      en: "Thrust Testing Device (TTD) — Used for testing and evaluation of UAV propulsion motors, with integrated sensors and real-time data acquisition.",
      pt: "Dispositivo de Teste de Empuxo (TTD) — Utilizado para teste e avaliação de motores de propulsão de UAVs, com sensores integrados e aquisição de dados em tempo real.",
    },
    coverImage: "/images/projects/engineer/TTD.png",
    tags: ["IoT", "SCADA", "Power Management", "Data Acquisition"],
  },
  {
    slug: "engineer-project-5",
    title: "SIEMENS Portable Case",
    description: {
      en: "SIEMENS automation portable controller integrating industrial automation equipment for on-site control and monitoring.",
      pt: "Maleta Controladora Portátil que integra equipamentos SIEMENS de automação Industrial",
    },
    coverImage: "/images/projects/engineer/SIEMENS.jpeg",
    tags: ["Siemens", "Automation", "Special Development", "Control Device"],
  },
  {
    slug: "engineer-project-6",
    title: "SPIRIT UGV",
    description: {
      en: "Coming soon — add your project details here.",
      pt: "Em breve — adicione os detalhes do seu projeto aqui.",
    },
    coverImage: "/images/projects/engineer/SPIRIT-UGV.png",
    tags: ["TBD"],
  },
];

export const PROJECTS_AUTOMATION_IT: Project[] = [
  {
    slug: "julius-finance-bot",
    title: "Julius — AI Finance Bot",
    description: {
      en: "Fully automated personal finance workflow in n8n: AI agent extracts data from receipts, logs entries to Google Sheets and answers natural-language financial queries.",
      pt: "Workflow financeiro pessoal automatizado em n8n: agente de IA extrai dados de recibos, registra no Google Sheets e responde consultas financeiras em linguagem natural.",
    },
    coverImage: "/images/projects/automation-it/Julius.png",
    tags: ["n8n", "OpenAI API", "Google Sheets", "Webhooks"],
  },
  {
    slug: "mov-platform-automation",
    title: "MOV Platform — IT Layer",
    description: {
      en: "Production IoT + AI monitoring platform. Edge node ingests field signals via MQTT, pipeline stores in InfluxDB, Grafana surfaces dashboards, AI layer delivers natural-language insights.",
      pt: "Plataforma de monitoramento IoT + IA em produção. Edge node ingere sinais via MQTT, pipeline armazena no InfluxDB, Grafana exibe dashboards, camada de IA entrega insights em linguagem natural.",
    },
    coverImage: "/images/projects/automation-it/MOV.png",
    tags: ["Node-RED", "MQTT", "InfluxDB", "Grafana", "AI"],
  },
  {
    slug: "linkedin-auto-post",
    title: "LinkedIn Auto-Post",
    description: {
      en: "Daily LinkedIn posts on autopilot — n8n generates AI-crafted content from a curated topic list, routes human approval through Telegram, and publishes to the company page via Make webhook.",
      pt: "Posts diários no LinkedIn no piloto automático — n8n gera conteúdo com IA de uma lista de temas curada, roteia aprovação humana pelo Telegram e publica na página da empresa via webhook Make.",
    },
    coverImage: "/images/projects/automation-it/LinkedIn-card.svg",
    tags: ["n8n", "Make", "Telegram Bot", "OpenAI API", "LinkedIn API"],
  },
  {
    slug: "automation-project-4",
    title: "Project 4",
    description: { en: "Coming soon", pt: "Em breve" },
    coverImage: "/images/projects/automation-it/C2.png",
    tags: ["TBD"],
  },
  {
    slug: "automation-project-5",
    title: "Project 5",
    description: { en: "Coming soon", pt: "Em breve" },
    coverImage: "/images/projects/automation-it/C3.png",
    tags: ["TBD"],
  },
  {
    slug: "automation-project-6",
    title: "Project 6",
    description: { en: "Coming soon", pt: "Em breve" },
    coverImage: "/images/projects/automation-it/C4.png",
    tags: ["TBD"],
  },
];

// ---------------------------------------------------------------------------
// 7. Project detail pages (slug → detail)
// ---------------------------------------------------------------------------
export interface ProjectDetail {
  title: string;
  subtitle: { en: string; pt: string };
  bannerImage: string;
  career: "webdev" | "engineer" | "automation-it";
  sections: {
    heading: { en: string; pt: string };
    body: { en: string; pt: string };
    image?: string;
    imageCaption?: { en: string; pt: string };
  }[];
}

export const PROJECT_DETAILS: Record<string, ProjectDetail> = {
  // ── Web Dev ──────────────────────────────────────────────
  "mov-platform": {
    title: "MOV Platform",
    subtitle: {
      en: "Full-stack IoT monitoring platform with AI-powered insights",
      pt: "Plataforma IoT full-stack com insights de IA",
    },
    bannerImage: "/images/projects/webdev/MOV-Plataform.png",
    career: "webdev",
    sections: [
      {
        heading: { en: "The Challenge", pt: "O Desafio" },
        body: {
          en: "Developing a complete monitoring solution capable of collecting field signals via Raspberry Pi edge nodes, processing data through temporal databases, and presenting actionable insights using AI.",
          pt: "Desenvolver uma solução completa de monitoramento capaz de coletar sinais de campo via nós edge Raspberry Pi, processar dados através de bancos temporais e apresentar insights acionáveis usando IA.",
        },
      },
      {
        heading: { en: "The Solution", pt: "A Solução" },
        body: {
          en: "Built a pipeline using Node-Red as the edge processing layer, InfluxDB for temporal data storage, and Grafana for interactive dashboards. AI integration provides insights beyond raw sensor data using Python.",
          pt: "Construí um pipeline usando Node-Red como camada de processamento edge, InfluxDB para armazenamento temporal e Grafana para dashboards interativos. Integração com IA fornece insights além dos dados brutos usando Python.",
        },
      },
      {
        heading: { en: "Results", pt: "Resultados" },
        body: {
          en: "A fully functional, scalable monitoring platform deployed in production for Movewer Technologies UGV operations. (This project is currently under development, images are conceptual placeholders.)",
          pt: "Uma plataforma de monitoramento totalmente funcional e escalável implantada em produção para operações UGV da Movewer Technologies. (Este projeto está atualmente em desenvolvimento, as imagens são placeholders conceituais.)",
        },
      },
    ],
  },
  "nextjs-web-app": {
    title: "Next.js Web App",
    subtitle: {
      en: "Full-stack web application with SSR, authentication and MongoDB.",
      pt: "Aplicação web full-stack com SSR, autenticação e MongoDB.",
    },
    bannerImage: "/images/projects/webdev/Dev3.png",
    career: "webdev",
    sections: [
      {
        heading: { en: "The Challenge", pt: "O Desafio" },
        body: {
          en: "Build a full-stack web application from scratch using Next.js and TypeScript, including user authentication, dynamic content and responsive design.",
          pt: "Construir uma aplicação web full-stack do zero usando Next.js e TypeScript, incluindo autenticação de usuários, conteúdo dinâmico e design responsivo.",
        },
      },
      {
        heading: { en: "The Solution", pt: "A Solução" },
        body: {
          en: "Developed a Next.js app with server components, implementing JWT authentication flows via NextAuth, MongoDB as the database, and a modern UI using Tailwind CSS. Deployed on Vercel with CI/CD via GitHub Actions.",
          pt: "Desenvolvi um aplicativo Next.js com componentes de servidor, implementando fluxos de autenticação JWT via NextAuth, MongoDB como banco de dados e interface moderna com Tailwind CSS. Deploy no Vercel com CI/CD via GitHub Actions.",
        },
      },
      {
        heading: { en: "Results", pt: "Resultados" },
        body: {
          en: "A polished, production-ready application demonstrating full-stack Next.js capabilities with TypeScript type safety.",
          pt: "Uma aplicação polida e pronta para produção demonstrando capacidades full-stack do Next.js com type safety do TypeScript.",
        },
      },
    ],
  },
  "fifa-simulator": {
    title: "FIFA 2030 Simulator",
    subtitle: {
      en: "World Cup simulator with vanilla JavaScript",
      pt: "Simulador da Copa do Mundo com JavaScript vanilla",
    },
    bannerImage: "/images/projects/webdev/FIFA2030.png",
    career: "webdev",
    sections: [
      {
        heading: { en: "The Challenge", pt: "O Desafio" },
        body: {
          en: "Create a fun and interactive World Cup match simulator using only vanilla web technologies — no frameworks or libraries.",
          pt: "Criar um simulador de partidas da Copa do Mundo divertido e interativo usando apenas tecnologias web vanilla — sem frameworks ou bibliotecas.",
        },
      },
      {
        heading: { en: "The Solution", pt: "A Solução" },
        body: {
          en: "Built a simulator with pure JavaScript, HTML5 and CSS3. Features include randomized match results, group stages, knockout brackets, and a clean visual interface.",
          pt: "Construí um simulador com JavaScript puro, HTML5 e CSS3. Inclui resultados de partidas aleatórios, fase de grupos, chaves eliminatórias e uma interface visual limpa.",
        },
      },
      {
        heading: { en: "Results", pt: "Resultados" },
        body: {
          en: "A lightweight, dependency-free simulator that runs entirely in the browser with smooth animations and realistic match logic.",
          pt: "Um simulador leve e sem dependências que roda inteiramente no navegador com animações suaves e lógica de partidas realista.",
        },
      },
    ],
  },
  "webdev-project-4": {
    title: "Project 4",
    subtitle: { en: "Coming soon", pt: "Em breve" },
    bannerImage: "/images/projects/webdev/C1.png",
    career: "webdev",
    sections: [{ heading: { en: "About", pt: "Sobre" }, body: { en: "Coming soon", pt: "Em breve" } }],
  },
  "webdev-project-5": {
    title: "Project 5",
    subtitle: { en: "Coming soon", pt: "Em breve" },
    bannerImage: "/images/projects/webdev/C2.png",
    career: "webdev",
    sections: [{ heading: { en: "About", pt: "Sobre" }, body: { en: "Coming soon", pt: "Em breve" } }],
  },
  "webdev-project-6": {
    title: "Project 6",
    subtitle: { en: "Coming soon", pt: "Em breve" },
    bannerImage: "/images/projects/webdev/C3.png",
    career: "webdev",
    sections: [{ heading: { en: "About", pt: "Sobre" }, body: { en: "Coming soon", pt: "Em breve" } }],
  },

  // ── IT Automation ─────────────────────────────────────────
  "julius-finance-bot": {
    title: "Julius — AI Finance Bot",
    subtitle: {
      en: "AI-powered personal finance automation built with n8n and OpenAI",
      pt: "Automação de finanças pessoais com IA usando n8n e OpenAI",
    },
    bannerImage: "/images/projects/automation-it/Julius.png",
    career: "automation-it",
    sections: [
      {
        heading: { en: "The Challenge", pt: "O Desafio" },
        body: {
          en: "Build a zero-friction personal finance tracker that eliminates manual data entry — receipts go in, structured data comes out automatically, and natural-language queries return spending insights.",
          pt: "Construir um rastreador financeiro pessoal sem atrito que elimine entrada manual de dados — recibos entram, dados estruturados saem automaticamente, e consultas em linguagem natural retornam insights de gastos.",
        },
      },
      {
        heading: { en: "The Solution", pt: "A Solução" },
        body: {
          en: "Built a fully automated workflow in n8n: receipts are sent via chat, an AI agent (OpenAI) extracts structured data (vendor, amount, category, date) and automatically logs entries into a Google Sheets ledger.\n\nExtended Julius with a conversational layer acting as a personal financial manager: users query spending summaries, category breakdowns and budget insights via natural-language chat, with responses grounded in live spreadsheet data.\n\nDesigned the full workflow architecture including webhook triggers, AI prompt engineering for reliable structured extraction, error handling and dynamic Sheets integration.",
          pt: "Construí um workflow totalmente automatizado em n8n: recibos são enviados via chat, um agente de IA (OpenAI) extrai dados estruturados (fornecedor, valor, categoria, data) e registra automaticamente no Google Sheets.\n\nEstendeu o Julius com uma camada conversacional como gerente financeiro pessoal: usuários consultam resumos, breakdowns por categoria e insights de orçamento via chat em linguagem natural.\n\nProjetou toda a arquitetura do workflow: triggers de webhook, prompt engineering para extração estruturada confiável, tratamento de erros e integração dinâmica com Sheets.",
        },
      },
      {
        heading: { en: "Results", pt: "Resultados" },
        body: {
          en: "A production-grade personal finance automation that runs fully autonomously — zero manual input, real-time ledger updates and conversational financial insights on demand.",
          pt: "Uma automação financeira pessoal de nível produção que roda de forma totalmente autônoma — zero input manual, atualizações em tempo real e insights financeiros conversacionais sob demanda.",
        },
      },
    ],
  },
  "mov-platform-automation": {
    title: "MOV Platform — IT Layer",
    subtitle: {
      en: "IoT + AI monitoring automation architecture on Linux VPS",
      pt: "Arquitetura de automação de monitoramento IoT + IA em VPS Linux",
    },
    bannerImage: "/images/projects/automation-it/MOV-Platform.png",
    career: "automation-it",
    sections: [
      {
        heading: { en: "The Challenge", pt: "O Desafio" },
        body: {
          en: "Design an end-to-end IT automation architecture that ingests real-time field signals from IoT edge devices, routes data through a cloud pipeline, and delivers actionable AI-driven insights — without manual intervention.",
          pt: "Projetar uma arquitetura de automação IT ponta a ponta que ingere sinais de campo em tempo real de dispositivos IoT, roteia dados por um pipeline na nuvem e entrega insights acionáveis de IA — sem intervenção manual.",
        },
      },
      {
        heading: { en: "The Solution", pt: "A Solução" },
        body: {
          en: "Edge node (Raspberry Pi + Node-RED) ingests field signals via MQTT broker → InfluxDB time-series storage → Grafana dashboards for real-time visualization → custom AI layer delivers natural-language insights and anomaly detection beyond raw metrics.\n\nAll components deployed on a Linux VPS with automated alerting, REST API integrations and webhook-driven event processing.",
          pt: "Nó edge (Raspberry Pi + Node-RED) ingere sinais via broker MQTT → armazenamento time-series no InfluxDB → dashboards Grafana para visualização em tempo real → camada de IA customizada entrega insights em linguagem natural e detecção de anomalias.\n\nTodos os componentes implantados em VPS Linux com alertas automatizados, integrações REST API e processamento de eventos via webhooks.",
        },
      },
      {
        heading: { en: "Results", pt: "Resultados" },
        body: {
          en: "A production-deployed IIoT monitoring platform with AI-powered insights actively used for Movewer Technologies UGV operations. (Images are conceptual placeholders — project is under active development.)",
          pt: "Plataforma de monitoramento IIoT implantada em produção com insights de IA ativamente usada nas operações UGV da Movewer Technologies. (Imagens são placeholders conceituais — projeto em desenvolvimento ativo.)",
        },
      },
    ],
  },
  "linkedin-auto-post": {
    title: "LinkedIn Auto-Post",
    subtitle: {
      en: "AI-powered daily content pipeline with human-in-the-loop approval via Telegram",
      pt: "Pipeline de conteúdo diário com IA e aprovação humana via Telegram",
    },
    bannerImage: "/images/projects/automation-it/LinkedIn.png",
    career: "automation-it",
    sections: [
      {
        heading: { en: "The Challenge", pt: "O Desafio" },
        body: {
          en: "Maintaining a consistent, high-quality LinkedIn presence for a company demands daily creativity, time and discipline — resources that are always scarce. The goal was to eliminate the overhead of manual content creation while keeping a human in full control of every post published. No fully autonomous bots, no off-brand content: just speed, consistency and quality, powered by AI.",
          pt: "Manter uma presença consistente e de alta qualidade no LinkedIn corporativo exige criatividade, tempo e disciplina diários — recursos sempre escassos. O objetivo era eliminar a sobrecarga de criação manual de conteúdo, mantendo um humano no controle total de cada post publicado. Sem bots autônomos, sem conteúdo fora do padrão: apenas velocidade, consistência e qualidade, impulsionadas por IA.",
        },
      },
      {
        heading: { en: "The Workflow", pt: "O Fluxo" },
        body: {
          en: "Built a fully automated content pipeline in n8n that fires every morning at 10:00 AM. The workflow selects a topic from a curated list of company-relevant themes, feeds it into a prompt-engineered OpenAI content generator, and delivers a polished draft post directly to the user's Telegram.\n\nFrom Telegram, the user controls the entire editorial flow without leaving the app:\n• Approve + attach image — sends post and image straight to publishing\n• Skip today — no post is published that day\n• Regenerate (same topic) — generates a new draft keeping the original theme\n• Change topic + regenerate — picks a different topic from the list and rewrites\n• Edit manually — the user types the final text directly in the chat\n\nOnce the post is approved, n8n triggers a webhook to Make (formerly Integromat), which handles LinkedIn's API authentication and publishes the post — with the attached image — directly to the company page.",
          pt: "Construí um pipeline de conteúdo totalmente automatizado no n8n que dispara todos os dias às 10h. O workflow seleciona um tema de uma lista curada de assuntos relevantes à empresa, alimenta um gerador de conteúdo via OpenAI com prompt engineering preciso e entrega um rascunho polido diretamente no Telegram do usuário.\n\nPelo Telegram, o usuário controla todo o fluxo editorial sem sair do app:\n• Aprovar + anexar imagem — envia o post e a imagem para publicação\n• Pular o dia — nenhum post publicado naquele dia\n• Regenerar (mesmo tema) — gera um novo rascunho mantendo o tema original\n• Trocar tema + regenerar — escolhe um novo tema da lista e reescreve\n• Editar manualmente — o usuário digita o texto final diretamente no chat\n\nCom o post aprovado, o n8n dispara um webhook para o Make (antigo Integromat), que cuida da autenticação com a API do LinkedIn e publica o post — com a imagem anexada — diretamente na página da empresa.",
        },
      },
      {
        heading: { en: "Architecture & Integrations", pt: "Arquitetura & Integrações" },
        body: {
          en: "The system bridges three platforms through a clean event-driven architecture:\n\nn8n — orchestration layer: cron trigger, topic selection logic, OpenAI API calls with structured prompt engineering, Telegram bot interactions (send, listen, branch on user action), and outbound webhook to Make.\n\nTelegram Bot — the human interface: all user interactions happen here. The bot presents the draft, listens for the user's choice, handles image attachments, and routes the decision back to n8n.\n\nMake (Integromat) — publishing layer: receives the approved post payload via webhook and handles the OAuth flow and LinkedIn API call to publish to the company page. This separation keeps n8n clean of credential management for external social APIs.",
          pt: "O sistema conecta três plataformas através de uma arquitetura limpa orientada a eventos:\n\nn8n — camada de orquestração: trigger cron, lógica de seleção de temas, chamadas à API OpenAI com prompt engineering estruturado, interações com o bot Telegram (enviar, escutar, bifurcar na ação do usuário) e webhook de saída para o Make.\n\nTelegram Bot — a interface humana: todas as interações do usuário acontecem aqui. O bot apresenta o rascunho, escuta a escolha do usuário, trata o anexo de imagem e devolve a decisão para o n8n.\n\nMake (Integromat) — camada de publicação: recebe o payload do post aprovado via webhook e cuida do fluxo OAuth e da chamada à API do LinkedIn para publicar na página da empresa. Essa separação mantém o n8n limpo de gerenciamento de credenciais para APIs sociais externas.",
        },
      },
      {
        heading: { en: "Results", pt: "Resultados" },
        body: {
          en: "Daily, consistent LinkedIn posts published with minimal human effort — every single one reviewed and approved by a human before going live. Prompt engineering ensures on-brand voice, relevant content and professional tone on every generation.\n\nTotal time spent per post: under 60 seconds.\n\nThe system eliminated ad-hoc content scrambling and last-minute posting stress, turning social media management into a lightweight, controlled daily routine. The result is a stronger, more consistent brand presence on LinkedIn with a fraction of the manual effort.",
          pt: "Posts diários e consistentes no LinkedIn publicados com mínimo esforço humano — todos revisados e aprovados por um humano antes de ir ao ar. O prompt engineering garante tom de marca, conteúdo relevante e linguagem profissional em cada geração.\n\nTempo gasto por post: menos de 60 segundos.\n\nO sistema eliminou a criação de conteúdo de última hora e o estresse de postagens improvisadas, transformando a gestão de redes sociais em uma rotina diária leve e controlada. O resultado é uma presença de marca mais forte e consistente no LinkedIn com uma fração do esforço manual.",
        },
      },
    ],
  },
  "automation-project-4": {
    title: "Project 4",
    subtitle: { en: "Coming soon", pt: "Em breve" },
    bannerImage: "/images/projects/automation-it/C2.png",
    career: "automation-it",
    sections: [{ heading: { en: "About", pt: "Sobre" }, body: { en: "Coming soon", pt: "Em breve" } }],
  },
  "automation-project-5": {
    title: "Project 5",
    subtitle: { en: "Coming soon", pt: "Em breve" },
    bannerImage: "/images/projects/automation-it/C3.png",
    career: "automation-it",
    sections: [{ heading: { en: "About", pt: "Sobre" }, body: { en: "Coming soon", pt: "Em breve" } }],
  },
  "automation-project-6": {
    title: "Project 6",
    subtitle: { en: "Coming soon", pt: "Em breve" },
    bannerImage: "/images/projects/automation-it/C4.png",
    career: "automation-it",
    sections: [{ heading: { en: "About", pt: "Sobre" }, body: { en: "Coming soon", pt: "Em breve" } }],
  },

  // ── Engineer ─────────────────────────────────────────────
  "high-payload-ugv": {
    title: "High Payload UGV",
    subtitle: {
      en: "1200 kg payload UGV — Armax",
      pt: "UGV de 1200 kg de payload — Armax",
    },
    bannerImage: "/images/projects/engineer/ProjectARMAX.png",
    career: "engineer",
    sections: [
      {
        heading: { en: "The Challenge", pt: "O Desafio" },
        body: {
          en: "Design and develop a high-payload UGV capable of carrying 1200 kg for agricultural and industrial applications, with full documentation and commercial viability.",
          pt: "Projetar e desenvolver um UGV de alta carga capaz de transportar 1200 kg para aplicações agrícolas e industriais, com documentação completa e viabilidade comercial.",
        },
      },
      {
        heading: { en: "The Solution", pt: "A Solução" },
        body: {
          en: "Full development of the Armax UGV with assistance from a mechanical specialist. Includes control systems, power systems, communication architecture, and sensor integration.",
          pt: "Desenvolvimento completo do UGV Armax com assistência de especialista mecânico. Inclui sistemas de controle, potência, arquitetura de comunicação e integração de sensores.",
        },
      },
      {
        heading: { en: "Results", pt: "Resultados" },
        body: {
          en: "Project ready-to-build with all documentation, performance studies, and commercial analyses completed.",
          pt: "Projeto pronto para construção com toda documentação, estudos de desempenho e análises comerciais concluídos.",
        },
      },
    ],
  },
  "agro-drone": {
    title: "Agro Drone",
    subtitle: {
      en: "Medium-payload agricultural quadcopter drone",
      pt: "Drone quadricóptero agrícola de carga média",
    },
    bannerImage: "/images/projects/engineer/drone-banner.png",
    career: "engineer",
    sections: [
      {
        heading: { en: "The Challenge", pt: "O Desafio" },
        body: {
          en: "Design a medium-payload agricultural quadcopter drone from the ground up — covering project planning, electrical systems, mechanical integration, and flight controller programming.",
          pt: "Projetar um drone quadricóptero agrícola de carga média do zero — cobrindo planejamento de projeto, sistemas elétricos, integração mecânica e programação do controlador de voo.",
        },
      },
      {
        heading: { en: "The Solution", pt: "A Solução" },
        body: {
          en: "Completed full electrical and mechanical design, selected propulsion components (motors, ESCs, propellers), designed the power distribution system, and integrated the flight controller with GPS navigation.",
          pt: "Completei o projeto elétrico e mecânico completo, selecionei componentes de propulsão (motores, ESCs, hélices), projetei o sistema de distribuição de energia e integrei o controlador de voo com navegação GPS.",
        },
      },
      {
        heading: { en: "Results", pt: "Resultados" },
        body: {
          en: "A fully documented drone project with all specifications, component lists, wiring diagrams, and operational parameters defined for agricultural spraying applications.",
          pt: "Um projeto de drone totalmente documentado com todas as especificações, listas de componentes, diagramas de fiação e parâmetros operacionais definidos para aplicações de pulverização agrícola.",
        },
      },
    ],
  },
  "drone-assist-base": {
    title: "Drone Assistance Base",
    subtitle: {
      en: "Autonomous drone support complex with intelligent control hub",
      pt: "Complexo autônomo de suporte a drones com hub de controle inteligente",
    },
    bannerImage: "/images/projects/engineer/AURA-BANNER.png",
    career: "engineer",
    sections: [
      {
        heading: { en: "The Challenge", pt: "O Desafio" },
        body: {
          en: "Design a drone-assist complex capable of automated refueling/recharging, energy management, weather monitoring, and coordination of multiple drone operations from a central hub.",
          pt: "Projetar um complexo de assistência a drones capaz de reabastecimento/recarga automatizado, gestão de energia, monitoramento meteorológico e coordenação de múltiplas operações de drones a partir de um hub central.",
        },
      },
      {
        heading: { en: "The Solution", pt: "A Solução" },
        body: {
          en: "Designed a distributed system architecture with IoT sensors, automated landing pads, energy management systems, and a central control dashboard for fleet coordination.",
          pt: "Projetei uma arquitetura de sistema distribuído com sensores IoT, plataformas de pouso automatizadas, sistemas de gestão de energia e um painel de controle central para coordenação de frota.",
        },
      },
      {
        heading: { en: "Results", pt: "Resultados" },
        body: {
          en: "Complete system architecture and technical documentation for a drone assistance complex, ready for prototype development.",
          pt: "Arquitetura completa do sistema e documentação técnica para um complexo de assistência a drones, pronto para desenvolvimento de protótipo.",
        },
      },
    ],
  },
  "mov-monitoring": {
    title: "Thrust Testing Device (TTD)",
    subtitle: {
      en: "Thrust Testing Device (TTD) — Used for testing and evaluation of UAV propulsion motors",
      pt: "Dispositivo de Teste de Empuxo (TTD) — Utilizado para teste e avaliação de motores de propulsão de UAVs",
    },
    bannerImage: "/images/projects/engineer/bannerTTD.png",
    career: "engineer",
    sections: [
      {
        heading: { en: "The Challenge", pt: "O Desafio" },
        body: {
          en: "Create and Develop a production-grade device for testing and evaluating UAV propulsion motors, capable of measuring thrust, torque, power consumption, and other performance metrics under controlled conditions.",
          pt: "Criar e desenvolver um dispositivo de nível produção para teste e avaliação de motores de propulsão de UAVs, capaz de medir empuxo, torque, consumo de energia e outros parâmetros de desempenho em condições controladas.",
        },
      },
      {
        heading: { en: "The Solution", pt: "A Solução" },
        body: {
          en: "Designed and built a Thrust Testing Device (TTD) with integrated sensors for measuring thrust, torque, and power consumption. Developed a data acquisition system using high speed networks for real-time monitoring.",
          pt: "Projetei e construí um Dispositivo de Teste de Empuxo (TTD) com sensores integrados para medir empuxo, torque e consumo de energia. Desenvolvi um sistema de aquisição de dados usando redes de alta velocidade para monitoramento em tempo real.",
        },
      },
      {
        heading: { en: "Results", pt: "Resultados" },
        body: {
          en: "A production-grade Thrust Testing Device actively used by Psyche AeroSpace for testing and evaluation of UAV propulsion motors.",
          pt: "Um Dispositivo de Teste de Empuxo de nível produção ativamente utilizado pela Psyche AeroSpace para teste e avaliação de motores de propulsão de UAVs.",
        },
      },
    ],
  },
  "engineer-project-5": {
    title: "SIEMENS Portable Case",
    subtitle: {
      en: "Portable controller integrating SIEMENS automation equipment for on-site operations",
      pt: "Maleta Controladora Portátil que integra equipamentos SIEMENS de automação Industrial",
    },
    bannerImage: "/images/projects/engineer/Case-banner.png",
    career: "engineer",
    sections: [
      {
        heading: { en: "The Challenge", pt: "O Desafio" },
        body: {
          en: "Create a portable controller that integrates SIEMENS automation equipment for on-site operations, allowing for efficient control and monitoring of industrial processes.",
          pt: "Criar uma maleta controladora portátil que integra equipamentos de automação SIEMENS para operações no local, permitindo um controle e monitoramento eficientes dos processos industriais.",
        },
      },
      {
        heading: { en: "The Solution", pt: "A Solução" },
        body: {
          en: "Developed a portable controller with integrated SIEMENS automation equipment, enabling efficient on-site control and monitoring of industrial processes.",
          pt: "Desenvolvi uma maleta controladora portátil com equipamentos de automação SIEMENS integrados, permitindo um controle e monitoramento eficientes dos processos industriais no local.",
        },
      },
      {
        heading: { en: "Results", pt: "Resultados" },
        body: {
          en: "A production-grade portable controller actively used for on-site industrial process control and monitoring.",
          pt: "Uma maleta controladora portátil de nível produção ativamente utilizada para controle e monitoramento de processos industriais no local.",
        },
      },
    ],
  },
  "engineer-project-6": {
    title: "SPIRIT UGV",
    subtitle: {
      en: "A UGV Platform for collecting and analysing data in field operations, designed for agricultural and industrial applications.",
      pt: "Uma plataforma UGV para coletar e analisar dados em operações de campo, projetada para aplicações agrícolas e industriais.",
    },
    bannerImage: "/images/projects/engineer/SPIRIT-BANNER.png",
    career: "engineer",
    sections: [
      {
        heading: { en: "The Challenge", pt: "O Desafio" },
        body: {
          en: "Create a UGV platform for collecting and analyzing data in agro applications, including soil condition analysis.",
          pt: "Criar uma plataforma UGV para coletar e analisar dados em operações de campo, projetada para aplicações agrícolas e industriais.",
        },
      },
      {
        heading: { en: "The Solution", pt: "A Solução" },
        body: {
          en: "Developed a modular UGV platform with integrated sensors for data collection and field analysis.",
          pt: "Desenvolveu uma plataforma UGV modular com sensores integrados para coleta de dados e análise de campo.",
        },
      },
      {
        heading: { en: "Results", pt: "Resultados" },
        body: {
          en: "A field-ready UGV platform designed for agricultural and industrial data collection and analysis operations.",
          pt: "Uma plataforma UGV pronta para campo projetada para operações de coleta e análise de dados agrícolas e industriais.",
        },
      },
    ],
  },
};

// ---------------------------------------------------------------------------
// 8. Hobbies
// ---------------------------------------------------------------------------
export interface Hobby {
  title: { en: string; pt: string };
  description: { en: string; pt: string };
  icon: string; // emoji or lucide icon name
  image?: string;
}

export const HOBBIES: Hobby[] = [
  {
    title: { en: "Gaming", pt: "Jogos" },
    description: {
      en: "Competitive and casual gaming across multiple platforms.",
      pt: "Jogos competitivos e casuais em múltiplas plataformas.",
    },
    icon: "🎮",
    image: "/images/hobbies/Game.png",
  },
  {
    title: { en: "Music", pt: "Música" },
    description: {
      en: "Listening and discovering new genres and artists.",
      pt: "Ouvir e descobrir novos gêneros e artistas.",
    },
    icon: "🎵",
    image: "/images/hobbies/Music.png",
  },
  {
    title: { en: "Travel", pt: "Viagens" },
    description: {
      en: "Exploring new cultures, food and landscapes around the world.",
      pt: "Explorar novas culturas, comidas e paisagens ao redor do mundo.",
    },
    icon: "✈️",
    image: "/images/hobbies/Travel.png",
  },
  {
    title: { en: "Electronics & DIY", pt: "Eletrônica & DIY" },
    description: {
      en: "Tinkering with electronics, and maker projects.",
      pt: "Mexer com eletrônica, e projetos.",
    },
    icon: "🔧",
    image: "/images/hobbies/Rasp.png",
  },
  {
    title: { en: "Fitness", pt: "Fitness" },
    description: {
      en: "Weight training and keeping an active lifestyle.",
      pt: "Musculação e manter um estilo de vida ativo.",
    },
    icon: "💪",
    image: "/images/hobbies/gym.png",
  },
  {
    title: { en: "Reading", pt: "Leitura" },
    description: {
      en: "Tech books, sci-fi and personal development.",
      pt: "Livros de tecnologia, ficção científica e desenvolvimento pessoal.",
    },
    icon: "📚",
    image: "/images/hobbies/Read.png",
  },
];

// ---------------------------------------------------------------------------
// 9. Navigation
// ---------------------------------------------------------------------------
export const NAV_LINKS = [
  { label: "nav.home" as const, href: "/" },
  { label: "nav.developer" as const, href: "/career/webdev" },
  { label: "nav.automation" as const, href: "/career/automation-it" },
  { label: "nav.engineer" as const, href: "/career/engineer" },
  { label: "nav.hobbies" as const, href: "/hobbies" },
];

// ---------------------------------------------------------------------------
// 10. Footer
// ---------------------------------------------------------------------------
export const FOOTER_YEAR = new Date().getFullYear();
