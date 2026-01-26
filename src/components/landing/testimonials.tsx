"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { useInView } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    id: 1,
    quote:
      "Apex revolutionized our workflow. Their strategic insights were a complete game-changer for our quarterly growth.",
    author: "Jian Yang",
    title: "CEO, Innovate Inc.",
    avatarId: "testimonial-avatar-1",
  },
  {
    id: 2,
    quote:
      "Working with Apex has been an absolute pleasure. Their team is professional, responsive, and truly understands our needs.",
    author: "Sarah Jones",
    title: "COO, Future Enterprises",
    avatarId: "testimonial-avatar-2",
  },
  {
    id: 3,
    quote:
      "The operational efficiencies we've gained are remarkable. I cannot recommend Apex Corporate Solutions enough.",
    author: "David Chen",
    title: "Founder, Quantum Dynamics",
    avatarId: "testimonial-avatar-3",
  },
];

export function Testimonials() {
  const getAvatar = (avatarId: string) => {
    return PlaceHolderImages.find((img) => img.id === avatarId);
  };
  const [ref, inView] = useInView({ rootMargin: "-100px 0px", once: true });

  return (
    <section 
      ref={ref}
      className={cn("w-full py-32 transition-all duration-600 ease-out", inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5")}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold tracking-tight">
            Trusted by Industry Leaders
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Don't just take our word for it. Here's what our clients have to say.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => {
            const avatar = getAvatar(testimonial.avatarId);
            return (
              <Card
                key={testimonial.id}
                className="flex flex-col bg-[#151515]/[0.6] backdrop-blur-sm border border-[#333333] transition-transform duration-300 hover:scale-105"
              >
                <CardContent className="flex flex-grow flex-col justify-between p-6">
                  <blockquote className="mb-6 flex-grow text-lg text-foreground">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center">
                    {avatar && (
                      <Image
                        src={avatar.imageUrl}
                        alt={avatar.description}
                        width={40}
                        height={40}
                        className="rounded-full"
                        data-ai-hint={avatar.imageHint}
                      />
                    )}
                    <div className="ml-4">
                      <p className="font-semibold text-foreground">
                        {testimonial.author}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
