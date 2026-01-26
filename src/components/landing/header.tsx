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
    { href: "#pricing", label: "Tarifs" },
  ];

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-colors duration-300",
      scrolled ? "border-b border-border/40 bg-background/95 backdrop-blur-sm" : "bg-transparent"
    )}>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link className="flex items-center space-x-2" href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            className="h-6 w-6 fill-current"
          >
            <rect width="256" height="256" fill="none"></rect>
            <path d="M128,24,32,128l96,104,96-104Z"></path>
          </svg>
          <span className="font-bold">APEX</span>
        </Link>
        
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

        <div className="flex items-center gap-4">
            <Button asChild variant="outline">
              <Link href="/login">Espace Client</Link>
            </Button>
        </div>
      </div>
    </header>
  );
}
