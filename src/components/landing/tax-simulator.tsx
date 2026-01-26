"use client";

import * as React from "react";
import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { useInView } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/context/language-context";

export function TaxSimulator() {
  const [ref, inView] = useInView({ rootMargin: "-100px 0px", once: true });
  const [benefit, setBenefit] = useState(80000);
  const { t, language } = useTranslation();

  const taxEurope = benefit * 0.25;
  const savings = taxEurope; // In HK, tax is 0

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat(language, {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <section
      ref={ref}
      id="simulator"
      className={cn(
        "w-full py-12 transition-all duration-600 ease-out bg-[#111111]",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      )}
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold tracking-tight">
            {t('tax_simulator.title')}
          </h2>
        </div>
        <div className="rounded-2xl bg-[#151515]/[0.6] backdrop-blur-sm border border-[#333333] shadow-xl p-8 md:p-12">
          <div className="space-y-8">
            <div>
              <div className="flex justify-between items-center mb-4">
                <label htmlFor="benefit-slider" className="font-medium text-lg text-muted-foreground">
                  {t('tax_simulator.slider_label')}
                </label>
                <span className="text-2xl font-bold text-white">
                  {formatCurrency(benefit)}
                </span>
              </div>
              <Slider
                id="benefit-slider"
                defaultValue={[80000]}
                min={10000}
                max={500000}
                step={5000}
                onValueChange={(value) => setBenefit(value[0])}
                className="[&_[role=slider]]:bg-white [&_[role=slider]]:border-0 [&_[role=slider]]:shadow-lg [&>span>span]:bg-primary [&>span]:bg-gray-800"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
              <div className="text-center">
                <h3 className="font-semibold text-muted-foreground mb-2">{t('tax_simulator.tax_europe_label')}</h3>
                <p className="text-4xl font-bold text-red-500">
                  - {formatCurrency(taxEurope)}
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-muted-foreground mb-2">{t('tax_simulator.tax_hk_label')}</h3>
                <p className="text-4xl font-bold text-green-500">
                  {formatCurrency(0)}
                </p>
              </div>
            </div>
            
            <div className="text-center pt-6 bg-black/20 rounded-lg p-8 mt-4">
                <h3 className="text-xl text-muted-foreground mb-4">{t('tax_simulator.savings_label')}</h3>
                <p className="text-5xl font-bold text-white" style={{ textShadow: '0 0 15px #FBBF24' }}>
                    + {formatCurrency(savings)}
                </p>
                {savings > 1500 && (
                  <p className="mt-4 text-sm text-yellow-400 font-semibold">
                    {t('tax_simulator.roi_text')}
                  </p>
                )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
