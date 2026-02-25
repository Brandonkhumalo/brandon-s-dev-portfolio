import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink, MapPin, ChevronDown } from "lucide-react";

const heroImages = ["/assets/bee1.jpeg", "/assets/bee2.jpeg"];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const skills = {
  "Languages": ["Java", "Python", "JavaScript", "TypeScript", "SQL"],
  "Frameworks": ["Django REST Framework", "React", "Node.js", "Firebase"],
  "Cloud & DevOps": ["AWS", "Docker", "CI/CD", "PostgreSQL", "Redis"],
  "Tools": ["Git & GitHub", "Android Studio", "VS Code"],
};

const projects = [
  {
    title: "TumaGo",
    subtitle: "Fullstack Mobile Package Delivery App",
    description:
      "A logistics platform enabling clients to book local package deliveries and drivers to accept jobs. Built with Django backend, real-time WebSockets, JWT auth, and native Android apps with Google Maps integration.",
    tech: ["Django", "Django Channels", "JWT", "Android (Java)", "Google Maps", "Docker", "AWS"],
    image: "/IMG-2025.jpg",
    github: "https://github.com/Brandonkhumalo/Tuma_Go_backend",
  },
  {
    title: "Online Voting System",
    subtitle: "Scalable RESTful API Backend",
    description:
      "A scalable backend for an online voting system enabling poll creation, voting, and real-time result computation. Features WebSocket broadcasting, token-based auth, and comprehensive test coverage.",
    tech: ["Python", "Django REST Framework", "PostgreSQL", "Redis", "WebSockets", "Docker"],
    image: "/IMG-2025.jpg",
    github: "https://github.com/Brandonkhumalo/alx-project-nexus",
  },
];

const Index = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <span className="font-mono text-sm font-semibold text-primary">BK</span>
          <div className="flex items-center gap-6">
            {["About", "Skills", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative flex min-h-screen items-center pt-20 overflow-hidden">
        {/* Background slideshow for all screens */}
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.img
              key={`hero-bg-${currentImage}`}
              src={heroImages[currentImage]}
              alt=""
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-background/60 sm:bg-background/80" />
        </div>
        <div className="container relative z-10 mx-auto grid gap-12 px-6 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1"
          >
            <motion.p variants={fadeUp} custom={0} className="font-mono text-sm text-primary mb-4">
              Hi, I'm
            </motion.p>
            <motion.h1
              variants={fadeUp}
              custom={1}
              className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl"
            >
              Brandon<br />
              <span className="text-gradient">Khumalo</span>
            </motion.h1>
            <motion.div variants={fadeUp} custom={2} className="mt-4 flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" />
              <span className="text-sm">Harare, Zimbabwe</span>
            </motion.div>
            <motion.p
              variants={fadeUp}
              custom={3}
              className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground"
            >
              Software Developer crafting robust full-stack applications with Django, React, and AWS. Passionate about building scalable, user-centric solutions.
            </motion.p>
            <motion.div variants={fadeUp} custom={4} className="mt-8 flex items-center gap-4">
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
            </motion.div>
            <motion.div variants={fadeUp} custom={5} className="mt-8 flex items-center gap-5">
              <SocialLink href="https://github.com/Brandonkhumalo" icon={<Github className="h-5 w-5" />} />
              <SocialLink href="https://www.linkedin.com/in/brandon-khumalo04/" icon={<Linkedin className="h-5 w-5" />} />
              <SocialLink href="mailto:brandonkhumz40@gmail.com" icon={<Mail className="h-5 w-5" />} />
            </motion.div>
          </motion.div>
          <div className="hidden lg:flex order-1 lg:order-2 justify-center">
            <div className="relative">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-primary/30 to-transparent blur-2xl" />
              <div className="relative h-[300px] w-[225px] sm:h-[480px] sm:w-[360px] rounded-2xl overflow-hidden border border-border">
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
              Software Developer with extensive experience in full-stack development using Java for Android Development, Python Django for Backend Development, JavaScript, TypeScript, React for Web Applications, SQL, and AWS. I focus on building user-centric and innovative solutions—guiding teams in delivering robust applications, optimizing systems, and implementing cloud-based solutions.
            </motion.p>
            <motion.div variants={fadeUp} custom={1} className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
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
                  <h3 className="text-lg font-semibold">Software Developer</h3>
                  <p className="text-primary font-mono text-sm">Tishanyq Digital</p>
                </div>
                <span className="font-mono text-xs text-muted-foreground rounded-full border border-border px-3 py-1">
                  2025 – Present
                </span>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2"><span className="text-primary mt-1">▹</span> Lead the design, development and deployment of fullstack applications</li>
                <li className="flex gap-2"><span className="text-primary mt-1">▹</span> Built robust, scalable and high-performance applications with Java, TypeScript, React, Python, Django & PostgreSQL</li>
                <li className="flex gap-2"><span className="text-primary mt-1">▹</span> Deployed and maintained applications on AWS with CI/CD pipelines</li>
                <li className="flex gap-2"><span className="text-primary mt-1">▹</span> Conducted code reviews and ensured adherence to industry standards</li>
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
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-foreground"
                  >
                    <Github className="h-4 w-4" />
                    View on GitHub
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
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
              { title: "Certificate in Pro Backend Development", org: "ALX Africa", date: "2025" },
              { title: "AWS Cloud Practitioner", org: "Amazon Web Services", date: "2024" },
              { title: "Java Android Mobile Development", org: "Udemy", date: "2025" },
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
                href="https://github.com/Brandonkhumalo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-semibold text-foreground hover:border-primary hover:text-primary transition-all"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

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

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
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
