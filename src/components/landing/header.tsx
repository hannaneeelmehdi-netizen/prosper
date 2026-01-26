"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

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
    { href: "#features", label: "Avantages" },
    { href: "#roadmap", label: "Processus" },
    { href: "#comparison", label: "Comparatif" },
  ];

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      scrolled ? "bg-black/70 backdrop-blur-md" : "bg-transparent"
    )}>
      <div className="mx-auto grid h-16 max-w-6xl grid-cols-3 items-center px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-start">
          {/* REPLACE WITH LOGO.PNG */}
          <Link className="flex items-baseline space-x-2 text-[#3B82F6]" href="/">
            <span className="text-xl font-bold">PROSPER</span>
            <span className="text-xl font-light">PROJECT</span>
          </Link>
        </div>
        
        <nav className="hidden items-center justify-center space-x-8 md:flex">
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

        <div className="flex items-center justify-end">
            <Button asChild variant="outline">
              <Link href="/login">Espace Client</Link>
            </Button>
        </div>
      </div>
    </header>
  );
}
