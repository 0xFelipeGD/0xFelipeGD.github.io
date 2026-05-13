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
  // CVs — one per career (Industry 4.0 & Engineering exposes two: main + Data Engineer specialization)
  cvIndustryEngineering: "/files/Engineer_Industry_4_0.pdf",
  cvDataEngineer: "/files/Data_Engineer.pdf",
  cvRobotics: "/files/Robotics_Engineer.pdf",
  cvSaasAutomation: "/files/Automation_Engineer.pdf",
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

export const EXPERIENCE_INDUSTRY_ENGINEERING: Experience[] = [
  {
    company: "Movewer Technologies",
    role: {
      en: "Founder & Engineer — Robotics, Industry 4.0 & Edge AI",
      pt: "Fundador & Engenheiro — Robótica, Indústria 4.0 & Edge AI",
    },
    period: "Jun 2025 – Present",
    location: "Lisbon, Portugal",
    bullets: {
      en: [
        "Architected and deployed a production-grade IIoT monitoring platform (MQTT/TLS → Telegraf → InfluxDB → Grafana → Python analytics) across six Docker services with six-layer security — TLS 1.2+, AES-256 encrypted backups, UFW firewall, non-root containers, OpenSSL-generated credentials and provisioned dashboards. GDPR-compliant by design, with an AI layer generating natural-language insights over raw sensor streams via a FastAPI REST service.",
        "Shipped MLAI — an edge AI visual-inspection system on Raspberry Pi 4 running PaDiM anomaly detection (Anomalib) and TensorFlow/TFLite for dual-use industrial QC and agricultural grading; SCADA-style Next.js dashboard, FastAPI + WebSocket backend, camera calibration pipeline and SQLite history, with <500 ms end-to-end latency, fully offline.",
        "Engineered multiple UGV platforms end-to-end up to 1,200 kg payload — power electronics, by-wire actuation (steer/brake), automotive ECU integration, CAN networking, multi-sensor integration (LiDAR / GNSS / cameras) and Starlink/5G connectivity.",
        "Delivered production-grade real-time teleoperation over the public internet — 50 Hz HOTAS input, 720p WebRTC video at 30 fps via TURN relay, MQTT-over-TLS in a ROS2-inspired pub/sub architecture, with a hardware fail-safe watchdog enforcing sub-second motor lockout on communication loss; 74-test automated suite across three repositories.",
        "Founded the practice and operated as solo lead engineer — owning commercial scoping, technical architecture, supplier selection and the full delivery lifecycle across UGV, IIoT and edge AI engagements.",
      ],
      pt: [
        "Arquitetou e implantou uma plataforma de monitoramento IIoT de nível produção (MQTT/TLS → Telegraf → InfluxDB → Grafana → analytics em Python) em seis serviços Docker com segurança em seis camadas — TLS 1.2+, backups criptografados AES-256, firewall UFW, containers não-root, credenciais geradas via OpenSSL e dashboards provisionados. GDPR-compliant por design, com camada de IA gerando insights em linguagem natural sobre streams brutos de sensores via serviço REST FastAPI.",
        "Entregou o MLAI — sistema de inspeção visual com IA em Raspberry Pi 4 com detecção de anomalias PaDiM (Anomalib) e TensorFlow/TFLite para QC industrial e classificação agrícola; dashboard SCADA-style em Next.js, backend FastAPI + WebSocket, pipeline de calibração de câmera e histórico SQLite, com latência ponta a ponta <500 ms, totalmente offline.",
        "Engenheirou múltiplas plataformas UGV ponta a ponta com até 1.200 kg de carga útil — eletrônica de potência, atuação by-wire (direção/freio), integração de ECUs automotivas, rede CAN, integração multissensorial (LiDAR / GNSS / câmeras) e conectividade Starlink/5G.",
        "Entregou teleoperação em tempo real pela internet pública em nível de produção — entrada HOTAS a 50 Hz, vídeo WebRTC 720p a 30 fps via TURN, MQTT sobre TLS em arquitetura pub/sub inspirada em ROS2, com watchdog fail-safe por hardware aplicando lockout de motor em sub-segundos na perda de comunicação; suíte automatizada de 74 testes em três repositórios.",
        "Fundou a prática e atuou como engenheiro líder solo — responsável por escopo comercial, arquitetura técnica, seleção de fornecedores e ciclo completo de entrega em projetos de UGV, IIoT e edge AI.",
      ],
    },
  },
  {
    company: "Psyche AeroSpace",
    role: {
      en: "Automation & UGV Engineering Manager",
      pt: "Gerente de Engenharia de Automação & UGV",
    },
    period: "Jun 2024 – Jun 2025",
    location: "São Paulo, Brazil",
    bullets: {
      en: [
        "Built the Automation and UGV divisions from zero; delivered systems were cited by company leadership as key technical proof points contributing to a successful fundraising round.",
        "Led a cross-functional team of 5 engineers across two product lines (agricultural UGVs and drone-support infrastructure), reducing time-to-prototype by ~30% via structured Scrum sprints on Jira.",
        "Owned the full UGV development lifecycle (control, power, communication) with hands-on integration of GNSS and vision subsystems, schematic design, panel wiring and bench-level troubleshooting.",
        "Delivered a 10 kg-payload agricultural quadcopter from concept to flight-ready prototype in under 6 months, including electrical design, mechanical integration, flight-control logic and telemetry systems.",
        "Translated complex operational requirements into technical user stories, data schemas, functional workflows and automation logic — bridging business stakeholders and engineering execution.",
      ],
      pt: [
        "Construiu as divisões de Automação e UGV do zero; sistemas entregues foram citados pela liderança como proof points técnicos chave contribuindo para uma rodada de captação bem-sucedida.",
        "Liderou equipe cross-funcional de 5 engenheiros em duas linhas de produto (UGVs agrícolas e infraestrutura de apoio a drones), reduzindo tempo de protótipo em ~30% via sprints Scrum estruturados no Jira.",
        "Foi responsável pelo ciclo completo de desenvolvimento UGV (controle, potência, comunicação) com integração hands-on de subsistemas GNSS e visão, design de esquemáticos, fiação de painel e troubleshooting em bancada.",
        "Entregou quadricóptero agrícola de 10 kg de carga útil do conceito ao protótipo pronto para voo em menos de 6 meses, incluindo projeto elétrico, integração mecânica, lógica de controle de voo e sistemas de telemetria.",
        "Traduziu requisitos operacionais complexos em histórias de usuário técnicas, esquemas de dados, workflows funcionais e lógica de automação — fazendo a ponte entre stakeholders de negócio e execução de engenharia.",
      ],
    },
  },
  {
    company: "Controvale",
    role: {
      en: "Technician & Automation Engineer (Industrial Data & Systems Integration)",
      pt: "Técnico & Engenheiro de Automação (Dados Industriais & Integração de Sistemas)",
    },
    period: "Jun 2018 – Jun 2024",
    location: "São Paulo, Brazil",
    bullets: {
      en: [
        "Engineered 20+ special industrial machines integrating mechatronic systems, IoT connectivity, SCADA supervision and industrial protocols (Modbus, Profinet, EtherCAT, OPC-UA); average project delivered on time and within 5% budget variance.",
        "Designed and executed full industrial electrical panel projects end-to-end (load calculations, EPLAN/AutoCAD schematics, component specification, panel build, cabinet wiring, bench testing and commissioning) — reducing rework rate by ~25% through standardized documentation practices.",
        "Programmed PLCs and configured HMI/SCADA systems (TIA Portal, CODESYS, Indusoft) for manufacturing and process automation, improving operator visibility and cutting unplanned downtime across client facilities.",
        "Integrated industrial systems with continuous sensor streams over Modbus, Profinet and EtherCAT into SCADA historians and client databases; built reporting and monitoring pipelines (SQL, Grafana, Power BI) to surface production metrics, process drift and maintenance signals from years of real-world industrial time-series.",
        "Served as regional distributor for Wecon and Kinco; built and maintained 35+ industrial client partnerships over six years — on-site diagnostics, technical pre-sales, integration and post-deployment support.",
      ],
      pt: [
        "Engenheirou 20+ máquinas industriais especiais integrando sistemas mecatrônicos, IoT, supervisão SCADA e protocolos industriais (Modbus, Profinet, EtherCAT, OPC-UA); projetos médios entregues no prazo e com variação de 5% no orçamento.",
        "Projetou e executou projetos completos de painéis elétricos industriais ponta a ponta (cálculos de carga, esquemáticos EPLAN/AutoCAD, especificação de componentes, montagem de painel, fiação de cabine, testes em bancada e comissionamento) — reduzindo retrabalho em ~25% via práticas padronizadas de documentação.",
        "Programou CLPs e configurou sistemas HMI/SCADA (TIA Portal, CODESYS, Indusoft) para automação de manufatura e processos, melhorando visibilidade do operador e reduzindo downtime não planejado nas instalações de clientes.",
        "Integrou sistemas industriais com streams contínuos de sensores via Modbus, Profinet e EtherCAT em historiadores SCADA e bancos de clientes; construiu pipelines de reporting e monitoramento (SQL, Grafana, Power BI) para evidenciar métricas de produção, desvios de processo e sinais de manutenção a partir de anos de séries temporais industriais reais.",
        "Atuou como distribuidor regional de Wecon e Kinco; construiu e manteve 35+ parcerias industriais em seis anos — diagnóstico em campo, pré-vendas técnicas, integração e suporte pós-implantação.",
      ],
    },
  },
];

export const EXPERIENCE_SAAS_AUTOMATION: Experience[] = [
  {
    company: "Movewer Technologies",
    role: {
      en: "Founder & Lead Automation Engineer",
      pt: "Fundador & Engenheiro Líder de Automação",
    },
    period: "Jun 2025 – Present",
    location: "Lisbon, Portugal",
    bullets: {
      en: [
        "Designed and deployed a production IoT monitoring and automation platform (MQTT, Node-RED, Telegraf, InfluxDB, Grafana, Python) with an AI layer that turns raw sensor streams into actionable natural-language insights exposed via REST APIs and webhooks.",
        "Containerized the full stack with Docker Compose, deployed on a Linux VPS with GitHub Actions CI/CD, Nginx + Let's Encrypt, encrypted backups and six-layer security; production frontend served on Vercel.",
        "Built automation workflows connecting edge devices (Raspberry Pi) to cloud dashboards: ingestion, processing, real-time alerting, scheduled reporting and AI-driven summaries delivered through messaging channels.",
        "Sole technical owner across the full development lifecycle (requirements → architecture → code → deployment → iteration), with heavy use of Claude Code and AI agents as a daily force multiplier on output and review.",
        "Wrote and maintained technical documentation including architecture diagrams, data flow and user guides for each automation in production.",
      ],
      pt: [
        "Projetou e implantou uma plataforma de monitoramento e automação IoT de produção (MQTT, Node-RED, Telegraf, InfluxDB, Grafana, Python) com camada de IA que transforma streams brutos de sensores em insights acionáveis em linguagem natural expostos via REST APIs e webhooks.",
        "Containerizou a stack completa com Docker Compose, implantou em VPS Linux com CI/CD via GitHub Actions, Nginx + Let's Encrypt, backups criptografados e segurança em seis camadas; frontend de produção servido no Vercel.",
        "Construiu workflows de automação conectando dispositivos edge (Raspberry Pi) a dashboards na nuvem: ingestão, processamento, alertas em tempo real, reports agendados e resumos com IA entregues via canais de mensageria.",
        "Responsável técnico único em todo o ciclo de desenvolvimento (requisitos → arquitetura → código → deploy → iteração), com uso intensivo de Claude Code e agentes de IA como multiplicador diário de output e revisão.",
        "Escreveu e manteve documentação técnica incluindo diagramas de arquitetura, fluxo de dados e guias de usuário para cada automação em produção.",
      ],
    },
  },
  {
    company: "Personal Projects & Independent Work",
    role: {
      en: "Full-Stack Developer & Automation Engineer",
      pt: "Desenvolvedor Full-Stack & Engenheiro de Automação",
    },
    period: "2024 – Present",
    location: "Lisbon, Portugal",
    bullets: {
      en: [
        "Built a LinkedIn content automation pipeline with n8n and Make: generates draft posts from predefined topics, routes approval via a Telegram bot and auto-publishes to LinkedIn on confirmation — human-in-the-loop design over pure auto-posting.",
        "Developed Julius, an AI-powered personal-finance PWA (Next.js 15, Supabase/PostgreSQL, OpenAI API) — an AI agent extracts, categorizes and persists financial entries from natural-language input and renders interactive dashboards.",
        "Shipped Python ETL pipelines that pull from REST APIs, transform with pandas and persist to PostgreSQL on a schedule; reusable patterns applied across several personal automation tools.",
        "Built internal tooling around Claude Code and the OpenAI API (custom agents, prompt templates, code-review and data-exploration assistants) to push the practical ceiling of single-engineer productivity.",
      ],
      pt: [
        "Construiu pipeline de automação de conteúdo LinkedIn com n8n e Make: gera rascunhos de posts a partir de tópicos predefinidos, roteia aprovação via bot Telegram e publica no LinkedIn na confirmação — design human-in-the-loop ao invés de auto-posting puro.",
        "Desenvolveu o Julius, PWA de finanças pessoais com IA (Next.js 15, Supabase/PostgreSQL, OpenAI API) — agente de IA extrai, categoriza e persiste lançamentos financeiros a partir de entrada em linguagem natural e renderiza dashboards interativos.",
        "Entregou pipelines ETL em Python que consomem REST APIs, transformam com pandas e persistem em PostgreSQL agendados; padrões reutilizáveis aplicados em diversas ferramentas pessoais de automação.",
        "Construiu ferramentas internas em torno de Claude Code e API OpenAI (agentes customizados, templates de prompts, assistentes de code-review e exploração de dados) para empurrar o teto prático de produtividade de um único engenheiro.",
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
        "Built internal automation workflows with Python, Node.js and low-code tools to remove manual steps from team operations and speed up prototyping cycles.",
        "Led a cross-functional team of 5 engineers using Scrum/Kanban on Jira, coordinating multi-project delivery on time and within budget.",
        "Translated complex operational requirements into technical user stories, functional workflows and automation logic — bridging business stakeholders and engineering execution.",
      ],
      pt: [
        "Construiu workflows de automação internos com Python, Node.js e ferramentas low-code para eliminar etapas manuais das operações da equipe e acelerar ciclos de prototipagem.",
        "Liderou equipe cross-funcional de 5 engenheiros com Scrum/Kanban no Jira, coordenando entregas multi-projeto no prazo e dentro do orçamento.",
        "Traduziu requisitos operacionais complexos em histórias de usuário técnicas, workflows funcionais e lógica de automação — fazendo a ponte entre stakeholders de negócio e execução de engenharia.",
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
        "Developed and deployed industrial automation systems combining IoT connectivity, SCADA supervision and data-flow integration; built deep expertise in end-to-end process automation and system integration.",
        "Executed full project cycles: system design, programming (Python, structured text, ladder logic), testing, troubleshooting and client-facing technical documentation and handover.",
        "Built a portfolio of 35+ long-term industrial client partnerships over six years, providing technical pre-sales, integration and post-deployment support.",
      ],
      pt: [
        "Desenvolveu e implantou sistemas de automação industrial combinando IoT, supervisão SCADA e integração de fluxo de dados; construiu expertise profunda em automação de processos ponta a ponta e integração de sistemas.",
        "Executou ciclos completos de projeto: design de sistema, programação (Python, texto estruturado, ladder logic), testes, troubleshooting e documentação técnica e handover voltados ao cliente.",
        "Construiu portfólio de 35+ parcerias industriais de longo prazo em seis anos, oferecendo pré-vendas técnicas, integração e suporte pós-implantação.",
      ],
    },
  },
];

