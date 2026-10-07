"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import WhatsAppLink from "@/components/ui/WhatsAppLink";
import { navigationItems } from "@/data/site";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    }

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-50 h-[4.5rem] border-b border-on-dark/10 bg-ink text-on-dark lg:h-[var(--header-height-desktop)]">
      <div className="site-container relative flex h-full items-center justify-between">
        <a
          href="#inicio"
          className="flex items-center gap-3.5"
          aria-label="Escritório DOMO — início"
          onClick={() => setIsMenuOpen(false)}
        >
          <Image
            src="/images/brand/domo-mark.svg"
            alt=""
            width={34}
            height={34}
            aria-hidden="true"
          />
          <span className="font-display text-[1.625rem] font-semibold leading-none text-surface">
            DOMO
          </span>
        </a>

        <button
          type="button"
          className="interactive-control relative grid size-11 place-items-center text-on-dark lg:hidden"
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMenuOpen}
          aria-controls="menu-principal"
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span className="relative block h-4 w-6" aria-hidden="true">
            <span
              className={`absolute left-0 top-0 h-px w-6 bg-current transition-transform ${
                isMenuOpen ? "translate-y-[7.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 h-px w-6 bg-current transition-transform ${
                isMenuOpen ? "-translate-y-[7.5px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>

        <nav
          id="menu-principal"
          aria-label="Navegação principal"
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } absolute inset-x-0 top-full flex-col gap-1 border-t border-on-dark/10 bg-ink px-6 py-5 shadow-2xl lg:static lg:flex lg:flex-row lg:items-center lg:gap-[2.125rem] lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none`}
        >
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="py-3 text-sm text-on-dark transition-colors hover:text-accent lg:py-0"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <WhatsAppLink
            className="mt-3 justify-center lg:ml-4 lg:mt-0"
            ariaLabel="Agendar uma visita pelo WhatsApp"
          >
            Agendar visita
          </WhatsAppLink>
        </nav>
      </div>
    </header>
  );
}
