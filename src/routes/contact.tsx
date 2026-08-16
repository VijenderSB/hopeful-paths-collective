import { createFileRoute } from "@tanstack/react-router";
import { FAQ } from "@/components/site/FAQ";
import { Testimonials } from "@/components/site/Testimonials";
import { PageHero, FinalCTA } from "@/components/site/Bits";
import { LeadForm } from "@/components/site/LeadForm";
import { telLink, waLink, PHONE_DISPLAY, GLOBAL_FAQ } from "@/lib/site";
import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact DeAddictify — Free Confidential Counselling | Delhi NCR" },
      { name: "description", content: "Call, WhatsApp or book free counselling. 24×7 confidential helpline for alcohol & drug de-addiction in Delhi NCR." },
      { property: "og:title", content: "Contact DeAddictify" },
      { property: "og:description", content: "Free, confidential de-addiction counselling. 24×7 helpline." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="We're Here, 24×7" subtitle="Confidential counselling, admission assistance and emergency support across Delhi NCR." />
      <section className="container-page py-16 grid gap-10 lg:grid-cols-[1fr_1fr] items-start">
        <div className="space-y-4">
          <a href={telLink} className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 hover:border-primary">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary text-primary-foreground"><Phone className="h-6 w-6" /></div>
            <div><div className="text-xs uppercase tracking-wider text-muted-foreground">Call Helpline</div><div className="font-bold text-primary">{PHONE_DISPLAY}</div></div>
          </a>
          <a href={waLink} target="_blank" rel="noopener" className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 hover:border-primary">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--whatsapp)] text-white"><MessageCircle className="h-6 w-6" /></div>
            <div><div className="text-xs uppercase tracking-wider text-muted-foreground">WhatsApp</div><div className="font-bold text-primary">Chat with a counsellor</div></div>
          </a>
          <a href="mailto:care@deaddictify.com" className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 hover:border-primary">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-accent text-accent-foreground"><Mail className="h-6 w-6" /></div>
            <div><div className="text-xs uppercase tracking-wider text-muted-foreground">Email</div><div className="font-bold text-primary">care@deaddictify.com</div></div>
          </a>
          <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-secondary text-secondary-foreground"><MapPin className="h-6 w-6" /></div>
            <div><div className="text-xs uppercase tracking-wider text-muted-foreground">Coverage</div><div className="font-bold text-primary">Delhi · Noida · Greater Noida · Ghaziabad · Faridabad · Gurugram</div></div>
          </div>
          <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-secondary text-primary"><Clock className="h-6 w-6" /></div>
            <div><div className="text-xs uppercase tracking-wider text-muted-foreground">Availability</div><div className="font-bold text-primary">24×7 confidential helpline</div></div>
          </div>
        </div>
        <LeadForm />
      </section>
      <Testimonials />
      <FAQ items={GLOBAL_FAQ.slice(0, 8)} />
      <FinalCTA />
    </>
  );
}
