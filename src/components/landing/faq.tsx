"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "What industries do you specialize in?",
    answer:
      "We have a diverse portfolio of clients across various sectors including technology, finance, healthcare, and retail. Our methodologies are adaptable to the unique challenges of any industry.",
  },
  {
    question: "How do you measure the success of an engagement?",
    answer:
      "Success is measured against pre-defined Key Performance Indicators (KPIs) that are mutually agreed upon at the start of our partnership. These typically include metrics like revenue growth, cost savings, market share, and customer satisfaction.",
  },
  {
    question: "What is the typical engagement process?",
    answer:
      "Our process begins with a deep-dive discovery phase, followed by strategy formulation, implementation, and continuous monitoring. We work collaboratively with your team at every stage to ensure alignment and achieve optimal outcomes.",
  },
];

export function FAQ() {
  return (
    <section className="w-full py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Find answers to common questions about our services and process.
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
