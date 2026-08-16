import { Quote, Star } from "lucide-react";

export type Testimonial = { q: string; a: string };

const DEFAULT_TESTIMONIALS: Testimonial[] = [
  { q: "My son returned to normal life after years of drug dependence. The counsellors treated our family with real empathy — never judgment.", a: "Mother · Delhi" },
  { q: "My husband stopped alcohol after the 60-day program. The family therapy sessions changed how we talk to each other.", a: "Wife · Noida" },
  { q: "Affordable, transparent and genuinely supportive. Aftercare calls kept my brother steady in his first year of sobriety.", a: "Brother · Gurugram" },
];

export function Testimonials({
  items = DEFAULT_TESTIMONIALS,
  title = "Recovery Stories From Families We Supported",
  eyebrow = "Testimonials",
  soft = true,
}: {
  items?: Testimonial[];
  title?: string;
  eyebrow?: string;
  soft?: boolean;
}) {
  return (
    <section className={soft ? "section-soft" : ""}>
      <div className="container-page py-14">
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary-foreground">{eyebrow}</div>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-primary font-display leading-tight">{title}</h2>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {items.map((t) => (
            <figure key={t.a + t.q.slice(0, 12)} className="rounded-[2rem] glass-card border border-border p-6 flex flex-col">
              <Quote className="h-6 w-6 text-secondary-foreground" />
              <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-foreground/90">{t.q}</blockquote>
              <div className="mt-4 flex items-center gap-0.5" aria-hidden>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current text-accent-foreground" />
                ))}
              </div>
              <figcaption className="mt-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">— {t.a}</figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-muted-foreground">
          Names and details changed to protect privacy. Published with consent. Individual outcomes vary.
        </p>
      </div>
    </section>
  );
}