// ---------------------------------------------------------------------------
// 4. Skills
// ---------------------------------------------------------------------------
export const SKILLS_INDUSTRY_ENGINEERING = [
  // IT/OT Convergence & Industrial Automation
  "PLC Programming (TIA Portal, CODESYS)",
  "SCADA / HMI (AVEVA, WinCC, Indusoft)",
  "Modbus RTU/TCP / Profinet / EtherCAT",
  "OPC-UA / MQTT / LoRa",
  "Electrical Panel Design & Wiring",
  "IT/OT Convergence",
  "Industrial Cybersecurity (TLS 1.2+, firewall hardening)",
  // Robotics & Autonomous Systems
  "UGV / AGV End-to-End Development (10 kg → 1,200 kg)",
  "By-Wire Control (Steer / Brake)",
  "Automotive ECU Integration / CAN Bus",
  "Power Electronics & Motion Control",
  "Real-Time Teleoperation (WebRTC, MQTT/TLS, HOTAS)",
  "ROS / ROS2-Inspired Pub/Sub",
  "Hardware Fail-Safe Watchdogs",
  // Sensors & Perception
  "LiDAR / GNSS / GPS / Cameras",
  "Computer Vision (OpenCV, TensorFlow, TFLite)",
  "Anomalib / PaDiM",
  "National Instruments Hardware",
  // Embedded & Edge
  "Raspberry Pi / ESP32 / NVIDIA Jetson Nano-Orin",
  "Embedded Firmware",
  "Edge AI Inference",
  // Industrial Data & Analytics
  "Python (pandas, NumPy, scikit-learn)",
  "SQL / PostgreSQL / SQLite",
  "InfluxDB (Time-Series) / Telegraf",
  "ETL / Data-Pipeline Design",
  "Grafana / Power BI / KPI Dashboards",
  "Anomaly Detection / Predictive Analytics",
  // AI & LLM Engineering
  "LLM APIs (OpenAI, Claude Code)",
  "AI Agents / Prompt Engineering",
  "LLM-in-the-Loop Workflows / RAG",
  "AI-Augmented Monitoring & Reporting",
  // Software & DevOps
  "JavaScript / TypeScript / Node.js",
  "FastAPI / Express.js / REST & WebSocket APIs",
  "Next.js / React",
  "C++ / C#",
  "Docker / Docker Compose",
  "Linux / VPS Operations",
  "Nginx / systemd / Git / GitHub",
  "CI/CD (GitHub Actions)",
  // Engineering Tools
  "EPLAN / AutoCAD / SolidWorks",
  "MATLAB / LabVIEW / Blender",
  // Methodologies
  "Scrum / Kanban / Agile / Jira",
  "Cross-Functional Team Leadership",
  "Technical Documentation",
];

