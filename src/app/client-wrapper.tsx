"use client";

import { useTranslation } from '@/context/language-context';
import { useEffect } from 'react';

function ClientWrapper({ children }: { children: React.ReactNode }) {
  const { language, t } = useTranslation();

  useEffect(() => {
    if (document.documentElement.lang !== language) {
      document.documentElement.lang = language;
    }
    const title = t('meta.title');
    if (document.title !== title) {
      document.title = title;
    }
    const description = t('meta.description');
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription && metaDescription.getAttribute('content') !== description) {
      metaDescription.setAttribute('content', description);
    }
  }, [language, t]);

  return <>{children}</>;
}

export default ClientWrapper;
