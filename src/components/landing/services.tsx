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

const services = [
  {
    icon: <TrendingUp className="h-8 w-8 text-primary" />,
    title: "Conseil en croissance stratégique",
    description:
      "Libérez tout le potentiel de votre entreprise avec des stratégies basées sur les données et des analyses de marché qui produisent des résultats tangibles.",
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: "Excellence Opérationnelle",
    description:
      "Rationalisez les processus, améliorez l'efficacité et construisez un cadre opérationnel résilient pour un succès durable.",
  },
  {
    icon: <Code className="h-8 w-8 text-primary" />,
    title: "Transformation Numérique",
    description:
      "Tirez parti des technologies de pointe pour innover, perturber et rester en tête dans un paysage numérique en évolution rapide.",
  },
];

export function Services() {
  const [ref, inView] = useInView({ rootMargin: "-100px 0px", once: true });
  return (
    <section 
      ref={ref}
      className={cn("w-full border-y border-white/10 py-24 transition-all duration-600 ease-out", inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5")}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold tracking-tight">
            Une suite de solutions pour les dirigeants modernes
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Nous fournissons l'expertise et le soutien pour naviguer dans vos défis commerciaux les plus complexes.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-[#151515]/[0.6] backdrop-blur-sm border border-[#333333] transition-all duration-300 hover:border-primary/50 hover:scale-105"
            >
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
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
