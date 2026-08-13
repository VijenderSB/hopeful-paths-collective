import { createFileRoute, Link, Outlet, useMatches } from "@tanstack/react-router";
import { PageHero, SectionHeading, FinalCTA } from "@/components/site/Bits";
import { FAMILY_PAGES } from "@/lib/site";
import { LeadForm } from "@/components/site/LeadForm";
import { HeartHandshake } from "lucide-react";

export const Route = createFileRoute("/family-support")({
  head: () => ({
    meta: [
      { title: "Family Support Center — De-Addiction Guidance For Families | DeAddictify" },
      { name: "description", content: "Compassionate guidance for families navigating a loved one's addiction — counselling, intervention support, recovery and relapse management." },
      { property: "og:title", content: "Family Support Center | DeAddictify" },
      { property: "og:description", content: "Help for families dealing with alcohol or drug addiction in Delhi NCR." },
      { property: "og:url", content: "/family-support" },
    ],
    links: [{ rel: "canonical", href: "/family-support" }],
  }),
  component: FamilyLayout,
});

function FamilyLayout() {
  const matches = useMatches();
  if (matches.some((m) => m.routeId === "/family-support/$slug")) return <Outlet />;
  return (
    <>
      <PageHero eyebrow="Family Support" title="You Are Not Alone In This Journey" subtitle="When a loved one struggles with addiction, the family struggles too. Our counsellors stand beside you with empathy, clarity and structured support." />
      <section className="container-page py-16 grid gap-10 lg:grid-cols-[1.4fr_1fr] items-start">
        <div>
          <SectionHeading title="Family Support Library" subtitle="Practical, emotional and clinical guidance for every stage of your family's recovery." />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {FAMILY_PAGES.map((p) => (
              <Link key={p.slug} to="/family-support/$slug" params={{ slug: p.slug }} className="rounded-2xl border border-border bg-card p-5 card-hover">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-secondary text-secondary-foreground"><HeartHandshake className="h-5 w-5" /></div>
                <h3 className="mt-3 text-lg font-semibold text-primary">{p.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">Read guidance →</p>
              </Link>
            ))}
          </div>
        </div>
        <aside className="lg:sticky lg:top-24"><LeadForm title="Speak To A Family Counsellor" /></aside>
      </section>
      <FinalCTA />
    </>
  );
}
