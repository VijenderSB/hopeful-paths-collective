import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function FAQ({ items, title = "Frequently Asked Questions" }: { items: [string, string][]; title?: string }) {
  return (
    <section className="container-page py-14">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold text-center text-primary">{title}</h2>
        <Accordion type="single" collapsible className="mt-8">
          {items.map(([q, a], i) => (
            <AccordionItem key={i} value={`i-${i}`}>
              <AccordionTrigger className="text-left text-base font-semibold">{q}</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed">{a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
