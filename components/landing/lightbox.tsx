"use client";

import Image from "next/image";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type Visual = {
  type: "desktop" | "mobile";
  src: string;
  alt: string;
};

type LightboxContextValue = {
  open: (visual: Visual) => void;
};

const LightboxContext = createContext<LightboxContextValue | null>(null);

export function useLightbox(): LightboxContextValue {
  const ctx = useContext(LightboxContext);
  if (!ctx) {
    throw new Error("useLightbox must be used within <LightboxProvider>");
  }
  return ctx;
}

export function LightboxProvider({ children }: { children: React.ReactNode }) {
  const [visual, setVisual] = useState<Visual | null>(null);

  const value = useMemo<LightboxContextValue>(
    () => ({ open: (v) => setVisual(v) }),
    []
  );

  useEffect(() => {
    if (!visual) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setVisual(null);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [visual]);

  const close = useCallback(() => setVisual(null), []);

  return (
    <LightboxContext.Provider value={value}>
      {children}
      {visual && <Lightbox visual={visual} onClose={close} />}
    </LightboxContext.Provider>
  );
}

function Lightbox({
  visual,
  onClose,
}: {
  visual: Visual;
  onClose: () => void;
}) {
  const isMobile = visual.type === "mobile";
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={visual.alt}
      onClick={onClose}
      className="lightbox-overlay fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm md:p-8"
    >
      <button
        type="button"
        aria-label="닫기"
        onClick={onClose}
        className="absolute right-4 top-4 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:right-6 md:top-6 md:h-11 md:w-11"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M18 6 6 18M6 6l12 12" />
        </svg>
      </button>

      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative ${
          isMobile ? "max-h-[90vh] w-auto" : "w-full max-w-[1400px]"
        }`}
      >
        <Image
          src={visual.src}
          alt={visual.alt}
          width={isMobile ? 1080 : 2400}
          height={isMobile ? 2280 : 1500}
          className={`block ${
            isMobile
              ? "h-auto max-h-[90vh] w-auto rounded-[24px]"
              : "h-auto w-full rounded-xl"
          }`}
          style={{
            boxShadow:
              "0 30px 60px -20px rgba(0, 0, 0, 0.4), 0 12px 28px -10px rgba(0, 0, 0, 0.2)",
          }}
        />
      </div>
    </div>
  );
}
