import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { PageHero, FinalCTA, CTARow } from "@/components/site/Bits";
import { LeadForm } from "@/components/site/LeadForm";
import { FAQ } from "@/components/site/FAQ";
import { FAMILY_PAGES, GLOBAL_FAQ } from "@/lib/site";

export const Route = createFileRoute("/family-support/$slug")({
  loader: ({ params }) => {
    const p = FAMILY_PAGES.find((x) => x.slug === params.slug);
    if (!p) throw notFound();
    return { page: p };
  },
  head: ({ loaderData }) => {
    const name = loaderData?.page.name ?? "Family Support";
    return {
      meta: [
        { title: `${name} | DeAddictify Family Support` },
        { name: "description", content: `Compassionate, practical guidance: ${name}. Speak with a family counsellor today.` },
        { property: "og:title", content: `${name} | DeAddictify` },
        { property: "og:description", content: `Family support: ${name}` },
        { property: "og:url", content: `/family-support/${loaderData?.page.slug}` },
      ],
      links: [{ rel: "canonical", href: `/family-support/${loaderData?.page.slug}` }],
    };
  },
  component: FamilyPage,
  notFoundComponent: () => (
    <div className="container-page py-20 text-center">
      <h1 className="text-2xl font-bold">Page not found</h1>
      <Link to="/family-support" className="text-teal mt-4 inline-block">← Family support</Link>
    </div>
  ),
});

function FamilyPage() {
  const { page } = Route.useLoaderData();
  return (
    <>
      <PageHero eyebrow="Family Support" title={page.name} subtitle="You are not alone. Our counsellors will help you understand the situation and take the next right step.">
        <CTARow light />
      </PageHero>
      <section className="container-page py-14 grid gap-10 lg:grid-cols-[1.4fr_1fr] items-start">
        <article className="space-y-6 text-muted-foreground leading-relaxed">
          <p>When addiction touches a family, it brings worry, fear and often a feeling of helplessness. We want you to know — there is a path forward. Recovery is possible, and the family is the strongest part of that journey.</p>
          <p>Our recovery counsellors and psychiatrists have helped hundreds of families navigate similar situations. From the first conversation to long-term aftercare, you will have steady, confidential guidance.</p>
          <h2 className="text-2xl font-bold text-primary !mt-8">What you can do today</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Speak with a counsellor for a free, confidential assessment.</li>
            <li>Avoid confrontation; focus on care and consistent boundaries.</li>
            <li>Understand the medical nature of addiction — it is treatable.</li>
            <li>Plan an intervention with professional guidance.</li>
            <li>Begin family counselling alongside the patient's treatment.</li>
          </ul>
          <h2 className="text-2xl font-bold text-primary !mt-8">How DeAddictify helps</h2>
          <p>Free counselling, psychiatrist-led treatment plans, admission assistance, family therapy and long-term recovery monitoring — all designed to be affordable and family-focused.</p>
        </article>
        <aside className="lg:sticky lg:top-24"><LeadForm title="Speak To A Family Counsellor" /></aside>
      </section>
      <FAQ items={GLOBAL_FAQ.slice(0, 8)} />
      <FinalCTA />
    </>
  );
}
