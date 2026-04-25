export function MembersMock() {
  const members = [
    { name: "김현장", role: "현장 직원", today: 4, missed: 0 },
    { name: "박실무", role: "현장 직원", today: 5, missed: 1 },
    { name: "이주임", role: "현장 직원", today: 3, missed: 0 },
    { name: "사장님", role: "관리자", today: 0, missed: 0, owner: true },
  ];
  return (
    <div className="rounded-lg border border-border bg-background p-4">
      <div className="flex items-center justify-between">
        <p className="text-base font-semibold text-foreground">팀 ·  4명</p>
        <button
          type="button"
          className="rounded-md border border-border bg-card px-3 py-1.5 text-base text-foreground"
        >
          + 직원 초대
        </button>
      </div>

      <ul className="mt-4 space-y-2">
        {members.map((m) => (
          <li
            key={m.name}
            className="flex items-center gap-3 rounded-md border border-border bg-card px-3 py-2.5"
          >
            <span className="grid h-9 w-9 place-items-center rounded-full bg-surface-soft text-base font-medium text-primary">
              {m.name[0]}
            </span>
            <div className="flex-1">
              <p className="text-base font-medium text-foreground">{m.name}</p>
              <p className="text-base text-muted">{m.role}</p>
            </div>
            {m.owner ? (
              <span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-base text-primary">
                전체 권한
              </span>
            ) : (
              <div className="flex items-center gap-1.5 text-base">
                <span className="rounded-full border border-border bg-background px-2 py-0.5 text-muted">
                  오늘 {m.today}
                </span>
                {m.missed > 0 && (
                  <span className="rounded-full border border-warning/30 bg-warning/10 px-2 py-0.5 text-warning">
                    미완료 {m.missed}
                  </span>
                )}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
