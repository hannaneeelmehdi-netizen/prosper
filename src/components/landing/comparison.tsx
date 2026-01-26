"use client";

import { CheckCircle2, XCircle } from "lucide-react";
import { useInView } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

const comparisonData = [
  {
    feature: "Impôt sur les bénéfices",
    hk: { value: "0%", icon: CheckCircle2, className: "text-green-500" },
    other: { value: "25%", icon: XCircle, className: "text-red-500" },
  },
  {
    feature: "Gestion Comptable",
    hk: { value: "Simple", icon: CheckCircle2, className: "text-green-500" },
    other: { value: "Complexe", icon: XCircle, className: "text-red-500" },
  },
  {
    feature: "Anonymat",
    hk: { value: "Oui", icon: CheckCircle2, className: "text-green-500" },
    other: { value: "Non", icon: XCircle, className: "text-red-500" },
  },
];

export function Comparison() {
  const [ref, inView] = useInView({ rootMargin: "-100px 0px", once: true });

  return (
    <section
      ref={ref}
      id="comparison"
      className={cn("w-full py-24 transition-all duration-600 ease-out bg-[#111111]", inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5")}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold tracking-tight">
            Une Décision Stratégique Claire
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Comparez et comprenez pourquoi Hong Kong est le choix privilégié des entrepreneurs modernes.
          </p>
        </div>
        
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl bg-[#151515]/[0.6] backdrop-blur-sm border border-[#333333] shadow-xl overflow-hidden">
            <div className="grid grid-cols-3">
              <div className="p-6 text-left font-bold text-lg">Caractéristique</div>
              <div className="p-6 text-left font-bold text-lg bg-primary/10 border-x border-primary/20">Hong Kong</div>
              <div className="p-6 text-left font-bold text-lg">France / LLC (USA)</div>
            </div>

            {comparisonData.map((row, index) => (
              <div key={index} className="grid grid-cols-3 border-t border-white/10">
                <div className="p-6 text-muted-foreground">{row.feature}</div>
                <div className="p-6 flex items-center gap-2 bg-primary/10 border-x border-primary/20">
                  <row.hk.icon className={cn("h-5 w-5", row.hk.className)} />
                  <span className="font-semibold">{row.hk.value}</span>
                </div>
                <div className="p-6 flex items-center gap-2">
                  <row.other.icon className={cn("h-5 w-5", row.other.className)} />
                  <span>{row.other.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
