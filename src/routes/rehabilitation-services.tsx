import { createFileRoute, Link, Outlet, useMatches } from "@tanstack/react-router";
import { FAQ } from "@/components/site/FAQ";
import { Testimonials } from "@/components/site/Testimonials";
import { PageHero, SectionHeading, FinalCTA } from "@/components/site/Bits";
import { SERVICES, GLOBAL_FAQ } from "@/lib/site";
import { ArrowRight } from "lucide-react";
import pageBanner from "@/assets/banner-services.jpg";

export const Route = createFileRoute("/rehabilitation-services")({
  head: () => ({
    meta: [
      { title: "Rehabilitation Services — Detox, Therapy & Aftercare | DeAddictify" },
      { name: "description", content: "Medical detox, psychiatric care, counselling, group therapy, family therapy, relapse prevention and aftercare across Delhi NCR." },
      { property: "og:title", content: "Rehabilitation Services | DeAddictify" },
      { property: "og:description", content: "End-to-end de-addiction & rehabilitation services in Delhi NCR." },
      { property: "og:url", content: "https://hopeful-paths-collective.lovable.app/rehabilitation-services" },
    ],
    links: [{ rel: "canonical", href: "https://hopeful-paths-collective.lovable.app/rehabilitation-services" }],
  }),
  component: ServicesLayout,
});

function ServicesLayout() {
  const matches = useMatches();
  if (matches.some((m) => m.routeId === "/rehabilitation-services/$slug")) return <Outlet />;
  return (
    <>
      <PageHero image={pageBanner} eyebrow="Rehabilitation Services" title="Full-Spectrum De-Addiction Care" subtitle="Detoxification, psychiatric care, individual & group therapy, family counselling and structured aftercare." />
      <section className="container-page py-16">
        <SectionHeading title="All Services" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <Link key={s.slug} to="/rehabilitation-services/$slug" params={{ slug: s.slug }} className="group rounded-2xl border border-border bg-card p-5 card-hover">
              <h3 className="text-lg font-semibold text-primary">{s.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">Structured care delivered by qualified professionals.</p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-secondary-foreground">Learn more <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition" /></span>
            </Link>
          ))}
        </div>
      </section>
      <Testimonials />
      <FAQ items={GLOBAL_FAQ.slice(0, 8)} />
      <FinalCTA />
    </>
  );
}
