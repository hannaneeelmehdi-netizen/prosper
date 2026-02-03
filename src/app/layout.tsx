import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { LanguageProvider } from '@/context/language-context';
import ClientWrapper from './client-wrapper';
import { FirebaseClientProvider } from '@/firebase/client-provider';
import { WhatsAppButton } from '@/components/ui/whatsapp-button';

const title = "Société Hong Kong 0% Impôt | Prosper Project | Création d'Entreprise";
const description = "Créez votre société à Hong Kong avec Prosper Project et profitez de 0% d'impôt sur les bénéfices internationaux. Idéal pour e-commerçants, consultants et freelances. Incorporation rapide et 100% à distance.";
const keywords = "société hong kong, 0% impôt, création d'entreprise, optimisation fiscale, société offshore, e-commerce, consultant, freelance hong kong, banque internationale";
const ogImageUrl = "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export const metadata: Metadata = {
  title,
  description,
  keywords,
  openGraph: {
    title,
    description,
    url: 'https://prosper-project.com',
    siteName: 'Prosper Project',
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: 'Hong Kong skyline at night',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [ogImageUrl],
  },
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
