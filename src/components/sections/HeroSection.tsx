import Image from "next/image";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import WhatsAppLink from "@/components/ui/WhatsAppLink";
import { heroContent } from "@/data/site";

export default function HeroSection() {
  return (
    <section
      id="inicio"
      aria-labelledby="titulo-inicio"
      className="scroll-mt-24 bg-ink text-on-dark"
    >
      <div className="grid min-h-[calc(100svh-4.5rem)] lg:min-h-[calc(100svh-var(--header-height-desktop))] lg:grid-cols-2">
        <div className="hero-copy flex min-w-0 items-center py-16 md:py-20 lg:py-24">
          <div className="max-w-3xl">
            <RevealOnScroll trigger="load" className="mb-10">
              <div className="flex items-center gap-5">
                <Image
                  src="/images/brand/domo-mark.svg"
                  alt="Logo do Escritório DOMO."
                  width={58}
                  height={58}
                  className="size-[3.625rem]"
                />
                <span
                  className="font-display text-[2.75rem] font-semibold leading-none tracking-[-0.02em] text-surface"
                  aria-hidden="true"
                >
                  DOMO
                </span>
              </div>
            </RevealOnScroll>
            <RevealOnScroll trigger="load" delayMs={90}>
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-accent">
                {heroContent.eyebrow}
              </p>
            </RevealOnScroll>
            <RevealOnScroll trigger="load" className="mt-7" delayMs={180}>
              <h1
                id="titulo-inicio"
                className="text-balance font-display text-[clamp(3.5rem,8vw,7rem)] font-semibold leading-[0.9] tracking-[-0.035em] text-surface lg:text-[clamp(3.5rem,6vw,6rem)]"
              >
                {heroContent.title}
              </h1>
            </RevealOnScroll>
            <RevealOnScroll trigger="load" className="mt-8" delayMs={270}>
              <p className="max-w-2xl text-base leading-8 text-on-dark/75 md:text-lg md:leading-9">
                {heroContent.description}
              </p>
            </RevealOnScroll>
            <RevealOnScroll trigger="load" className="mt-10" delayMs={360}>
              <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
                <WhatsAppLink ariaLabel="Agendar uma visita pelo WhatsApp">
                  Agendar uma visita
                </WhatsAppLink>
                <a
                  href="#ambientes"
                  className="interactive-control inline-flex min-h-11 items-center justify-center rounded-subtle border border-on-dark/30 px-6 py-3 text-xs font-medium uppercase tracking-[0.12em] text-on-dark transition-colors hover:border-accent hover:text-accent"
                >
                  Conhecer os ambientes
                </a>
              </div>
            </RevealOnScroll>
            <RevealOnScroll trigger="load" className="mt-5" delayMs={450}>
              <p className="text-xs leading-5 text-on-dark/50">
                Atendimento e confirmação realizados manualmente pelo WhatsApp.
              </p>
            </RevealOnScroll>
          </div>
        </div>

        <RevealOnScroll
          trigger="load"
          variant="zoom-in"
          delayMs={240}
          className="min-w-0 self-stretch"
        >
          <figure className="interactive-photo relative h-full min-h-[26rem] overflow-hidden bg-ink md:min-h-[34rem] lg:min-h-[calc(100svh-var(--header-height-desktop))]">
            <Image
              src={heroContent.image.src}
              alt={heroContent.image.alt}
              fill
              sizes="(max-width: 1023px) 100vw, 50vw"
              preload
              className="interactive-photo-media object-cover object-center"
            />
            <div
              className="hero-photo-gradient pointer-events-none absolute inset-0"
              aria-hidden="true"
            />
          </figure>
        </RevealOnScroll>
      </div>
    </section>
  );
}
