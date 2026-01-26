"use client";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Code, ShieldCheck, TrendingUp } from "lucide-react";
import { useInView } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: <TrendingUp className="h-8 w-8 text-primary" />,
    title: "Strategic Growth Consulting",
    description:
      "Unlock your company's full potential with data-driven strategies and market analysis that deliver tangible results.",
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: "Operational Excellence",
    description:
      "Streamline processes, enhance efficiency, and build a resilient operational framework for sustainable success.",
  },
  {
    icon: <Code className="h-8 w-8 text-primary" />,
    title: "Digital Transformation",
    description:
      "Leverage cutting-edge technology to innovate, disrupt, and stay ahead of the curve in a rapidly evolving digital landscape.",
  },
];

export function Services() {
  const [ref, inView] = useInView({ rootMargin: "-100px 0px", once: true });
  return (
    <section 
      ref={ref}
      className={cn("w-full border-y border-white/10 py-32 transition-all duration-600 ease-out", inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5")}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold tracking-tight">
            A Suite of Solutions for Modern Leaders
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            We provide the expertise and support to navigate your most complex
            business challenges.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-[#151515]/[0.6] backdrop-blur-sm border border-[#333333] transition-all duration-300 hover:border-primary/50 hover:scale-105"
            >
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-2xl font-bold tracking-tight">
                  {service.title}
                </CardTitle>
                <CardDescription className="pt-2 text-base text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
