"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

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

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-colors duration-300",
      scrolled ? "border-b border-border/40 bg-background/95 backdrop-blur-sm" : "bg-transparent"
    )}>
      <div className="mx-auto flex h-14 max-w-6xl items-center px-4 sm:px-6 lg:px-8">
        <div className="flex flex-1 items-center justify-start">
          <Link className="flex items-center space-x-2" href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              className="h-6 w-6 fill-current"
            >
              <rect width="256" height="256" fill="none"></rect>
              <path d="M128,24,32,128l96,104,96-104Z"></path>
            </svg>
            <span className="font-bold">Apex</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
