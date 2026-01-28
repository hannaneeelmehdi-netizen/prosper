"use client";

import { useEffect, Suspense } from "react";
import { useSearchParams } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useInView } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

function ContactForm() {
  const [ref, inView] = useInView({ rootMargin: "-100px 0px", once: true });
  const searchParams = useSearchParams();
  const { toast } = useToast();

  useEffect(() => {
    if (searchParams.get('success') === 'true') {
      toast({
        title: "Thank You!",
        description: "Your assessment has been submitted successfully.",
      });
    }
  }, [searchParams, toast]);

  return (
    <section 
      ref={ref}
      id="contact" 
      className={cn("w-full py-12 transition-all duration-600 ease-out bg-[#111111]", inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5")}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold tracking-tight">Free Eligibility Assessment</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            See if Hong Kong is the right fit for your business project.
          </p>
        </div>
        <div className="mx-auto max-w-xl">
          <form 
            action="https://formsubmit.co/hannaneeelmehdi@gmail.com" 
            method="POST" 
            className="space-y-6"
          >
            {/* FormSubmit Hidden Inputs */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="/?success=true" />

            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" name="name" placeholder="Your Name" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Business Email</Label>
              <Input id="email" name="email" type="email" placeholder="your.email@company.com" required />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="business_type">Business Type</Label>
              <Select name="business_type" required>
                <SelectTrigger id="business_type">
                  <SelectValue placeholder="Select your business type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="E-commerce">E-commerce</SelectItem>
                  <SelectItem value="Consulting">Consulting</SelectItem>
                  <SelectItem value="SaaS">SaaS</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="revenue">Annual Revenue</Label>
              <Select name="revenue" required>
                <SelectTrigger id="revenue">
                  <SelectValue placeholder="Select your estimated revenue" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="< €100k">&lt; €100k</SelectItem>
                  <SelectItem value="€100k-€500k">€100k-€500k</SelectItem>
                  <SelectItem value="> €500k">&gt; €500k</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell us how we can help"
                className="min-h-[120px]"
                required
              />
            </div>

            <Button type="submit" size="lg" className="w-full relative overflow-hidden bg-gradient-to-r from-[#C5A059] to-[#A68446] text-black font-bold transition-transform duration-300 hover:scale-105">
              Submit My Assessment
              <div className="pointer-events-none absolute inset-0 animate-shimmer bg-[linear-gradient(110deg,transparent_25%,rgba(255,255,255,0.3)_50%,transparent_75%)] bg-[length:200%_100%]" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

// useSearchParams requires a Suspense boundary.
export function Contact() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ContactForm />
    </Suspense>
  )
}
