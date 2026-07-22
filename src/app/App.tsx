import { useState, useEffect, useRef, createContext, useContext } from "react";
import {
  ExternalLink, Mail, MapPin, ChevronDown,
  Menu, X, ArrowUpRight, Linkedin, Award, GraduationCap,
} from "lucide-react";

// ─── i18n ─────────────────────────────────────────────────────────────────────

type Lang = "es" | "en";

const T = {
  es: {
    nav: ["Inicio", "Experiencia", "Proyectos", "Skills", "Contacto"],
    heroRole: "Full-Stack Developer",
    heroLocation: "Heredia · CR",
    heroP1: "Desarrollador Full-Stack construyendo aplicaciones web, APIs REST, sistemas internos y automatizaciones. Especializado en Node.js, React y TypeScript — con integración activa de IA (OpenAI API) y despliegue en cloud.",
    heroP2: "Certificado Azure AZ-900. Inglés C1.",
    heroCta1: "Ver proyectos",
    heroCta2: "Contacto",
    stat1: "Proyectos\ndesarrollados",
    stat2: "Años de\nexperiencia",
    stat3: "Nivel\nde inglés",
    expTitle: "Experiencia",
    jobRole: "Operaciones de TI & Full-Stack Developer",
    jobCurrent: "2019 – Actual",
    jobBullets: [
      "Desarrollo y mantenimiento de apps web, sistemas internos, paneles admin y servicios backend con Node.js, React y SQL.",
      "Diseño e integración de APIs REST, autenticación, control de acceso por roles, módulos CRUD y reportes.",
      "Creación de interfaces y prototipos con FlutterFlow + integración Firebase, autenticación y consumo de APIs.",
      "Diagnóstico y solución de errores en producción: frontend, backend, APIs, BD, seguridad y despliegues.",
      "Implementación de automatizaciones para reducir tareas manuales y apoyar operaciones críticas del negocio.",
      "Uso de Git/GitHub, metodologías ágiles y herramientas de IA para documentar y refactorizar con mayor eficiencia.",
    ],
    eduLabel: "Formación académica",
    edu1Title: "Ingeniería en Desarrollo de Software",
    edu1Sub: "Universidad Fidélitas",
    edu2Title: "Administración de Negocios · Finanzas",
    edu2Sub: "Universidad Latina de Costa Rica",
    certLabel: "Certificaciones e Idiomas",
    certs: [
      { badge: "AZ-900", label: "Microsoft Certified: Azure Fundamentals" },
      { badge: "SFC", label: "Scrum Fundamentals Certified" },
      { badge: "C1", label: "Inglés avanzado · Documentación técnica" },
      { badge: "Native", label: "Español nativo" },
    ],
    projectsTitle: "Proyectos",
    projectTypes: {
      "01": "E-commerce & Automatización",
      "02": "Plataforma TCU · IA Académica",
      "03": "Landing Page",
      "04": "Landing Page · Heredia",
    },
    projectDescs: {
      "01": "Plataforma de comercio con interfaces modernas, servicios backend, autenticación, almacenamiento, pagos en línea con Mercado Pago, validación de tokens y gestión automatizada de órdenes. Flujos orientados a compras automatizadas y retiro inteligente de productos.",
      "02": "Plataforma institucional universitaria para gestión de anteproyectos TCU. Backend completo con módulo de inteligencia artificial (OpenAI API) para analizar anteproyectos estudiantiles, generar observaciones automáticas y apoyar revisión académica. Portales diferenciados para estudiantes, coordinadores y administración.",
      "03": "Landing page profesional con diseño visual impactante, optimizada para conversión y rendimiento. Interfaz limpia con animaciones fluidas, estructura semántica sólida y arquitectura React moderna.",
      "04": "Sitio de presentación corporativa para empresa ubicada en Heredia, Costa Rica. Diseño funcional orientado a captar clientes locales, con navegación clara y secciones informativas bien definidas.",
    },
    skillsTitle: "Stack técnico",
    skillCats: [
      { label: "Frontend & Low-Code", items: ["React", "TypeScript", "JavaScript ES6+", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Vite", "FlutterFlow", "UI/UX"] },
      { label: "Backend & APIs", items: ["Node.js", "Express.js", "REST APIs", "Java + Spring Boot", "PHP PDO/MVC", "C#/.NET", "Python", "Auth & Roles"] },
      { label: "Bases de Datos", items: ["MySQL", "PostgreSQL", "SQL Server", "MariaDB", "Oracle/PL-SQL", "MongoDB", "Firebase Firestore"] },
      { label: "IA & Automatización", items: ["OpenAI API", "Prompt Engineering", "Análisis asistido por IA", "Automatización de procesos", "Generación de docs"] },
      { label: "Cloud, DevOps & Monitoreo", items: ["Firebase", "Microsoft Azure", "Render", "Aiven", "Git/GitHub", "Docker", "CI/CD", "Prometheus", "Grafana"] },
      { label: "Prácticas & Métodos", items: ["Scrum/Agile", "Principios SOLID", "Patrones de Diseño", "Debugging", "Documentación", "Pruebas unitarias"] },
    ],
    aboutTitle: "Sobre mí",
    aboutP1: "Soy Eddier Soto Vargas, desarrollador Full-Stack de Costa Rica. Construyo productos web completos — desde el modelado de datos y APIs REST hasta interfaces React con TypeScript — con enfoque en soluciones mantenibles y bien estructuradas.",
    aboutP2: "Trabajo en Navisa de Heredia S.A. liderando desarrollo de sistemas internos, integraciones con servicios cloud y automatización de procesos. Paralelamente construyo proyectos propios integrando inteligencia artificial: análisis asistido por OpenAI API, prompt engineering y generación automática de documentación.",
    aboutP3: "Combino desarrollo tradicional con low-code (FlutterFlow) según las necesidades del proyecto. Me caracterizo por la resolución de problemas, adaptabilidad a distintos stacks y comunicación técnica clara — en español e inglés (C1).",
    aboutRows: [
      { label: "Ubicación", value: "Heredia · CR" },
      { label: "Especialidad", value: "Full-Stack Web" },
      { label: "Empresa", value: "Navisa de Heredia S.A." },
      { label: "Universidad", value: "Fidélitas · Ing. Desarrollo de Software" },
      { label: "Certificación", value: "Azure AZ-900 · SFC" },
      { label: "Inglés", value: "Avanzado (C1)" },
    ],
    contactTitle: "Contacto",
    contactCta: "¿Tienes un proyecto o posición?",
    contactCtaAccent: "Conversemos.",
    contactSub: "Disponible para posiciones full-time, proyectos freelance o colaboraciones. Respondo rápido en español e inglés.",
    contactLocation: "Heredia · Costa Rica",
    locationLabel: "Ubicación",
    footerRole: "Full-Stack Developer · Heredia · Costa Rica",
  },
  en: {
    nav: ["Home", "Experience", "Projects", "Skills", "Contact"],
    heroRole: "Full-Stack Developer",
    heroLocation: "Heredia · CR",
    heroP1: "Full-Stack Developer building web applications, REST APIs, internal systems and automations. Specialized in Node.js, React and TypeScript — with active AI integration (OpenAI API) and cloud deployment.",
    heroP2: "Azure AZ-900 Certified. English C1.",
    heroCta1: "View projects",
    heroCta2: "Contact",
    stat1: "Projects\ndelivered",
    stat2: "Years of\nexperience",
    stat3: "English\nlevel",
    expTitle: "Experience",
    jobRole: "IT Operations & Full-Stack Developer",
    jobCurrent: "2019 – Present",
    jobBullets: [
      "Development and maintenance of web apps, internal systems, admin panels and backend services using Node.js, React and SQL.",
      "Design and integration of REST APIs, authentication, role-based access control, CRUD modules and reports.",
      "UI and prototype creation with FlutterFlow + Firebase integration, authentication and API consumption.",
      "Diagnosis and resolution of production issues: frontend, backend, APIs, databases, security and deployments.",
      "Implementation of automations to reduce manual tasks and support critical business operations.",
      "Use of Git/GitHub, agile methodologies and AI tools to document, refactor and solve technical problems efficiently.",
    ],
    eduLabel: "Education",
    edu1Title: "Software Development Engineering",
    edu1Sub: "Universidad Fidélitas",
    edu2Title: "Business Administration · Finance",
    edu2Sub: "Universidad Latina de Costa Rica",
    certLabel: "Certifications & Languages",
    certs: [
      { badge: "AZ-900", label: "Microsoft Certified: Azure Fundamentals" },
      { badge: "SFC", label: "Scrum Fundamentals Certified" },
      { badge: "C1", label: "Advanced English · Technical documentation" },
      { badge: "Native", label: "Native Spanish" },
    ],
    projectsTitle: "Projects",
    projectTypes: {
      "01": "E-commerce & Automation",
      "02": "University Platform · Academic AI",
      "03": "Landing Page",
      "04": "Landing Page · Heredia",
    },
    projectDescs: {
      "01": "Commerce platform with modern interfaces, backend services, authentication, storage, online payments via Mercado Pago, token validation and automated order management. Flows oriented to automated purchases and smart product pickup.",
      "02": "University institutional platform for managing TCU pre-projects. Full backend with an AI module (OpenAI API) to analyze student proposals, generate automatic observations and support academic review. Separate portals for students, coordinators and administration.",
      "03": "Professional landing page with a high-impact visual design, optimized for conversion and performance. Clean interface with smooth animations, solid semantic structure and modern React architecture.",
      "04": "Corporate presentation site for a company based in Heredia, Costa Rica. Functional design focused on attracting local clients, with clear navigation and well-defined informational sections.",
    },
    skillsTitle: "Tech Stack",
    skillCats: [
      { label: "Frontend & Low-Code", items: ["React", "TypeScript", "JavaScript ES6+", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Vite", "FlutterFlow", "UI/UX"] },
      { label: "Backend & APIs", items: ["Node.js", "Express.js", "REST APIs", "Java + Spring Boot", "PHP PDO/MVC", "C#/.NET", "Python", "Auth & Roles"] },
      { label: "Databases", items: ["MySQL", "PostgreSQL", "SQL Server", "MariaDB", "Oracle/PL-SQL", "MongoDB", "Firebase Firestore"] },
      { label: "AI & Automation", items: ["OpenAI API", "Prompt Engineering", "AI-assisted analysis", "Process automation", "Doc generation"] },
      { label: "Cloud, DevOps & Monitoring", items: ["Firebase", "Microsoft Azure", "Render", "Aiven", "Git/GitHub", "Docker", "CI/CD", "Prometheus", "Grafana"] },
      { label: "Practices & Methods", items: ["Scrum/Agile", "SOLID Principles", "Design Patterns", "Debugging", "Documentation", "Unit Testing"] },
    ],
    aboutTitle: "About me",
    aboutP1: "I'm Eddier Soto Vargas, a Full-Stack Developer from Costa Rica. I build complete web products — from data modeling and REST APIs to React interfaces with TypeScript — with a focus on maintainable and well-structured solutions.",
    aboutP2: "I work at Navisa de Heredia S.A. leading internal systems development, cloud service integrations and process automation. I also build personal projects integrating artificial intelligence: AI-assisted analysis with OpenAI API, prompt engineering and automatic documentation generation.",
    aboutP3: "I combine traditional development with low-code (FlutterFlow) based on project needs. I'm known for problem-solving, adaptability across different stacks and clear technical communication — in both Spanish and English (C1).",
    aboutRows: [
      { label: "Location", value: "Heredia · CR" },
      { label: "Specialty", value: "Full-Stack Web" },
      { label: "Company", value: "Navisa de Heredia S.A." },
      { label: "University", value: "Fidélitas · Software Engineering" },
      { label: "Certifications", value: "Azure AZ-900 · SFC" },
      { label: "English", value: "Advanced (C1)" },
    ],
    contactTitle: "Contact",
    contactCta: "Have a project or position?",
    contactCtaAccent: "Let's talk.",
    contactSub: "Available for full-time positions, freelance projects or collaborations. I respond quickly in both Spanish and English.",
    contactLocation: "Heredia · Costa Rica",
    locationLabel: "Location",
    footerRole: "Full-Stack Developer · Heredia · Costa Rica",
  },
} as const;

// ─── Context ──────────────────────────────────────────────────────────────────

const LangCtx = createContext<{ lang: Lang; toggle: () => void }>({
  lang: "es",
  toggle: () => {},
});
const useLang = () => useContext(LangCtx);

// ─── Projects data ────────────────────────────────────────────────────────────

const PROJECTS = [
  { id: "01", name: "Heypoint", stack: ["React", "TypeScript", "Vite", "Node.js", "Express", "Firebase", "Mercado Pago"], color: "#00d4aa", url: "https://heypoint.com.ar/" },
  { id: "02", name: "TechSeed", stack: ["React", "TypeScript", "Node.js", "REST APIs", "OpenAI API", "MySQL"], color: "#7c3aed", url: "https://palevioletred-pony-152252.hostingersite.com/login" },
  { id: "03", name: "NelsonlaraDesing", stack: ["TypeScript", "React", "Node.js"], color: "#f59e0b", url: "https://nelsonlaradesign.com/" },
  { id: "04", name: "Navisa", stack: ["JavaScript", "React", "Node.js"], color: "#ec4899", url: "https://www.navisa.cr/" },
];

const SKILL_COLORS = ["#00d4aa", "#7c3aed", "#f59e0b", "#ec4899", "#3b82f6", "#10b981"];

// ─── Nav ──────────────────────────────────────────────────────────────────────

function Nav() {
  const { lang, toggle } = useLang();
  const t = T[lang];
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const ids = ["hero", "experience", "projects", "skills", "contact"];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : ""}`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => scrollTo("hero")}
          className="font-mono text-sm text-primary tracking-widest uppercase font-medium"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          ESV<span className="text-muted-foreground">_dev</span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8">
            {t.nav.map((label, i) => (
              <li key={ids[i]}>
                <button
                  onClick={() => scrollTo(ids[i])}
                  className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors duration-200"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>

          {/* Lang toggle */}
          <button
            onClick={toggle}
            className="flex items-center gap-1 border border-border rounded px-2.5 py-1 hover:border-primary/50 transition-all duration-200"
          >
            <span
              className={`font-mono text-[10px] uppercase tracking-widest transition-colors ${lang === "es" ? "text-primary" : "text-muted-foreground"}`}
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              ES
            </span>
            <span className="text-border text-[10px]">/</span>
            <span
              className={`font-mono text-[10px] uppercase tracking-widest transition-colors ${lang === "en" ? "text-primary" : "text-muted-foreground"}`}
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              EN
            </span>
          </button>
        </div>

        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggle}
            className="flex items-center gap-1 border border-border rounded px-2 py-1"
          >
            <span className={`font-mono text-[10px] uppercase ${lang === "es" ? "text-primary" : "text-muted-foreground"}`} style={{ fontFamily: "'JetBrains Mono', monospace" }}>ES</span>
            <span className="text-border text-[10px]">/</span>
            <span className={`font-mono text-[10px] uppercase ${lang === "en" ? "text-primary" : "text-muted-foreground"}`} style={{ fontFamily: "'JetBrains Mono', monospace" }}>EN</span>
          </button>
          <button className="text-muted-foreground hover:text-foreground" onClick={() => setOpen(!open)}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border px-6 pb-6">
          <ul className="flex flex-col gap-4 pt-4">
            {t.nav.map((label, i) => (
              <li key={ids[i]}>
                <button
                  onClick={() => scrollTo(ids[i])}
                  className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground hover:text-foreground w-full text-left transition-colors"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  const { lang } = useLang();
  const t = T[lang];

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16">
      <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "linear-gradient(rgba(0,212,170,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,170,1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      <div className="absolute top-1/3 right-0 w-[700px] h-[700px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(0,212,170,0.05) 0%, transparent 70%)" }} />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(124,58,237,0.04) 0%, transparent 70%)" }} />

      <div className="max-w-6xl mx-auto px-6 py-24 relative z-10">
        <div className="grid md:grid-cols-[1fr_auto] gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-[11px] text-primary tracking-widest uppercase" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{t.heroRole}</span>
              <span className="text-border">·</span>
              <span className="font-mono text-[11px] text-muted-foreground tracking-widest uppercase" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{t.heroLocation}</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-[1.02] tracking-tight mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Eddier<br /><span className="text-primary">Soto</span><br />Vargas
            </h1>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>{t.heroP1}</p>
            <p className="text-sm text-muted-foreground/70 leading-relaxed max-w-xl mb-10" style={{ fontFamily: "'Inter', sans-serif" }}>{t.heroP2}</p>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-mono text-[11px] uppercase tracking-widest px-6 py-3 rounded transition-all duration-200 hover:opacity-90 hover:gap-3 font-medium"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {t.heroCta1} <ArrowUpRight size={13} />
              </button>
              <a
                href="mailto:eddiii1194@gmail.com"
                className="inline-flex items-center gap-2 border border-border text-foreground font-mono text-[11px] uppercase tracking-widest px-6 py-3 rounded transition-all duration-200 hover:border-primary/50 hover:text-primary"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {t.heroCta2} <Mail size={13} />
              </a>
            </div>
          </div>

          <div className="hidden md:flex flex-col gap-4">
            {[
              { num: "6+", label: t.stat1 },
              { num: "6+", label: t.stat2 },
              { num: "C1", label: t.stat3 },
            ].map((s) => (
              <div key={s.label} className="border border-border rounded p-4 text-right min-w-[115px] bg-card/40">
                <div className="text-2xl font-bold text-primary mb-0.5" style={{ fontFamily: "'Outfit', sans-serif" }}>{s.num}</div>
                <div className="font-mono text-[9px] text-muted-foreground uppercase tracking-widest leading-tight whitespace-pre-line" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground animate-bounce">
          <ChevronDown size={16} />
        </div>
      </div>
    </section>
  );
}

// ─── Experience ───────────────────────────────────────────────────────────────

function Experience() {
  const { lang } = useLang();
  const t = T[lang];

  return (
    <section id="experience" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-baseline gap-4 mb-16">
          <span className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase" style={{ fontFamily: "'JetBrains Mono', monospace" }}>02 /</span>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "'Outfit', sans-serif" }}>{t.expTitle}</h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid md:grid-cols-[1fr_1fr] gap-8">
          <div className="border border-border rounded bg-card/40 p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full" style={{ background: "#00d4aa" }} />
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <h3 className="text-lg font-bold mb-1" style={{ fontFamily: "'Outfit', sans-serif" }}>Navisa de Heredia S.A.</h3>
                <p className="font-mono text-[10px] text-primary uppercase tracking-widest" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{t.jobRole}</p>
              </div>
              <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider shrink-0" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{t.jobCurrent}</span>
            </div>
            <ul className="space-y-2.5">
              {t.jobBullets.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-muted-foreground" style={{ fontFamily: "'Inter', sans-serif" }}>
                  <span className="text-primary mt-1 shrink-0">›</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <div className="border border-border rounded bg-card/40 p-6">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap size={16} className="text-primary" />
                <span className="font-mono text-[10px] text-primary uppercase tracking-widest" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{t.eduLabel}</span>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm mb-0.5" style={{ fontFamily: "'Outfit', sans-serif" }}>{t.edu1Title}</h4>
                  <p className="text-xs text-muted-foreground" style={{ fontFamily: "'Inter', sans-serif" }}>{t.edu1Sub}</p>
                </div>
                <div className="border-t border-border pt-4">
                  <h4 className="font-semibold text-sm mb-0.5" style={{ fontFamily: "'Outfit', sans-serif" }}>{t.edu2Title}</h4>
                  <p className="text-xs text-muted-foreground" style={{ fontFamily: "'Inter', sans-serif" }}>{t.edu2Sub}</p>
                </div>
              </div>
            </div>

            <div className="border border-border rounded bg-card/40 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Award size={16} className="text-primary" />
                <span className="font-mono text-[10px] text-primary uppercase tracking-widest" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{t.certLabel}</span>
              </div>
              <div className="space-y-3">
                {t.certs.map((c) => (
                  <div key={c.badge} className="flex items-center gap-3">
                    <span className="font-mono text-[9px] text-primary bg-primary/10 px-2 py-0.5 rounded border border-primary/20 shrink-0" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{c.badge}</span>
                    <span className="text-sm text-muted-foreground" style={{ fontFamily: "'Inter', sans-serif" }}>{c.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Projects ─────────────────────────────────────────────────────────────────

function Projects() {
  const { lang } = useLang();
  const t = T[lang];
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-baseline gap-4 mb-16">
          <span className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase" style={{ fontFamily: "'JetBrains Mono', monospace" }}>03 /</span>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "'Outfit', sans-serif" }}>{t.projectsTitle}</h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-border rounded overflow-hidden">
          {PROJECTS.map((p) => (
            <a
              key={p.id}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setActive(p.id)}
              onMouseLeave={() => setActive(null)}
              className="bg-card p-8 relative group transition-all duration-300 cursor-pointer block"
              style={{ background: active === p.id ? p.color + "12" : undefined }}
            >
              <span
                className="font-mono font-bold leading-none absolute -top-1 right-5 select-none pointer-events-none transition-all duration-300 text-[72px]"
                style={{ color: active === p.id ? p.color + "18" : "rgba(255,255,255,0.025)" }}
              >
                {p.id}
              </span>

              <div className="relative z-10">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div>
                    <h3
                      className="text-xl font-bold mb-1 transition-colors duration-200"
                      style={{ fontFamily: "'Outfit', sans-serif", color: active === p.id ? p.color : undefined }}
                    >
                      {p.name}
                    </h3>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                      {t.projectTypes[p.id as keyof typeof t.projectTypes]}
                    </span>
                  </div>
                  <ArrowUpRight size={16} className="mt-1 text-muted-foreground group-hover:text-foreground transition-colors shrink-0" />
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-5 mt-3" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {t.projectDescs[p.id as keyof typeof t.projectDescs]}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {p.stack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[9px] uppercase tracking-wide px-2 py-1 rounded border border-border text-muted-foreground transition-all duration-200"
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        borderColor: active === p.id ? p.color + "50" : undefined,
                        color: active === p.id ? p.color : undefined,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Skills ───────────────────────────────────────────────────────────────────

function Skills() {
  const { lang } = useLang();
  const t = T[lang];
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" className="py-24" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-baseline gap-4 mb-16">
          <span className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase" style={{ fontFamily: "'JetBrains Mono', monospace" }}>04 /</span>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "'Outfit', sans-serif" }}>{t.skillsTitle}</h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded overflow-hidden">
          {t.skillCats.map((cat, i) => (
            <div key={cat.label} className="bg-card p-6 transition-all duration-300 hover:bg-card/80">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-2 h-2 rounded-full shrink-0" style={{ background: SKILL_COLORS[i] }} />
                <span className="font-mono text-[10px] uppercase tracking-widest" style={{ fontFamily: "'JetBrains Mono', monospace", color: SKILL_COLORS[i] }}>{cat.label}</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {cat.items.map((item, j) => (
                  <span
                    key={item}
                    className="font-mono text-[10px] uppercase tracking-wide px-2 py-1 rounded border text-muted-foreground transition-all duration-500"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      borderColor: visible ? SKILL_COLORS[i] + "30" : "rgba(255,255,255,0.07)",
                      opacity: visible ? 1 : 0,
                      transform: visible ? "translateY(0)" : "translateY(6px)",
                      transitionDelay: `${i * 60 + j * 30}ms`,
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── About ────────────────────────────────────────────────────────────────────

function About() {
  const { lang } = useLang();
  const t = T[lang];

  return (
    <section id="about" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-baseline gap-4 mb-16">
          <span className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase" style={{ fontFamily: "'JetBrains Mono', monospace" }}>05 /</span>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "'Outfit', sans-serif" }}>{t.aboutTitle}</h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid md:grid-cols-[3fr_2fr] gap-16 items-start">
          <div className="space-y-4">
            <p className="text-base text-foreground leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
              {t.aboutP1.split("Eddier Soto Vargas").map((part, i) =>
                i === 0 ? (
                  <span key={i}>{part}<strong className="text-primary font-medium">Eddier Soto Vargas</strong></span>
                ) : (
                  <span key={i}>{part}</span>
                )
              )}
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>{t.aboutP2}</p>
            <p className="text-sm text-muted-foreground leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>{t.aboutP3}</p>
          </div>

          <div className="space-y-0 border border-border rounded overflow-hidden">
            {t.aboutRows.map((item, i) => (
              <div key={item.label} className={`flex justify-between items-center px-5 py-3 ${i % 2 === 0 ? "bg-card/60" : "bg-card/20"}`}>
                <span className="font-mono text-[9px] text-muted-foreground uppercase tracking-widest" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{item.label}</span>
                <span className="text-xs text-foreground text-right" style={{ fontFamily: "'Inter', sans-serif" }}>{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Contact ──────────────────────────────────────────────────────────────────

function Contact() {
  const { lang } = useLang();
  const t = T[lang];

  const items = [
    { icon: <Mail size={14} />, label: "Email", value: "eddiii1194@gmail.com", href: "mailto:eddiii1194@gmail.com" },
    { icon: <Linkedin size={14} />, label: "LinkedIn", value: "linkedin.com/in/eddiersoto", href: "https://linkedin.com/in/eddiersoto" },
    { icon: <MapPin size={14} />, label: t.locationLabel, value: t.contactLocation, href: null },
  ];

  return (
    <section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-baseline gap-4 mb-16">
          <span className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase" style={{ fontFamily: "'JetBrains Mono', monospace" }}>06 /</span>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "'Outfit', sans-serif" }}>{t.contactTitle}</h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xl md:text-2xl font-medium leading-snug mb-5" style={{ fontFamily: "'Outfit', sans-serif" }}>
              {t.contactCta}<br /><span className="text-primary">{t.contactCtaAccent}</span>
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>{t.contactSub}</p>
          </div>

          <div className="space-y-3">
            {items.map((item) => (
              <div key={item.label} className="flex items-center gap-4 p-4 border border-border rounded bg-card/40 group hover:border-primary/30 transition-all duration-200">
                <span className="text-primary">{item.icon}</span>
                <div className="flex-1">
                  <div className="font-mono text-[9px] text-muted-foreground uppercase tracking-widest mb-0.5" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{item.label}</div>
                  {item.href ? (
                    <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="text-sm text-foreground group-hover:text-primary transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-sm text-foreground" style={{ fontFamily: "'Inter', sans-serif" }}>{item.value}</span>
                  )}
                </div>
                {item.href && <ExternalLink size={12} className="text-muted-foreground group-hover:text-primary transition-colors shrink-0" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  const { lang } = useLang();
  const t = T[lang];
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-3">
        <span className="font-mono text-xs text-muted-foreground" style={{ fontFamily: "'JetBrains Mono', monospace" }}>© 2026 Eddier Soto Vargas</span>
        <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{t.footerRole}</span>
      </div>
    </footer>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  const [lang, setLang] = useState<Lang>("es");
  const toggle = () => setLang((l) => (l === "es" ? "en" : "es"));

  return (
    <LangCtx.Provider value={{ lang, toggle }}>
      <div className="bg-background text-foreground min-h-screen relative" style={{ fontFamily: "'Outfit', sans-serif" }}>
        {/* Global background */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`, backgroundRepeat: "repeat", backgroundSize: "128px 128px" }} />
          <div className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full" style={{ background: "radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 65%)" }} />
          <div className="absolute top-[30%] -right-60 w-[800px] h-[800px] rounded-full" style={{ background: "radial-gradient(circle, rgba(0,212,170,0.05) 0%, transparent 65%)" }} />
          <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] rounded-full" style={{ background: "radial-gradient(circle, rgba(236,72,153,0.04) 0%, transparent 65%)" }} />
          <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,1) 2px, rgba(255,255,255,1) 3px)", backgroundSize: "100% 6px" }} />
        </div>

        <div className="relative z-10">
          <Nav />
          <Hero />
          <Experience />
          <Projects />
          <Skills />
          <About />
          <Contact />
          <Footer />
        </div>
      </div>
    </LangCtx.Provider>
  );
}
