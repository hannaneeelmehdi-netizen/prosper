"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/context/language-context";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#features", label: t('header.nav.benefits') },
    { href: "#roadmap", label: t('header.nav.process') },
    { href: "#pricing", label: t('header.nav.pricing') },
    { href: "#comparison", label: t('header.nav.comparison') },
  ];

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      scrolled ? "bg-black/70 backdrop-blur-md" : "bg-transparent"
    )}>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Prosper Project Logo"
              width={479}
              height={108}
              className="h-10 w-auto"
            />
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4">
          <nav className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <LanguageSwitcher />
          <Button
            asChild
            size="sm"
            className="relative overflow-hidden bg-gradient-to-r from-[#C5A059] to-[#A68446] text-black font-bold transition-transform duration-300 hover:scale-105"
          >
            <Link href="#contact">
                {t('pricing.cta_button')}
                <div className="pointer-events-none absolute inset-0 animate-shimmer bg-[linear-gradient(110deg,transparent_25%,rgba(255,255,255,0.3)_50%,transparent_75%)] bg-[length:200%_100%]" />
            </Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher />
          <Button
            asChild
            className="relative h-8 px-2 text-xs overflow-hidden bg-gradient-to-r from-[#C5A059] to-[#A68446] text-black font-bold transition-transform duration-300 hover:scale-105"
          >
            <Link href="#contact">
              {t('header.cta_mobile')}
              <div className="pointer-events-none absolute inset-0 animate-shimmer bg-[linear-gradient(110deg,transparent_25%,rgba(255,255,255,0.3)_50%,transparent_75%)] bg-[length:200%_100%]" />
            </Link>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-black/90 backdrop-blur-md border-l-white/10 p-0">
              <div className="flex h-full flex-col">
                <div className="p-4 border-b border-white/10">
                  <SheetClose asChild>
                    <Link href="/">
                      <Image
                        src="/logo.png"
                        alt="Prosper Project Logo"
                        width={479}
                        height={108}
                        className="h-8 w-auto"
                      />
                    </Link>
                  </SheetClose>
                </div>
                <nav className="flex flex-col gap-4 p-4 mt-4">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.href}>
                      <Link
                        href={link.href}
                        className="text-lg font-medium text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