export const SKILLS_SAAS_AUTOMATION = [
  // Automation & Workflows
  "n8n",
  "Make (Integromat)",
  "Zapier",
  "Node-RED",
  "Microsoft Power Automate",
  "Event-Driven Pipelines",
  "Webhooks / Scheduled Jobs",
  "Human-in-the-Loop (Telegram, Email)",
  "SaaS API Integration (Google Workspace, Notion, Slack, LinkedIn)",
  // AI & GenAI
  "OpenAI API",
  "Anthropic API / Claude Code",
  "AI Agents / Prompt Engineering",
  "LLM-in-the-Loop Workflows",
  "Retrieval-Augmented Generation (RAG)",
  "AI-Augmented Monitoring & Reporting",
  "Azure OpenAI",
  // Languages
  "Python",
  "JavaScript / TypeScript",
  "Bash / SQL / HTML / CSS",
  "Some Rust and C/C++",
  // Backend & APIs
  "FastAPI",
  "Node.js / Express.js",
  "REST / WebSockets",
  "Supabase Edge Functions",
  "Webhook Design / Retries / Idempotency",
  "Authentication & Session Handling",
  // Frontend & Full-Stack
  "Next.js / React 19",
  "Tailwind CSS",
  "PWA / Mobile-First UI",
  "Interactive Dashboards",
  // Data & Observability
  "PostgreSQL / SQLite / Supabase",
  "InfluxDB (Time-Series)",
  "pandas / ETL & ELT Pipeline Design",
  "Grafana / Power BI",
  "Telegraf / Node-RED Flows",
  // Cloud, DevOps & Infra
  "Docker / Docker Compose",
  "Linux / VPS Deployment",
  "Git / GitHub / GitHub Actions (CI/CD)",
  "Nginx / Vercel / Let's Encrypt / TLS / systemd",
  "AWS (familiar)",
  "Raspberry Pi / NVIDIA Jetson Nano",
  // Tools & Methodologies
  "VS Code / Cursor / Replit",
  "Jira / Scrum / Kanban",
  "System Architecture / API Versioning / Test Design",
  // Industrial Protocols & IoT (Differential)
  "MQTT / OPC-UA / Modbus",
  "SCADA / Embedded Firmware",
  "Industry 4.0 / Edge-to-Cloud Pipelines",
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
    location: "São José dos Campos, Brazil",
  },
  {
    school: "freeCodeCamp · One Bit Code · Self-directed study",
    degree: {
      en: "Self-Directed Software, Data, Automation & AI Engineering — 1,000+ hours (hands-on project work with LLM tooling, Python data stack and automation platforms)",
      pt: "Software, Dados, Automação & Engenharia de IA Autodirigido — 1.000+ horas (projetos práticos com ferramentas LLM, stack de dados em Python e plataformas de automação)",
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

export const PROJECTS_INDUSTRY_ENGINEERING: Project[] = [
  {
    slug: "ai-data-platform-iot",
    title: "AI Data Platform",
    description: {
      en: "Self-hosted industrial IoT monitoring platform. Six containerized services — Mosquitto, Telegraf, InfluxDB, Grafana, Python analytics and Nginx — orchestrated via Docker Compose with full dev/prod separation, layered TLS security and multi-tier backups.",
      pt: "Plataforma self-hosted de monitoramento industrial IoT. Seis serviços containerizados — Mosquitto, Telegraf, InfluxDB, Grafana, analytics em Python e Nginx — orquestrados via Docker Compose com separação dev/prod completa, segurança em camadas com TLS e backups multi-camada.",
    },
    coverImage: "/images/projects/industry/ai-data-platform-architecture.png",
    tags: ["Docker", "MQTT", "InfluxDB", "Grafana", "Telegraf", "Python", "TLS"],
  },
  {
    slug: "hotas-remote-control",
    title: "HOTAS Warthog — Internet Remote Control",
    description: {
      en: "Real-time remote control system over the internet using a military HOTAS joystick, MQTT over TLS, Raspberry Pi, and WebRTC live video — with a fail-safe watchdog and an industrial-brutalist operator UI built in React.",
      pt: "Sistema de controle remoto em tempo real pela internet usando joystick militar HOTAS, MQTT sobre TLS, Raspberry Pi e vídeo ao vivo WebRTC — com watchdog fail-safe e UI industrial-brutalista do operador em React.",
    },
    coverImage: "/images/projects/industry/hotas-remote-workstation.jpeg",
    tags: ["Python", "MQTT", "Raspberry Pi", "React", "WebRTC", "IoT"],
  },
  {
    slug: "mlai-edge-ai",
    title: "MLAI — Edge AI Visual Inspection",
    description: {
      en: "Dual-purpose edge AI visual inspection system running entirely on a Raspberry Pi 4 + Camera Module 3. Two independent modules — INDUST (PaDiM anomaly detection on industrial parts) and AGRO (SSD MobileNet V2 fruit detection + quality grading) — unified by a SCADA-style Next.js dashboard. No cloud, no internet, no telemetry.",
      pt: "Sistema de inspeção visual com IA rodando inteiramente em um Raspberry Pi 4 + Camera Module 3. Dois módulos independentes — INDUST (detecção de anomalias PaDiM em peças industriais) e AGRO (detecção de frutas com SSD MobileNet V2 + classificação de qualidade) — unificados por um dashboard SCADA em Next.js. Sem nuvem, sem internet, sem telemetria.",
    },
    coverImage: "/images/projects/industry/mlai/camera-module.jpg",
    tags: ["TensorFlow Lite", "PaDiM", "SSD MobileNet V2", "Raspberry Pi", "FastAPI", "Next.js 16", "Edge AI"],
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
    title: "SIEMENS Portable Case & 6-DOF Stewart Platform",
    description: {
      en: "Two integrated prototypes: a portable Siemens S7-1200 + KTP 700 didactic controller case and a 6-DOF Stewart Platform driven by six linear electric actuators with auto-tuned PID position control over closed-loop feedback.",
      pt: "Dois protótipos integrados: uma maleta controladora didática portátil com Siemens S7-1200 + KTP 700 e uma Plataforma de Stewart 6-DOF acionada por seis atuadores elétricos lineares com controle PID auto-tuned em malha fechada.",
    },
    coverImage: "/images/projects/engineer/siemens-stewart-banner.jpeg",
    tags: ["Siemens S7-1200", "TIA Portal", "WinCC", "PID", "Stewart Platform", "6-DOF"],
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
    slug: "industry-project-10",
    title: "Project 10",
    description: { en: "Coming soon", pt: "Em breve" },
    coverImage: "/images/projects/industry/C2.png",
    tags: ["TBD"],
  },
  {
    slug: "industry-project-11",
    title: "Project 11",
    description: { en: "Coming soon", pt: "Em breve" },
    coverImage: "/images/projects/industry/C3.png",
    tags: ["TBD"],
  },
  {
    slug: "industry-project-12",
    title: "Project 12",
    description: { en: "Coming soon", pt: "Em breve" },
    coverImage: "/images/projects/industry/C4.png",
    tags: ["TBD"],
  },
];

export const PROJECTS_SAAS_AUTOMATION: Project[] = [
  {
    slug: "julius-finance-bot",
    title: "Julius — AI Finance SaaS",
    description: {
      en: "AI-powered personal finance PWA. Log expenses by chatting with a personality (Julius, Trump, Lagarde…) or snapping a receipt photo — GPT-4o extracts the transaction, you confirm it, the dashboard updates instantly. Built with Next.js 14, Supabase, OpenAI, React Query and Tailwind.",
      pt: "PWA de finanças pessoais com IA. Registre gastos conversando com uma personalidade (Julius, Trump, Lagarde…) ou tirando foto de recibo — o GPT-4o extrai a transação, você confirma e o dashboard atualiza na hora. Feito com Next.js 14, Supabase, OpenAI, React Query e Tailwind.",
    },
    coverImage: "/images/projects/automation-it/julius-chat-conversation.jpeg",
    tags: ["Next.js 14", "TypeScript", "Supabase", "OpenAI GPT-4o", "PWA", "Tailwind"],
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
    slug: "automation-project-3",
    title: "Project 3",
    description: { en: "Coming soon", pt: "Em breve" },
    coverImage: "/images/projects/automation-it/C1.png",
    tags: ["TBD"],
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
  career: "industry" | "automation-it";
  liveUrl?: string;
  sections: {
    heading: { en: string; pt: string };
    body: { en: string; pt: string };
    image?: string;
    images?: string[];
    imageCaption?: { en: string; pt: string };
  }[];
}

export const PROJECT_DETAILS: Record<string, ProjectDetail> = {
  // ── Industry 4.0 & Engineering placeholders ──────────────
  "mlai-edge-ai": {
    title: "MLAI — Edge AI Visual Inspection",
    subtitle: {
      en: "A dual-purpose AI quality station running fully offline on a Raspberry Pi 4 — industrial anomaly detection and agricultural fruit grading in one SCADA-style dashboard",
      pt: "Uma estação de qualidade com IA de propósito duplo rodando 100% offline em um Raspberry Pi 4 — detecção de anomalias industriais e classificação de frutas agrícolas em um único dashboard SCADA",
    },
    bannerImage: "/images/projects/industry/mlai/camera-module.jpg",
    career: "industry",
    sections: [
      {
        heading: { en: "The Challenge", pt: "O Desafio" },
        body: {
          en: "Build a production-grade visual inspection system that runs entirely on commodity edge hardware — no cloud, no internet, no telemetry — and is versatile enough to handle two very different domains from the same box: industrial quality control on manufactured parts and agricultural produce grading on a rover-like platform.\n\nThe constraints were tight: a single Raspberry Pi 4 (8 GB) with the Camera Module 3 NoIR, end-to-end latency under 500 ms, at least 3 FPS on the live feed, one inference module active at a time, and a SCADA-style operator UI that could be trusted in a factory control room. Everything had to auto-start on boot, auto-restart on crash, and be installable by someone who had never touched machine learning before.",
          pt: "Construir um sistema de inspeção visual de nível produção que roda inteiramente em hardware de borda comum — sem nuvem, sem internet, sem telemetria — e versátil o suficiente para lidar com dois domínios muito diferentes na mesma caixa: controle de qualidade industrial em peças manufaturadas e classificação de produtos agrícolas em uma plataforma tipo rover.\n\nAs restrições eram apertadas: um único Raspberry Pi 4 (8 GB) com o Camera Module 3 NoIR, latência ponta a ponta abaixo de 500 ms, pelo menos 3 FPS no feed ao vivo, um módulo de inferência ativo por vez, e uma UI do operador estilo SCADA confiável para uma sala de controle de fábrica. Tudo precisava iniciar no boot, reiniciar ao crashar, e ser instalável por alguém que nunca tivesse tocado machine learning antes.",
        },
        image: "/images/projects/industry/mlai/pi4-board.jpg",
        imageCaption: {
          en: "Raspberry Pi 4 Model B — the entire compute target. All ML inference runs here via TFLite + XNNPACK on the ARM Cortex-A72",
          pt: "Raspberry Pi 4 Model B — o alvo completo de computação. Toda inferência de ML roda aqui via TFLite + XNNPACK no ARM Cortex-A72",
        },
      },
      {
        heading: { en: "Two Modules, One Box", pt: "Dois Módulos, Uma Única Caixa" },
        body: {
          en: "MLAI ships with two fully independent inference modules sharing the same infrastructure — camera capture, calibration, measurement pipeline, database, API, and web shell — but nothing else. Only one runs at a time; switching between them takes under 5 seconds.\n\n• INDUST — Industrial quality control using PaDiM anomaly detection (via Anomalib) trained on MVTec AD categories (bottle, metal nut, screw, and others, hot-swappable). For each frame it produces an anomaly score (0–1), a pixel-level heatmap overlaid on the live video, a PASS / WARN / FAIL verdict against a configurable threshold, and the defect's dimensional footprint in millimeters.\n\n• AGRO — Agricultural produce inspection using SSD MobileNet V2 for fruit detection (apple, orange, tomato — extendable) followed by a MobileNet V2 transfer-learned classifier for per-fruit quality grading (good / defective / unripe). Each detection is sized using classical CV contour analysis converted from pixels to millimeters via the camera calibration, and a live size histogram tracks the size distribution of what just passed under the camera.\n\nBoth modules feed into the same SQLite history, expose the same REST and WebSocket contracts, and render through the same SCADA shell — just with different sub-pages.",
          pt: "O MLAI vem com dois módulos de inferência totalmente independentes compartilhando a mesma infraestrutura — captura de câmera, calibração, pipeline de medição, banco de dados, API e shell web — e nada além disso. Apenas um roda por vez; alternar entre eles leva menos de 5 segundos.\n\n• INDUST — Controle de qualidade industrial usando detecção de anomalias PaDiM (via Anomalib) treinado em categorias do MVTec AD (garrafa, porca metálica, parafuso, entre outras, hot-swappable). Para cada frame produz um anomaly score (0–1), um heatmap em nível de pixel sobreposto ao vídeo ao vivo, um veredito PASS / WARN / FAIL comparado a um threshold configurável, e a pegada dimensional do defeito em milímetros.\n\n• AGRO — Inspeção de produtos agrícolas usando SSD MobileNet V2 para detecção de frutas (maçã, laranja, tomate — extensível) seguido de um classificador MobileNet V2 com transfer learning para classificação de qualidade por fruta (boa / defeituosa / verde). Cada detecção é dimensionada usando análise de contorno CV clássica convertida de pixels para milímetros via calibração da câmera, e um histograma de tamanhos ao vivo acompanha a distribuição de tamanhos do que acabou de passar sob a câmera.\n\nOs dois módulos alimentam o mesmo histórico SQLite, expõem os mesmos contratos REST e WebSocket, e renderizam através do mesmo shell SCADA — apenas com sub-páginas diferentes.",
        },
        image: "/images/projects/industry/mlai/camera-module.jpg",
        imageCaption: {
          en: "Raspberry Pi Camera Module — the sole sensor input. MLAI is built around the Camera Module 3 NoIR (IMX708, 12 MP) connected via the CSI-2 ribbon",
          pt: "Raspberry Pi Camera Module — a única entrada sensorial. O MLAI é construído em torno do Camera Module 3 NoIR (IMX708, 12 MP) conectado pelo cabo flat CSI-2",
        },
      },
      {
        heading: { en: "System Architecture", pt: "Arquitetura do Sistema" },
        body: {
          en: "Three systemd services working together, each with its own responsibility and its own restart policy:\n\n• mlai-engine — the Python inference daemon. Talks to picamera2, runs the active module's pipeline on each frame, writes results to SQLite, and pushes live frames + results to the API over a local IPC channel.\n\n• mlai-api — FastAPI (port 8000), REST endpoints for system health, module switching, camera configuration, and paginated history + stats per module (INDUST and AGRO keep their routes in separate files). A WebSocket at /ws/live streams frames, verdicts, bounding boxes, heatmaps and inference timings as fast as the Pi can produce them.\n\n• mlai-web — Next.js 16 (port 3000), App Router, React 19, Tailwind CSS 4, Recharts. Serves the SCADA dashboard, the INDUST live page (video + heatmap overlay + gauge + measurement card), the AGRO live page (bounding boxes + fruit cards + size histogram), history tables with CSV export, settings, a system health page, and a camera calibration wizard that walks the operator through a checkerboard capture.\n\nThe data flow is direct and cheap: picamera2 at 640×480 ~5 FPS → undistort using the camera calibration JSON → route to the active module → INDUST resizes to 256×256 and runs PaDiM, or AGRO resizes to 320×320 and runs SSD MobileNet V2 + MobileNet V2 classifier per detection → result object → persisted to SQLite + pushed over the WebSocket. Live UI updates are tied to the WebSocket; history pages use plain REST + React Query.",
          pt: "Três serviços systemd trabalhando juntos, cada um com sua responsabilidade e sua política de restart:\n\n• mlai-engine — o daemon Python de inferência. Conversa com a picamera2, executa o pipeline do módulo ativo em cada frame, grava resultados no SQLite, e empurra frames ao vivo + resultados para a API via canal IPC local.\n\n• mlai-api — FastAPI (porta 8000), endpoints REST para saúde do sistema, troca de módulo, configuração de câmera, e histórico paginado + estatísticas por módulo (INDUST e AGRO mantêm suas rotas em arquivos separados). Um WebSocket em /ws/live transmite frames, vereditos, bounding boxes, heatmaps e tempos de inferência na velocidade máxima que o Pi consegue produzir.\n\n• mlai-web — Next.js 16 (porta 3000), App Router, React 19, Tailwind CSS 4, Recharts. Serve o dashboard SCADA, a página live INDUST (vídeo + overlay de heatmap + gauge + card de medições), a página live AGRO (bounding boxes + cards de frutas + histograma de tamanhos), tabelas de histórico com export CSV, settings, uma página de saúde do sistema, e um wizard de calibração de câmera que guia o operador por uma captura de tabuleiro xadrez.\n\nO fluxo de dados é direto e barato: picamera2 a 640×480 ~5 FPS → undistort usando o JSON de calibração da câmera → roteado para o módulo ativo → INDUST redimensiona para 256×256 e roda PaDiM, ou AGRO redimensiona para 320×320 e roda SSD MobileNet V2 + classificador MobileNet V2 por detecção → objeto de resultado → persistido no SQLite + empurrado pelo WebSocket. Atualizações da UI ao vivo são amarradas ao WebSocket; páginas de histórico usam REST puro + React Query.",
        },
      },
      {
        heading: { en: "The Measurement Pipeline", pt: "O Pipeline de Medição" },
        body: {
          en: "Both modules share a single dimensional measurement pipeline that turns pixels into millimeters with field-verifiable accuracy:\n\n[camera frame] → [undistort via intrinsic matrix] → [detect ROI] → [segment with OpenCV contours] → [pixel dimensions] → [px → mm conversion] → [output].\n\nCalibration is a guided, checkerboard-based OpenCV routine exposed through a step-by-step wizard in the web UI. The operator prints a checkerboard pattern, holds it at varied angles in front of the camera, and the engine collects enough views to solve for the camera's intrinsic matrix and distortion coefficients, which are saved to config/camera_calibration.json. From that point on every frame is undistorted before inference, and every contour measurement carries a real-world scale. Target accuracy is ±2 mm and the system is designed to be recalibrated on the fly if the lens or camera distance changes.",
          pt: "Os dois módulos compartilham um único pipeline de medição dimensional que transforma pixels em milímetros com precisão verificável em campo:\n\n[frame da câmera] → [undistort via matriz intrínseca] → [detectar ROI] → [segmentar com contornos OpenCV] → [dimensões em pixels] → [conversão px → mm] → [output].\n\nA calibração é uma rotina OpenCV baseada em tabuleiro xadrez, guiada passo a passo por um wizard na UI web. O operador imprime um padrão de tabuleiro, segura em vários ângulos na frente da câmera, e o engine coleta vistas suficientes para resolver a matriz intrínseca da câmera e os coeficientes de distorção, salvos em config/camera_calibration.json. A partir daí todo frame é corrigido antes da inferência, e toda medida de contorno carrega uma escala do mundo real. A precisão alvo é ±2 mm e o sistema é projetado para ser recalibrado em tempo real se a lente ou distância da câmera mudar.",
        },
        image: "/images/projects/industry/mlai/pi4-side.jpg",
        imageCaption: {
          en: "Pi 4 side view — GPIO, USB 3.0 and CSI camera port. The Camera Module 3 NoIR connects via the CSI-2 ribbon",
          pt: "Vista lateral do Pi 4 — GPIO, USB 3.0 e porta CSI da câmera. O Camera Module 3 NoIR conecta pelo cabo flat CSI-2",
        },
      },
      {
        heading: { en: "The ML Story", pt: "A História de ML" },
        body: {
          en: "Training happens on a separate PC using a Miniconda env and the TensorFlow ecosystem; inference happens on the Pi using only tflite-runtime with XNNPACK acceleration. The split matters — the Pi does not need TensorFlow installed, only a small runtime that loads .tflite files.\n\n• INDUST — Trained with Anomalib's PaDiM on MVTec AD. One model per category. The training CLI downloads the MVTec data, fits the model in a couple of epochs, and exports a TFLite artifact that the Pi loads through a thin wrapper. A single command trains on \"bottle\", exports, and copies into models/indust/ ready to be served.\n\n• AGRO detector — SSD MobileNet V2 fine-tuned with TF Model Maker on Fruits-360 for apple, orange, and tomato. A pretrained COCO-SSD TFLite can also be dropped in directly when time is scarce.\n\n• AGRO quality classifier — MobileNet V2 transfer-learned on a fresh-vs-rotten fruit dataset, producing a lightweight three-class head (good / defective / unripe) running at ~50–80 ms per detection on the Pi.\n\nAll training scripts are written for a developer with zero prior ML experience — every step is commented end-to-end, conda commands are spelled out, and a README walks through dataset download, train, export, and scp-to-Pi in order.",
          pt: "O treinamento acontece em um PC separado usando um ambiente Miniconda e o ecossistema TensorFlow; a inferência acontece no Pi usando apenas tflite-runtime com aceleração XNNPACK. A divisão importa — o Pi não precisa ter TensorFlow instalado, apenas um runtime pequeno que carrega arquivos .tflite.\n\n• INDUST — Treinado com o PaDiM do Anomalib no MVTec AD. Um modelo por categoria. A CLI de treino baixa os dados MVTec, ajusta o modelo em algumas épocas, e exporta um artefato TFLite que o Pi carrega por um wrapper fino. Um único comando treina em \"bottle\", exporta e copia para models/indust/ pronto para ser servido.\n\n• AGRO detector — SSD MobileNet V2 fine-tuned com TF Model Maker no Fruits-360 para maçã, laranja e tomate. Um COCO-SSD pré-treinado em TFLite também pode ser conectado diretamente quando o tempo é curto.\n\n• AGRO classificador de qualidade — MobileNet V2 com transfer learning em um dataset de frutas fresh-vs-rotten, produzindo uma cabeça leve de três classes (boa / defeituosa / verde) rodando em ~50–80 ms por detecção no Pi.\n\nTodos os scripts de treino foram escritos para um desenvolvedor sem experiência prévia em ML — cada passo é comentado ponta a ponta, comandos conda são listados, e um README caminha por download do dataset, treino, export e scp-para-Pi em ordem.",
        },
      },
      {
        heading: { en: "Performance on Pi 4 (8 GB)", pt: "Desempenho no Pi 4 (8 GB)" },
        body: {
          en: "The entire stack is sized to stay within a single Pi 4's budget:\n\n• End-to-end latency < 500 ms (PaDiM ~300–500 ms, SSD MobileNet V2 ~100–150 ms, MobileNet V2 classifier ~50–80 ms).\n• Live feed ≥ 3 FPS on the WebSocket.\n• RAM footprint for all three services < 4 GB, leaving headroom for capture buffers and the web UI.\n• CPU averages under 80% across the four A72 cores during inference.\n• Model swap from INDUST → AGRO (or the reverse) in under 5 seconds, via POST /api/system/module.\n• SQLite queries stay under 50 ms thanks to WAL mode and a small number of well-indexed tables (system_state, indust_results, agro_results, agro_detections).\n• A capture auto-prune keeps disk usage below 5 GB with a 30-day rolling window; the full system survives a 1-hour continuous run with no memory leaks and no crashes.\n\nA dedicated scripts/benchmark.py measures all of these on any given Pi so performance claims are reproducible, not aspirational.",
          pt: "A stack inteira é dimensionada para caber no orçamento de um único Pi 4:\n\n• Latência ponta a ponta < 500 ms (PaDiM ~300–500 ms, SSD MobileNet V2 ~100–150 ms, classificador MobileNet V2 ~50–80 ms).\n• Feed ao vivo ≥ 3 FPS no WebSocket.\n• Pegada de RAM dos três serviços < 4 GB, deixando folga para buffers de captura e a UI web.\n• CPU em média abaixo de 80% nos quatro núcleos A72 durante a inferência.\n• Troca de modelo INDUST → AGRO (ou vice-versa) em menos de 5 segundos, via POST /api/system/module.\n• Queries SQLite ficam abaixo de 50 ms graças ao modo WAL e um número pequeno de tabelas bem indexadas (system_state, indust_results, agro_results, agro_detections).\n• Um auto-prune de capturas mantém o uso de disco abaixo de 5 GB com uma janela rolante de 30 dias; o sistema completo sobrevive a uma execução contínua de 1 hora sem vazamentos de memória e sem crashes.\n\nUm scripts/benchmark.py dedicado mede todos esses números em qualquer Pi específico, de modo que as alegações de desempenho são reproduzíveis, não aspiracionais.",
        },
      },
      {
        heading: { en: "The SCADA Operator UI", pt: "A UI SCADA do Operador" },
        body: {
          en: "The design language is deliberate and opposite of generic AI: factory control room, not chatbot. Dark background around #0f1117 with a subtle grid texture, status colors borrowed from industrial HMIs (green for OK, amber for warn, red for fault, blue for info), monospaced typography for values and sans-serif for labels, blinking status dots, live FPS counters, gauge animations, timestamps on every reading.\n\nThe navigation splits along the two modules: INDUST pages (live view with heatmap overlay + anomaly gauge + verdict + measurements + category and threshold controls, history table with detail modal and CSV export, settings) and AGRO pages (live view with bounding boxes + count + per-fruit cards + size histogram, history, settings). A system page surfaces CPU / RAM / temperature gauges and per-service uptime, and a calibration wizard guides the operator through the checkerboard intrinsic-matrix routine. Charts are built with Recharts, the live canvas is plain HTML5 canvas driven by the WebSocket — no heavy video pipeline.",
          pt: "A linguagem de design é deliberada e oposta à de IA genérica: sala de controle de fábrica, não de chatbot. Fundo escuro em torno de #0f1117 com uma textura sutil de grade, cores de status emprestadas de IHMs industriais (verde para OK, âmbar para warn, vermelho para falha, azul para info), tipografia monoespaçada para valores e sans-serif para labels, status dots piscando, contadores de FPS ao vivo, animações de gauges, timestamps em toda leitura.\n\nA navegação se divide entre os dois módulos: páginas INDUST (live view com overlay de heatmap + gauge de anomalia + veredito + medições + controles de categoria e threshold, tabela de histórico com modal de detalhe e export CSV, settings) e páginas AGRO (live view com bounding boxes + contagem + cards por fruta + histograma de tamanhos, histórico, settings). Uma página de sistema expõe gauges de CPU / RAM / temperatura e uptime por serviço, e um wizard de calibração guia o operador pela rotina de matriz intrínseca com tabuleiro. Gráficos são construídos com Recharts, o canvas ao vivo é HTML5 canvas puro alimentado pelo WebSocket — sem pipeline pesado de vídeo.",
        },
      },
      {
        heading: { en: "Tech Stack", pt: "Stack Tecnológico" },
        body: {
          en: "Every piece is open-source and intentional:\n\n• OS — Raspberry Pi OS Bookworm 64-bit (required for TFLite).\n• Camera — libcamera + picamera2, Camera Module 3 NoIR (IMX708, 12 MP).\n• CV — OpenCV 4.10 (headless on the Pi) for undistort, contour segmentation and px→mm conversion.\n• ML training (PC) — Miniconda + TensorFlow 2.16/2.18, Anomalib 1.1, TF Model Maker, Keras.\n• ML inference (Pi) — tflite-runtime with XNNPACK acceleration; zero full-TF on the Pi.\n• API — FastAPI 0.115, Pydantic 2, Uvicorn.\n• Realtime — FastAPI native WebSocket at /ws/live.\n• DB — SQLite 3 with WAL mode.\n• Frontend — Next.js 16 (App Router), React 19, Tailwind CSS 4, Recharts, shadcn/ui.\n• Process management — systemd units with Restart=always and graceful shutdown hooks.\n\nSetup is automated through two shell scripts (scripts/download_models.sh, systemd install) and a detailed SetupGuide.md aimed at a reader who has never used the terminal — from flashing the SD card through Raspberry Pi Imager to opening the dashboard in a LAN browser.",
          pt: "Cada peça é open-source e intencional:\n\n• SO — Raspberry Pi OS Bookworm 64-bit (exigido pelo TFLite).\n• Câmera — libcamera + picamera2, Camera Module 3 NoIR (IMX708, 12 MP).\n• CV — OpenCV 4.10 (headless no Pi) para undistort, segmentação por contorno e conversão px→mm.\n• Treino ML (PC) — Miniconda + TensorFlow 2.16/2.18, Anomalib 1.1, TF Model Maker, Keras.\n• Inferência ML (Pi) — tflite-runtime com aceleração XNNPACK; zero TensorFlow completo no Pi.\n• API — FastAPI 0.115, Pydantic 2, Uvicorn.\n• Tempo real — WebSocket nativo do FastAPI em /ws/live.\n• Banco — SQLite 3 com modo WAL.\n• Frontend — Next.js 16 (App Router), React 19, Tailwind CSS 4, Recharts, shadcn/ui.\n• Gerenciamento de processo — unidades systemd com Restart=always e hooks de shutdown graceful.\n\nO setup é automatizado por dois scripts shell (scripts/download_models.sh, instalação do systemd) e um SetupGuide.md detalhado voltado para um leitor que nunca usou o terminal — do flash do SD card pelo Raspberry Pi Imager até abrir o dashboard em um browser da LAN.",
        },
      },
      {
        heading: { en: "Results", pt: "Resultados" },
        body: {
          en: "A complete, self-contained visual inspection platform that turns a $75 Raspberry Pi into a dual-purpose AI quality station — industrial anomaly detection and agricultural fruit grading — with zero cloud dependencies and full data sovereignty. The operator never gives up their data to a third party, never pays a subscription, and never needs an internet connection to run inference.\n\nArchitecturally the system proves that edge-first, module-separated design is viable for heterogeneous ML workloads on commodity hardware: INDUST and AGRO share only infrastructure (camera, measurement, API contract, UI shell), which keeps their code and their ML lifecycles independent while still presenting a unified experience to the operator. The same codebase will extend naturally to additional modules — the next planned iteration bridges to a VPS Mosquitto broker over MQTT so multiple field Pis can feed a central supervisory dashboard without losing local autonomy.",
          pt: "Uma plataforma completa e autocontida de inspeção visual que transforma um Raspberry Pi de US$ 75 em uma estação de qualidade com IA de propósito duplo — detecção de anomalias industriais e classificação de frutas agrícolas — com zero dependências de nuvem e soberania total dos dados. O operador nunca entrega seus dados a um terceiro, nunca paga mensalidade, e nunca precisa de internet para rodar inferência.\n\nArquiteturalmente o sistema prova que um design edge-first com módulos separados é viável para workloads de ML heterogêneas em hardware comum: INDUST e AGRO compartilham apenas infraestrutura (câmera, medição, contrato de API, shell da UI), o que mantém seus códigos e seus ciclos de vida de ML independentes enquanto ainda apresenta uma experiência unificada para o operador. A mesma base de código se estenderá naturalmente para módulos adicionais — a próxima iteração planejada liga a um broker Mosquitto em VPS via MQTT, permitindo que vários Pis de campo alimentem um dashboard supervisório central sem perder autonomia local.",
        },
      },
    ],
  },
  "industry-project-10": {
    title: "Project 10",
    subtitle: { en: "Coming soon", pt: "Em breve" },
    bannerImage: "/images/projects/industry/C2.png",
    career: "industry",
    sections: [{ heading: { en: "About", pt: "Sobre" }, body: { en: "Coming soon", pt: "Em breve" } }],
  },
  "industry-project-11": {
    title: "Project 11",
    subtitle: { en: "Coming soon", pt: "Em breve" },
    bannerImage: "/images/projects/industry/C3.png",
    career: "industry",
    sections: [{ heading: { en: "About", pt: "Sobre" }, body: { en: "Coming soon", pt: "Em breve" } }],
  },
  "industry-project-12": {
    title: "Project 12",
    subtitle: { en: "Coming soon", pt: "Em breve" },
    bannerImage: "/images/projects/industry/C4.png",
    career: "industry",
    sections: [{ heading: { en: "About", pt: "Sobre" }, body: { en: "Coming soon", pt: "Em breve" } }],
  },

  // ── IT Automation ─────────────────────────────────────────
  "julius-finance-bot": {
    title: "Julius — AI Finance SaaS",
    subtitle: {
      en: "An AI-powered personal finance PWA — chat your way through expense tracking",
      pt: "Um PWA de finanças pessoais com IA — registre seus gastos conversando",
    },
    bannerImage: "/images/projects/automation-it/julius-dashboard.jpeg",
    career: "automation-it",
    liveUrl: "https://julius-psi.vercel.app/login",
    sections: [
      {
        heading: { en: "What Julius Is", pt: "O que é o Julius" },
        body: {
          en: "Julius is a financial app that helps you organise your day-to-day expenses by talking to an AI personality — like sending a WhatsApp message, but to Julius (or Dona Hermínia, Seu Madruga, Trump, Christine Lagarde…). It's fun, a little comedic, and makes tracking expenses actually enjoyable.\n\nBecause it's a Progressive Web App built with Next.js 14, it lives in your pocket. The moment you spend money, log it: type something like \"spent €3 on lunch\" or snap a photo of the receipt. Julius detects the category automatically using GPT-4o — so you don't have to think about it. A live dashboard tracks where your money is going day by day, with CSV/PDF exports for full financial control.",
          pt: "Julius é um app de finanças que te ajuda a organizar os gastos do dia a dia conversando com uma personalidade IA — como mandar uma mensagem no WhatsApp, mas para o Julius (ou Dona Hermínia, Seu Madruga, Trump, Christine Lagarde…). É divertido, levemente cômico, e torna o controle de gastos prazeroso.\n\nComo é um Progressive Web App feito com Next.js 14, ele vive no seu bolso. Na hora que você gasta, registra: digita algo como \"gastei €3 no almoço\" ou tira foto do recibo. O Julius detecta a categoria automaticamente usando GPT-4o — sem você precisar pensar. Um dashboard ao vivo mostra onde o dinheiro vai dia a dia, com export CSV/PDF para controle financeiro completo.",
        },
        image: "/images/projects/automation-it/julius-chat-conversation.jpeg",
        imageCaption: {
          en: "Chat with Julius — natural language in, structured expenses out",
          pt: "Conversando com o Julius — linguagem natural entra, gastos estruturados saem",
        },
      },
      {
        heading: { en: "The Chat Flow & Two-Step Commit", pt: "O Fluxo do Chat & Confirmação em Duas Etapas" },
        body: {
          en: "Julius never saves a transaction automatically — the user always confirms. The flow:\n\nUser types → optimistic UI insert → POST to the julius-chat Supabase Edge Function (Deno + TypeScript) → OpenAI API with response_format: json_object → JSON back → render in chat.\n\nThe Edge Function picks the system prompt for the active persona and region, injects today's date, and forces JSON output. OpenAI replies with one of two shapes — either a plain conversation, or a registo with the extracted transaction (valor, tag, descricao, dia, hora). When a registo is detected, a TransactionConfirm card appears and the pending transaction is cached in localStorage so it survives navigation.\n\nOn confirm: the session token is refreshed if expiring (mobile PWA safety), the date is converted from DD/MM/YYYY to ISO, the row is inserted into Supabase, the local cache is cleared, and React Query invalidates ['transactions'] + ['stats'] so the Extrato and Dashboard refresh automatically — no reload needed. A double-click guard prevents duplicate inserts.",
          pt: "O Julius nunca salva uma transação automaticamente — o usuário sempre confirma. O fluxo:\n\nUsuário digita → insert otimista na UI → POST para a Edge Function julius-chat no Supabase (Deno + TypeScript) → API da OpenAI com response_format: json_object → JSON de volta → renderiza no chat.\n\nA Edge Function escolhe o system prompt da persona ativa e da região, injeta a data de hoje, e força output JSON. A OpenAI devolve uma de duas formas — ou uma conversa, ou um registo com a transação extraída (valor, tag, descricao, dia, hora). Quando um registo é detectado, um card TransactionConfirm aparece e a transação pendente é guardada no localStorage para sobreviver à navegação.\n\nNo confirmar: o token da sessão é refrescado se estiver para expirar (segurança PWA mobile), a data é convertida de DD/MM/AAAA para ISO, a linha é inserida no Supabase, o cache local é limpo, e o React Query invalida ['transactions'] + ['stats'] para Extrato e Dashboard atualizarem sozinhos — sem reload. Um guard contra double-click previne inserts duplicados.",
        },
        image: "/images/projects/automation-it/julius-chat-confirm.jpeg",
        imageCaption: {
          en: "Transaction confirmation card — Julius extracts, the user commits",
          pt: "Card de confirmação — o Julius extrai, o usuário confirma",
        },
      },
      {
        heading: { en: "Dashboard, Extrato & Reports", pt: "Dashboard, Extrato & Relatórios" },
        body: {
          en: "The Dashboard is the visual brain — Recharts powers a stacked bar chart of spending per day plus a category donut chart. Stats cards show period totals and daily averages, with budget-progress bars per category that turn red when you overshoot the limites set in Settings.\n\nThe Extrato (statement) is the full transaction list — grouped by day with a friendly formatDate helper that renders \"Hoje\", \"Ontem\" or \"5 de abril\" instead of raw dates. Filter by period, category or year, edit or delete inline, and export to CSV. A monthly PDF report can also be generated — including the full category breakdown and daily spending list — perfect for personal accounting or sharing with an accountant.",
          pt: "O Dashboard é o cérebro visual — o Recharts alimenta um gráfico de barras empilhadas de gasto por dia mais um donut chart por categoria. Stats cards mostram totais do período e médias diárias, com barras de progresso de orçamento por categoria que viram vermelhas quando você estoura os limites definidos nos Settings.\n\nO Extrato é a lista completa de transações — agrupado por dia com um helper formatDate que renderiza \"Hoje\", \"Ontem\" ou \"5 de abril\" em vez de datas cruas. Filtra por período, categoria ou ano, edita ou apaga inline, e exporta para CSV. Um relatório mensal em PDF também pode ser gerado — com a categoria completa e a lista de gastos diários — perfeito para contabilidade pessoal ou compartilhar com um contador.",
        },
        images: [
          "/images/projects/automation-it/julius-dashboard.jpeg",
          "/images/projects/automation-it/julius-extrato.jpeg",
          "/images/projects/automation-it/julius-financial-report.jpeg",
        ],
      },
      {
        heading: { en: "The Persona System", pt: "O Sistema de Personas" },
        body: {
          en: "Julius is not the only AI personality. There's a full registry of personas — Julius, Dona Hermínia, Seu Madruga, Fernando, Christine Lagarde, Trump, Obama — each with its own character, system prompt, and available regions (PT / BR / EU / US). Each persona is a typed PersonaConfig object exporting: an id, a system-prompt function (locale-aware), an availableRegions list, and getConfirmMessages() which returns an array of functions generating random \"transaction confirmed\" quips in that character's voice.\n\nThe active persona is stored in user_settings.persona, loaded into a Zustand store on boot, and passed to the Edge Function as persona_id — which calls getPrompt(persona_id, region) to build the right system prompt. Adding a new persona is a single new file under lib/prompts/personas/.",
          pt: "O Julius não é a única personalidade IA. Existe um registry completo de personas — Julius, Dona Hermínia, Seu Madruga, Fernando, Christine Lagarde, Trump, Obama — cada uma com seu caráter, system prompt e regiões disponíveis (PT / BR / EU / US). Cada persona é um objeto PersonaConfig tipado que exporta: um id, uma função de system prompt (sensível ao locale), uma lista availableRegions, e getConfirmMessages() que retorna um array de funções gerando frases aleatórias de \"transação confirmada\" na voz do personagem.\n\nA persona ativa é guardada em user_settings.persona, carregada num store Zustand no boot, e passada para a Edge Function como persona_id — que chama getPrompt(persona_id, region) pra montar o system prompt certo. Adicionar uma nova persona é só criar um novo arquivo em lib/prompts/personas/.",
        },
        image: "/images/projects/automation-it/julius-settings.jpeg",
        imageCaption: {
          en: "Settings — region, currency, persona, budget limits and account controls",
          pt: "Settings — região, moeda, persona, limites de orçamento e controles da conta",
        },
      },
      {
        heading: { en: "Stack & Architecture", pt: "Stack & Arquitetura" },
        body: {
          en: "• Framework — Next.js 14 (App Router) + TypeScript, file-based routing and server components, PWA-ready manifest with installable icons and aggressive token auto-refresh for background-suspended mobile browsers.\n• Styling — Tailwind CSS 4 with a custom theme of CSS variables (julius-card, julius-text, julius-muted, julius-border, julius-accent, julius-success, julius-danger, julius-warning, julius-outer) all defined in app/globals.css. shadcn/ui as the base component layer.\n• Backend-as-a-service — Supabase: Auth (magic link + password), Postgres database, and Deno-based Edge Functions hosting the julius-chat and delete-account endpoints.\n• Server state — React Query (@tanstack/react-query) with two query keys driving everything: ['transactions', periodo, tag?, year?] and ['stats', periodo, tag?, year?]. Every mutation invalidates both, triggering a background refetch with no manual reload.\n• Client state — Zustand for in-memory user settings (currency, enabled categories, budget limites, region, persona). Components read from Zustand only, never directly from Supabase.\n• AI — OpenAI gpt-4o-mini for text and gpt-4o for receipt image scanning, both forced to JSON output.\n• Charts — Recharts for the stacked bar chart and donut chart on the dashboard.\n• Deployment — Vercel for the frontend, Supabase Cloud for the backend, deployed as a fully managed serverless stack.\n\nDatabase schema: three tables — transacoes, user_settings and chat_history — with RLS enforced through auth.users foreign keys. Categories live in a single source of truth (lib/categories.ts) with a strict TypeScript Tag union — adding a category requires touching exactly three files.",
          pt: "• Framework — Next.js 14 (App Router) + TypeScript, roteamento por arquivos e server components, manifest PWA pronto com ícones instaláveis e refresh agressivo de token para browsers mobile suspensos em background.\n• Styling — Tailwind CSS 4 com tema customizado de CSS variables (julius-card, julius-text, julius-muted, julius-border, julius-accent, julius-success, julius-danger, julius-warning, julius-outer) todas definidas em app/globals.css. shadcn/ui como camada base de componentes.\n• Backend-as-a-service — Supabase: Auth (magic link + senha), banco Postgres e Edge Functions em Deno hospedando os endpoints julius-chat e delete-account.\n• Estado de servidor — React Query (@tanstack/react-query) com duas query keys orquestrando tudo: ['transactions', periodo, tag?, year?] e ['stats', periodo, tag?, year?]. Toda mutação invalida as duas, disparando refetch em background sem reload manual.\n• Estado de cliente — Zustand pra settings em memória (moeda, categorias ativas, limites de orçamento, região, persona). Componentes leem só do Zustand, nunca direto do Supabase.\n• IA — OpenAI gpt-4o-mini para texto e gpt-4o para escaneamento de imagens de recibo, ambos com output forçado a JSON.\n• Gráficos — Recharts para o gráfico de barras empilhadas e o donut chart no dashboard.\n• Deploy — Vercel pro frontend, Supabase Cloud pro backend, implantado como stack serverless totalmente gerenciado.\n\nSchema do banco: três tabelas — transacoes, user_settings e chat_history — com RLS forçado por foreign keys de auth.users. As categorias vivem numa única fonte da verdade (lib/categories.ts) com um union Tag estrito do TypeScript — adicionar categoria exige tocar exatamente três arquivos.",
        },
      },
      {
        heading: { en: "Results", pt: "Resultados" },
        body: {
          en: "Julius is live in production at julius-psi.vercel.app — a fully working AI-driven personal finance PWA used daily, with chat-based expense logging, AI receipt scanning, conversational personas, real-time dashboards, CSV/PDF exports and a tight feedback loop between mutation and UI thanks to React Query's invalidation strategy. Built end-to-end as a solo project — frontend, Edge Functions, prompt engineering, database schema, RLS policies and PWA install flow.",
          pt: "O Julius está no ar em produção em julius-psi.vercel.app — um PWA de finanças pessoais com IA totalmente funcional usado no dia a dia, com registro de gastos por chat, scan de recibos por IA, personas conversacionais, dashboards em tempo real, export CSV/PDF e um loop de feedback apertado entre mutação e UI graças à estratégia de invalidação do React Query. Construído ponta a ponta como projeto solo — frontend, Edge Functions, prompt engineering, schema do banco, políticas RLS e fluxo de install do PWA.",
        },
      },
    ],
  },
  "ai-data-platform-iot": {
    title: "AI Data Platform",
    subtitle: {
      en: "Self-hosted industrial IoT monitoring platform — six containerized services orchestrated by Docker Compose, with full dev/prod separation and layered security",
      pt: "Plataforma self-hosted de monitoramento industrial IoT — seis serviços containerizados orquestrados por Docker Compose, com separação dev/prod completa e segurança em camadas",
    },
    bannerImage: "/images/projects/industry/ai-data-platform-architecture.png",
    career: "industry",
    sections: [
      {
        heading: { en: "The Challenge", pt: "O Desafio" },
        body: {
          en: "Build a production-grade industrial IoT monitoring platform with one fundamental rule: total control over the data. No third-party SaaS, no monthly subscription, no vendor lock-in. A sensor publishes a measurement via MQTT and seconds later it's already on a live Grafana dashboard, written to a time-series database, and processed by an analytics service that can fire alerts — all running in containers, anywhere, from a developer laptop to an Ubuntu VPS in the cloud.\n\nThe second non-negotiable was real separation between development and production. The same docker-compose.yml must run on a dev machine without TLS and with debug ports open, and on the VPS under an overlay that closes everything, enforces TLS on MQTT, and exposes Grafana only behind Nginx with HTTPS Let's Encrypt. Same code, same volume state, different environments — without if/else scattered across config files.",
          pt: "Construir uma plataforma de monitoramento IoT industrial de nível produção com uma regra fundamental: controle total sobre os dados. Nada de SaaS de terceiros, nada de mensalidade, nada de vendor lock-in. Um sensor publica uma medição via MQTT e segundos depois ela já está num dashboard Grafana ao vivo, gravada num banco de séries temporais, e processada por um serviço analítico que pode disparar alertas — tudo rodando em containers, em qualquer lugar, do laptop do desenvolvedor à VPS Ubuntu na nuvem.\n\nA segunda premissa inegociável era a separação real entre desenvolvimento e produção. O mesmo docker-compose.yml precisa rodar na máquina de dev sem TLS e com portas abertas para debug, e na VPS sob um overlay que fecha tudo, exige TLS no MQTT e expõe o Grafana apenas via Nginx com HTTPS Let's Encrypt. Mesmo código, mesmo estado dos volumes, ambientes diferentes — sem if/else espalhados pelos arquivos de configuração.",
        },
        image: "/images/projects/industry/ai-data-platform-concept.jpg",
        imageCaption: {
          en: "Concept render — visualization only, not the actual deployment",
          pt: "Render conceitual — apenas visualização, não o deployment real",
        },
      },
      {
        heading: { en: "The Architecture", pt: "A Arquitetura" },
        body: {
          en: "Six services orchestrated by Docker Compose, each in an isolated container, all running as non-root users:\n\n• Mosquitto — the entry point. Sensors (ESP32, Raspberry Pi, Node-RED gateways, any MQTT client) publish structured JSON to a hierarchical topic (mov/dados/#). Authentication is mandatory in both environments — never anonymous — with passwords generated by OpenSSL with 256 bits of entropy and hashed inside the container by a custom entrypoint that reads credentials from the .env.\n\n• Telegraf — the collector. Subscribes to mov/dados/# and writes each message to InfluxDB using the json_v2 parser configured to extract timestamp, tags (device, location, type, client) and fields (numeric values like temperature, humidity, pressure). A single declarative .conf file — no code, no maintenance.\n\n• InfluxDB — the heart. Time-series database optimized for high volumes of sensor data, with Flux queries for efficient temporal aggregation. Self-initializes on first boot via DOCKER_INFLUXDB_INIT_* variables. In production, the database has no exposed port — only reachable through the internal Docker network.\n\n• Grafana — the interface. Connects to InfluxDB through a YAML-provisioned datasource, so nothing needs to be created in the UI. Dashboards are .json files in provisioning/dashboards/ loaded automatically with updateIntervalSeconds: 10.\n\n• Python Analytics — the analytical brain. A lean script (main.py) running in an infinite loop, reading the latest temperature from InfluxDB every 10 seconds, comparing against a configurable threshold (default 30°C), classifying as Normal or CRITICAL, and writing the insight back to the database. Threshold and interval are parameterized via environment variables.\n\n• Backup container — Alpine minimalist, no custom code, mounts grafana_data and influxdb_data read-only, generates daily .tar.gz files with 7-day local retention.\n\nThe data flow: [IoT Sensors] → [MQTT] → [Mosquitto] → [Telegraf] → [InfluxDB] ↔ [Grafana], with Python Analytics reading from and writing back to InfluxDB, and the backup service spanning Grafana and InfluxDB volumes — feeding both local archives and an optional encrypted remote layer.",
          pt: "Seis serviços orquestrados por Docker Compose, cada um num container isolado, todos rodando como usuários não-root:\n\n• Mosquitto — o ponto de entrada. Sensores (ESP32, Raspberry Pi, gateways Node-RED, qualquer cliente MQTT) publicam JSON estruturado num tópico hierárquico (mov/dados/#). A autenticação é obrigatória nos dois ambientes — nunca anônimo — com senhas geradas pelo OpenSSL com 256 bits de entropia e hashed dentro do container por um entrypoint custom que lê as credenciais do .env.\n\n• Telegraf — o coletor. Assina mov/dados/# e grava cada mensagem no InfluxDB usando o parser json_v2 configurado para extrair timestamp, tags (dispositivo, localização, tipo, cliente) e fields (valores numéricos como temperatura, umidade, pressão). Um único arquivo .conf declarativo — sem código, sem manutenção.\n\n• InfluxDB — o coração. Banco de séries temporais otimizado para volumes altos de dados sensoriais, com queries Flux para agregação temporal eficiente. Inicializa-se sozinho na primeira subida via variáveis DOCKER_INFLUXDB_INIT_*. Em produção, o banco não tem porta exposta — só acessível pela rede interna do Docker.\n\n• Grafana — a interface. Conecta no InfluxDB via uma datasource provisionada por YAML, então não precisa criar nada na UI. Dashboards são arquivos .json em provisioning/dashboards/ carregados automaticamente com updateIntervalSeconds: 10.\n\n• Analytics Python — o cérebro analítico. Um script enxuto (main.py) rodando em loop infinito, lendo a última temperatura do InfluxDB a cada 10 segundos, comparando com um threshold configurável (default 30°C), classificando como Normal ou CRÍTICO, e gravando o insight de volta no banco. Threshold e intervalo parametrizáveis via variáveis de ambiente.\n\n• Container de Backup — Alpine minimalista, sem código próprio, monta grafana_data e influxdb_data em modo read-only, gera .tar.gz diários com retenção local de 7 dias.\n\nO fluxo de dados: [Sensores IoT] → [MQTT] → [Mosquitto] → [Telegraf] → [InfluxDB] ↔ [Grafana], com Analytics Python lendo e escrevendo de volta no InfluxDB, e o serviço de backup atravessando os volumes do Grafana e InfluxDB — alimentando arquivos locais e uma camada remota criptografada opcional.",
        },
        image: "/images/projects/industry/ai-data-platform-architecture.png",
        imageCaption: {
          en: "Conceptual data flow diagram — for illustration of the architecture, not a screenshot of the running system",
          pt: "Diagrama conceitual do fluxo de dados — ilustração da arquitetura, não é uma captura do sistema em execução",
        },
      },
      {
        heading: { en: "Dev / Production Separation", pt: "Separação Dev / Produção" },
        body: {
          en: "One of the most important architectural decisions of the project. Instead of two parallel codebases or a single compose file polluted with conditionals, the platform uses the base + overlay pattern: docker-compose.yml is the universal base (all services, volumes, healthchecks, networks), and docker-compose.prod.yml is an overlay that applies production restrictions when combined with `docker compose -f docker-compose.yml -f docker-compose.prod.yml up -d`.\n\nThe overlay does three things: closes Mosquitto ports leaving only 8883 (TLS), removes the direct port exposure of Grafana and InfluxDB (empty {}), and adds an Nginx service that reverse-proxies HTTPS to Grafana using Let's Encrypt certificates mounted from /etc/letsencrypt. In development, a third file (docker-compose.override.yml, generated by the wizard) reopens ports 3000 (Grafana) and 8086 (InfluxDB) locally, without touching the base.\n\nThe result: the same command (`docker compose up -d`) does different things in different environments, and the developer never has to remember which flag to pass — the right behavior is the default in each place.",
          pt: "Uma das decisões arquiteturais mais importantes do projeto. Em vez de duas bases de código paralelas ou um único compose poluído com condicionais, a plataforma usa o padrão base + overlay: docker-compose.yml é a base universal (todos os serviços, volumes, healthchecks, redes), e docker-compose.prod.yml é um overlay que aplica as restrições de produção quando combinado com `docker compose -f docker-compose.yml -f docker-compose.prod.yml up -d`.\n\nO overlay faz três coisas: fecha as portas do Mosquitto deixando apenas a 8883 (TLS), remove a exposição direta do Grafana e do InfluxDB ({} vazio), e acrescenta um serviço Nginx que faz proxy reverso HTTPS para o Grafana usando certificados Let's Encrypt montados de /etc/letsencrypt. Em desenvolvimento, um terceiro arquivo (docker-compose.override.yml, gerado pelo wizard) reabre as portas 3000 (Grafana) e 8086 (InfluxDB) localmente, sem mexer na base.\n\nO resultado: o mesmo comando (`docker compose up -d`) faz coisas diferentes em ambientes diferentes, e o desenvolvedor nunca precisa lembrar qual flag passar — o comportamento certo é o default em cada lugar.",
        },
      },
      {
        heading: { en: "Security in Layers", pt: "Segurança em Camadas" },
        body: {
          en: "The platform implements protection across six independent layers:\n\n• Network — UFW firewall configured by script (setup_firewall.sh) that opens only 22 (SSH), 80, 443 and 8883. Everything else is DROP. In production, ports 1883 and 9001 of Mosquitto don't exist either in the container or in the firewall.\n\n• Transport — TLS 1.2+ mandatory on MQTT 8883 and HTTPS 443. The deploy.sh generates self-signed certificates on first run so the stack comes up; later, setup_ssl.sh replaces them with valid Let's Encrypt certs via Certbot standalone.\n\n• Authentication — Passwords generated by OpenSSL with 256–512 bits of entropy, stored in .env (chmod 600), and injected into containers as environment variables. Mosquitto receives username and password via a custom entrypoint that runs mosquitto_passwd at boot, overwriting the passwd file to guarantee consistency.\n\n• Containers — All services run with explicit non-root UID/GID: Mosquitto 1883:1883, InfluxDB 1000:1000, Grafana 472:472, Telegraf 999:999, Analytics 1000 (created in the Dockerfile). The wizard adjusts permissions on mounted directories before bringing containers up.\n\n• Healthchecks — Each service has its own healthcheck with calibrated interval, timeout, retries and start_period. Telegraf depends on Mosquitto and InfluxDB being healthy (condition: service_healthy) before starting. Grafana and Analytics depend on InfluxDB. Healthcheck failure triggers restart: unless-stopped.\n\n• Backup — Local layer (daily, 7-day retention) plus optional remote layer (daily, 30-day retention, AES-256 via Rclone crypt). RTO ~30 minutes, RPO ~24 hours.",
          pt: "A plataforma implementa proteção em seis camadas independentes:\n\n• Rede — Firewall UFW configurado por script (setup_firewall.sh) que abre apenas 22 (SSH), 80, 443 e 8883. Tudo o mais é DROP. Em produção, as portas 1883 e 9001 do Mosquitto não existem nem no container nem no firewall.\n\n• Transporte — TLS 1.2+ obrigatório no MQTT 8883 e no HTTPS 443. O deploy.sh gera certificados autoassinados na primeira execução para que a stack suba; depois, o setup_ssl.sh substitui por certificados válidos do Let's Encrypt via Certbot standalone.\n\n• Autenticação — Senhas geradas pelo OpenSSL com 256–512 bits de entropia, armazenadas no .env (chmod 600) e injetadas nos containers como variáveis de ambiente. O Mosquitto recebe usuário e senha via entrypoint custom que executa mosquitto_passwd no boot, sobrescrevendo o arquivo passwd para garantir consistência.\n\n• Containers — Todos os serviços rodam com UID/GID não-root explícitos: Mosquitto 1883:1883, InfluxDB 1000:1000, Grafana 472:472, Telegraf 999:999, Analytics 1000 (criado no Dockerfile). O wizard ajusta as permissões dos diretórios montados antes de subir os containers.\n\n• Healthchecks — Cada serviço tem um healthcheck próprio com interval, timeout, retries e start_period calibrados. O Telegraf depende do Mosquitto e do InfluxDB estarem saudáveis (condition: service_healthy) antes de subir. O Grafana e o Analytics dependem do InfluxDB. Falha de healthcheck dispara restart: unless-stopped.\n\n• Backup — Camada local (diário, retenção 7 dias) mais camada remota opcional (diário, retenção 30 dias, AES-256 via Rclone crypt). RTO ~30 minutos, RPO ~24 horas.",
        },
      },
      {
        heading: { en: "Setup Wizard & Operations", pt: "Setup Wizard & Operações" },
        body: {
          en: "Most of the operational complexity is hidden behind a single command: `bash scripts/setup_wizard.sh`. The wizard is an interactive Bash script that asks for the environment (Development / Staging / Production), which components to install (each one can be disabled), and Analytics parameters (threshold, interval). Then it does everything: generates the .env with random credentials, creates the directory structure with the right permissions, generates the appropriate docker-compose.override.yml, and triggers deploy.sh automatically.\n\nIn production, deploy.sh adds an extra phase: it verifies SSL certificates, generates self-signed ones if missing, updates mosquitto.conf to include the 8883 listener with TLS (only if it doesn't already exist — idempotent), and brings up the stack with both compose files.\n\nThe operational workflow is deliberately git-centric: the developer edits dashboards in local Grafana, exports them with `bash scripts/export_grafana_dashboards.sh` (which serializes each dashboard to JSON in grafana/provisioning/dashboards/), commits, pushes. On the VPS, `git pull` + `bash scripts/update.sh` detects what changed and applies it — restarting only what needs to restart, with no downtime for the rest.\n\nThe scripts are designed to be defensive: everything checks prerequisites before acting, all destructive commands ask for confirmation, and an existing .env is never overwritten (the wizard only generates if it doesn't exist).\n\nDocumentation lives in instructions/ numbered 01- through 06- to enforce linear reading: 01 is the index, 02 is local setup, 03 is daily workflow, 04 is VPS deploy, 05 is troubleshooting, 06 is MQTT certificate renewal. Each file is self-contained — the reader goes to a single file and has everything they need for that scenario.",
          pt: "A maior parte da complexidade operacional está escondida atrás de um único comando: `bash scripts/setup_wizard.sh`. O wizard é um script Bash interativo que pergunta o ambiente (Development / Staging / Production), quais componentes instalar (cada um pode ser desativado) e os parâmetros do Analytics (threshold, intervalo). Depois faz tudo: gera o .env com credenciais aleatórias, cria a estrutura de diretórios com as permissões certas, gera o docker-compose.override.yml apropriado e dispara o deploy.sh automaticamente.\n\nEm produção, o deploy.sh adiciona uma fase extra: verifica certificados SSL, gera autoassinados se faltarem, atualiza o mosquitto.conf para incluir o listener 8883 com TLS (apenas se ainda não existir — é idempotente) e sobe a stack com os dois arquivos compose.\n\nO fluxo operacional é deliberadamente git-centrado: o desenvolvedor edita dashboards no Grafana local, exporta com `bash scripts/export_grafana_dashboards.sh` (que serializa cada dashboard para JSON em grafana/provisioning/dashboards/), commita, dá push. Na VPS, `git pull` + `bash scripts/update.sh` detecta o que mudou e aplica — reiniciando apenas o que precisa reiniciar, sem downtime para o resto.\n\nOs scripts foram desenhados para serem defensivos: tudo verifica pré-requisitos antes de agir, todos os comandos destrutivos pedem confirmação, e o .env existente nunca é sobrescrito (o wizard só gera se não existir).\n\nA documentação fica em instructions/ numerada de 01- a 06- para enforçar leitura linear: 01 é o índice, 02 é o setup local, 03 é o workflow diário, 04 é o deploy em VPS, 05 é troubleshooting, 06 é renovação de certificados MQTT. Cada arquivo é autocontido — o leitor vai a um único arquivo e tem tudo que precisa para aquele cenário.",
        },
        image: "/images/projects/industry/ai-data-platform-rpi-panel.webp",
        imageCaption: {
          en: "Conceptual visualization of the edge node — the platform accepts any MQTT client, this image is illustrative only",
          pt: "Visualização conceitual do edge node — a plataforma aceita qualquer cliente MQTT, esta imagem é apenas ilustrativa",
        },
      },
      {
        heading: { en: "Tech Stack", pt: "Stack Tecnológico" },
        body: {
          en: "Entirely based on consolidated open-source tooling, with zero proprietary dependencies:\n\n• Broker — Eclipse Mosquitto 2.x with TLS 1.2+, password-hashed authentication and persistent volume.\n• Collector — Telegraf 1.29 with mqtt_consumer input plugin (json_v2 parser) and influxdb_v2 output plugin. Single config file, zero code.\n• Database — InfluxDB 2.x with single bucket (mov_dados by default), configurable organization and admin token generated by the wizard. Flux queries for efficient temporal aggregation.\n• Visualization — Grafana 10.3.3 with datasource and dashboards provisioned via YAML — nothing manually created in the UI persists in Git, because the source of truth is the filesystem.\n• Analytics — Python 3.12 slim with influxdb-client>=1.36.0. A single dependency, a single file (main.py), graceful shutdown via SIGTERM/SIGINT.\n• Reverse proxy — Nginx alpine fronting Grafana, with Let's Encrypt via Certbot, security headers (X-Frame-Options, X-Content-Type-Options, HSTS), gzip and WebSocket support for Grafana Live.\n• Operations — Bash for setup/deploy/update/backup scripts, OpenSSL for credential generation, Certbot for SSL, UFW for firewall, Rclone for encrypted remote backup.\n• Orchestration — Docker Compose with the base + overlay pattern (docker-compose.yml + docker-compose.prod.yml), named volumes for persistent data, and healthchecks with service_healthy dependencies on every connection.\n\nThe canonical message format is enforced by the Telegraf parser: clients publish to mov/dados/<device_id> a JSON with three top-level keys — timestamp (ISO 8601 UTC with milliseconds), tags (object with dispositivo, localizacao, tipo, cliente) and fields (object with numeric values).",
          pt: "Inteiramente baseado em ferramentas open-source consagradas, sem dependências proprietárias:\n\n• Broker — Eclipse Mosquitto 2.x com TLS 1.2+, autenticação por senha hashed e persistência em volume.\n• Coletor — Telegraf 1.29 com input plugin mqtt_consumer (parser json_v2) e output plugin influxdb_v2. Single config file, zero código.\n• Banco — InfluxDB 2.x com bucket único (mov_dados por padrão), organização configurável e token de admin gerado pelo wizard. Queries em Flux para agregação temporal eficiente.\n• Visualização — Grafana 10.3.3 com datasource e dashboards provisionados via YAML — nada criado manualmente na UI persiste no Git, porque o source of truth é o filesystem.\n• Analytics — Python 3.12 slim com influxdb-client>=1.36.0. Uma única dependência, um único arquivo (main.py), graceful shutdown via SIGTERM/SIGINT.\n• Proxy reverso — Nginx alpine na frente do Grafana, com Let's Encrypt via Certbot, headers de segurança (X-Frame-Options, X-Content-Type-Options, HSTS), gzip e suporte a WebSocket para Grafana Live.\n• Operação — Bash para os scripts de setup/deploy/update/backup, OpenSSL para geração de credenciais, Certbot para SSL, UFW para firewall, Rclone para o backup remoto criptografado.\n• Orquestração — Docker Compose com padrão base + overlay (docker-compose.yml + docker-compose.prod.yml), volumes nomeados para dados persistentes e healthchecks com dependências service_healthy em todas as conexões.\n\nO formato canônico de mensagem é enforçado pelo parser do Telegraf: clientes publicam em mov/dados/<id_do_dispositivo> um JSON com três chaves no topo — timestamp (ISO 8601 UTC com milissegundos), tags (objeto com dispositivo, localizacao, tipo, cliente) e fields (objeto com valores numéricos).",
        },
      },
      {
        heading: { en: "Backup & Recovery", pt: "Backup & Recuperação" },
        body: {
          en: "Data protection is treated as a first-class citizen. A dedicated container (mov_backup, based on Alpine 3.19) mounts grafana_data and influxdb_data read-only and runs a shell script in an infinite loop: generates a timestamped .tar.gz, deletes backups older than 7 days, and sleeps 24 hours. Everything configurable via BACKUP_INTERVAL and RETENTION_DAYS.\n\nThe remote layer is optional and configured by a separate wizard (setup_remote_backup.sh) that installs Rclone, offers Google Drive (15 GB), MEGA (20 GB), OneDrive (5 GB) or Dropbox (2 GB), and asks whether to enable encryption (AES-256 via Rclone crypt — without the password, the remote files are useless). The encryption password lives in .env as BACKUP_CRYPT_PASSWORD with 256 bits of entropy.\n\nRestore is manual and documented: stop containers, extract the .tar.gz into grafana/data/ and influxdb/data/, fix permissions (chown -R 472:472 and chown -R 1000:1000), and bring everything back up. RTO ~30 minutes.",
          pt: "A proteção dos dados é tratada como cidadã de primeira classe. Um container dedicado (mov_backup, baseado em Alpine 3.19) monta grafana_data e influxdb_data em modo read-only e roda um script shell em loop infinito: gera um .tar.gz com timestamp, deleta backups com mais de 7 dias e dorme 24 horas. Tudo configurável via BACKUP_INTERVAL e RETENTION_DAYS.\n\nA camada remota é opcional e configurada por um wizard separado (setup_remote_backup.sh) que instala Rclone, oferece Google Drive (15 GB), MEGA (20 GB), OneDrive (5 GB) ou Dropbox (2 GB), e pergunta se quer ativar criptografia (AES-256 via Rclone crypt — sem a senha, os arquivos remotos são inúteis). A senha de criptografia fica no .env como BACKUP_CRYPT_PASSWORD com 256 bits de entropia.\n\nA restauração é manual e documentada: parar os containers, extrair o .tar.gz para dentro de grafana/data/ e influxdb/data/, corrigir permissões (chown -R 472:472 e chown -R 1000:1000) e subir tudo de novo. RTO ~30 minutos.",
        },
      },
      {
        heading: { en: "Results", pt: "Resultados" },
        body: {
          en: "A self-hosted industrial IoT monitoring stack that gives operators the same visual and analytical power offered by commercial IoT SaaS platforms (typically $50–200/month) — but with full data sovereignty, no recurring fees, and a setup time of around 10 minutes through the interactive wizard. LGPD/GDPR friendly by design: nothing leaves the operator's server unless explicitly opted in.\n\nThe platform is in production and operational. Some pieces are still evolving: the Analytics service currently monitors only temperature (the architecture allows adding new rules easily, but they're not yet written), the HTTPS block in Nginx default.conf still has to be manually uncommented after setup_ssl.sh runs (a future iteration of the script will automate this), and the remote backup, while functional, still lacks automated restore tests — only manual validation.",
          pt: "Um stack self-hosted de monitoramento IoT industrial que dá aos operadores o mesmo poder visual e analítico oferecido por plataformas IoT SaaS comerciais (tipicamente $50–200/mês) — mas com soberania total dos dados, sem mensalidades, e tempo de setup de cerca de 10 minutos via wizard interativo. LGPD/GDPR friendly por design: nada sai do servidor do operador a menos que seja explicitamente escolhido.\n\nA plataforma está em produção e operacional. Algumas peças seguem em evolução: o serviço Analytics atualmente monitora apenas temperatura (a arquitetura permite adicionar novas regras facilmente, mas elas ainda não foram escritas), o bloco HTTPS no default.conf do Nginx ainda precisa ser descomentado manualmente após o setup_ssl.sh rodar (uma futura iteração do script vai automatizar isso), e o backup remoto, apesar de funcional, ainda não tem testes de restauração automatizados — só validação manual.",
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
  "hotas-remote-control": {
    title: "HOTAS Warthog — Internet Remote Control",
    subtitle: {
      en: "Real-time remote control of hardware over the internet with a military-grade HOTAS joystick, MQTT, Raspberry Pi and WebRTC",
      pt: "Controle remoto de hardware em tempo real pela internet com joystick militar HOTAS, MQTT, Raspberry Pi e WebRTC",
    },
    bannerImage: "/images/projects/industry/hotas-remote-workstation.jpeg",
    career: "industry",
    sections: [
      {
        heading: { en: "The Challenge", pt: "O Desafio" },
        body: {
          en: "Controlling physical hardware over the internet in real time — with the precision and responsiveness of a local wired connection. The goal was to let an operator sit at a desk with a Thrustmaster HOTAS Warthog A-10C (military-spec flight stick and throttle), and have every axis movement and button press travel across the internet to a Raspberry Pi driving motors on a remote device — with minimal latency, live video feedback, full telemetry, and a fail-safe system that guarantees the device stops immediately if communication is lost.\n\nThe first target platform is a UGV (Unmanned Ground Vehicle), but the architecture is fully generic — anything controllable via GPIO, PWM, serial or I2C can be driven remotely with this system.",
          pt: "Controlar hardware físico pela internet em tempo real — com a precisão e responsividade de uma conexão local cabeada. O objetivo era permitir que um operador sente na frente de um HOTAS Warthog A-10C da Thrustmaster (manche e throttle de especificação militar), e cada movimento de eixo e botão pressionado viaje pela internet até um Raspberry Pi acionando motores em um dispositivo remoto — com latência mínima, vídeo ao vivo, telemetria completa e um sistema fail-safe que garante parada imediata se a comunicação cair.\n\nA primeira plataforma-alvo é um UGV (Veículo Terrestre Não-Tripulado), mas a arquitetura é totalmente genérica — qualquer coisa controlável via GPIO, PWM, serial ou I2C pode ser operada remotamente com este sistema.",
        },
        image: "/images/projects/industry/hotas-remote-control-tab.png",
        imageCaption: {
          en: "Operator UI — Control tab with live video, telemetry HUD and tactical reticle",
          pt: "UI do operador — aba Control com vídeo ao vivo, HUD de telemetria e mira tática",
        },
      },
      {
        heading: { en: "The Architecture", pt: "A Arquitetura" },
        body: {
          en: "Three independent software components, each running on a different machine, communicating via MQTT over TLS:\n\nThe RCS (Remote Control Station) runs on the operator's Linux PC. It reads the HOTAS via evdev (direct kernel-level input), normalizes all axes and buttons, and transmits control data at 50 Hz to the cloud. It also renders a desktop-native UI (React + Tailwind CSS inside pywebview) with four tabs: live video via WebRTC, real-time HOTAS mapping, telemetry gauges, and latency breakdown.\n\nThe MQTT Broker (Mosquitto on a VPS) is the cloud rendezvous point — TLS-only, authenticated, with ACLs restricting each client to its exact topics. No plaintext, no anonymous connections.\n\nThe Embedded Software on the Raspberry Pi receives control commands, runs a motor mixer (arcade or tank mode), applies acceleration ramps, and drives the hardware backend (GPIO PWM, PCA9685 for ESCs, or serial for PLCs — all pluggable via config). It also reads sensors at 1 Hz, publishes telemetry at 2 Hz, streams live video via WebRTC using aiortc + Pi Camera Module 3 NoIR, and runs a safety watchdog checking operator presence 10 times per second.\n\nBoth the RCS and embedded software follow the same ROS2-inspired architecture: independent nodes communicating exclusively through an internal pub/sub bus, with a thread-safe StateManager and a Launcher handling ordered startup/shutdown.",
          pt: "Três componentes de software independentes, cada um rodando em uma máquina diferente, comunicando via MQTT sobre TLS:\n\nO RCS (Remote Control Station) roda no PC Linux do operador. Lê o HOTAS via evdev (input direto do kernel), normaliza todos os eixos e botões, e transmite dados de controle a 50 Hz para a nuvem. Também renderiza uma UI nativa desktop (React + Tailwind CSS dentro do pywebview) com quatro abas: vídeo ao vivo via WebRTC, mapeamento do HOTAS em tempo real, gauges de telemetria e breakdown de latência.\n\nO Broker MQTT (Mosquitto em VPS) é o ponto de encontro na nuvem — apenas TLS, autenticado, com ACLs restringindo cada cliente aos seus tópicos exatos. Sem plaintext, sem conexões anônimas.\n\nO Software Embarcado no Raspberry Pi recebe comandos de controle, executa um mixer de motores (modo arcade ou tank), aplica rampas de aceleração e aciona o backend de hardware (GPIO PWM, PCA9685 para ESCs, ou serial para CLPs — tudo plugável via config). Também lê sensores a 1 Hz, publica telemetria a 2 Hz, transmite vídeo ao vivo via WebRTC usando aiortc + Pi Camera Module 3 NoIR, e roda um watchdog de segurança verificando presença do operador 10 vezes por segundo.\n\nTanto o RCS quanto o embarcado seguem a mesma arquitetura inspirada em ROS2: nodes independentes comunicando exclusivamente por um barramento pub/sub interno, com StateManager thread-safe e Launcher gerenciando startup/shutdown ordenado.",
        },
        image: "/images/projects/industry/hotas-remote-hotas-closeup.jpg",
        imageCaption: {
          en: "Thrustmaster HOTAS Warthog A-10C — throttle quadrant and flight stick",
          pt: "Thrustmaster HOTAS Warthog A-10C — throttle e manche",
        },
      },
      {
        heading: { en: "The Operator Interface", pt: "A Interface do Operador" },
        body: {
          en: "The operator UI is a React 19 + Tailwind CSS 4 application served inside a native desktop window via pywebview. The design language is \"Industrial Brutalism\" — inspired by Lockheed Martin operations terminals. Near-black background, zero border-radius, JetBrains Mono typography, CRT effects with scanlines and noise. Gold accent, green for OK, red for alerts.\n\nFour tabs give the operator full situational awareness:\n\n• CONTROL — live video feed from the vehicle camera via WebRTC, with crosshair, tactical reticle, and a HUD sidebar showing latency, link status, and arm state.\n• MAPPING — full HOTAS visualization with XY pads and all buttons updating in real time at 50 Hz.\n• TELEMETRY — gauges for speed, battery voltage, motor temperature, GPS coordinates, with sparkline history charts.\n• LATENCY — complete RTT breakdown with jitter, packet loss metrics, and SVG sparklines.",
          pt: "A UI do operador é uma aplicação React 19 + Tailwind CSS 4 servida dentro de uma janela desktop nativa via pywebview. A linguagem de design é \"Industrial Brutalism\" — inspirada em terminais de operações da Lockheed Martin. Fundo quase preto, zero border-radius, tipografia JetBrains Mono, efeitos CRT com scanlines e noise. Acento dourado, verde para OK, vermelho para alertas.\n\nQuatro abas dão ao operador consciência situacional completa:\n\n• CONTROL — vídeo ao vivo da câmera do veículo via WebRTC, com crosshair, mira tática e HUD lateral com latência, status do link e estado de armamento.\n• MAPPING — visualização completa do HOTAS com pads XY e todos os botões atualizando em tempo real a 50 Hz.\n• TELEMETRY — gauges de velocidade, tensão da bateria, temperatura dos motores, coordenadas GPS, com sparklines de histórico.\n• LATENCY — breakdown completo de RTT com jitter, packet loss e sparklines SVG.",
        },
        images: [
          "/images/projects/industry/hotas-remote-video-feed.png",
          "/images/projects/industry/hotas-remote-mapping-terminal.png",
          "/images/projects/industry/hotas-remote-grafana-mapping.png",
          "/images/projects/industry/hotas-remote-mapping-tab.png",
        ],
      },
      {
        heading: { en: "Safety & Communication", pt: "Segurança & Comunicação" },
        body: {
          en: "The safety system is the most critical aspect of the project. If communication drops — unstable internet, PC shutdown, anything — the device must stop immediately. No margin for uncontrolled movement.\n\nThe RCS sends a heartbeat every second, separate from control commands. The Pi monitors heartbeat age 10 times per second. If 3 seconds pass without a heartbeat, an emergency relay activates on GPIO, physically locking the motors while a software ramp brings all outputs to zero in half a second.\n\nThe design is fail-safe by hardware: if the Raspberry Pi loses power, GPIOs float, the relay engages, motors lock. The system starts disarmed and only arms upon receiving the first operator heartbeat. Recovery is automatic when communication resumes.\n\nThe three components communicate over eleven MQTT topics on TLS port 8883. Control and heartbeat use QoS 0 (latency over delivery guarantee at 50 Hz — losing one packet is invisible, the next arrives in 20ms). Telemetry and WebRTC signaling use QoS 1. A dedicated ping/pong mechanism where the Pi echoes immediately (bypassing internal bus) allows the RCS to calculate RTT, jitter and packet loss with precision.",
          pt: "O sistema de segurança é o aspecto mais crítico do projeto. Se a comunicação cair — internet instável, PC desligou, qualquer coisa — o dispositivo precisa parar imediatamente. Sem margem para movimento descontrolado.\n\nO RCS envia um heartbeat a cada segundo, separado dos comandos de controle. O Pi monitora a idade do heartbeat 10 vezes por segundo. Se passarem 3 segundos sem heartbeat, um relé de emergência ativa no GPIO, travando os motores fisicamente enquanto uma rampa de software leva todos os outputs a zero em meio segundo.\n\nO design é fail-safe por hardware: se o Raspberry Pi perder energia, os GPIOs flutuam, o relé engata, motores travam. O sistema inicia desarmado e só arma ao receber o primeiro heartbeat do operador. A recuperação é automática quando a comunicação retoma.\n\nOs três componentes comunicam por onze tópicos MQTT na porta TLS 8883. Controle e heartbeat usam QoS 0 (latência sobre garantia de entrega a 50 Hz — perder um pacote é invisível, o próximo chega em 20ms). Telemetria e sinalização WebRTC usam QoS 1. Um mecanismo dedicado de ping/pong onde o Pi faz echo imediato (sem passar pelo barramento interno) permite ao RCS calcular RTT, jitter e packet loss com precisão.",
        },
      },
      {
        heading: { en: "Results", pt: "Resultados" },
        body: {
          en: "A production-grade remote control system that turns a military HOTAS joystick into a real-time internet controller for any hardware platform. Three independently deployable software components — operator station, cloud broker, and embedded controller — communicating securely over MQTT/TLS with WebRTC live video.\n\nKey metrics: 50 Hz control loop, sub-second latency over public internet, 3-second fail-safe timeout with hardware-level motor lockout, live 720p video at 30 fps via TURN relay, and a complete test suite (32 + 36 + 6 tests across the three projects).\n\nThe entire system was developed using a monorepo with Git submodules and specialized AI agents per component, with a shared interface contract as single source of truth — enabling parallel development with full interface consistency.",
          pt: "Um sistema de controle remoto de nível produção que transforma um joystick militar HOTAS em um controlador de internet em tempo real para qualquer plataforma de hardware. Três componentes de software independentemente implantáveis — estação do operador, broker na nuvem e controlador embarcado — comunicando com segurança sobre MQTT/TLS com vídeo ao vivo WebRTC.\n\nMétricas-chave: loop de controle a 50 Hz, latência sub-segundo pela internet pública, timeout fail-safe de 3 segundos com travamento de motores por hardware, vídeo ao vivo 720p a 30 fps via relay TURN, e suíte de testes completa (32 + 36 + 6 testes nos três projetos).\n\nO sistema inteiro foi desenvolvido usando um monorepo com Git submodules e agentes de IA especializados por componente, com um contrato de interface compartilhado como single source of truth — permitindo desenvolvimento paralelo com consistência total de interfaces.",
        },
      },
    ],
  },
  "automation-project-3": {
    title: "Project 3",
    subtitle: { en: "Coming soon", pt: "Em breve" },
    bannerImage: "/images/projects/automation-it/C1.png",
    career: "automation-it",
    sections: [{ heading: { en: "About", pt: "Sobre" }, body: { en: "Coming soon", pt: "Em breve" } }],
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
    career: "industry",
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
    career: "industry",
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
    career: "industry",
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
    career: "industry",
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
    title: "SIEMENS Portable Case & 6-DOF Stewart Platform",
    subtitle: {
      en: "A didactic plug-and-play Siemens controller case driving a 6-DOF Stewart Platform in closed-loop with auto-tuned PID position control",
      pt: "Uma maleta controladora didática plug-and-play da Siemens acionando uma Plataforma de Stewart 6-DOF em malha fechada com controle PID auto-tuned de posição",
    },
    bannerImage: "/images/projects/engineer/siemens-stewart-banner.jpeg",
    career: "industry",
    sections: [
      {
        heading: { en: "The Challenge", pt: "O Desafio" },
        body: {
          en: "Two prototypes, designed and built from scratch to work as a single integrated system. The first is a portable controller case — a self-contained, plug-and-play Siemens PLC + HMI kit, flexible enough to drive almost any industrial plant, with all the I/O, power supply, network and operator interface mounted into a single rugged Pelican-style case. The second is a 6-DOF Gough-Stewart Platform driven by six independent linear electric actuators, designed as the controlled plant.\n\nThe two devices had to be electrically and logically integrated through a single DB-37 connector, while still being usable independently in any other application. The platform had to be fully controllable in closed loop, with each actuator individually positioned through PID, and the case had to expose every PLC signal in a clean, didactic and industrial-grade front panel — switches, LEDs, banana terminals, joystick, potentiometers, RJ45 and Wi-Fi access — without losing portability.",
          pt: "Dois protótipos, projetados e construídos do zero para trabalharem como um único sistema integrado. O primeiro é uma maleta controladora portátil — um kit Siemens PLC + IHM autocontido e plug-and-play, flexível o suficiente para acionar quase qualquer planta industrial, com todas as I/Os, fonte, rede e interface do operador montadas em uma única maleta robusta estilo Pelican. O segundo é uma Plataforma de Gough-Stewart 6-DOF acionada por seis atuadores elétricos lineares independentes, projetada como a planta controlada.\n\nOs dois dispositivos precisavam ser integrados elétrica e logicamente através de um único conector DB-37, mas ainda assim utilizáveis de forma independente em qualquer outra aplicação. A plataforma tinha que ser totalmente controlável em malha fechada, com cada atuador posicionado individualmente via PID, e a maleta tinha que expor cada sinal do CLP em um painel frontal limpo, didático e de nível industrial — switches, LEDs, bornes banana, joystick, potenciômetros, RJ45 e acesso Wi-Fi — sem perder portabilidade.",
        },
        image: "/images/projects/engineer/siemens-stewart-banner.jpeg",
        imageCaption: {
          en: "Both prototypes side-by-side — controller case (left) driving the 6-DOF Stewart Platform (right)",
          pt: "Os dois protótipos lado a lado — a maleta controladora (esquerda) acionando a Plataforma de Stewart 6-DOF (direita)",
        },
      },
      {
        heading: { en: "The Controller Case", pt: "A Maleta Controladora" },
        body: {
          en: "Built around a Siemens S7-1200 CPU 1215C with an SM 1234 analog expansion module — adding the analog channels needed to read the six actuator position feedback signals — and a Siemens KTP 700 Basic 7\" touch HMI programmed in WinCC. Both devices share an internal Ethernet TCP/IP network through a small router that also exposes the PLC over Wi-Fi for remote programming.\n\nThe entire kit lives inside a Pelican-style MP0055 case, with a 5 mm laser-cut acrylic front panel and a custom-printed adhesive following the Siemens visual language. Every PLC I/O is broken out to a banana terminal with its own illuminated switch and LED indicator: 14 digital inputs, 10 digital outputs, 4 analog inputs (selectable between joystick, precision potentiometers and external source), 2 analog outputs and 6 expansion analog inputs. A DB-37 connector exports every relevant signal in a single cable, an RJ45 connector allows easy network expansion, and an 8-channel relay board sits between the PLC outputs and the field, handling the analog-source selector switching and providing four spare relays for prototyping.\n\nInternally the case carries a 24 V / 10 A switching power supply, a 24V→10V adjustable regulator, a circuit breaker, an emergency stop, fuses on every PLC output to protect against load short-circuits, and a clean cable routing with proper crimping and identification. The full electrical schematic was drafted in EPLAN and went through 35 revisions before fabrication.",
          pt: "Construída em torno de um Siemens S7-1200 CPU 1215C com módulo de expansão analógica SM 1234 — adicionando os canais analógicos necessários para ler os seis sinais de feedback de posição dos atuadores — e uma IHM Siemens KTP 700 Basic touch de 7\" programada em WinCC. Os dois dispositivos compartilham uma rede Ethernet TCP/IP interna por meio de um pequeno roteador que também expõe o CLP via Wi-Fi para programação remota.\n\nTodo o kit vive dentro de uma maleta estilo Pelican MP0055, com painel frontal de acrílico cortado a laser de 5 mm e um adesivo personalizado seguindo a linguagem visual Siemens. Cada I/O do CLP é exposto em um borne banana com seu próprio interruptor iluminado e LED indicador: 14 entradas digitais, 10 saídas digitais, 4 entradas analógicas (selecionáveis entre joystick, potenciômetros de precisão e fonte externa), 2 saídas analógicas e 6 entradas analógicas da expansão. Um conector DB-37 exporta todos os sinais relevantes em um único cabo, um conector RJ45 permite fácil expansão de rede, e uma placa de relés de 8 canais fica entre as saídas do CLP e o campo, tratando o chaveamento da fonte analógica e fornecendo quatro relés extras para prototipagem.\n\nInternamente a maleta carrega uma fonte chaveada 24 V / 10 A, um regulador 24V→10V ajustável, um disjuntor, uma botoeira de emergência, fusíveis em cada saída do CLP para proteger contra curto-circuitos de carga, e uma fiação limpa com crimpagem e identificação adequadas. O esquema elétrico completo foi desenhado no EPLAN e passou por 35 revisões antes da fabricação.",
        },
        images: [
          "/images/projects/engineer/SIEMENS.jpeg",
          "/images/projects/engineer/siemens-stewart-case-layout.png",
          "/images/projects/engineer/siemens-stewart-case-construction.png",
        ],
      },
      {
        heading: { en: "The Stewart Platform", pt: "A Plataforma de Stewart" },
        body: {
          en: "A Gough-Stewart-style parallel manipulator built from three 2 mm steel plates (lower base, central support and upper movable plate) joined by 30×30 mm structural aluminum profiles. The three plates were fully drawn in SolidWorks before any cut, with the geometry validated through 3D simulations of the full motion envelope.\n\nThe platform is driven by six independent linear electric screw actuators (24 V, 60 mm/s, 80 N, 250 mm of useful stroke). These were chosen over pneumatic or hydraulic alternatives for three reasons: linearity, low cost and — most importantly — built-in resistive position feedback (an internal element that varies its resistance with the actuator position, giving a 0–10 V analog signal directly back to the PLC), which removes the need for any external linear encoder. Each actuator is mounted at roughly 60° to the XY plane through 3D-printed brackets sized from coordinate calculations done in trigonometry / linear algebra over the SolidWorks model.\n\nDouble kardan joints connect the actuator shafts to the upper plate, allowing two-axis articulation without binding. Parlock nuts prevent loosening under vibration, and adjustable feet correct the inevitable manufacturing imperfections. Decomposing the 80 N actuator force at the 60° mounting angle yields ~69 N per actuator, so the platform supports up to ~414 N (~42.2 kgf) of vertical thrust — minus the 4.1 kg of the upper plate, ~38 kg of net payload.",
          pt: "Um manipulador paralelo no estilo Gough-Stewart construído a partir de três chapas de aço de 2 mm (base inferior, suporte central e chapa móvel superior) unidas por perfis estruturais de alumínio 30×30 mm. As três chapas foram totalmente desenhadas no SolidWorks antes de qualquer corte, com a geometria validada por simulações 3D de todo o envelope de movimento.\n\nA plataforma é acionada por seis atuadores elétricos lineares de fuso independentes (24 V, 60 mm/s, 80 N, 250 mm de curso útil). Foram escolhidos em vez de alternativas pneumáticas ou hidráulicas por três razões: linearidade, baixo custo e — mais importante — feedback de posição resistivo embutido (um elemento interno que varia sua resistência com a posição do atuador, devolvendo um sinal analógico de 0–10 V direto para o CLP), eliminando a necessidade de qualquer encoder linear externo. Cada atuador é montado a aproximadamente 60° em relação ao plano XY através de suportes impressos em 3D dimensionados a partir de cálculos de coordenadas feitos com trigonometria / álgebra linear sobre o modelo SolidWorks.\n\nJuntas kardan duplas conectam as hastes dos atuadores à chapa superior, permitindo articulação em dois eixos sem travamento. Porcas parlock impedem afrouxamento sob vibração e pés ajustáveis corrigem as inevitáveis imperfeições de fabricação. Decompondo a força de 80 N do atuador no ângulo de montagem de 60°, obtém-se ~69 N por atuador, então a plataforma suporta até ~414 N (~42,2 kgf) de empuxo vertical — descontando os 4,1 kg da chapa superior, ~38 kg de carga útil.",
        },
        images: [
          "/images/projects/engineer/siemens-stewart-platform-cad.png",
          "/images/projects/engineer/siemens-stewart-platform-movements.png",
          "/images/projects/engineer/siemens-stewart-platform-coords.png",
          "/images/projects/engineer/siemens-stewart-platform-front.png",
          "/images/projects/engineer/siemens-stewart-platform-tilted.png",
        ],
      },
      {
        heading: { en: "Power & Signal Chain", pt: "Cadeia de Potência e Sinal" },
        body: {
          en: "Bridging a 24 V industrial PLC to six 5 V-controlled DC motor drivers required a custom signal-conditioning chain, designed and revised through dedicated EPLAN drawings.\n\nEach actuator is driven by an XY-15AS DC motor driver (mosfet-based, up to 20 A, 100 kHz PWM). The drivers expect 5 V logic on their IN1, IN2 (direction) and PWM (speed) inputs, while the S7-1200 outputs 24 V. The bridge is built with C309 optocoupler boards: NPN boards convert 24 V → 5 V, PNP boards convert non-24 V → 5 V, both in mirrored pairs so that the two direction bits stay correctly inverted regardless of the PLC signal state.\n\nBecause the S7-1200 only has four hardware PWM outputs and the platform needs six, two LC-LM358-PWM2V analog-to-PWM converter boards were added: they take a 0–10 V analog signal from the PLC and translate it into a 24 V PWM with proportional duty cycle, which then goes through its own optocoupler stage before reaching the driver. The result is two control paths in parallel — direct PWM for four actuators (Ligação A) and analog-to-PWM for the remaining two (Ligação B) — both behaviorally identical from the PID's point of view.\n\nThe 0–10 V position feedback from each actuator goes straight into the PLC analog input, closing the loop entirely inside the controller without any extra ADC.",
          pt: "Conectar um CLP industrial 24 V a seis drivers de motor DC controlados a 5 V exigiu uma cadeia de condicionamento de sinal customizada, projetada e revisada em desenhos EPLAN dedicados.\n\nCada atuador é acionado por um driver de motor DC XY-15AS (baseado em mosfet, até 20 A, PWM de 100 kHz). Os drivers esperam lógica 5 V em suas entradas IN1, IN2 (direção) e PWM (velocidade), enquanto o S7-1200 sai com 24 V. A ponte é construída com placas optoacopladoras C309: placas NPN convertem 24 V → 5 V, placas PNP convertem não-24 V → 5 V, ambas em pares espelhados para que os dois bits de direção permaneçam corretamente invertidos independentemente do estado do sinal do CLP.\n\nComo o S7-1200 só possui quatro saídas PWM por hardware e a plataforma precisa de seis, foram acrescentadas duas placas conversoras analógico-PWM LC-LM358-PWM2V: elas pegam um sinal analógico 0–10 V do CLP e o traduzem em PWM 24 V com duty cycle proporcional, que então passa por seu próprio estágio de optoacoplador antes de chegar ao driver. O resultado são dois caminhos de controle em paralelo — PWM direto para quatro atuadores (Ligação A) e analógico-para-PWM para os dois restantes (Ligação B) — comportamentalmente idênticos do ponto de vista do PID.\n\nO feedback de posição 0–10 V de cada atuador vai direto para a entrada analógica do CLP, fechando a malha inteiramente dentro do controlador sem nenhum ADC extra.",
        },
        image: "/images/projects/engineer/siemens-stewart-control-loop.png",
        imageCaption: {
          en: "Closed-loop block diagram — controller, power interface, actuator and position sensor",
          pt: "Diagrama de blocos da malha fechada — controlador, interface de potência, atuador e sensor de posição",
        },
      },
      {
        heading: { en: "PLC Programming", pt: "Programação do CLP" },
        body: {
          en: "All programming was done in TIA Portal STEP 7 with a strict modular philosophy — every recurring behavior was condensed into a Function Block (FB) so the main routines stay short, readable and reusable.\n\nThe program tree is split into four organizational blocks (Main, PID, Sequential Positioning, HMI Logic) and a series of dedicated FBs:\n\n• Atuador 1–6 (FB1–FB6) — one block per actuator. Inputs: Run, Speed, Direction. Internally it sets the PWM duty cycle, enables movement, picks forward/return direction, scales the raw analog feedback into normalized 0–100% / mm position values.\n\n• Controle PID AT1–AT6 (FB8–FB13) — one PID wrapper per actuator. Each one drives a native PID_Compact technology object (DB5, DB13, DB16, DB18, DB19, DB20), with auto-tuning run individually per actuator to extract optimal Kp, Ti and Td values. Inputs: Run, Reference, current Position. Outputs: Speed, Direction, End signal.\n\n• Posicionamento (FB14) — generic block that accepts six target positions and triggers all six PIDs simultaneously, with tolerance checking on the final condition.\n\n• Zero Máquina (FB7) — drives every actuator to its retracted reference position at full speed.\n\nOn top of these blocks, three demonstration routines were implemented: manual jog of every actuator, single/sequential positioning cycles with PID, and an Observatory Function that, given an angle and a direction, computes the six target positions and orients the upper plate as a real telescope mount would.",
          pt: "Toda a programação foi feita no TIA Portal STEP 7 com uma filosofia modular rigorosa — cada comportamento recorrente foi condensado em um Function Block (FB) para que as rotinas principais permanecessem curtas, legíveis e reutilizáveis.\n\nA árvore do programa é dividida em quatro blocos organizacionais (Main, PID, Posicionamento Sequencial, IHM Logic) e uma série de FBs dedicados:\n\n• Atuador 1–6 (FB1–FB6) — um bloco por atuador. Entradas: Run, Velocidade, Direção. Internamente seta o duty cycle do PWM, habilita o movimento, seleciona avanço/retorno e normaliza o feedback analógico bruto em valores de posição 0–100% / mm.\n\n• Controle PID AT1–AT6 (FB8–FB13) — um wrapper PID por atuador. Cada um aciona um objeto de tecnologia PID_Compact nativo (DB5, DB13, DB16, DB18, DB19, DB20), com auto-tune executado individualmente por atuador para extrair os valores ótimos de Kp, Ti e Td. Entradas: Run, Referência, Posição atual. Saídas: Velocidade, Direção, sinal End.\n\n• Posicionamento (FB14) — bloco genérico que aceita seis posições alvo e dispara os seis PIDs simultaneamente, com verificação de tolerância na condição final.\n\n• Zero Máquina (FB7) — leva todos os atuadores à posição retraída de referência em velocidade máxima.\n\nSobre esses blocos, foram implementadas três rotinas de demonstração: jog manual de cada atuador, ciclos de posicionamento único/sequencial com PID, e uma Função Observatório que, dado um ângulo e uma direção, calcula as seis posições alvo e orienta a chapa superior como um suporte de telescópio real faria.",
        },
        images: [
          "/images/projects/engineer/siemens-stewart-program-tree.png",
          "/images/projects/engineer/siemens-stewart-actuator-block.png",
        ],
      },
      {
        heading: { en: "PID Tuning & System Identification", pt: "Sintonia PID & Identificação do Sistema" },
        body: {
          en: "The PID_Compact block from TIA Portal supports auto-tuning by injecting test signals and iteratively adjusting parameters. Each of the six actuators was tuned independently — and although they're physically identical, the resulting Kp / Ti / Td values come out different (e.g. AT1: Kp=2.91, Ti=0.74 s, Td=0.19 s vs AT2: Kp=1.51, Ti=1.22 s, Td=0.27 s). This is expected: small mechanical non-linearities — slight load differences, mounting angles, gear backlash, electrical induction — make each actuator a slightly different plant.\n\nTo characterize the system, position data was sampled at ~3 Hz over a step input on each actuator, exported to MATLAB and processed through System Identification, which iteratively added poles and zeros to fit empirical transfer functions to the measured response. The resulting models reach 93.78%–98.86% accuracy. As an example, AT2 was identified as a clean second-order system: FT2 = 1.265 / (s² + 1.229s + 1.263), at 97.35% precision.\n\nThe sequential positioning routine performed reliably; the observatory function achieved at most 1° of orientation error. Simultaneous actuation of more than three actuators occasionally introduced cross-coupling effects (one actuator's motion perturbs the others' loops) — a known limitation of decoupled per-actuator PID on a fully-coupled parallel manipulator, which would be solved with a coupled multivariable controller.",
          pt: "O bloco PID_Compact do TIA Portal suporta auto-tuning injetando sinais de teste e ajustando parâmetros iterativamente. Cada um dos seis atuadores foi sintonizado independentemente — e apesar de serem fisicamente idênticos, os valores resultantes de Kp / Ti / Td saem diferentes (ex: AT1: Kp=2,91, Ti=0,74 s, Td=0,19 s vs AT2: Kp=1,51, Ti=1,22 s, Td=0,27 s). Isso é esperado: pequenas não linearidades mecânicas — pequenas diferenças de carga, ângulos de montagem, folgas, indução elétrica — fazem de cada atuador uma planta ligeiramente diferente.\n\nPara caracterizar o sistema, os dados de posição foram amostrados a ~3 Hz sobre um degrau aplicado em cada atuador, exportados para o MATLAB e processados pelo System Identification, que iterativamente adicionou polos e zeros para ajustar funções de transferência empíricas à resposta medida. Os modelos resultantes alcançam 93,78%–98,86% de precisão. Como exemplo, AT2 foi identificado como um sistema de segunda ordem limpo: FT2 = 1,265 / (s² + 1,229s + 1,263), com 97,35% de precisão.\n\nA rotina de posicionamento sequencial teve desempenho confiável; a função observatório atingiu no máximo 1° de erro de orientação. O acionamento simultâneo de mais de três atuadores eventualmente introduzia efeitos de acoplamento cruzado (o movimento de um atuador perturba as malhas dos outros) — uma limitação conhecida do PID desacoplado por atuador em um manipulador paralelo totalmente acoplado, que seria resolvida com um controlador multivariável acoplado.",
        },
        images: [
          "/images/projects/engineer/siemens-stewart-pid-compact.png",
          "/images/projects/engineer/siemens-stewart-pid-at4.png",
          "/images/projects/engineer/siemens-stewart-pid-at6.png",
        ],
      },
      {
        heading: { en: "Results", pt: "Resultados" },
        body: {
          en: "Two fully functional, electrically integrated and independently usable prototypes:\n\n• A portable Siemens controller case that can drive almost any small/medium industrial plant out of the box, with every PLC signal exposed on the front panel and a Wi-Fi link for remote programming.\n\n• A 6-DOF Stewart Platform with auto-tuned per-actuator PID position control, ~38 kg of usable payload, ~1° accuracy on the observatory routine, and identified transfer functions reaching 98.86% model fidelity.\n\nThe system supports manual jog, single-position PID, sequential positioning cycles, machine zero, and a real-application observatory routine that orients the upper plate as a telescope mount would. Both devices can be unplugged and used separately — the case as a generic PLC kit, the platform as a controlled plant for any other controller — preserving the original plug-and-play design intent.",
          pt: "Dois protótipos totalmente funcionais, eletricamente integrados e utilizáveis de forma independente:\n\n• Uma maleta controladora Siemens portátil que pode acionar quase qualquer planta industrial pequena/média de forma plug-and-play, com cada sinal do CLP exposto no painel frontal e um link Wi-Fi para programação remota.\n\n• Uma Plataforma de Stewart 6-DOF com controle PID de posição auto-tuned por atuador, ~38 kg de carga útil utilizável, precisão de ~1° na rotina de observatório, e funções de transferência identificadas chegando a 98,86% de fidelidade ao modelo.\n\nO sistema suporta jog manual, posicionamento único via PID, ciclos de posicionamento sequencial, zero máquina, e uma rotina de observatório de aplicação real que orienta a chapa superior como um suporte de telescópio faria. Os dois dispositivos podem ser desconectados e usados separadamente — a maleta como kit genérico de CLP, a plataforma como planta controlada para qualquer outro controlador — preservando a intenção original de design plug-and-play.",
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
    career: "industry",
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
  { label: "nav.industry" as const, href: "/career/industry" },
  { label: "nav.automation" as const, href: "/career/automation-it" },
  { label: "nav.hobbies" as const, href: "/hobbies" },
];

// ---------------------------------------------------------------------------
// 10. Footer
// ---------------------------------------------------------------------------
export const FOOTER_YEAR = new Date().getFullYear();
