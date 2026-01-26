"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useInView } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    id: 1,
    quote:
      "Apex a révolutionné notre flux de travail. Leurs connaissances stratégiques ont complètement changé la donne pour notre croissance trimestrielle.",
    author: "Jian Yang",
    title: "PDG, Innovate Inc.",
  },
  {
    id: 2,
    quote:
      "Travailler avec Apex a été un plaisir absolu. Leur équipe est professionnelle, réactive et comprend vraiment nos besoins.",
    author: "Sarah Jones",
    title: "Directrice des opérations, Future Enterprises",
  },
  {
    id: 3,
    quote:
      "Les gains d'efficacité opérationnelle que nous avons obtenus sont remarquables. Je ne saurais trop recommander Apex Corporate Solutions.",
    author: "David Chen",
    title: "Fondateur, Quantum Dynamics",
  },
];

export function Testimonials() {
  const [ref, inView] = useInView({ rootMargin: "-100px 0px", once: true });

  return (
    <section 
      ref={ref}
      className={cn("w-full py-24 transition-all duration-600 ease-out border-t border-white/10", inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5")}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold tracking-tight">
            Approuvé par les leaders de l'industrie
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Ne nous croyez pas sur parole. Voici ce que nos clients ont à dire.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="flex flex-col bg-[#151515]/[0.6] backdrop-blur-sm border border-[#333333] transition-transform duration-300 hover:scale-105"
            >
              <CardContent className="flex flex-grow flex-col justify-between p-6">
                <blockquote className="mb-6 flex-grow text-lg text-foreground">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.title}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
