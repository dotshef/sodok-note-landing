type Props = {
  compact?: boolean;
};

export function MobileVisitPreview({ compact = false }: Props) {
  return (
    <div
      className={`overflow-hidden rounded-[2rem] border border-border bg-card p-2 shadow-[0_24px_60px_-20px_rgba(15,23,42,0.5)] ${
        compact ? "w-full max-w-xs" : "w-60"
      }`}
    >
      <div className="rounded-[1.6rem] bg-background p-4">
        <div className="flex items-center justify-between">
          <span className="text-base font-semibold text-foreground">방문</span>
          <span className="rounded-full bg-accent/10 px-2 py-0.5 text-base text-accent">
            완료 예정
          </span>
        </div>

        <p className="mt-3 text-lg font-semibold leading-snug text-foreground">
          가양 어린이집
        </p>
        <p className="mt-1 text-base text-muted">서울 강서구 가양동 · 240㎡</p>

        <dl className="mt-4 space-y-2 rounded-lg border border-border bg-card p-3">
          <Row label="방문 코드" value="V-2604-018" />
          <Row label="담당" value="박실무" />
          <Row label="일시" value="04/25 13:00" />
        </dl>

        <button
          type="button"
          className="mt-4 w-full rounded-lg bg-accent py-3 text-base font-medium text-accent-foreground"
        >
          현장 완료 체크
        </button>

        <p className="mt-3 text-base text-muted">
          탭 한 번이면 끝. 사무실 복귀 없이 처리.
        </p>
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between text-base">
      <dt className="text-muted">{label}</dt>
      <dd className="font-medium text-foreground tabular-nums">{value}</dd>
    </div>
  );
}
