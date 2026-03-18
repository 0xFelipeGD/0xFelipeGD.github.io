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
    company: "Personal Projects",
    role: {
      en: "Full-Stack Developer & Automation Engineer",
      pt: "Desenvolvedor Full-Stack & Engenheiro de Automação",
    },
    period: "2024 – Present",
    location: "Lisbon, Portugal",
    bullets: {
      en: [
        "Built a social media automation pipeline using n8n and Make that generates posts from predefined topics, routes approval via Telegram, and auto-publishes to LinkedIn on confirmation.",
        "Developed a Python data pipeline for automated ingestion, transformation and reporting — pulling from REST APIs, processing with pandas, and persisting to PostgreSQL on a schedule.",
        "Architected Julius, an AI-powered personal finance PWA (Next.js 15, Supabase, OpenAI API) where an AI agent extracts, categorizes and persists financial entries from natural language input.",
      ],
      pt: [
        "Construiu um pipeline de automação de mídias sociais usando n8n e Make que gera posts a partir de temas predefinidos, roteia aprovação via Telegram e publica automaticamente no LinkedIn.",
        "Desenvolveu um pipeline de dados em Python para ingestão, transformação e relatórios automatizados — consumindo REST APIs, processando com pandas e persistindo no PostgreSQL em schedule.",
        "Arquitetou o Julius, um PWA de finanças pessoais com IA (Next.js 15, Supabase, OpenAI API) onde um agente de IA extrai, categoriza e persiste lançamentos financeiros a partir de linguagem natural.",
      ],
    },
  },
  {
    company: "Movewer Technologies",
    role: {
      en: "Founder & Lead IT Automation Engineer",
      pt: "Fundador & Engenheiro Líder de Automação IT",
    },
    period: "Jun 2025 – Present",
    location: "Lisbon, Portugal",
    bullets: {
      en: [
        "Architected and deployed a production data monitoring platform using MQTT, Node-RED, InfluxDB and Grafana, with an AI layer that generates actionable insights from raw sensor streams via REST APIs and webhooks.",
        "Built a Python REST API for data ingestion and processing; containerized the full infrastructure with Docker, deployed on a Linux VPS with CI/CD via GitHub Actions, and served the production frontend on Vercel.",
        "Designed end-to-end automation workflows connecting edge devices (Raspberry Pi) to cloud dashboards, covering ingestion, processing, real-time alerting and AI-driven reporting.",
        "Sole technical owner across the full development lifecycle: requirements → architecture → deployment → iteration.",
      ],
      pt: [
        "Arquitetou e implantou uma plataforma de monitoramento de dados em produção usando MQTT, Node-RED, InfluxDB e Grafana, com camada de IA que gera insights acionáveis de streams de sensores via REST APIs e webhooks.",
        "Construiu API REST em Python para ingestão e processamento de dados; containerizou toda a infraestrutura com Docker, implantada em VPS Linux com CI/CD via GitHub Actions, frontend em produção no Vercel.",
        "Projetou workflows de automação ponta a ponta conectando dispositivos edge (Raspberry Pi) a dashboards na nuvem: ingestão, processamento, alertas em tempo real e reports de IA.",
        "Responsável técnico único em todo o ciclo: requisitos → arquitetura → deploy → iteração.",
      ],
    },
  },
  {
    company: "Psyche AeroSpace",
    role: {
      en: "Automation Executive Manager / Engineering Team Lead",
      pt: "Gerente Executivo de Automação / Líder de Equipe de Engenharia",
    },
    period: "Jun 2024 – Jun 2025",
    location: "São Paulo, Brazil",
    bullets: {
      en: [
        "Structured the automation division from scratch and delivered intelligent control and workflow systems, contributing directly to new fundraising rounds.",
        "Developed internal automation workflows using Python, Node.js and low-code tools to streamline operations and improve team efficiency.",
        "Managed a cross-functional team of 5 engineers using Scrum/Kanban on JIRA, coordinating multi-project delivery on time and within budget.",
      ],
      pt: [
        "Estruturou a divisão de automação do zero e entregou sistemas de controle e workflows inteligentes, contribuindo diretamente para novas rodadas de captação.",
        "Desenvolveu workflows de automação interna usando Python, Node.js e ferramentas low-code para otimizar operações e melhorar eficiência da equipe.",
        "Gerenciou equipe cross-funcional de 5 engenheiros com Scrum/Kanban no JIRA, coordenando entregas em prazo e orçamento.",
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
        "Developed and deployed industrial automation systems with IoT, SCADA and data-flow integrations — building deep expertise in end-to-end process automation and system integration.",
        "Executed full project cycles: system design, programming (Python, structured text), testing, troubleshooting and client-facing technical documentation.",
        "Built commercial automation partnerships with 35+ companies (Siemens, Bosch, Rockwell).",
      ],
      pt: [
        "Desenvolveu e implantou sistemas de automação industrial com IoT, SCADA e integrações de fluxo de dados — construindo expertise profunda em automação de processos e integração de sistemas.",
        "Ciclos completos de projeto: design de sistema, programação (Python, texto estruturado), testes, troubleshooting e documentação técnica para clientes.",
        "Construiu parcerias comerciais de automação com 35+ empresas (Siemens, Bosch, Rockwell).",
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
        "Engineered special industrial machines — developing electrical schematics, integrating mechatronic systems, PLC and SCADA programming.",
        "Architected end-to-end Industry 4.0 solutions for UGV platforms: control systems, power electronics, wireless communication, remote-control stations and multi-sensor integration.",
        "Built a full-stack Industrial IoT Monitoring Platform using MQTT, Python, Node-RED, InfluxDB and Grafana; integrated AI-driven analytics to surface actionable insights beyond raw sensor data.",
        "Defined IT/OT convergence architecture, bridging field-level devices to cloud dashboards with real-time data pipelines and automated alerting.",
        "Collaborated with a mechanical specialist to co-design several modular UGV systems aligned with client requirements and safety standards, including a high-payload UGV (1200 kg).",
      ],
      pt: [
        "Engenheirou máquinas industriais especiais — desenvolvendo esquemáticos elétricos, integrando sistemas mecatrônicos, programação de CLPs e SCADA.",
        "Arquitetou soluções Indústria 4.0 ponta a ponta para plataformas UGV: sistemas de controle, eletrônica de potência, comunicação sem fio, estações de controle remoto e integração multissensorial.",
        "Construiu Plataforma IIoT de Monitoramento full-stack com MQTT, Python, Node-RED, InfluxDB e Grafana; integrou analytics de IA para insights acionáveis além dos dados brutos.",
        "Definiu arquitetura de convergência IT/OT, conectando dispositivos de campo a dashboards na nuvem com pipelines em tempo real e alertas automatizados.",
        "Colaborou com especialista mecânico para co-projetar diversos sistemas UGV modulares alinhados com requisitos e normas de segurança, incluindo UGV de alta carga (1200 kg).",
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
        "Built the Automation and UGV divisions from zero; systems delivered contributed directly to a new fundraising round, with technical demonstrations cited as key proof points by company leadership.",
        "Led a cross-functional team of 5 engineers across two product lines (agricultural UGVs and drone-support infrastructure), reducing time-to-prototype by ~30% through structured Scrum sprints.",
        "Owned the full development lifecycle of UGV systems — control, power and communication — coordinating with mechanical and electronics teams across tight delivery timelines.",
        "Delivered a 10 kg-payload agricultural quadcopter from concept to flight-ready prototype in under 6 months, including electrical project, mechanical integration and flight-control and telemetry systems.",
      ],
      pt: [
        "Construiu as divisões de Automação e UGV do zero; sistemas entregues contribuíram diretamente para nova rodada de captação, com demonstrações técnicas citadas como proof points pela liderança.",
        "Liderou equipe cross-funcional de 5 engenheiros em duas linhas de produto (UGVs agrícolas e infraestrutura de suporte a drones), reduzindo tempo de protótipo em ~30% com sprints Scrum estruturados.",
        "Responsável pelo ciclo completo de desenvolvimento de sistemas UGV — controle, potência e comunicação — coordenando equipes mecânica e eletrônica em prazos apertados.",
        "Entregou quadricóptero agrícola de 10 kg do conceito ao protótipo pronto para voo em menos de 6 meses, incluindo projeto elétrico, integração mecânica e sistemas de controle de voo e telemetria.",
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
        "Engineered 20+ special industrial machines integrating mechatronic systems, IoT connectivity, SCADA supervision and industrial communication protocols (Modbus, Profinet, EtherCAT); average project delivered on time and within 5% budget variance.",
        "Designed and executed full industrial electrical panel projects end-to-end: load calculations, schematics (EPLAN/AutoCAD), component specification, physical assembly, commissioning and field testing.",
        "Programmed PLCs and configured HMI/SCADA systems (TIA Portal, CODESYS, Indusoft) for manufacturing and process automation projects.",
        "Served as regional distributor for Wecon and Kinco; built and maintained a portfolio of 35+ industrial client partnerships over 6 years.",
      ],
      pt: [
        "Engenheirou 20+ máquinas industriais especiais integrando sistemas mecatrônicos, IoT, SCADA e protocolos industriais (Modbus, Profinet, EtherCAT); projetos entregues no prazo e com variação de 5% no orçamento.",
        "Projetou e executou projetos elétricos de painéis industriais ponta a ponta: cálculos de carga, esquemáticos (EPLAN/AutoCAD), especificação de componentes, montagem, comissionamento e testes.",
        "Programou CLPs e configurou HMI/SCADA (TIA Portal, CODESYS, Indusoft) para projetos de automação de manufatura e processos.",
        "Atuou como distribuidor regional de Wecon e Kinco; construiu e manteve portfólio de 35+ parcerias industriais em 6 anos.",
      ],
    },
  },
];

