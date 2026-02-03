"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useInView } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { useTranslation } from "@/context/language-context";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const [ref, inView] = useInView({ rootMargin: "-100px 0px", once: true });
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [businessType, setBusinessType] = useState("");
  
  const access_key = "adf73495-876a-47e7-a13c-429b4acec7f8";
  
  const businessTypeOptions = t('contact.form.business_type_options', { returnObjects: true }) as string[];
  const revenueOptions = t('contact.form.estimated_revenue_options', { returnObjects: true }) as string[];
  const otherBusinessTypeOption = businessTypeOptions[4];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    
    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (response.ok) {
            toast({
              title: "Success!",
              description: "Your message has been sent.",
            });
            (e.target as HTMLFormElement).reset();
            setBusinessType('');
        } else {
            console.error("Submission error:", data);
            toast({
              variant: "destructive",
              title: "Uh oh! Something went wrong.",
              description: data.message || "Could not send your message.",
            });
        }
    } catch (error) {
        console.error("Submission exception:", error);
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "Something went wrong. Please try again.",
        });
    } finally {
        setIsSubmitting(false);
    }
  };

  return (
    <section 
      ref={ref}
      id="contact" 
      className={cn("w-full py-12 transition-all duration-600 ease-out bg-[#111111]", inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5")}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold tracking-tight">{t('contact.title')}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            {t('contact.subtitle')}
          </p>
        </div>
        <div className="mx-auto max-w-xl">
          <form 
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <input type="hidden" name="access_key" value={access_key} />
            <input type="hidden" name="from_name" value="Prosper Project Contact Form" />
            <input type="hidden" name="subject" value="New Eligibility Assessment from Website" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">{t('contact.form.name')}</Label>
                <Input 
                  id="name"
                  name="name"
                  placeholder={t('contact.form.name_placeholder')}
                  required 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">{t('contact.form.email')}</Label>
                <Input 
                  id="email"
                  name="email"
                  type="email"
                  placeholder={t('contact.form.email_placeholder')} 
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="business_type">{t('contact.form.business_type')}</Label>
              <Select name="business_type" required onValueChange={setBusinessType}>
                <SelectTrigger id="business_type" className="text-base md:text-sm">
                  <SelectValue placeholder={t('contact.form.business_type_placeholder')} />
                </SelectTrigger>
                <SelectContent>
                  {businessTypeOptions.map((option: string) => (
                    <SelectItem key={option} value={option}>{option}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            {businessType === otherBusinessTypeOption && (
              <div className="space-y-2 animate-in fade-in duration-300">
                <Label htmlFor="other_business_type">{t('contact.form.other_business_type')}</Label>
                <Input
                  id="other_business_type"
                  name="other_business_type"
                  placeholder={t('contact.form.other_business_type_placeholder')}
                  required
                />
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="estimated_revenue">{t('contact.form.estimated_revenue')}</Label>
              <Select name="estimated_revenue" required>
                <SelectTrigger id="estimated_revenue" className="text-base md:text-sm">
                  <SelectValue placeholder={t('contact.form.estimated_revenue_placeholder')} />
                </SelectTrigger>
                <SelectContent>
                  {revenueOptions.map((option: string) => (
                    <SelectItem key={option} value={option}>{option}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message">{t('contact.form.message')}</Label>
              <Textarea
                id="message"
                name="message"
                placeholder={t('contact.form.message_placeholder')}
                className="min-h-[120px]"
                required
              />
            </div>

            <Button 
              type="submit" 
              size="lg" 
              className="w-full relative overflow-hidden bg-gradient-to-r from-[#C5A059] to-[#A68446] text-black font-bold transition-transform duration-300 hover:scale-105"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : t('contact.form.submit_button')}
              <div className="pointer-events-none absolute inset-0 animate-shimmer bg-[linear-gradient(110deg,transparent_25%,rgba(255,255,255,0.3)_50%,transparent_75%)] bg-[length:200%_100%]" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
