type Step = {
  num: number;
  title: string;
  desc: string;
};

const STEPS: Step[] = [
  { num: 1, title: "가입", desc: "이메일로 30초 가입." },
  { num: 2, title: "시설 등록", desc: "거래처 정보 한 번만 입력." },
  { num: 3, title: "방문 등록", desc: "캘린더에 일정 + 직원 배정." },
  { num: 4, title: "현장 완료", desc: "직원이 모바일에서 체크." },
  { num: 5, title: "현황 확인", desc: "대시보드에서 한눈에." },
];

export function Flow() {
  return (
    <section id="flow" className="bg-[var(--bg-alt)] py-24 md:py-[120px]">
      <div className="mx-auto w-full max-w-[1200px] px-5 md:px-8">
        <span className="reveal block text-center text-[22px] font-semibold uppercase tracking-[0.7px] text-[var(--color-brand-primary)]">
          사용 흐름
        </span>
        <h2 className="reveal reveal-delay-1 mx-auto mt-3.5 max-w-[800px] text-balance text-center text-[34px] font-bold leading-[1.1] tracking-[-1.2px] text-foreground md:text-[42px] md:tracking-[-1.5px] lg:text-[48px] lg:tracking-[-1.6px]">
          5분이면, 다음 방문부터 소독노트로.
        </h2>
        <p className="reveal reveal-delay-2 mx-auto mt-3 max-w-[640px] text-balance text-center text-[18px] font-medium leading-[1.5] tracking-tight text-[var(--muted)] md:text-[19px]">
          설치 없이, 가입부터 첫 방문 등록까지 — 그대로 시작할 수 있습니다.
        </p>

        <div className="relative mt-16 grid grid-cols-2 gap-8 md:grid-cols-5 md:gap-0">
          <span
            aria-hidden
            className="absolute left-[10%] right-[10%] top-8 hidden h-0.5 md:block"
            style={{
              background:
                "repeating-linear-gradient(90deg, rgba(0,144,152,0.3) 0 6px, transparent 6px 12px)",
            }}
          />
          {STEPS.map((s, i) => (
            <div
              key={s.num}
              className={`reveal reveal-delay-${i + 1} relative z-10 flex flex-col items-center px-3 text-center`}
            >
              <div
                className="mb-5 inline-flex h-16 w-16 items-center justify-center rounded-full border-2 border-[var(--color-brand-primary)] bg-white text-[22px] font-bold leading-none text-[var(--color-brand-primary)]"
                style={{ boxShadow: "0 2px 12px rgba(0, 144, 152, 0.12)" }}
              >
                {s.num}
              </div>
              <h4 className="mb-2 text-[18px] font-bold leading-[1.3] tracking-[-0.4px] text-foreground">
                {s.title}
              </h4>
              <p className="m-0 max-w-[200px] text-[14px] leading-[1.5] text-[var(--muted)]">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
