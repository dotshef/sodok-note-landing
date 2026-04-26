import Image from "next/image";

type Feature = {
  num: number;
  eyebrow: string;
  title: React.ReactNode;
  desc: string;
  bullets: string[];
  visual: React.ReactNode;
};

function Check() {
  return (
    <svg
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-3 w-3"
      aria-hidden
    >
      <path d="M2.5 6.5l2.5 2.5 4.5-5" />
    </svg>
  );
}

function Screenshot({ src, alt }: { src: string; alt: string }) {
  return (
    <div
      className="overflow-hidden rounded-xl border border-black/[0.06] bg-white"
      style={{ boxShadow: "var(--shadow-feature)" }}
    >
      <Image
        src={src}
        alt={alt}
        width={2400}
        height={1500}
        className="block h-auto w-full"
      />
    </div>
  );
}

function StatsMock() {
  type Stat = {
    label: string;
    value: string;
    valueColor?: string;
    iconBg: string;
    iconFg: string;
    icon: React.ReactNode;
  };
  const stats: Stat[] = [
    {
      label: "오늘 방문 일정",
      value: "0건",
      iconBg: "bg-[var(--color-brand-primary-soft)]",
      iconFg: "text-[var(--color-brand-primary)]",
      icon: (
        <>
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <path d="M16 2v4M8 2v4M3 10h18" />
        </>
      ),
    },
    {
      label: "이번 주 일정",
      value: "4건",
      iconBg: "bg-[var(--color-brand-primary-soft)]",
      iconFg: "text-[var(--color-brand-primary)]",
      icon: (
        <>
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <path d="M16 2v4M8 2v4M3 10h18M8 14h2M14 14h2M8 18h2M14 18h2" />
        </>
      ),
    },
    {
      label: "미완료 건",
      value: "3건",
      valueColor: "text-[#dd5b00]",
      iconBg: "bg-[#fef0ef]",
      iconFg: "text-[#dd5b00]",
      icon: (
        <>
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
          <path d="M12 9v4M12 17h.01" />
        </>
      ),
    },
    {
      label: "이번 달 완료",
      value: "2건",
      iconBg: "bg-[#ebf8ee]",
      iconFg: "text-[#1aae39]",
      icon: (
        <>
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <path d="M22 4L12 14.01l-3-3" />
        </>
      ),
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-3 rounded-xl border border-black/[0.06] bg-[var(--bg-alt)] p-5">
      {stats.map((s) => (
        <div
          key={s.label}
          className="rounded-[10px] border border-black/[0.06] bg-white p-4"
        >
          <div
            className={`mb-3 inline-flex h-7 w-7 items-center justify-center rounded-lg ${s.iconBg} ${s.iconFg}`}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
              aria-hidden
            >
              {s.icon}
            </svg>
          </div>
          <div className="mb-1.5 text-[13px] font-medium text-[var(--muted)]">
            {s.label}
          </div>
          <div
            className={`text-[28px] font-bold leading-none tracking-[-0.6px] ${s.valueColor ?? "text-foreground"}`}
          >
            {s.value}
          </div>
        </div>
      ))}
    </div>
  );
}

const FEATURES: Feature[] = [
  {
    num: 1,
    eyebrow: "방문 일정 관리",
    title: (
      <>
        예정 → 완료 → 미완료
        <br />한눈에 추적합니다.
      </>
    ),
    desc: "캘린더와 리스트, 두 가지 뷰에서 모든 방문 일정을 관리하세요. 방문 코드는 자동으로 채번됩니다.",
    bullets: [
      "방문 코드 자동 채번",
      "날짜·상태·담당자 필터",
      "방문 일자 이전 완료 처리 차단",
    ],
    visual: <Screenshot src="/images/screen-visits.png" alt="방문 관리 화면" />,
  },
  {
    num: 2,
    eyebrow: "캘린더 뷰",
    title: (
      <>
        한 달 운영이
        <br />한 화면에 펼쳐집니다.
      </>
    ),
    desc: "일·주·월 단위로 모든 방문을 한눈에. 상태별 색상으로 빠뜨린 일정을 즉시 확인하세요.",
    bullets: [
      "월간·주간 캘린더 뷰",
      "예정·완료·미완료 색상 구분",
      "날짜 클릭 → 상세 일정 펼침",
    ],
    visual: <Screenshot src="/images/screen-calendar.png" alt="캘린더 화면" />,
  },
  {
    num: 3,
    eyebrow: "직원 배정 & 권한",
    title: (
      <>
        사장님은 전체,
        <br />
        직원은 본인 일정만.
      </>
    ),
    desc: "관리자/직원 권한이 자동으로 분리됩니다. 현장 직원은 본인이 배정된 방문만 깔끔하게 봅니다.",
    bullets: [
      "이메일 1줄로 직원 초대",
      "본인 방문만 노출되는 현장용 뷰",
      "미완료 알림 자동 발송",
    ],
    visual: <Screenshot src="/images/screen-login.png" alt="로그인 화면" />,
  },
  {
    num: 4,
    eyebrow: "운영 대시보드",
    title: (
      <>
        오늘·이번 주·이번 달,
        <br />
        숫자로 보는 운영 현황.
      </>
    ),
    desc: "4종 카드와 주간 차트로 사업장 전체 흐름을 파악하세요. 카드 클릭 한 번으로 필터링된 목록까지.",
    bullets: [
      "오늘/이번 주/미완료/이번 달 완료",
      "주간 예정·완료·미완료 차트",
      "카드 클릭 → 필터링된 목록 즉시 이동",
    ],
    visual: <StatsMock />,
  },
];

export function Features() {
  return (
    <section id="features" className="bg-white py-24 md:py-[120px]">
      <div className="mx-auto w-full max-w-[1200px] px-5 md:px-8">
        <span className="reveal block text-center text-[22px] font-semibold uppercase tracking-[0.7px] text-[var(--color-brand-primary)]">
          핵심 기능
        </span>
        <h2 className="reveal reveal-delay-1 mx-auto mt-3.5 max-w-[800px] text-balance text-center text-[34px] font-bold leading-[1.1] tracking-[-1.2px] text-foreground md:text-[42px] md:tracking-[-1.5px] lg:text-[48px] lg:tracking-[-1.6px]">
          소독 현장에 필요한 모든 것, 한 화면에.
        </h2>
        <p className="reveal reveal-delay-2 mx-auto mt-3 max-w-[640px] text-balance text-center text-[18px] font-medium leading-[1.5] tracking-tight text-[var(--muted)] md:text-[19px]">
          방문 일정·시설 이력·직원 배정·운영 현황까지. 따로 흩어진 도구 없이
          하나로.
        </p>

        <div className="mt-16 flex flex-col">
          {FEATURES.map((f, i) => (
            <FeatureRow key={f.num} feature={f} reverse={i % 2 === 1} />
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
    <article
      className={`grid items-center gap-10 pb-20 last:pb-0 md:gap-20 md:pb-[120px] ${
        reverse ? "md:grid-cols-[1.15fr_1fr]" : "md:grid-cols-[1fr_1.15fr]"
      }`}
    >
      <div className={`reveal ${reverse ? "md:order-2" : ""}`}>
        <div className="mb-4 inline-flex items-center gap-2.5 text-[13px] font-semibold tracking-[0.3px] text-[var(--color-brand-primary)]">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[var(--color-brand-primary-soft)] text-[13px] font-bold leading-none">
            {feature.num}
          </span>
          {feature.eyebrow}
        </div>
        <h3 className="mb-4 text-balance text-[28px] font-bold leading-[1.15] tracking-[-0.8px] text-foreground md:text-[34px] md:tracking-[-1px] lg:text-[38px] lg:tracking-[-1.2px]">
          {feature.title}
        </h3>
        <p className="mb-6 max-w-[460px] text-[16px] leading-[1.55] text-[var(--muted)] md:text-[17px]">
          {feature.desc}
        </p>
        <ul className="flex flex-col gap-3 list-none p-0 m-0">
          {feature.bullets.map((b) => (
            <li
              key={b}
              className="flex items-start gap-3 text-[15px] font-medium leading-[1.5] tracking-tight text-foreground"
            >
              <span className="mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[var(--color-brand-primary)] text-white">
                <Check />
              </span>
              {b}
            </li>
          ))}
        </ul>
      </div>
      <div className={`reveal reveal-delay-2 ${reverse ? "md:order-1" : ""}`}>
        {feature.visual}
      </div>
    </article>
  );
}
