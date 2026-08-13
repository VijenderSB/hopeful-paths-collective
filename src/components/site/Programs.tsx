import { Link } from "@tanstack/react-router";
import { CheckCircle2, Star } from "lucide-react";
import { PROGRAMS, DISCLAIMER } from "@/lib/site";

export function ProgramCards() {
  return (
    <div className="@container">
      <div className="grid gap-6 @md:grid-cols-2 @5xl:grid-cols-4">
      {PROGRAMS.map((p) => {
        const featured = Boolean(p.badge);
        return (
          <div
            key={p.days}
            id={`p-${p.days}`}
            className={
              featured
                ? "relative rounded-[2rem] p-6 @md:p-7 hero-gradient text-white shadow-2xl shadow-primary/30 @5xl:-translate-y-4 transition-all duration-500"
                : "relative rounded-[2rem] glass-card p-6 @md:p-7 shadow-sm card-hover"
            }
          >
            {p.badge && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 whitespace-nowrap rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground shadow-md">
                <Star className="h-3 w-3" /> {p.badge}
              </span>
            )}
            <div className={`text-xs font-semibold uppercase tracking-wider ${featured ? "text-white/70" : "text-secondary-foreground"}`}>{p.days}-Day Program</div>
            <h3 className={`mt-1 text-xl @md:text-2xl font-bold leading-snug ${featured ? "text-white" : "text-primary"}`}>{p.title}</h3>
            <p className={`mt-2 text-xs ${featured ? "text-white/75" : "text-muted-foreground"}`}>
              <span className={`font-semibold ${featured ? "text-white" : "text-foreground"}`}>Best for:</span> {p.best}
            </p>

            <div className="mt-4 flex items-baseline gap-1">
              <span className={`text-3xl font-bold ${featured ? "text-white" : "text-primary"}`}>₹{p.perDay.toLocaleString("en-IN")}</span>
              <span className={`text-sm ${featured ? "text-white/70" : "text-muted-foreground"}`}>/ day</span>
            </div>
            <p className={`text-xs ${featured ? "text-white/70" : "text-muted-foreground"}`}>Total: ₹{p.total.toLocaleString("en-IN")}</p>
            <ul className="mt-4 space-y-1.5 text-sm">
              {p.includes.map((it) => (
                <li key={it} className={`flex gap-2 ${featured ? "text-white/85" : ""}`}>
                  <CheckCircle2 className={`h-4 w-4 mt-0.5 shrink-0 ${featured ? "text-white" : "text-secondary-foreground"}`} /> <span>{it}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className={`mt-6 block w-full rounded-2xl px-4 py-3 text-center text-sm font-semibold transition-transform hover:scale-[1.03] ${featured ? "bg-white text-primary" : "bg-primary text-primary-foreground"}`}
            >
              Book Free Counselling
            </Link>
          </div>
        );
      })}
    </div>
  );
}


const COMPARE = [
  ["Psychiatrist Care", true, true, true, true],
  ["Medical Monitoring", true, true, true, true],
  ["Individual Counselling", true, true, true, true],
  ["Group Therapy", false, true, true, true],
  ["Family Counselling", true, true, true, true],
  ["Relapse Prevention", false, true, true, true],
  ["Life Skills Training", false, false, true, true],
  ["Recovery Reintegration", false, false, false, true],
  ["Suitable For", "Early stage", "Moderate", "Chronic", "Severe / Dual"],
] as const;

export function PricingCompare() {
  return (
    <div className="overflow-x-auto rounded-[2rem] border border-border glass-card">
      <table className="w-full text-sm min-w-[640px]">
        <thead className="bg-secondary/80">
          <tr>
            <th className="text-left p-4 font-semibold text-primary">Features</th>
            <th className="p-4 font-semibold text-primary">14 Days</th>
            <th className="p-4 font-semibold text-primary">30 Days</th>
            <th className="p-4 font-semibold text-primary">60 Days</th>
            <th className="p-4 font-semibold bg-soft rounded-tr-[2rem]">90 Days</th>
          </tr>
        </thead>
        <tbody>
          {COMPARE.map((row, i) => (
            <tr key={i} className="border-t border-border">
              <td className="p-4 font-medium text-primary">{row[0] as string}</td>
              {row.slice(1).map((v, j) => (
                <td key={j} className={`p-4 text-center text-muted-foreground ${j === 3 ? "bg-soft/40" : ""}`}>
                  {typeof v === "boolean" ? (v ? <span className="text-primary font-semibold">✓</span> : "—") : <span className="font-medium text-primary">{v}</span>}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function PricingDisclosure() {
  return (
    <div className="mt-6 rounded-[2rem] border border-border glass-card p-5 text-xs text-muted-foreground leading-relaxed">
      <p className="font-semibold text-foreground mb-1">Pricing Disclosure</p>
      <p>The above pricing is indicative and intended to provide a general estimate of treatment costs. Actual treatment recommendations may vary based on addiction severity, medical condition, psychiatric diagnosis, withdrawal risk, individual treatment requirements, duration of stay, accommodation category and special monitoring requirements. A detailed treatment plan and cost estimate will be shared after clinical assessment.</p>
      <p className="mt-2 font-semibold text-foreground">Terms & Conditions Apply.</p>
      <p className="mt-2">{DISCLAIMER}</p>
    </div>
  );
}
