import { createFileRoute } from "@tanstack/react-router";
import portrait from "@/assets/sumeet-portrait.png";

export const Route = createFileRoute("/")({ component: Index });

const ticker = [
  ["Currently targeting", "Senior BA & Product Owner roles in Melbourne"],
  ["Open to", "digital banking · fintech · regulated services"],
  ["Active in", "the Melbourne tech community"],
  ["Available for", "contract & permanent roles"],
];

const competencies: { label: string; value: number }[] = [
  { label: "Stakeholder Management", value: 85 },
  { label: "Requirements Engineering", value: 82 },
  { label: "Agile Delivery", value: 78 },
  { label: "Payments Domain", value: 75 },
  { label: "Process Modelling (BPMN)", value: 72 },
  { label: "Regulatory Compliance", value: 70 },
  { label: "Australian Market", value: 60 },
  { label: "AI as Enabler", value: 40 },
]

const projects = [
  { years: "2025 – 2026", tag: "Cloud · Enterprise", title: "Siemens Energy — On-Prem to AWS Migration", body: "Orchestrated stakeholder alignment across 40+ business units globally. Consolidated GitLab, SonarQube and Artifactory into a single AWS instance. Net €141K savings from unification." },
  { years: "2024 – 2025", tag: "ITSM · Migration", title: "Siemens Energy — JIRA → ServiceNow Centralisation", body: "Migrated 12,000 Jira projects and 6M records at a 99.5%+ accuracy target. 47% improvement in SLA compliance and 94% reduction in duplicate incidents." },
  { years: "2021 – 2024", tag: "Digital Banking · Payments", title: "Itaú Unibanco — SuperApp Unified Payments", body: "Led requirements for a unified payments experience serving 50M+ users. Defined functional specs and APIs for the Pix Credit instant-payment platform." },
  { years: "2016 – 2021", tag: "Utility · Platform", title: "Energy Australia — Meter Data Management 2.0", body: "Improved validated meter-data flow and reduced manual exception handling to ~30% through better validation checkpoints." },
  { years: "2014 – 2016", tag: "CRM · Telecom", title: "Optus — Siebel Oracle → Salesforce Migration", body: "Led migration of 2.5M+ customer records. 35% reduction in billing query resolution time via Salesforce Unified 360." },
  { years: "2010 – 2014", tag: "Billing · Utility", title: "Energy Australia — CIS Plus to C1 Billing Upgrade", body: "Identified delayed-bill scenarios and smart-meter gaps, achieving ~54% reduction in 90+ and 270+ day overdue billing." },
];

const competenciesGroups = [
  { title: "Business Analysis", body: "Requirements elicitation, gap analysis, BPMN process mapping, UAT planning, user stories, traceability." },
  { title: "Agile & Delivery", body: "SAFe 6.0, SDLC, Scrum, Kanban, PI Planning, sprint facilitation, backlog refinement, release planning." },
  { title: "Tooling", body: "Jira, Confluence, ServiceNow, Azure DevOps, Siemens Polarion, Miro, SQL." },
  { title: "Integration & API", body: "REST APIs, Postman, OIDC / SAML (IAM)." },
  { title: "Cloud & Infrastructure", body: "AWS (EC2, ECS, S3, CloudWatch, API GW), Azure, Docker, EKS, OpenShift." },
  { title: "Cybersecurity", body: "CIA, Risk Treatment Plans, BIA, ISO 27001, RBAC, vulnerability mgmt, GDPR." },
  { title: "Automation & AI", body: "UiPath, Power Apps, Power Automate, GitHub Copilot, OpenAI, Google Gemini." },
  { title: "Analytics & Observability", body: "Power BI, Grafana, Datadog, Splunk." },
];

