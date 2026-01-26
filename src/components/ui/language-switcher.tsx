"use client";

import { Globe } from "lucide-react";
import { useTranslation } from "@/context/language-context";
import { Button } from "@/components/ui/button";

export function LanguageSwitcher() {
  const { language, setLanguage } = useTranslation();

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr');
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
      aria-label={`Switch to ${language === 'fr' ? 'English' : 'Français'}`}
    >
      <Globe className="h-4 w-4" />
      <span className="font-medium uppercase">{language}</span>
    </Button>
  );
}
