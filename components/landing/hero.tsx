import Image from "next/image";
import Link from "next/link";
import { FadeUp } from "./animations/fade-up";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-20 text-center">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-200px] h-[600px] w-[1100px] -translate-x-1/2"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0, 144, 152, 0.08), transparent 60%)",
        }}
      />

      <div className="relative">
        <FadeUp className="mb-7 inline-flex items-center gap-2 rounded-full bg-[var(--color-brand-primary-soft)] px-5 py-2.5 text-[17px] font-semibold tracking-tight text-[var(--color-brand-primary)]">
          <span className="h-2 w-2 rounded-full bg-[var(--color-brand-primary)]" />
          소독·방역업체를 위한 올인원 운영 도구
        </FadeUp>

        <FadeUp delay={80}>
          <h1 className="mx-auto mb-5 max-w-[980px] px-5 text-[44px] font-bold leading-[1.05] tracking-[-1.6px] text-balance text-foreground md:text-[60px] md:tracking-[-2.2px] lg:text-[72px] lg:tracking-[-2.5px]">
            <span className="text-[#a39e98]">엑셀, 카톡</span> 그만.
            <br />
            소독 현장 운영은
            <br />
            <span className="text-[var(--color-brand-primary)]">소독노트</span>
            로
          </h1>
        </FadeUp>

        <FadeUp delay={160}>
          <p className="mx-auto mb-8 max-w-[680px] px-5 text-[18px] font-medium leading-[1.5] tracking-tight text-[var(--muted)] md:text-[20px]">
            시설별 방문 기록부터 현장 완료 체크, 미완료 추적까지
            <br className="hidden md:inline" />
            한 화면에서 끝내는 소독·방역 전용 관리 프로그램
          </p>
        </FadeUp>

        <FadeUp
          delay={240}
          className="mb-5 inline-flex flex-wrap items-center justify-center gap-3 px-5"
        >
          <Link
            href="/signup"
            className="group inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-lg bg-[var(--color-brand-primary)] px-[22px] py-3 text-[16px] font-semibold text-white transition-colors hover:bg-[var(--color-brand-primary-active)] active:scale-[0.97]"
          >
            무료로 시작하기
            <span
              aria-hidden
              className="inline-block transition-transform group-hover:translate-x-0.5"
            >
              →
            </span>
          </Link>
          <a
            href="#flow"
            className="inline-flex cursor-pointer items-center justify-center rounded-lg bg-black/5 px-[22px] py-3 text-[16px] font-semibold text-foreground transition-colors hover:bg-black/[0.08] active:scale-[0.97]"
          >
            사용 흐름 보기
          </a>
        </FadeUp>

        <FadeUp delay={320}>
          <p className="mb-14 px-5 text-[14px] text-[var(--muted-foreground)]">
            회원가입 30초 · 신용카드 불필요 ·{" "}
            <b className="font-semibold text-[var(--muted)]">
              지금은 전 기능 무료
            </b>
          </p>
        </FadeUp>

        <FadeUp delay={400} className="relative mx-auto max-w-[1200px] px-6">
          <div
            className="overflow-hidden rounded-t-[14px] border border-b-0 border-black/[0.08] bg-white"
            style={{ boxShadow: "var(--shadow-screenshot)" }}
          >
            <Image
              src="/images/screen-dashboard.png"
              alt="소독노트 대시보드 화면"
              width={2400}
              height={1500}
              className="block h-auto w-full"
              priority
            />
          </div>
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-0 left-0 right-0 h-[100px]"
            style={{
              background:
                "linear-gradient(180deg, transparent, var(--bg-alt) 90%)",
            }}
          />
        </FadeUp>
      </div>
    </section>
  );
}
