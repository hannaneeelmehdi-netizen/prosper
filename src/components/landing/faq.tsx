"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useInView } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import Link from "next/link";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "Est-ce légal de vivre en France avec une société à Hong Kong ?",
    answer: "Oui. Hong Kong n'est pas un paradis fiscal mais une juridiction à fiscalité territoriale. Vous devez simplement déclarer vos dividendes ou salaires perçus dans votre pays de résidence.",
  },
  {
    question: "Dois-je me rendre sur place pour ouvrir le compte bancaire ?",
    answer: "Non. Grâce à nos partenariats avec Airwallex, Wise et Statrys, tout se fait 100% à distance.",
  },
  {
    question: "Quels sont les frais de renouvellement annuels ?",
    answer: "Le renouvellement inclut le Company Secretary, le Siège Social et la déclaration annuelle. Comptez environ 900€/an tout inclus.",
  },
];

export function FAQ() {
  const [ref, inView] = useInView({ rootMargin: "-100px 0px", once: true });
  return (
    <section 
      ref={ref}
      id="faq"
      className={cn("w-full py-24 transition-all duration-600 ease-out bg-[#111111]", inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5")}
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

        <div className="mt-8 text-center">
          <Link
            href="https://wa.me/32494390528" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 hover:text-green-600 transition-colors"
          >
            Une autre question ? Parlez-nous sur WhatsApp
          </Link>
        </div>

      </div>
    </section>
  );
}
