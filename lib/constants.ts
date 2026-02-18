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
  // CVs – one for each career
  cvWebDev: "/files/Web_Developer_2026.pdf",
  cvEngineer: "/files/Engineer_2026.pdf",
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
    company: "Movewer Technologies",
    role: {
      en: "Founder — Development Engineer",
      pt: "Fundador — Engenheiro de Desenvolvimento",
    },
    period: "Jun 2025 – Present",
    location: "Portugal",
    bullets: {
      en: [
        "Web Monitoring Platform using MQTT, Python, Node-Red, InfluxDB and Grafana with AI insights.",
        "Full-stack development with Next.js, TypeScript, Docker and cloud deployments.",
      ],
      pt: [
        "Plataforma Web de Monitoramento usando MQTT, Python, Node-Red, InfluxDB e Grafana com insights de IA.",
        "Desenvolvimento full-stack com Next.js, TypeScript, Docker e deploy em nuvem.",
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
      en: ["Development of special industrial machines involving mechatronic and IoT systems."],
      pt: ["Desenvolvimento de máquinas industriais especiais envolvendo sistemas mecatrônicos e IoT."],
    },
  },
];

export const EXPERIENCE_ENGINEER: Experience[] = [
  {
    company: "Movewer Technologies",
    role: { en: "Founder — Engineer", pt: "Fundador — Engenheiro" },
    period: "Jun 2025 – Present",
    location: "Portugal",
    bullets: {
      en: [
        "Full technical development of UGV systems (control, power, communication, sensors).",
        "Monitoring Platform using MQTT, Python, Node-Red, InfluxDB and Grafana with AI.",
        "Collaborated with mechanical specialist to adapt UGV projects.",
      ],
      pt: [
        "Desenvolvimento técnico completo de sistemas UGV (controle, potência, comunicação, sensores).",
        "Plataforma de Monitoramento usando MQTT, Python, Node-Red, InfluxDB e Grafana com IA.",
        "Colaborou com especialista mecânico para adaptar projetos de UGV.",
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
        "Structured Automation and UGV sectors from scratch, contributing to new fundraising rounds.",
        "Managed a team of 5 engineers developing agricultural vehicles and drone support structures.",
        "Led UGV development (control, power, communication systems).",
        "10 kg-payload quadcopter drone — from planning to electrical/mechanical project.",
      ],
      pt: [
        "Estruturou os setores de Automação e UGV do zero, contribuindo para novas rodadas de captação.",
        "Gerenciou time de 5 engenheiros no desenvolvimento de veículos agrícolas e estruturas de suporte a drones.",
        "Liderou desenvolvimento de UGVs (sistemas de controle, potência e comunicação).",
        "Drone quadricóptero de 10 kg — do planejamento ao projeto elétrico/mecânico.",
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
        "Development of special industrial machines with SCADA and industrial standards.",
        "Distributor of automation products (Siemens, Bosch, Rockwell) — 35+ partnerships.",
      ],
      pt: [
        "Desenvolvimento de máquinas industriais especiais com SCADA e padrões industriais.",
        "Distribuidor de produtos de automação (Siemens, Bosch, Rockwell) — 35+ parcerias.",
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
  "JavaScript",
  "Node.js",
  "Docker",
  "MongoDB",
  "SQL / NoSQL",
  "Vercel",
  "Git / GitHub",
  "CI/CD",
  "Python",
  "AI Integrations",
  "N8N",
  "Grafana",
  "Node-Red",
];

export const SKILLS_ENGINEER = [
  "Control Systems",
  "Embedded Systems",
  "UGV / Drones",
  "SCADA / HMI",
  "PLC Programming",
  "Modbus / LoRa / OPC-UA",
  "EtherCAT / Profinet",
  "Power Electronics",
  "IoT / MQTT",
  "Python",
  "MATLAB",
  "CODESYS",
  "TIA Portal",
  "SolidWorks / EPLAN",
  "Raspberry Pi / Jetson",
  "Industry 4.0",
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
      en: "Full monitoring platform with MQTT, Node-Red, InfluxDB, Grafana and AI insights.",
      pt: "Plataforma completa de monitoramento com MQTT, Node-Red, InfluxDB, Grafana e insights de IA.",
    },
    coverImage: "/images/projects/webdev/MOV3.png",
    tags: ["MQTT", "Node-Red", "InfluxDB", "Grafana", "AI"],
  },
  {
    slug: "nextjs-web-app",
    title: "Next.js Web App",
    description: {
      en: "A simple Web App built with Next.js, TypeScript and authentication, for didactic purposes.",
      pt: "Um aplicativo web simples construído com Next.js, TypeScript e autenticação, para fins didáticos.",
    },
    coverImage: "/images/projects/webdev/Dev3.png",
    tags: ["Next.js", "TypeScript", "Auth"],
  },
  {
    slug: "fifa-simulator",
    title: "FIFA 2030 Simulator",
    description: {
      en: "World Cup simulator using JavaScript, HTML and CSS.",
      pt: "Simulador da Copa do Mundo usando JavaScript, HTML e CSS.",
    },
    coverImage: "/images/projects/webdev/FIFA-COVER-PROJECT.png",
    tags: ["JavaScript", "HTML", "CSS"],
  },
  {
    slug: "webdev-project-4",
    title: "Project 4",
    description: {
      en: "Coming soon",
      pt: "Em breve",
    },
    coverImage: "/images/projects/webdev/project-4.jpg",
    tags: ["TBD"],
  },
  {
    slug: "webdev-project-5",
    title: "Project 5",
    description: {
      en: "Coming soon",
      pt: "Em breve",
    },
    coverImage: "/images/projects/webdev/project-5.jpg",
    tags: ["TBD"],
  },
  {
    slug: "webdev-project-6",
    title: "Project 6",
    description: {
      en: "Coming soon",
      pt: "Em breve",
    },
    coverImage: "/images/projects/webdev/project-6.jpg",
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
    tags: ["UGV", "Control Systems", "Power"],
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

// ---------------------------------------------------------------------------
// 7. Project detail pages (slug → detail)
// ---------------------------------------------------------------------------
export interface ProjectDetail {
  title: string;
  subtitle: { en: string; pt: string };
  bannerImage: string;
  career: "webdev" | "engineer";
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
      en: "Full IoT monitoring platform with AI-powered insights",
      pt: "Plataforma completa de monitoramento IoT com insights de IA",
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
          en: "A fully functional, scalable monitoring platform deployed in production for Movewer Technologies UGV operations.(This project is currently under development, images are conceptual placeholders.)",
          pt: "Uma plataforma de monitoramento totalmente funcional e escalável implantada em produção para operações UGV da Movewer Technologies.(Este projeto está atualmente em desenvolvimento, as imagens são placeholders conceituais.)",
        },
      },
    ],
  },
  "nextjs-web-app": {
    title: "Next.js Web App",
    subtitle: {
      en: "A simple Web App built with Next.js, TypeScript and authentication, for didactic purposes.",
      pt: "Um aplicativo web simples construído com Next.js, TypeScript e autenticação, para fins didáticos.",
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
          en: "Developed a Next.js app with server components, implementing authentication flows and a modern UI using Tailwind CSS. The app serves as a didactic example of Next.js capabilities.",
          pt: "Desenvolvi um aplicativo Next.js com componentes de servidor, implementando fluxos de autenticação e uma interface moderna usando Tailwind CSS. O aplicativo serve como um exemplo didático das capacidades do Next.js.",
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
    subtitle: {
      en: "Coming soon",
      pt: "Em breve",
    },
    bannerImage: "/images/projects/webdev/project4.jpg",
    career: "webdev",
    sections: [
      {
        heading: { en: "About", pt: "Sobre" },
        body: {
          en: "Coming soon",
          pt: "Em breve",
        },
      },
    ],
  },
  "webdev-project-5": {
    title: "Project 5",
    subtitle: {
      en: "Coming soon",
      pt: "Em breve",
    },
    bannerImage: "/images/projects/webdev/project5.jpg",
    career: "webdev",
    sections: [
      {
        heading: { en: "About", pt: "Sobre" },
        body: {
          en: "Coming soon",
          pt: "Em breve",
        },
      },
    ],
  },
  "webdev-project-6": {
    title: "Project 6",
    subtitle: {
      en: "Coming soon",
      pt: "Em breve",
    },
    bannerImage: "/images/projects/webdev/project6.jpg",
    career: "webdev",
    sections: [
      {
        heading: { en: "About", pt: "Sobre" },
        body: {
          en: "Coming soon",
          pt: "Em breve",
        },
      },
    ],
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
      en: "A UGV Plataform for collect and analyze data in field operations, designed for agricultural and industrial applications.",
      pt: "Uma plataforma UGV para coletar e analisar dados em operações de campo, projetada para aplicações agrícolas e industriais.",
    },
    bannerImage: "/images/projects/engineer/SPIRIT-BANNER.png",
    career: "engineer",
    sections: [
      {
        heading: { en: "The Challenge", pt: "O Desafio" },
        body: {
          en: "Create a UGV platform for collecting and analyzing data in agro application, analyses soil conditions.",
          pt: "Criar uma plataforma UGV para coletar e analisar dados em operações de campo, projetada para aplicações agrícolas e industriais.",
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
      en: "Tinkering with electronics, 3D printing and maker projects.",
      pt: "Mexer com eletrônica, impressão 3D e projetos maker.",
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
  { label: "nav.webdev" as const, href: "/career/webdev" },
  { label: "nav.engineer" as const, href: "/career/engineer" },
  { label: "nav.hobbies" as const, href: "/hobbies" },
];

// ---------------------------------------------------------------------------
// 10. Footer
// ---------------------------------------------------------------------------
export const FOOTER_YEAR = new Date().getFullYear();
