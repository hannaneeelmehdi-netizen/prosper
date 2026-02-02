import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { BackToTopButton } from "@/components/ui/back-to-top-button";

export default function LegalPage() {
  const legalInfo = {
    companyName: "PROSPECT PROJECT (Nom à confirmer)",
    registrationNumber: "[Numéro d’entreprise (BCE / KBO)]",
    vatNumber: "[Numéro de TVA (si applicable)]",
    address: "[Adresse officielle de l’entreprise]",
    email: "prosperproject@outlook.fr",
    host: "Firebase App Hosting (Google)",
  };

  return (
    <div className="flex min-h-screen flex-col bg-black">
      <Header />
      <main className="flex-1 py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-center">Mentions Légales</h1>
            <p className="text-center text-muted-foreground">Dernière mise à jour : 2024-07-26</p>
          </div>
          <div className="prose-styles mx-auto">
            <h2>Éditeur du Site</h2>
            <p>
              <strong>Nom de l'entreprise :</strong> {legalInfo.companyName}<br />
              <strong>Numéro d’entreprise :</strong> {legalInfo.registrationNumber}<br />
              <strong>Numéro de TVA :</strong> {legalInfo.vatNumber}<br />
              <strong>Adresse :</strong> {legalInfo.address}<br />
              <strong>Email :</strong> <a href={`mailto:${legalInfo.email}`} className="text-primary hover:underline">{legalInfo.email}</a>
            </p>

            <h2>Hébergement</h2>
            <p>
              Le site est hébergé par {legalInfo.host}.
            </p>

            <h2>Propriété Intellectuelle</h2>
            <p>
              L'ensemble de ce site relève de la législation internationale sur le droit d'auteur, le droit des marques et, de façon générale, sur la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
            </p>

            <h2>Données Personnelles</h2>
            <p>
              Les informations recueillies font l’objet d’un traitement informatique destiné à la gestion de la relation client. Conformément à la loi "informatique et libertés" et au RGPD, vous bénéficiez d’un droit d’accès et de rectification aux informations qui vous concernent. Pour plus de détails, veuillez consulter notre <a href="/privacy" className="text-primary hover:underline">Politique de Confidentialité</a>.
            </p>

            <h2>Cookies</h2>
            <p>
              Ce site utilise des cookies pour améliorer l'expérience utilisateur. Pour en savoir plus sur l'utilisation des cookies, veuillez consulter notre <a href="/cookies" className="text-primary hover:underline">Politique de Cookies</a>.
            </p>

            <h2>Limitation de responsabilité</h2>
            <p>
              {legalInfo.companyName} ne saurait être tenu pour responsable des erreurs matérielles qui se seraient glissées dans ses documents, malgré tout le soin apporté à leur publication. Les informations fournies sur le site le sont à titre indicatif et ne sauraient dispenser l'utilisateur d'une analyse complémentaire et personnalisée.
            </p>
          </div>
        </div>
      </main>
      <style jsx>{`
        .prose-styles {
          color: hsl(var(--foreground));
          line-height: 1.75;
        }
        .prose-styles h2 {
          font-size: 1.5rem;
          font-weight: 700;
          margin-top: 2.5rem;
          margin-bottom: 1rem;
          padding-bottom: 0.5rem;
          border-bottom: 1px solid hsl(var(--border));
        }
        .prose-styles p, .prose-styles strong {
          margin-bottom: 1.25rem;
        }
        .prose-styles a {
          color: hsl(var(--primary));
          text-decoration: none;
        }
        .prose-styles a:hover {
          text-decoration: underline;
        }
      `}</style>
      <Footer />
      <BackToTopButton />
    </div>
  );
}
