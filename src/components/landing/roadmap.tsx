"use client";

import { FileText, ShieldCheck, FileArchive, Landmark } from "lucide-react";
import { useInView } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

const steps = [
  {
    icon: FileText,
    title: "Formulaire Sécurisé",
    duration: "5 min",
    description: "Remplissez notre formulaire en ligne simple et sécurisé en quelques minutes.",
    isCurrent: true,
  },
  {
    icon: ShieldCheck,
    title: "Validation Conformité",
    duration: "24h",
    description: "Notre équipe d'experts vérifie la conformité de votre dossier sous 24 heures.",
  },
  {
    icon: FileArchive,
    title: "Réception K-Bis & Documents",
    duration: "48h",
    description: "Recevez tous vos documents d'entreprise officiels par voie électronique.",
  },
  {
    icon: Landmark,
    title: "Ouverture Bancaire",
    duration: "Accompagnée",
    description: "Nous vous assistons personnellement pour l'ouverture de votre compte bancaire international.",
  },
];

export function Roadmap() {
  const [ref, inView] = useInView({ rootMargin: "-100px 0px", once: true });

  return (
    <section
      ref={ref}
      id="roadmap"
      className={cn("w-full py-32 transition-all duration-600 ease-out", inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5")}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold tracking-tight">
            Votre Lancement en 4 Étapes Simples
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Un processus transparent et rapide pour concrétiser votre projet.
          </p>
        </div>
        
        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-7 top-0 h-full w-0.5 -translate-x-1/2 bg-border/30" />
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="relative flex items-start">
                <div className="relative z-10 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-background">
                  <div className={cn(
                    "flex h-12 w-12 items-center justify-center rounded-full bg-[#151515]/[0.6] border border-[#333333]",
                    step.isCurrent && "border-primary shadow-[0_0_15px] shadow-primary/50"
                  )}>
                    <step.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="ml-6">
                  <p className="text-sm font-semibold text-primary">{step.duration}</p>
                  <h3 className="mt-1 text-xl font-bold">{step.title}</h3>
                  <p className="mt-2 text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