export const EXPERIENCE_AUTOMATION_IT: Experience[] = [
  {
    company: "Personal Projects",
    role: {
      en: "Full-Stack Developer & Automation Engineer",
      pt: "Desenvolvedor Full-Stack & Engenheiro de Automação",
    },
    period: "2024 – Present",
    location: "Lisbon, Portugal",
    bullets: {
      en: [
        "Built a social media automation pipeline using n8n and Make that generates posts from predefined topics, routes approval via Telegram, and auto-publishes to LinkedIn on confirmation.",
        "Developed a Python data pipeline for automated ingestion, transformation and reporting — pulling from REST APIs, processing with pandas, and persisting to PostgreSQL on a schedule.",
        "Architected Julius, an AI-powered personal finance PWA (Next.js 15, Supabase, OpenAI API) where an AI agent extracts, categorizes and persists financial entries from natural language input.",
      ],
      pt: [
        "Construiu um pipeline de automação de mídias sociais usando n8n e Make que gera posts a partir de temas predefinidos, roteia aprovação via Telegram e publica automaticamente no LinkedIn.",
        "Desenvolveu um pipeline de dados em Python para ingestão, transformação e relatórios automatizados — consumindo REST APIs, processando com pandas e persistindo no PostgreSQL.",
        "Arquitetou o Julius, um PWA de finanças pessoais com IA (Next.js 15, Supabase, OpenAI API) onde um agente de IA extrai, categoriza e persiste lançamentos financeiros a partir de linguagem natural.",
      ],
    },
  },
  {
    company: "Movewer Technologies",
    role: {
      en: "Founder & Lead IT Automation Engineer",
      pt: "Fundador & Engenheiro Líder de Automação IT",
    },
    period: "Jun 2025 – Present",
    location: "Lisbon, Portugal",
    bullets: {
      en: [
        "Architected and deployed AI Data Platform — a full-stack IoT data solution on Linux VPS using MQTT, Node-RED, InfluxDB and Grafana, with an AI layer that generates actionable insights from raw sensor streams.",
        "Designed end-to-end automation workflows connecting edge devices (Raspberry Pi) to cloud dashboards: data ingestion, processing, real-time alerting and AI-driven reporting via REST APIs and webhooks.",
        "Built Julius, a fully automated AI-powered personal finance bot using n8n, OpenAI API and Google Sheets — no manual input required.",
        "Sole technical owner across full dev lifecycle: requirements gathering → architecture → deployment → iteration.",
      ],
      pt: [
        "Arquitetou e implantou a AI Data Platform — solução de dados IoT full-stack em VPS Linux com MQTT, Node-RED, InfluxDB e Grafana, com camada de IA que gera insights acionáveis de streams de sensores.",
        "Projetou workflows de automação ponta a ponta conectando dispositivos edge (Raspberry Pi) a dashboards na nuvem: ingestão, processamento, alertas em tempo real e reports de IA via REST APIs e webhooks.",
        "Construiu o Julius, bot financeiro pessoal com IA usando n8n, OpenAI API e Google Sheets — sem input manual.",
        "Responsável técnico único em todo o ciclo: levantamento → arquitetura → deploy → iteração.",
      ],
    },
  },
  {
    company: "Psyche AeroSpace",
    role: {
      en: "Automation Executive Manager / Engineering Team Lead",
      pt: "Gerente Executivo de Automação / Líder de Equipe de Engenharia",
    },
    period: "Jun 2024 – Jun 2025",
    location: "São Paulo, Brazil",
    bullets: {
      en: [
        "Developed internal automation workflows using Python, Node.js and low-code tools to streamline operations and improve team efficiency.",
        "Managed a cross-functional team of 5 engineers using Scrum/Kanban on JIRA, coordinating multi-project delivery on time and within budget.",
        "Translated complex operational requirements into technical user stories, functional workflows and automation logic — bridging business stakeholders and engineering execution.",
      ],
      pt: [
        "Desenvolveu workflows de automação interna usando Python, Node.js e ferramentas low-code para otimizar operações e melhorar eficiência.",
        "Gerenciou equipe cross-funcional de 5 engenheiros com Scrum/Kanban no JIRA, coordenando entregas em prazo e orçamento.",
        "Traduziu requisitos operacionais complexos em histórias de usuário técnicas, workflows funcionais e lógica de automação — ponte entre stakeholders e execução técnica.",
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
        "Developed and deployed industrial automation systems with IoT, SCADA and data-flow integrations — building deep expertise in end-to-end process automation and system integration.",
        "Executed full project cycles: system design, programming (Python, structured text), testing, troubleshooting and client-facing technical documentation.",
      ],
      pt: [
        "Desenvolveu e implantou sistemas de automação industrial com IoT, SCADA e integrações de fluxo de dados — construindo expertise profunda em automação de processos e integração de sistemas.",
        "Ciclos completos de projeto: design de sistema, programação (Python, texto estruturado), testes, troubleshooting e documentação técnica para clientes.",
      ],
    },
  },
];

