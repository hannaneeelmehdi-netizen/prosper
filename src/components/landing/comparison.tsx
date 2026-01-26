"use client";

import { CheckCircle2, XCircle } from "lucide-react";
import { useInView } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/context/language-context";

const comparisonIcons = {
  hk: { icon: CheckCircle2, className: "text-green-500" },
  other: { icon: XCircle, className: "text-red-500" },
}

export function Comparison() {
  const [ref, inView] = useInView({ rootMargin: "-100px 0px", once: true });
  const { t } = useTranslation();
  const comparisonData = t('comparison.features', { returnObjects: true }) as any[];

  return (
    <section
      ref={ref}
      id="comparison"
      className={cn("w-full py-12 transition-all duration-600 ease-out bg-[#111111]", inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5")}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold tracking-tight">
            {t('comparison.title')}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            {t('comparison.subtitle')}
          </p>
        </div>
        
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl bg-[#151515]/[0.6] backdrop-blur-sm border border-[#333333] shadow-xl overflow-hidden">
            <div className="grid grid-cols-3">
              <div className="p-6 text-left font-bold text-lg">{t('comparison.feature_col')}</div>
              <div className="p-6 text-left font-bold text-lg bg-primary/10 border-x border-primary/20">{t('comparison.hk_col')}</div>
              <div className="p-6 text-left font-bold text-lg">{t('comparison.other_col')}</div>
            </div>

            {comparisonData.map((row: any, index: number) => {
              const HkIcon = comparisonIcons.hk.icon;
              const OtherIcon = comparisonIcons.other.icon;
              return(
                <div key={index} className="grid grid-cols-3 border-t border-white/10">
                  <div className="p-6 text-muted-foreground">{row.feature}</div>
                  <div className="p-6 flex items-center gap-2 bg-primary/10 border-x border-primary/20">
                    <HkIcon className={cn("h-5 w-5", comparisonIcons.hk.className)} />
                    <span className="font-semibold">{row.hk}</span>
                  </div>
                  <div className="p-6 flex items-center gap-2">
                    <OtherIcon className={cn("h-5 w-5", comparisonIcons.other.className)} />
                    <span>{row.other}</span>
                  </div>
                </div>
              )}
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
