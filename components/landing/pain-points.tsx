import { FadeUp } from "./animations/fade-up";

type Pain = {
  question: string;
  result: string;
  icon: React.ReactNode;
};

const PAINS: Pain[] = [
  {
    question: "지난주 그 시설, 누가 갔지?",
    result: "카톡, 엑셀을 뒤지다 시간이 다 가버립니다.",
    icon: (
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    ),
  },
  {
    question: "이번 달 빠뜨린 방문 있나?",
    result: "미완료 건이 보고서 마감 직전에야 보입니다.",
    icon: (
      <>
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
      </>
    ),
  },
  {
    question: "현장에서 바로 입력은 못 하나?",
    result: "직원은 결국 사무실 와서 다시 정리합니다.",
    icon: (
      <>
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <path d="M12 18h.01" />
      </>
    ),
  },
];

export function PainPoints() {
  return (
    <section className="bg-[var(--bg-alt)] py-24 md:py-[120px]">
      <div className="mx-auto w-full max-w-[1200px] px-5 md:px-8">
        <FadeUp>
          <span className="block text-center text-[22px] font-semibold uppercase tracking-[0.7px] text-[var(--color-brand-primary)]">
            이런 적 있으신가요
          </span>
        </FadeUp>
        <FadeUp delay={80}>
          <h2 className="mx-auto mt-3.5 max-w-[800px] text-balance text-center text-[34px] font-bold leading-[1.1] tracking-[-1.2px] text-foreground md:text-[42px] md:tracking-[-1.5px] lg:text-[48px] lg:tracking-[-1.6px]">
            현장은 빠른데,
            <br />
            기록은 항상 한 박자 늦었습니다.
          </h2>
        </FadeUp>

        <div className="mx-auto mt-12 grid max-w-[1100px] gap-5 md:mt-16 md:grid-cols-3">
          {PAINS.map((p, i) => (
            <FadeUp key={p.question} delay={(i + 1) * 80}>
              <article
                className="flex flex-col gap-[18px] rounded-[14px] border border-black/[0.06] bg-white px-7 py-8"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <p className="m-0 text-balance text-[20px] font-bold leading-[1.35] tracking-[-0.4px] text-foreground md:text-[22px]">
                  <span className="font-normal text-[var(--color-brand-primary)]">
                    “
                  </span>
                  {p.question}
                  <span className="font-normal text-[var(--color-brand-primary)]">
                    ”
                  </span>
                </p>
                <div className="flex items-start gap-2.5 border-t border-dashed border-black/10 pt-[18px]">
                  <svg
                    className="mt-0.5 h-[22px] w-[22px] flex-shrink-0 text-[var(--muted-foreground)]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.8}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    {p.icon}
                  </svg>
                  <p className="m-0 text-[15px] leading-[1.55] text-[var(--muted)]">
                    {p.result}
                  </p>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
