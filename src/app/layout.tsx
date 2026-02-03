import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { LanguageProvider } from '@/context/language-context';
import ClientWrapper from './client-wrapper';
import { FirebaseClientProvider } from '@/firebase/client-provider';
import { WhatsAppButton } from '@/components/ui/whatsapp-button';


export const metadata: Metadata = {
  title: 'Prosper Project',
  description: 'Services d\'entreprise premium pour les entreprises modernes.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <FirebaseClientProvider>
          <LanguageProvider>
            <ClientWrapper>
              {children}
              <Toaster />
              <WhatsAppButton />
            </ClientWrapper>
          </LanguageProvider>
        </FirebaseClientProvider>
      </body>
    </html>
  );
}
