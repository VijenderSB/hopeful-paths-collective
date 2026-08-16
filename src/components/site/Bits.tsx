import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";
import { telLink, waLink } from "@/lib/site";

export function CTARow({ light }: { light?: boolean }) {
  return (
    <div className="flex flex-wrap gap-3">
      <Link to="/contact" className={`inline-flex items-center gap-1.5 rounded-2xl px-6 h-12 text-sm font-semibold transition-transform hover:scale-[1.03] ${light ? "bg-white text-primary shadow-xl shadow-black/10" : "bg-primary text-primary-foreground shadow-xl shadow-primary/20"}`}>
        Free Counselling <ArrowRight className="h-4 w-4" />
      </Link>
      <a href={waLink} target="_blank" rel="noopener" className="inline-flex items-center gap-1.5 rounded-2xl px-6 h-12 text-sm font-semibold bg-[var(--whatsapp)] text-white shadow-lg shadow-[var(--whatsapp)]/25 transition-transform hover:scale-[1.03]">
        <MessageCircle className="h-4 w-4" /> WhatsApp Now
      </a>
      <a href={telLink} className={`inline-flex items-center gap-1.5 rounded-2xl px-6 h-12 text-sm font-semibold transition-colors ${light ? "bg-white/15 text-white border border-white/40" : "bg-card border border-border text-primary hover:bg-secondary"}`}>
        <Phone className="h-4 w-4" /> Call Now
      </a>
    </div>
  );
}

export function SectionHeading({ eyebrow, title, subtitle, center }: { eyebrow?: string; title: string; subtitle?: string; center?: boolean }) {
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && <div className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary-foreground">{eyebrow}</div>}
      <h2 className="mt-2 text-3xl md:text-4xl font-bold text-primary leading-tight">{title}</h2>
      {subtitle && <p className="mt-3 text-base text-muted-foreground leading-relaxed">{subtitle}</p>}
    </div>
  );
}


export function FinalCTA() {
  return (
    <section className="hero-gradient text-white">
      <div className="container-page py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Breaking Addiction Starts With One Conversation.</h2>
        <p className="mt-3 text-white/80 max-w-2xl mx-auto">Book a free confidential counselling session today. A recovery counsellor will guide you and your family with empathy and clarity.</p>
        <div className="mt-6 flex justify-center"><CTARow light /></div>
      </div>
    </section>
  );
}

export function PageHero({ eyebrow, title, subtitle, children, image, imageAlt }: { eyebrow?: string; title: string; subtitle?: string; children?: ReactNode; image?: string; imageAlt?: string }) {
  return (
    <section className="relative overflow-hidden hero-gradient text-white">
      {image && (
        <>
          <img
            src={image}
            alt={imageAlt ?? title}
            width={1600}
            height={704}
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/55" />
        </>
      )}
      <div className="container-page relative z-10 py-14 md:py-20">
        {eyebrow && <div className="inline-flex items-center gap-2 rounded-full bg-white/15 border border-white/25 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white/90">{eyebrow}</div>}
        <h1 className="mt-3 text-3xl md:text-5xl font-bold max-w-3xl leading-tight drop-shadow-sm">{title}</h1>
        {subtitle && <p className="mt-4 max-w-2xl text-white/85 text-base md:text-lg">{subtitle}</p>}
        {children && <div className="mt-6">{children}</div>}
      </div>
    </section>
  );
}

