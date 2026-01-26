import Link from 'next/link';
import { Lock } from 'lucide-react';

const paymentIcons = {
  visa: (
    <svg width="38" height="24" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" className="fill-current">
      <path d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z" opacity=".07"/>
      <path d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32" fill="#FFF"/>
      <path d="M21.1 8.2h-2.1c-.2 0-.4.1-.5.3l-2.4 6.7h2.2c0 0 .1-.3.1-.3l.3-1h2.1l.2 1c0 0 .1.3.1.3h2.1L21.6 8.5c-.1-.2-.3-.3-.5-.3zm-1.1 4l.6-1.8.6 1.8h-1.2zm-5-4h-2.2c-.3 0-.5.2-.5.5v6.5c0 .3.2.5.5.5h2.2c.3 0 .5-.2.5-.5V8.7c0-.3-.2-.5-.5-.5zm-2.6 5.2h-1.3l.3-4.4h1.3v4.4zm.1-5.2h2.2v-.9h-2.2v.9zm-2.5-.9c0-.3.2-.5.5-.5h1.3v.9h-1.3c-.3 0-.5-.2-.5-.5z" fill="#01579B"/>
      <path d="M12.9 8.2H9.2c-.4 0-.6.3-.6.6v6.3c0 .3.2.6.6.6h3.6c.4 0 .6-.3.6-.6V8.8c0-.3-.2-.6-.5-.6zM11.6 14c-.3 0-.5-.2-.5-.5s.2-.5.5-.5.5.2.5.5-.2.5-.5.5zm.6-1.7H11c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h1.2c.3 0 .5.2.5.5s-.2.5-.5.5z" fill="#01579B"/>
      <path d="M32.1 8.2c-1.1 0-2.1.4-2.8 1.1l.6.7c.6-.6 1.4-.9 2.2-.9.9 0 1.6.5 1.6 1.2 0 .5-.4 1-1.3 1.3l-.8.2c-1.3.4-2.2 1-2.2 2.2 0 .8.5 1.5 1.3 1.8v-1.1c-.4-.2-.7-.5-.7-.9 0-.3.2-.6.7-.8l.8-.2c1.3-.4 2.3-.9 2.3-2.3 0-1.4-1.1-2.5-2.8-2.5z" fill="#01579B"/>
      <path d="M35.1 12.4l-2.6-4.2h-1.8v7h2.2v-3.7l2.5 3.7h1.6v-7h-1.9z" fill="#01579B"/>
    </svg>
  ),
  mastercard: (
    <svg width="38" height="24" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" className="fill-current">
      <path d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z" opacity=".07"/>
      <path d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32" fill="#FFF"/>
      <circle fill="#EB001B" cx="15" cy="12" r="7"/>
      <circle fill="#F79E1B" cx="23" cy="12" r="7"/>
      <path d="M22 12c0 4.1-1.9 7.6-4.6 9.8 3.5-1.4 6-4.8 6-8.8 0-4.1-2.5-7.5-6-8.8C20.1 4.4 22 7.9 22 12z" fill="#FF5F00"/>
    </svg>
  ),
  amex: (
    <svg width="38" height="24" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" className="fill-current">
        <path d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z" opacity=".07"/>
        <path d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32" fill="#006FCF"/>
        <path d="M11 15H9v2H7v-2H5v-2h2V9h2v4h2v2zm6.6-4.1c0-.4.3-.7.7-.7h2.4c.4 0 .7.3.7.7v.9c0 .4-.3.7-.7.7h-2.4c-.4 0-.7-.3-.7-.7v-.9zm.4 2c0-.4.3-.7.7-.7h2.4c.4 0 .7.3.7.7v.9c0 .4-.3.7-.7.7h-2.4c-.4 0-.7-.3-.7-.7v-.9zm-.4 2.1c0-.4.3-.7.7-.7h2.4c.4 0 .7.3.7.7v.9c0 .4-.3.7-.7.7h-2.4c-.4 0-.7-.3-.7-.7v-.9z" fill="#FFF"/>
        <path d="M21.1 11.2h2.4c.4 0 .7.3.7.7v3.4c0 .4-.3.7-.7.7h-2.4c-.4 0-.7-.3-.7-.7v-3.4c0-.4.3-.7.7-.7zm1 4.2h.4v-3.3h-.4v3.3z" fill="#FFF"/>
        <path d="M25 11.2h2.4c.4 0 .7.3.7.7v3.4c0 .4-.3.7-.7.7h-2.4c-.4 0-.7-.3-.7-.7v-3.4c0-.4.3-.7.7-.7zm1 4.2h.4v-3.3h-.4v3.3z" fill="#FFF"/>
        <path d="M28.9 11.2h2.4c.4 0 .7.3.7.7v3.4c0 .4-.3.7-.7.7h-2.4c-.4 0-.7-.3-.7-.7v-3.4c0-.4.3-.7.7-.7zm1 4.2h.4v-3.3h-.4v3.3z" fill="#FFF"/>
    </svg>
  ),
  stripe: (
     <svg width="38" height="24" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" className="fill-current">
      <path d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z" opacity=".07"/>
      <path d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32" fill="#FFF"/>
      <path d="M10.8 12.1c0 .2.2.3.4.3h3c.3 0 .5-.2.5-.5v-1.4c0-.4-.2-.6-.6-.6h-2.2c-.3 0-.5.2-.5.5v1.7zm1.8-3.4c-.3 0-.5.2-.5.5v.9h2.2c.3 0 .5-.2.5-.5v-.3c0-.3-.2-.6-.5-.6h-1.7z" fill="#6772E5"/>
      <path d="M27.2 8.7h-1.9c-.2 0-.3.1-.4.3l-.8 1.4h-1.9c-.3 0-.5.2-.5.5v.3c0 .2.1.4.3.4h2.4c.3 0 .5-.2.5-.5v-.2l1-1.6c.1-.2 0-.4-.2-.4z" fill="#6772E5"/>
      <path d="M21.2 8.7h-1.9c-.2 0-.3.1-.4.3l-.8 1.4h-1.9c-.3 0-.5.2-.5.5v.3c0 .2.1.4.3.4H19c.3 0 .5-.2.5-.5v-.2l1-1.6c.1-.2 0-.4-.2-.4z" fill="#6772E5"/>
      <path d="M27.2 12.9h-1.9c-.2 0-.3.1-.4.3l-.8 1.4h-1.9c-.3 0-.5.2-.5.5v.3c0 .2.1.4.3.4h2.4c.3 0 .5-.2.5-.5v-.2l1-1.6c.1-.2 0-.4-.2-.4z" fill="#6772E5"/>
      <path d="M21.2 12.9h-1.9c-.2 0-.3.1-.4.3l-.8 1.4h-1.9c-.3 0-.5.2-.5.5v.3c0 .2.1.4.3.4H19c.3 0 .5-.2.5-.5v-.2l1-1.6c.1-.2 0-.4-.2-.4z" fill="#6772E5"/>
      <path d="M12.6 13.3c0 .2.2.3.4.3h3c.3 0 .5-.2.5-.5v-1.4c0-.4-.2-.6-.6-.6h-2.2c-.3 0-.5.2-.5.5v1.7z" fill="#6772E5"/>
    </svg>
  ),
};

