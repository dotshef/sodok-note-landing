import { CalendarMock } from "./mocks/calendar-mock";
import { FacilityMock } from "./mocks/facility-mock";
import { MembersMock } from "./mocks/members-mock";
import { MetricsMock } from "./mocks/metrics-mock";

type Feature = {
  id: string;
  eyebrow: string;
  title: string;
  bullets: string[];
  preview: React.ReactNode;
};

const FEATURES: Feature[] = [
  {
    id: "visits",
    eyebrow: "① 방문 일정 관리",
    title: "예정 → 완료 → 미완료, 한눈에 추적",
    bullets: [
      "캘린더·리스트 두 가지 뷰",
      "방문 코드 자동 채번 (V-YYMM-NNN)",
      "방문 일자 이전엔 완료 처리 차단 — 실수 방지",
      "날짜·상태·담당자 필터로 즉시 좁히기",
    ],
    preview: <CalendarMock />,
  },
  {
    id: "facilities",
    eyebrow: "② 시설(거래처) 카드",
    title: "시설별 이력이 곧 다음 방문의 가이드",
    bullets: [
      "시설 정보·담당자·주소·면적 한 카드",
      "방문 이력 타임라인",
      "메모·특이사항을 누적 — 다음 방문자에게 전달",
    ],
    preview: <FacilityMock />,
  },
  {
    id: "members",
    eyebrow: "③ 직원 배정 & 권한",
    title: "사장님은 전체, 직원은 본인 일정만",
    bullets: [
      "직원 초대·관리, 역할별 노출",
      "현장용 뷰 — 본인 방문만 깔끔히",
      "미완료 알림 (DB 기반 알림 허용 설정)",
    ],
    preview: <MembersMock />,
  },
  {
    id: "dashboard",
    eyebrow: "④ 대시보드",
    title: "오늘·이번 주·이번 달, 숫자로 본 운영 현황",
    bullets: [
      "오늘·이번 주·미완료·이번 달 완료 4종 카드",
      "주간 차트 — 예정/완료/미완료 스택",
      "카드 클릭 → 필터링된 목록으로 즉시 이동",
    ],
    preview: <MetricsMock />,
  },
];

export function Features() {
  return (
    <section id="features" className="border-b border-border">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="max-w-2xl">
          <p className="text-base font-medium uppercase tracking-wide text-primary">
            핵심 기능 4가지
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-4xl">
            방문 → 시설 → 직원 → 대시보드,
            <br />
            현장 운영을 한 줄로 잇습니다.
          </h2>
        </div>

        <div className="mt-14 flex flex-col gap-20 md:gap-28">
          {FEATURES.map((f, i) => (
            <FeatureRow key={f.id} feature={f} reverse={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureRow({
  feature,
  reverse,
}: {
  feature: Feature;
  reverse: boolean;
}) {
  return (
    <article className="grid items-center gap-8 md:grid-cols-2 md:gap-14">
      <div className={reverse ? "md:order-2" : undefined}>
        <p className="text-base font-medium text-primary">{feature.eyebrow}</p>
        <h3 className="mt-2 text-2xl font-semibold leading-snug tracking-tight text-foreground md:text-3xl">
          {feature.title}
        </h3>
        <ul className="mt-5 space-y-3">
          {feature.bullets.map((b) => (
            <li key={b} className="flex items-start gap-3 text-lg text-muted">
              <span
                aria-hidden
                className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
              />
              <span className="leading-relaxed">{b}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className={reverse ? "md:order-1" : undefined}>
        <div className="rounded-xl border border-border bg-card p-3 shadow-sm md:p-4">
          {feature.preview}
        </div>
      </div>
    </article>
  );
}
