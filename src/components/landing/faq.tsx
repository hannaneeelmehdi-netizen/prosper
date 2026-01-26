"use client";

import { useState, useTransition } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { getNewFaqs } from "@/app/actions";
import { useToast } from "@/hooks/use-toast";

type FAQItem = {
  question: string;
  answer: string;
};

const initialFaqs: FAQItem[] = [
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

const parseFaqs = (faqString: string): FAQItem[] => {
    const faqs: FAQItem[] = [];
    // Split by question markers (either lines starting with ** or ###)
    const questionBlocks = faqString.split(/(?=\*\*|###\s)/).filter(block => block.trim() !== '');

    for (const block of questionBlocks) {
        const lines = block.trim().split('\n');
        let question = lines[0].replace(/\*\*|###\s/g, '').trim();
        const answer = lines.slice(1).join('\n').trim();

        if (question && answer) {
            // Further clean up question that might have trailing characters
            if (question.endsWith('**')) {
              question = question.slice(0, -2);
            }
            faqs.push({ question, answer });
        }
    }
    return faqs;
};


export function FAQ() {
  const [faqs, setFaqs] = useState<FAQItem[]>(initialFaqs);
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const handleGenerateFaqs = () => {
    startTransition(async () => {
      const existingFaqString = faqs
        .map((f) => `**${f.question}**\n${f.answer}`)
        .join("\n\n");
      const result = await getNewFaqs(existingFaqString);

      if (result.success && result.faqs) {
        const newFaqs = parseFaqs(result.faqs);
        setFaqs((prev) => [...prev, ...newFaqs]);
        toast({
          title: "FAQs Updated",
          description: "We've added some new questions and answers for you.",
        });
      } else {
        toast({
          variant: "destructive",
          title: "Error",
          description: result.error || "Could not generate new FAQs.",
        });
      }
    });
  };

  return (
    <section className="w-full py-24">
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
        <div className="mt-12 text-center">
          <Button onClick={handleGenerateFaqs} disabled={isPending}>
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              "Still have questions? Generate more FAQs"
            )}
          </Button>
        </div>
      </div>
    </section>
  );
}
