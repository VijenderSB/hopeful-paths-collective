import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function FAQ({ items, title = "Frequently Asked Questions" }: { items: [string, string][]; title?: string }) {
  return (
    <section className="section-soft">
      <div className="container-page py-14">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary font-display">{title}</h2>
          <Accordion type="single" collapsible className="mt-8 rounded-[2rem] glass-card p-2 sm:p-4">
            {items.map(([q, a], i) => (
              <AccordionItem key={i} value={`i-${i}`}>
                <AccordionTrigger className="text-left text-base font-semibold text-primary px-3">{q}</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed px-3">{a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