const journey = [
  { org: "Siemens Energy", role: "Platform Product Owner — Cloud & JIRA Migration", when: "Apr 2024 – Mar 2026", body: "Led a €2.4M enterprise cloud migration program (GitLab, SonarQube, Artifactory) on-prem → AWS. Aligned 100+ workflows. Delivered €216K annual cloud savings via auto-scaling and consumption analysis. Drove ISO 27001 / CIA / RBAC compliance with cybersecurity partners." },
  { org: "Globant", role: "Senior Business Analyst — Enterprise Payments & Digital Banking", when: "Oct 2021 – Apr 2024", body: "Worked across 6+ concurrent SAFe streams within Itaú's SuperApp program. Translated Pix and open-banking rules into API specs and acceptance criteria. Facilitated PI Planning as Scrum Master and coordinated UAT across 6 product squads." },
  { org: "Concentrix", role: "Technical Business Analyst — Utility & Digital Banking", when: "Jul 2010 – Sep 2021", body: "Led billing operations uplift reducing manual exceptions by 54%. Led Salesforce CRM migration of 2.5M+ records from Siebel, delivering 35% faster billing query resolution. Supported CIS+ → C1 billing platform upgrade." },
];

const approach = [
  { n: "01", title: "Discovery", body: "Through stakeholder interviews, process mapping and competitive analysis I uncover the real needs behind stated requirements. Solving the right problem before designing the solution." },
  { n: "02", title: "Delivery", body: "Iterative delivery — breaking complex initiatives into measurable increments. Agile ceremonies, backlog refinement and clear acceptance criteria so teams build with confidence." },
  { n: "03", title: "Stakeholder management", body: "Bridging business and technology. Structured comms, regular demos and transparent roadmaps keep executives aligned while empowering teams." },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Ticker />
      <Hero />
      <Compass />
      <Stack />
      <Journey />
      <Projects />
      <Approach />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-mono text-sm">~/sumeet haldankar<span className="ml-0.5 inline-block h-4 w-1.5 translate-y-0.5 animate-pulse bg-foreground" /></a>
        <nav className="hidden items-center gap-7 text-sm md:flex">
          <a href="#projects" className="hover:opacity-60">Projects</a>
          <a href="#approach" className="hover:opacity-60">Approach</a>
          <a href="#journey" className="hover:opacity-60">Journey</a>
          <a href="#contact" className="hover:opacity-60">Contact</a>
        </nav>
        <div className="flex items-center gap-2">
          <a href="https://www.linkedin.com/in/sumeet-haldankar/" target="_blank" rel="noreferrer" className="rounded-full border border-border px-3 py-1.5 text-xs hover:bg-secondary">LinkedIn</a>
          <a href="#contact" className="rounded-full border border-foreground bg-foreground px-3 py-1.5 text-xs text-background hover:opacity-90">Contact me</a>
        </div>
      </div>
    </header>
  );
}

