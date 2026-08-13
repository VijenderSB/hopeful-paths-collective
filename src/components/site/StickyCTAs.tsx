import { Phone, MessageCircle } from "lucide-react";
import { telLink, waLink } from "@/lib/site";

export function StickyCTAs() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3 sm:bottom-6 sm:right-6">
      <a
        href={waLink}
        target="_blank"
        rel="noopener"
        aria-label="WhatsApp Now"
        className="grid h-14 w-14 place-items-center rounded-full bg-[var(--whatsapp)] text-white shadow-lg shadow-[var(--whatsapp)]/30 hover:scale-105 transition"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
      <a
        href={telLink}
        aria-label="Call Now"
        className="grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30 hover:scale-105 transition"
      >
        <Phone className="h-7 w-7" />
      </a>
    </div>
  );
}

