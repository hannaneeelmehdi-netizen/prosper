"use client";

import { useTranslation } from "@/context/language-context";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Check } from "lucide-react";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

const FrFlag = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="15" viewBox="0 0 3 2" className="rounded-sm border border-muted-foreground/20">
    <rect width="1" height="2" fill="#0055A4"/>
    <rect x="1" width="1" height="2" fill="#FFFFFF"/>
    <rect x="2" width="1" height="2" fill="#EF4135"/>
  </svg>
);

const EnFlag = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="15" viewBox="0 0 60 30" className="rounded-sm border border-muted-foreground/20">
    <rect fill="#012169" width="60" height="30"/>
    <path stroke="#fff" strokeWidth="6" d="m0 0 60 30m0-30L0 30"/>
    <path stroke="#C8102E" strokeWidth="4" d="m0 0 60 30m0-30L0 30"/>
    <path stroke="#fff" strokeWidth="10" d="M30 0v30M0 15h60"/>
    <path stroke="#C8102E" strokeWidth="6" d="M30 0v30M0 15h60"/>
  </svg>
);

const NlFlag = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="15" viewBox="0 0 9 6" className="rounded-sm border border-muted-foreground/20">
        <rect width="9" height="6" fill="#21468B"/>
        <rect width="9" height="4" fill="#FFFFFF"/>
        <rect width="9" height="2" fill="#AE1C28"/>
    </svg>
);


export function LanguageSwitcher() {
  const { language, setLanguage } = useTranslation();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const languages: { code: 'fr' | 'en' | 'nl'; name: string; flag: React.ReactNode; }[] = [
    { code: 'fr', name: 'Français', flag: <FrFlag /> },
    { code: 'en', name: 'English', flag: <EnFlag /> },
    { code: 'nl', name: 'Nederlands', flag: <NlFlag /> },
  ];

  const selectedLanguage = languages.find(lang => lang.code === language);

  if (!isMounted) {
    return <Skeleton className="h-9 w-24" />;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="flex items-center gap-2"
          aria-label="Change language"
        >
          {selectedLanguage?.flag}
          <span className="font-medium uppercase">{language}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[10rem]">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className="cursor-pointer flex items-center justify-between"
          >
            <div className="flex items-center gap-2">
              {lang.flag}
              <span>{lang.name}</span>
            </div>
            {language === lang.code ? (
              <Check className="h-4 w-4" />
            ) : (
              <span className="text-muted-foreground text-xs">{lang.code.toUpperCase()}</span>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
