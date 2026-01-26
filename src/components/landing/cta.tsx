"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useInView } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/context/language-context";

export function CTA() {
  const [ref, inView] = useInView({ rootMargin: "-100px 0px", once: true });
  const { t } = useTranslation();

  return (
    <section 
      ref={ref}
      className={cn("w-full border-y border-white/10 py-12 transition-all duration-600 ease-out", inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5")}
    >
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold tracking-tight">
          {t('cta.title')}
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          {t('cta.subtitle')}
        </p>
        <div className="mt-8">
          <Button size="lg" asChild>
            <Link href="#contact">{t('cta.button')}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
