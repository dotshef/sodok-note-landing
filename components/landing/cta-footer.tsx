import Link from "next/link";
import { Logo } from "./logo";

export function CtaFooter() {
  return (
    <>
      <section className="border-b border-border bg-foreground text-background">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-5 py-20 md:flex-row md:items-end md:justify-between md:px-8 md:py-24">
          <div>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
              오늘 방문부터,
              <br />
              소독노트로 기록해보세요.
            </h2>
            <p className="mt-5 text-lg text-background/70">
              가입 30초 · 카드 등록 없음 · 직원 3명까지 무료
            </p>
          </div>

          <div className="flex flex-col gap-3 md:flex-row md:items-center">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center rounded-xl bg-background px-6 py-3.5 text-lg font-medium text-foreground transition hover:bg-background/90"
            >
              무료로 시작하기
            </Link>
            <a
              href="mailto:hello@sodoknote.app"
              className="inline-flex items-center justify-center rounded-xl border border-background/30 px-6 py-3.5 text-lg font-medium text-background transition hover:bg-background/10"
            >
              1:1 도입 상담
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-background">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-12 md:grid-cols-[1.4fr_1fr_1fr_1fr] md:px-8">
          <div>
            <div className="flex items-center gap-2">
              <Logo className="h-7 w-7" />
              <span className="text-lg font-semibold tracking-tight text-foreground">
                소독노트
              </span>
            </div>
            <p className="mt-3 text-base leading-relaxed text-muted">
              소독·방역업체 현장 운영을 한 화면에서.
              <br />
              방문 · 시설 · 직원 · 보고를 한 줄로 잇는 SaaS.
            </p>
          </div>

          <FooterCol
            title="제품"
            items={[
              { label: "기능", href: "#features" },
              { label: "사용 흐름", href: "#flow" },
              { label: "모바일", href: "#mobile" },
            ]}
          />
          <FooterCol
            title="회사"
            items={[
              { label: "도입 상담", href: "mailto:hello@sodoknote.app" },
              { label: "카카오 채널", href: "#" },
              { label: "공지사항", href: "#" },
            ]}
          />
          <FooterCol
            title="문서"
            items={[
              { label: "이용약관", href: "/terms" },
              { label: "개인정보처리방침", href: "/privacy" },
              { label: "고객지원", href: "mailto:help@sodoknote.app" },
            ]}
          />
        </div>

        <div className="border-t border-border">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-5 py-6 text-base text-muted md:flex-row md:items-center md:justify-between md:px-8">
            <p>© 2026 소독노트. All rights reserved.</p>
            <p>사업자등록번호 000-00-00000 · 대표 OOO · 서울특별시</p>
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
      <p className="text-base font-semibold text-foreground">{title}</p>
      <ul className="mt-3 space-y-2">
        {items.map((it) => (
          <li key={it.label}>
            <a
              href={it.href}
              className="text-base text-muted transition hover:text-foreground"
            >
              {it.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
