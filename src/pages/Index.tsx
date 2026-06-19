import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, ExternalLink, MapPin, ChevronDown, Download, Network, X, Youtube, Facebook } from "lucide-react";
import TumaGoArchitecture from "@/components/TumaGoArchitecture";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
  </svg>
);

const heroImages = ["/assets/bee1.jpeg", "/assets/bee2.jpeg", "/assets/me.jpg"];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const skills = {
  "Languages": ["Go", "Python", "JavaScript", "TypeScript", "SQL"],
  "Frameworks": ["Echo", "Django REST Framework", "React", "Node.js", "Firebase"],
  "Cloud & DevOps": ["AWS", "Docker", "CI/CD", "GitHub Actions", "Kubernetes", "PostgreSQL", "Redis"],
  "Tools": ["Git & GitHub", "VS Code", "Linux"],
};

const projects = [
  {
    title: "My School Hub",
    subtitle: "Multi-Tenant SaaS School Management Platform — Tishanyq Digital, Solo-Built Backend + Infra",
    description:
      "A multi-tenant SaaS school management platform serving 13 distinct user roles across academics, boarding, clinic, finances, HR, library, and WhatsApp/PayNow integrations. Solo-built the backend and cloud infrastructure: a Go (Echo) API gateway fronting a Django/DRF core (~45+ domain models) plus two specialised Go services for streaming CSV bulk-imports and external I/O (PDF report cards, PayNow Zimbabwe, Resend email, WhatsApp Business API). Designed row-level multi-tenancy in Django with custom tenant-aware managers, implemented JWT auth (HS256) with a Postgres-backed token blacklist enforced at the gateway, and shipped a configurable report-card engine with per-school branding and an approval → release workflow. Architected and deployed the AWS infrastructure end-to-end in af-south-1 — EC2, RDS PostgreSQL, ElastiCache Redis, S3, ECR, Nginx + Let's Encrypt SSL, and GitHub Actions CI/CD — with a documented 5-phase scaling path from a single t3.medium up to ECS + ALB auto-scaling.",
    tech: ["Go", "Echo", "Python", "Django", "Django REST Framework", "PostgreSQL", "Redis", "Celery", "Docker", "Nginx", "AWS EC2", "AWS RDS", "AWS S3", "AWS ECR", "AWS ElastiCache", "GitHub Actions", "Let's Encrypt", "JWT", "PayNow", "WhatsApp Business API"],
    image: "/images/myschoolhub.png",
    live: "https://myschoolhub.co.zw",
  },
  {
    title: "Quantum AI",
    subtitle: "AI Advisor & AI Board Platform — Tishanyq Digital, Lead Software Engineer",
    description:
      "A Zimbabwe-built AI advisor and AI board platform created by Tishanyq Digital, engineered under the leadership of Brandon Khumalo as Lead Software Engineer. Quantum AI lets users convene specialist AI boardmembers across finance, marketing, operations, strategy, research, legal, and technology to produce board-level recommendations and practical business documents — including business strategy, feasibility studies, investment proposals, DFI-ready documents, implementation guides, and PRAZ-ready tender bids. Built for Zimbabwean and African enterprises, entrepreneurs, executives, SMEs, consultants, procurement teams, banks, DFIs, and public institutions.",
    tech: ["Next.js", "TypeScript", "Python", "FastAPI", "Django", "PostgreSQL", "Redis", "LLMs", "Docker", "AWS"],
    image: "/assets/quantum.png",
    live: "https://quantumai.co.zw/",
  },
  {
    title: "Laptop World",
    subtitle: "Full-Stack E-Commerce Platform — Real Client, Production Deployed",
    description:
      "Built end-to-end for a real Zimbabwean tech retailer. Features a decoupled Next.js + Django REST architecture, session-based cart sync (no login required), real PayNow Zimbabwe payment integration with async polling, Google Maps delivery address picker with GPS-based fee calculation, automatic image compression on upload, a 7-stage order lifecycle, and a custom React admin dashboard — deliberately avoiding Django Admin.",
    tech: ["Next.js", "TypeScript", "Django REST Framework", "PostgreSQL", "TanStack Query", "Tailwind CSS", "shadcn/ui", "Framer Motion", "PayNow", "Google Maps", "Resend", "Docker"],
    image: "/assets/laptopworld.jpg",
    live: "https://laptopworld.co.zw",
  },
  {
    title: "TumaGo",
    subtitle: "Real-Time Last-Mile Delivery Platform — End-to-End, Solo Built",
    description:
      "A real-time last-mile delivery platform connecting clients to nearby drivers with live GPS tracking and integrated local payments. Designed and built end-to-end: two Android apps (client + driver), a hybrid Go + Django microservice backend (Go API gateway, Go location/matching services, Django REST for business logic), FastAPI notification service, real-time WebSocket driver tracking with Redis GEO proximity search, PayNow payment integration with async polling/retry, JWT auth, per-IP rate limiting, Dramatiq async workers, Firebase Cloud Messaging, and Docker/Kubernetes deployment with Prometheus + Grafana monitoring.",
    tech: ["Go", "Echo", "Django REST Framework", "FastAPI", "Java (Android)", "PostgreSQL", "Redis GEO", "WebSockets", "Firebase", "PayNow", "Docker", "Kubernetes", "Prometheus", "JWT"],
    image: "/images/tumago.png",
    github: "https://github.com/Brandonkhumalo/Tuma_Go_backend",
  },
];

