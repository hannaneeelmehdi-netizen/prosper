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

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export function Contact() {
  const { toast } = useToast();
  const [ref, inView] = useInView({ rootMargin: "-100px 0px", once: true });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const subject = encodeURIComponent(`Contact Form Submission from ${values.name}`);
    const body = encodeURIComponent(`Name: ${values.name}\nEmail: ${values.email}\n\nMessage:\n${values.message}`);
    
    // In a real app, you would send this to a backend. For this static site, we'll use mailto.
    window.location.href = `mailto:contact@example.com?subject=${subject}&body=${body}`;

    toast({
      title: "Opening your email client",
      description: "Please complete and send the email.",
    });
    form.reset();
  }

  return (
    <section 
      ref={ref}
      id="contact" 
      className={cn("w-full py-32 transition-all duration-600 ease-out", inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5")}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold tracking-tight">Contact Us</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Have a question or want to work together? Drop us a line.
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
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Name" {...field} />
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
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="your.email@company.com" {...field} />
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
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us how we can help"
                        className="min-h-[120px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" size="lg">
                Send Message
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
