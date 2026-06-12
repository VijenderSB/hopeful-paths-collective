import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/Bits";
import { DISCLAIMER } from "@/lib/site";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({
    meta: [{ title: "Disclaimer | DeAddictify" }, { name: "description", content: "DeAddictify disclaimer." }],
    links: [{ rel: "canonical", href: "/disclaimer" }],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Legal" title="Disclaimer" />
      <section className="container-page py-14 max-w-3xl text-muted-foreground leading-relaxed space-y-4">
        <p>{DISCLAIMER}</p>
        <p>The information on this website is for general guidance only and is not a substitute for professional medical advice, diagnosis or treatment.</p>
      </section>
    </>
  ),
});
