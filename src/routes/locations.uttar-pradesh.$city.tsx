import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { PageHero, FinalCTA, CTARow, SectionHeading } from "@/components/site/Bits";
import { ProgramCards, PricingDisclosure } from "@/components/site/Programs";
import { LeadForm } from "@/components/site/LeadForm";
import { FAQ } from "@/components/site/FAQ";
import { CONDITIONS, SERVICES } from "@/lib/site";
import {
  findUPCity,
  cityIntro,
  cityWhyDelhi,
  cityJourney,
  cityFAQ,
  cityTestimonials,
  cityLocalSubstances,
} from "@/lib/up-cities";
import { CheckCircle2, Quote, Route as RouteIcon } from "lucide-react";

const SITE = "https://hopeful-paths-collective.lovable.app";

export const Route = createFileRoute("/locations/uttar-pradesh/$city")({
  loader: ({ params }) => {
    const city = findUPCity(params.city);
    if (!city) throw notFound();
    return { city };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return { meta: [{ title: "City not found | DeAddictify" }, { name: "robots", content: "noindex" }] };
    }
    const short = loaderData.city.name.replace(/\s*\(.*?\)\s*/, "");
    const title = `De-Addiction & Rehab for ${short} Patients | Treatment in Delhi NCR | DeAddictify`;
    const desc = `Alcohol & drug de-addiction help for families in ${short}, Uttar Pradesh. Psychiatrist-led detox, rehabilitation and aftercare at affiliated Delhi NCR centres from ₹5,999/day.`;
    const url = `${SITE}/locations/uttar-pradesh/${params.city}`;
    const faq = cityFAQ(loaderData.city).slice(0, 8);
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "website" },
        { property: "og:url", content: url },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "geo.region", content: "IN-UP" },
        { name: "geo.placename", content: short },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "MedicalWebPage",
              name: title,
              description: desc,
              url,
              about: { "@type": "MedicalCondition", name: "Substance Use Disorder" },
              audience: { "@type": "Patient", geographicArea: { "@type": "City", name: short, addressRegion: "Uttar Pradesh", addressCountry: "IN" } },
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faq.map(([q, a]) => ({
                "@type": "Question",
                name: q,
                acceptedAnswer: { "@type": "Answer", text: a },
              })),
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Locations", item: `${SITE}/locations` },
                { "@type": "ListItem", position: 2, name: "Uttar Pradesh", item: `${SITE}/locations/uttar-pradesh` },
                { "@type": "ListItem", position: 3, name: short, item: url },
              ],
            },
          ]),
        },
      ],
    };
  },
  component: UPCityPage,
  notFoundComponent: () => (
    <div className="container-page py-20 text-center">
      <h1 className="text-2xl font-bold">City not found</h1>
      <Link to="/locations/uttar-pradesh" className="mt-4 inline-block font-semibold text-primary underline">
        ← All Uttar Pradesh cities
      </Link>
    </div>
  ),
});

function UPCityPage() {
  const { city } = Route.useLoaderData();
  const short = city.name.replace(/\s*\(.*?\)\s*/, "");
  const intro = cityIntro(city);
  const why = cityWhyDelhi(city);
  const journey = cityJourney(city);
  const faq = cityFAQ(city);
  const stories = cityTestimonials(city);

  return (
    <>
      <PageHero
        eyebrow={`Uttar Pradesh · ${city.region}`}
        title={`De-Addiction & Rehab Help for ${short} — Treatment at Delhi NCR Centres`}
        subtitle={`Confidential, psychiatrist-led alcohol and drug de-addiction for families in ${short}. Free assessment on call, admission to an affiliated Delhi NCR centre, and aftercare once the patient is back home.`}
      >
        <CTARow light />
      </PageHero>

      <nav aria-label="Breadcrumb" className="container-page pt-6 text-xs text-muted-foreground">
        <Link to="/locations" className="hover:text-primary">Locations</Link>
        <span className="px-1">/</span>
        <Link to="/locations/uttar-pradesh" className="hover:text-primary">Uttar Pradesh</Link>
        <span className="px-1">/</span>
        <span className="font-semibold text-primary">{short}</span>
      </nav>

      <section className="container-page py-10 grid gap-10 lg:grid-cols-[1.4fr_1fr] items-start">
        <article className="space-y-10">
          <div>
            <h2 className="text-2xl font-bold text-primary">Addiction Treatment for Families in {short}</h2>
            {intro.map((p, i) => (
              <p key={i} className="mt-3 text-muted-foreground leading-relaxed">{p}</p>
            ))}
            <p className="mt-3 text-muted-foreground leading-relaxed">{cityLocalSubstances(city)}</p>
          </div>

          <div className="rounded-2xl border border-border bg-secondary/40 p-6 flex items-start gap-4">
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-card border border-border">
              <RouteIcon className="h-6 w-6 text-secondary-foreground" />
            </div>
            <div>
              <h3 className="font-semibold text-primary">Getting from {short} to Delhi NCR</h3>
              <p className="text-sm text-muted-foreground">Families usually travel via {city.travel}. Admission is coordinated in advance so there is no waiting after a long journey.</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-primary">Why {short} Patients Are Treated in Delhi NCR</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {why.map((w) => (
                <div key={w.title} className="rounded-2xl border border-border bg-card p-5">
                  <h3 className="font-semibold text-primary">{w.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{w.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-primary">From First Call in {short} to Life After Discharge</h2>
            <ol className="mt-5 space-y-4">
              {journey.map((j) => (
                <li key={j.step} className="flex gap-4">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground text-sm font-bold">{j.step}</span>
                  <div>
                    <h3 className="font-semibold text-primary">{j.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{j.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-primary">Conditions We Treat for {short} Patients</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {CONDITIONS.map((c) => (
                <Link key={c.slug} to="/conditions/$slug" params={{ slug: c.slug }} className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold text-primary hover:bg-secondary">
                  {c.name}
                </Link>
              ))}
            </div>
            <h2 className="mt-8 text-2xl font-bold text-primary">Clinical Services Available</h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {SERVICES.map((s) => (
                <li key={s.slug} className="flex gap-2 text-sm">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-secondary-foreground" />
                  <Link to="/rehabilitation-services/$slug" params={{ slug: s.slug }} className="hover:text-primary">{s.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-primary">Programs & Pricing for {short} Families</h2>
            <p className="mt-2 text-sm text-muted-foreground">Program pricing starts at ₹5,999 per day on the 90-day plan. The final treatment plan and estimate are shared after clinical assessment.</p>
            <div className="mt-6"><ProgramCards /></div>
            <div className="mt-6"><PricingDisclosure /></div>
          </div>

          <div>
            <SectionHeading title={`Recovery Stories From ${short}`} subtitle={`Patients from ${short} who completed treatment at our affiliated Delhi NCR de-addiction centres. Names are withheld to protect privacy.`} />
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {stories.map((s, i) => (
                <figure key={i} className="rounded-2xl bg-soft p-5">
                  <Quote className="h-5 w-5 text-secondary-foreground" />
                  <blockquote className="mt-2 text-sm leading-relaxed">{s.quote}</blockquote>
                  <figcaption className="mt-3 text-xs font-semibold text-muted-foreground">— {s.who}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </article>

        <aside className="lg:sticky lg:top-24">
          <LeadForm title={`Free counselling for ${short}`} />
        </aside>
      </section>

      <FAQ items={faq} title={`FAQs — De-Addiction Treatment for ${short} Patients`} />
      <FinalCTA />
    </>
  );
}
