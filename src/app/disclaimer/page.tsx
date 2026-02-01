import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { BackToTopButton } from "@/components/ui/back-to-top-button";

export default function DisclaimerPage() {
    const legalInfo = {
        companyName: "PROSPECT PROJECT (Nom à confirmer)",
    };

  return (
    <div className="flex min-h-screen flex-col bg-black">
      <Header />
      <main className="flex-1 py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-center">Avis de non-responsabilité (Disclaimer)</h1>
            <p className="text-center text-muted-foreground">Dernière mise à jour : {new Date().toLocaleDateString('fr-CA')}</p>
          </div>
          <div className="prose-styles mx-auto">
            <p>
                Les informations fournies par {legalInfo.companyName} sur prosper-project.com sont à des fins d'information générale uniquement. Toutes les informations sur le site sont fournies de bonne foi, cependant nous ne faisons aucune déclaration ou garantie d'aucune sorte, expresse ou implicite, concernant l'exactitude, l'adéquation, la validité, la fiabilité, la disponibilité ou l'exhaustivité de toute information sur le site.
            </p>
            <p>
                En aucun cas, nous ne serons responsables envers vous de toute perte ou dommage de quelque nature que ce soit résultant de l'utilisation du site ou de la confiance accordée à toute information fournie sur le site. Votre utilisation du site et votre confiance dans toute information sur le site sont uniquement à vos propres risques.
            </p>
            <p>
                Le site ne peut pas et ne contient pas de conseils juridiques ou fiscaux. Les informations juridiques et fiscales sont fournies à des fins d'information générale et éducative uniquement et ne remplacent pas les conseils d'un professionnel. Par conséquent, avant de prendre toute mesure basée sur ces informations, nous vous encourageons à consulter les professionnels appropriés. Nous ne fournissons aucun type de conseil juridique ou fiscal.
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
        .prose-styles p {
          margin-bottom: 1.25rem;
        }
      `}</style>
      <Footer />
      <BackToTopButton />
    </div>
  );
}
