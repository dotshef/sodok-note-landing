export function DashboardPreview() {
  return (
    <div className="relative rounded-2xl border border-border bg-card p-3 shadow-[0_24px_60px_-30px_rgba(15,23,42,0.35)] md:p-4">
      <div className="flex items-center gap-1.5 px-2 pb-3">
        <span className="h-2.5 w-2.5 rounded-full bg-rose-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
        <span className="ml-3 text-base text-muted">/ dashboard</span>
      </div>

      <div className="rounded-xl border border-border bg-background p-4 md:p-5">
        <div className="flex items-center justify-between">
          <p className="text-base font-semibold text-foreground">
            오늘 방문 현황
          </p>
          <span className="rounded-md bg-surface-soft px-2 py-1 text-base text-primary">
            2026.04.25
          </span>
        </div>

        <div className="mt-4 grid grid-cols-4 gap-2 md:gap-3">
          <StatCard label="오늘" value="12" tone="primary" />
          <StatCard label="이번 주" value="48" tone="default" />
          <StatCard label="미완료" value="3" tone="warning" />
          <StatCard label="이번 달 완료" value="142" tone="accent" />
        </div>

        <div className="mt-5 rounded-lg border border-border bg-card p-4">
          <div className="flex items-center justify-between">
            <p className="text-base font-medium text-foreground">주간 방문</p>
            <p className="text-base text-muted">예정·완료·미완료</p>
          </div>
          <WeeklyChart />
        </div>

        <div className="mt-4 grid grid-cols-1 gap-2">
          <VisitRow
            time="09:30"
            facility="동서식품 본사 카페테리아"
            staff="김현장"
            status="완료"
          />
          <VisitRow
            time="13:00"
            facility="가양 어린이집"
            staff="박실무"
            status="예정"
          />
          <VisitRow
            time="16:00"
            facility="신촌 베이커리 2호점"
            staff="이주임"
            status="미완료"
          />
        </div>
      </div>
    </div>
  );
}

function StatCard({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone: "primary" | "default" | "warning" | "accent";
}) {
  const toneRing: Record<typeof tone, string> = {
    primary: "border-primary/30 bg-primary/5",
    default: "border-border bg-card",
    warning: "border-warning/30 bg-warning/5",
    accent: "border-accent/30 bg-accent/5",
  };
  const toneText: Record<typeof tone, string> = {
    primary: "text-primary",
    default: "text-foreground",
    warning: "text-warning",
    accent: "text-accent",
  };
  return (
    <div className={`rounded-lg border p-3 ${toneRing[tone]}`}>
      <p className="text-base text-muted">{label}</p>
      <p className={`mt-1 text-2xl font-semibold tabular-nums ${toneText[tone]}`}>
        {value}
      </p>
    </div>
  );
}

function WeeklyChart() {
  const data = [
    { d: "월", planned: 8, done: 7, missed: 1 },
    { d: "화", planned: 10, done: 9, missed: 0 },
    { d: "수", planned: 12, done: 11, missed: 1 },
    { d: "목", planned: 9, done: 9, missed: 0 },
    { d: "금", planned: 14, done: 12, missed: 1 },
    { d: "토", planned: 6, done: 6, missed: 0 },
    { d: "일", planned: 3, done: 3, missed: 0 },
  ];
  const max = Math.max(...data.map((x) => x.planned));
  return (
    <div className="mt-3 flex items-end gap-2 h-28">
      {data.map((d) => (
        <div key={d.d} className="flex flex-1 flex-col items-center gap-1">
          <div className="flex w-full flex-col-reverse overflow-hidden rounded-md bg-surface-soft">
            <div
              className="w-full bg-accent"
              style={{ height: `${(d.done / max) * 90}px` }}
            />
            <div
              className="w-full bg-warning"
              style={{ height: `${(d.missed / max) * 90}px` }}
            />
            <div
              className="w-full bg-primary/30"
              style={{
                height: `${((d.planned - d.done - d.missed) / max) * 90}px`,
              }}
            />
          </div>
          <span className="text-base text-muted">{d.d}</span>
        </div>
      ))}
    </div>
  );
}

function VisitRow({
  time,
  facility,
  staff,
  status,
}: {
  time: string;
  facility: string;
  staff: string;
  status: "완료" | "예정" | "미완료";
}) {
  const statusColor = {
    완료: "bg-accent/10 text-accent border-accent/30",
    예정: "bg-primary/10 text-primary border-primary/30",
    미완료: "bg-warning/10 text-warning border-warning/30",
  }[status];
  return (
    <div className="flex items-center gap-3 rounded-md border border-border px-3 py-2.5">
      <span className="text-base font-medium tabular-nums text-foreground">
        {time}
      </span>
      <span className="flex-1 truncate text-base text-foreground">
        {facility}
      </span>
      <span className="hidden text-base text-muted md:inline">{staff}</span>
      <span
        className={`rounded-full border px-2.5 py-0.5 text-base ${statusColor}`}
      >
        {status}
      </span>
    </div>
  );
}
