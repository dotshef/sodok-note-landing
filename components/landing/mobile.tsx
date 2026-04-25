import { MobileVisitPreview } from "./mocks/mobile-visit-preview";

export function Mobile() {
  return (
    <section id="mobile" className="border-b border-border">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 py-20 md:grid-cols-[1fr_1.1fr] md:gap-16 md:px-8 md:py-28">
        <div className="relative flex justify-center md:justify-start">
          <div className="absolute -inset-6 -z-10 rounded-3xl bg-surface-soft/60 md:-inset-10" />
          <div className="rotate-[-2deg]">
            <MobileVisitPreview />
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-base font-medium uppercase tracking-wide text-primary">
            모바일 / PWA
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-4xl">
            현장에선 휴대폰이 노트입니다.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            홈 화면에 추가하면 끝 — 별도 앱 설치 없이, 데스크탑과 같은 데이터를
            현장에서 그대로 다룹니다.
          </p>

          <ul className="mt-7 space-y-4">
            <Bullet
              title="홈 화면 추가 (PWA)"
              desc="앱스토어 거치지 않고 1초 설치. 오프라인에서도 마지막 데이터를 읽을 수 있어요."
            />
            <Bullet
              title="모바일 카드 ↔ 데스크탑 테이블"
              desc="화면 크기에 맞춰 자동 전환. 사장님은 PC에서 표로, 직원은 휴대폰에서 카드로."
            />
            <Bullet
              title="현장에서 사진·메모 즉시 첨부"
              desc="전·후 사진과 메모를 그 자리에서. (구현 예정)"
            />
          </ul>

          <div
            id="demo"
            className="mt-8 flex flex-col gap-4 rounded-xl border border-border bg-card p-5 md:flex-row md:items-center"
          >
            <div className="grid h-24 w-24 shrink-0 place-items-center rounded-lg border border-border bg-background">
              <QrPlaceholder />
            </div>
            <div className="flex-1">
              <p className="text-lg font-medium text-foreground">
                지금 모바일로 보기
              </p>
              <p className="mt-1 text-base text-muted">
                휴대폰 카메라로 코드를 비추면 데모 페이지로 바로 이동합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Bullet({ title, desc }: { title: string; desc: string }) {
  return (
    <li className="flex gap-4">
      <span
        aria-hidden
        className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent/15 text-accent"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 6L9 17l-5-5" />
        </svg>
      </span>
      <div>
        <p className="text-lg font-medium text-foreground">{title}</p>
        <p className="mt-1 text-base leading-relaxed text-muted">{desc}</p>
      </div>
    </li>
  );
}

function QrPlaceholder() {
  return (
    <svg width="72" height="72" viewBox="0 0 72 72" aria-hidden>
      {Array.from({ length: 9 }).map((_, r) =>
        Array.from({ length: 9 }).map((_, c) => {
          const filled =
            (r + c) % 3 === 0 ||
            (r < 3 && c < 3) ||
            (r < 3 && c > 5) ||
            (r > 5 && c < 3);
          return (
            <rect
              key={`${r}-${c}`}
              x={c * 8}
              y={r * 8}
              width="7"
              height="7"
              fill={filled ? "currentColor" : "transparent"}
              className="text-foreground"
            />
          );
        })
      )}
    </svg>
  );
}
