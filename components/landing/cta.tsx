import { FadeUp } from "./animations/fade-up";
import { CtaButtons } from "./cta-buttons";

export function Cta() {
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
        <FadeUp>
          <h2 className="m-0 mb-[18px] text-balance text-[36px] font-bold leading-[1.1] tracking-[-1.2px] text-white md:text-[44px] md:tracking-[-1.5px] lg:text-[52px] lg:tracking-[-1.8px]">
            오늘 방문부터
            <br />
            소독노트로 기록해보세요.
          </h2>
        </FadeUp>
        <FadeUp delay={80}>
          <p className="m-0 mb-9 text-[16px] font-medium leading-[1.55] tracking-tight text-white/85 md:text-[18px]">
            베타 오픈이므로 전 기능 무료입니다. 신용카드도, 도입 미팅도 필요 없습니다.
          </p>
        </FadeUp>
        <FadeUp delay={160} className="flex flex-wrap justify-center gap-3">
          <CtaButtons />
        </FadeUp>
      </div>
    </section>
  );
}
