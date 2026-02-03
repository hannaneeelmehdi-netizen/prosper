"use client";
import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { BackToTopButton } from "@/components/ui/back-to-top-button";

export default function TermsPage() {
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
            <h1 className="text-4xl font-bold tracking-tight text-center">Conditions Générales de Vente (CGV)</h1>
            <p className="text-center text-muted-foreground">Dernière mise à jour : 2024-07-26</p>
          </div>
          <div className="prose-styles mx-auto">
            <h2>Article 1 : Objet</h2>
            <p>
              Les présentes conditions générales de vente visent à définir les relations contractuelles entre {legalInfo.companyName} et le client, et les conditions applicables à toute prestation de service effectuée par le biais du site internet prosper-project.com. L’acquisition d’un service à travers le présent site implique une acceptation sans réserve par le client des présentes conditions de vente.
            </p>

            <h2>Article 2 : Services</h2>
            <p>
              Les services proposés sont ceux qui figurent sur le site prosper-project.com. Ces services sont proposés dans la limite des disponibilités. {legalInfo.companyName} se réserve le droit de modifier à tout moment l’assortiment de services.
            </p>
            
            <h2>Article 3 : Tarifs</h2>
            <p>
              Les prix figurant sur les fiches produits du catalogue internet sont des prix en Euros (€). {legalInfo.companyName} se réserve le droit de modifier ses prix à tout moment, étant toutefois entendu que le prix figurant au catalogue le jour de la commande sera le seul applicable au client.
            </p>

            <h2>Article 4 : Commande et modalités de paiement</h2>
            <p>
              Avant toute commande, le client doit remplir un formulaire d’éligibilité. Le paiement est exigible à la commande. Les paiements seront effectués par carte bancaire ; ils seront réalisés par le biais d'un système sécurisé qui utilise le protocole SSL (Secure Socket Layer) de telle sorte que les informations transmises sont cryptées par un logiciel et qu'aucun tiers ne peut en prendre connaissance au cours du transport sur le réseau.
            </p>

            <h2>Article 5 : Rétractation</h2>
            <p>
              Conformément à la législation en vigueur pour les services immatériels, le droit de rétractation ne peut être exercé une fois que le service a commencé à être exécuté. Compte tenu de la nature des services fournis (création d'entreprise et démarches administratives), le client accepte que l'exécution des prestations commence dès la validation du paiement, renonçant ainsi expressément à son droit de rétractation.
            </p>

            <h2>Article 6 : Responsabilité</h2>
            <p>
              {legalInfo.companyName}, dans le processus de vente à distance, n’est tenue que par une obligation de moyens. Sa responsabilité ne pourra être engagée pour un dommage résultant de l’utilisation du réseau Internet tel que perte de données, intrusion, virus, rupture du service, ou autres problèmes involontaires.
            </p>

            <h2>Article 7 : Droit applicable et litiges</h2>
            <p>
              Les présentes conditions de vente à distance sont soumises à la loi de Hong Kong. Pour tous les litiges ou contentieux, le Tribunal compétent sera celui de Hong Kong.
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
      `}</style>
      <Footer />
      <BackToTopButton />
    </div>
  );
}
