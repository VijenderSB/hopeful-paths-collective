import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { PageHero, FinalCTA, CTARow, SectionHeading } from "@/components/site/Bits";
import { ProgramCards, PricingDisclosure } from "@/components/site/Programs";
import { LeadForm } from "@/components/site/LeadForm";
import { FAQ } from "@/components/site/FAQ";
import { CITIES, GLOBAL_FAQ, WHY_CHOOSE } from "@/lib/site";
import { CheckCircle2, MapPin, Quote } from "lucide-react";

export const Route = createFileRoute("/locations/$city")({
  loader: ({ params }) => {
    const c = CITIES.find((x) => x.slug === params.city);
    if (!c) throw notFound();
    return { city: c };
  },
  head: ({ loaderData }) => {
    const name = loaderData?.city.name ?? "Delhi NCR";
    return {
      meta: [
        { title: `De-Addiction Centre in ${name} | Affordable Alcohol & Drug Rehab | DeAddictify` },
        { name: "description", content: `Affordable alcohol & drug de-addiction, rehabilitation and recovery support in ${name}. Psychiatrist-led, family-focused care.` },
        { property: "og:title", content: `De-Addiction Centre in ${name} | DeAddictify` },
        { property: "og:description", content: `Affordable rehab and recovery programs in ${name}.` },
        { property: "og:url", content: `/locations/${loaderData?.city.slug}` },
      ],
      links: [{ rel: "canonical", href: `/locations/${loaderData?.city.slug}` }],
    };
  },
  component: CityPage,
  notFoundComponent: () => (
    <div className="container-page py-20 text-center">
      <h1 className="text-2xl font-bold">City not found</h1>
      <Link to="/locations" className="text-secondary-foreground mt-4 inline-block">← All locations</Link>
    </div>
  ),
});

function CityPage() {
  const { city } = Route.useLoaderData();
  const name = city.name;
  return (
    <>
      <PageHero eyebrow={`Delhi NCR · ${name}`} title={`De-Addiction Centre in ${name}`} subtitle={`Affordable alcohol & drug de-addiction, rehabilitation and recovery support for individuals and families in ${name}.`}>
        <CTARow light />
      </PageHero>

      <section className="container-page py-14 grid gap-10 lg:grid-cols-[1.4fr_1fr] items-start">
        <article className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-primary">About De-Addiction in {name}</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">DeAddictify provides confidential, psychiatrist-led de-addiction and rehabilitation support for residents of {name} and surrounding areas. From free initial counselling to admission assistance and long-term aftercare, we walk with you at every step.</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-primary">Services Available in {name}</h2>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {["Medical Detoxification","Psychiatric Care","Individual Counselling","Group Therapy","Family Therapy","Relapse Prevention","Aftercare Program","Admission Assistance"].map(s => (
                <li key={s} className="flex gap-2 text-sm"><CheckCircle2 className="h-5 w-5 text-success-foreground" /> {s}</li>
              ))}
            </ul>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-5">
              <h3 className="text-lg font-bold text-primary">Alcohol Rehab in {name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">Medically supervised detox and structured rehabilitation for alcohol dependence.</p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-5">
              <h3 className="text-lg font-bold text-primary">Drug Rehab in {name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">Comprehensive recovery programs for cannabis, heroin, smack, cocaine and prescription drug dependence.</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-primary">Programs & Pricing for {name}</h2>
            <p className="mt-2 text-sm text-muted-foreground">Affordable program pricing starts at ₹5,999/day. Final treatment plan is shared after clinical assessment.</p>
            <div className="mt-6"><ProgramCards /></div>
            <div className="mt-6"><PricingDisclosure /></div>
          </div>

          <div>
            <SectionHeading title={`Why Choose DeAddictify in ${name}`} />
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {WHY_CHOOSE.map(w => <div key={w} className="flex gap-2 text-sm"><CheckCircle2 className="h-5 w-5 text-secondary-foreground" /> {w}</div>)}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-primary">What families in {name} say</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <figure className="rounded-2xl bg-soft p-5"><Quote className="h-5 w-5 text-secondary-foreground" /><blockquote className="mt-2 text-sm">"Compassionate team. Our father is sober for over a year now."</blockquote><figcaption className="mt-3 text-xs font-semibold text-muted-foreground">— Family · {name}</figcaption></figure>
              <figure className="rounded-2xl bg-soft p-5"><Quote className="h-5 w-5 text-secondary-foreground" /><blockquote className="mt-2 text-sm">"Affordable and effective. The counsellors guided us throughout."</blockquote><figcaption className="mt-3 text-xs font-semibold text-muted-foreground">— Patient · {name}</figcaption></figure>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-secondary/40 p-6 flex items-center gap-4">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-card border border-border"><MapPin className="h-6 w-6 text-secondary-foreground" /></div>
            <div>
              <h3 className="font-semibold text-primary">Serving {name} & nearby areas</h3>
              <p className="text-sm text-muted-foreground">Map & location details shared after enquiry.</p>
            </div>
          </div>
        </article>

        <aside className="lg:sticky lg:top-24"><LeadForm title={`Free counselling in ${name}`} /></aside>
      </section>

      <FAQ items={GLOBAL_FAQ.slice(0, 10)} title={`FAQs — De-Addiction in ${name}`} />
      <FinalCTA />
    </>
  );
}
