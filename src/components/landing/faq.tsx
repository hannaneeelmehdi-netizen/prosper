"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useInView } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "Dans quels secteurs vous spécialisez-vous ?",
    answer:
      "Nous avons un portefeuille diversifié de clients dans divers secteurs, notamment la technologie, la finance, la santé et la vente au détail. Nos méthodologies sont adaptables aux défis uniques de chaque secteur.",
  },
  {
    question: "Comment mesurez-vous le succès d'un engagement ?",
    answer:
      "Le succès est mesuré par rapport à des indicateurs de performance clés (KPI) prédéfinis et convenus d'un commun accord au début de notre partenariat. Ceux-ci incluent généralement des mesures telles que la croissance des revenus, les économies de coûts, la part de marché et la satisfaction client.",
  },
  {
    question: "Quel est le processus d'engagement typique ?",
    answer:
      "Notre processus commence par une phase de découverte approfondie, suivie de la formulation de la stratégie, de la mise en œuvre et d'un suivi continu. Nous travaillons en collaboration avec votre équipe à chaque étape pour garantir l'alignement et obtenir des résultats optimaux.",
  },
];

export function FAQ() {
  const [ref, inView] = useInView({ rootMargin: "-100px 0px", once: true });
  return (
    <section 
      ref={ref}
      className={cn("w-full py-24 transition-all duration-600 ease-out border-t border-white/10", inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5")}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold tracking-tight">
            Questions Fréquemment Posées
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Trouvez les réponses aux questions courantes sur nos services et notre processus.
          </p>
        </div>
        <Accordion type="single" collapsible className="mx-auto w-full max-w-3xl">
          {faqs.map((faq, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer.split("\n").map((line, i) => (
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
