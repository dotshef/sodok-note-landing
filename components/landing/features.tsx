import { FadeUp } from "./animations/fade-up";
import { FeatureScreenshot } from "./feature-screenshot";
import { LightboxProvider, type Visual } from "./lightbox";

type Feature = {
  num: number;
  eyebrow: string;
  title: React.ReactNode;
  desc: string;
  bullets: string[];
  visual: Visual;
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
      "날짜, 상태, 담당자 필터",
      "담당자가 방문 완료 처리 가능",
    ],
    visual: {
      type: "desktop",
      src: "/images/visit-screen.png",
      alt: "방문 관리 화면",
    },
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
    desc: "월 단위 모든 방문을 한눈에. 상태별 색상으로 빠뜨린 일정을 즉시 확인하세요.",
    bullets: [
      "월간 캘린더 뷰",
      "예정/완료/미완료 색상 구분",
      "날짜 클릭 → 상세 일정 펼침",
    ],
    visual: {
      type: "desktop",
      src: "/images/calendar-screen.png",
      alt: "캘린더 화면",
    },
  },
  {
    num: 3,
    eyebrow: "직원 배정 & 권한",
    title: (
      <>
        관리자는 전체,
        <br />
        직원은 본인 일정만.
      </>
    ),
    desc: "관리자/직원 권한이 자동으로 분리됩니다. 현장 직원은 본인이 배정된 방문만 깔끔하게 봅니다.",
    bullets: [
      "이메일 1줄로 직원 초대",
      "직원에게는 본인 방문만 노출",
      "관리자는 모든 방문 일정 관리 및 소독증명서 생성",
    ],
    visual: {
      type: "desktop",
      src: "/images/staff-screen.png",
      alt: "직원관리 화면",
    },
  },
  {
    num: 4,
    eyebrow: "푸시 알림",
    title: (
      <>
        배정 알림 및 일정 리마인드 알림
        <br />
        놓치는 일정이 사라집니다.
      </>
    ),
    desc: "방문이 배정되는 순간 담당 직원에게 푸시 알림이 갑니다. 전날 저녁에는 내일 일정 알림까지 자동으로.",
    bullets: [
      "방문 배정 시 해당 직원에게 알림 전송",
      "전날 저녁 내일 일정 자동 알림",
      "기기별 알림 권한 등록, 해제 관리 가능",
    ],
    visual: {
      type: "mobile",
      src: "/images/notification-mobile.jpg",
      alt: "푸시 알림 화면",
    },
  },
  {
    num: 5,
    eyebrow: "현장 완료 처리",
    title: (
      <>
        현장에서 바로,
        <br />
        소독 완료 처리합니다.
      </>
    ),
    desc: "소독 방법, 사용 약품, 특이사항을 모바일에서 입력하고 즉시 완료 처리. 사무실 복귀 후 정리할 필요가 없습니다.",
    bullets: [
      "소독 방법, 사용 약품 모바일 입력",
      "최근 사용 항목을 원클릭으로 추가",
      "현장에서 직원이 즉시 완료 처리 가능",
    ],
    visual: {
      type: "mobile",
      src: "/images/complete-mobile.jpg",
      alt: "현장 완료 화면",
    },
  },
  {
    num: 6,
    eyebrow: "소독증명서 발급",
    title: (
      <>
        방문 기록 그대로,
        <br />
        증명서가 완성됩니다.
      </>
    ),
    desc: "입력한 방문 정보가 그대로 소독증명서가 됩니다. 별도 양식 작성 없이 PDF를 즉시 고객에게 전달하세요.",
    bullets: [
      "방문 기록 기반 자동 생성",
      "HWPX, PDF 다운로드 지원",
      "증명서 생성 이후 고객 시설로 발송 가능",
    ],
    visual: {
      type: "desktop",
      src: "/images/certificate-screen.png",
      alt: "소독증명서 화면",
    },
  },
];

export function Features() {
  return (
    <LightboxProvider>
      <section id="features" className="bg-white py-24 md:py-[120px]">
        <div className="mx-auto w-full max-w-[1200px] px-5 md:px-8">
          <FadeUp>
            <span className="block text-center text-[22px] font-semibold uppercase tracking-[0.7px] text-[var(--color-brand-primary)]">
              핵심 기능
            </span>
          </FadeUp>
          <FadeUp delay={80}>
            <h2 className="mx-auto mt-3.5 max-w-[800px] text-balance text-center text-[34px] font-bold leading-[1.1] tracking-[-1.2px] text-foreground md:text-[42px] md:tracking-[-1.5px] lg:text-[48px] lg:tracking-[-1.6px]">
              소독 현장에 필요한 모든 것, 한 화면에.
            </h2>
          </FadeUp>
          <FadeUp delay={160}>
            <p className="mx-auto mt-3 max-w-[640px] text-balance text-center text-[18px] font-medium leading-[1.5] tracking-tight text-[var(--muted)] md:text-[19px]">
              방문 일정·시설 이력·직원 배정·운영 현황까지. 따로 흩어진 도구 없이
              하나로.
            </p>
          </FadeUp>

          <div className="mt-16 flex flex-col">
            {FEATURES.map((f, i) => (
              <FeatureRow
                key={f.num}
                feature={f}
                reverse={i % 2 === 1}
                priority={i === 0}
              />
            ))}
          </div>
        </div>
      </section>
    </LightboxProvider>
  );
}

function FeatureRow({
  feature,
  reverse,
  priority = false,
}: {
  feature: Feature;
  reverse: boolean;
  priority?: boolean;
}) {
  return (
    <article
      className={`grid items-center gap-10 pb-20 last:pb-0 md:gap-20 md:pb-[120px] ${
        reverse ? "md:grid-cols-[1.15fr_1fr]" : "md:grid-cols-[1fr_1.15fr]"
      }`}
    >
      <FadeUp className={reverse ? "md:order-2" : ""}>
        <div className="mb-4 inline-flex items-center gap-2.5 text-base font-semibold tracking-[0.3px] text-[var(--color-brand-primary)]">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[var(--color-brand-primary-soft)] text-[15px] font-bold leading-none">
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
      </FadeUp>
      <FadeUp delay={160} className={reverse ? "md:order-1" : ""}>
        <FeatureScreenshot visual={feature.visual} priority={priority} />
      </FadeUp>
    </article>
  );
}
