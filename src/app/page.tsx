import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { Features } from "@/components/landing/features";
import { Roadmap } from "@/components/landing/roadmap";
import { Services } from "@/components/landing/services";
import { Comparison } from "@/components/landing/comparison";
import { Testimonials } from "@/components/landing/testimonials";
import { Expertise } from "@/components/landing/expertise";
import { CTA } from "@/components/landing/cta";
import { Contact } from "@/components/landing/contact";
import { FAQ } from "@/components/landing/faq";
import { Footer } from "@/components/landing/footer";
import { Pricing } from "@/components/landing/pricing";
import { TaxSimulator } from "@/components/landing/tax-simulator";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <TaxSimulator />
        <Roadmap />
        <Services />
        <Comparison />
        <Pricing />
        <Testimonials />
        <Expertise />
        <FAQ />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
