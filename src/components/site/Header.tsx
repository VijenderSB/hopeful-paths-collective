import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { telLink, PHONE_DISPLAY } from "@/lib/site";
import logoAsset from "@/assets/logo.png.asset.json";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/conditions", label: "Conditions We Treat" },
  { to: "/reclaim-360", label: "RECLAIM 360™", highlight: true },
  { to: "/programs", label: "Programs & Pricing" },
  { to: "/rehabilitation-services", label: "Rehabilitation Services" },
  { to: "/contact", label: "Contact" },
] as { to: string; label: string; highlight?: boolean }[];

export function HelplineBar() {
  return (
    <div className="bg-primary text-primary-foreground text-xs sm:text-sm">
      <div className="container-page flex flex-wrap items-center justify-between gap-2 py-2">
        <span className="font-medium">24×7 Helpline · Confidential · Delhi NCR</span>
        <a href={telLink} className="inline-flex items-center gap-1 hover:underline">
          <Phone className="h-3.5 w-3.5" /> {PHONE_DISPLAY}
        </a>
      </div>
    </div>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <HelplineBar />
      <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="container-page flex h-16 items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2">
            <img
              src={logoAsset.url}
              alt="DeAddictify — Breaking Addiction. Rebuilding Lives."
              className="h-14 w-auto object-contain"
            />
          </Link>
          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className={
                  n.highlight
                    ? "px-3 py-2 text-sm font-bold rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-md shadow-primary/25 hover:opacity-95 transition-opacity"
                    : "px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary rounded-xl hover:bg-secondary transition-colors"
                }
                activeProps={{ className: n.highlight ? "ring-2 ring-accent/40" : "text-primary bg-secondary" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="hidden sm:flex items-center gap-2">
            <a href={telLink} className="inline-flex h-10 items-center gap-1.5 rounded-2xl bg-primary px-4 text-sm font-semibold text-primary-foreground hover:opacity-95 shadow-md shadow-primary/20">
              <Phone className="h-4 w-4" /> Call
            </a>
          </div>
          <button onClick={() => setOpen(!open)} className="lg:hidden p-2 -mr-2 rounded-xl hover:bg-secondary" aria-label="Menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {open && (
          <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl">
            <nav className="container-page py-3 flex flex-col gap-1">
              {NAV.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className={
                    n.highlight
                      ? "px-3 py-2.5 text-sm font-bold rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground"
                      : "px-3 py-2.5 text-sm font-medium rounded-xl hover:bg-secondary"
                  }
                  activeProps={{ className: n.highlight ? "" : "text-primary bg-secondary" }}
                  activeOptions={{ exact: n.to === "/" }}
                >
                  {n.label}
                </Link>
              ))}
              <div className="pt-2">
                <a href={telLink} className="inline-flex h-10 w-full items-center justify-center gap-1.5 rounded-2xl bg-primary px-3 text-sm font-semibold text-primary-foreground">
                  <Phone className="h-4 w-4" /> Call Now
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
