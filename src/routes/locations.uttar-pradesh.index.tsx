import { createFileRoute, Link } from "@tanstack/react-router";
import { GLOBAL_FAQ } from "@/lib/site";
import { FAQ } from "@/components/site/FAQ";
import { Testimonials } from "@/components/site/Testimonials";
import { PageHero, SectionHeading, FinalCTA, CTARow } from "@/components/site/Bits";
import { UP_TIER2, UP_TIER3, NCR_ALIASES } from "@/lib/up-cities";
import { MapPin, ArrowRight } from "lucide-react";

const TITLE = "De-Addiction & Rehab for Uttar Pradesh Patients | Treatment in Delhi NCR | DeAddictify";
const DESC =
  "Patients from 73 Uttar Pradesh districts get psychiatrist-led alcohol & drug de-addiction treatment at affiliated Delhi NCR centres. City-wise guidance, costs from ₹5,999/day.";

export const Route = createFileRoute("/locations/uttar-pradesh/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://hopeful-paths-collective.lovable.app/locations/uttar-pradesh" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://hopeful-paths-collective.lovable.app/locations/uttar-pradesh" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: TITLE,
          description: DESC,
          url: "https://hopeful-paths-collective.lovable.app/locations/uttar-pradesh",
          about: { "@type": "Place", name: "Uttar Pradesh, India" },
        }),
      },
    ],
  }),
  component: UPIndex,
});

function CityGrid({ cities }: { cities: { slug: string; name: string; region: string }[] }) {
  return (
    <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {cities.map((c) => (
        <Link
          key={c.slug}
          to="/locations/uttar-pradesh/$city"
          params={{ city: c.slug }}
          className="group rounded-2xl border border-border bg-card p-4 card-hover flex items-center justify-between gap-3"
        >
          <div className="flex items-center gap-3 min-w-0">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-secondary text-secondary-foreground">
              <MapPin className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <div className="font-semibold text-primary truncate">{c.name}</div>
              <div className="text-xs text-muted-foreground truncate">{c.region}</div>
            </div>
          </div>
          <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground group-hover:text-secondary-foreground" />
        </Link>
      ))}
    </div>
  );
}

function UPIndex() {
  return (
    <>
      <PageHero
        eyebrow="Uttar Pradesh · Treatment in Delhi NCR"
        title="De-Addiction Support For Every District Of Uttar Pradesh"
        subtitle="Structured residential rehabilitation is scarce across most UP districts. We assess patients locally and admit them to psychiatrist-led de-addiction centres in Delhi NCR, then continue aftercare once they are home."
      >
        <CTARow light />
      </PageHero>

      <section className="container-page py-14">
        <SectionHeading
          eyebrow="How this works"
          title="Local assessment, Delhi NCR treatment, follow-up back home"
          subtitle="Families across Uttar Pradesh reach us first by phone. After a free confidential assessment, we plan travel and admission to an affiliated Delhi NCR centre — medical detox, psychiatric care, counselling and family therapy in one continuous program. After discharge, relapse prevention continues online in your city."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            ["Why away from home helps", "Distance from familiar suppliers, drinking circles and daily triggers substantially lowers early relapse risk."],
            ["Clinical depth", "24-hour monitoring, psychiatrist-led detox and dual-diagnosis treatment that most districts cannot provide."],
            ["Affordable & transparent", "Programs from ₹5,999/day on the 90-day plan, with a written estimate before admission."],
          ].map(([t, b]) => (
            <div key={t} className="rounded-2xl border border-border bg-card p-5">
              <h3 className="font-bold text-primary">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-soft">
        <div className="container-page py-14">
          <SectionHeading eyebrow="Tier 2 cities" title="Major Uttar Pradesh Cities We Serve" />
          <CityGrid cities={UP_TIER2} />
          <div className="mt-6 text-sm text-muted-foreground">
            Already inside Delhi NCR?{" "}
            {NCR_ALIASES.map((a, i) => (
              <span key={a.slug}>
                {i > 0 && " · "}
                <Link to="/locations/$city" params={{ city: a.slug }} className="font-semibold text-primary underline">
                  {a.name}
                </Link>
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-14">
        <SectionHeading eyebrow="Tier 3 districts" title="District-Wise De-Addiction Guidance" />
        <CityGrid cities={UP_TIER3} />
      </section>

      <Testimonials />
      <FAQ items={GLOBAL_FAQ.slice(0, 8)} />
      <FinalCTA />
    </>
  );
}
