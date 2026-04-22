import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Calendar } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" as const },
  }),
};

const Blog = () => {
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

      <main className="container mx-auto max-w-3xl px-6 pt-32 pb-24">
        <motion.div initial="hidden" animate="visible">

          {/* Header */}
          <motion.div variants={fadeUp} custom={0}>
            <span className="font-mono text-xs text-primary uppercase tracking-widest">Technical Writing</span>
            <h1 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Why I Chose Go (Echo) and Python (Django){" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-emerald-300">
                as My Main Tech Stack
              </span>
            </h1>
            <div className="mt-4 flex items-center gap-5 text-xs text-muted-foreground font-mono">
              <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" /> April 2026</span>
              <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> 6 min read</span>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {["Go", "Echo", "Django", "Backend", "Architecture"].map((tag) => (
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
              Every backend developer eventually faces the same question: <em>what is my go-to stack?</em> Not the stack
              you learn in a tutorial — the one you reach for when you are under pressure to ship something real, reliable,
              and maintainable. For me, that answer is <strong className="text-foreground">Go with Echo</strong> for high-concurrency
              services and <strong className="text-foreground">Python with Django</strong> for business-logic-heavy backends.
              They are not in competition. They solve different problems, and that is exactly why I use both.
            </p>

            <h2>The problem with picking one language for everything</h2>
            <p>
              Early on I tried to do everything in Python. Django is productive, the ecosystem is massive, and you can go from
              zero to a working REST API in an afternoon. But as soon as I started building systems that needed real-time
              bidirectional communication — specifically the driver-tracking and matching engine in{" "}
              <strong className="text-foreground">TumaGo</strong> — I hit a ceiling. Python's GIL and the threading model make
              it genuinely painful to manage thousands of long-lived WebSocket connections without throwing a lot of infrastructure
              at the problem. I did not want to patch around a language limitation. I wanted to use the right tool.
            </p>
            <p>
              That is when I started building the latency-sensitive parts of TumaGo in Go and keeping Django for what it does
              best. The split felt unnatural at first. Over time it became the most natural architecture decision I have made.
            </p>

            <h2>Why Go and Echo for the gateway and real-time services</h2>
            <p>
              Go was built with concurrency as a first-class concern. Goroutines are cheap — you can spawn thousands of them
              without the memory overhead you would pay for OS threads. For a system where every active delivery has a persistent
              WebSocket connection open between the client app, the driver app, and the server, this matters enormously.
            </p>
            <p>
              I chose <strong className="text-foreground">Echo</strong> as the HTTP framework because it is minimal and fast
              without being bare-metal. It has clean middleware chaining, built-in support for WebSocket upgrades, JWT middleware,
              and rate limiting — exactly what I needed for an API gateway layer. It gets out of your way. You write the logic,
              not the framework glue.
            </p>
            <p>
              In TumaGo, Go handles three responsibilities:
            </p>
            <ul>
              <li><strong className="text-foreground">API Gateway</strong> — all inbound requests hit a Go + Echo gateway first. JWT validation, rate limiting, and routing to downstream services happen here.</li>
              <li><strong className="text-foreground">Location Service</strong> — persistent WebSocket connections from driver apps stream GPS coordinates into the gateway, which writes them to Redis GEO. Go handles hundreds of concurrent connections with minimal resource usage.</li>
              <li><strong className="text-foreground">Matching Engine</strong> — when a client books a delivery, a Go service queries Redis GEO for nearby available drivers by vehicle type and dispatches the job via Dramatiq workers. The proximity query and dispatch loop runs in microseconds.</li>
            </ul>
            <p>
              Could I have done this in Python with asyncio? Technically yes. But the operational complexity, the tuning
              required, and the performance ceiling are all significantly worse. Go gave me the concurrency model I needed
              without fighting the language to get it.
            </p>

            <h2>Why Python and Django for the business logic layer</h2>
            <p>
              Go is fast. Go is also verbose for anything that is not a systems problem. When I need to model a complex
              domain — orders, payments, users, inventory, delivery pricing rules, admin workflows — Django's ORM and the
              broader Python ecosystem are genuinely faster to work in. Not faster at runtime. Faster to build, test, and
              maintain.
            </p>
            <p>
              Specifically, <strong className="text-foreground">Django REST Framework</strong> gives me serialization,
              validation, authentication, and permissions in a way that maps cleanly to real business requirements. Writing a
              payment integration against a local Zimbabwean payment gateway (PayNow) in Python is straightforward — the
              HTTP client, JSON handling, and retry logic are all readable and easy to test. Doing the same in Go is not
              difficult, but it is more ceremony for a problem that is fundamentally about business rules, not concurrency.
            </p>
            <p>
              Django also handles the things that most backends eventually need but nobody wants to build twice:
              database migrations, admin tooling for operations teams, signal-based side effects, and a mature authentication
              system. These are solved problems in Django. In Go you are building them yourself or stitching together
              smaller libraries.
            </p>
            <p>
              At <strong className="text-foreground">Tishanyq Digital</strong> the same pattern holds. Go and Echo handle
              the performance-sensitive services. Django handles the data-heavy, rule-heavy business layer. The boundary
              is clean because the concerns are genuinely different.
            </p>

            <h2>The tradeoffs I knew I was accepting</h2>
            <p>
              Using two backend languages is not free. Here is what I had to consciously accept:
            </p>
            <ul>
              <li><strong className="text-foreground">Operational complexity</strong> — two runtimes, two sets of dependencies, two deployment targets. Docker Compose and Kubernetes manifests manage this, but it is real overhead.</li>
              <li><strong className="text-foreground">Context switching</strong> — moving between Go and Python in a single day requires mental discipline. The type systems, error handling patterns, and idioms are different enough to slow you down when you are not in flow.</li>
              <li><strong className="text-foreground">Team knowledge</strong> — if you are working with others, both languages need to be understood. For a solo build this is fine. For a team it requires upfront alignment.</li>
            </ul>
            <p>
              These are real costs. But for a system with hard latency requirements on the real-time layer and complex
              domain logic on the business layer, the costs of forcing everything into one language are higher.
            </p>

            <h2>The principle behind the decision</h2>
            <p>
              The decision is not really about Go vs Python. It is about matching the tool to the constraint. The constraint
              on the location and matching services is <em>throughput and latency</em>. Go solves that. The constraint on
              the payment, order, and user management layer is <em>correctness and development speed</em>. Django solves that.
            </p>
            <p>
              A stack is not a brand. It is a set of bets about what problems you are most likely to face and which tools
              give you the best leverage against them. For the systems I build — real-time logistics, e-commerce platforms,
              API-first backends — Go + Echo and Python + Django are the bets I keep making, because they keep paying off.
            </p>

          </motion.div>

        </motion.div>
      </main>
    </div>
  );
};

export default Blog;
