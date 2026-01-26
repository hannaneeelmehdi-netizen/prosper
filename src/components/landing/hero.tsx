import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <section className="w-full py-24 sm:py-32 md:py-40">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          The New Standard in Corporate Solutions
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
          Apex delivers unparalleled strategic solutions to drive growth,
          optimize performance, and secure your market leadership.
        </p>
        <div className="mt-10 flex justify-center gap-x-6">
          <Button size="lg">Request a Demo</Button>
          <Button size="lg" variant="outline">
            Explore Services
          </Button>
        </div>
      </div>
    </section>
  );
}
