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
import { useToast } from "@/hooks/use-toast";
import { useInView } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/context/language-context";
import { useMemo } from "react";

export function Contact() {
  const { toast } = useToast();
  const [ref, inView] = useInView({ rootMargin: "-100px 0px", once: true });
  const { t } = useTranslation();

  const formSchema = useMemo(() => z.object({
    name: z.string().min(2, {
      message: t('contact.form.name_error'),
    }),
    email: z.string().email({
      message: t('contact.form.email_error'),
    }),
    message: z.string().min(10, {
      message: t('contact.form.message_error'),
    }),
  }), [t]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const subject = encodeURIComponent(`${t('contact.form.subject_prefix')} ${values.name}`);
    const body = encodeURIComponent(`Nom: ${values.name}\nEmail: ${values.email}\n\nMessage:\n${values.message}`);
    
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
              <Button type="submit" className="w-full" size="lg">
                {t('contact.form.submit_button')}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
