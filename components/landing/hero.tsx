import Link from "next/link";
import { DashboardPreview } from "./mocks/dashboard-preview";
import { MobileVisitPreview } from "./mocks/mobile-visit-preview";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_30%_0%,var(--color-surface-soft)_0%,transparent_60%)]"
      />
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 pt-16 pb-20 md:grid-cols-[1.05fr_1fr] md:gap-10 md:px-8 md:pt-24 md:pb-28 lg:gap-14">
        <div className="flex flex-col justify-center">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-base text-muted">
            <span className="h-2 w-2 rounded-full bg-accent" />
            소독·방역 현장 운영 SaaS
          </span>

          <h1 className="mt-6 text-4xl font-semibold leading-[1.15] tracking-tight text-foreground md:text-5xl lg:text-6xl">
            소독 방문 일정,
            <br />
            이제 한 곳에서 끝.
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted md:text-xl">
            엑셀·카톡 대신 — 시설별 방문 기록, 현장 완료 체크, 미완료 추적까지.
            소독·방역 현장에 맞춰 만든 운영 도구.
          </p>

          <div className="mt-8 flex flex-col gap-3 md:flex-row md:items-center">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3.5 text-lg font-medium text-primary-foreground shadow-sm transition hover:opacity-90"
            >
              무료로 시작하기
            </Link>
            <a
              href="#demo"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-6 py-3.5 text-lg font-medium text-foreground transition hover:bg-surface-soft"
            >
              데모 보기
              <span aria-hidden>→</span>
            </a>
          </div>

          <p className="mt-6 inline-flex items-center gap-2 text-base text-muted">
            <CheckIcon />
            현장 직원도 1분이면 입력 완료
          </p>
        </div>

        <div className="relative">
          <div className="relative">
            <DashboardPreview />
            <div className="absolute -bottom-8 -left-6 hidden md:block lg:-bottom-10 lg:-left-10">
              <MobileVisitPreview />
            </div>
            <div className="mt-4 md:hidden">
              <MobileVisitPreview compact />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className="text-accent"
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}
