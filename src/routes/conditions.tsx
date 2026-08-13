import { createFileRoute, Link, Outlet, useMatches } from "@tanstack/react-router";
import { PageHero, SectionHeading, FinalCTA } from "@/components/site/Bits";
import { CONDITIONS } from "@/lib/site";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/conditions")({
  head: () => ({
    meta: [
      { title: "Conditions We Treat — Alcohol, Drug, Dual Diagnosis | DeAddictify" },
      { name: "description", content: "Comprehensive de-addiction & treatment for alcohol, drugs, cannabis, heroin, cocaine, prescription dependence and dual diagnosis across Delhi NCR." },
      { property: "og:title", content: "Conditions We Treat | DeAddictify" },
      { property: "og:description", content: "Alcohol, drugs, dual diagnosis and more — psychiatrist-led treatment in Delhi NCR." },
      { property: "og:url", content: "/conditions" },
    ],
    links: [{ rel: "canonical", href: "/conditions" }],
  }),
  component: ConditionsLayout,
});

function ConditionsLayout() {
  const matches = useMatches();
  const isChild = matches.some((m) => m.routeId === "/conditions/$slug");
  if (isChild) return <Outlet />;

  return (
    <>
      <PageHero eyebrow="Conditions We Treat" title="Compassionate, Clinical Care For Every Addiction" subtitle="From early-stage dependence to dual diagnosis, our psychiatrist-led programs offer structured treatment and family support." />
      <section className="container-page py-16">
        <SectionHeading title="All Conditions" subtitle="Click a condition to learn more about symptoms, treatment options and recovery." />
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {CONDITIONS.map((c) => (
            <Link key={c.slug} to="/conditions/$slug" params={{ slug: c.slug }} className="group flex items-center justify-between rounded-xl border border-border bg-card px-5 py-4 hover:border-primary">
              <span className="font-semibold text-primary">{c.name}</span>
              <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-secondary-foreground" />
            </Link>
          ))}
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
