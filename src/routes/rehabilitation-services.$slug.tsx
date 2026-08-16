import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { Testimonials } from "@/components/site/Testimonials";
import { PageHero, FinalCTA, CTARow } from "@/components/site/Bits";
import { LeadForm } from "@/components/site/LeadForm";
import { FAQ } from "@/components/site/FAQ";
import { SERVICES, GLOBAL_FAQ } from "@/lib/site";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/rehabilitation-services/$slug")({
  loader: ({ params }) => {
    const s = SERVICES.find((x) => x.slug === params.slug);
    if (!s) throw notFound();
    return { service: s };
  },
  head: ({ loaderData }) => {
    const name = loaderData?.service.name ?? "Service";
    return {
      meta: [
        { title: `${name} — Rehabilitation Service | DeAddictify` },
        { name: "description", content: `Affordable ${name.toLowerCase()} as part of structured de-addiction care across Delhi NCR.` },
        { property: "og:title", content: `${name} | DeAddictify` },
        { property: "og:description", content: `${name} — process, benefits and outcomes.` },
        { property: "og:url", content: `/rehabilitation-services/${loaderData?.service.slug}` },
      ],
      links: [{ rel: "canonical", href: `/rehabilitation-services/${loaderData?.service.slug}` }],
    };
  },
  component: ServicePage,
  notFoundComponent: () => (
    <div className="container-page py-20 text-center">
      <h1 className="text-2xl font-bold">Service not found</h1>
      <Link to="/rehabilitation-services" className="text-secondary-foreground mt-4 inline-block">← All services</Link>
    </div>
  ),
});

function ServicePage() {
  const { service } = Route.useLoaderData();
  const name = service.name;
  const benefits = ["Reduces withdrawal risk", "Supports long-term recovery", "Family involvement", "Structured monitoring", "Personalised approach"];
  const process = ["Initial assessment", "Treatment planning", "Active delivery", "Progress review", "Aftercare integration"];
  const outcomes = ["Stabilised health", "Improved coping skills", "Restored relationships", "Sustained sobriety", "Return to normal life"];

  return (
    <>
      <PageHero eyebrow="Rehabilitation Service" title={name} subtitle={`What ${name.toLowerCase()} involves, who needs it, and what to expect.`}>
        <CTARow light />
      </PageHero>

      <section className="container-page py-14 grid gap-10 lg:grid-cols-[1.4fr_1fr] items-start">
        <article className="space-y-10">
          <div>
            <h2 className="text-2xl font-bold text-primary">What it is</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">{name} is a structured component of our de-addiction and rehabilitation program. It is delivered by qualified professionals as part of a personalised treatment plan.</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-primary">Who needs it</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">Recommended for individuals undergoing alcohol or drug de-addiction treatment, dual diagnosis cases, and those at risk of relapse.</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-primary">Benefits</h2>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">{benefits.map(b => <li key={b} className="flex gap-2 text-sm"><CheckCircle2 className="h-5 w-5 text-success-foreground" /> {b}</li>)}</ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-primary">Process</h2>
            <ol className="mt-3 space-y-2">{process.map((p, i) => <li key={p} className="flex gap-3 text-sm"><span className="grid h-6 w-6 place-items-center rounded-full bg-primary text-primary-foreground text-xs font-bold">{i+1}</span> {p}</li>)}</ol>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-primary">Expected outcomes</h2>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">{outcomes.map(b => <li key={b} className="flex gap-2 text-sm"><CheckCircle2 className="h-5 w-5 text-secondary-foreground" /> {b}</li>)}</ul>
          </div>
        </article>
        <aside className="lg:sticky lg:top-24"><LeadForm title={`Enquire about ${name}`} /></aside>
      </section>

      <FAQ items={GLOBAL_FAQ.slice(0, 8)} />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
