import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SectionHeading, FinalCTA } from "@/components/site/Bits";
import { LeadForm } from "@/components/site/LeadForm";
import { Quote } from "lucide-react";

export const Route = createFileRoute("/success-stories")({
  head: () => ({
    meta: [
      { title: "Success Stories — Real Recovery Journeys | DeAddictify" },
      { name: "description", content: "Read real recovery stories from individuals and families who rebuilt their lives with DeAddictify." },
      { property: "og:title", content: "Success Stories | DeAddictify" },
      { property: "og:description", content: "Real recovery stories from Delhi NCR families." },
      { property: "og:url", content: "/success-stories" },
    ],
    links: [{ rel: "canonical", href: "/success-stories" }],
  }),
  component: SuccessPage,
});

const STORIES = [
  { q: "My son returned to normal life after years of drug dependence. The team treated us with empathy.", a: "Mother · Delhi", role: "Parent of recovered patient" },
  { q: "My husband stopped alcohol and our family life improved. Affordable and supportive.", a: "Wife · Noida", role: "Spouse" },
  { q: "Affordable and supportive recovery guidance when we needed help most.", a: "Brother · Gurugram", role: "Sibling" },
  { q: "Two years sober. The aftercare program kept me on track.", a: "Patient · Ghaziabad", role: "Recovered patient" },
  { q: "The psychiatrist-led approach made all the difference for my daughter.", a: "Father · Faridabad", role: "Parent" },
  { q: "From cannabis dependence to a stable career. Grateful to the team.", a: "Patient · Greater Noida", role: "Recovered patient" },
];

function SuccessPage() {
  return (
    <>
      <PageHero eyebrow="Recovery Stories" title="Real Lives. Real Recovery." subtitle="Every story here represents a family that found its way back. Yours can be next." />
      <section className="container-page py-16">
        <SectionHeading center title="Voices of Recovery" />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {STORIES.map((s, i) => (
            <figure key={i} className="rounded-2xl border border-border bg-card p-6">
              <Quote className="h-6 w-6 text-secondary-foreground" />
              <blockquote className="mt-3 text-sm leading-relaxed">{s.q}</blockquote>
              <figcaption className="mt-4">
                <div className="text-sm font-semibold text-primary">{s.a}</div>
                <div className="text-xs text-muted-foreground">{s.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[1,2,3].map(i => <div key={i} className="rounded-2xl border border-border bg-card aspect-video grid place-items-center text-muted-foreground text-sm">Video Testimonial Placeholder</div>)}
        </div>
      </section>
      <section className="container-page pb-16"><div className="max-w-2xl mx-auto"><LeadForm /></div></section>
      <FinalCTA />
    </>
  );
}
