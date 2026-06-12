import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";
import { telLink, waLink } from "@/lib/site";

export function CTARow({ light }: { light?: boolean }) {
  return (
    <div className="flex flex-wrap gap-2">
      <Link to="/contact" className={`inline-flex items-center gap-1.5 rounded-lg px-4 h-11 text-sm font-semibold ${light ? "bg-white text-primary" : "bg-primary text-primary-foreground"} hover:opacity-95`}>
        Free Counselling <ArrowRight className="h-4 w-4" />
      </Link>
      <a href={waLink} target="_blank" rel="noopener" className="inline-flex items-center gap-1.5 rounded-lg px-4 h-11 text-sm font-semibold bg-[var(--whatsapp)] text-white hover:opacity-95">
        <MessageCircle className="h-4 w-4" /> WhatsApp Now
      </a>
      <a href={telLink} className={`inline-flex items-center gap-1.5 rounded-lg px-4 h-11 text-sm font-semibold ${light ? "bg-white/15 text-white border border-white/40" : "bg-secondary text-primary"} hover:opacity-95`}>
        <Phone className="h-4 w-4" /> Call Now
      </a>
    </div>
  );
}

export function SectionHeading({ eyebrow, title, subtitle, center }: { eyebrow?: string; title: string; subtitle?: string; center?: boolean }) {
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && <div className="text-xs font-semibold uppercase tracking-[0.15em] text-teal">{eyebrow}</div>}
      <h2 className="mt-1 text-3xl md:text-4xl font-bold text-primary">{title}</h2>
      {subtitle && <p className="mt-3 text-base text-muted-foreground leading-relaxed">{subtitle}</p>}
    </div>
  );
}

export function FinalCTA() {
  return (
    <section className="hero-gradient text-white">
      <div className="container-page py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Breaking Addiction Starts With One Conversation.</h2>
        <p className="mt-3 text-white/85 max-w-2xl mx-auto">Book a free confidential counselling session today. A recovery counsellor will guide you and your family with empathy and clarity.</p>
        <div className="mt-6 flex justify-center"><CTARow light /></div>
      </div>
    </section>
  );
}

export function PageHero({ eyebrow, title, subtitle, children }: { eyebrow?: string; title: string; subtitle?: string; children?: ReactNode }) {
  return (
    <section className="hero-gradient text-white">
      <div className="container-page py-14 md:py-20">
        {eyebrow && <div className="text-xs font-semibold uppercase tracking-[0.15em] text-white/80">{eyebrow}</div>}
        <h1 className="mt-1 text-3xl md:text-5xl font-bold max-w-3xl leading-tight">{title}</h1>
        {subtitle && <p className="mt-4 max-w-2xl text-white/85 text-base md:text-lg">{subtitle}</p>}
        {children && <div className="mt-6">{children}</div>}
      </div>
    </section>
  );
}
