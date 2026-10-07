import EnvironmentCard from "@/components/ui/EnvironmentCard";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { environments } from "@/data/site";

export default function EnvironmentsSection() {
  return (
    <section
      id="ambientes"
      aria-labelledby="titulo-ambientes"
      className="scroll-mt-24 border-t border-ink/10 bg-surface py-20 text-ink md:py-28 lg:py-36"
    >
      <div className="site-container">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.45fr)] lg:items-end">
          <div>
            <RevealOnScroll>
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-forest">
                Ambientes gerais
              </p>
            </RevealOnScroll>
            <RevealOnScroll className="mt-6" delayMs={90}>
              <h2
                id="titulo-ambientes"
                className="max-w-4xl text-balance font-display text-[clamp(3rem,6vw,5.5rem)] font-semibold leading-[0.95] tracking-[-0.03em]"
              >
                Uma experiência profissional desde a chegada.
              </h2>
            </RevealOnScroll>
          </div>
          <RevealOnScroll className="max-w-md lg:justify-self-end" delayMs={180}>
            <p className="text-base leading-8 text-ink/65">
              Recepção, circulação e apoio para compor uma rotina de trabalho
              mais organizada. As fotos do corredor e da copa ainda são
              ilustrativas e serão substituídas após o registro fotográfico.
            </p>
          </RevealOnScroll>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {environments.map((environment, index) => (
            <RevealOnScroll
              key={environment.id}
              className="h-full"
              delayMs={Math.min(index * 90, 360)}
            >
              <EnvironmentCard environment={environment} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
