"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Lock } from 'lucide-react';
import { useTranslation } from '@/context/language-context';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#050505] border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 xl:gap-12">
          {/* Column 1: Identity */}
          <div className="space-y-4">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Prosper Project Logo"
                width={479}
                height={108}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-sm text-zinc-400">
              {t('footer.tagline')}
            </p>
            <div className="pt-4 text-xs text-zinc-500 space-y-1">
              <p>{t('footer.copyright', { year: new Date().getFullYear() })}</p>
              <p>Hong Kong CR No. 3192345</p>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="text-sm font-semibold tracking-widest uppercase text-white">{t('footer.nav_header')}</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="#roadmap" className="text-sm text-zinc-400 hover:text-white transition-colors">{t('footer.nav_links.process')}</Link></li>
              <li><Link href="#pricing" className="text-sm text-zinc-400 hover:text-white transition-colors">{t('footer.nav_links.pricing')}</Link></li>
              <li><Link href="#simulator" className="text-sm text-zinc-400 hover:text-white transition-colors">{t('footer.nav_links.simulator')}</Link></li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h3 className="text-sm font-semibold tracking-widest uppercase text-white">{t('footer.legal_header')}</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/legal" className="text-sm text-zinc-400 hover:text-white transition-colors">{t('footer.legal_links.mentions')}</Link></li>
              <li><Link href="/terms" className="text-sm text-zinc-400 hover:text-white transition-colors">{t('footer.legal_links.cgv')}</Link></li>
              <li><Link href="/privacy" className="text-sm text-zinc-400 hover:text-white transition-colors">{t('footer.legal_links.privacy')}</Link></li>
              <li><Link href="/cookies" className="text-sm text-zinc-400 hover:text-white transition-colors">{t('footer.legal_links.cookies')}</Link></li>
              <li><Link href="/disclaimer" className="text-sm text-zinc-400 hover:text-white transition-colors">{t('footer.legal_links.disclaimer')}</Link></li>
            </ul>
          </div>
          
          {/* Column 4: Contact */}
          <div>
            <h3 className="text-sm font-semibold tracking-widest uppercase text-white">{t('footer.contact_header')}</h3>
            <div className="mt-4 space-y-2 text-sm text-zinc-400">
              <p>Tower 535, 535 Jaffe Road,<br/>Causeway Bay, Hong Kong</p>
              <p><a href="mailto:leaouer@gmail.com" className="hover:text-white transition-colors">leaouer@gmail.com</a></p>
              <p>{t('footer.contact_support')}</p>
            </div>
          </div>
        </div>

        {/* Security Bar */}
        <div className="mt-16 border-t border-white/10 pt-8 sm:flex sm:items-center sm:justify-start">
          <div className="flex items-center space-x-2">
            <Lock className="h-4 w-4 text-zinc-500" />
            <p className="text-xs text-zinc-500">{t('footer.security_text')}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
