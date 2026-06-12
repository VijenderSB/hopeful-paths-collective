import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SectionHeading, FinalCTA } from "@/components/site/Bits";
import { LeadForm } from "@/components/site/LeadForm";
import { FAQ } from "@/components/site/FAQ";
import { GLOBAL_FAQ, WHY_CHOOSE } from "@/lib/site";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About DeAddictify — Mission, Vision & Recovery Philosophy" },
      { name: "description", content: "DeAddictify is an affordable, psychiatrist-led de-addiction and recovery platform for Delhi NCR. Learn our mission, vision and how we help families." },
      { property: "og:title", content: "About DeAddictify" },
      { property: "og:description", content: "Affordable psychiatrist-led de-addiction & recovery support across Delhi NCR." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const BLOCKS = [
  { t: "Our Mission", d: "Make affordable, psychiatrist-led addiction recovery accessible to every family across Delhi NCR." },
  { t: "Our Vision", d: "A society where addiction is recognised as a treatable condition and recovery is supported with empathy and structure." },
  { t: "Recovery Philosophy", d: "Recovery is clinical, behavioural and emotional. Our approach combines medical care, counselling and family involvement." },
  { t: "Affordable Recovery Commitment", d: "Transparent pricing, structured programs and partner network keep costs accessible without compromising care." },
  { t: "How We Work", d: "Free assessment → Counsellor consultation → Psychiatrist plan → Admission assistance → Rehabilitation → Aftercare." },
  { t: "Why Families Trust Us", d: "Confidential care, family-focused programs, structured rehab and long-term recovery monitoring." },
];

function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About DeAddictify" title="Breaking Addiction. Rebuilding Lives." subtitle="DeAddictify helps individuals and families move from addiction and helplessness toward recovery, dignity and normal life." />
      <section className="container-page py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {BLOCKS.map((b) => (
            <div key={b.t} className="rounded-2xl border border-border bg-card p-6">
              <h2 className="text-xl font-bold text-primary">{b.t}</h2>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-soft">
        <div className="container-page py-16">
          <SectionHeading center eyebrow="Delhi NCR" title="Recovery Network Across Delhi NCR" subtitle="Counselling, admission assistance and aftercare in Delhi, Noida, Greater Noida, Ghaziabad, Faridabad and Gurugram." />
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_CHOOSE.map((w) => (
              <div key={w} className="flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium">
                <CheckCircle2 className="h-5 w-5 text-success-foreground" /> {w}
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ items={GLOBAL_FAQ.slice(0, 10)} />

      <section className="container-page pb-16">
        <div className="max-w-2xl mx-auto"><LeadForm /></div>
      </section>
      <FinalCTA />
    </>
  );
}
