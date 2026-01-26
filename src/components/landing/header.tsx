"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/context/language-context";
import { LanguageSwitcher } from "@/components/ui/language-switcher";

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
          {/* REPLACE WITH LOGO.PNG */}
          <Link className="flex items-baseline space-x-2 text-[#3B82F6]" href="/">
            <span className="text-xl font-bold">PROSPER</span>
            <span className="text-xl font-light">PROJECT</span>
          </Link>
        </div>
        
        <div className="flex items-center gap-4">
          <nav className="hidden items-center space-x-8 md:flex">
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
        </div>
      </div>
    </header>
  );
}
