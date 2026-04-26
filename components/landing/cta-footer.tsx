import Image from "next/image";
import Link from "next/link";
import { ContactModal } from "./contact-modal";

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
            <ContactModal triggerLabel="1:1 문의하기" />
          </div>
        </div>
      </section>

      <footer className="border-t border-black/[0.06] bg-white pb-8 pt-14">
        <div className="mx-auto w-full max-w-[1200px] px-5 text-center md:px-8">
          <div className="flex flex-col items-center">
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

          <dl className="mx-auto mt-10 grid w-fit gap-x-8 gap-y-2 text-left text-[13px] leading-[1.6] text-[var(--muted)] sm:grid-cols-[auto_auto]">
            <dt className="font-semibold text-foreground">상호</dt>
            <dd className="m-0">닷셰프</dd>
            <dt className="font-semibold text-foreground">대표</dt>
            <dd className="m-0">박시준</dd>
            <dt className="font-semibold text-foreground">사업자등록번호</dt>
            <dd className="m-0">251-12-03141</dd>
            <dt className="font-semibold text-foreground">이메일</dt>
            <dd className="m-0">
              <a
                href="mailto:contact@dotshef.com"
                className="text-[var(--muted)] no-underline transition-colors hover:text-foreground"
              >
                contact@dotshef.com
              </a>
            </dd>
            <dt className="font-semibold text-foreground">주소</dt>
            <dd className="m-0 break-keep">
              경기도 성남시 수정구 창업로 43, 업무동 1층 61호
            </dd>
          </dl>

          <div className="mt-10 border-t border-black/[0.06] pt-6 text-[13px] text-[var(--muted-foreground)]">
            © 2026 소독노트. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