export function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 xl:gap-12">
          {/* Column 1: Identity */}
          <div className="space-y-4">
            <Link className="flex items-baseline space-x-2 text-white" href="/">
              <span className="text-xl font-bold">PROSPER</span>
              <span className="text-xl font-light">PROJECT</span>
            </Link>
            <p className="text-sm text-zinc-400">
              Accompagnement premium pour entrepreneurs francophones en Asie.
            </p>
            <div className="pt-4 text-xs text-zinc-500 space-y-1">
              <p>© {new Date().getFullYear()} Prosper Project Limited. All rights reserved.</p>
              <p>Hong Kong CR No. 3192345</p>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="text-sm font-semibold tracking-widest uppercase text-white">Navigation</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="#roadmap" className="text-sm text-zinc-400 hover:text-white transition-colors">Notre Processus</Link></li>
              <li><Link href="#pricing" className="text-sm text-zinc-400 hover:text-white transition-colors">Tarifs & Services</Link></li>
              <li><Link href="#simulator" className="text-sm text-zinc-400 hover:text-white transition-colors">Simulateur Fiscal</Link></li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h3 className="text-sm font-semibold tracking-widest uppercase text-white">Informations Légales</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/legal" className="text-sm text-zinc-400 hover:text-white transition-colors">Mentions Légales</Link></li>
              <li><Link href="/terms" className="text-sm text-zinc-400 hover:text-white transition-colors">Conditions Générales de Vente (CGV)</Link></li>
              <li><Link href="/privacy" className="text-sm text-zinc-400 hover:text-white transition-colors">Politique de Confidentialité</Link></li>
              <li><Link href="/cookies" className="text-sm text-zinc-400 hover:text-white transition-colors">Politique de Cookies (GDPR)</Link></li>
              <li><Link href="/disclaimer" className="text-sm text-zinc-400 hover:text-white transition-colors">Avis de non-responsabilité (Disclaimer)</Link></li>
            </ul>
          </div>
          
          {/* Column 4: Contact */}
          <div>
            <h3 className="text-sm font-semibold tracking-widest uppercase text-white">Siège Social</h3>
            <div className="mt-4 space-y-2 text-sm text-zinc-400">
              <p>Tower 535, 535 Jaffe Road,<br/>Causeway Bay, Hong Kong</p>
              <p><a href="mailto:leaouer@gmail.com" className="hover:text-white transition-colors">leaouer@gmail.com</a></p>
              <p>WhatsApp Support 24/7</p>
            </div>
          </div>
        </div>

        {/* Security Bar */}
        <div className="mt-16 border-t border-white/10 pt-8 sm:flex sm:items-center sm:justify-between">
          <div className="flex items-center space-x-2">
            <Lock className="h-4 w-4 text-zinc-500" />
            <p className="text-xs text-zinc-500">Paiement sécurisé SSL 256-bit. Données cryptées.</p>
          </div>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0 text-zinc-600">
            {paymentIcons.visa}
            {paymentIcons.mastercard}
            {paymentIcons.amex}
            {paymentIcons.stripe}
          </div>
        </div>
      </div>
    </footer>
  );
}
