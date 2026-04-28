import Image from "next/image";
import { FadeUp } from "./animations/fade-up";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-16 pb-32 md:pt-24 md:pb-40">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-200px] h-[600px] w-[1100px] -translate-x-1/2"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0, 144, 152, 0.08), transparent 60%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1280px] px-5 md:px-8">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.3fr)] lg:gap-12 xl:gap-16">
          {/* Left: copy */}
          <div className="text-left">
            <FadeUp className="mb-6 inline-flex items-center gap-2 rounded-full bg-[var(--color-brand-primary-soft)] px-4 py-2 text-[15px] font-semibold tracking-tight text-[var(--color-brand-primary)] md:text-[16px]">
              <span className="h-2 w-2 rounded-full bg-[var(--color-brand-primary)]" />
              소독 방역 업체 전용 SaaS
            </FadeUp>

            <FadeUp delay={80}>
              <h1 className="mb-5 text-[40px] font-bold leading-[1.05] tracking-[-1.6px] text-balance text-foreground md:text-[52px] md:tracking-[-2px] lg:text-[60px] lg:tracking-[-2.2px]">
                <span className="text-[#a39e98]">엑셀·카톡</span> 그만.
                <br />
                소독 현장 운영은
                <br />
                <span className="text-[var(--color-brand-primary)]">
                  소독노트
                </span>
                로
              </h1>
            </FadeUp>

            <FadeUp delay={160}>
              <p className="mb-9 max-w-[520px] text-[17px] font-medium leading-[1.55] tracking-tight text-[var(--muted)] md:text-[19px]">
                시설별 방문 기록부터 현장 완료 체크, 미완료 추적까지 한 화면에서
                끝내는 소독 방역 업체 전용 운영 도구입니다.
              </p>
            </FadeUp>

            <FadeUp
              delay={240}
              className="mb-7 flex flex-wrap items-center gap-3"
            >
              <a
                href="https://app.sodoknote.com/signup"
                className="group inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-lg bg-[var(--color-brand-primary)] px-[22px] py-3 text-[16px] font-semibold text-white transition-colors hover:bg-[var(--color-brand-primary-active)] active:scale-[0.97]"
              >
                무료로 시작하기
                <span
                  aria-hidden
                  className="inline-block transition-transform group-hover:translate-x-0.5"
                >
                  →
                </span>
              </a>
            </FadeUp>

            <FadeUp delay={320}>
              <ul className="flex flex-col gap-2.5 text-[15px] font-medium text-[var(--muted)] md:text-[16px]">
                {[
                  "회원가입 30초",
                  "신용카드 불필요",
                  "베타 테스트 기간 전 기능 무료",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <span
                      aria-hidden
                      className="inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-[var(--color-brand-primary-soft)] text-[var(--color-brand-primary)]"
                    >
                      <svg
                        width="11"
                        height="11"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.5 6.5L4.8 8.8L9.5 3.5"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </FadeUp>
          </div>

          {/* Right: layered desktop + mobile mockup */}
          <FadeUp
            delay={200}
            className="relative mx-auto w-full max-w-[640px] lg:-mt-10 lg:mr-[-4%] lg:max-w-none xl:-mt-16 xl:mr-[-8%]"
          >
            <div className="relative">
              {/* Desktop monitor mockup */}
              <MonitorMockup />

              {/* Mobile phone mockup overlapping bottom-left */}
              <div
                aria-hidden
                className="absolute -bottom-20 -left-4 w-[24%] min-w-[110px] max-w-[150px] -rotate-[6deg] sm:-bottom-24 sm:-left-6"
                style={{
                  filter:
                    "drop-shadow(0 24px 36px rgba(0, 0, 0, 0.18)) drop-shadow(0 8px 14px rgba(0, 0, 0, 0.08))",
                }}
              >
                <PhoneMockup />
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

function MonitorMockup() {
  return (
    <div className="relative">
      {/* Monitor frame */}
      <div
        className="rounded-[14px] bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] p-1.5 md:rounded-[16px] md:p-2"
        style={{
          boxShadow:
            "0 30px 60px -20px rgba(0, 0, 0, 0.25), 0 12px 28px -10px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.08)",
        }}
      >
        <div className="overflow-hidden rounded-[10px] bg-white md:rounded-[12px]">
          <Image
            src="/images/dashboard-screen.png"
            alt="소독노트 대시보드"
            width={2400}
            height={1500}
            className="block h-auto w-full"
            priority
          />
        </div>
      </div>

      {/* Stand neck */}
      <div className="mx-auto h-5 w-[18%] bg-gradient-to-b from-[#222] to-[#1a1a1a] md:h-7" />

      {/* Stand base */}
      <div
        className="mx-auto h-1.5 w-[32%] rounded-b-[10px] bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] md:h-2"
        style={{
          boxShadow: "0 6px 14px -4px rgba(0, 0, 0, 0.25)",
        }}
      />
    </div>
  );
}

function PhoneMockup() {
  return (
    <div className="relative aspect-[9/19] w-full rounded-[28px] border-[7px] border-[#1a1a1a] bg-[#1a1a1a]">
      {/* Screen */}
      <div className="relative h-full w-full overflow-hidden rounded-[20px] bg-white">
        <Image
          src="/images/hero-mobile.jpg"
          alt="소독노트 모바일 화면"
          fill
          sizes="200px"
          className="object-contain"
        />

        {/* Notch */}
        <div className="absolute left-1/2 top-1.5 z-10 flex h-3.5 w-[42%] -translate-x-1/2 items-center justify-center rounded-full bg-[#1a1a1a]" />
      </div>
    </div>
  );
}
