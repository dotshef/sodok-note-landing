import Image from "next/image";

export function Footer() {
  return (
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
          <p className="mt-3 max-w-[420px] break-keep text-base leading-[1.6] text-[var(--muted)]">
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
  );
}
