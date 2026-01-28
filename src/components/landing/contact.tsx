"use client";

import { useState } from "react";
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
import { useTranslation } from "@/context/language-context";
import { Label } from "@/components/ui/label";

export function Contact() {
  const [ref, inView] = useInView({ rootMargin: "-100px 0px", once: true });
  const { t } = useTranslation();
  
  const [businessType, setBusinessType] = useState('');
  const businessTypeOptions = ['E-commerce', 'Consulting', 'SaaS', 'Other'];
  const otherOptionValue = 'Other';
  const isOtherSelected = businessType === otherOptionValue;

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
              <Select name="business_type" onValueChange={setBusinessType} required>
                <SelectTrigger id="business_type">
                  <SelectValue placeholder="Select your business type" />
                </SelectTrigger>
                <SelectContent>
                  {businessTypeOptions.map((option) => (
                    <SelectItem key={option} value={option}>{option}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {isOtherSelected && (
              <div className="space-y-2">
                <Label htmlFor="other_business_type">Please specify</Label>
                <Input id="other_business_type" name="other_business_type" placeholder="e.g. Holding company" required />
              </div>
            )}

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
