"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useInView } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/context/language-context";
import { useMemo } from "react";

export function Contact() {
  const { toast } = useToast();
  const [ref, inView] = useInView({ rootMargin: "-100px 0px", once: true });
  const { t } = useTranslation();

  const businessTypeOptions = t('contact.form.business_type_options', { returnObjects: true }) as string[];
  const estimatedRevenueOptions = t('contact.form.estimated_revenue_options', { returnObjects: true }) as string[];
  
  const otherOptionValue = businessTypeOptions[3] || 'Other';

  const formSchema = useMemo(() => z.object({
    name: z.string().min(2, {
      message: t('contact.form.name_error'),
    }),
    email: z.string().email({
      message: t('contact.form.email_error'),
    }),
    businessType: z.string().min(1, { message: t('contact.form.business_type_error') }),
    otherBusinessType: z.string().optional(),
    estimatedRevenue: z.string().min(1, { message: t('contact.form.estimated_revenue_error') }),
    message: z.string().min(10, {
      message: t('contact.form.message_error'),
    }),
  }).refine((data) => {
    if (data.businessType === otherOptionValue) {
        return data.otherBusinessType && data.otherBusinessType.length >= 3;
    }
    return true;
  }, {
      message: t('contact.form.other_business_type_error'),
      path: ['otherBusinessType'],
  }), [t, otherOptionValue]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      businessType: "",
      otherBusinessType: "",
      estimatedRevenue: "",
      message: "",
    },
  });

  const businessTypeValue = form.watch("businessType");
  const isOtherSelected = businessTypeValue === otherOptionValue;

  function onSubmit(values: z.infer<typeof formSchema>) {
    const subject = encodeURIComponent(`${t('contact.form.subject_prefix')} ${values.name}`);
    const bodyLabels = t('contact.form.body_labels', { returnObjects: true }) as Record<string, string>;
    
    const bodyParts = [
        `${bodyLabels.name}: ${values.name}`,
        `${bodyLabels.email}: ${values.email}`,
        `${bodyLabels.business_type}: ${values.businessType}`,
    ];

    if (values.businessType === otherOptionValue && values.otherBusinessType) {
        bodyParts.push(`${bodyLabels.other_business_type}: ${values.otherBusinessType}`);
    }
    
    bodyParts.push(`${bodyLabels.estimated_revenue}: ${values.estimatedRevenue}`);
    bodyParts.push(`\n${bodyLabels.message}:\n${values.message}`);

    const body = encodeURIComponent(bodyParts.join('\n'));
    
    window.location.href = `mailto:leaouer@gmail.com?subject=${subject}&body=${body}`;

    toast({
      title: t('contact.form.toast_title'),
      description: t('contact.form.toast_description'),
    });
    form.reset();
  }

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
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('contact.form.name')}</FormLabel>
                    <FormControl>
                      <Input placeholder={t('contact.form.name_placeholder')} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('contact.form.email')}</FormLabel>
                    <FormControl>
                      <Input placeholder={t('contact.form.email_placeholder')} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="businessType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('contact.form.business_type')}</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder={t('contact.form.business_type_placeholder')} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {businessTypeOptions.map((option) => (
                          <SelectItem key={option} value={option}>{option}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {isOtherSelected && (
                <FormField
                  control={form.control}
                  name="otherBusinessType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('contact.form.other_business_type')}</FormLabel>
                      <FormControl>
                        <Input placeholder={t('contact.form.other_business_type_placeholder')} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}
              <FormField
                control={form.control}
                name="estimatedRevenue"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('contact.form.estimated_revenue')}</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder={t('contact.form.estimated_revenue_placeholder')} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {estimatedRevenueOptions.map((option) => (
                          <SelectItem key={option} value={option}>{option}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('contact.form.message')}</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder={t('contact.form.message_placeholder')}
                        className="min-h-[120px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" size="lg" className="w-full relative overflow-hidden bg-gradient-to-r from-[#C5A059] to-[#A68446] text-black font-bold transition-transform duration-300 hover:scale-105">
                {t('contact.form.submit_button')}
                <div className="pointer-events-none absolute inset-0 animate-shimmer bg-[linear-gradient(110deg,transparent_25%,rgba(255,255,255,0.3)_50%,transparent_75%)] bg-[length:200%_100%]" />
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
