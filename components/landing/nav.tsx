"use client";

import Image from "next/image";
import Link from "next/link";
import { useContactModal } from "./contact-modal";

export function Nav() {
  const { openModal } = useContactModal();

  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-white/90 backdrop-blur-md backdrop-saturate-150">
      <div className="mx-auto flex w-full max-w-[1280px] items-center gap-7 px-5 py-3.5 md:px-8">
        <Link
          href="/"
          className="flex cursor-default items-center text-foreground"
        >
          <Image
            src="/images/logo-banner.png"
            alt="소독노트"
            width={200}
            height={36}
            className="h-9 w-auto"
            priority
          />
        </Link>

        <nav className="ml-5 hidden flex-1 items-center gap-7 md:flex">
          <a
            href="#features"
            className="cursor-default text-[17px] font-medium tracking-tight text-foreground transition-colors hover:text-[var(--color-brand-primary)]"
          >
            기능
          </a>
          <a
            href="#flow"
            className="cursor-default text-[17px] font-medium tracking-tight text-foreground transition-colors hover:text-[var(--color-brand-primary)]"
          >
            사용 흐름
          </a>
          <button
            type="button"
            onClick={openModal}
            className="cursor-default text-[17px] font-medium tracking-tight text-foreground transition-colors hover:text-[var(--color-brand-primary)]"
          >
            문의
          </button>
        </nav>

        <div className="ml-auto flex items-center">
          <Link
            href="/console"
            className="inline-flex items-center justify-center gap-1.5 rounded-md bg-[var(--color-brand-primary)] px-4 py-2 text-[17px] font-semibold text-white transition-colors hover:bg-[var(--color-brand-primary-active)] active:scale-[0.97]"
          >
            콘솔로 이동
          </Link>
        </div>
      </div>
    </header>
  );
}
