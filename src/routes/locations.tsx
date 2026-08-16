import { createFileRoute, Link, Outlet, useMatches } from "@tanstack/react-router";
import { FAQ } from "@/components/site/FAQ";
import { Testimonials } from "@/components/site/Testimonials";
import { PageHero, SectionHeading, FinalCTA } from "@/components/site/Bits";
import { CITIES, GLOBAL_FAQ } from "@/lib/site";
import { MapPin, ArrowRight } from "lucide-react";
import pageBanner from "@/assets/banner-locations.jpg";
import { SITE_URL } from "@/lib/seo";

export const Route = createFileRoute("/locations")({
  head: () => ({
    meta: [
      { title: "Delhi NCR De-Addiction Locations | DeAddictify" },
      { name: "description", content: "De-addiction & rehab centres across Delhi, Noida, Greater Noida, Ghaziabad, Faridabad and Gurugram. Affordable, psychiatrist-led care." },
      { property: "og:title", content: "Delhi NCR Locations | DeAddictify" },
      { property: "og:description", content: "Find affordable de-addiction help in your city across Delhi NCR." },
      { property: "og:url", content: `${SITE_URL}/locations` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/locations` }],
  }),
  component: LocationsLayout,
});

function LocationsLayout() {
  const matches = useMatches();
  if (matches.some((m) => m.routeId !== "/locations" && m.routeId.startsWith("/locations"))) return <Outlet />;
  return (
    <>
      <PageHero image={pageBanner} eyebrow="Delhi NCR Coverage" title="De-Addiction Across Delhi NCR" subtitle="Affordable de-addiction and rehabilitation programs in every major Delhi NCR city." />
      <section className="container-page py-16">
        <SectionHeading title="Choose Your City" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CITIES.map((c) => (
            <Link key={c.slug} to="/locations/$city" params={{ city: c.slug }} className="group rounded-2xl border border-border bg-card p-6 card-hover flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-secondary text-secondary-foreground"><MapPin className="h-6 w-6" /></div>
                <div>
                  <div className="text-lg font-semibold text-primary">{c.name}</div>
                  <div className="text-xs text-muted-foreground">De-addiction & rehab</div>
                </div>
              </div>
              <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-secondary-foreground" />
            </Link>
          ))}
        </div>
      </section>
      <section className="section-soft">
        <div className="container-page py-14">
          <SectionHeading title="Coming From Uttar Pradesh?" subtitle="Patients from 73 Uttar Pradesh districts are assessed locally by phone and admitted to affiliated psychiatrist-led de-addiction centres in Delhi NCR, with aftercare continuing back home." />
          <Link to="/locations/uttar-pradesh" className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-primary px-6 h-12 text-sm font-semibold text-primary-foreground">
            Uttar Pradesh city guides <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
      <Testimonials />
      <FAQ items={GLOBAL_FAQ.slice(0, 8)} />
      <FinalCTA />
    </>
  );
}
