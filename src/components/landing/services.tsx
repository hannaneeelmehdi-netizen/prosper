"use client";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Code, ShieldCheck, TrendingUp } from "lucide-react";
import { useInView } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/context/language-context";

const icons = [
  <TrendingUp className="h-8 w-8 text-primary" />,
  <ShieldCheck className="h-8 w-8 text-primary" />,
  <Code className="h-8 w-8 text-primary" />,
];

export function Services() {
  const [ref, inView] = useInView({ rootMargin: "-100px 0px", once: true });
  const { t } = useTranslation();
  const services = t('services.cards', { returnObjects: true }) as any[];

  return (
    <section 
      id="services"
      ref={ref}
      className={cn("w-full border-y border-white/10 py-12 transition-all duration-600 ease-out", inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5")}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold tracking-tight">
            {t('services.title')}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            {t('services.subtitle')}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-[#151515]/[0.6] backdrop-blur-sm border border-[#333333] transition-all duration-300 hover:border-primary/50 hover:scale-105"
            >
              <CardHeader>
                <div className="mb-4">{icons[index]}</div>
                <CardTitle className="text-2xl font-bold tracking-tight">
                  {service.title}
                </CardTitle>
                <CardDescription className="pt-2 text-base text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
