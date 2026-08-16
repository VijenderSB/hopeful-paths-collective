import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, ShieldCheck, HeartHandshake, Users, Stethoscope, MapPin, Phone, MessageCircle, ArrowRight, Quote, Play, HeartPulse, Brain, RefreshCw, Smile, Dumbbell, Briefcase } from "lucide-react";
import { LeadForm } from "@/components/site/LeadForm";
import { FAQ } from "@/components/site/FAQ";
import { ProgramCards, PricingCompare, PricingDisclosure } from "@/components/site/Programs";
import { CTARow, FinalCTA, SectionHeading } from "@/components/site/Bits";
import { CITIES, CONDITIONS, HOME_FAQ, TRUST_POINTS, WHY_CHOOSE, BLOG_POSTS, telLink, waLink, PHONE_DISPLAY } from "@/lib/site";
import counsellorImg from "@/assets/counsellor.jpg";
import heroBannerImg from "@/assets/hero-banner.jpg";
import videoTestimonialImg from "@/assets/video-testimonial.jpg";
import beforeAfterImg from "@/assets/before-after-recovery.jpg";
import blogFamilyImg from "@/assets/blog-family-signs.jpg.asset.json";
import blogAlcoholImg from "@/assets/blog-alcohol-treatment.jpg.asset.json";
import blogDrugImg from "@/assets/blog-drug-rehab-cost.jpg.asset.json";

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
      <section className="relative overflow-hidden">
        <img
          src={heroBannerImg}
          alt="Recovery counsellor supporting a patient through addiction counselling"
          width={1920}
          height={1024}
          className="absolute inset-0 h-full w-full object-cover object-center"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/40" />
        <div className="container-page relative z-10 flex min-h-[620px] md:min-h-[720px] flex-col items-center justify-center py-20 text-center text-white">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 border border-white/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white/90">
            <ShieldCheck className="h-3.5 w-3.5" /> Confidential · Psychiatrist-Led · Family-Focused
          </div>
          <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.08] text-white">
            Affordable Alcohol & Drug<br /><span className="hero-gradient-text">De-Addiction Programs</span>
          </h1>
          <p className="mt-5 text-lg text-white/90 max-w-2xl leading-relaxed">
            Helping individuals recover from alcohol and drug dependence through structured rehabilitation, psychiatrist-led care, family counselling and long-term recovery support.
          </p>
          <div className="mt-6"><CTARow light /></div>

          <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/80">
            {TRUST_POINTS.map((t) => (
              <li key={t} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-white" /> {t}</li>
            ))}
          </ul>

          <div className="mt-8 inline-flex flex-wrap items-center gap-x-4 gap-y-1 rounded-2xl bg-white/10 backdrop-blur border border-white/20 px-4 py-3 text-sm text-white">
            <span className="font-semibold">24×7 Emergency Helpline:</span>
            <a href={telLink} className="inline-flex items-center gap-1 hover:underline"><Phone className="h-4 w-4" /> {PHONE_DISPLAY}</a>
            <a href={waLink} target="_blank" rel="noopener" className="inline-flex items-center gap-1 hover:underline"><MessageCircle className="h-4 w-4" /> WhatsApp</a>
          </div>
        </div>
      </section>


      {/* RECLAIM 360 USP */}
      <section className="relative overflow-hidden hero-gradient text-white">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
        <div className="container-page relative z-10 py-16 md:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/12 border border-white/25 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white/90">
              Our Approach
            </div>
            <h2 className="mt-5 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Introducing <span className="text-white">RECLAIM 360™</span>
            </h2>
            <p className="mt-4 text-lg md:text-xl text-white/90 leading-relaxed">
              Beyond De-Addiction. Rebuilding the Person, Family & Life.
            </p>
            <p className="mt-4 text-white/80 leading-relaxed">
              Addiction affects much more than the body. It changes how a person thinks, feels, behaves, works, communicates and connects with the people they love. That is why our approach goes beyond detoxification and medical treatment.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              { i: HeartPulse, n: "01", t: "Medical Recovery", d: "Assessment, withdrawal management, physical stabilisation and medical supervision." },
              { i: Brain, n: "02", t: "Mind Recovery", d: "Psychiatric assessment for depression, anxiety, sleep problems and co-occurring conditions." },
              { i: RefreshCw, n: "03", t: "Behaviour Recovery", d: "Understanding triggers, cravings and patterns while building healthier coping mechanisms." },
              { i: Smile, n: "04", t: "Emotional Recovery", d: "Working on anger, stress, guilt, shame, impulsivity and emotional regulation." },
              { i: Dumbbell, n: "05", t: "Physical Rebuilding", d: "Restoring sleep, nutrition, exercise, daily routine and overall physical wellbeing." },
              { i: Users, n: "06", t: "Family Recovery", d: "Rebuilding communication, trust and healthy boundaries with loved ones." },
              { i: Briefcase, n: "07", t: "Life Reintegration", d: "Preparing to return to family, work, relationships and a productive daily routine." },
              { i: ShieldCheck, n: "08", t: "Recovery Continuity", d: "Relapse-prevention planning, follow-up and continued family support beyond treatment." },
            ].map(({ i: Icon, n, t, d }) => (
              <div key={n} className="rounded-[2rem] bg-white/10 backdrop-blur border border-white/15 p-6 transition-all duration-300 hover:bg-white/15 hover:border-white/30">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/15 text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-white/60">Dimension {n}</span>
                </div>
                <h3 className="mt-4 text-lg font-bold text-white">{t}</h3>
                <p className="mt-1 text-sm text-white/80 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 max-w-4xl mx-auto rounded-[2rem] bg-white/10 backdrop-blur border border-white/15 p-6 md:p-8">
            <p className="text-center text-sm font-semibold uppercase tracking-wider text-white/70">From Addiction to Life Again</p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2 md:gap-3 text-sm md:text-base font-semibold text-white">
              {["STABILISE", "UNDERSTAND", "HEAL", "REBUILD", "RECONNECT", "REINTEGRATE", "SUSTAIN"].map((step, idx, arr) => (
                <span key={step} className="flex items-center gap-2 md:gap-3">
                  <span className="rounded-full bg-white/15 px-3 py-1">{step}</span>
                  {idx < arr.length - 1 && <ArrowRight className="h-4 w-4 text-white/50" />}
                </span>
              ))}
            </div>
            <p className="mt-6 text-center text-white/80 leading-relaxed">
              Treatment should not end when the person stops using alcohol or drugs. The larger goal is to help the individual return to family, work, relationships and everyday life with healthier coping skills and a structured recovery plan.
            </p>
            <div className="mt-6 text-center">
              <p className="text-xl md:text-2xl font-bold text-white">RECLAIM 360™</p>
              <p className="text-sm md:text-base text-white/90">Not Just Freedom From Addiction. A Structured Journey Back to Life.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
        <SectionHeading center eyebrow="If this feels familiar" title="Is Alcohol Or Drug Addiction Affecting Your Family?" subtitle="You are not alone. Recovery is possible with the right structured help." />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PROBLEMS.map((p) => (
            <Link key={p.slug} to="/conditions/$slug" params={{ slug: p.slug }} className="group rounded-[2rem] border border-border glass-card p-5 card-hover">
              <div className="flex items-center justify-between">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-secondary text-secondary-foreground"><HeartHandshake className="h-5 w-5" /></div>
                <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary" />
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
              <li key={s.t} className="rounded-[2rem] glass-card p-6 shadow-sm transition-all duration-300 hover:shadow-xl">
                <div className="text-xs font-semibold uppercase tracking-wide text-secondary-foreground">STEP {i + 1}</div>
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
            <Link key={c.slug} to="/conditions/$slug" params={{ slug: c.slug }} className="flex items-center justify-between rounded-2xl border border-border bg-card/80 backdrop-blur px-4 py-3 text-sm font-medium hover:border-primary hover:text-primary transition-colors">
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
            <div key={w} className="rounded-[2rem] glass-card p-5 text-center shadow-sm">
              <div className="mx-auto grid h-10 w-10 place-items-center rounded-full bg-secondary text-secondary-foreground"><Stethoscope className="h-5 w-5" /></div>
              <p className="mt-3 text-sm font-semibold text-primary">{w}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA strip */}
      <section className="container-page">
        <div className="rounded-[2rem] hero-gradient text-white p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold">Not Sure Which Recovery Program Is Right?</h3>
            <p className="mt-1 text-white/80">Speak with a recovery counsellor today. Free & confidential consultation.</p>
          </div>
          <CTARow light />
        </div>
      </section>


      {/* LOCATIONS */}
      <section className="container-page py-16">
        <SectionHeading center eyebrow="Delhi NCR Coverage" title="De-Addiction Across Delhi NCR" subtitle="Locally accessible counselling and admission assistance." />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CITIES.map((c) => (
            <Link key={c.slug} to="/locations/$city" params={{ city: c.slug }} className="group rounded-[2rem] glass-card p-5 card-hover flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-secondary text-secondary-foreground"><MapPin className="h-5 w-5" /></div>
                <div>
                  <div className="font-semibold text-primary">{c.name}</div>
                  <div className="text-xs text-muted-foreground">De-addiction & rehab</div>
                </div>
              </div>
              <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary" />
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
              <figure key={i} className="rounded-[2rem] glass-card p-6">
                <Quote className="h-6 w-6 text-secondary-foreground" />
                <blockquote className="mt-3 text-sm leading-relaxed text-foreground/90">{t.q}</blockquote>
                <figcaption className="mt-4 text-xs font-semibold text-muted-foreground">— {t.a}</figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="group relative overflow-hidden rounded-[2rem] border border-border aspect-video cursor-pointer">
              <img
                src={videoTestimonialImg}
                alt="Video testimonial of a family sharing their recovery journey"
                loading="lazy"
                width={1920}
                height={1080}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute inset-0 grid place-items-center">
                <div className="grid h-16 w-16 place-items-center rounded-full bg-white/90 text-primary shadow-lg transition-transform duration-300 group-hover:scale-110">
                  <Play className="h-7 w-7 fill-current ml-1" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <div className="text-xs font-semibold uppercase tracking-wide text-white/80">Watch Video</div>
                <div className="mt-1 text-base font-semibold">A Family’s Journey to Recovery</div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-[2rem] border border-border aspect-video">
              <img
                src={beforeAfterImg}
                alt="Before and after recovery transformation story"
                loading="lazy"
                width={1920}
                height={1080}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <div className="text-xs font-semibold uppercase tracking-wide text-white/80">Recovery Story</div>
                <div className="mt-1 text-base font-semibold">Reclaiming Life After Addiction</div>
              </div>
            </div>
          </div>
          <p className="mt-4 text-center"><Link to="/success-stories" className="text-primary text-sm font-semibold hover:underline">Read more success stories →</Link></p>

        </div>
      </section>

      {/* FAQ */}
      <FAQ items={HOME_FAQ} />

      {/* LEAD FORM REPEAT */}
      <section className="relative overflow-hidden">
        <img
          src={counsellorImg}
          alt="Recovery counsellor ready to talk"
          loading="lazy"
          width={1600}
          height={1008}
          className="absolute inset-0 h-full w-full object-cover object-[center_20%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/35 via-primary/75 to-primary/90" />
        <div className="container-page relative flex min-h-[85vh] flex-col items-center justify-between py-16 text-center text-white">
          <div className="flex flex-1 flex-col items-center justify-center">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">Talk to a counsellor</div>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">Take The First Step Today</h2>
            <p className="mt-3 mx-auto max-w-2xl text-white/80 leading-relaxed">Share a few details and a recovery counsellor will reach out — confidentially and without judgment.</p>
            <ul className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/90">
              <li className="flex items-center gap-2"><Users className="h-5 w-5" /> Family-focused approach</li>
              <li className="flex items-center gap-2"><ShieldCheck className="h-5 w-5" /> 100% confidential</li>
              <li className="flex items-center gap-2"><Stethoscope className="h-5 w-5" /> Psychiatrist-led care</li>
            </ul>
          </div>
          <div className="mt-10 w-full max-w-lg text-left">
            <LeadForm compact title="Book Free Confidential Counselling" subtitle="A counsellor will call you back within 30 minutes." />
          </div>
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section className="bg-background py-16">
        <div className="container-page">
          <SectionHeading center eyebrow="From the blog" title="Recovery Insights & Family Guidance" subtitle="Practical articles to help you understand addiction, support recovery, and rebuild relationships." />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {BLOG_POSTS.slice(0, 3).map((p) => (
              <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }} className="group rounded-2xl border border-border bg-card overflow-hidden card-hover flex flex-col">
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.imageAlt}
                    loading="lazy"
                    width={1024}
                    height={576}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="text-xs font-semibold uppercase tracking-wider text-accent-foreground">{p.category}</div>
                  <h3 className="mt-1 text-lg font-bold text-primary leading-snug">{p.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.excerpt}</p>
                  <span className="mt-3 inline-block text-sm font-semibold text-accent-foreground group-hover:underline">Read article →</span>
                </div>
              </Link>
            ))}

          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
