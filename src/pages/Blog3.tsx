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

const Blog3 = () => {
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
        <title>My School Hub — Building a Polyglot SaaS School Management Platform for African Schools | Brandon Khumalo</title>
        <meta name="description" content="My School Hub (myschoolhub.co.zw) — a multi-tenant SaaS school management platform for African schools, built by Brandon Khumalo at Tishanyq Digital. The architecture story: Go (Echo) API gateway, Django/DRF core, AWS infrastructure, designed to scale from one school to 100,000 users without a rewrite." />
        <meta name="keywords" content="My School Hub, MySchoolHub, myschoolhub.co.zw, My School Hub Zimbabwe, My School Hub Tishanyq, My School Hub Brandon Khumalo, school management system Zimbabwe, school management platform Africa, SaaS school software, multi-tenant SaaS, Tishanyq Digital, Go Django SaaS, polyglot microservices, AWS SaaS architecture, school management software Harare, Zimbabwe edtech, African edtech, boarding school software, report card software, PayNow school fees, WhatsApp school integration" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://brandonkhumalo.co.zw/blog/my-school-hub" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://brandonkhumalo.co.zw/blog/my-school-hub" />
        <meta property="og:title" content="My School Hub — Building a Polyglot SaaS School Management Platform for African Schools" />
        <meta property="og:description" content="My School Hub (myschoolhub.co.zw) — the architecture story behind a multi-tenant SaaS school management platform built with Go (Echo), Django, and AWS by Brandon Khumalo at Tishanyq Digital. Designed to scale from one school to 100,000 users." />
        <meta property="og:image" content="https://brandonkhumalo.co.zw/images/myschoolhub.png" />
        <meta property="article:author" content="Brandon Khumalo" />
        <meta property="article:published_time" content="2026-05-26" />
        <meta property="article:tag" content="Go" />
        <meta property="article:tag" content="Django" />
        <meta property="article:tag" content="AWS" />
        <meta property="article:tag" content="DevOps" />
        <meta property="article:tag" content="SaaS" />
        <meta property="article:tag" content="Multi-Tenant" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="My School Hub — Building a Polyglot SaaS School Management Platform" />
        <meta name="twitter:description" content="My School Hub (myschoolhub.co.zw) — Go + Django + AWS, multi-tenant SaaS for African schools, built by Brandon Khumalo at Tishanyq Digital." />
        <meta name="twitter:image" content="https://brandonkhumalo.co.zw/images/myschoolhub.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": "My School Hub — Building a Polyglot SaaS School Management Platform for African Schools",
          "alternativeHeadline": "Building My School Hub: A Polyglot SaaS Platform for African Schools",
          "author": { "@type": "Person", "name": "Brandon Khumalo", "url": "https://brandonkhumalo.co.zw" },
          "publisher": { "@type": "Organization", "name": "Tishanyq Digital" },
          "datePublished": "2026-05-26",
          "dateModified": "2026-05-26",
          "url": "https://brandonkhumalo.co.zw/blog/my-school-hub",
          "image": "https://brandonkhumalo.co.zw/images/myschoolhub.png",
          "about": {
            "@type": "SoftwareApplication",
            "name": "My School Hub",
            "alternateName": ["MySchoolHub", "My School Hub Zimbabwe"],
            "url": "https://myschoolhub.co.zw",
            "applicationCategory": "EducationalApplication",
            "operatingSystem": "Web",
            "description": "A multi-tenant SaaS school management platform serving 13 user roles across academics, boarding, clinic, finances, HR, library, and WhatsApp/PayNow integrations.",
            "publisher": { "@type": "Organization", "name": "Tishanyq Digital", "url": "https://tishanyq.co.zw" }
          },
          "mentions": [
            { "@type": "SoftwareApplication", "name": "My School Hub", "url": "https://myschoolhub.co.zw" },
            { "@type": "Organization", "name": "Tishanyq Digital", "url": "https://tishanyq.co.zw" }
          ],
          "keywords": ["My School Hub", "MySchoolHub", "myschoolhub.co.zw", "My School Hub Zimbabwe", "My School Hub Tishanyq Digital", "school management system Zimbabwe", "SaaS school software Africa", "multi-tenant SaaS", "Tishanyq Digital", "Go", "Echo", "Django", "Python", "AWS", "DevOps", "Polyglot Microservices", "Backend Architecture", "boarding school software", "report card software", "PayNow", "WhatsApp Business API"]
        })}</script>
      </Helmet>

      <main className="container mx-auto max-w-3xl px-6 pt-32 pb-24">
        <motion.div initial="hidden" animate="visible">

          {/* Header */}
          <motion.div variants={fadeUp} custom={0}>
            <span className="font-mono text-xs text-primary uppercase tracking-widest">Technical Writing</span>
            <h1 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Building My School Hub:{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-emerald-300">
                A Polyglot SaaS Platform for African Schools
              </span>
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground italic">
              How I designed a multi-tenant school management system in Go + Django, deployed it to AWS, and built it to scale from one school to a hundred thousand users — without rewriting the application once.
            </p>
            <div className="mt-4 flex items-center gap-5 text-xs text-muted-foreground font-mono">
              <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" /> May 2026</span>
              <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> 10 min read</span>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {["Go", "Django", "AWS", "DevOps", "SaaS", "Multi-Tenant", "Architecture"].map((tag) => (
                <span key={tag} className="rounded-md bg-muted px-2.5 py-1 text-xs text-muted-foreground font-mono">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeUp} custom={1} className="mt-6 h-px bg-border" />

          {/* Article body */}
          <motion.div variants={fadeUp} custom={2} className="mt-10 prose-custom">

            <h2>The problem</h2>
            <p>
              Schools in Zimbabwe — and across much of Africa — sit on a strange technology gap. The administrative work is enormous: timetables, attendance, marks, report cards, fees, boarding rosters, clinic visits, payroll, library loans, parent communication, disciplinary records, sports. Most of it still runs on paper, WhatsApp, and tired Excel files that get emailed around at the end of every term.
            </p>
            <p>
              The few "school management" systems that exist tend to fail in one of three ways. They are too expensive (licensed per-seat in a market where every dollar matters), too generic (built for American K-12 and bolted onto African workflows), or too brittle (one PHP monolith, one shared database, every school inside the same tables, one bug away from leaking another school's marks).
            </p>
            <p>
              I wanted to build something different: a single platform any school could subscribe to, with its data fully isolated from every other school's data, that handled the entire administrative surface area — not just one slice of it — and that could start cheap enough for a small school to afford and scale to a national rollout without a rewrite.
            </p>
            <p>
              That platform is{" "}
              <a
                href="https://myschoolhub.co.zw"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline underline-offset-4 hover:text-foreground transition-colors"
              >
                My School Hub
              </a>
              .
            </p>
            <p>
              This post is the architecture story: what's in it, why each piece is the way it is, and what I learned building it.
            </p>

            <h2>What it actually does</h2>
            <p>
              Before the architecture, the scope. My School Hub serves <strong className="text-foreground">thirteen distinct user roles</strong>, each with their own dashboard, permissions, and workflows:
            </p>
            <ul>
              <li><strong className="text-foreground">Admin</strong> — full school management</li>
              <li><strong className="text-foreground">Teacher</strong> — classes, marks, attendance, homework, parent messaging</li>
              <li><strong className="text-foreground">Student</strong> — grades, timetable, homework submission, boarding info</li>
              <li><strong className="text-foreground">Parent</strong> — children's progress, fees, messaging, parent-teacher conferences</li>
              <li><strong className="text-foreground">HR</strong> — staff, payroll, leave, incidents, meetings</li>
              <li><strong className="text-foreground">Accountant</strong> — fees, invoices, payments, reports</li>
              <li><strong className="text-foreground">Nurse</strong> — clinic visits, health records, medications</li>
              <li><strong className="text-foreground">Matron</strong> — boarding dormitory operations (scoped to assigned dorms)</li>
              <li><strong className="text-foreground">Librarian</strong> — books, loans, fines</li>
              <li><strong className="text-foreground">Sports Director</strong> — activities, sports analytics, accolades</li>
              <li><strong className="text-foreground">Security</strong> — visitor logs, incident reports</li>
              <li><strong className="text-foreground">Cleaner</strong> — task assignments, attendance</li>
              <li><strong className="text-foreground">Superadmin</strong> — multi-school tenant management at the platform level</li>
            </ul>
            <p>
              That's not thirteen variants of one dashboard. It's thirteen distinct mental models of "what is school?" and each gets a UI and an API surface tuned to it.
            </p>
            <p>
              Underneath, the platform covers academics, boarding operations, health/clinic, finances, library, HR and payroll, in-app and WhatsApp messaging, report cards with per-school PDF branding, parent-teacher conferences, disciplinary records, activities and sports, and bulk CSV imports for everything that needs to start with a spreadsheet.
            </p>
            <p>
              It is, by any reasonable definition, a large application. Which made every architectural decision matter.
            </p>

            <h2>Choosing the stack</h2>
            <p>
              There is a temptation, when building something this broad, to pick one framework and lean on it for everything. Django can technically do all of this. So can Spring. So can Rails. The reason I didn't pick a single-framework monolith is that different parts of the workload have genuinely different shapes, and forcing one runtime to handle all of them means making it bad at most of them.
            </p>
            <p>Here's how I split the work:</p>
            <ul>
              <li><strong className="text-foreground">Frontend</strong> — React 19 + Vite + Tailwind. Fast iteration, mature ecosystem, ship-anywhere static build.</li>
              <li><strong className="text-foreground">API Gateway</strong> — Go (Echo framework). Single trust boundary; ~15 MB resident memory; goroutines for I/O.</li>
              <li><strong className="text-foreground">Core business logic</strong> — Django 5 + DRF. Migrations, ORM, admin tooling, mature batteries.</li>
              <li><strong className="text-foreground">Integrations &amp; PDF</strong> — Go. Fast PDF generation, concurrent external calls, low footprint.</li>
              <li><strong className="text-foreground">Bulk imports</strong> — Go workers. Streaming CSV parsing, batch inserts, no GIL.</li>
              <li><strong className="text-foreground">Database</strong> — PostgreSQL. Multi-tenant via row-level scoping; mature; cheap on RDS.</li>
              <li><strong className="text-foreground">Async tasks</strong> — Celery + Redis. The well-trodden Python async path.</li>
              <li><strong className="text-foreground">Cache &amp; broker</strong> — Redis. One service, two jobs.</li>
            </ul>
            <p>
              The frontend is a React 19 SPA built with Vite, using React Router 7 for navigation and Tailwind for styling. The backend is where the interesting decisions live, so let's spend some time there.
            </p>

            <h2>The polyglot backend: why Go and Python</h2>
            <p>
              The backend isn't one service. It's four, each speaking HTTP, each owning a clearly defined slice of the workload:
            </p>
            <pre className="rounded-lg border border-border bg-card p-4 text-xs leading-relaxed text-muted-foreground overflow-x-auto"><code>{`Internet → Go API Gateway → Django (core business logic)
                          → Go Workers (bulk CSV imports)
                          → Go Services (PDF, payments, email, WhatsApp)`}</code></pre>
            <p>
              The <strong className="text-foreground">Go API gateway</strong> sits at the front. It handles JWT validation, token blacklisting, CORS, rate limiting, audit logging, and routes every incoming request to the right downstream service. It is the only thing exposed to the public internet — Django and the other Go services live on private ports and accept traffic only through the gateway. This gives me one trust boundary instead of three, and one place to update rate limits, auth rules, or cross-cutting middleware. The gateway runs in about 15 MB of resident memory, which means it stays out of the way of everything else on the box.
            </p>
            <p>
              <strong className="text-foreground">Django</strong> owns the business logic. About forty-five domain models live there: students, classes, results, assessment plans, boarding dormitories, clinic visits, fee structures, payroll, library loans, disciplinary records, and so on. Django gets the work where its strengths shine — migrations, ORM relationships, admin tooling for the superadmin, and DRF's serializer-and-viewset pattern for endpoint surface. Where Django is genuinely the right tool, I use Django. Where it isn't, I don't.
            </p>
            <p>
              <strong className="text-foreground">Go services</strong> handle the things Django would do badly. PDF report-card generation is one — generating a beautifully laid-out, per-school-branded PDF for every student in a class is fundamentally CPU-bound concurrent work, and gofpdf is dramatically faster than ReportLab when you're rendering hundreds of cards back to back. PayNow Zimbabwe payment processing is another, with per-school merchant credentials and webhook signature verification. Transactional email via Resend, and the WhatsApp Business API integration, live here too. Anything that talks to an external service, anything that's CPU-bound, anything that benefits from low memory and easy concurrency — Go.
            </p>
            <p>
              <strong className="text-foreground">Go workers</strong> handle bulk CSV imports. Schools onboard with a spreadsheet of students; finance imports a CSV of fees; teachers import a CSV of term results. Doing this in Django means loading rows into memory, looping through them one by one, and either committing per row (slow) or risking the whole transaction (fragile). The Go worker streams the CSV row by row, batches inserts into PostgreSQL, handles conflict resolution and upserts, and runs in a fraction of the memory.
            </p>
            <p>
              The split looks complex on a diagram. In practice it makes each service simpler, because each service has one job and one mental model.
            </p>

            <h2>Multi-tenancy: every table knows which school it belongs to</h2>
            <p>
              The single hardest decision in a SaaS platform is how to isolate tenants. There are three common approaches: one database per tenant (clean, expensive, painful migrations), one schema per tenant (cleanish, still expensive, still painful), and one shared database with a tenant ID on every row (cheap, fast, requires discipline).
            </p>
            <p>
              I went with the third. Every domain model carries a school foreign key. Every queryset filters by <code>request.user.school</code>. The database is one PostgreSQL instance. The schema is one set of tables. The isolation is enforced in the application layer, consistently and automatically.
            </p>
            <p>
              To make that actually automatic — not "remember to filter, please" — I built three custom Django managers. A <code>TenantAwareManager</code> exposes a <code>.for_school(school)</code> method on every model. A <code>SoftDeleteManager</code> excludes soft-deleted rows by default. A <code>TenantSoftDeleteManager</code> combines both. Views call <code>.for_school(request.user.school)</code> reflexively, and the model manager makes the wrong query inconvenient to write.
            </p>
            <p>
              Tenant logic that does require nuance — for example, matrons can only see the dormitories they're assigned to, not every dorm in their school — lives in a single backend helper module. Need to know if this matron can write to this dorm? Call one function. Need to know which student IDs a matron can see? Call one function. The frontend never tries to compute permissions itself; the backend is the source of truth, and the helpers keep magic strings (<code>if user.role == "matron"</code>) out of the views.
            </p>
            <p>
              Schools can also be suspended by the platform (a flag on the school row blocks admin login, useful for billing enforcement), and each school can declare itself a day school, a boarding school, or both — which controls whether boarding endpoints are accessible at all. Tenants aren't just isolated; they're configurable.
            </p>

            <h2>Authentication: custom JWT, deliberately</h2>
            <p>
              The default Django auth flow is session-based, which works fine for a server-rendered site. I needed token-based auth that worked across a React SPA, a Go gateway, and a future mobile client without sharing a session cookie.
            </p>
            <p>
              I implemented JWT auth from scratch — symmetric signing, a long-lived refresh token, a short-lived access token, and a server-side token blacklist for forced logout. The blacklist is the part most JWT tutorials skip. Without it, "log out everywhere" is impossible; with it, every gateway request checks the token against the blacklist before forwarding the request. The blacklist lives in PostgreSQL because Redis evictions during memory pressure are exactly the wrong behaviour for "is this token revoked".
            </p>
            <p>
              The gateway validates tokens once, at the edge. Django assumes the gateway has done its job and trusts the user context in the request. This keeps Django simpler and means a misconfigured Django can't accidentally bypass auth — there is only one path in.
            </p>

            <h2>The report-card system: where boring becomes interesting</h2>
            <p>
              The hardest workflow in any school system isn't fees or attendance — it's report cards. Every school wants its report card to look different. Some want exam marks only; others want test/assignment/project weights computed automatically. Some want a class average shown; some want positions; some want neither. Some want a QR code linking back to the digital record; some want a fees-paid status. Some want grouped subjects (Core, Electives, Languages); some want a flat list.
            </p>
            <p>
              Hard-coding any of that is a death sentence: every new school becomes a custom feature request.
            </p>
            <p>So the report card system has three layers:</p>
            <ul>
              <li><strong className="text-foreground">ReportCardConfig</strong> — a per-school configuration with 25+ fields controlling layout, branding, typography, and content toggles. The school chooses what their report card looks like.</li>
              <li><strong className="text-foreground">AssessmentPlan</strong> — a per-term, per-subject specification of how marks are computed (papers, tests, assignments, each with weights and a component index). The teacher's gradebook follows the plan automatically.</li>
              <li><strong className="text-foreground">SubjectTermFeedback</strong> — per-student teacher comment and effort grade for each subject.</li>
            </ul>
            <p>
              A workflow gates the whole thing: teachers submit feedback, an admin reviews and approves a <code>ReportCardApprovalRequest</code>, the approved cards are bundled into a <code>ReportCardRelease</code>, and parents see them in their portal. The PDF itself is generated by the Go services service, using the school's logo, colours, fonts, and motto — all from the school's customisation settings.
            </p>
            <p>
              The end result: every school can have a report card that looks like <em>their</em> report card, and not a generic one. Without me writing a single line of bespoke code per school.
            </p>

            <h2>Boarding, clinic, HR: the unglamorous breadth</h2>
            <p>
              Most of the depth in My School Hub is in the modules nobody screenshots. The <strong className="text-foreground">boarding module</strong> handles dormitory and bed assignments, roll call, lights-out enforcement, meal menus and attendance, dietary flags, medication schedules, exeat requests with sign-in/sign-out movement logs, a tuck-shop wallet with transactions and low-balance alerts, laundry schedules, lost-item reports, prep attendance, dorm inspection scores, and wellness check-ins with mood scoring.
            </p>
            <p>
              The <strong className="text-foreground">clinic module</strong> lets nurses log visits, track ongoing health conditions, manage medication schedules, and flag at-risk students for the admin and matron.
            </p>
            <p>
              The <strong className="text-foreground">HR module</strong> handles departments, staff, leave requests (annual, sick, maternity, emergency, unpaid), payroll with allowances and deductions and a payment-request approval workflow, visitor logs, incident reports, cleaning schedules, attendance, and meetings.
            </p>
            <p>
              And there's a layered permissions system on top of all of this. HR and accountant roles can either be configured as "root" (full access) or have per-page read/write grants from a configurable permission profile. The same permission resolution runs in the frontend (to hide controls) and the backend (to enforce them).
            </p>
            <p>
              None of this is fancy. All of it is necessary. Building it taught me that the real test of a system isn't whether the headline feature works — it's whether the seventh-most-important module is built with the same care as the first.
            </p>

            <h2>Infrastructure: cheap to start, scale without rewriting</h2>
            <p>
              Architecture only matters if it can be deployed. The deployment story for My School Hub has five planned phases, each one a natural step up from the last, and none of them require changing the application code.
            </p>
            <p>
              <strong className="text-foreground">Phase one</strong> is a single AWS EC2 instance in af-south-1 (Cape Town — lowest latency to Zimbabwe). It runs Docker Compose with the Go gateway, Django, the two Go services, Celery worker, Celery beat, all behind Nginx with Let's Encrypt SSL. The database is managed PostgreSQL on RDS; the cache is managed Redis on ElastiCache; media uploads go to S3. The whole stack costs roughly $110 a month and comfortably handles up to about 2,000 users.
            </p>
            <p>
              <strong className="text-foreground">Phase two</strong> moves the stack to ECS with an Application Load Balancer in front, moves the React frontend to S3 + CloudFront, and replaces Let's Encrypt with AWS Certificate Manager. The application code doesn't change. The Docker images don't change. Only the platform underneath does.
            </p>
            <p>
              <strong className="text-foreground">Phase three</strong> adds ECS Service Auto Scaling and a read replica for heavy report-card queries. <strong className="text-foreground">Phase four</strong> scales out to larger instances and isolated Celery queues so bulk imports never starve user-facing requests. <strong className="text-foreground">Phase five</strong> adds RDS Proxy for connection pooling, spreads instances across three availability zones, and adds an emergency read-only mode toggle for non-essential write features during peak events like results-release windows.
            </p>
            <p>
              The cost curve goes from ~$110/month at phase one to roughly $3–8k/month at phase five — at which point the platform is comfortable serving 100,000 registered users with 15,000 concurrent. Every transition is documented as a runbook, and the deployment guide is checked into the repository alongside the code.
            </p>
            <p>
              CI/CD runs on <strong className="text-foreground">GitHub Actions</strong>: every push to <code>main</code> builds the frontend, compiles all three Go services, smoke-builds every Docker image, runs the Django test suite against a fresh PostgreSQL container plus <code>go test</code> for the Go services, pushes tagged images to ECR, and deploys. A one-command rollback restores the previous tagged image.
            </p>

            <h2>What I'd tell my younger self</h2>
            <p>Three lessons stand out, looking back.</p>
            <p>
              <strong className="text-foreground">Pick the right tool for each piece, not one tool for everything.</strong> Django is a beautiful framework for CRUD-on-relationships-with-an-admin-UI. Go is a beautiful runtime for concurrent I/O at low memory. Forcing one to do the other's job wastes both. The polyglot split — gateway in Go, business logic in Django, integrations in Go — is the single decision I would make again immediately.
            </p>
            <p>
              <strong className="text-foreground">Multi-tenancy is an application-layer discipline, not a database feature.</strong> Row-level isolation with a school foreign key on every model and a tenant-aware manager works, but only if you build the discipline into the framework so the wrong query is harder to write than the right one.
            </p>
            <p>
              <strong className="text-foreground">Plan the scaling path before you need it.</strong> I will not need phase five for years. But knowing that there <em>is</em> a phase five, that it doesn't require a rewrite, and that I can document the exact migration steps — that's the difference between an architecture that can grow and one that has a ceiling baked in from day one.
            </p>
            <p>
              My School Hub isn't done. No platform like this is ever done. But the foundation is one I can keep building on, school by school, feature by feature, without throwing anything away.
            </p>
            <p>
              That, more than any single feature, is what I'm proudest of.
            </p>

            <hr className="my-10 border-border" />

            <p className="text-sm italic text-muted-foreground">
              Brandon Khumalo builds software at Tishanyq Digital. My School Hub is the company's flagship platform, currently rolling out to schools across Zimbabwe.
            </p>

          </motion.div>

        </motion.div>
      </main>
    </div>
  );
};

export default Blog3;
