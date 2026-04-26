"use client";

import Link from "next/link";
import { useContactModal } from "./contact-modal";

export function Cta() {
  const { openModal } = useContactModal();

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24 md:py-[120px]"
      style={{
        background:
          "linear-gradient(135deg, #007378 0%, #009098 50%, #00aab1 100%)",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.08), transparent 40%), radial-gradient(circle at 80% 70%, rgba(255, 255, 255, 0.06), transparent 40%)",
        }}
      />
      <div className="relative mx-auto max-w-[800px] px-5 text-center md:px-8">
        <h2 className="reveal m-0 mb-[18px] text-balance text-[36px] font-bold leading-[1.1] tracking-[-1.2px] text-white md:text-[44px] md:tracking-[-1.5px] lg:text-[52px] lg:tracking-[-1.8px]">
          오늘 방문부터
          <br />
          소독노트로 기록해보세요.
        </h2>
        <p className="reveal reveal-delay-1 m-0 mb-9 text-[16px] font-medium leading-[1.55] tracking-tight text-white/85 md:text-[18px]">
          지금은 전 기능 무료. 신용카드도, 도입 미팅도 필요 없습니다.
        </p>
        <div className="reveal reveal-delay-2 flex flex-wrap justify-center gap-3">
          <Link
            href="/console"
            className="group inline-flex cursor-default items-center justify-center gap-1.5 rounded-lg bg-white px-[22px] py-3 text-[16px] font-semibold text-[var(--color-brand-primary)] transition-colors hover:bg-white/90 active:scale-[0.97]"
          >
            콘솔로 이동
            <span
              aria-hidden
              className="inline-block transition-transform group-hover:translate-x-0.5"
            >
              →
            </span>
          </Link>
          <button
            type="button"
            onClick={openModal}
            className="inline-flex cursor-default items-center justify-center rounded-lg border border-white bg-transparent px-[22px] py-3 text-[16px] font-semibold text-white transition-colors hover:bg-white hover:text-[var(--color-brand-primary)] active:scale-[0.97]"
          >
            1:1 문의하기
          </button>
        </div>
      </div>
    </section>
  );
}
