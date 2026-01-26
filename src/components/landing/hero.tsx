"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { useInView } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/context/language-context";

export function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero-skyline");
  const [ref, inView] = useInView({ once: true });
  const { t } = useTranslation();

  return (
    <section 
      ref={ref}
      className={cn("relative w-full h-[60vh] min-h-[500px] flex items-center justify-center text-white transition-all duration-600 ease-out", inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5")}
    >
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          data-ai-hint={heroImage.imageHint}
          priority
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          {t('hero.title')}
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-200">
          {t('hero.subtitle')}
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="bg-white text-black hover:bg-white/90">
            <Link href="#contact">{t('hero.button_start')}</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white bg-transparent hover:bg-white hover:text-black text-white">
            <Link href="#services">{t('hero.button_discover')}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
