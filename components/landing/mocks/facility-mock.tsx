export function FacilityMock() {
  const history = [
    { date: "2026.04.18", staff: "박실무", note: "주방 배수구 집중 — 이상 없음", status: "완료" },
    { date: "2026.03.20", staff: "김현장", note: "벽면 균열부 충진 후 약제 도포", status: "완료" },
    { date: "2026.02.22", staff: "이주임", note: "화장실 트랩 막힘 — 후속 점검 필요", status: "완료" },
    { date: "2026.01.24", staff: "박실무", note: "정기 약제 살포", status: "완료" },
  ];
  return (
    <div className="rounded-lg border border-border bg-background p-4">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-base font-semibold text-foreground">
            동서식품 본사 카페테리아
          </p>
          <p className="mt-0.5 text-base text-muted">
            서울 종로구 새문안로 · 480㎡ · 식음 시설
          </p>
        </div>
        <span className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 text-base text-accent">
          이력 12건
        </span>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2 text-base">
        <Field label="담당자" value="김매니저 (010-****-1284)" />
        <Field label="다음 방문" value="2026.05.18 (화)" />
      </div>

      <div className="mt-5">
        <p className="text-base font-medium text-foreground">방문 이력</p>
        <ul className="mt-3 space-y-3 border-l border-border pl-4">
          {history.map((h) => (
            <li key={h.date} className="relative">
              <span className="absolute -left-[21px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-background" />
              <div className="flex items-center justify-between text-base">
                <span className="font-medium tabular-nums text-foreground">
                  {h.date}
                </span>
                <span className="text-muted">{h.staff}</span>
              </div>
              <p className="mt-0.5 text-base leading-relaxed text-muted">
                {h.note}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-border bg-card px-3 py-2">
      <p className="text-base text-muted">{label}</p>
      <p className="mt-0.5 text-base font-medium text-foreground">{value}</p>
    </div>
  );
}
