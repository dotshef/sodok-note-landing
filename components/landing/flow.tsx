type Step = {
  num: string;
  title: string;
  desc: string;
};

const STEPS: Step[] = [
  { num: "01", title: "가입", desc: "이메일로 30초 가입" },
  { num: "02", title: "시설 등록", desc: "거래처 정보 1회만 입력" },
  { num: "03", title: "방문 등록", desc: "캘린더에 일정·담당 직원 배정" },
  { num: "04", title: "현장 완료", desc: "직원이 모바일에서 완료 체크" },
  { num: "05", title: "보고/추적", desc: "대시보드에서 미완료·월별 확인" },
];

export function Flow() {
  return (
    <section id="flow" className="border-b border-border bg-surface-soft/40">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="max-w-2xl">
          <p className="text-base font-medium uppercase tracking-wide text-primary">
            사용 흐름
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-4xl">
            가입부터 보고까지, 5단계.
          </h2>
          <p className="mt-3 text-lg text-muted">
            기존 업무 흐름을 그대로 옮겼습니다 — 새로 배울 게 없습니다.
          </p>
        </div>

        <ol className="mt-12 grid gap-4 md:grid-cols-5 md:gap-3">
          {STEPS.map((s, i) => (
            <li key={s.num} className="relative">
              <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-base font-semibold tabular-nums text-primary">
                    {s.num}
                  </span>
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-primary/10 text-primary">
                    <StepIcon i={i} />
                  </span>
                </div>
                <p className="mt-4 text-lg font-semibold text-foreground">
                  {s.title}
                </p>
                <p className="mt-1 text-base leading-relaxed text-muted">
                  {s.desc}
                </p>
              </div>
              {i < STEPS.length - 1 && (
                <span
                  aria-hidden
                  className="absolute right-[-10px] top-1/2 hidden -translate-y-1/2 text-muted md:inline"
                >
                  →
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function StepIcon({ i }: { i: number }) {
  const icons = [
    <path key="0" d="M12 12c2.5 0 4.5-2 4.5-4.5S14.5 3 12 3 7.5 5 7.5 7.5 9.5 12 12 12zm0 2c-3 0-9 1.5-9 4.5V21h18v-2.5c0-3-6-4.5-9-4.5z" />,
    <path key="1" d="M4 6h16M4 12h10M4 18h16" strokeLinecap="round" />,
    <path key="2" d="M6 4h12v16H6zM9 9h6M9 13h6M9 17h4" strokeLinecap="round" />,
    <path key="3" d="M5 12l4 4L19 6" strokeLinecap="round" strokeLinejoin="round" />,
    <path key="4" d="M4 19V5m0 14h16M8 17V11m4 6V8m4 9v-4" strokeLinecap="round" />,
  ];
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill={i === 0 || i === 2 ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={i === 0 || i === 2 ? 0 : 2}
    >
      {icons[i]}
    </svg>
  );
}
