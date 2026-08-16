import { createFileRoute } from "@tanstack/react-router";
import { Testimonials } from "@/components/site/Testimonials";
import { PageHero, SectionHeading, FinalCTA } from "@/components/site/Bits";
import { ProgramCards, PricingCompare, PricingDisclosure } from "@/components/site/Programs";
import { LeadForm } from "@/components/site/LeadForm";
import { FAQ } from "@/components/site/FAQ";
import { HOME_FAQ } from "@/lib/site";
import pageBanner from "@/assets/banner-programs.jpg";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programs & Pricing — Affordable Rehab Programs | DeAddictify" },
      { name: "description", content: "14, 30, 60 & 90-day affordable de-addiction & rehabilitation programs starting from ₹5,999/day. Psychiatrist-led, family-focused." },
      { property: "og:title", content: "Programs & Pricing | DeAddictify" },
      { property: "og:description", content: "Affordable, structured de-addiction programs across Delhi NCR." },
      { property: "og:url", content: "/programs" },
    ],
    links: [{ rel: "canonical", href: "/programs" }],
  }),
  component: ProgramsPage,
});

function ProgramsPage() {
  return (
    <>
      <PageHero image={pageBanner} eyebrow="Programs & Pricing" title="Affordable Recovery Programs" subtitle="Transparent pricing. Psychiatrist-led care. Family counselling included in every program." />
      <section className="container-page py-16">
        <SectionHeading title="Choose Your Recovery Program" subtitle="Programs are tailored after clinical assessment. Cost depends on severity and treatment requirements." />
        <div className="mt-10"><ProgramCards /></div>
      </section>
      <section className="section-soft">
        <div className="container-page py-16">
          <SectionHeading center title="Compare Programs" />
          <div className="mt-8"><PricingCompare /></div>
          <div className="mt-6"><PricingDisclosure /></div>
        </div>
      </section>
      <FAQ items={HOME_FAQ} />
      <section className="container-page pb-16">
        <div className="max-w-2xl mx-auto"><LeadForm /></div>
      </section>
      <Testimonials />
      <FinalCTA />
    </>
  );
}
