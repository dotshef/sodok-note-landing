"use client";

import { useContactModal } from "./contact-modal";

export function CtaButtons() {
  const { openModal } = useContactModal();

  return (
    <>
      <a
        href="https://app.sodoknote.com/signup"
        className="group inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-lg bg-white px-[22px] py-3 text-[16px] font-semibold text-[var(--color-brand-primary)] transition-colors hover:bg-white/90 active:scale-[0.97]"
      >
        무료로 시작하기
        <span
          aria-hidden
          className="inline-block transition-transform group-hover:translate-x-0.5"
        >
          →
        </span>
      </a>
      <button
        type="button"
        onClick={openModal}
        className="inline-flex cursor-pointer items-center justify-center rounded-lg border border-white bg-transparent px-[22px] py-3 text-[16px] font-semibold text-white transition-colors hover:bg-white hover:text-[var(--color-brand-primary)] active:scale-[0.97]"
      >
        문의하기
      </button>
    </>
  );
}
