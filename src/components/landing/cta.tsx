import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CTA() {
  return (
    <section className="w-full border-y border-white/10 py-32">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold tracking-tight">
          Ready to Redefine Your Success?
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Partner with Apex and transform your business challenges into growth
          opportunities. Let's build the future, together.
        </p>
        <div className="mt-8">
          <Button size="lg" asChild>
            <Link href="#contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
