"use client";

import { useEffect, useRef, useState } from "react";

type FadeUpProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
};

export function FadeUp({ children, delay = 0, className }: FadeUpProps) {
  const [hidden, setHidden] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduced) return;

    const rect = el.getBoundingClientRect();
    const inViewport = rect.top < window.innerHeight && rect.bottom > 0;

    let observer: IntersectionObserver | null = null;
    let tHide: number | undefined;

    if (!inViewport) {
      tHide = window.setTimeout(() => setHidden(true), 0);

      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            window.setTimeout(() => setHidden(false), delay);
            observer?.disconnect();
          }
        },
        { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
      );
      observer.observe(el);
    }

    const onPageShow = (e: PageTransitionEvent) => {
      if (e.persisted) setHidden(false);
    };
    window.addEventListener("pageshow", onPageShow);

    return () => {
      if (tHide !== undefined) window.clearTimeout(tHide);
      observer?.disconnect();
      window.removeEventListener("pageshow", onPageShow);
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className ?? ""} ${
        hidden ? "opacity-0 translate-y-6" : "opacity-100 translate-y-0"
      }`}
    >
      {children}
    </div>
  );
}
