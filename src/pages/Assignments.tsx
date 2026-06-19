import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, BookOpenCheck, CheckCircle2, Code2, Lightbulb } from "lucide-react";
import { pythonAssignments } from "@/data/pythonAssignments";

const Assignments = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Ubuntu Tech Academy | 30-Day Python Assignments</title>
        <meta
          name="description"
          content="Thirty beginner Python assignments for Ubuntu Tech Academy students, covering Day 1 to Day 30 with instructions, guided steps, and answer references."
        />
        <link rel="canonical" href="https://brandonkhumalo.co.zw/assignments" />
      </Helmet>

      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <Link to="/" className="font-mono text-sm font-semibold text-primary">
            BK
          </Link>
          <div className="flex items-center gap-6">
            <Link
              to="/founder"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Founder
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-28 pb-20">
        <section className="container mx-auto px-6">
          <div className="mx-auto max-w-5xl">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-primary">
              Ubuntu Tech Academy
            </span>
            <div className="mt-3 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                  30-Day Python Assignments
                </h1>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
                  Day 1 to Day 30 practice work for beginner Python students. Each assignment gives
                  a clear task, guided prompts to think through the problem, and a reference answer
                  at the end.
                </p>
              </div>
              <div className="inline-flex w-fit items-center gap-2 rounded-lg border border-primary/30 bg-primary/10 px-4 py-3 font-mono text-sm text-primary">
                <BookOpenCheck className="h-4 w-4" />
                {pythonAssignments.length} assignments
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto mt-12 px-6">
          <div className="mx-auto grid max-w-5xl gap-5">
            {pythonAssignments.map((assignment) => (
              <article
                key={assignment.day}
                id={`day-${assignment.day}`}
                className="overflow-hidden rounded-lg border border-border bg-card"
              >
                <div className="border-b border-border bg-secondary/40 p-6">
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <p className="font-mono text-sm font-semibold text-primary">
                        Day {assignment.day}
                      </p>
                      <h2 className="mt-2 text-2xl font-bold tracking-tight">
                        {assignment.title}
                      </h2>
                      <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                        {assignment.objective}
                      </p>
                    </div>
                    <a
                      href={`#day-${assignment.day}`}
                      className="font-mono text-xs text-muted-foreground transition-colors hover:text-primary"
                    >
                      #{assignment.day.toString().padStart(2, "0")}
                    </a>
                  </div>
                </div>

                <div className="grid gap-6 p-6 lg:grid-cols-[1fr_1fr]">
                  <section>
                    <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-foreground">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      Instructions
                    </div>
                    <ol className="space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
                      {assignment.instructions.map((item) => (
                        <li key={item} className="list-decimal">
                          {item}
                        </li>
                      ))}
                    </ol>
                  </section>

                  <section>
                    <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-foreground">
                      <Lightbulb className="h-4 w-4 text-primary" />
                      Guided Steps
                    </div>
                    <ul className="space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
                      {assignment.guide.map((item) => (
                        <li key={item} className="list-disc">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </section>
                </div>

                <details className="border-t border-border">
                  <summary className="flex cursor-pointer list-none items-center gap-2 bg-background/40 px-6 py-4 text-sm font-semibold text-foreground transition-colors hover:text-primary">
                    <Code2 className="h-4 w-4 text-primary" />
                    Answer
                  </summary>
                  <div className="border-t border-border bg-background p-6">
                    <pre className="overflow-x-auto rounded-lg border border-border bg-black/40 p-4 text-sm leading-relaxed text-foreground">
                      <code>{assignment.answer}</code>
                    </pre>
                  </div>
                </details>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Assignments;
