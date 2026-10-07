import Image from "next/image";
import WhatsAppLink from "@/components/ui/WhatsAppLink";
import { navigationItems } from "@/data/site";

const address = {
  building: "Evolution Business Center",
  floor: "19º andar",
  street: "Avenida Rio Grande do Sul, nº 1345",
  neighborhood: "Bairro dos Estados",
  city: "João Pessoa/PB",
  postalCode: "58030-021",
};

const mapsUrl =
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    "Evolution Business Center, Avenida Rio Grande do Sul, 1345, Bairro dos Estados, João Pessoa, PB, 58030-021",
  )}`;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-on-dark/10 bg-ink-deep text-on-dark">
      <div className="site-container">
        <div className="grid gap-12 py-16 md:grid-cols-[minmax(0,1.1fr)_minmax(12rem,0.7fr)] md:gap-x-16 lg:grid-cols-[minmax(0,1.2fr)_minmax(10rem,0.55fr)_minmax(18rem,0.9fr)] lg:gap-20 lg:py-20">
          <div className="max-w-md">
            <a
              href="#inicio"
              aria-label="Escritório DOMO — voltar ao início"
              className="inline-flex items-center gap-4 text-surface transition-colors hover:text-accent"
            >
              <Image
                src="/images/brand/domo-mark.svg"
                alt=""
                width={48}
                height={48}
                aria-hidden="true"
              />
              <span className="font-display text-4xl font-semibold leading-none tracking-[-0.02em]">
                DOMO
              </span>
            </a>
            <p className="mt-7 max-w-sm text-sm leading-7 text-on-dark/65">
              Ambientes profissionais que transmitem confiança, favorecem a
              produtividade e valorizam cada encontro.
            </p>
          </div>

          <nav aria-label="Navegação do rodapé">
            <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
              Navegação
            </h2>
            <ul className="mt-6 space-y-4">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="inline-flex min-h-7 items-center text-sm text-on-dark/70 transition-colors hover:text-accent"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-2 lg:col-span-1">
            <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
              Contato e localização
            </h2>
            <address className="mt-6 text-sm not-italic leading-7 text-on-dark/70">
              <p>
                {address.building} — {address.floor}
              </p>
              <p>{address.street}</p>
              <p>
                {address.neighborhood} — {address.city}
              </p>
              <p>
                CEP: {address.postalCode}
              </p>
            </address>
            <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-on-dark/70 underline decoration-accent/60 underline-offset-4 transition-colors hover:text-accent"
              >
                Abrir no mapa
              </a>
              <a
                href="tel:+5583986153667"
                className="text-on-dark/70 transition-colors hover:text-accent"
              >
                (83) 98615-3667
              </a>
            </div>
            <WhatsAppLink
              className="mt-7 justify-center"
              ariaLabel="Falar com o Escritório DOMO pelo WhatsApp"
            >
              Falar pelo WhatsApp
            </WhatsAppLink>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-on-dark/10 py-6 text-xs leading-5 text-on-dark/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} Escritório DOMO. Todos os direitos reservados.</p>
          <p>João Pessoa · Paraíba</p>
        </div>
      </div>
    </footer>
  );
}