// ---------------------------------------------------------------------------
// 4. Skills
// ---------------------------------------------------------------------------
export const SKILLS_WEBDEV = [
  "Python",
  "TypeScript",
  "JavaScript (ES6+)",
  "React",
  "Next.js",
  "Node.js",
  "Express.js",
  "FastAPI",
  "Angular",
  "Tailwind CSS",
  "PostgreSQL",
  "MongoDB",
  "InfluxDB",
  "Prisma ORM",
  "Supabase",
  "pandas / NumPy",
  "Data Pipelines / ETL",
  "OpenAI API / Claude API",
  "AI Agents / LLM Integration",
  "Docker",
  "GitHub Actions (CI/CD)",
  "AWS / Vercel",
  "REST / WebSockets",
  "Git / GitHub",
  "Solidity / Web3",
  "Agile (Scrum/Kanban)",
];

export const SKILLS_ENGINEER = [
  "PLC Programming (TIA Portal, CODESYS, GX Works)",
  "SCADA/HMI (AVEVA, WinCC, Indusoft)",
  "Industrial Protocols (Modbus, Profinet, EtherCAT, OPC-UA, LoRa)",
  "Electrical Panel Design & Wiring",
  "IT/OT Convergence",
  "IIoT Architecture",
  "Edge Computing",
  "Control Systems",
  "Power Electronics",
  "Embedded Systems",
  "Motion Control",
  "UGV/AGV Development",
  "Drone Systems",
  "Python / Node.js / TypeScript",
  "MQTT / Node-RED / InfluxDB",
  "SolidWorks / EPLAN / AutoCAD Electrical",
  "MATLAB / LabView",
  "Raspberry Pi / NVIDIA Jetson",
  "Industry 4.0",
  "Scrum / Kanban / JIRA",
];

