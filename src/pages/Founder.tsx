import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { GraduationCap, ArrowRight, ArrowLeft } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const Founder = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Brandon Khumalo | Co-founder of Ubuntu Tech Academy — Coding Bootcamp Zimbabwe</title>
        <meta
          name="description"
          content="Brandon Khumalo is the co-founder of Ubuntu Tech Academy, an online coding bootcamp in Zimbabwe training the next generation of software developers in Zimbabwe and across Africa through practical, project-driven learning."
        />
        <link rel="canonical" href="https://brandonkhumalo.co.zw/founder" />
        <meta property="og:url" content="https://brandonkhumalo.co.zw/founder" />
        <meta property="og:title" content="Brandon Khumalo | Co-founder of Ubuntu Tech Academy" />
        <meta
          property="og:description"
          content="Co-founder of Ubuntu Tech Academy, an online coding bootcamp in Zimbabwe for Zimbabwe and Africa. Practical, project-driven learning that gets people building real, production-grade software."
        />
      </Helmet>

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <Link to="/" className="font-mono text-sm font-semibold text-primary">BK</Link>
          <div className="flex items-center gap-6">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Co-founder — Ubuntu Tech Academy */}
      <section className="relative flex min-h-screen items-center pt-24 pb-16 overflow-hidden">
        {/* glow accents */}
        <div className="pointer-events-none absolute -top-32 -left-32 h-[420px] w-[420px] rounded-full bg-emerald-400/30 blur-[90px]" />
        <div className="pointer-events-none absolute -bottom-32 -right-16 h-[480px] w-[480px] rounded-full bg-purple-600/25 blur-[90px]" />

        <div className="container relative z-10 mx-auto px-6">
          <div className="mx-auto mb-12 max-w-4xl">
            <span className="font-mono text-xs font-semibold text-primary uppercase tracking-widest">Co-founder</span>
            <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">Ubuntu Tech Academy</h1>
          </div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0}
            className="mx-auto max-w-4xl"
          >
            <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-card p-8 sm:p-10">
              <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-emerald-400/20 blur-[80px]" />
              <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-purple-600/20 blur-[80px]" />
              <div className="relative">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <GraduationCap className="h-6 w-6" />
                  </span>
                  <div>
                    <h2 className="text-2xl font-bold">Ubuntu Tech Academy</h2>
                    <p className="font-mono text-sm text-primary">Online Coding Bootcamp · Zimbabwe & Africa</p>
                  </div>
                  <span className="ml-auto rounded-full border border-primary/40 px-3 py-1 font-mono text-xs text-primary">
                    Python Assignments
                  </span>
                </div>
                <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                  I'm the co-founder of Ubuntu Tech Academy — an online coding bootcamp on a mission to train
                  the next generation of software developers in Zimbabwe and across Africa. It's built around
                  the same principle that shaped my own career: practical, project-driven learning that gets
                  people building real, production-grade software — not just passing tutorials.
                </p>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  Beyond client work, this is my way of paying forward the path I took into this industry —
                  giving aspiring developers across the continent a hands-on, ship-it route into backend, cloud,
                  and full-stack engineering.
                </p>
                <Link
                  to="/assignments"
                  className="mt-7 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 glow"
                >
                  View Python Assignments
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
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

export default Founder;
