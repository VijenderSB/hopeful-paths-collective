import { Link } from "@tanstack/react-router";
import { CheckCircle2, Star } from "lucide-react";
import { PROGRAMS, DISCLAIMER } from "@/lib/site";

export function ProgramCards() {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {PROGRAMS.map((p) => (
        <div
          key={p.days}
          id={`p-${p.days}`}
          className={`relative rounded-2xl border bg-card p-6 card-hover ${p.badge ? "border-teal shadow-md shadow-teal/10" : "border-border"}`}
        >
          {p.badge && (
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-success px-3 py-1 text-xs font-semibold text-success-foreground">
              <Star className="h-3 w-3" /> {p.badge}
            </span>
          )}
          <div className="text-xs font-semibold uppercase tracking-wider text-teal">{p.days}-Day Program</div>
          <h3 className="mt-1 text-lg font-bold text-primary leading-snug">{p.title}</h3>
          <p className="mt-2 text-xs text-muted-foreground"><span className="font-semibold text-foreground">Best for:</span> {p.best}</p>
          <div className="mt-4 flex items-baseline gap-1">
            <span className="text-3xl font-bold text-primary">₹{p.perDay.toLocaleString("en-IN")}</span>
            <span className="text-sm text-muted-foreground">/ day</span>
          </div>
          <p className="text-xs text-muted-foreground">Total: ₹{p.total.toLocaleString("en-IN")}</p>
          <ul className="mt-4 space-y-1.5 text-sm">
            {p.includes.map((it) => (
              <li key={it} className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-success-foreground shrink-0" /> <span>{it}</span></li>
            ))}
          </ul>
          <Link to="/contact" className="mt-5 block w-full rounded-lg bg-primary px-4 py-2.5 text-center text-sm font-semibold text-primary-foreground hover:opacity-95">
            Book Free Counselling
          </Link>
        </div>
      ))}
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
    <div className="overflow-x-auto rounded-2xl border border-border">
      <table className="w-full text-sm min-w-[640px]">
        <thead className="bg-secondary">
          <tr>
            <th className="text-left p-3 font-semibold">Features</th>
            <th className="p-3 font-semibold">14 Days</th>
            <th className="p-3 font-semibold">30 Days</th>
            <th className="p-3 font-semibold">60 Days</th>
            <th className="p-3 font-semibold bg-soft">90 Days</th>
          </tr>
        </thead>
        <tbody>
          {COMPARE.map((row, i) => (
            <tr key={i} className="border-t border-border">
              <td className="p-3 font-medium">{row[0] as string}</td>
              {row.slice(1).map((v, j) => (
                <td key={j} className={`p-3 text-center ${j === 3 ? "bg-soft/50" : ""}`}>
                  {typeof v === "boolean" ? (v ? "✓" : "—") : v}
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
    <div className="mt-6 rounded-xl border border-border bg-secondary/50 p-4 text-xs text-muted-foreground leading-relaxed">
      <p className="font-semibold text-foreground mb-1">Pricing Disclosure</p>
      <p>The above pricing is indicative and intended to provide a general estimate of treatment costs. Actual treatment recommendations may vary based on addiction severity, medical condition, psychiatric diagnosis, withdrawal risk, individual treatment requirements, duration of stay, accommodation category and special monitoring requirements. A detailed treatment plan and cost estimate will be shared after clinical assessment.</p>
      <p className="mt-2 font-semibold text-foreground">Terms & Conditions Apply.</p>
      <p className="mt-2">{DISCLAIMER}</p>
    </div>
  );
}
