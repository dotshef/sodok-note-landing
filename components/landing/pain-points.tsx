type Pain = {
  icon: string;
  question: string;
  result: string;
};

const PAINS: Pain[] = [
  {
    icon: "📋",
    question: "지난주 그 시설, 누가 갔지?",
    result: "카톡·엑셀을 뒤지다 시간이 다 간다.",
  },
  {
    icon: "📅",
    question: "이번 달 빠뜨린 방문 있나?",
    result: "미완료 건이 보고서 마감 직전에야 보인다.",
  },
  {
    icon: "📱",
    question: "현장에서 바로 입력은 못 하나?",
    result: "직원은 결국 사무실 와서 다시 정리한다.",
  },
];

export function PainPoints() {
  return (
    <section className="border-b border-border bg-surface-soft/40">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 md:px-8 md:py-24">
        <div className="max-w-2xl">
          <p className="text-base font-medium uppercase tracking-wide text-primary">
            이런 적, 있으신가요?
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-4xl">
            방문 기록은 흩어져 있고,
            <br />
            미완료는 마감 직전에야 보입니다.
          </h2>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3 md:gap-5">
          {PAINS.map((p) => (
            <article
              key={p.question}
              className="rounded-xl border border-border bg-card p-6 shadow-sm transition hover:border-primary/40"
            >
              <div className="text-3xl" aria-hidden>
                {p.icon}
              </div>
              <p className="mt-5 text-lg font-medium text-foreground">
                “{p.question}”
              </p>
              <p className="mt-2 text-base leading-relaxed text-muted">
                {p.result}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
