import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/Bits";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [{ title: "Terms & Conditions | DeAddictify" }, { name: "description", content: "Terms governing use of the DeAddictify platform." }],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Legal" title="Terms & Conditions" />
      <section className="container-page py-14 max-w-3xl text-muted-foreground leading-relaxed space-y-4">
        <p>By using DeAddictify, you agree to these terms. DeAddictify acts as a treatment facilitation and recovery support platform. Final admission, treatment plan, duration, accommodation and costs are subject to clinical assessment by qualified professionals at affiliated treatment partners.</p>
        <p>Pricing is indicative. A detailed estimate is shared after assessment. All information shared with DeAddictify is kept confidential.</p>
        <p>Terms & Conditions Apply.</p>
      </section>
    </>
  ),
});
