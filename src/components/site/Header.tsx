import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { telLink, waLink, PHONE_DISPLAY } from "@/lib/site";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/conditions", label: "Conditions We Treat" },
  { to: "/programs", label: "Programs & Pricing" },
  { to: "/rehabilitation-services", label: "Rehabilitation Services" },
  { to: "/family-support", label: "Family Support" },
  { to: "/locations", label: "Delhi NCR Locations" },
  { to: "/success-stories", label: "Success Stories" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

export function HelplineBar() {
  return (
    <div className="bg-primary text-primary-foreground text-xs sm:text-sm">
      <div className="container-page flex flex-wrap items-center justify-between gap-2 py-2">
        <span className="font-medium">24×7 Helpline · Confidential · Delhi NCR</span>
        <div className="flex items-center gap-3">
          <a href={telLink} className="inline-flex items-center gap-1 hover:underline">
            <Phone className="h-3.5 w-3.5" /> {PHONE_DISPLAY}
          </a>
          <a href={waLink} target="_blank" rel="noopener" className="inline-flex items-center gap-1 hover:underline">
            <MessageCircle className="h-3.5 w-3.5" /> WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <HelplineBar />
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
        <div className="container-page flex h-16 items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2 font-display">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary text-primary-foreground font-bold">D</span>
            <span className="flex flex-col leading-none">
              <span className="text-lg font-bold text-primary">DeAddictify</span>
              <span className="text-[10px] text-muted-foreground">Breaking Addiction. Rebuilding Lives.</span>
            </span>
          </Link>
          <nav className="hidden xl:flex items-center gap-1">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="px-2.5 py-2 text-sm font-medium text-foreground/80 hover:text-primary rounded-md hover:bg-secondary"
                activeProps={{ className: "text-primary bg-secondary" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="hidden sm:flex items-center gap-2">
            <a href={telLink} className="inline-flex h-9 items-center gap-1.5 rounded-md bg-primary px-3 text-sm font-semibold text-primary-foreground hover:opacity-90">
              <Phone className="h-4 w-4" /> Call
            </a>
            <a href={waLink} target="_blank" rel="noopener" className="inline-flex h-9 items-center gap-1.5 rounded-md bg-[var(--whatsapp)] px-3 text-sm font-semibold text-white hover:opacity-90">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
          <button onClick={() => setOpen(!open)} className="xl:hidden p-2 -mr-2" aria-label="Menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {open && (
          <div className="xl:hidden border-t border-border bg-background">
            <nav className="container-page py-3 flex flex-col gap-1">
              {NAV.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2.5 text-sm font-medium rounded-md hover:bg-secondary"
                  activeProps={{ className: "text-primary bg-secondary" }}
                  activeOptions={{ exact: n.to === "/" }}
                >
                  {n.label}
                </Link>
              ))}
              <div className="grid grid-cols-2 gap-2 pt-2">
                <a href={telLink} className="inline-flex h-10 items-center justify-center gap-1.5 rounded-md bg-primary px-3 text-sm font-semibold text-primary-foreground">
                  <Phone className="h-4 w-4" /> Call Now
                </a>
                <a href={waLink} target="_blank" rel="noopener" className="inline-flex h-10 items-center justify-center gap-1.5 rounded-md bg-[var(--whatsapp)] px-3 text-sm font-semibold text-white">
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
