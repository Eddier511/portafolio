import { useEffect, useState, type FormEvent, type ReactNode } from "react"
import {
  ArrowRight,
  Bot,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  Code2,
  ExternalLink,
  FileCode2,
  Github,
  Globe2,
  GraduationCap,
  Languages,
  Layers3,
  Linkedin,
  Mail,
  Menu,
  Network,
  Rocket,
  ShoppingBag,
  Sparkles,
  Workflow,
} from "lucide-react"
import { Badge } from "./components/ui/badge"
import { Button } from "./components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./components/ui/dialog"
import { Input } from "./components/ui/input"
import { Label } from "./components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./components/ui/select"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./components/ui/sheet"
import { Textarea } from "./components/ui/textarea"
import { content, type Lang } from "./content"
import logo from "../imports/eddier-soto-logo.png"

const serviceIcons = [Globe2, Layers3, ShoppingBag, Rocket, Workflow, Bot]
const navTargets = ["home", "services", "career", "contact"] as const

function goTo(id: string) {
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: "smooth", block: "start" })
}

function openUrl(url: string) {
  window.open(url, "_blank", "noopener,noreferrer")
}

function SectionHeading({
  kicker,
  title,
  subtitle,
}: {
  kicker: string
  title: string
  subtitle?: string
}) {
  return (
    <div className="max-w-3xl">
      <div className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-primary">
        <span className="h-px w-8 bg-primary" />
        {kicker}
      </div>
      <div
        role="heading"
        aria-level={2}
        className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
      >
        {title}
      </div>
      {subtitle && (
        <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  )
}

function Header({
  lang,
  setLang,
}: {
  lang: Lang
  setLang: (lang: Lang) => void
}) {
  const t = content[lang]
  const navLabels = [t.nav.home, t.nav.services, t.nav.career, t.nav.contact]
  const navButtons = navLabels.map((label, index) => (
    <Button
      key={navTargets[index]}
      variant="ghost"
      size="sm"
      onClick={() => goTo(navTargets[index])}
      className="text-muted-foreground hover:bg-transparent hover:text-foreground"
    >
      {label}
    </Button>
  ))

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Button
          variant="ghost"
          onClick={() => goTo("home")}
          className="gap-3 px-0 hover:bg-transparent"
        >
          <span className="flex size-11 items-center justify-center overflow-hidden">
            <img
              src={logo}
              alt=""
              width="44"
              height="44"
              className="size-full scale-150 object-contain"
            />
          </span>
          <span className="hidden text-left sm:block">
            <span className="block text-sm font-semibold">
              Eddier Soto Vargas
            </span>
            <span className="block text-xs text-muted-foreground">
              Fullstack Engineer
            </span>
          </span>
        </Button>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-1 lg:flex"
        >
          {navButtons}
        </nav>

        <div className="flex items-center gap-2">
          <div
            className="flex rounded-md border border-border bg-card p-1"
            aria-label="Language selector"
          >
            {(["es", "en"] as const).map((option) => (
              <Button
                key={option}
                variant={lang === option ? "secondary" : "ghost"}
                size="sm"
                aria-pressed={lang === option}
                onClick={() => setLang(option)}
                className="h-7 px-2 font-mono text-xs uppercase"
              >
                {option}
              </Button>
            ))}
          </div>
          <Button
            onClick={() => goTo("contact")}
            className="hidden sm:inline-flex"
          >
            {t.nav.cta}
            <ArrowRight />
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="lg:hidden"
                aria-label={t.nav.menu}
              >
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent className="border-border bg-background">
              <SheetHeader>
                <SheetTitle>Eddier Soto Vargas</SheetTitle>
                <SheetDescription>Fullstack Engineer</SheetDescription>
              </SheetHeader>
              <div className="flex flex-col gap-2 px-4 pt-6">
                {navLabels.map((label, index) => (
                  <SheetClose asChild key={navTargets[index]}>
                    <Button
                      variant="ghost"
                      onClick={() => goTo(navTargets[index])}
                      className="h-11 justify-between text-base"
                    >
                      {label}
                      <ChevronRight />
                    </Button>
                  </SheetClose>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

function Hero({ lang }: { lang: Lang }) {
  const t = content[lang].hero
  return (
    <section
      id="home"
      className="relative flex min-h-screen scroll-mt-16 items-center overflow-hidden border-b border-border/60 pt-20"
    >
      <div className="tech-grid absolute inset-0 opacity-40" />
      <div className="hero-glow absolute inset-0" />
      <div className="relative mx-auto grid w-full max-w-7xl gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-center lg:py-28">
        <div>
          <Badge
            variant="outline"
            className="mb-7 gap-2 border-primary/30 bg-primary/5 px-3 py-1 text-primary"
          >
            <span className="size-1.5 rounded-full bg-primary shadow-[0_0_1rem_var(--primary)]" />
            {t.eyebrow}
          </Badge>
          <div className="mb-5 font-mono text-sm uppercase tracking-[0.2em] text-muted-foreground">
            Eddier Soto Vargas
          </div>
          <div
            role="heading"
            aria-level={1}
            className="max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.04em] text-foreground sm:text-5xl lg:text-7xl"
          >
            {t.title}
          </div>
          <p className="mt-7 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            {t.description}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button size="lg" onClick={() => goTo("services")}>
              {t.services}
              <ArrowRight />
            </Button>
            <Button size="lg" variant="outline" onClick={() => goTo("career")}>
              {t.career}
            </Button>
            <Button size="lg" variant="ghost" onClick={() => goTo("contact")}>
              {t.contact}
            </Button>
          </div>
          <div className="mt-10 flex items-center gap-3 text-sm text-muted-foreground">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            {t.availability}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-8 rounded-full bg-primary/10 blur-3xl" />
          <Card className="relative overflow-hidden border-primary/20 bg-card/80 shadow-2xl shadow-primary/5 backdrop-blur-xl">
            <CardHeader className="border-b border-border">
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <span className="size-2.5 rounded-full bg-muted-foreground/40" />
                  <span className="size-2.5 rounded-full bg-muted-foreground/30" />
                  <span className="size-2.5 rounded-full bg-primary/70" />
                </div>
                <span className="font-mono text-xs text-muted-foreground">
                  profile.ts
                </span>
              </div>
            </CardHeader>
            <CardContent className="space-y-5 pt-6 font-mono text-sm">
              <CodeLine
                token="const"
                name="engineer"
                value='"Eddier Soto Vargas"'
              />
              <CodeLine token="type" name="role" value='"Fullstack Engineer"' />
              <CodeLine
                token="focus"
                name="build"
                value='["web", "systems", "AI"]'
              />
              <CodeLine
                token="mindset"
                name="approach"
                value='"business-aware"'
              />
              <div className="my-6 h-px bg-border" />
              <div className="grid grid-cols-3 gap-3">
                {["React", "Node.js", "Python"].map((tech) => (
                  <div
                    key={tech}
                    className="rounded-lg border border-border bg-secondary/50 px-3 py-4 text-center text-xs text-muted-foreground"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="border-t border-border bg-primary/5 py-4">
              <Sparkles className="text-primary" />
              <span className="text-sm text-muted-foreground">{t.signal}</span>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}

function CodeLine({
  token,
  name,
  value,
}: {
  token: string
  name: string
  value: string
}) {
  return (
    <div className="flex flex-wrap gap-2">
      <span className="text-primary">{token}</span>
      <span className="text-chart-2">{name}</span>
      <span className="text-muted-foreground">=</span>
      <span className="text-foreground/80">{value};</span>
    </div>
  )
}

function Services({
  lang,
  onConsult,
}: {
  lang: Lang
  onConsult: (service: string) => void
}) {
  const t = content[lang].services
  return (
    <section
      id="services"
      className="scroll-mt-16 border-b border-border/60 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          kicker={t.kicker}
          title={t.title}
          subtitle={t.subtitle}
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {t.items.map((service, index) => {
            const Icon = serviceIcons[index]
            return (
              <Card
                key={service.id}
                className="group border-border/80 bg-card/60 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-card"
              >
                <CardHeader>
                  <div className="mb-3 flex size-11 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                    <Icon />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="pt-2 leading-6">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardFooter className="mt-auto">
                  <Button
                    variant="ghost"
                    onClick={() => onConsult(service.title)}
                    className="px-0 text-primary hover:bg-transparent hover:text-primary/80"
                  >
                    {t.consult}
                    <ArrowRight className="transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardFooter>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Career({ lang }: { lang: Lang }) {
  const t = content[lang].career
  return (
    <section id="career" className="scroll-mt-16 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          kicker={t.kicker}
          title={t.title}
          subtitle={t.subtitle}
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <SubsectionTitle
            icon={<BriefcaseBusiness />}
            title={t.profileLabel}
          />
          <div className="space-y-5 text-base leading-7 text-muted-foreground sm:text-lg">
            {t.profile.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <SubsectionTitle
            icon={<Sparkles />}
            title={t.resultsLabel}
            note={t.resultsNote}
          />
          <div className="mt-7 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {t.results.map((result) => (
              <div key={result.label} className="bg-card p-6 sm:p-7">
                <div className="text-4xl font-semibold tracking-tight text-primary">
                  {result.value}
                </div>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {result.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <SubsectionTitle
            icon={<BriefcaseBusiness />}
            title={t.experienceLabel}
          />
          <div className="relative mt-8 space-y-6 before:absolute before:bottom-5 before:left-3 before:top-5 before:w-px before:bg-border">
            {t.experience.map((item) => (
              <div
                key={`${item.role}-${item.period}`}
                className="relative pl-10"
              >
                <span className="absolute left-1.5 top-6 size-3 rounded-full border-2 border-background bg-primary shadow-[0_0_1rem_var(--primary)]" />
                <Card className="gap-0 bg-card/60">
                  <CardHeader className="gap-3 sm:grid-cols-[1fr_auto]">
                    <div>
                      <CardTitle className="text-xl">{item.role}</CardTitle>
                      <CardDescription className="mt-2 text-primary">
                        {item.company}
                      </CardDescription>
                    </div>
                    <Badge
                      variant="outline"
                      className="font-mono text-muted-foreground"
                    >
                      {item.period}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <ul className="grid gap-3 md:grid-cols-2">
                      {item.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex gap-3 text-sm leading-6 text-muted-foreground"
                        >
                          <Check className="mt-1 size-4 shrink-0 text-primary" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <SubsectionTitle
            icon={<Rocket />}
            title={t.projectsLabel}
            note={t.projectsIntro}
          />
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {t.projects.map((project, index) => (
              <Dialog key={project.id}>
                <Card className="group overflow-hidden bg-card/60 transition-all duration-300 hover:border-primary/40">
                  <CardHeader>
                    <div className="mb-5 flex items-center justify-between">
                      <span className="font-mono text-xs uppercase tracking-widest text-primary">
                        0{index + 1}
                      </span>
                      <FileCode2 className="text-muted-foreground transition-colors group-hover:text-primary" />
                    </div>
                    <CardTitle className="text-2xl">{project.name}</CardTitle>
                    <CardDescription className="font-mono text-xs uppercase tracking-wider text-primary">
                      {project.type}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="leading-7 text-muted-foreground">
                      {project.description}
                    </p>
                    <p className="mt-4 text-xs font-medium text-primary">{lang === "es" ? "Incluye mejoras de seguridad y pruebas documentadas" : "Includes security improvements and documented checks"}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="w-full">
                        {t.viewProject}
                        <ArrowRight />
                      </Button>
                    </DialogTrigger>
                  </CardFooter>
                </Card>
                <DialogContent className="max-h-[90vh] overflow-y-auto border-border bg-card sm:max-w-2xl">
                  <DialogHeader>
                    <Badge
                      variant="outline"
                      className="mb-2 border-primary/30 text-primary"
                    >
                      {project.type}
                    </Badge>
                    <DialogTitle className="text-3xl">
                      {project.name}
                    </DialogTitle>
                    <DialogDescription className="pt-3 text-base leading-7">
                      {project.description}
                    </DialogDescription>
                  </DialogHeader>
                  {project.results.length > 0 && (
                    <div className="mt-3">
                      <div className="mb-3 text-sm font-semibold">
                        {t.resultsTitle}
                      </div>
                      <div className="space-y-2">
                        {project.results.map((result) => (
                          <div
                            key={result}
                            className="flex gap-3 rounded-lg border border-border bg-secondary/40 p-3 text-sm text-muted-foreground"
                          >
                            <Check className="size-4 shrink-0 text-primary" />
                            {result}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  <div className="mt-3">
                    <div className="mb-3 text-sm font-semibold">
                      {t.technologiesTitle}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  {"architecture" in project && (
                    <div className="mt-3 grid gap-3 sm:grid-cols-2">
                      {project.architecture.map((layer) => (
                        <div key={layer.label} className="rounded-lg border border-border bg-secondary/40 p-4">
                          <div className="text-sm font-semibold text-foreground">{layer.label}</div>
                          <p className="mt-2 text-sm leading-6 text-muted-foreground">{layer.stack}</p>
                        </div>
                      ))}
                    </div>
                  )}
                  <section className="mt-4 space-y-4 rounded-xl border border-primary/20 bg-primary/5 p-5">
                    <h3 className="text-lg font-semibold">{lang === "es" ? "Seguridad y pruebas" : "Security and testing"}</h3>
                    <p className="text-sm leading-6 text-muted-foreground">{project.security.summary}</p>
                    <div>
                      <h4 className="mb-3 text-sm font-semibold">{lang === "es" ? "Cambios realizados" : "Changes implemented"}</h4>
                      <ul className="space-y-3">
                        {project.security.changes.map((change) => <li key={change} className="flex gap-3 text-sm leading-6 text-muted-foreground"><Check className="mt-1 size-4 shrink-0 text-primary" /><span>{change}</span></li>)}
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-3 text-sm font-semibold">{lang === "es" ? "Pruebas y verificación" : "Tests and verification"}</h4>
                      <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-muted-foreground">
                        {project.security.tests.map((test) => <li key={test}>{test}</li>)}
                      </ul>
                    </div>
                    <p className="border-t border-border pt-4 text-xs leading-5 text-muted-foreground">{project.security.scope}</p>
                  </section>
                  <Button onClick={() => openUrl(project.url)} className="mt-4">
                    {t.visitProject}
                    <ExternalLink />
                  </Button>
                </DialogContent>
              </Dialog>
            ))}
            <Card className="min-h-56 justify-center border-dashed bg-transparent text-center">
              <CardContent className="flex flex-col items-center py-8">
                <div className="mb-4 flex size-11 items-center justify-center rounded-full border border-border text-muted-foreground">
                  <Rocket />
                </div>
                <CardTitle>{t.futureProject}</CardTitle>
                <CardDescription className="mt-2">
                  {t.futureDescription}
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-20">
          <SubsectionTitle icon={<Code2 />} title={t.skillsLabel} />
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {t.skills.map((category, index) => {
              const icons = [Layers3, Network, FileCode2, Bot, Github]
              const Icon = icons[index]
              return (
                <Card key={category.label} className="gap-4 bg-card/60">
                  <CardHeader>
                    <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon />
                    </div>
                    <CardTitle>{category.label}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-2">
                    {category.items.map((item) => (
                      <Badge key={item} variant="secondary">
                        {item}
                      </Badge>
                    ))}
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        <div className="mt-20">
          <SubsectionTitle icon={<GraduationCap />} title={t.educationLabel} />
          <div className="mt-8 grid gap-5 lg:grid-cols-[1.4fr_0.6fr]">
            <div className="grid gap-4">
              {t.education.map((item) => (
                <Card
                  key={item.degree}
                  className="flex-row items-center justify-between gap-4 bg-card/60 p-6"
                >
                  <div>
                    <CardTitle className="text-lg">{item.degree}</CardTitle>
                    <CardDescription className="mt-2">
                      {item.school}
                    </CardDescription>
                  </div>
                </Card>
              ))}
            </div>
            <Card className="bg-card/60">
              <CardHeader>
                <Languages className="text-primary" />
              </CardHeader>
              <CardContent className="space-y-4">
                {t.languages.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between border-b border-border pb-4 last:border-0 last:pb-0"
                  >
                    <span>{item.name}</span>
                    <Badge variant="secondary">{item.level}</Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

      </div>
    </section>
  )
}

function SubsectionTitle({
  icon,
  title,
  note,
}: {
  icon: ReactNode
  title: string
  note?: string
}) {
  return (
    <div>
      <div className="flex items-center gap-3">
        <span className="text-primary">{icon}</span>
        <div
          role="heading"
          aria-level={3}
          className="text-xl font-semibold sm:text-2xl"
        >
          {title}
        </div>
      </div>
      {note && (
        <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">
          {note}
        </p>
      )}
    </div>
  )
}

function Contact({
  lang,
  selectedService,
  setSelectedService,
}: {
  lang: Lang
  selectedService: string
  setSelectedService: (service: string) => void
}) {
  const t = content[lang]
  const serviceOptions = [
    ...t.services.items.map((item) => item.title),
    t.contact.recruitment,
  ]

  const [sending, setSending] = useState(false)
  const [feedback, setFeedback] = useState("")
  const [sent, setSent] = useState(false)

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (sending) return
    const form = event.currentTarget
    const data = new FormData(form)
    data.set("service", selectedService)
    data.set("language", lang)
    setSending(true)
    setFeedback("")
    setSent(false)
    try {
      const response = await fetch(new URL("contact.php", document.baseURI), {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      })
      const result = await response.json()
      if (!response.ok || result.ok !== true) throw new Error("send_failed")
      setSent(true)
      setFeedback(lang === "es" ? "Tu mensaje fue enviado. Gracias por contactarme." : "Your message was sent. Thank you for getting in touch.")
      form.reset()
      setSelectedService("")
    } catch {
      setFeedback(lang === "es" ? "No se pudo enviar el mensaje. Inténtalo de nuevo o escribe a eddiersoto@outlook.com." : "Your message could not be sent. Please try again or email eddiersoto@outlook.com.")
    } finally {
      setSending(false)
    }
  }

  return (
    <section
      id="contact"
      className="scroll-mt-16 border-t border-border/60 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          kicker={t.contact.kicker}
          title={t.contact.title}
          subtitle={t.contact.description}
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <Card className="bg-card/60">
            <CardContent className="pt-6">
              <form onSubmit={submit} className="grid gap-5" aria-busy={sending}>
                <div hidden aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <FormField label={t.contact.name} htmlFor="name">
                    <Input id="name" name="name" autoComplete="name" maxLength={120} required />
                  </FormField>
                  <FormField label={t.contact.email} htmlFor="email">
                    <Input
                      id="email"
                      name="email"
                      maxLength={254}
                      type="email"
                      autoComplete="email"
                      required
                    />
                  </FormField>
                </div>
                <FormField label={t.contact.service} htmlFor="service">
                  <Select
                    value={selectedService}
                    onValueChange={setSelectedService}
                    name="service"
                    required
                  >
                    <SelectTrigger id="service">
                      <SelectValue placeholder={t.contact.selectPlaceholder} />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceOptions.map((option) => (
                        <SelectItem key={option} value={option}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormField>
                <FormField label={t.contact.project} htmlFor="project">
                  <Textarea
                    id="project"
                    name="project"
                    maxLength={10000}
                    placeholder={t.contact.projectPlaceholder}
                    className="min-h-32"
                    required
                  />
                </FormField>
                <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                  <p className="text-xs text-muted-foreground">
                    {t.contact.response}
                  </p>
                  <Button type="submit" size="lg" disabled={sending}>
                    {sending ? (lang === "es" ? "Enviando…" : "Sending…") : t.contact.submit}
                    <ArrowRight />
                  </Button>
                </div>
                {feedback && <p role="status" aria-live="polite" className={sent ? "text-sm text-primary" : "text-sm text-destructive"}>{feedback}</p>}
              </form>
            </CardContent>
          </Card>

          <Card className="bg-card/60">
            <CardHeader>
              <CardTitle>{t.contact.direct}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <ContactLink
                icon={<Mail />}
                label="Email"
                value="eddiersoto@outlook.com"
                onClick={() => {
                  window.location.href = "mailto:eddiersoto@outlook.com"
                }}
              />
              <ContactLink
                icon={<Linkedin />}
                label="LinkedIn"
                value="linkedin.com/in/eddiersoto"
                onClick={() => openUrl("https://linkedin.com/in/eddiersoto")}
              />
              <ContactLink
                icon={<Globe2 />}
                label={t.contact.whatsapp}
                value={t.contact.whatsappPending}
                disabled
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

function FormField({
  label,
  htmlFor,
  children,
}: {
  label: string
  htmlFor: string
  children: ReactNode
}) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
    </div>
  )
}

function ContactLink({
  icon,
  label,
  value,
  onClick,
  disabled = false,
}: {
  icon: ReactNode
  label: string
  value: string
  onClick?: () => void
  disabled?: boolean
}) {
  return (
    <Button
      variant="outline"
      onClick={onClick}
      disabled={disabled}
      className="h-auto w-full justify-start gap-4 p-4 text-left whitespace-normal"
    >
      <span className="text-primary">{icon}</span>
      <span className="min-w-0 flex-1">
        <span className="block text-xs text-muted-foreground">{label}</span>
        <span className="mt-1 block truncate text-sm">{value}</span>
      </span>
      {!disabled && <ExternalLink />}
    </Button>
  )
}

function Footer({ lang }: { lang: Lang }) {
  const t = content[lang].footer
  return (
    <footer className="border-t border-border/60 py-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <div className="text-sm font-medium">© 2026 Eddier Soto Vargas</div>
          <div className="mt-1 text-xs text-muted-foreground">{t.role}</div>
        </div>
        <Button variant="ghost" onClick={() => goTo("home")}>
          {t.back}
          <ArrowRight className="-rotate-90" />
        </Button>
      </div>
    </footer>
  )
}

export default function App() {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = window.localStorage.getItem("portfolio-language")
    return saved === "en" ? "en" : "es"
  })
  const [selectedService, setSelectedService] = useState("")

  useEffect(() => {
    window.localStorage.setItem("portfolio-language", lang)
    document.documentElement.lang = lang
    document.title = content[lang].meta.title
    let description = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    )
    if (!description) {
      description = document.createElement("meta")
      description.name = "description"
      document.head.appendChild(description)
    }
    description.content = content[lang].meta.description
  }, [lang])

  const consult = (service: string) => {
    setSelectedService(service)
    goTo("contact")
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header lang={lang} setLang={setLang} />
      <main>
        <Hero lang={lang} />
        <Services lang={lang} onConsult={consult} />
        <Career lang={lang} />
        <Contact
          lang={lang}
          selectedService={selectedService}
          setSelectedService={setSelectedService}
        />
      </main>
      <Footer lang={lang} />
    </div>
  )
}
