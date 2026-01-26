"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { useInView } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

export function Expertise() {
  const expertiseImage = PlaceHolderImages.find((img) => img.id === "expertise-team");
  const [ref, inView] = useInView({ rootMargin: "-100px 0px", once: true });

  return (
    <section
      ref={ref}
      id="expertise"
      className={cn("w-full py-32 transition-all duration-600 ease-out border-t border-white/10", inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5")}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
         <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold tracking-tight">Notre Expertise</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-2xl">
            {expertiseImage && (
              <Image
                src={expertiseImage.imageUrl}
                alt={expertiseImage.description}
                fill
                className="object-cover grayscale"
                data-ai-hint={expertiseImage.imageHint}
              />
            )}
          </div>
          <div className="space-y-6">
            <p className="text-xl md:text-2xl font-light text-muted-foreground leading-relaxed">
              Fondé par des experts fiscaux et juridiques, Apex simplifie l'accès à l'Asie pour les entrepreneurs francophones.
            </p>
            <div className="pt-4">
              <p className="font-serif text-lg italic text-foreground/80">— The Apex Team</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
