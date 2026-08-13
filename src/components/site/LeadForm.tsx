import { useState } from "react";
import { CheckCircle2, ShieldCheck } from "lucide-react";

type Props = {
  compact?: boolean;
  title?: string;
  subtitle?: string;
};

export function LeadForm({ compact, title = "Book Free Confidential Counselling", subtitle = "A recovery counsellor will call you back within 30 minutes." }: Props) {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-secondary-foreground/40 bg-secondary/70 p-8 text-center glass-card">
        <CheckCircle2 className="mx-auto h-12 w-12 text-secondary-foreground-foreground" />
        <h3 className="mt-3 text-lg font-semibold text-primary">Thank you. Your request is received.</h3>
        <p className="mt-1 text-sm text-muted-foreground">A counsellor will reach out shortly. All information is kept strictly confidential.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-[2rem] glass-card p-6 sm:p-8 shadow-xl"
    >
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-secondary-foreground">
        <ShieldCheck className="h-4 w-4" /> 100% Confidential · Free Counselling
      </div>
      <h3 className="mt-2 text-2xl font-bold text-primary font-display">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <input required name="name" placeholder="Full Name" className="input" />
        <input required name="mobile" type="tel" pattern="[0-9+\- ]{7,15}" placeholder="Mobile Number" className="input" />
        {!compact && <input name="email" type="email" placeholder="Email (optional)" className="input" />}
        <input required name="city" placeholder="City" className="input" />
        {!compact && <input name="age" type="number" min={10} max={100} placeholder="Patient Age" className="input" />}

        <select required name="relationship" defaultValue="" className="input">
          <option value="" disabled>Patient Relationship</option>
          <option>Self</option><option>Parent</option><option>Spouse</option><option>Sibling</option><option>Friend</option>
        </select>
        <select required name="concern" defaultValue="" className="input">
          <option value="" disabled>Primary Concern</option>
          <option>Alcohol</option><option>Drugs</option><option>Both</option>
        </select>
        <select required name="duration" defaultValue="" className="input sm:col-span-2">
          <option value="" disabled>Duration of Concern</option>
          <option>Less than 1 year</option><option>1-5 years</option><option>More than 5 years</option>
        </select>

        {!compact && (
          <>
            <select name="contact" defaultValue="Phone" className="input">
              <option>Preferred Contact: Phone</option>
              <option>Preferred Contact: WhatsApp</option>
            </select>
            <textarea name="message" placeholder="Tell us briefly (optional)" rows={3} className="input sm:col-span-2 resize-none" />
          </>
        )}
      </div>

      <button type="submit" className="mt-5 w-full rounded-2xl bg-primary px-4 py-3.5 text-sm font-semibold text-primary-foreground hover:opacity-95 transition-transform hover:scale-[1.02]">
        Book Free Confidential Counselling
      </button>
      <p className="mt-3 text-[11px] text-muted-foreground text-center">By submitting, you agree to be contacted by a DeAddictify recovery counsellor.</p>

      <style>{`
        .input {
          width: 100%;
          height: 44px;
          border-radius: 12px;
          border: 1px solid var(--border);
          background: oklch(1 0 0 / 0.7);
          padding: 0 14px;
          font-size: 14px;
          color: var(--foreground);
          outline: none;
          transition: border-color .15s, box-shadow .15s, background .15s;
        }
        textarea.input { height: auto; padding-top: 10px; padding-bottom: 10px; }
        .input:focus { border-color: var(--teal); box-shadow: 0 0 0 3px color-mix(in oklab, var(--teal) 20%, transparent); background: oklch(1 0 0 / 0.92); }
      `}</style>
    </form>
  );
}

