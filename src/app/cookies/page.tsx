import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { BackToTopButton } from "@/components/ui/back-to-top-button";

export default function CookiesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black">
      <Header />
      <main className="flex-1 py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-center">Politique de Cookies</h1>
            <p className="text-center text-muted-foreground">Dernière mise à jour : 2024-07-26</p>
          </div>
          <div className="prose-styles mx-auto">
            <h2>Qu'est-ce qu'un cookie ?</h2>
            <p>
              Un cookie est un petit fichier texte enregistré sur votre ordinateur, votre tablette ou votre mobile et qui permet d’enregistrer et de suivre des données concernant votre utilisation du site Internet. Ce site utilise des cookies afin de vous identifier ou à des fins statistiques, par exemple. Les cookies sont gérés par votre navigateur internet.
            </p>

            <h2>Quels cookies utilisons-nous ?</h2>
            <p>
              Nous utilisons uniquement des cookies techniques et de performance (via des outils comme Google Analytics de manière anonymisée) pour assurer le bon fonctionnement du site et pour analyser le trafic afin d'améliorer votre expérience. Nous n'utilisons pas de cookies publicitaires ou de suivi tiers.
            </p>

            <h2>Accepter ou refuser les cookies</h2>
            <p>
              Vous pouvez à tout moment configurer votre navigateur afin d'accepter ou de refuser les cookies. La configuration de chaque navigateur est différente. Elle est décrite dans le menu d'aide de votre navigateur, qui vous permettra de savoir de quelle manière modifier vos souhaits en matière de cookies.
            </p>

            <p>
              Veuillez noter que si vous refusez les cookies, votre expérience de navigation sur notre site pourrait être dégradée.
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
