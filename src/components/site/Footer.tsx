import { Link } from "@tanstack/react-router";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";
import { telLink, waLink, PHONE_DISPLAY, DISCLAIMER, CITIES, CONDITIONS, PROGRAMS } from "@/lib/site";
import logoFooterAsset from "@/assets/logo-footer.png.asset.json";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-border bg-primary text-primary-foreground">
      <div className="container-page py-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <img
              src={logoFooterAsset.url}
              alt="DeAddictify — Breaking Addiction. Rebuilding Lives."
              className="h-8 w-auto object-contain"
            />
          </div>
          <p className="mt-4 text-sm text-primary-foreground/80">
            Affordable alcohol & drug de-addiction, rehabilitation and recovery assistance across Delhi NCR.
          </p>
          <div className="mt-4 space-y-2 text-sm">
            <a href={telLink} className="flex items-center gap-2 hover:underline"><Phone className="h-4 w-4" /> {PHONE_DISPLAY}</a>
            <a href={waLink} target="_blank" rel="noopener" className="flex items-center gap-2 hover:underline"><MessageCircle className="h-4 w-4" /> WhatsApp Helpline</a>
            <a href="mailto:care@deaddictify.com" className="flex items-center gap-2 hover:underline"><Mail className="h-4 w-4" /> care@deaddictify.com</a>
            <span className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Delhi NCR</span>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/85">
            <li><Link to="/about" className="hover:underline">About</Link></li>
            <li><Link to="/programs" className="hover:underline">Programs & Pricing</Link></li>
            <li><Link to="/rehabilitation-services" className="hover:underline">Rehabilitation Services</Link></li>
            <li><Link to="/family-support" className="hover:underline">Family Support</Link></li>
            <li><Link to="/success-stories" className="hover:underline">Success Stories</Link></li>
            <li><Link to="/blog" className="hover:underline">Blog</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Conditions</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/85">
            {CONDITIONS.slice(0, 8).map((c) => (
              <li key={c.slug}>
                <Link to="/conditions/$slug" params={{ slug: c.slug }} className="hover:underline">{c.name}</Link>
              </li>
            ))}
          </ul>
          <h4 className="font-semibold mb-3 mt-6">Programs</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/85">
            {PROGRAMS.map((p) => (
              <li key={p.days}><Link to="/programs" hash={`p-${p.days}`} className="hover:underline">{p.days}-Day Program</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Delhi NCR Locations</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/85">
            {CITIES.map((c) => (
              <li key={c.slug}>
                <Link to="/locations/$city" params={{ city: c.slug }} className="hover:underline">De-Addiction in {c.name}</Link>
              </li>
            ))}
          </ul>
          <h4 className="font-semibold mb-3 mt-6">Cities</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/85">
            <li><Link to="/cities" className="hover:underline">All Cities We Serve</Link></li>
            <li><Link to="/locations/uttar-pradesh" className="hover:underline">Uttar Pradesh Cities</Link></li>
          </ul>
        </div>

      </div>

      <div className="border-t border-white/15">
        <div className="container-page py-6 text-xs text-primary-foreground/75 space-y-3">
          <p>{DISCLAIMER}</p>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
            <Link to="/terms" className="hover:underline">Terms & Conditions</Link>
            <Link to="/disclaimer" className="hover:underline">Disclaimer</Link>
            <span>© {new Date().getFullYear()} DeAddictify. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

