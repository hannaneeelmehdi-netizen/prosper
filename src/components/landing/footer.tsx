import Link from 'next/link';
import { Lock } from 'lucide-react';

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
        <div className="mt-16 border-t border-white/10 pt-8 sm:flex sm:items-center sm:justify-start">
          <div className="flex items-center space-x-2">
            <Lock className="h-4 w-4 text-zinc-500" />
            <p className="text-xs text-zinc-500">Paiement sécurisé SSL 256-bit. Données cryptées.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
