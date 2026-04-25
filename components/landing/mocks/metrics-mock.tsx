export function MetricsMock() {
  return (
    <div className="rounded-lg border border-border bg-background p-4">
      <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
        <Metric label="오늘" value="12" delta="+3" tone="primary" />
        <Metric label="이번 주" value="48" delta="+8" tone="default" />
        <Metric label="미완료" value="3" delta="-1" tone="warning" />
        <Metric label="이번 달 완료" value="142" delta="+19" tone="accent" />
      </div>

      <div className="mt-4 rounded-md border border-border bg-card p-4">
        <div className="flex items-center justify-between">
          <p className="text-base font-medium text-foreground">월별 완료 추이</p>
          <span className="text-base text-muted">최근 6개월</span>
        </div>
        <div className="mt-3 flex items-end gap-2 h-24">
          {[88, 102, 96, 124, 138, 142].map((v, i) => (
            <div key={i} className="flex flex-1 flex-col items-center gap-1">
              <div
                className="w-full rounded-md bg-primary/80"
                style={{ height: `${(v / 150) * 80}px` }}
              />
              <span className="text-base text-muted tabular-nums">{v}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between rounded-md border border-warning/30 bg-warning/5 px-3 py-2.5">
        <p className="text-base text-warning">
          <span className="font-medium">미완료 3건</span> — 보고서 마감 전 정리하세요
        </p>
        <button
          type="button"
          className="rounded-md bg-warning/10 px-3 py-1 text-base font-medium text-warning"
        >
          목록 보기 →
        </button>
      </div>
    </div>
  );
}

function Metric({
  label,
  value,
  delta,
  tone,
}: {
  label: string;
  value: string;
  delta: string;
  tone: "primary" | "default" | "warning" | "accent";
}) {
  const ring: Record<typeof tone, string> = {
    primary: "border-primary/30 bg-primary/5",
    default: "border-border bg-card",
    warning: "border-warning/30 bg-warning/5",
    accent: "border-accent/30 bg-accent/5",
  };
  const text: Record<typeof tone, string> = {
    primary: "text-primary",
    default: "text-foreground",
    warning: "text-warning",
    accent: "text-accent",
  };
  return (
    <div className={`rounded-md border p-3 ${ring[tone]}`}>
      <p className="text-base text-muted">{label}</p>
      <div className="mt-1 flex items-baseline gap-2">
        <p className={`text-2xl font-semibold tabular-nums ${text[tone]}`}>
          {value}
        </p>
        <span className="text-base text-muted tabular-nums">{delta}</span>
      </div>
    </div>
  );
}
