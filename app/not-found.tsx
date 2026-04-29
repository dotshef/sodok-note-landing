import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "페이지를 찾을 수 없습니다 — 소독노트",
  description: "요청하신 페이지를 찾을 수 없습니다.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <main className="flex min-h-[80vh] flex-1 flex-col items-center justify-center px-5 py-20 text-center">
      <p className="text-[13px] font-semibold uppercase tracking-[0.24em] text-[var(--color-brand-primary)]">
        404
      </p>
      <h1 className="m-0 mt-4 text-balance text-[32px] font-bold leading-[1.2] tracking-[-1px] text-foreground md:text-[40px] md:tracking-[-1.4px]">
        페이지를 찾을 수 없습니다
      </h1>
      <p className="m-0 mt-3 max-w-[420px] break-keep text-[15px] leading-[1.6] text-[var(--muted)] md:text-[16px]">
        요청하신 주소가 잘못되었거나, 페이지가 이동·삭제되었을 수 있습니다.
      </p>
      <Link
        href="/"
        className="mt-9 inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-lg bg-[var(--color-brand-primary)] px-[22px] py-3 text-[15px] font-semibold text-white transition-colors hover:bg-[var(--color-brand-primary-active)] active:scale-[0.97]"
      >
        홈으로 돌아가기
        <span aria-hidden>→</span>
      </Link>
    </main>
  );
}
