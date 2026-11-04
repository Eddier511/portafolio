export type Lang = "es" | "en"

export const content = {
  es: {
    meta: {
      title: "Eddier Soto Vargas | Fullstack Engineer",
      description:
        "Fullstack Engineer especializado en aplicaciones web, plataformas digitales, e-commerce, automatización e inteligencia artificial.",
    },
    nav: {
      home: "Inicio",
      services: "Servicios",
      career: "Trayectoria",
      contact: "Contacto",
      cta: "Hablemos",
      menu: "Abrir menú",
    },
    hero: {
      eyebrow: "Fullstack Engineer · Costa Rica",
      title:
        "Desarrollo soluciones digitales que convierten ideas en realidad.",
      description:
        "Soy Fullstack Engineer especializado en el desarrollo de aplicaciones web, plataformas digitales, e-commerce y soluciones inteligentes. Combino ingeniería de software con una visión de negocio para crear tecnología funcional, moderna y adaptable.",
      services: "Explorar servicios",
      career: "Mi trayectoria",
      contact: "Contactarme",
      availability: "Disponible para proyectos y oportunidades internacionales",
      signal: "Ingeniería + producto + negocio",
    },
    services: {
      kicker: "Servicios",
      title: "Tecnología pensada para resolver necesidades reales.",
      subtitle:
        "Diseño y desarrollo productos digitales completos, desde la idea inicial hasta una solución lista para crecer.",
      consult: "Consultar",
      items: [
        {
          id: "web",
          title: "Desarrollo Web",
          description:
            "Sitios corporativos, páginas web modernas y soluciones digitales adaptadas a cada negocio.",
        },
        {
          id: "apps",
          title: "Aplicaciones Web y Sistemas",
          description:
            "Aplicaciones personalizadas, paneles administrativos, dashboards y plataformas empresariales.",
        },
        {
          id: "commerce",
          title: "E-commerce y Tiendas Online",
          description:
            "Tiendas virtuales, catálogos digitales, plataformas comerciales y experiencias de compra.",
        },
        {
          id: "landing",
          title: "Landing Pages y Plantillas",
          description:
            "Páginas de aterrizaje, plantillas personalizadas y experiencias para campañas.",
        },
        {
          id: "automation",
          title: "Automatización e Integraciones",
          description:
            "Herramientas para conectar plataformas, reducir tareas manuales y optimizar procesos.",
        },
        {
          id: "ai",
          title: "Aplicaciones con Inteligencia Artificial",
          description:
            "Herramientas inteligentes para análisis, asistencia, automatización y análisis financiero mediante IA.",
        },
      ],
    },
    career: {
      kicker: "Trayectoria",
      title: "Trayectoria profesional",
      subtitle:
        "Experiencia, proyectos y habilidades que respaldan cada solución que desarrollo.",
      profileLabel: "Perfil profesional",
      profile: [
        "Soy Eddier Soto Vargas, Fullstack Engineer especializado en aplicaciones web, desarrollo de software empresarial, automatización e integración de soluciones tecnológicas.",
        "Mi formación en Ingeniería de Software y Administración de Empresas con énfasis en Finanzas me permite comprender tanto los aspectos técnicos como las necesidades de negocio detrás de cada proyecto.",
      ],
      resultsLabel: "Resultados históricos",
      resultsNote:
        "Resultados obtenidos en trabajos anteriores; no representan promesas comerciales. Los datos de auditoría de HeyPoint y TechSeed corresponden al 31 de octubre de 2026 y a las dependencias evaluadas; no equivalen a una certificación integral de seguridad.",
      results: [
        { value: "~50%", label: "menos registros duplicados" },
        { value: "~30%", label: "reducción en tiempos de procesamiento" },
        { value: "~25%", label: "incremento en visitas web" },
        { value: "~20%", label: "incremento en consultas comerciales" },
        { value: "63/63", label: "verificaciones aprobadas en las cuatro aplicaciones de HeyPoint" },
        { value: "18", label: "pruebas de regresión ejecutadas en TechSeed" },
        { value: "0", label: "vulnerabilidades conocidas reportadas en las auditorías finales de npm de HeyPoint y TechSeed" },
        { value: "PHP + JS", label: "controles de versiones y refuerzo de seguridad implementados en MotoApex" },
      ],
      experienceLabel: "Experiencia profesional",
      experience: [
        {
          company: "Navisa de Heredia S.A.",
          role: "Fullstack Engineer",
          period: "2024 / Actualidad",
          bullets: [
            "Desarrollo de aplicaciones y APIs.",
            "Automatización de operaciones empresariales.",
            "Integración de sistemas y modernización de plataformas web.",
            "Soluciones para procesos administrativos, inventarios y logística.",
          ],
        },
        {
          company: "Navisa de Heredia S.A.",
          role: "IT Support & Systems",
          period: "2021 / 2023",
          bullets: [
            "Soporte tecnológico y sistemas.",
            "Diagnóstico y resolución de incidencias.",
            "Mantenimiento de continuidad operativa.",
          ],
        },
      ],
      projectsLabel: "Proyectos destacados",
      projectsIntro:
        "Productos digitales donde la ingeniería se traduce en flujos más claros y eficientes.",
      viewProject: "Ver detalle",
      visitProject: "Visitar proyecto",
      resultsTitle: "Resultados",
      technologiesTitle: "Tecnologías",
      projects: [
        {
          "id": "motoapex",
          security: {
            "summary": "Actualización y refuerzo de la estructura de seguridad ante avisos de PHP y Node.js, con pruebas aisladas, controles de compilación y validación de compatibilidad.",
            "changes": [
              "Actualización de versiones y dependencias afectadas; controles que bloquean la compilación con versiones de Node.js fuera de los requisitos definidos.",
              "API protegida por una comprobación de PHP parcheado, PDO MySQL y Sodium: ante requisitos ausentes, bloquea el acceso con un error genérico y registra el motivo en logs privados.",
              "Refuerzo de permisos, sesiones, MFA, recuperación de contraseñas, validaciones y protección de datos."
            ],
            "tests": [
              "Correcciones probadas en entornos aislados antes de subirlas a GitHub.",
              "Pruebas, builds y controles de seguridad para verificar compatibilidad del código."
            ],
            "scope": "Node.js se utiliza en el entorno de Web/Admin; el admin se publica como archivos estáticos y la API usa PHP. Hostinger comunicó haber aplicado el parche de PHP, complementado con controles propios. No se verificó una actualización concreta de Node.js en Hostinger; las pruebas del código no certifican los parches instalados en el hosting."
          },
          "name": "MotoApex",
          "type": "Commerce & Automation Platform",
          "description": "Plataforma de comercio y automatización con web pública, dashboard administrativo, gestión de contenido web desde el panel como un CMS y control de inventario.",
          "results": [],
          "technologies": [
            "React 19",
            "TypeScript",
            "PHP / PDO",
            "MySQL",
            "Vite",
            "Tailwind CSS",
            "React Router",
            "Recharts",
            "Lucide"
          ],
          "architecture": [
            {
              "label": "Web pública",
              "stack": "React 19, TypeScript, Vite, Tailwind CSS, React Router"
            },
            {
              "label": "Panel administrativo",
              "stack": "React 19, TypeScript, Vite, Tailwind CSS, Recharts, Lucide"
            },
            {
              "label": "Backend",
              "stack": "API REST desarrollada en PHP con PDO"
            },
            {
              "label": "Base de datos",
              "stack": "MySQL"
            }
          ],
          "url": "https://motoapexcr.com/"
        },
        {
          id: "techseed",
          security: {
            "summary": "Revisión preventiva y refuerzo de dependencias, autorización, sesiones y configuración del servidor para corregir debilidades de seguridad.",
            "changes": [
              "Actualización de dependencias y corrección del archivo de bloqueo; auditoría final de npm sin vulnerabilidades conocidas al momento de la revisión.",
              "Separación de roles y autorización en rutas protegidas para impedir el acceso a solicitudes de otros usuarios y restringir operaciones administrativas.",
              "Eliminación del secreto JWT de respaldo inseguro, exigencia de un secreto robusto y sesiones en MySQL con revocación y expiración por inactividad.",
              "Límites de peticiones, cabeceras de seguridad, restricciones de CORS, validaciones y transacciones; protección de exportaciones CSV y retirada de configuración sensible del seguimiento de Git."
            ],
            "tests": [
              "18 pruebas de regresión ejecutadas.",
              "Instalación limpia y compilación frontend verificadas; análisis estático con ESLint y verificaciones mediante GitHub Actions.",
              "Node.js 24.22.2 verificado según el informe; auditoría final de npm con 0 vulnerabilidades conocidas."
            ],
            "scope": "Cambios documentados por el Equipo TechSeed en el informe del 31 de octubre de 2026. La revisión fue preventiva y no constituye evidencia de ataques ni explotación. Los resultados de la auditoría corresponden al momento de la revisión."
          },
          name: "TechSeed",
          type: "AI-Powered Academic Workflow",
          description:
            "Plataforma académica con portales conectados, seguimiento de propuestas y asistencia mediante inteligencia artificial.",
          results: [
            "40% menos espera de respuestas.",
            "30% menos errores de proceso.",
            "25% de mejora en preparación inicial de propuestas.",
          ],
          technologies: ["JavaScript", "React", "REST APIs", "MySQL", "IA"],
          url: "https://palevioletred-pony-152252.hostingersite.com/login",
        },
        {
          id: "heypoint",
          security: {
            "summary": "Actualización coordinada de Web, Administración, Backend y Kiosko para atender vulnerabilidades conocidas y reforzar autenticación, acceso y protección de datos.",
            "changes": [
              "Actualización de Node.js y dependencias afectadas de Vite, Axios, Firebase, Express y herramientas de compilación.",
              "Refuerzo de OTP con aleatoriedad criptográfica, consumo transaccional, revocación de sesiones y protección de respuestas sensibles frente a caché.",
              "Controles de sesión y protección del carrito, respuestas tardías y esperas de pago en el kiosko; validaciones antes de compilar y correcciones de TypeScript."
            ],
            "tests": [
              "63/63 verificaciones aprobadas: Web 9, Administración 22, Backend 21 y Kiosko 11.",
              "32 pruebas automatizadas entre Backend y Kiosko, 22 comprobaciones funcionales y de equivalencia en Administración y 9 verificaciones técnicas en Web.",
              "Compilaciones y auditorías validadas; la auditoría final reportó 0 alertas npm en las cuatro aplicaciones evaluadas."
            ],
            "scope": "Resultados documentados en el informe del 31 de octubre de 2026. Las pruebas no incluyeron compras ni pagos reales; la validación integrada de compras, pagos y retiros quedó pendiente. Cero alertas npm se limita a las dependencias evaluadas y no equivale a una certificación integral de seguridad."
          },
          name: "HEYPOINT",
          type: "Commerce & Automation Platform",
          description:
            "Plataforma con autenticación, permisos, dashboards, pedidos, pagos y almacenamiento en la nube.",
          results: [],
          technologies: [
            "React",
            "TypeScript",
            "Node.js",
            "Express",
            "Firebase",
            "Mercado Pago",
          ],
          url: "https://heypoint.com.ar/",
        },
      ],
      futureProject: "Espacio preparado para nuevos proyectos",
      futureDescription:
        "La colección crecerá con nuevos casos profesionales documentados.",
      skillsLabel: "Habilidades técnicas",
      skills: [
        {
          label: "Frontend",
          items: [
            "React",
            "TypeScript",
            "JavaScript",
            "HTML5",
            "CSS3",
            "Tailwind CSS",
            "Vite",
            "FlutterFlow",
          ],
        },
        {
          label: "Backend",
          items: [
            "Node.js",
            "Express.js",
            "REST APIs",
            "Python",
            "Java",
            "Spring Boot",
            "PHP",
            "C# / .NET",
          ],
        },
        {
          label: "Bases de datos",
          items: [
            "MySQL",
            "PostgreSQL",
            "SQL Server",
            "MariaDB",
            "Oracle",
            "MongoDB",
            "Firebase",
          ],
        },
        {
          label: "Inteligencia artificial",
          items: [
            "OpenAI API",
            "Prompt Engineering",
            "Análisis asistido por IA",
            "Automatización",
          ],
        },
        {
          label: "Herramientas y despliegue",
          items: [
            "Git",
            "GitHub",
            "Docker",
            "CI/CD",
            "Azure",
            "Render",
            "Aiven",
            "Grafana",
          ],
        },
      ],
      educationLabel: "Educación e idiomas",
      education: [
        {
          degree: "Bachelor's in Software Engineering",
          school: "Universidad Fidélitas",
        },
        {
          degree: "Bachelor's in Business Administration (Finance)",
          school: "Universidad Latina de Costa Rica",
        },
      ],
      languages: [
        { name: "Español", level: "Nativo" },
        { name: "Inglés", level: "C1" },
      ],
    },
    contact: {
      kicker: "Contacto",
      title: "¿Tienes un proyecto en mente?",
      description:
        "Ya sea una web, una aplicación personalizada, una tienda online o una solución inteligente, conversemos sobre lo que necesitas desarrollar.",
      name: "Nombre",
      email: "Email",
      service: "Servicio de interés",
      project: "Descripción del proyecto",
      projectPlaceholder:
        "Cuéntame brevemente qué quieres construir, para quién y qué objetivo buscas alcanzar.",
      selectPlaceholder: "Selecciona una opción",
      recruitment: "Oportunidad laboral / Recruitment",
      submit: "Enviar consulta",
      response: "Responderé tan pronto como sea posible.",
      direct: "Contacto directo",
      whatsapp: "WhatsApp",
      whatsappPending: "Configurable próximamente",
    },
    footer: {
      role: "Fullstack Engineer · Costa Rica",
      back: "Volver arriba",
    },
  },
  en: {
    meta: {
      title: "Eddier Soto Vargas | Fullstack Engineer",
      description:
        "Fullstack Engineer focused on web applications, digital platforms, e-commerce, automation, and artificial intelligence.",
    },
    nav: {
      home: "Home",
      services: "Services",
      career: "Career & Work",
      contact: "Contact",
      cta: "Let's talk",
      menu: "Open menu",
    },
    hero: {
      eyebrow: "Fullstack Engineer · Costa Rica",
      title: "Building digital solutions that turn ideas into reality.",
      description:
        "I'm a Fullstack Engineer focused on building web applications, digital platforms, e-commerce experiences, and intelligent solutions. I combine software engineering with business insight to create modern, functional, and scalable technology.",
      services: "Explore services",
      career: "Career & work",
      contact: "Contact me",
      availability: "Available for projects and international opportunities",
      signal: "Engineering + product + business",
    },
    services: {
      kicker: "Services",
      title: "Technology designed to solve real needs.",
      subtitle:
        "I design and build complete digital products, from the initial idea to a solution ready to grow.",
      consult: "Inquire",
      items: [
        {
          id: "web",
          title: "Web Development",
          description:
            "Corporate websites, modern web experiences, and digital solutions tailored to each business.",
        },
        {
          id: "apps",
          title: "Web Apps & Systems",
          description:
            "Custom applications, admin panels, dashboards, and business platforms.",
        },
        {
          id: "commerce",
          title: "E-commerce & Online Stores",
          description:
            "Online stores, digital catalogs, commerce platforms, and purchasing experiences.",
        },
        {
          id: "landing",
          title: "Landing Pages & Templates",
          description:
            "Landing pages, custom templates, promotional pages, and campaign experiences.",
        },
        {
          id: "automation",
          title: "Automation & Integrations",
          description:
            "Tools that connect platforms, reduce manual work, and optimize processes.",
        },
        {
          id: "ai",
          title: "AI Applications",
          description:
            "Intelligent tools for information analysis, process assistance, automation, and AI-powered financial analysis.",
        },
      ],
    },
    career: {
      kicker: "Career & Work",
      title: "Career & Work",
      subtitle:
        "Experience, projects, and skills behind the solutions I build.",
      profileLabel: "Professional profile",
      profile: [
        "I'm Eddier Soto Vargas, a Fullstack Engineer focused on web applications, enterprise software development, automation, and technology integrations.",
        "My background in Software Engineering and Business Administration with an emphasis in Finance helps me understand both the technical aspects and the business needs behind every project.",
      ],
      resultsLabel: "Historical results",
      resultsNote:
        "Results from previous work; they are not commercial promises. HeyPoint and TechSeed audit figures reflect the evaluated dependencies as of October 31, 2026, and are not a comprehensive security certification.",
      results: [
        { value: "~50%", label: "fewer duplicate records" },
        { value: "~30%", label: "reduction in processing times" },
        { value: "~25%", label: "increase in web visits" },
        { value: "~20%", label: "increase in business inquiries" },
        { value: "63/63", label: "checks passed across HeyPoint’s four applications" },
        { value: "18", label: "regression tests executed for TechSeed" },
        { value: "0", label: "known vulnerabilities reported in the final npm audits of HeyPoint and TechSeed" },
        { value: "PHP + JS", label: "version controls and security hardening implemented in MotoApex" },
      ],
      experienceLabel: "Professional experience",
      experience: [
        {
          company: "Navisa de Heredia S.A.",
          role: "Fullstack Engineer",
          period: "2024 / Present",
          bullets: [
            "Development of applications and APIs.",
            "Automation of business operations.",
            "System integrations and web platform modernization.",
            "Solutions for administrative, inventory, and logistics processes.",
          ],
        },
        {
          company: "Navisa de Heredia S.A.",
          role: "IT Support & Systems",
          period: "2021 / 2023",
          bullets: [
            "Technology and systems support.",
            "Incident diagnosis and resolution.",
            "Operational continuity maintenance.",
          ],
        },
      ],
      projectsLabel: "Featured projects",
      projectsIntro:
        "Digital products where engineering translates into clearer, more efficient workflows.",
      viewProject: "View details",
      visitProject: "Visit project",
      resultsTitle: "Results",
      technologiesTitle: "Technologies",
      projects: [
        {
          "id": "motoapex",
          security: {
            "summary": "Security structure strengthened in response to PHP and Node.js advisories, with isolated testing, build requirements and compatibility checks.",
            "changes": [
              "Affected versions and dependencies updated; build checks reject Node.js versions outside the defined requirements.",
              "The API requires patched PHP, PDO MySQL and Sodium. Missing requirements block access with a generic error while the reason is recorded in private logs.",
              "Permissions, sessions, MFA, password recovery, validation and data protection strengthened."
            ],
            "tests": [
              "Fixes tested in isolated environments before being pushed to GitHub.",
              "Tests, builds and security checks performed to verify code compatibility."
            ],
            "scope": "Node.js is used in the Web/Admin environment; the admin is deployed as static files and the API runs on PHP. Hostinger reported applying the PHP patch, complemented by application controls. A specific Node.js update on Hostinger was not verified; code tests do not certify the patches installed on the hosting platform."
          },
          "name": "MotoApex",
          "type": "Commerce & Automation Platform",
          "description": "Commerce and automation platform with a public website, an administrative dashboard, CMS-style website content management from the dashboard, and inventory management.",
          "results": [],
          "technologies": [
            "React 19",
            "TypeScript",
            "PHP / PDO",
            "MySQL",
            "Vite",
            "Tailwind CSS",
            "React Router",
            "Recharts",
            "Lucide"
          ],
          "architecture": [
            {
              "label": "Public website",
              "stack": "React 19, TypeScript, Vite, Tailwind CSS, React Router"
            },
            {
              "label": "Admin dashboard",
              "stack": "React 19, TypeScript, Vite, Tailwind CSS, Recharts, Lucide"
            },
            {
              "label": "Backend",
              "stack": "REST API built with PHP and PDO"
            },
            {
              "label": "Database",
              "stack": "MySQL"
            }
          ],
          "url": "https://motoapexcr.com/"
        },
        {
          id: "techseed",
          security: {
            "summary": "Preventive review and strengthening of dependencies, authorization, sessions and server configuration to address security weaknesses.",
            "changes": [
              "Dependencies and lockfile updated; the final npm audit reported no known vulnerabilities at the time of review.",
              "Role separation and protected-route authorization prevent access to other users’ requests and restrict administrative operations.",
              "Insecure fallback JWT secret removed, a strong secret required, and MySQL sessions added with revocation and inactivity expiration.",
              "Rate limits, security headers, CORS restrictions, validation and transactions; CSV export protection and sensitive configuration removed from Git tracking."
            ],
            "tests": [
              "18 regression tests executed.",
              "Clean installation and frontend build verified; ESLint static analysis and GitHub Actions checks incorporated.",
              "Node.js 24.22.2 verified according to the report; final npm audit with 0 known vulnerabilities."
            ],
            "scope": "Changes documented by the TechSeed team in the October 31, 2026 report. This was a preventive review and does not establish evidence of attacks or exploitation. Audit results reflect the time of review."
          },
          name: "TechSeed",
          type: "AI-Powered Academic Workflow",
          description:
            "Academic platform with connected portals, proposal tracking, and artificial intelligence assistance.",
          results: [
            "40% shorter response waits.",
            "30% fewer process errors.",
            "25% improvement in initial proposal preparation.",
          ],
          technologies: ["JavaScript", "React", "REST APIs", "MySQL", "AI"],
          url: "https://palevioletred-pony-152252.hostingersite.com/login",
        },
        {
          id: "heypoint",
          security: {
            "summary": "Coordinated updates across Web, Admin, Backend and Kiosk addressed known vulnerabilities and strengthened authentication, access and data protection.",
            "changes": [
              "Node.js and affected Vite, Axios, Firebase, Express and build dependencies updated.",
              "Cryptographically random OTPs, transactional consumption, session revocation and protection against sensitive response caching.",
              "Session, cart, delayed-response and payment-wait protections in the kiosk; pre-build validation and TypeScript fixes."
            ],
            "tests": [
              "63/63 checks passed: Web 9, Admin 22, Backend 21 and Kiosk 11.",
              "32 automated tests across Backend and Kiosk, 22 functional and equivalence checks in Admin, and 9 technical checks in Web.",
              "Builds and audits validated; the final audit reported 0 npm alerts across the four evaluated applications."
            ],
            "scope": "Results documented in the October 31, 2026 report. No real purchases or payments were made during testing; integrated purchase, payment and collection validation remained pending. Zero npm alerts applies to the evaluated dependencies and is not a comprehensive security certification."
          },
          name: "HEYPOINT",
          type: "Commerce & Automation Platform",
          description:
            "Platform with authentication, permissions, dashboards, orders, payments, and cloud storage.",
          results: [],
          technologies: [
            "React",
            "TypeScript",
            "Node.js",
            "Express",
            "Firebase",
            "Mercado Pago",
          ],
          url: "https://heypoint.com.ar/",
        },
      ],
      futureProject: "Space ready for future projects",
      futureDescription:
        "The collection will grow with new documented professional cases.",
      skillsLabel: "Technical skills",
      skills: [
        {
          label: "Frontend",
          items: [
            "React",
            "TypeScript",
            "JavaScript",
            "HTML5",
            "CSS3",
            "Tailwind CSS",
            "Vite",
            "FlutterFlow",
          ],
        },
        {
          label: "Backend",
          items: [
            "Node.js",
            "Express.js",
            "REST APIs",
            "Python",
            "Java",
            "Spring Boot",
            "PHP",
            "C# / .NET",
          ],
        },
        {
          label: "Databases",
          items: [
            "MySQL",
            "PostgreSQL",
            "SQL Server",
            "MariaDB",
            "Oracle",
            "MongoDB",
            "Firebase",
          ],
        },
        {
          label: "Artificial intelligence",
          items: [
            "OpenAI API",
            "Prompt Engineering",
            "AI-assisted analysis",
            "Automation",
          ],
        },
        {
          label: "Tools & deployment",
          items: [
            "Git",
            "GitHub",
            "Docker",
            "CI/CD",
            "Azure",
            "Render",
            "Aiven",
            "Grafana",
          ],
        },
      ],
      educationLabel: "Education & languages",
      education: [
        {
          degree: "Bachelor's in Software Engineering",
          school: "Universidad Fidélitas",
        },
        {
          degree: "Bachelor's in Business Administration (Finance)",
          school: "Universidad Latina de Costa Rica",
        },
      ],
      languages: [
        { name: "Spanish", level: "Native" },
        { name: "English", level: "C1" },
      ],
    },
    contact: {
      kicker: "Contact",
      title: "Have a project in mind?",
      description:
        "Whether it is a website, a custom application, an online store, or an intelligent solution, let's discuss what you need to build.",
      name: "Name",
      email: "Email",
      service: "Service of interest",
      project: "Project description",
      projectPlaceholder:
        "Briefly tell me what you want to build, who it is for, and what outcome you want to achieve.",
      selectPlaceholder: "Select an option",
      recruitment: "Job opportunity / Recruitment",
      submit: "Send inquiry",
      response: "I will reply as soon as possible.",
      direct: "Direct contact",
      whatsapp: "WhatsApp",
      whatsappPending: "Configurable soon",
    },
    footer: {
      role: "Fullstack Engineer · Costa Rica",
      back: "Back to top",
    },
  },
} as const
