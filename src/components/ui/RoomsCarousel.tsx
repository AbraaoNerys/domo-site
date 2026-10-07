"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import ReferenceImage from "@/components/ui/ReferenceImage";
import type { RoomCarouselImage } from "@/types/site";

const AUTOPLAY_INTERVAL_MS = 3500;
const MANUAL_INTERACTION_PAUSE_MS = 7000;

type RoomsCarouselProps = {
  images: RoomCarouselImage[];
};

export default function RoomsCarousel({ images }: RoomsCarouselProps) {
  const trackRef = useRef<HTMLUListElement>(null);
  const dragStateRef = useRef<{
    pointerId: number;
    startX: number;
    scrollLeft: number;
  } | null>(null);
  const manualPauseTimerRef = useRef<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canGoBack, setCanGoBack] = useState(false);
  const [canGoForward, setCanGoForward] = useState(images.length > 1);
  const [isInViewport, setIsInViewport] = useState(false);
  const [isDocumentVisible, setIsDocumentVisible] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isTemporarilyPaused, setIsTemporarilyPaused] = useState(false);
  const [isPausedByUser, setIsPausedByUser] = useState(false);

  const updateNavigation = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const slides = Array.from(
      track.querySelectorAll<HTMLElement>("[data-carousel-slide]"),
    );
    const maximumScroll = Math.max(0, track.scrollWidth - track.clientWidth);
    const closestSlide = slides.reduce(
      (closest, slide, index) => {
        const distance = Math.abs(slide.offsetLeft - track.offsetLeft - track.scrollLeft);
        return distance < closest.distance ? { index, distance } : closest;
      },
      { index: 0, distance: Number.POSITIVE_INFINITY },
    );

    setActiveIndex(closestSlide.index);
    setCanGoBack(track.scrollLeft > 2);
    setCanGoForward(track.scrollLeft < maximumScroll - 2);
  }, []);

  const goToSlide = useCallback(
    (index: number) => {
      const track = trackRef.current;
      const slides = track
        ? Array.from(
            track.querySelectorAll<HTMLElement>("[data-carousel-slide]"),
          )
        : [];
      const target = slides[Math.max(0, Math.min(index, slides.length - 1))];

      if (!track || !target) return;

      track.scrollTo({
        left: target.offsetLeft - track.offsetLeft,
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });
    },
    [prefersReducedMotion],
  );

  const pauseAutoplayTemporarily = useCallback(() => {
    if (images.length <= 1 || prefersReducedMotion) return;

    setIsTemporarilyPaused(true);
    if (manualPauseTimerRef.current !== null) {
      window.clearTimeout(manualPauseTimerRef.current);
    }
    manualPauseTimerRef.current = window.setTimeout(() => {
      setIsTemporarilyPaused(false);
      manualPauseTimerRef.current = null;
    }, MANUAL_INTERACTION_PAUSE_MS);
  }, [images.length, prefersReducedMotion]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const observer = new ResizeObserver(updateNavigation);
    observer.observe(track);
    track.addEventListener("scroll", updateNavigation, { passive: true });
    updateNavigation();

    return () => {
      observer.disconnect();
      track.removeEventListener("scroll", updateNavigation);
    };
  }, [updateNavigation]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInViewport(entry.isIntersecting && entry.intersectionRatio >= 0.2);
      },
      { threshold: [0, 0.2, 0.5] },
    );
    observer.observe(track);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    function updateMotionPreference() {
      setPrefersReducedMotion(motionPreference.matches);
    }

    function updateDocumentVisibility() {
      setIsDocumentVisible(document.visibilityState === "visible");
    }

    updateMotionPreference();
    updateDocumentVisibility();
    motionPreference.addEventListener("change", updateMotionPreference);
    document.addEventListener("visibilitychange", updateDocumentVisibility);

    return () => {
      motionPreference.removeEventListener("change", updateMotionPreference);
      document.removeEventListener("visibilitychange", updateDocumentVisibility);
    };
  }, []);

  useEffect(() => {
    return () => {
      if (manualPauseTimerRef.current !== null) {
        window.clearTimeout(manualPauseTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const canAutoplay =
      images.length > 1 &&
      isInViewport &&
      isDocumentVisible &&
      !prefersReducedMotion &&
      !isTemporarilyPaused &&
      !isPausedByUser;

    if (!canAutoplay) return;

    const autoplayTimer = window.setTimeout(() => {
      const previousIndex =
        activeIndex === 0 ? images.length - 1 : activeIndex - 1;
      goToSlide(previousIndex);
    }, AUTOPLAY_INTERVAL_MS);

    return () => window.clearTimeout(autoplayTimer);
  }, [
    activeIndex,
    goToSlide,
    images.length,
    isDocumentVisible,
    isInViewport,
    isPausedByUser,
    isTemporarilyPaused,
    prefersReducedMotion,
  ]);

  function toggleAutoplay() {
    if (prefersReducedMotion || images.length <= 1) return;

    if (isPausedByUser) {
      if (manualPauseTimerRef.current !== null) {
        window.clearTimeout(manualPauseTimerRef.current);
        manualPauseTimerRef.current = null;
      }
      setIsTemporarilyPaused(false);
    }
    setIsPausedByUser((current) => !current);
  }

  function handleManualNavigation(index: number) {
    pauseAutoplayTemporarily();
    goToSlide(index);
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLUListElement>) {
    let targetIndex: number | null = null;

    if (event.key === "ArrowLeft") targetIndex = activeIndex - 1;
    if (event.key === "ArrowRight") targetIndex = activeIndex + 1;
    if (event.key === "Home") targetIndex = 0;
    if (event.key === "End") targetIndex = images.length - 1;

    if (targetIndex !== null) {
      event.preventDefault();
      handleManualNavigation(targetIndex);
    }
  }

  function handlePointerDown(event: React.PointerEvent<HTMLUListElement>) {
    if (event.pointerType === "mouse" && event.button !== 0) return;

    const track = trackRef.current;
    if (!track) return;

    pauseAutoplayTemporarily();
    dragStateRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      scrollLeft: track.scrollLeft,
    };
    track.setPointerCapture(event.pointerId);
  }

  function handlePointerMove(event: React.PointerEvent<HTMLUListElement>) {
    const track = trackRef.current;
    const dragState = dragStateRef.current;
    if (!track || !dragState || dragState.pointerId !== event.pointerId) return;

    track.scrollLeft = dragState.scrollLeft - (event.clientX - dragState.startX);
  }

  function finishPointerDrag(event: React.PointerEvent<HTMLUListElement>) {
    const track = trackRef.current;
    const dragState = dragStateRef.current;
    if (!track || !dragState || dragState.pointerId !== event.pointerId) return;

    if (track.hasPointerCapture(event.pointerId)) {
      track.releasePointerCapture(event.pointerId);
    }
    dragStateRef.current = null;
    updateNavigation();
  }

  if (images.length === 0) return null;

  const autoplayIsRunning =
    images.length > 1 &&
    isInViewport &&
    isDocumentVisible &&
    !prefersReducedMotion &&
    !isTemporarilyPaused &&
    !isPausedByUser;

  return (
    <div
      className="min-w-0"
      role="region"
      aria-roledescription="carrossel"
      aria-label="Galeria de ambientes ilustrativos"
    >
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-forest">
            Referências visuais
          </p>
          <p className="mt-2 text-sm leading-6 text-ink/55">
            Imagens temporárias para apresentação do protótipo.
          </p>
        </div>

        <div className="flex shrink-0 gap-2" aria-label="Controles do carrossel">
          <button
            type="button"
            aria-label={
              prefersReducedMotion
                ? "Reprodução automática desativada pela preferência de movimento reduzido"
                : isPausedByUser
                  ? "Retomar reprodução automática"
                  : "Pausar reprodução automática"
            }
            disabled={prefersReducedMotion || images.length <= 1}
            onClick={toggleAutoplay}
            className="interactive-control grid size-11 place-items-center rounded-subtle border border-ink/25 text-sm text-ink transition-colors hover:border-forest hover:text-forest disabled:cursor-not-allowed disabled:opacity-30"
          >
            <span aria-hidden="true">{isPausedByUser ? "▶" : "Ⅱ"}</span>
          </button>
          <button
            type="button"
            aria-label="Ver imagem anterior"
            disabled={!canGoBack}
            onClick={() => handleManualNavigation(activeIndex - 1)}
            className="interactive-control grid size-11 place-items-center rounded-subtle border border-ink/25 text-xl text-ink transition-colors hover:border-forest hover:text-forest disabled:cursor-not-allowed disabled:opacity-30"
          >
            <span aria-hidden="true">←</span>
          </button>
          <button
            type="button"
            aria-label="Ver próxima imagem"
            disabled={!canGoForward}
            onClick={() => handleManualNavigation(activeIndex + 1)}
            className="interactive-control grid size-11 place-items-center rounded-subtle border border-ink/25 text-xl text-ink transition-colors hover:border-forest hover:text-forest disabled:cursor-not-allowed disabled:opacity-30"
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>

      <ul
        ref={trackRef}
        tabIndex={0}
        aria-label="Imagens ilustrativas de ambientes profissionais"
        onKeyDown={handleKeyDown}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={finishPointerDrag}
        onPointerCancel={finishPointerDrag}
        onWheel={pauseAutoplayTemporarily}
        onDragStart={(event) => event.preventDefault()}
        className="carousel-track mt-3 flex touch-pan-y snap-x snap-mandatory select-none gap-4 overflow-x-auto scroll-smooth py-6 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
      >
        {images.map((image, index) => (
          <li
            key={image.id}
            data-carousel-slide
            role="group"
            aria-roledescription="slide"
            aria-label={`Imagem ${index + 1} de ${images.length}`}
            className="basis-full shrink-0 snap-start"
          >
            <ReferenceImage
              src={image.src}
              alt={image.alt}
              className={`carousel-slide-frame h-[28rem] border lg:h-[38rem] ${
                index === activeIndex
                  ? "carousel-slide-active border-accent/45 opacity-100"
                  : "carousel-slide-inactive border-ink/10 opacity-75"
              }`}
              imageClassName="object-cover"
              sizes="(max-width: 1023px) 100vw, 40vw"
            />
          </li>
        ))}
      </ul>

      <div
        className="mt-1 flex items-center justify-center gap-1"
        aria-label="Escolher imagem do carrossel"
      >
        {images.map((image, index) => (
          <button
            key={image.id}
            type="button"
            aria-label={`Ir para imagem ${index + 1} de ${images.length}`}
            aria-current={index === activeIndex ? "true" : undefined}
            onClick={() => handleManualNavigation(index)}
            className="interactive-control group grid size-8 place-items-center rounded-full"
          >
            <span
              aria-hidden="true"
              className={`block h-1.5 rounded-full transition-[width,background-color] duration-300 ${
                index === activeIndex
                  ? "w-6 bg-accent"
                  : "w-1.5 bg-ink/25 group-hover:bg-forest"
              }`}
            />
          </button>
        ))}
      </div>

      <p
        className="sr-only"
        aria-live={autoplayIsRunning ? "off" : "polite"}
        aria-atomic="true"
      >
        Imagem {activeIndex + 1} de {images.length}
      </p>
    </div>
  );
}