export const SKILLS_AUTOMATION_IT = [
  "n8n",
  "Make (Integromat)",
  "Zapier",
  "Node-RED",
  "Python",
  "JavaScript / TypeScript",
  "REST / Webhook APIs",
  "Event-Driven Pipelines",
  "AI APIs (OpenAI, Claude)",
  "AI Agents / Prompt Engineering",
  "LLM Workflow Integration",
  "MQTT / OPC-UA",
  "InfluxDB (Time-Series)",
  "PostgreSQL",
  "Grafana / Power BI",
  "Docker",
  "Linux / VPS",
  "Git / GitHub",
  "CI/CD (GitHub Actions)",
  "Raspberry Pi / Jetson Nano",
  "SCADA / Embedded Systems",
  "Power Automate",
  "Scrum / Kanban",
];

// ---------------------------------------------------------------------------
// 5. Education
// ---------------------------------------------------------------------------
export interface Education {
  school: string;
  degree: { en: string; pt: string };
  period: string;
  location: string;
}

export const EDUCATION: Education[] = [
  {
    school: "Federal Institute of São Paulo (IFSP)",
    degree: {
      en: "Bachelor of Control and Automation Engineering",
      pt: "Bacharelado em Engenharia de Controle e Automação",
    },
    period: "Jan 2019 – Dec 2023",
    location: "São José dos Campos, SP",
  },
  {
    school: "freeCodeCamp · One Bit Code · Self-directed study",
    degree: {
      en: "Full-Stack Development — 800+ hours",
      pt: "Desenvolvimento Full-Stack — 800+ horas",
    },
    period: "2022 – Present",
    location: "Online",
  },
];

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
    slug: "ai-data-platform",
    title: "AI Data Platform",
    description: {
      en: "Full-stack IoT data platform with Next.js frontend, Python REST API, real-time data pipeline and AI-powered analytics. Containerized with Docker and deployed on a Linux VPS.",
      pt: "Plataforma de dados IoT full-stack com frontend Next.js, API REST em Python, pipeline de dados em tempo real e analytics com IA. Containerizada com Docker e implantada em VPS Linux.",
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
    slug: "ttd",
    title: "Thrust Testing Device (TTD)",
    description: {
      en: "Production-grade special machine for testing and evaluating UAV propulsion motors — measures thrust, torque, power consumption and performance metrics under controlled conditions.",
      pt: "Máquina especial de nível produção para teste e avaliação de motores de propulsão UAV — mede empuxo, torque, consumo de energia e métricas de desempenho em condições controladas.",
    },
    coverImage: "/images/projects/engineer/TTD.png",
    tags: ["Special Machine", "Electrical Panel", "Data Acquisition"],
  },
  {
    slug: "siemens-portable-case",
    title: "SIEMENS Portable Case",
    description: {
      en: "SIEMENS automation portable controller integrating industrial automation equipment for on-site control and monitoring.",
      pt: "Maleta Controladora Portátil que integra equipamentos SIEMENS de automação Industrial",
    },
    coverImage: "/images/projects/engineer/SIEMENS.jpeg",
    tags: ["Siemens", "TIA Portal", "WinCC", "Control Device"],
  },
  {
    slug: "spirit-ugv",
    title: "SPIRIT UGV",
    description: {
      en: "Modular UGV platform designed for agricultural and industrial field data collection — integrated sensors, wireless communication and autonomous navigation capabilities.",
      pt: "Plataforma UGV modular projetada para coleta de dados em campo agrícola e industrial — sensores integrados, comunicação sem fio e capacidades de navegação autônoma.",
    },
    coverImage: "/images/projects/engineer/SPIRIT-UGV.png",
    tags: ["UGV", "Sensors", "Autonomous Navigation", "Field Data"],
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
    title: "AI Data Platform — IT Layer",
    description: {
      en: "Production IoT + AI data platform. Edge node ingests field signals via MQTT, pipeline stores in InfluxDB, Grafana surfaces dashboards, AI layer delivers natural-language insights and anomaly detection.",
      pt: "Plataforma de dados IoT + IA em produção. Edge node ingere sinais via MQTT, pipeline armazena no InfluxDB, Grafana exibe dashboards, camada de IA entrega insights e detecção de anomalias.",
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
  career: "dev" | "engineer" | "automation-it";
  sections: {
    heading: { en: string; pt: string };
    body: { en: string; pt: string };
    image?: string;
    imageCaption?: { en: string; pt: string };
  }[];
}

export const PROJECT_DETAILS: Record<string, ProjectDetail> = {
  // ── Web Dev ──────────────────────────────────────────────
  "ai-data-platform": {
    title: "AI Data Platform",
    subtitle: {
      en: "Full-stack IoT data platform with AI-powered analytics",
      pt: "Plataforma de dados IoT full-stack com analytics de IA",
    },
    bannerImage: "/images/projects/webdev/MOV-Plataform.png",
    career: "dev",
    sections: [
      {
        heading: { en: "The Challenge", pt: "O Desafio" },
        body: {
          en: "Industrial operations generate massive volumes of sensor data, but without a unified platform, raw signals remain siloed and underutilized. The challenge was to build a production-grade system that ingests field data from edge devices in real time, processes it through a scalable pipeline, and surfaces actionable AI-driven insights — all from a single dashboard.",
          pt: "Operações industriais geram volumes massivos de dados de sensores, mas sem uma plataforma unificada, os sinais brutos permanecem isolados e subutilizados. O desafio era construir um sistema de nível produção que ingere dados de campo de dispositivos edge em tempo real, processa por um pipeline escalável e apresenta insights acionáveis gerados por IA — tudo em um único dashboard.",
        },
      },
      {
        heading: { en: "The Solution", pt: "A Solução" },
        body: {
          en: "Built an end-to-end IoT data platform: Raspberry Pi edge nodes collect field signals via MQTT, Node-RED orchestrates the data flow into InfluxDB for time-series storage, and Grafana powers real-time dashboards.\n\nOn top of this pipeline, a custom Python REST API integrates an AI layer that generates natural-language insights, anomaly detection and trend forecasting from raw sensor streams.\n\nThe entire stack is containerized with Docker, deployed on a Linux VPS with CI/CD via GitHub Actions, and the production frontend is served on Vercel using Next.js with TypeScript.",
          pt: "Construí uma plataforma de dados IoT ponta a ponta: nós edge Raspberry Pi coletam sinais de campo via MQTT, Node-RED orquestra o fluxo de dados para o InfluxDB (armazenamento time-series) e Grafana alimenta dashboards em tempo real.\n\nSobre este pipeline, uma API REST customizada em Python integra uma camada de IA que gera insights em linguagem natural, detecção de anomalias e previsão de tendências a partir de streams brutos de sensores.\n\nTodo o stack é containerizado com Docker, implantado em VPS Linux com CI/CD via GitHub Actions, e o frontend em produção é servido no Vercel com Next.js e TypeScript.",
        },
      },
      {
        heading: { en: "Results", pt: "Resultados" },
        body: {
          en: "A production-deployed IIoT data platform actively used for Movewer Technologies UGV field operations — delivering real-time monitoring, AI-powered analytics and automated alerting from a single unified interface.",
          pt: "Uma plataforma de dados IIoT implantada em produção, ativamente usada nas operações de campo de UGVs da Movewer Technologies — entregando monitoramento em tempo real, analytics com IA e alertas automatizados a partir de uma interface unificada.",
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
    career: "dev",
    sections: [
      {
        heading: { en: "The Challenge", pt: "O Desafio" },
        body: {
          en: "Build a production-ready full-stack web application from scratch — with secure user authentication, dynamic server-rendered content, database persistence, and a clean, responsive UI — demonstrating end-to-end Next.js capabilities.",
          pt: "Construir uma aplicação web full-stack pronta para produção do zero — com autenticação segura de usuários, conteúdo dinâmico renderizado no servidor, persistência em banco de dados e uma UI limpa e responsiva — demonstrando capacidades Next.js ponta a ponta.",
        },
      },
      {
        heading: { en: "The Solution", pt: "A Solução" },
        body: {
          en: "Developed a Next.js application with server and client components, implementing JWT-based authentication via NextAuth with provider and credential flows. MongoDB handles data persistence through Prisma ORM.\n\nThe UI is built with Tailwind CSS for a modern, responsive experience. Deployed on Vercel with CI/CD via GitHub Actions for automated testing and deployment on every push.",
          pt: "Desenvolvi uma aplicação Next.js com componentes de servidor e cliente, implementando autenticação JWT via NextAuth com fluxos de provedor e credenciais. MongoDB cuida da persistência via Prisma ORM.\n\nA interface é construída com Tailwind CSS para uma experiência moderna e responsiva. Deploy no Vercel com CI/CD via GitHub Actions para testes e deploy automatizados a cada push.",
        },
      },
      {
        heading: { en: "Results", pt: "Resultados" },
        body: {
          en: "A polished, production-ready application showcasing full-stack Next.js proficiency — secure auth flows, server-side rendering, database integration and modern DevOps practices.",
          pt: "Uma aplicação polida e pronta para produção demonstrando proficiência full-stack em Next.js — fluxos de autenticação seguros, renderização no servidor, integração com banco de dados e práticas DevOps modernas.",
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
    career: "dev",
    sections: [
      {
        heading: { en: "The Challenge", pt: "O Desafio" },
        body: {
          en: "Create an interactive FIFA World Cup simulator using only vanilla web technologies — no frameworks, no libraries, no build tools. Pure JavaScript, HTML5 and CSS3, delivered straight to the browser.",
          pt: "Criar um simulador interativo da Copa do Mundo FIFA usando apenas tecnologias web vanilla — sem frameworks, sem bibliotecas, sem ferramentas de build. JavaScript puro, HTML5 e CSS3, direto no navegador.",
        },
      },
      {
        heading: { en: "The Solution", pt: "A Solução" },
        body: {
          en: "Built a complete World Cup simulator with dynamic bracket rendering, group-stage logic, knockout-round elimination, randomized match results with weighted probability, and a fully responsive UI.\n\nAll match simulation logic, DOM manipulation and state management are handled with vanilla JavaScript — no external dependencies.",
          pt: "Construí um simulador completo da Copa do Mundo com renderização dinâmica de chaves, lógica de fase de grupos, eliminação por mata-mata, resultados com probabilidade ponderada e uma UI totalmente responsiva.\n\nToda a lógica de simulação, manipulação do DOM e gerenciamento de estado são feitos com JavaScript vanilla — sem dependências externas.",
        },
      },
      {
        heading: { en: "Results", pt: "Resultados" },
        body: {
          en: "A lightweight, zero-dependency World Cup simulator that runs entirely in the browser — smooth animations, realistic match logic and a clean visual experience built from scratch with vanilla JS.",
          pt: "Um simulador da Copa do Mundo leve e sem dependências que roda inteiramente no navegador — animações suaves, lógica de partidas realista e experiência visual limpa construída do zero com JS vanilla.",
        },
      },
    ],
  },
  "webdev-project-4": {
    title: "Project 4",
    subtitle: { en: "Coming soon", pt: "Em breve" },
    bannerImage: "/images/projects/webdev/C1.png",
    career: "dev",
    sections: [{ heading: { en: "About", pt: "Sobre" }, body: { en: "Coming soon", pt: "Em breve" } }],
  },
  "webdev-project-5": {
    title: "Project 5",
    subtitle: { en: "Coming soon", pt: "Em breve" },
    bannerImage: "/images/projects/webdev/C2.png",
    career: "dev",
    sections: [{ heading: { en: "About", pt: "Sobre" }, body: { en: "Coming soon", pt: "Em breve" } }],
  },
  "webdev-project-6": {
    title: "Project 6",
    subtitle: { en: "Coming soon", pt: "Em breve" },
    bannerImage: "/images/projects/webdev/C3.png",
    career: "dev",
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
          en: "Personal finance tracking demands discipline and consistency — two things that manual spreadsheets kill over time. The goal was to build a zero-friction system where receipts go in, structured data comes out automatically, and natural-language queries return spending insights — no manual entry, no app switching, no friction.",
          pt: "Controle financeiro pessoal exige disciplina e consistência — duas coisas que planilhas manuais matam com o tempo. O objetivo era construir um sistema sem atrito onde recibos entram, dados estruturados saem automaticamente e consultas em linguagem natural retornam insights de gastos — sem entrada manual, sem trocar de app, sem fricção.",
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
    title: "AI Data Platform — IT Layer",
    subtitle: {
      en: "IoT + AI data platform automation architecture on Linux VPS",
      pt: "Arquitetura de automação de plataforma de dados IoT + IA em VPS Linux",
    },
    bannerImage: "/images/projects/automation-it/MOV-Platform.png",
    career: "automation-it",
    sections: [
      {
        heading: { en: "The Challenge", pt: "O Desafio" },
        body: {
          en: "Industrial IoT generates continuous streams of sensor data, but without automated pipelines, this data sits unused. The challenge was to design an end-to-end IT automation architecture that ingests real-time field signals from edge devices, routes data through a cloud pipeline, and delivers actionable AI-driven insights — fully automated, zero manual intervention.",
          pt: "IoT industrial gera streams contínuos de dados de sensores, mas sem pipelines automatizados, esses dados ficam subutilizados. O desafio era projetar uma arquitetura de automação IT ponta a ponta que ingere sinais de campo em tempo real de dispositivos edge, roteia dados por um pipeline na nuvem e entrega insights acionáveis de IA — totalmente automatizado, zero intervenção manual.",
        },
      },
      {
        heading: { en: "The Solution", pt: "A Solução" },
        body: {
          en: "Edge node (Raspberry Pi + Node-RED) ingests field signals via MQTT broker → InfluxDB time-series storage → Grafana dashboards for real-time visualization → custom AI layer delivers natural-language insights, anomaly detection and trend forecasting beyond raw metrics.\n\nAll components deployed on a Linux VPS with Docker containerization, automated alerting, REST API integrations and webhook-driven event processing. CI/CD via GitHub Actions ensures zero-downtime deployments.",
          pt: "Nó edge (Raspberry Pi + Node-RED) ingere sinais de campo via broker MQTT → armazenamento time-series no InfluxDB → dashboards Grafana para visualização em tempo real → camada de IA customizada entrega insights em linguagem natural, detecção de anomalias e previsão de tendências.\n\nTodos os componentes implantados em VPS Linux com containerização Docker, alertas automatizados, integrações REST API e processamento de eventos via webhooks. CI/CD via GitHub Actions garante deploys sem downtime.",
        },
      },
      {
        heading: { en: "Results", pt: "Resultados" },
        body: {
          en: "A production-deployed IIoT monitoring platform with AI-powered analytics, actively used for Movewer Technologies UGV operations — delivering automated data ingestion, real-time dashboards and intelligent alerting from a single unified stack.",
          pt: "Uma plataforma de monitoramento IIoT implantada em produção com analytics de IA, ativamente usada nas operações UGV da Movewer Technologies — entregando ingestão automatizada de dados, dashboards em tempo real e alertas inteligentes a partir de um stack unificado.",
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
          en: "Design and develop a high-payload UGV capable of carrying 1,200 kg for industrial and agricultural applications — with full system architecture, power-electronics design, wireless control stack, and commercial feasibility analysis.",
          pt: "Projetar e desenvolver um UGV de alta carga capaz de transportar 1.200 kg para aplicações industriais e agrícolas — com arquitetura completa, projeto de eletrônica de potência, stack de controle wireless e análise de viabilidade comercial.",
        },
      },
      {
        heading: { en: "The Solution", pt: "A Solução" },
        body: {
          en: "Full development of the Armax UGV platform in collaboration with a mechanical specialist. Delivered system architecture, power-electronics design, wireless control stack (remote-control station + telemetry), performance benchmarks and commercial feasibility studies.\n\nThe build-ready deliverable covers control systems, communication protocols, sensor integration and safety compliance — designed for modularity so the platform can be adapted to different payload configurations and operational scenarios.",
          pt: "Desenvolvimento completo da plataforma UGV Armax em colaboração com especialista mecânico. Entregou arquitetura do sistema, projeto de eletrônica de potência, stack de controle wireless (estação de controle remoto + telemetria), benchmarks de desempenho e estudos de viabilidade comercial.\n\nO deliverable pronto para construção cobre sistemas de controle, protocolos de comunicação, integração de sensores e conformidade de segurança — projetado para modularidade, permitindo adaptação para diferentes configurações de carga e cenários operacionais.",
        },
      },
      {
        heading: { en: "Results", pt: "Resultados" },
        body: {
          en: "A build-ready 1,200 kg UGV platform with complete documentation — system architecture, power-electronics design, wireless control stack, performance benchmarks and commercial feasibility analysis. Ready for prototype manufacturing.",
          pt: "Uma plataforma UGV de 1.200 kg pronta para construção com documentação completa — arquitetura do sistema, projeto de eletrônica de potência, stack de controle wireless, benchmarks de desempenho e análise de viabilidade comercial. Pronta para manufatura de protótipo.",
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
          en: "Deliver a 10 kg-payload agricultural quadcopter from concept to flight-ready prototype — covering electrical project, mechanical integration, propulsion system selection and flight-control/telemetry systems.",
          pt: "Entregar um quadricóptero agrícola de 10 kg de carga do conceito ao protótipo pronto para voo — cobrindo projeto elétrico, integração mecânica, seleção de sistema de propulsão e sistemas de controle de voo/telemetria.",
        },
      },
      {
        heading: { en: "The Solution", pt: "A Solução" },
        body: {
          en: "Completed full electrical and mechanical design: selected propulsion components (motors, ESCs, propellers), designed the power distribution system, integrated the flight controller with GPS navigation and telemetry.\n\nThe prototype was delivered in under 6 months at Psyche AeroSpace, coordinating with mechanical and electronics teams under tight delivery timelines.",
          pt: "Completei projeto elétrico e mecânico completo: selecionei componentes de propulsão (motores, ESCs, hélices), projetei o sistema de distribuição de energia, integrei o controlador de voo com navegação GPS e telemetria.\n\nO protótipo foi entregue em menos de 6 meses na Psyche AeroSpace, coordenando com equipes mecânica e eletrônica em prazos apertados.",
        },
      },
      {
        heading: { en: "Results", pt: "Resultados" },
        body: {
          en: "A flight-ready agricultural quadcopter prototype delivered in under 6 months — fully documented with specifications, component lists, wiring diagrams and operational parameters for agricultural spraying applications.",
          pt: "Protótipo de quadricóptero agrícola pronto para voo entregue em menos de 6 meses — totalmente documentado com especificações, listas de componentes, diagramas de fiação e parâmetros operacionais para aplicações de pulverização agrícola.",
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
          en: "Design an automated ground-support complex for high-payload agricultural drones — autonomous refueling, energy management, weather monitoring, and a centralized intelligent control hub with fully automated field-intelligence-driven workflows.",
          pt: "Projetar um complexo automatizado de suporte terrestre para drones agrícolas de alta carga — reabastecimento autônomo, gestão de energia, monitoramento meteorológico e um hub de controle inteligente centralizado com workflows automatizados orientados por inteligência de campo.",
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
  "ttd": {
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
          en: "Create and develop a production-grade device for testing and evaluating UAV propulsion motors, capable of measuring thrust, torque, power consumption and other performance metrics under controlled conditions.",
          pt: "Criar e desenvolver um dispositivo de nível produção para teste e avaliação de motores de propulsão de UAVs, capaz de medir empuxo, torque, consumo de energia e outros parâmetros de desempenho em condições controladas.",
        },
      },
      {
        heading: { en: "The Solution", pt: "A Solução" },
        body: {
          en: "Designed and built a Thrust Testing Device (TTD) with integrated sensors for measuring thrust, torque and power consumption. Developed a data acquisition system with high-speed industrial networks for real-time monitoring and logging.\n\nThe device was engineered as a production-grade special machine with a fully wired electrical panel, ready for repeated use in motor testing workflows.",
          pt: "Projetei e construí um Dispositivo de Teste de Empuxo (TTD) com sensores integrados para medir empuxo, torque e consumo de energia. Desenvolvi um sistema de aquisição de dados com redes industriais de alta velocidade para monitoramento e registro em tempo real.\n\nO dispositivo foi engenheirado como uma máquina especial de nível produção com painel elétrico totalmente cabeado, pronto para uso repetido em workflows de teste de motores.",
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
  "siemens-portable-case": {
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
          en: "Develop a portable automation controller that integrates SIEMENS industrial equipment — enabling efficient on-site control, monitoring and demonstration of industrial processes without fixed infrastructure.",
          pt: "Desenvolver uma maleta controladora portátil que integra equipamentos SIEMENS de automação industrial — permitindo controle, monitoramento e demonstração eficientes de processos industriais no local, sem infraestrutura fixa.",
        },
      },
      {
        heading: { en: "The Solution", pt: "A Solução" },
        body: {
          en: "Developed an end-to-end portable controller integrating SIEMENS PLC (TIA Portal), HMI (WinCC) and I/O modules in a rugged carrying case. Programmed the PLC and configured the HMI for real-time process visualization and control.\n\nThe case serves as a self-contained automation lab — ideal for on-site demos, training and rapid prototyping of industrial control solutions.",
          pt: "Desenvolvi uma maleta controladora portátil ponta a ponta integrando CLP SIEMENS (TIA Portal), IHM (WinCC) e módulos de I/O em um case robusto. Programei o CLP e configurei a IHM para visualização e controle de processos em tempo real.\n\nA maleta funciona como um laboratório de automação independente — ideal para demos no local, treinamentos e prototipagem rápida de soluções de controle industrial.",
        },
      },
      {
        heading: { en: "Results", pt: "Resultados" },
        body: {
          en: "A production-grade portable automation controller actively used for on-site industrial demonstrations, training sessions and rapid prototyping of SIEMENS-based control solutions.",
          pt: "Uma maleta controladora portátil de nível produção ativamente utilizada para demonstrações industriais no local, sessões de treinamento e prototipagem rápida de soluções de controle baseadas em SIEMENS.",
        },
      },
    ],
  },
  "spirit-ugv": {
    title: "SPIRIT UGV",
    subtitle: {
      en: "Modular UGV platform for field data collection in agricultural and industrial operations.",
      pt: "Plataforma UGV modular para coleta de dados em operações de campo agrícolas e industriais.",
    },
    bannerImage: "/images/projects/engineer/SPIRIT-BANNER.png",
    career: "engineer",
    sections: [
      {
        heading: { en: "The Challenge", pt: "O Desafio" },
        body: {
          en: "Design a modular UGV platform for field data collection and analysis in agricultural and industrial applications — with integrated sensors, wireless communication and the ability to operate autonomously in varied terrain.",
          pt: "Projetar uma plataforma UGV modular para coleta e análise de dados em campo, em aplicações agrícolas e industriais — com sensores integrados, comunicação sem fio e capacidade de operação autônoma em terrenos variados.",
        },
      },
      {
        heading: { en: "The Solution", pt: "A Solução" },
        body: {
          en: "Developed a modular UGV platform (SPIRIT) with integrated multi-sensor array for environmental data collection, wireless telemetry for real-time data streaming, and a control architecture designed for semi-autonomous field navigation.\n\nThe platform's modular design allows rapid reconfiguration for different sensor payloads and operational requirements across agricultural monitoring, soil analysis and industrial inspection use cases.",
          pt: "Desenvolvi uma plataforma UGV modular (SPIRIT) com array multi-sensor integrado para coleta de dados ambientais, telemetria wireless para streaming de dados em tempo real e uma arquitetura de controle projetada para navegação semi-autônoma em campo.\n\nO design modular da plataforma permite reconfiguração rápida para diferentes cargas de sensores e requisitos operacionais em monitoramento agrícola, análise de solo e inspeção industrial.",
        },
      },
      {
        heading: { en: "Results", pt: "Resultados" },
        body: {
          en: "A field-ready modular UGV platform designed for agricultural and industrial data collection — featuring integrated sensors, wireless communication and autonomous navigation capabilities, ready for deployment across multiple operational scenarios.",
          pt: "Uma plataforma UGV modular pronta para campo, projetada para coleta de dados agrícolas e industriais — com sensores integrados, comunicação sem fio e capacidades de navegação autônoma, pronta para implantação em múltiplos cenários operacionais.",
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
  { label: "nav.developer" as const, href: "/career/dev" },
  { label: "nav.automation" as const, href: "/career/automation-it" },
  { label: "nav.engineer" as const, href: "/career/engineer" },
  { label: "nav.hobbies" as const, href: "/hobbies" },
];

// ---------------------------------------------------------------------------
// 10. Footer
// ---------------------------------------------------------------------------
export const FOOTER_YEAR = new Date().getFullYear();
