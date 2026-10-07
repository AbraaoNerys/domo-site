import ReferenceImage from "@/components/ui/ReferenceImage";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import RoomsCarousel from "@/components/ui/RoomsCarousel";
import { aboutContent, roomsCarouselImages, usageModes } from "@/data/site";

export default function AboutSection() {
  return (
    <section
      id="sobre"
      aria-labelledby="titulo-sobre"
      className="scroll-mt-24 bg-surface py-20 text-ink md:py-28 lg:py-36"
    >
      <div className="site-container grid items-center gap-14 lg:grid-cols-[minmax(20rem,0.75fr)_minmax(0,1fr)] lg:gap-24">
        <RevealOnScroll className="min-w-0">
          <RoomsCarousel images={roomsCarouselImages} />
        </RevealOnScroll>

        <div className="max-w-2xl">
          <RevealOnScroll>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-forest">
              {aboutContent.eyebrow}
            </p>
          </RevealOnScroll>
          <RevealOnScroll className="mt-6" delayMs={90}>
            <h2
              id="titulo-sobre"
              className="text-balance font-display text-[clamp(3rem,6vw,5.5rem)] font-semibold leading-[0.95] tracking-[-0.03em]"
            >
              {aboutContent.title}
            </h2>
          </RevealOnScroll>
          <div className="mt-8 space-y-5 text-base leading-8 text-ink/70 md:text-lg md:leading-9">
            {aboutContent.paragraphs.map((paragraph, index) => (
              <RevealOnScroll key={paragraph} delayMs={180 + index * 90}>
                <p>{paragraph}</p>
              </RevealOnScroll>
            ))}
          </div>
          <div className="mt-10 grid gap-px bg-ink/15 sm:grid-cols-2">
            {usageModes.map((mode, index) => (
              <RevealOnScroll
                key={mode.id}
                className="h-full"
                delayMs={index * 90}
              >
                <article className="flex h-full flex-col bg-surface p-5">
                  <h3 className="font-display text-3xl font-semibold">
                    {mode.title}
                  </h3>
                  <p className="mt-1 text-sm text-ink/60">{mode.description}</p>
                  <ReferenceImage
                    {...mode.image}
                    className="mt-6 aspect-[4/3] border border-ink/10"
                    imageClassName="object-cover"
                    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 24vw"
                  />
                </article>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
