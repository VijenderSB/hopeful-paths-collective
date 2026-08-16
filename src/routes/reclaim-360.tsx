import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, HeartPulse, Brain, RefreshCw, Smile, Dumbbell, Users, Briefcase, ShieldCheck, Phone } from "lucide-react";
import { LeadForm } from "@/components/site/LeadForm";
import { telLink, PHONE_DISPLAY, GLOBAL_FAQ } from "@/lib/site";
import { Testimonials } from "@/components/site/Testimonials";
import { FAQ } from "@/components/site/FAQ";
import heroBanner from "@/assets/banner-reclaim.jpg";

const TITLE = "RECLAIM 360™ — Complete Addiction Recovery Model | DeAddictify";
const DESC =
  "RECLAIM 360™ is our 8-dimension recovery model: medical, mind, behaviour, emotional, physical, family, life reintegration and recovery continuity — psychiatrist-led in Delhi NCR.";

export const Route = createFileRoute("/reclaim-360")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Reclaim360Page,
});

const DIMENSIONS = [
  { i: HeartPulse, n: "01", t: "Medical Recovery", d: "Detailed assessment, medically supervised withdrawal management, physical stabilisation and treatment of health complications caused by long-term substance use." },
  { i: Brain, n: "02", t: "Mind Recovery", d: "Psychiatrist-led evaluation and treatment of depression, anxiety, sleep disturbance, psychosis and other co-occurring mental health conditions." },
  { i: RefreshCw, n: "03", t: "Behaviour Recovery", d: "Identifying triggers, craving patterns and high-risk situations, then replacing them with structured, healthier coping behaviour." },
  { i: Smile, n: "04", t: "Emotional Recovery", d: "Therapy work on anger, stress, guilt, shame and impulsivity so emotions no longer drive the person back to substances." },
  { i: Dumbbell, n: "05", t: "Physical Rebuilding", d: "Restoring sleep cycles, nutrition, fitness and a predictable daily routine that supports long-term stability." },
  { i: Users, n: "06", t: "Family Recovery", d: "Family counselling to rebuild trust, improve communication and set healthy boundaries without enabling or conflict." },
  { i: Briefcase, n: "07", t: "Life Reintegration", d: "Preparing the person to return to work, studies, relationships and responsibilities with realistic, staged goals." },
  { i: ShieldCheck, n: "08", t: "Recovery Continuity", d: "Relapse-prevention planning, scheduled follow-up reviews and continued family support after the programme ends." },
];

const STEPS = ["STABILISE", "UNDERSTAND", "HEAL", "REBUILD", "RECONNECT", "REINTEGRATE", "SUSTAIN"];

function Reclaim360Page() {
  return (
    <>
      <section className="relative overflow-hidden hero-gradient text-white">
        <img src={heroBanner} alt="Psychiatrist-led counselling session with a patient at DeAddictify, Delhi NCR" width={1600} height={704} className="absolute inset-0 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/85 to-primary/95" />
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
        <div className="container-page relative z-10 py-16 md:py-20 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/12 border border-white/25 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white/90">
            Our Signature Recovery Model
          </div>
          <h1 className="mt-5 text-3xl md:text-5xl font-bold leading-tight">RECLAIM 360™</h1>
          <p className="mt-4 text-lg md:text-xl text-white/90">Beyond De-Addiction. Rebuilding the Person, Family &amp; Life.</p>
          <p className="mt-4 max-w-3xl mx-auto text-white/80 leading-relaxed">
            Addiction affects far more than the body. It changes how a person thinks, feels, behaves, works, communicates and connects with the people they love. RECLAIM 360™ treats all of it — not just the substance.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={telLink} className="inline-flex h-11 items-center gap-2 rounded-2xl bg-white px-6 text-sm font-semibold text-primary hover:opacity-95">
              <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
            </a>
            <Link to="/programs" className="inline-flex h-11 items-center gap-2 rounded-2xl border border-white/40 bg-white/10 px-6 text-sm font-semibold text-white hover:bg-white/20">
              Programs &amp; Pricing <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="container-page py-14">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-[2rem] border border-border bg-card p-6 text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">We Don&apos;t Just Ask</p>
            <p className="mt-2 text-xl md:text-2xl font-bold">&ldquo;How do we stop the substance?&rdquo;</p>
          </div>
          <div className="rounded-[2rem] border border-primary/25 bg-secondary p-6 text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">We Also Ask</p>
            <p className="mt-2 text-xl md:text-2xl font-bold">&ldquo;What needs to change so the person can build a life that supports recovery?&rdquo;</p>
          </div>
        </div>
      </section>

      <section className="container-page pb-14">
        <h2 className="text-2xl md:text-3xl font-bold text-center">The 8 Dimensions of RECLAIM 360™</h2>
        <p className="mt-3 text-center text-muted-foreground max-w-2xl mx-auto">
          Every treatment plan is built across these eight dimensions, reviewed by a psychiatrist and adapted as recovery progresses.
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {DIMENSIONS.map(({ i: Icon, n, t, d }) => (
            <div key={n} className="rounded-[2rem] border border-border bg-card p-6 card-hover">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-secondary text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Dimension {n}</span>
              </div>
              <h3 className="mt-4 text-lg font-bold">{t}</h3>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-soft py-14">
        <div className="container-page">
          <h2 className="text-2xl md:text-3xl font-bold text-center">From Addiction To Life Again</h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 md:gap-3 text-sm font-semibold">
            {STEPS.map((step, idx) => (
              <span key={step} className="flex items-center gap-2 md:gap-3">
                <span className="rounded-full bg-primary/10 text-primary px-3 py-1">{step}</span>
                {idx < STEPS.length - 1 && <ArrowRight className="h-4 w-4 text-muted-foreground" />}
              </span>
            ))}
          </div>
          <p className="mt-8 max-w-3xl mx-auto text-center text-muted-foreground leading-relaxed">
            Treatment should not end the day a person stops using alcohol or drugs. The larger goal is to help the individual return to family, work, relationships and everyday life with healthier coping skills, medical follow-up and a structured recovery plan.
          </p>
          <p className="mt-8 text-center text-xl md:text-2xl font-bold">RECLAIM 360™</p>
          <p className="text-center text-muted-foreground">Not Just Freedom From Addiction. A Structured Journey Back to Life.</p>
        </div>
      </section>

      <Testimonials title="Families Who Walked The RECLAIM 360™ Journey" />
      <FAQ items={GLOBAL_FAQ.slice(0, 8)} title="RECLAIM 360™ — Frequently Asked Questions" />

      <section className="container-page py-14">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center">Talk To A Counsellor About RECLAIM 360™</h2>
          <p className="mt-3 text-center text-muted-foreground">Share a few details and a recovery counsellor will reach out — confidentially and without judgment.</p>
          <div className="mt-8">
            <LeadForm />
          </div>
        </div>
      </section>
    </>
  );
}
