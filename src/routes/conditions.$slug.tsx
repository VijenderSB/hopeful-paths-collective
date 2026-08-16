import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { Testimonials } from "@/components/site/Testimonials";
import { PageHero, FinalCTA, CTARow } from "@/components/site/Bits";
import { LeadForm } from "@/components/site/LeadForm";
import { FAQ } from "@/components/site/FAQ";
import { CONDITIONS, GLOBAL_FAQ } from "@/lib/site";
import { CheckCircle2, AlertTriangle, Stethoscope, Users, HeartHandshake } from "lucide-react";
import pageBanner from "@/assets/banner-conditions.jpg";
import { SITE_URL } from "@/lib/seo";

export const Route = createFileRoute("/conditions/$slug")({
  loader: ({ params }) => {
    const c = CONDITIONS.find((x) => x.slug === params.slug);
    if (!c) throw notFound();
    return { condition: c };
  },
  head: ({ loaderData }) => {
    const name = loaderData?.condition.name ?? "Condition";
    return {
      meta: [
        { title: `${name} Treatment in Delhi NCR | DeAddictify` },
        { name: "description", content: `Affordable, psychiatrist-led ${name.toLowerCase()} treatment, rehabilitation and family support in Delhi NCR.` },
        { property: "og:title", content: `${name} Treatment | DeAddictify` },
        { property: "og:description", content: `Symptoms, warning signs, treatment options and recovery for ${name.toLowerCase()}.` },
        { property: "og:url", content: `${SITE_URL}/conditions/${loaderData?.condition.slug}` },
      ],
      links: [{ rel: "canonical", href: `${SITE_URL}/conditions/${loaderData?.condition.slug}` }],
    };
  },
  component: ConditionPage,
  notFoundComponent: () => (
    <div className="container-page py-20 text-center">
      <h1 className="text-2xl font-bold">Condition not found</h1>
      <Link to="/conditions" className="text-secondary-foreground mt-4 inline-block">← All conditions</Link>
    </div>
  ),
});

function ConditionPage() {
  const { condition } = Route.useLoaderData();
  const name = condition.name;

  const symptoms = ["Loss of control over use", "Increased tolerance", "Withdrawal symptoms", "Neglecting responsibilities", "Continued use despite harm", "Mood and sleep disturbances"];
  const warnings = ["Secrecy and isolation", "Financial difficulties", "Decline in performance", "Relationship strain", "Health deterioration", "Legal issues"];
  const treatment = ["Medical detoxification", "Psychiatrist-led care", "Individual counselling", "Group therapy", "Family counselling", "Relapse prevention"];
  const recovery = ["Assessment & stabilisation", "Active rehabilitation", "Behavioural transformation", "Family integration", "Aftercare & monitoring"];

  return (
    <>
      <PageHero image={pageBanner} eyebrow="Conditions We Treat" title={`${name} Treatment`} subtitle={`Structured, affordable and psychiatrist-led ${name.toLowerCase()} treatment with full family support — across Delhi NCR.`}>
        <CTARow light />
      </PageHero>

      <section className="container-page py-14 grid gap-10 lg:grid-cols-[1.4fr_1fr] items-start">
        <article className="space-y-10">
          <div>
            <h2 className="text-2xl font-bold text-primary">Overview</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              {name} is a treatable medical condition affecting individuals across all backgrounds. With structured care, psychiatric support and family involvement, sustained recovery is achievable. Our DeAddictify counsellors guide you through every step — from the first conversation to long-term aftercare.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-primary">Common Symptoms</h2>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {symptoms.map((s) => <li key={s} className="flex gap-2 text-sm"><CheckCircle2 className="h-5 w-5 text-success-foreground shrink-0" /> {s}</li>)}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-primary">Warning Signs</h2>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {warnings.map((s) => <li key={s} className="flex gap-2 text-sm"><AlertTriangle className="h-5 w-5 text-destructive shrink-0" /> {s}</li>)}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-primary">When To Seek Help</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">If use continues despite negative consequences, withdrawal symptoms appear when stopping, or daily life is affected — it's time to seek a clinical assessment. The earlier the intervention, the better the outcome.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-primary">Treatment Options</h2>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {treatment.map((s) => <li key={s} className="flex gap-2 text-sm"><Stethoscope className="h-5 w-5 text-secondary-foreground shrink-0" /> {s}</li>)}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-primary">Recovery Process</h2>
            <ol className="mt-3 space-y-2">
              {recovery.map((s, i) => <li key={s} className="flex gap-3 text-sm"><span className="grid h-6 w-6 place-items-center rounded-full bg-primary text-primary-foreground text-xs font-bold">{i+1}</span> {s}</li>)}
            </ol>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-primary flex items-center gap-2"><Users className="h-6 w-6 text-secondary-foreground" /> The Family's Role</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">Family involvement is one of the strongest predictors of long-term recovery. We provide family counselling, education sessions and continued aftercare support.</p>
          </div>
        </article>

        <aside className="lg:sticky lg:top-24 space-y-6">
          <LeadForm title={`Free counselling for ${name}`} subtitle="Confidential. A counsellor will call you back shortly." />
          <div className="rounded-2xl border border-border bg-soft p-5">
            <div className="flex items-center gap-2 text-success-foreground font-semibold"><HeartHandshake className="h-5 w-5" /> Recovery Is Possible</div>
            <p className="mt-2 text-sm text-muted-foreground">Thousands of families have rebuilt their lives. Yours can too.</p>
          </div>
        </aside>
      </section>

      <FAQ items={GLOBAL_FAQ.slice(0, 8)} title={`FAQs about ${name}`} />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
