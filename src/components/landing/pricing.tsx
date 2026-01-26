"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { useInView } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import Link from "next/link";

const valueStack = [
  "Constitution Société (Unlimited)",
  "Secrétariat & Siège Social (1 An)",
  "Introduction Banques & Stripe (OFFERT)",
  "Support Français 24/7",
];

export function Pricing() {
  const [ref, inView] = useInView({ rootMargin: "-100px 0px", once: true });

  return (
    <section
      ref={ref}
      id="pricing"
      className={cn("w-full py-24 transition-all duration-600 ease-out", inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5")}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <div className="relative w-full max-w-lg rounded-2xl bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] p-8 border border-[#444444] shadow-2xl">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight">
                Un Tarif Transparent. Sans Frais Cachés.
              </h2>
            </div>
            
            <div className="my-10 text-center">
              <span className="text-6xl font-bold text-white">1 500€</span>
              <p className="mt-2 text-muted-foreground">
                Frais de gouvernement inclus.
              </p>
            </div>
            
            <div className="my-8 flex justify-center">
              <Badge className="border-yellow-400/50 bg-yellow-400/10 py-2 px-4 text-sm text-yellow-300 font-semibold">
                GARANTIE BANCAIRE : Compte ouvert ou remboursé
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
              <Link href="#contact">Vérifier mon éligibilité</Link>
            </Button>
            <p className="mt-4 text-center text-sm text-muted-foreground">
              Délai actuel de traitement : 48 heures.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
