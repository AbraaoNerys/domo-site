import type { Metadata } from "next";
import Link from "next/link";
import WhatsAppLink from "@/components/ui/WhatsAppLink";

export const metadata: Metadata = {
  title: "Página não encontrada",
  description:
    "A página solicitada não foi encontrada no site do Escritório DOMO.",
};

export default function NotFound() {
  return (
    <main className="flex min-h-[32rem] flex-1 items-center bg-ink text-on-dark">
      <section
        aria-labelledby="titulo-pagina-nao-encontrada"
        className="site-container py-20 md:py-28 lg:py-32"
      >
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-accent">
            Erro 404
          </p>
          <div
            className="mx-auto mt-6 h-px w-16 bg-accent"
            aria-hidden="true"
          />
          <h1
            id="titulo-pagina-nao-encontrada"
            className="mt-8 text-balance font-display text-[clamp(3.25rem,9vw,6.5rem)] font-semibold leading-[0.9] tracking-[-0.035em] text-surface"
          >
            Página não encontrada.
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-on-dark/70 md:text-lg md:leading-9">
            O endereço que você tentou acessar não está disponível. Você pode
            retornar ao início ou falar com a equipe DOMO.
          </p>
          <div className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
            <Link
              href="/"
              className="interactive-control inline-flex min-h-11 items-center justify-center rounded-subtle border border-on-dark/30 px-6 py-3 text-center text-xs font-medium uppercase tracking-[0.12em] text-on-dark transition-colors hover:border-accent hover:text-accent"
            >
              Voltar para o início
            </Link>
            <WhatsAppLink ariaLabel="Falar com a equipe DOMO pelo WhatsApp">
              Falar com o DOMO
            </WhatsAppLink>
          </div>
        </div>
      </section>
    </main>
  );
}
