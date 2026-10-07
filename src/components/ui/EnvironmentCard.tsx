import ReferenceImage from "@/components/ui/ReferenceImage";
import type { Environment } from "@/types/site";

type EnvironmentCardProps = {
  environment: Environment;
};

export default function EnvironmentCard({
  environment,
}: EnvironmentCardProps) {
  return (
    <article className="interactive-card group h-full overflow-hidden border border-ink/15 bg-surface">
      {environment.image ? (
        <ReferenceImage
          {...environment.image}
          className="aspect-[4/3]"
          caption={environment.id === "recepcao" ? "Recepção DOMO" : undefined}
          imageClassName="object-cover"
          sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
        />
      ) : (
        <div className="grid aspect-[4/3] place-items-center bg-forest px-6 text-center text-on-dark">
          <span className="text-xs font-medium uppercase tracking-[0.16em]">
            [Adicionar foto real]
          </span>
        </div>
      )}

      <div className="min-h-56 p-6 md:p-8">
        <span className="text-xs font-medium tracking-[0.18em] text-accent">
          {environment.index}
        </span>
        <h3 className="mt-5 font-display text-4xl font-semibold text-ink">
          {environment.title}
        </h3>
        <p className="mt-4 text-sm leading-7 text-ink/70">
          {environment.description}
        </p>
      </div>
    </article>
  );
}
