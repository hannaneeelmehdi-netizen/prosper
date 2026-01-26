import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Code, ShieldCheck, TrendingUp } from "lucide-react";

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
  return (
    <section className="w-full border-y bg-card py-24">
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
              className="border-border/60 bg-background transition-colors duration-300 hover:border-primary/50"
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
