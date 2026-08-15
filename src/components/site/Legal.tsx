import type { ReactNode } from "react";

export function LegalBody({ updated, children }: { updated: string; children: ReactNode }) {
  return (
    <section className="container-page py-14">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">Last updated: {updated}</p>
        <div className="mt-8 space-y-10">{children}</div>
      </div>
    </section>
  );
}

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="space-y-3">
      <h2 className="font-display text-xl font-semibold text-primary">{title}</h2>
      <div className="space-y-3 leading-relaxed text-muted-foreground [&_li]:leading-relaxed [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
        {children}
      </div>
    </div>
  );
}
