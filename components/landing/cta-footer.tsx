import Image from "next/image";
import Link from "next/link";

export function CtaFooter() {
  return (
    <>
      <section
        id="contact"
        className="relative overflow-hidden py-24 md:py-[120px]"
        style={{
          background:
            "linear-gradient(135deg, #007378 0%, #009098 50%, #00aab1 100%)",
        }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.08), transparent 40%), radial-gradient(circle at 80% 70%, rgba(255, 255, 255, 0.06), transparent 40%)",
          }}
        />
        <div className="relative mx-auto max-w-[800px] px-5 text-center md:px-8">
          <h2 className="reveal m-0 mb-[18px] text-balance text-[36px] font-bold leading-[1.1] tracking-[-1.2px] text-white md:text-[44px] md:tracking-[-1.5px] lg:text-[52px] lg:tracking-[-1.8px]">
            오늘 방문부터
            <br />
            소독노트로 기록해보세요.
          </h2>
          <p className="reveal reveal-delay-1 m-0 mb-9 text-[16px] font-medium leading-[1.55] tracking-tight text-white/85 md:text-[18px]">
            지금은 전 기능 무료. 신용카드도, 도입 미팅도 필요 없습니다.
          </p>
          <div className="reveal reveal-delay-2 flex flex-wrap justify-center gap-3">
            <Link
              href="/signup"
              className="group inline-flex items-center justify-center gap-1.5 rounded-lg bg-white px-[22px] py-3 text-[16px] font-semibold text-[var(--color-brand-primary)] transition-colors hover:bg-white/90 active:scale-[0.97]"
            >
              무료로 시작하기
              <span
                aria-hidden
                className="inline-block transition-transform group-hover:translate-x-0.5"
              >
                →
              </span>
            </Link>
            <a
              href="mailto:contact@dotshef.com"
              className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/10 px-[22px] py-3 text-[16px] font-semibold text-white transition-colors hover:bg-white/[0.18] active:scale-[0.97]"
            >
              1:1 도입 상담
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-black/[0.06] bg-white pb-8 pt-14">
        <div className="mx-auto w-full max-w-[1200px] px-5 md:px-8">
          <div className="flex flex-wrap items-start justify-between gap-8">
            <div>
              <Image
                src="/images/logo-banner.png"
                alt="소독노트"
                width={200}
                height={34}
                className="h-[34px] w-auto"
              />
              <p className="mt-3 max-w-[420px] break-keep text-[14px] leading-[1.6] text-[var(--muted)]">
                소독·방역 현장의 운영을 한 화면에서 끝내는 관리 프로그램.
              </p>
            </div>
            <div className="flex flex-wrap gap-x-14 gap-y-8">
              <FooterCol
                title="제품"
                items={[
                  { label: "기능", href: "#features" },
                  { label: "사용 흐름", href: "#flow" },
                  { label: "업데이트", href: "#" },
                ]}
              />
              <FooterCol
                title="지원"
                items={[
                  { label: "도움말", href: "#" },
                  { label: "1:1 문의", href: "mailto:contact@dotshef.com" },
                  { label: "상태 페이지", href: "#" },
                ]}
              />
              <FooterCol
                title="회사"
                items={[
                  { label: "소개", href: "#" },
                  { label: "이용약관", href: "/terms" },
                  { label: "개인정보처리방침", href: "/privacy" },
                ]}
              />
            </div>
          </div>
          <div className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-black/[0.06] pt-6 text-[13px] text-[var(--muted-foreground)]">
            <span>© 2026 소독노트. All rights reserved.</span>
            <span>contact@dotshef.com</span>
          </div>
        </div>
      </footer>
    </>
  );
}

function FooterCol({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string }[];
}) {
  return (
    <div>
      <p className="mb-3.5 text-[12px] font-semibold uppercase tracking-[0.4px] text-foreground">
        {title}
      </p>
      <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
        {items.map((it) => (
          <li key={it.label}>
            <a
              href={it.href}
              className="text-[14px] leading-[1.5] text-[var(--muted)] no-underline transition-colors hover:text-foreground"
            >
              {it.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
