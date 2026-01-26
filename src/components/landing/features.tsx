"use client";

import { Shield, CreditCard, Clock, Lock } from "lucide-react";
import { useInView } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/context/language-context";

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

const icons = [
  <Shield className="h-6 w-6 text-primary" />,
  <CreditCard className="h-6 w-6 text-primary" />,
  <Clock className="h-6 w-6 text-primary" />,
  <Lock className="h-6 w-6 text-primary" />,
];

export function Features() {
  const [ref, inView] = useInView({ rootMargin: "-100px 0px", once: true });
  const { t } = useTranslation();
  const featuresData = t('features.cards', { returnObjects: true }) as any[];


  return (
    <section
      ref={ref}
      id="features"
      className={cn("w-full py-12 transition-all duration-600 ease-out border-t border-white/10", inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5")}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold tracking-tight">
            {t('features.title')}
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            {t('features.subtitle')}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuresData.map((feature: any, index: number) => (
            <FeatureCard
              key={index}
              icon={icons[index]}
              category={feature.category}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