function useTypewriter(text: string, speed = 70, active = false) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!active) return;
    setDisplayed("");
    setDone(false);
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [active]);

  return { displayed, done };
}

const Index = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [startTyping, setStartTyping] = useState(false);
  const [showArchitecture, setShowArchitecture] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setStartTyping(true), 400);
    return () => clearTimeout(t);
  }, []);

  const greeting = useTypewriter("Hi, I'm", 70, startTyping);
  const firstName = useTypewriter("Brandon", 75, greeting.done);
  const lastName = useTypewriter("Khumalo", 75, firstName.done);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Brandon Khumalo | Backend Engineer & DevOps Engineer — Harare, Zimbabwe</title>
        <meta name="description" content="Brandon Khumalo is a Backend Engineer and DevOps Engineer from Harare, Zimbabwe, and the builder of My School Hub (myschoolhub.co.zw) — a multi-tenant SaaS school management platform at Tishanyq Digital. Co-founder of Ubuntu Tech Academy (ubuntutechacademy.co.zw) — an online coding bootcamp in Zimbabwe for Zimbabwe and Africa, launching soon. Specialising in Go (Echo), Python (Django), JavaScript, React, PostgreSQL, Docker, AWS, and CI/CD pipelines. AWS Certified Cloud Practitioner." />
        <link rel="canonical" href="https://brandonkhumalo.co.zw/" />
        <meta property="og:url" content="https://brandonkhumalo.co.zw/" />
        <meta property="og:title" content="Brandon Khumalo | Backend Engineer & DevOps Engineer" />
        <meta property="og:description" content="Brandon Khumalo — Backend Engineer and DevOps Engineer from Harare, Zimbabwe. Building scalable systems with Go (Echo), Python (Django), React, and PostgreSQL on AWS. Co-founder of Ubuntu Tech Academy, an online coding bootcamp in Zimbabwe for Zimbabwe and Africa (launching soon)." />
      </Helmet>

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <span className="font-mono text-sm font-semibold text-primary">BK</span>
          <div className="flex items-center gap-6">
            {["About", "Skills", "Projects", "Blog", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {item}
              </a>
            ))}
            <Link
              to="/founder"
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              Co-founder
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative flex min-h-screen items-center pt-20 overflow-hidden">
        {/* Tech glassy background with glowing orbs */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Orb 1 — green, top-left */}
          <div className="absolute -top-32 -left-32 h-[420px] w-[420px] rounded-full bg-emerald-400/50 blur-[80px] animate-pulse" />
          {/* Orb 2 — purple, bottom-right */}
          <div className="absolute -bottom-32 -right-16 h-[500px] w-[500px] rounded-full bg-purple-600/45 blur-[90px] animate-pulse [animation-delay:1.4s]" />
          {/* Orb 3 — cyan/blue, top-right */}
          <div className="absolute top-10 right-10 h-[280px] w-[280px] rounded-full bg-cyan-400/40 blur-[70px] animate-pulse [animation-delay:0.8s]" />
          {/* Orb 4 — pink, bottom-left */}
          <div className="absolute bottom-20 left-20 h-[240px] w-[240px] rounded-full bg-pink-500/35 blur-[65px] animate-pulse [animation-delay:2s]" />
          {/* Orb 5 — indigo, center */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[320px] w-[320px] rounded-full bg-indigo-500/30 blur-[85px] animate-pulse [animation-delay:3s]" />
          {/* Glass grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:56px_56px]" />
          {/* Frosted glass film */}
          <div className="absolute inset-0 backdrop-blur-[2px] bg-background/30" />
        </div>

        <div className="container relative z-10 mx-auto grid gap-8 px-6 lg:grid-cols-2 lg:items-center">
          {/* Portrait — visible on all screen sizes */}
          <div className="flex order-1 lg:order-2 justify-center">
            <div className="relative">
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-primary/40 via-emerald-500/20 to-transparent blur-2xl" />
              <div className="relative h-[260px] w-[195px] sm:h-[360px] sm:w-[270px] lg:h-[480px] lg:w-[360px] rounded-2xl overflow-hidden border border-primary/20 shadow-[0_0_40px_-8px_hsl(152_76%_44%_/_0.4)] backdrop-blur-sm">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImage}
                    src={heroImages[currentImage]}
                    alt="Brandon Khumalo"
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -60 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Text content */}
          <motion.div
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1"
          >
            <p className="font-mono text-sm text-primary mb-4 h-5">
              {greeting.displayed}
              {startTyping && !greeting.done && <span className="animate-pulse">|</span>}
            </p>
            <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              <span className="block">
                {firstName.displayed}
                {greeting.done && !firstName.done && <span className="animate-pulse">|</span>}
              </span>
              <span className="text-gradient block">
                {lastName.displayed}
                {firstName.done && !lastName.done && <span className="animate-pulse">|</span>}
              </span>
            </h1>
            <motion.div variants={fadeUp} custom={2} className="mt-4 flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" />
              <span className="text-sm">Harare, Zimbabwe</span>
            </motion.div>
            <motion.p
              variants={fadeUp}
              custom={3}
              className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground"
            >
              Backend Engineer & DevOps Engineer building scalable APIs and systems with Go (Echo), Python (Django), JavaScript and React — and running them in production on AWS with Docker, Kubernetes, and CI/CD pipelines.
            </motion.p>
            <motion.div variants={fadeUp} custom={4} className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 glow"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-primary hover:text-primary"
              >
                Get in Touch
              </a>
              <a
                href="/Brandon-cv-main.pdf"
                download="Brandon_Khumalo_CV.pdf"
                className="inline-flex items-center gap-2 rounded-lg border border-primary/40 px-6 py-3 text-sm font-semibold text-primary transition-all hover:bg-primary/10"
              >
                <Download className="h-4 w-4" />
                Download CV
              </a>
            </motion.div>
            <motion.div variants={fadeUp} custom={5} className="mt-8 flex items-center gap-5">
              <SocialLink href="https://github.com/Brandonkhumalo" icon={<Github className="h-5 w-5" />} label="GitHub" />
              <SocialLink href="https://www.linkedin.com/in/brandon-khumalo04/" icon={<Linkedin className="h-5 w-5" />} label="LinkedIn" />
              <SocialLink href="https://www.tiktok.com/@brandonkhumz" icon={<TikTokIcon className="h-5 w-5" />} label="TikTok" />
              <SocialLink href="https://www.youtube.com/@brandonkhumalo4620" icon={<Youtube className="h-5 w-5" />} label="YouTube" />
              <SocialLink href="https://www.facebook.com/people/Brandon-Khumalo/100047518344256/" icon={<Facebook className="h-5 w-5" />} label="Facebook" />
              <SocialLink href="mailto:brandonkhumz40@gmail.com" icon={<Mail className="h-5 w-5" />} label="Email" />
            </motion.div>
          </motion.div>
        </div>
        <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground">
          <ChevronDown className="h-6 w-6" />
        </a>
      </section>

      {/* About */}
      <section id="about" className="py-24">
        <div className="container mx-auto px-6">
          <SectionTitle label="About" title="Who I Am" />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mx-auto max-w-3xl"
          >
            <motion.p variants={fadeUp} custom={0} className="text-base leading-relaxed text-muted-foreground">
              I'm a Backend Engineer and DevOps Engineer, and an ALX Software Engineering graduate, with hands-on experience building scalable applications and APIs using Go (Echo), Python (Django), JavaScript, React, and PostgreSQL — the core technologies I work with daily at Tishanyq Digital.
            </motion.p>
            <motion.p variants={fadeUp} custom={1} className="mt-4 text-base leading-relaxed text-muted-foreground">
              On the DevOps side, I own our AWS infrastructure and CI/CD pipelines at Tishanyq Digital — provisioning cloud resources, containerising services with Docker, and automating deployments through GitHub Actions. I'm AWS Certified Cloud Practitioner and currently studying toward the AWS Certified DevOps Engineer certification.
            </motion.p>
            <motion.p variants={fadeUp} custom={2} className="mt-4 text-base leading-relaxed text-muted-foreground">
              I can also work on the frontend when a project calls for it — I have working knowledge of React, Next.js, TypeScript and Tailwind CSS and have shipped real UIs (including the Laptop World admin dashboard). To be upfront though: frontend isn't my strongest skill. I'll pick it up and deliver, but my edge is on the backend and infrastructure side.
            </motion.p>
            <motion.p variants={fadeUp} custom={3} className="mt-4 text-base leading-relaxed text-muted-foreground">
              Beyond client work, I co-founded Ubuntu Tech Academy — an online coding bootcamp in Zimbabwe built to train the next generation of software developers across Zimbabwe and Africa through practical, project-driven learning.
            </motion.p>
            <motion.p variants={fadeUp} custom={4} className="mt-4 text-base leading-relaxed text-muted-foreground">
              My main strength is backend engineering — building reliable systems, clean architectures, performant APIs, and maintainable codebases — paired with the operational skills to deploy and run them in production. I enjoy solving real-world problems with technology, improving system performance, and contributing to teams building high-quality products.
            </motion.p>
            <motion.div variants={fadeUp} custom={5} className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              <StatCard label="Experience" value="1+ yr" />
              <StatCard label="Projects" value="5+" />
              <StatCard label="Certifications" value="4" />
              <StatCard label="Stack" value="Full" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-6">
          <SectionTitle label="Experience" title="Where I've Worked" />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mx-auto max-w-3xl"
          >
            <motion.div variants={fadeUp} custom={0} className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-start justify-between flex-wrap gap-2">
                <div>
                  <h3 className="text-lg font-semibold">Backend Engineer & DevOps Engineer</h3>
                  <p className="text-primary font-mono text-sm">Tishanyq Digital</p>
                </div>
                <span className="font-mono text-xs text-muted-foreground rounded-full border border-border px-3 py-1">
                  Sep 2025 – Present
                </span>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2"><span className="text-primary mt-1">▹</span> Design system architecture and lead the development and deployment of backend-driven applications end to end</li>
                <li className="flex gap-2"><span className="text-primary mt-1">▹</span> Built robust, scalable and high-performance applications with Go (Echo), Python (Django), JavaScript, React and PostgreSQL</li>
                <li className="flex gap-2"><span className="text-primary mt-1">▹</span> Work with Go, Echo, Python, Django, JavaScript, TypeScript, React, Node.js, PostgreSQL and SQL on a day to day basis</li>
                <li className="flex gap-2"><span className="text-primary mt-1">▹</span> Own AWS cloud infrastructure — provisioning, configuring and managing the services that run our applications in production</li>
                <li className="flex gap-2"><span className="text-primary mt-1">▹</span> Design and maintain CI/CD pipelines with GitHub Actions and containerise services with Docker for repeatable, automated deployments</li>
                <li className="flex gap-2"><span className="text-primary mt-1">▹</span> Optimized application performance, scalability and resource usage across both code and infrastructure</li>
                <li className="flex gap-2"><span className="text-primary mt-1">▹</span> Conducted code reviews, ensured adherence to industry standards</li>
                <li className="flex gap-2"><span className="text-primary mt-1">▹</span> Ensured application security and data integrity across all platforms</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-24">
        <div className="container mx-auto px-6">
          <SectionTitle label="Skills" title="Tech Stack" />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2"
          >
            {Object.entries(skills).map(([category, items], i) => (
              <motion.div
                key={category}
                variants={fadeUp}
                custom={i}
                className="rounded-xl border border-border bg-card p-5"
              >
                <h3 className="font-mono text-xs font-semibold text-primary uppercase tracking-wider mb-3">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md bg-muted px-3 py-1.5 text-xs text-secondary-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 bg-card/50">
        <div className="container mx-auto px-6">
          <SectionTitle label="Projects" title="Featured Work" />
          <div className="mx-auto max-w-4xl space-y-12">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUp}
                custom={i}
                className="group overflow-hidden rounded-xl border border-border bg-card"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-sm text-primary font-mono">{project.subtitle}</p>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="rounded-md bg-muted px-2.5 py-1 text-xs text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 flex flex-wrap items-center gap-4">
                    {project.title === "TumaGo" && (
                      <button
                        onClick={() => setShowArchitecture(true)}
                        className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-foreground"
                      >
                        <Network className="h-4 w-4" />
                        View Architecture
                      </button>
                    )}
                    {"live" in project && project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-foreground"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Site
                      </a>
                    )}
                    {"github" in project && project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-foreground"
                      >
                        <Github className="h-4 w-4" />
                        View on GitHub
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Writing */}
      <section id="blog" className="py-24">
        <div className="container mx-auto px-6">
          <SectionTitle label="Writing" title="Technical Articles" />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            custom={0}
            className="mx-auto max-w-4xl"
          >
            <div className="space-y-4">
              <a
                href="/blog/my-school-hub"
                className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
              >
                <span className="font-mono text-xs text-primary uppercase tracking-widest">SaaS · Multi-Tenant · AWS</span>
                <h3 className="mt-2 text-lg font-bold leading-snug group-hover:text-primary transition-colors">
                  Building My School Hub: A Polyglot SaaS Platform for African Schools
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  How I designed a multi-tenant school management system in Go + Django, deployed it to AWS,
                  and built it to scale from one school to a hundred thousand users — without rewriting the application once.
                </p>
                <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground font-mono">
                  <span>May 2026</span>
                  <span>·</span>
                  <span>10 min read</span>
                  <span>·</span>
                  <span className="text-primary group-hover:underline">Read article →</span>
                </div>
              </a>

              <a
                href="/blog/go-echo-django"
                className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
              >
                <span className="font-mono text-xs text-primary uppercase tracking-widest">Backend · Architecture</span>
                <h3 className="mt-2 text-lg font-bold leading-snug group-hover:text-primary transition-colors">
                  Why I Chose Go (Echo) and Python (Django) as My Main Tech Stack
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  A breakdown of why I use Go + Echo for high-concurrency real-time services and Django for business logic —
                  the tradeoffs I consciously accepted, and the principle behind splitting a backend across two languages.
                </p>
                <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground font-mono">
                  <span>April 2026</span>
                  <span>·</span>
                  <span>6 min read</span>
                  <span>·</span>
                  <span className="text-primary group-hover:underline">Read article →</span>
                </div>
              </a>

              <a
                href="/blog/systems-i-like"
                className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
              >
                <span className="font-mono text-xs text-primary uppercase tracking-widest">Engineering Perspective</span>
                <h3 className="mt-2 text-lg font-bold leading-snug group-hover:text-primary transition-colors">
                  What Type of Systems Do I Like Working On
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Real-time platforms, coordination engines, systems built for the African context — the common thread
                  across the work I find most absorbing, and why consequential software demands a different kind of thinking.
                </p>
                <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground font-mono">
                  <span>April 2026</span>
                  <span>·</span>
                  <span>5 min read</span>
                  <span>·</span>
                  <span className="text-primary group-hover:underline">Read article →</span>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education & Certs */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <SectionTitle label="Education" title="Certifications" />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mx-auto max-w-3xl space-y-3"
          >
            {[
              { title: "AWS Certified DevOps Engineer", org: "Amazon Web Services", date: "In Progress" },
              { title: "AWS Certified Cloud Practitioner", org: "Amazon Web Services", date: "2024" },
              { title: "Certificate in Pro Backend Development", org: "ALX Africa", date: "2025" },
              { title: "ALX Professional Foundations", org: "ALX Africa", date: "2025" },
              { title: "Google IT Support", org: "Google", date: "2025" },
            ].map((cert, i) => (
              <motion.div
                key={cert.title}
                variants={fadeUp}
                custom={i}
                className="flex items-center justify-between rounded-lg border border-border bg-card px-5 py-4"
              >
                <div>
                  <p className="text-sm font-semibold">{cert.title}</p>
                  <p className="text-xs text-muted-foreground">{cert.org}</p>
                </div>
                <span className="font-mono text-xs text-muted-foreground">{cert.date}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-card/50">
        <div className="container mx-auto px-6 text-center">
          <SectionTitle label="Contact" title="Let's Connect" center />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p variants={fadeUp} custom={0} className="mx-auto max-w-md text-sm text-muted-foreground mb-8">
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about tech.
            </motion.p>
            <motion.div variants={fadeUp} custom={1} className="flex justify-center gap-4 flex-wrap">
              <a
                href="mailto:brandonkhumz40@gmail.com"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground glow hover:opacity-90 transition-all"
              >
                <Mail className="h-4 w-4" />
                Send an Email
              </a>
              <a
                href="https://www.linkedin.com/in/brandon-khumalo04/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-semibold text-foreground hover:border-primary hover:text-primary transition-all"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                href="https://www.tiktok.com/@brandonkhumz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-semibold text-foreground hover:border-primary hover:text-primary transition-all"
              >
                <TikTokIcon className="h-4 w-4" />
                TikTok
              </a>
              <a
                href="https://github.com/Brandonkhumalo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-semibold text-foreground hover:border-primary hover:text-primary transition-all"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <a
                href="https://www.youtube.com/@brandonkhumalo4620"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-semibold text-foreground hover:border-primary hover:text-primary transition-all"
              >
                <Youtube className="h-4 w-4" />
                YouTube
              </a>
              <a
                href="https://www.facebook.com/people/Brandon-Khumalo/100047518344256/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-semibold text-foreground hover:border-primary hover:text-primary transition-all"
              >
                <Facebook className="h-4 w-4" />
                Facebook
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Architecture Modal */}
      <AnimatePresence>
        {showArchitecture && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
            onClick={() => setShowArchitecture(false)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-4xl rounded-xl border border-border bg-card p-4 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-3 flex items-center justify-between">
                <div>
                  <h3 className="text-base font-semibold">TumaGo — System Architecture</h3>
                  <p className="text-xs text-muted-foreground font-mono">Go + Django + FastAPI microservices</p>
                </div>
                <button
                  onClick={() => setShowArchitecture(false)}
                  className="rounded-lg p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <TumaGoArchitecture />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Brandon Khumalo. Built with passion in Harare 🇿🇼
          </p>
        </div>
      </footer>
    </div>
  );
};

const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label?: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="text-muted-foreground transition-colors hover:text-primary"
  >
    {icon}
  </a>
);

const SectionTitle = ({ label, title, center }: { label: string; title: string; center?: boolean }) => (
  <div className={`mb-12 ${center ? "text-center" : ""}`}>
    <span className="font-mono text-xs font-semibold text-primary uppercase tracking-widest">{label}</span>
    <h2 className="mt-2 text-3xl font-bold tracking-tight">{title}</h2>
  </div>
);

const StatCard = ({ label, value }: { label: string; value: string }) => (
  <div className="rounded-lg border border-border bg-card p-4 text-center">
    <p className="text-2xl font-bold text-primary">{value}</p>
    <p className="text-xs text-muted-foreground mt-1">{label}</p>
  </div>
);

export default Index;
