import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, ShieldCheck, HeartHandshake, Users, Stethoscope, MapPin, Phone, MessageCircle, ArrowRight, Quote } from "lucide-react";
import { LeadForm } from "@/components/site/LeadForm";
import { FAQ } from "@/components/site/FAQ";
import { ProgramCards, PricingCompare, PricingDisclosure } from "@/components/site/Programs";
import { CTARow, FinalCTA, SectionHeading } from "@/components/site/Bits";
import { CITIES, CONDITIONS, HOME_FAQ, TRUST_POINTS, WHY_CHOOSE, telLink, waLink, PHONE_DISPLAY } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Affordable Alcohol & Drug De-Addiction in Delhi NCR | DeAddictify" },
      { name: "description", content: "Psychiatrist-led, affordable alcohol & drug de-addiction and rehabilitation programs in Delhi, Noida, Ghaziabad, Faridabad and Gurugram. Free confidential counselling." },
      { property: "og:title", content: "Affordable Alcohol & Drug De-Addiction in Delhi NCR | DeAddictify" },
      { property: "og:description", content: "Free counselling, family-focused recovery, structured rehabilitation across Delhi NCR." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const PROBLEMS = [
  { name: "Alcohol Addiction", slug: "alcohol-addiction" },
  { name: "Drug Addiction", slug: "drug-addiction" },
  { name: "Prescription Drug Dependence", slug: "prescription-drug-addiction" },
  { name: "Cannabis Addiction", slug: "cannabis-addiction" },
  { name: "Heroin / Smack Addiction", slug: "heroin-addiction" },
  { name: "Dual Diagnosis", slug: "dual-diagnosis" },
];

const STEPS = [
  { t: "Free Addiction Assessment", d: "A confidential first conversation to understand the situation." },
  { t: "Recovery Counsellor Consultation", d: "Personalised guidance for the patient and family." },
  { t: "Psychiatrist-Led Treatment Recommendation", d: "Clinical evaluation and tailored treatment plan." },
  { t: "Admission Assistance", d: "We help arrange admission with affiliated partners." },
  { t: "Rehabilitation & Family Support", d: "Structured care with continuous family counselling." },
  { t: "Long-Term Recovery Monitoring", d: "Aftercare, relapse prevention and ongoing support." },
];

const TESTIMONIALS = [
  { q: "My son returned to normal life after years of drug dependence. The team treated us with empathy.", a: "Mother · Delhi" },
  { q: "My husband stopped alcohol and our family life improved. Affordable and supportive.", a: "Wife · Noida" },
  { q: "Affordable and supportive recovery guidance when we needed help most.", a: "Brother · Gurugram" },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="hero-gradient text-white">
        <div className="container-page py-12 md:py-20 grid lg:grid-cols-[1.1fr_minmax(360px,460px)] gap-10 items-start">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/12 backdrop-blur px-3 py-1 text-xs font-medium ring-1 ring-white/20">
              <ShieldCheck className="h-3.5 w-3.5" /> Confidential · Psychiatrist-Led · Family-Focused
            </div>
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05]">
              Affordable Alcohol & Drug<br /><span className="text-[var(--soft)]">De-Addiction Programs</span>
            </h1>
            <p className="mt-5 text-lg text-white/85 max-w-xl">
              Helping individuals recover from alcohol and drug dependence through structured rehabilitation, psychiatrist-led care, family counselling and long-term recovery support.
            </p>
            <div className="mt-6"><CTARow light /></div>

            <ul className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2 text-sm">
              {TRUST_POINTS.map((t) => (
                <li key={t} className="flex items-center gap-2 text-white/90"><CheckCircle2 className="h-4 w-4 text-[var(--soft)]" /> {t}</li>
              ))}
            </ul>

            <div className="mt-8 inline-flex flex-wrap items-center gap-x-4 gap-y-1 rounded-xl bg-white/12 px-4 py-3 ring-1 ring-white/20 text-sm">
              <span className="font-semibold">24×7 Emergency Helpline:</span>
              <a href={telLink} className="inline-flex items-center gap-1 hover:underline"><Phone className="h-4 w-4" /> {PHONE_DISPLAY}</a>
              <a href={waLink} target="_blank" rel="noopener" className="inline-flex items-center gap-1 hover:underline"><MessageCircle className="h-4 w-4" /> WhatsApp</a>
            </div>
          </div>

          <div className="lg:sticky lg:top-24">
            <LeadForm />
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="container-page py-16">
        <SectionHeading center eyebrow="If this feels familiar" title="Is Alcohol Or Drug Addiction Affecting Your Family?" subtitle="You are not alone. Recovery is possible with the right structured help." />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PROBLEMS.map((p) => (
            <Link key={p.slug} to="/conditions/$slug" params={{ slug: p.slug }} className="group rounded-2xl border border-border bg-card p-5 card-hover">
              <div className="flex items-center justify-between">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-soft text-success-foreground"><HeartHandshake className="h-5 w-5" /></div>
                <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-teal" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-primary">{p.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">Confidential assessment & structured treatment options.</p>
            </Link>
          ))}
        </div>
      </section>

      {/* HOW WE HELP */}
      <section className="section-soft">
        <div className="container-page py-16">
          <SectionHeading center eyebrow="A clear path forward" title="How DeAddictify Helps" subtitle="A six-step recovery journey designed with empathy, clinical rigour and family involvement." />
          <ol className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {STEPS.map((s, i) => (
              <li key={s.t} className="rounded-2xl bg-card p-6 border border-border">
                <div className="text-xs font-semibold text-teal">STEP {i + 1}</div>
                <h3 className="mt-1 text-lg font-semibold text-primary">{s.t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CONDITIONS */}
      <section className="container-page py-16">
        <SectionHeading center eyebrow="Conditions" title="Conditions We Help With" subtitle="From early-stage dependence to dual diagnosis, we guide families to the right care." />
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {CONDITIONS.map((c) => (
            <Link key={c.slug} to="/conditions/$slug" params={{ slug: c.slug }} className="flex items-center justify-between rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium hover:border-teal hover:text-teal">
              <span>{c.name}</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          ))}
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="section-soft">
        <div className="container-page py-16">
          <SectionHeading center eyebrow="Programs & Pricing" title="Affordable Recovery Programs" subtitle="Choose a program based on severity and recovery goals. All programs include psychiatrist-led care and family counselling." />
          <div className="mt-10"><ProgramCards /></div>
          <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
            <PricingCompare />
            <PricingDisclosure />
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="container-page py-16">
        <SectionHeading center eyebrow="Why Families Trust Us" title="Why Families Choose DeAddictify" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_CHOOSE.map((w) => (
            <div key={w} className="rounded-xl border border-border bg-card p-5 text-center">
              <div className="mx-auto grid h-10 w-10 place-items-center rounded-full bg-soft text-success-foreground"><Stethoscope className="h-5 w-5" /></div>
              <p className="mt-3 text-sm font-semibold">{w}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA strip */}
      <section className="container-page">
        <div className="rounded-2xl bg-primary text-primary-foreground p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold">Not Sure Which Recovery Program Is Right?</h3>
            <p className="mt-1 text-primary-foreground/85">Speak with a recovery counsellor today. Free & confidential consultation.</p>
          </div>
          <CTARow light />
        </div>
      </section>

      {/* LOCATIONS */}
      <section className="container-page py-16">
        <SectionHeading center eyebrow="Delhi NCR Coverage" title="De-Addiction Across Delhi NCR" subtitle="Locally accessible counselling and admission assistance." />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CITIES.map((c) => (
            <Link key={c.slug} to="/locations/$city" params={{ city: c.slug }} className="group rounded-2xl border border-border bg-card p-5 card-hover flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-soft text-success-foreground"><MapPin className="h-5 w-5" /></div>
                <div>
                  <div className="font-semibold text-primary">{c.name}</div>
                  <div className="text-xs text-muted-foreground">De-addiction & rehab</div>
                </div>
              </div>
              <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-teal" />
            </Link>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-soft">
        <div className="container-page py-16">
          <SectionHeading center eyebrow="Stories of recovery" title="Families & Patients Share Their Journey" />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <figure key={i} className="rounded-2xl bg-card border border-border p-6">
                <Quote className="h-6 w-6 text-teal" />
                <blockquote className="mt-3 text-sm leading-relaxed">{t.q}</blockquote>
                <figcaption className="mt-4 text-xs font-semibold text-muted-foreground">— {t.a}</figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card aspect-video grid place-items-center text-muted-foreground text-sm">Video Testimonial Placeholder</div>
            <div className="rounded-2xl border border-border bg-card aspect-video grid place-items-center text-muted-foreground text-sm">Before & After Recovery Story</div>
          </div>
          <p className="mt-4 text-center"><Link to="/success-stories" className="text-teal text-sm font-semibold hover:underline">Read more success stories →</Link></p>
        </div>
      </section>

      {/* FAQ */}
      <FAQ items={HOME_FAQ} />

      {/* LEAD FORM REPEAT */}
      <section className="container-page pb-16">
        <div className="grid gap-8 lg:grid-cols-2 items-start">
          <div>
            <SectionHeading eyebrow="Talk to a counsellor" title="Take The First Step Today" subtitle="Share a few details and a recovery counsellor will reach out — confidentially and without judgment." />
            <ul className="mt-6 space-y-2 text-sm">
              <li className="flex gap-2"><Users className="h-5 w-5 text-teal" /> Family-focused approach</li>
              <li className="flex gap-2"><ShieldCheck className="h-5 w-5 text-teal" /> 100% confidential</li>
              <li className="flex gap-2"><Stethoscope className="h-5 w-5 text-teal" /> Psychiatrist-led care</li>
            </ul>
          </div>
          <LeadForm />
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
