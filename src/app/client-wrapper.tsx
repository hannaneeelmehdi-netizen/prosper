"use client";

import { useTranslation } from '@/context/language-context';
import { useEffect } from 'react';

function ClientWrapper({ children }: { children: React.ReactNode }) {
  const { language, t } = useTranslation();

  useEffect(() => {
    // Update lang attribute
    if (document.documentElement.lang !== language) {
      document.documentElement.lang = language;
    }
    
    // Get translations
    const title = t('meta.title');
    const description = t('meta.description');
    const keywords = t('meta.keywords');

    // Update title
    if (document.title !== title) {
      document.title = title;
    }

    // Helper to update meta tags by selecting them via name or property
    const updateMetaTag = (nameOrProperty: string, content: string) => {
        const element = document.querySelector(`meta[name="${nameOrProperty}"]`) || document.querySelector(`meta[property="${nameOrProperty}"]`);
        if (element && element.getAttribute('content') !== content) {
            element.setAttribute('content', content);
        }
    };
    
    // Update standard meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);

    // Update Open Graph meta tags
    updateMetaTag('og:title', title);
    updateMetaTag('og:description', description);
    updateMetaTag('og:locale', language === 'en' ? 'en_US' : language === 'nl' ? 'nl_NL' : 'fr_FR');

    // Update Twitter meta tags
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);

  }, [language, t]);

  return <>{children}</>;
}

export default ClientWrapper;
