import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/Bits";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [{ title: "Privacy Policy | DeAddictify" }, { name: "description", content: "How DeAddictify handles your information." }],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" />
      <section className="container-page py-14 max-w-3xl text-muted-foreground leading-relaxed space-y-4">
        <p>DeAddictify treats all enquiries and information shared by patients and families as strictly confidential. Details collected through forms, calls or WhatsApp are used only to provide counselling, treatment guidance and admission assistance.</p>
        <p>We do not sell or share personal information with third parties for marketing purposes. Information may be shared with affiliated treatment partners only when required to coordinate care.</p>
        <p>For any questions about your data, contact care@deaddictify.com.</p>
      </section>
    </>
  ),
});
