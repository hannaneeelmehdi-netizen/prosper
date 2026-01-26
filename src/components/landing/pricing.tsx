"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { useInView } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useTranslation } from "@/context/language-context";

export function Pricing() {
  const [ref, inView] = useInView({ rootMargin: "-100px 0px", once: true });
  const { t } = useTranslation();
  const valueStack = t('pricing.value_stack', { returnObjects: true }) as string[];

  return (
    <section
      ref={ref}
      id="pricing"
      className={cn("w-full py-12 transition-all duration-600 ease-out", inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5")}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <div className="relative w-full max-w-lg rounded-2xl bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] p-8 border border-[#444444] shadow-2xl">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight">
                {t('pricing.title')}
              </h2>
            </div>
            
            <div className="my-10 text-center">
              <span className="text-6xl font-bold text-white">1 500€</span>
              <p className="mt-2 text-muted-foreground">
                {t('pricing.price_suffix')}
              </p>
            </div>
            
            <div className="my-8 flex justify-center">
              <Badge className="border-yellow-400/50 bg-yellow-400/10 py-2 px-4 text-sm text-yellow-300 font-semibold text-center">
                {t('pricing.guarantee')}
              </Badge>
            </div>

            <ul className="mt-8 space-y-4">
              {valueStack.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <Button asChild size="lg" className="w-full mt-10">
              <Link href="#contact">{t('pricing.cta_button')}</Link>
            </Button>
            <p className="mt-4 text-center text-sm text-muted-foreground">
              {t('pricing.processing_time')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
