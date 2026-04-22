import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Clock, Calendar } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" as const },
  }),
};

const Blog2 = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary">
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </Link>
          <span className="font-mono text-sm font-semibold text-primary">BK</span>
        </div>
      </nav>

      <Helmet>
        <title>What Type of Systems Do I Like Working On | Brandon Khumalo</title>
        <meta name="description" content="Brandon Khumalo on the types of systems he finds most absorbing — real-time platforms, coordination engines, systems built for the African context, and why consequential software demands different thinking." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://brandonkhumalo.dev/blog/systems-i-like" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://brandonkhumalo.dev/blog/systems-i-like" />
        <meta property="og:title" content="What Type of Systems Do I Like Working On | Brandon Khumalo" />
        <meta property="og:description" content="Real-time platforms, coordination engines, systems built for the African context — the common thread across the work I find most absorbing." />
        <meta property="og:image" content="https://brandonkhumalo.dev/assets/me.jpg" />
        <meta property="article:author" content="Brandon Khumalo" />
        <meta property="article:published_time" content="2026-04-22" />
        <meta property="article:tag" content="Backend" />
        <meta property="article:tag" content="Systems Design" />
        <meta property="article:tag" content="Africa" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="What Type of Systems Do I Like Working On | Brandon Khumalo" />
        <meta name="twitter:description" content="Real-time platforms, coordination engines, systems built for the African context — the work I find most absorbing." />
        <meta name="twitter:image" content="https://brandonkhumalo.dev/assets/me.jpg" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": "What Type of Systems Do I Like Working On",
          "author": { "@type": "Person", "name": "Brandon Khumalo", "url": "https://brandonkhumalo.dev" },
          "datePublished": "2026-04-22",
          "url": "https://brandonkhumalo.dev/blog/systems-i-like",
          "image": "https://brandonkhumalo.dev/assets/me.jpg",
          "keywords": ["Real-Time Systems", "Backend Engineering", "Africa Tech", "Systems Design", "Go", "Django"]
        })}</script>
      </Helmet>

      <main className="container mx-auto max-w-3xl px-6 pt-32 pb-24">
        <motion.div initial="hidden" animate="visible">

          {/* Header */}
          <motion.div variants={fadeUp} custom={0}>
            <span className="font-mono text-xs text-primary uppercase tracking-widest">Engineering Perspective</span>
            <h1 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              What Type of Systems Do I{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-emerald-300">
                Like Working On
              </span>
            </h1>
            <div className="mt-4 flex items-center gap-5 text-xs text-muted-foreground font-mono">
              <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" /> April 2026</span>
              <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> 5 min read</span>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {["Backend", "Real-Time", "Systems Design", "Africa", "Perspective"].map((tag) => (
                <span key={tag} className="rounded-md bg-muted px-2.5 py-1 text-xs text-muted-foreground font-mono">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeUp} custom={1} className="mt-6 h-px bg-border" />

          {/* Article body */}
          <motion.div variants={fadeUp} custom={2} className="mt-10 prose-custom">

            <p>
              Most developers have a preference — a type of problem they get genuinely absorbed in, where the work stops
              feeling like work. Mine is systems with real-world stakes: platforms where something tangible happens when
              the software runs — a delivery dispatches, a payment clears, a driver gets routed. I am not particularly
              drawn to dashboards for their own sake, or to apps that are mostly CRUD with a nice UI. I am drawn to
              systems with a moving, stateful world underneath them.
            </p>

            <h2>Real-time systems with live state</h2>
            <p>
              The most satisfying systems I have worked on are ones where the state of the world changes continuously and
              the software has to track it honestly. In <strong className="text-foreground">TumaGo</strong>, the world is
              a set of drivers moving through a city. The system needs to know where every active driver is, right now,
              and make decisions based on that — which driver is closest, which is available, what the estimated arrival
              time is. That is not a problem you solve with periodic polling and a relational query. You need WebSockets,
              Redis GEO, and a location service that can absorb a constant stream of coordinate updates without falling over.
            </p>
            <p>
              What I like about real-time systems is that the failure modes are visible. If the location service is slow,
              a client sees a driver frozen on the map. If the matching engine has a race condition, two drivers get
              assigned the same job. The feedback loop between the code and the real world is tight, and that forces you
              to think carefully about consistency, ordering, and latency in a way that CRUD systems simply do not demand.
            </p>

            <h2>Systems where the backend carries real business weight</h2>
            <p>
              I am a backend-focused developer, and I mean that as a statement about where I think the most interesting
              engineering happens — not as a dismissal of frontend work. The systems I enjoy most are ones where the
              backend is not just a data layer sitting behind a UI. It is where the rules live: pricing logic, payment
              state machines, order lifecycle transitions, delivery fee calculations based on geography, fraud guards on
              payment retries.
            </p>
            <p>
              The <strong className="text-foreground">Laptop World</strong> e-commerce platform is a good example.
              The frontend is polished — Next.js, shadcn/ui, Framer Motion animations. But the interesting work was
              on the Django side: a 7-stage order lifecycle, async PayNow payment polling with retry logic, Google Maps
              delivery address resolution with GPS-based fee tiers, automatic image compression on every product upload,
              and a session-based cart that works without requiring a user account. These are business rules that require
              careful modelling. Getting them right means understanding the domain, not just the technology.
            </p>

            <h2>Systems that solve African problems</h2>
            <p>
              I am based in Harare, Zimbabwe, and I build for the African context. That means the assumptions embedded
              in most Western software tutorials do not apply. Stripe is not available. Infrastructure is less reliable.
              Mobile-first is not a nice-to-have, it is the default. Payment methods like EcoCash and OneMoney are primary,
              not secondary. Delivery addresses are often informal — an area name and a landmark, not a structured
              postal code.
            </p>
            <p>
              This context makes the engineering more interesting, not harder. Integrating <strong className="text-foreground">PayNow</strong>{" "}
              — Zimbabwe's local payment rail — required me to build an async polling loop from scratch because there is
              no webhook. The payment is initiated, a URL is returned, and you poll the PayNow API until the status
              resolves. That is a real distributed systems problem: you need idempotent state transitions, a retry budget,
              and a way to surface failures to the user without leaving an order in an ambiguous state. Solving it
              was more intellectually satisfying than wiring up a Stripe webhook, precisely because the constraints
              were real.
            </p>

            <h2>Systems with a matching or coordination problem at the core</h2>
            <p>
              Delivery platforms, job marketplaces, ride-hailing — what these have in common is a coordination problem.
              There are two sides that need to find each other efficiently, and the quality of the match directly affects
              the experience for both. In TumaGo the match is between a client who needs a delivery and a driver nearby
              with the right vehicle type. Getting that match right under load — when multiple bookings arrive
              simultaneously, when drivers go offline mid-match, when a job is declined and needs to be re-queued — is
              a genuinely interesting concurrency problem.
            </p>
            <p>
              I used <strong className="text-foreground">Dramatiq workers</strong> and <strong className="text-foreground">Redis GEO</strong>{" "}
              to build the matching engine: proximity queries to find candidates, async dispatch to avoid blocking the
              gateway, and a fallback re-queue strategy when a driver does not respond in time. These are the kinds of
              architectural decisions that you only arrive at by thinking through the failure modes carefully.
            </p>

            <h2>Systems where deployment and operations are part of the design</h2>
            <p>
              I do not consider a system finished when the code works locally. The deployment, monitoring, and operational
              story are part of the design. I prefer systems where I have had to think about how they fail in production —
              not just how they work when everything is healthy. That means Docker and Kubernetes for repeatable deployments,
              Prometheus and Grafana for observability, GitHub Actions for CI/CD, and deliberate health check and
              restart policies for every service.
            </p>
            <p>
              There is a discipline that comes from owning the full lifecycle — from the first API design decision to
              what happens when a container crashes at 2am. I find that discipline shapes better software. When you know
              you are going to operate something, you write it differently from the start.
            </p>

            <h2>The common thread</h2>
            <p>
              Looking across the systems I have most enjoyed building, the common thread is not a specific domain or
              a specific technology. It is that the software is <em>consequential</em>. Something real happens when it
              runs. The business rules matter. The latency matters. The failure modes are visible. That is the kind of
              engineering I want to keep doing — systems where the problem is hard enough to demand careful thought,
              and the feedback from the real world is honest enough to tell you whether you got it right.
            </p>

          </motion.div>

        </motion.div>
      </main>
    </div>
  );
};

export default Blog2;
