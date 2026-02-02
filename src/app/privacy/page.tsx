import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { BackToTopButton } from "@/components/ui/back-to-top-button";

export default function PrivacyPage() {
  const legalInfo = {
    companyName: "PROSPECT PROJECT (Nom à confirmer)",
    email: "prosperproject@outlook.fr",
  };

  return (
    <div className="flex min-h-screen flex-col bg-black">
      <Header />
      <main className="flex-1 py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-center">Politique de Confidentialité</h1>
            <p className="text-center text-muted-foreground">Dernière mise à jour : 2024-07-26</p>
          </div>
          <div className="prose-styles mx-auto">
            <h2>Collecte de l'information</h2>
            <p>
              Nous recueillons des informations lorsque vous remplissez notre formulaire de contact. Les informations recueillies incluent votre nom, votre adresse e-mail, et les détails de votre projet.
            </p>

            <h2>Utilisation des informations</h2>
            <p>
              Toutes les informations que nous recueillons auprès de vous peuvent être utilisées pour :
              <ul>
                <li>Personnaliser votre expérience et répondre à vos besoins individuels</li>
                <li>Fournir un contenu publicitaire personnalisé</li>
                <li>Améliorer notre site</li>
                <li>Vous contacter par e-mail</li>
              </ul>
            </p>

            <h2>Confidentialité</h2>
            <p>
              Nous sommes les seuls propriétaires des informations recueillies sur ce site. Vos informations personnelles ne seront pas vendues, échangées, transférées, ou données à une autre société sans votre consentement, en dehors de ce qui est nécessaire pour répondre à une demande ou une transaction.
            </p>
            
            <h2>Divulgation à des tiers</h2>
            <p>
              Nous ne vendons, n'échangeons et ne transférons pas vos informations personnelles identifiables à des tiers.
            </p>

            <h2>Protection des informations</h2>
            <p>
              Nous mettons en œuvre une variété de mesures de sécurité pour préserver la sécurité de vos informations personnelles. Nous utilisons un cryptage à la pointe de la technologie pour protéger les informations sensibles transmises en ligne.
            </p>
            
            <h2>Droit d'accès et de rectification</h2>
            <p>
              Conformément à la réglementation en vigueur, vous disposez d’un droit d’accès, de rectification, de suppression et d’opposition de vos données personnelles. Vous pouvez exercer ce droit en nous contactant à l'adresse suivante : <a href={`mailto:${legalInfo.email}`} className="text-primary hover:underline">{legalInfo.email}</a>.
            </p>

            <h2>Consentement</h2>
            <p>
              En utilisant notre site, vous consentez à notre politique de confidentialité.
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
        .prose-styles p, .prose-styles ul {
          margin-bottom: 1.25rem;
        }
        .prose-styles ul {
          list-style-position: inside;
          list-style-type: disc;
          padding-left: 1rem;
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