function Ticker() {
  const items = [...ticker, ...ticker, ...ticker];
  return (
    <div className="overflow-hidden border-b border-border bg-foreground text-background">
      <div className="flex w-max animate-ticker gap-10 whitespace-nowrap py-2.5 font-mono text-xs">
        {items.map((it, i) => (
          <span key={i} className="flex items-center gap-2">
            <span className="opacity-60">{it[0]}</span>
            <span>{it[1]}</span>
            <span className="opacity-30">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
      <div className="flex flex-col justify-center">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Product Owner and Senior Business Analyst · Melbourne</p>
        <h1 className="mt-6 text-5xl leading-[0.95] md:text-7xl">Sumeet<br />Haldankar</h1>
        <p className="mt-8 max-w-md text-lg leading-relaxed text-muted-foreground">
          Product Owner & Senior BA with <span className="text-foreground">15 years</span> turning ambiguity into clear, practical outcomes across banking, payments, energy and cloud transformation.
        </p>
        <div className="mt-10 inline-flex w-fit items-center gap-3 rounded-full border border-border bg-card px-3 py-2 font-mono text-xs">
          <span className="rounded-full bg-success/15 px-2 py-0.5 text-[10px] font-medium text-foreground">LATEST ROLE</span>
          <span className="text-muted-foreground">Siemens Energy</span>
          <span className="opacity-40">/</span>
          <span>Platform Product Owner — Cloud Migration</span>
        </div>
      </div>
      <div className="relative">
        <div className="overflow-hidden rounded-3xl bg-secondary">
          <img src={portrait} alt="Sumeet Haldankar portrait" width={1024} height={1280} className="h-full w-full object-cover" />
        </div>
        <div className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full bg-foreground/85 px-3 py-1.5 font-mono text-xs text-background backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-success" />
          Open to opportunities
        </div>
      </div>
    </section>
  );
}

function Compass() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl md:text-4xl">The BA Compass</h2>
          <p className="hidden max-w-xs text-sm text-muted-foreground md:block">Self-assessed snapshot. A decade-plus across enterprise BA disciplines — the shape matters more than any single number.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-6 md:grid-cols-2">
          {competencies.map((c) => (
            <div key={c.label}>
              <div className="flex items-baseline justify-between font-mono text-sm">
                <span>{c.label}</span>
                <span className="text-muted-foreground">{c.value}%</span>
              </div>
              <div className="mt-2 h-px w-full bg-border">
                <div className="h-px bg-foreground" style={{ width: `${c.value}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stack() {
  return (
    <section className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl md:text-4xl">Core competencies</h2>
        <p className="mt-3 text-sm text-muted-foreground">Tools and disciplines I use to deliver in regulated environments.</p>
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {competenciesGroups.map((g) => (
            <div key={g.title} className="rounded-2xl border border-border bg-card p-5">
              <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{g.title}</h3>
              <p className="mt-3 text-sm leading-relaxed">{g.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-2 font-mono text-xs">
          {["SAFe 6.0 POPM", "AWS CCP", "Microsoft Azure AI-900", "Scrum Fundamentals"].map((c) => (
            <span key={c} className="rounded-full border border-border bg-background px-3 py-1.5">{c}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Journey() {
  return (
    <section id="journey" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl md:text-4xl">Career journey</h2>
        <p className="mt-3 max-w-xl text-sm text-muted-foreground">15+ years driving business transformation across energy, telecommunications and financial services.</p>
        <div className="mt-12 space-y-10">
          {journey.map((j) => (
            <div key={j.role} className="grid grid-cols-1 gap-6 border-t border-border pt-10 md:grid-cols-[200px_1fr]">
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{j.when}</p>
                <p className="mt-2 text-lg">{j.org}</p>
              </div>
              <div>
                <h3 className="text-xl">{j.role}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{j.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl md:text-4xl">Projects delivered</h2>
          <p className="hidden text-sm text-muted-foreground md:block">enterprise transformations · discovery → delivery</p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
          {projects.map((p) => (
            <article key={p.title} className="group rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-0.5 hover:shadow-sm">
              <div className="flex items-center justify-between font-mono text-xs text-muted-foreground">
                <span>{p.years}</span>
                <span>{p.tag}</span>
              </div>
              <h3 className="mt-4 text-xl leading-snug">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Approach() {
  return (
    <section id="approach" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl md:text-4xl">How I work</h2>
        <p className="mt-3 text-sm text-muted-foreground">Analytical rigour, collaborative pragmatism.</p>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {approach.map((a) => (
            <div key={a.n} className="border-t border-foreground pt-5">
              <p className="font-mono text-xs text-muted-foreground">{a.n}</p>
              <h3 className="mt-3 text-2xl">{a.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{a.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="border-t border-border bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <p className="font-mono text-xs uppercase tracking-[0.2em] opacity-60">Get in touch</p>
        <h2 className="mt-6 max-w-3xl text-4xl leading-tight md:text-6xl">Let's make something that holds up across the full SDLC.</h2>
        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
          <a href="mailto:sumeet.haldankar1989@gmail.com" className="group rounded-2xl border border-background/20 p-6 transition hover:bg-background hover:text-foreground">
            <p className="font-mono text-xs uppercase tracking-widest opacity-60 group-hover:opacity-80">Email</p>
            <p className="mt-3 text-lg">sumeet.haldankar1989@gmail.com</p>
          </a>
          <a href="https://www.linkedin.com/in/sumeet-haldankar/" target="_blank" rel="noreferrer" className="group rounded-2xl border border-background/20 p-6 transition hover:bg-background hover:text-foreground">
            <p className="font-mono text-xs uppercase tracking-widest opacity-60 group-hover:opacity-80">LinkedIn</p>
            <p className="mt-3 text-lg">linkedin.com/in/sumeet-haldankar</p>
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-6 py-8 font-mono text-xs text-muted-foreground md:flex-row md:items-center">
        <p>© {new Date().getFullYear()} Sumeet Haldankar · Melbourne, AU</p>
        <p>Senior BA & Product Owner — open to opportunities</p>
      </div>
    </footer>
  );
}
