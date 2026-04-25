import Link from "next/link";
import { Logo } from "./logo";

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 md:px-8">
        <Link href="/" className="flex items-center gap-2 text-foreground">
          <Logo className="h-7 w-7" />
          <span className="text-lg font-semibold tracking-tight">소독노트</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#features"
            className="text-base text-muted hover:text-foreground"
          >
            기능
          </a>
          <a
            href="#flow"
            className="text-base text-muted hover:text-foreground"
          >
            사용 흐름
          </a>
          <a
            href="#mobile"
            className="text-base text-muted hover:text-foreground"
          >
            모바일
          </a>
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          <Link
            href="/login"
            className="hidden rounded-lg px-4 py-2 text-base text-muted hover:text-foreground md:inline-flex"
          >
            로그인
          </Link>
          <Link
            href="/signup"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-base font-medium text-primary-foreground shadow-sm transition hover:opacity-90"
          >
            무료 시작
          </Link>
        </div>
      </div>
    </header>
  );
}
