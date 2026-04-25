export function CalendarMock() {
  const days = Array.from({ length: 30 }, (_, i) => i + 1);
  const events: Record<number, { tone: "primary" | "accent" | "warning"; n: number }[]> = {
    3: [{ tone: "accent", n: 2 }],
    7: [{ tone: "primary", n: 1 }, { tone: "accent", n: 2 }],
    10: [{ tone: "warning", n: 1 }],
    14: [{ tone: "primary", n: 3 }],
    18: [{ tone: "accent", n: 4 }],
    21: [{ tone: "primary", n: 2 }],
    25: [{ tone: "primary", n: 2 }, { tone: "warning", n: 1 }],
    28: [{ tone: "accent", n: 1 }],
  };
  const toneClass = {
    primary: "bg-primary",
    accent: "bg-accent",
    warning: "bg-warning",
  };
  return (
    <div className="rounded-lg border border-border bg-background p-4">
      <div className="flex items-center justify-between">
        <p className="text-base font-semibold text-foreground">2026년 4월</p>
        <div className="flex items-center gap-2 text-base text-muted">
          <span className="inline-flex items-center gap-1">
            <span className="h-2 w-2 rounded-sm bg-primary" /> 예정
          </span>
          <span className="inline-flex items-center gap-1">
            <span className="h-2 w-2 rounded-sm bg-accent" /> 완료
          </span>
          <span className="inline-flex items-center gap-1">
            <span className="h-2 w-2 rounded-sm bg-warning" /> 미완료
          </span>
        </div>
      </div>

      <div className="mt-3 grid grid-cols-7 gap-1 text-base text-muted">
        {["일", "월", "화", "수", "목", "금", "토"].map((d) => (
          <div key={d} className="px-1 py-1 text-center">
            {d}
          </div>
        ))}
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={`pad-${i}`} />
        ))}
        {days.map((d) => {
          const today = d === 25;
          const ev = events[d] ?? [];
          return (
            <div
              key={d}
              className={`min-h-12 rounded-md border px-1.5 py-1 text-base ${
                today
                  ? "border-primary bg-primary/5 text-primary"
                  : "border-border bg-card text-foreground"
              }`}
            >
              <div className="text-right tabular-nums">{d}</div>
              <div className="mt-0.5 flex flex-wrap gap-0.5">
                {ev.map((e, i) => (
                  <span
                    key={i}
                    className={`h-1.5 w-1.5 rounded-full ${toneClass[e.tone]}`}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
