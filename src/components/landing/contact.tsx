"use client";

import { useState, FormEvent } from "react";
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
import { useFirestore } from "@/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { errorEmitter } from "@/firebase/error-emitter";
import { FirestorePermissionError } from "@/firebase/errors";
import { Loader2 } from "lucide-react";

export function Contact() {
  const [ref, inView] = useInView({ rootMargin: "-100px 0px", once: true });
  const { toast } = useToast();
  const firestore = useFirestore();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [revenue, setRevenue] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (!firestore) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Database not available. Please try again later.",
      });
      return;
    }

    if (!name || !email || !businessType || !revenue || !message) {
      toast({
        variant: "destructive",
        title: "Incomplete Form",
        description: "Please fill out all required fields before submitting.",
      });
      return;
    }
    
    setLoading(true);

    const contactData = {
      name,
      email,
      businessType,
      revenue,
      message,
      createdAt: serverTimestamp(),
    };

    const contactsCollection = collection(firestore, 'contacts');

    addDoc(contactsCollection, contactData)
      .then(() => {
        toast({
          title: "Assessment Submitted",
          description: "Thank you! We'll be in touch soon.",
        });
        setName('');
        setEmail('');
        setBusinessType('');
        setRevenue('');
        setMessage('');
      })
      .catch((serverError) => {
        const permissionError = new FirestorePermissionError({
          path: contactsCollection.path,
          operation: 'create',
          requestResourceData: contactData,
        });
        errorEmitter.emit('permission-error', permissionError);
      })
      .finally(() => {
        setLoading(false);
      });
  };

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
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input 
                id="name" 
                name="name" 
                placeholder="Your Name" 
                required 
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={loading}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Business Email</Label>
              <Input 
                id="email" 
                name="email" 
                type="email" 
                placeholder="your.email@company.com" 
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="business_type">Business Type</Label>
              <Select 
                name="business_type" 
                required 
                onValueChange={setBusinessType}
                value={businessType}
                disabled={loading}
              >
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
              <Select 
                name="revenue" 
                required
                onValueChange={setRevenue}
                value={revenue}
                disabled={loading}
              >
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
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                disabled={loading}
              />
            </div>

            <Button type="submit" size="lg" className="w-full relative overflow-hidden bg-gradient-to-r from-[#C5A059] to-[#A68446] text-black font-bold transition-transform duration-300 hover:scale-105" disabled={loading}>
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Submit My Assessment
              <div className="pointer-events-none absolute inset-0 animate-shimmer bg-[linear-gradient(110deg,transparent_25%,rgba(255,255,255,0.3)_50%,transparent_75%)] bg-[length:200%_100%]" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
