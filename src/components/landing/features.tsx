"use client";

import { Shield, CreditCard, Clock, Lock } from "lucide-react";
import { useInView } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

const FeatureCard = ({
  icon,
  category,
  title,
  description,
  className,
}: {
  icon: React.ReactNode;
  category: string;
  title: string;
  description: string;
  className?: string;
}) => (
  <div
    className={cn(
      `group rounded-2xl p-6 bg-[#151515]/[0.6] backdrop-blur-sm border border-[#333333] shadow-xl flex flex-col h-full transition-all duration-300 hover:scale-[1.02] hover:border-white`,
      className
    )}
  >
    <div className="mb-4">
      <div className="w-fit bg-primary/10 p-2 rounded-lg mb-4 transition-shadow duration-300 group-hover:shadow-lg group-hover:shadow-primary/50">
        {icon}
      </div>
      <p className="text-sm uppercase text-muted-foreground tracking-wider">
        {category}
      </p>
      <h3 className="text-xl font-bold mt-1">{title}</h3>
    </div>
    <p className="text-muted-foreground text-base">{description}</p>
  </div>
);

export function Features() {
  const [ref, inView] = useInView({ rootMargin: "-100px 0px", once: true });
  return (
    <section
      ref={ref}
      id="features"
      className={cn("w-full py-32 transition-all duration-600 ease-out", inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5")}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold tracking-tight">
            Une fondation solide pour votre entreprise mondiale
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            Découvrez les piliers qui font de Hong Kong le choix stratégique
            pour les entrepreneurs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6">
          <div className="md:col-span-2 relative">
            <div className="absolute -inset-4 bg-[radial-gradient(ellipse_at_center,_rgba(29,78,216,0.15),_transparent_80%)] blur-3xl -z-10" />
            <FeatureCard
              icon={<Shield className="h-6 w-6 text-primary" />}
              category="Sérénité Fiscale"
              title="0% Fiscalité"
              description="Profitez d'une exonération totale d'impôts sur les bénéfices, les dividendes et les plus-values réalisés hors de Hong Kong. Une structure fiscale simple et avantageuse pour maximiser votre rentabilité."
            />
          </div>
          <FeatureCard
            className="md:row-span-2"
            icon={<CreditCard className="h-6 w-6 text-primary" />}
            category="Accès Global"
            title="Banking International"
            description="Ouvrez des comptes bancaires multi-devises avec des institutions financières de renommée mondiale. Gérez vos fonds et effectuez des transactions internationales sans friction, avec des cartes de débit et de crédit internationales."
          />
          <FeatureCard
            icon={<Clock className="h-6 w-6 text-primary" />}
            category="Efficacité"
            title="Rapidité 48h"
            description="Votre société est enregistrée en ligne en moins de 48 heures. Un processus 100% digitalisé pour un lancement rapide de vos activités."
          />
          <FeatureCard
            icon={<Lock className="h-6 w-6 text-primary" />}
            category="Protection"
            title="Confidentialité"
            description="L'anonymat des actionnaires et des directeurs est garanti par la loi. Protégez votre patrimoine et votre vie privée avec une discrétion absolue."
          />
        </div>
      </div>
    </section>
  );
}
