import { createFileRoute, Link } from "@tanstack/react-router";
import { FAQ } from "@/components/site/FAQ";
import { Testimonials } from "@/components/site/Testimonials";
import { PageHero, FinalCTA, SectionHeading } from "@/components/site/Bits";
import { CITIES, GLOBAL_FAQ } from "@/lib/site";
import { UP_TIER2, UP_TIER3 } from "@/lib/up-cities";
import pageBanner from "@/assets/banner-locations.jpg";
import { SITE_URL } from "@/lib/seo";

export const Route = createFileRoute("/cities")({
  head: () => ({
    meta: [
      { title: "Cities We Serve | De-Addiction Help Across Delhi NCR & UP" },
      { name: "description", content: "Browse every city DeAddictify serves — Delhi NCR centres plus 73 Uttar Pradesh districts whose families travel to Delhi NCR for affordable, psychiatrist-led de-addiction treatment." },
      { property: "og:title", content: "Cities We Serve | DeAddictify" },
      { property: "og:description", content: "Find de-addiction and rehabilitation support for your city across Delhi NCR and Uttar Pradesh." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: `${SITE_URL}/cities` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/cities` }],
  }),
  component: CitiesPage,
});

function CitiesPage() {
  return (
    <>
      <PageHero image={pageBanner}
        eyebrow="Coverage"
        title="Cities We Serve"
        subtitle="Treatment is delivered at affiliated Delhi NCR centres. Families from across Uttar Pradesh travel in for assessment, detox and residential recovery — pick your city to see local guidance, travel routes and costs."
      />

      <section className="container-page py-14">
        <SectionHeading eyebrow="Delhi NCR" title="Delhi NCR Locations" subtitle="Our core treatment and admission coverage area." />
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {CITIES.map((c) => (
            <Link
              key={c.slug}
              to="/locations/$city"
              params={{ city: c.slug }}
              className="rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium card-hover"
            >
              De-Addiction in {c.name}
            </Link>
          ))}
        </div>
      </section>

      <section className="container-page pb-14">
        <SectionHeading eyebrow="Uttar Pradesh" title="Uttar Pradesh — Tier 2 Cities" subtitle="Larger districts with the highest volume of families travelling to Delhi NCR." />
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {UP_TIER2.map((c) => (
            <Link
              key={c.slug}
              to="/locations/uttar-pradesh/$city"
              params={{ city: c.slug }}
              className="rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium card-hover"
            >
              {c.name}
            </Link>
          ))}
        </div>
      </section>

      <section className="container-page pb-14">
        <SectionHeading eyebrow="Uttar Pradesh" title="Uttar Pradesh — Tier 3 Cities & Districts" subtitle="District-level coverage with travel guidance, local FAQs and recovery stories." />
        <div className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {UP_TIER3.map((c) => (
            <Link
              key={c.slug}
              to="/locations/uttar-pradesh/$city"
              params={{ city: c.slug }}
              className="rounded-lg border border-border bg-card px-3 py-2 text-sm card-hover"
            >
              {c.name}
            </Link>
          ))}
        </div>
        <p className="mt-8 text-sm text-muted-foreground">
          Don't see your city? We still help. Call our helpline or visit the{" "}
          <Link to="/locations/uttar-pradesh" className="text-primary underline">Uttar Pradesh hub</Link> or{" "}
          <Link to="/contact" className="text-primary underline">contact page</Link> for guidance.
        </p>
      </section>

      <Testimonials />
      <FAQ items={GLOBAL_FAQ.slice(0, 8)} />
      <FinalCTA />
    </>
  );
}
