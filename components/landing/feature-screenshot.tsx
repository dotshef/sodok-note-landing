"use client";

import Image from "next/image";
import { useLightbox, type Visual } from "./lightbox";

export function FeatureScreenshot({
  visual,
  priority = false,
}: {
  visual: Visual;
  priority?: boolean;
}) {
  const { open } = useLightbox();
  const handleClick = () => open(visual);

  if (visual.type === "mobile") {
    return (
      <div className="mx-auto w-full max-w-[280px] md:max-w-[320px]">
        <button
          type="button"
          onClick={handleClick}
          aria-label={`${visual.alt} 크게 보기`}
          className="block w-full cursor-zoom-in overflow-hidden rounded-[20px] border border-black/[0.06] bg-white p-0 transition-transform hover:scale-[1.01]"
          style={{ boxShadow: "var(--shadow-feature)" }}
        >
          <Image
            src={visual.src}
            alt={visual.alt}
            width={1080}
            height={2280}
            className="block h-auto w-full"
          />
        </button>
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={`${visual.alt} 크게 보기`}
      className="group block w-full cursor-zoom-in overflow-hidden rounded-xl border border-black/[0.06] bg-white p-0 transition-transform hover:scale-[1.01]"
      style={{ boxShadow: "var(--shadow-feature)" }}
    >
      <Image
        src={visual.src}
        alt={visual.alt}
        width={2400}
        height={1500}
        priority={priority}
        className="block h-auto w-full"
      />
    </button>
  );
}
