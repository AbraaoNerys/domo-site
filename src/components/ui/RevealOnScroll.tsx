"use client";

import type { CSSProperties, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

type RevealOnScrollProps = {
  children: ReactNode;
  className?: string;
  delayMs?: number;
  trigger?: "load" | "scroll";
  variant?: "drop" | "zoom-in";
};

export default function RevealOnScroll({
  children,
  className = "",
  delayMs = 0,
  trigger = "scroll",
  variant = "drop",
}: RevealOnScrollProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (trigger === "load") {
      const animationFrame = window.requestAnimationFrame(() => {
        setIsVisible(true);
      });

      return () => window.cancelAnimationFrame(animationFrame);
    }

    const element = elementRef.current;
    if (!element) return;

    if (!("IntersectionObserver" in window)) {
      const animationFrame = requestAnimationFrame(() => {
        setIsVisible(true);
      });

      return () => cancelAnimationFrame(animationFrame);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        setIsVisible(true);
        observer.unobserve(entry.target);
      },
      {
        rootMargin: "0px 0px -8% 0px",
        threshold: 0.15,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [trigger]);

  const style = {
    "--reveal-delay": `${Math.max(0, delayMs)}ms`,
  } as CSSProperties;

  return (
    <div
      ref={elementRef}
      className={`scroll-reveal ${
        variant === "zoom-in" ? "scroll-reveal-zoom-in" : ""
      } ${
        isVisible ? "scroll-reveal-visible" : ""
      } ${className}`.trim()}
      style={style}
    >
      {children}
    </div>
  );
}
