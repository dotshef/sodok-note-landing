"use client";

import { useEffect, useRef, useState } from "react";
import { FadeUp } from "./animations/fade-up";

type Step = {
  num: number;
  title: string;
  desc: string;
  video: string;
  poster?: string;
};

const STEPS: Step[] = [
  {
    num: 1,
    title: "가입",
    desc: "이메일로 30초 가입",
    video: "/flow/step1.mp4",
  },
  {
    num: 2,
    title: "고객 시설 등록",
    desc: "거래처 정보 한 번만 입력",
    video: "/flow/step2.mp4",
  },
  {
    num: 3,
    title: "방문 등록",
    desc: "캘린더에 일정 + 직원 배정",
    video: "/flow/step3.mp4",
  },
  {
    num: 4,
    title: "현장 완료",
    desc: "직원이 모바일에서 체크",
    video: "/flow/step4.mp4",
  },
  {
    num: 5,
    title: "소독증명서 발급",
    desc: "방문 완료 즉시 PDF로",
    video: "/flow/step5.mp4",
  },
];

const AUTO_ADVANCE_MS = 6000;

export function Flow() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [errored, setErrored] = useState<Record<number, boolean>>({});
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    if (paused) return;
    const id = window.setTimeout(() => {
      setActive((prev) => (prev + 1) % STEPS.length);
    }, AUTO_ADVANCE_MS);
    return () => window.clearTimeout(id);
  }, [active, paused]);

  useEffect(() => {
    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      if (i === active) {
        try {
          v.currentTime = 0;
        } catch {}
        v.play().catch(() => {});
      } else {
        v.pause();
      }
    });
  }, [active]);

  const activeStep = STEPS[active];
  const activeErrored = errored[active];

  const handleSelect = (i: number) => {
    if (i === active) {
      const v = videoRefs.current[i];
      if (v) {
        try {
          v.currentTime = 0;
        } catch {}
        v.play().catch(() => {});
      }
      return;
    }
    setActive(i);
  };

  return (
    <section id="flow" className="bg-[var(--bg-alt)] py-24 md:py-[120px]">
      <div className="mx-auto w-full max-w-[1200px] px-5 md:px-8">
        <FadeUp>
          <span className="block text-center text-[22px] font-semibold uppercase tracking-[0.7px] text-[var(--color-brand-primary)]">
            사용 흐름
          </span>
        </FadeUp>
        <FadeUp delay={80}>
          <h2 className="mx-auto mt-3.5 max-w-[800px] text-balance text-center text-[34px] font-bold leading-[1.1] tracking-[-1.2px] text-foreground md:text-[42px] md:tracking-[-1.5px] lg:text-[48px] lg:tracking-[-1.6px]">
            5분이면, 다음 방문부터 소독노트로
          </h2>
        </FadeUp>
        <FadeUp delay={160}>
          <p className="mx-auto mt-3 max-w-[640px] text-balance text-center text-[18px] font-medium leading-[1.5] tracking-tight text-[var(--muted)] md:text-[19px]">
            설치 없이, 가입부터 첫 방문 등록까지 한 번에 사용할 수 있습니다.
          </p>
        </FadeUp>

        <div
          className="relative mt-16 grid grid-cols-5 gap-1 md:gap-0"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <span
            aria-hidden
            className="absolute left-[10%] right-[10%] top-7 hidden h-0.5 md:top-8 md:block"
            style={{
              background:
                "repeating-linear-gradient(90deg, rgba(0,144,152,0.3) 0 6px, transparent 6px 12px)",
            }}
          />
          {STEPS.map((s, i) => {
            const isActive = i === active;
            return (
              <button
                key={s.num}
                type="button"
                onClick={() => handleSelect(i)}
                aria-label={`${s.num}단계: ${s.title}`}
                aria-pressed={isActive}
                className="relative z-10 flex flex-col items-center px-1 text-center md:px-3"
              >
                <div
                  className={`mb-2 inline-flex h-14 w-14 items-center justify-center rounded-full border-2 text-[20px] font-bold leading-none transition-all duration-200 md:mb-5 md:h-16 md:w-16 md:text-[22px] ${
                    isActive
                      ? "border-[var(--color-brand-primary)] bg-[var(--color-brand-primary)] text-white"
                      : "border-[var(--color-brand-primary)] bg-white text-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary-soft)]"
                  }`}
                  style={{
                    boxShadow: isActive
                      ? "0 8px 24px rgba(0, 144, 152, 0.35)"
                      : "0 2px 12px rgba(0, 144, 152, 0.12)",
                  }}
                >
                  {s.num}
                </div>
                <h4
                  className={`hidden text-[14px] font-bold leading-[1.3] tracking-[-0.4px] transition-colors md:block md:text-[17px] ${
                    isActive
                      ? "text-foreground"
                      : "text-[var(--muted-foreground)]"
                  }`}
                >
                  {s.title}
                </h4>
              </button>
            );
          })}
        </div>

        <FadeUp delay={120}>
          <div
            className="mt-10 md:mt-14"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onTouchStart={() => setPaused(true)}
            onTouchEnd={() => setPaused(false)}
          >
            <div
              className="relative mx-auto w-full max-w-[960px] overflow-hidden rounded-2xl bg-black"
              style={{
                aspectRatio: "16 / 9",
                boxShadow:
                  "0 30px 60px -20px rgba(0, 144, 152, 0.25), 0 12px 28px -10px rgba(0, 0, 0, 0.15)",
              }}
            >
              {STEPS.map((s, i) => (
                <video
                  key={s.num}
                  ref={(el) => {
                    videoRefs.current[i] = el;
                  }}
                  src={s.video}
                  poster={s.poster}
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  onError={() =>
                    setErrored((prev) => ({ ...prev, [i]: true }))
                  }
                  className={`absolute inset-0 h-full w-full bg-black object-contain transition-opacity duration-500 ${
                    i === active
                      ? "opacity-100"
                      : "pointer-events-none opacity-0"
                  }`}
                />
              ))}

              {activeErrored && (
                <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-2 text-white/70">
                  <span className="text-[14px] font-medium uppercase tracking-[1px] text-white/50">
                    Step {activeStep.num}
                  </span>
                  <span className="text-[18px] font-semibold">
                    영상 준비 중
                  </span>
                </div>
              )}

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/15">
                <div
                  key={`${active}-${paused}`}
                  className="h-full origin-left bg-[var(--color-brand-primary)]"
                  style={{
                    animation: paused
                      ? "none"
                      : `flow-progress ${AUTO_ADVANCE_MS}ms linear forwards`,
                  }}
                />
              </div>
            </div>

            <div className="mx-auto mt-6 max-w-[640px] text-center">
              <h3 className="text-[20px] font-bold leading-[1.3] tracking-[-0.5px] text-foreground md:text-[22px]">
                {activeStep.num}. {activeStep.title}
              </h3>
              <p className="mt-2 text-[15px] leading-[1.6] text-[var(--muted)] md:text-[16px]">
                {activeStep.desc}
              </p>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
