
"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useInView } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/context/language-context";

export function FAQ() {
  const [ref, inView] = useInView({ rootMargin: "-100px 0px", once: true });
  const { t } = useTranslation();
  const faqs = t('faq.questions', { returnObjects: true }) as any[];

  return (
    <section 
      ref={ref}
      id="faq"
      className={cn("w-full py-12 transition-all duration-600 ease-out bg-[#111111]", inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5")}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold tracking-tight">
            {t('faq.title')}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            {t('faq.subtitle')}
          </p>
        </div>
        <Accordion type="single" collapsible className="mx-auto w-full max-w-3xl">
          {faqs.map((faq, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger className="text-left">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.a.split("\n").map((line: string, i: number) => (
                  <p key={i}>{line}</p>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
