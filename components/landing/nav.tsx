"use client";

import Image from "next/image";
import Link from "next/link";
import { useContactModal } from "./contact-modal";

export function Nav() {
  const { openModal } = useContactModal();

  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-white/90 backdrop-blur-md backdrop-saturate-150">
      <div className="mx-auto flex w-full max-w-[1280px] items-center gap-3 px-5 py-3.5 md:gap-7 md:px-8">
        <div className="flex flex-1 items-center justify-start">
          <Link
            href="/"
            className="flex cursor-pointer items-center text-foreground"
          >
            <Image
              src="/images/logo-banner.png"
              alt="소독노트"
              width={300}
              height={118}
              style={{ height: 36, width: "auto" }}
              priority
            />
          </Link>
        </div>

        <nav className="hidden items-center justify-center gap-7 md:flex">
          <a
            href="#features"
            className="cursor-pointer text-[17px] font-medium tracking-tight text-foreground transition-colors hover:text-[var(--color-brand-primary)]"
          >
            기능
          </a>
          <a
            href="#flow"
            className="cursor-pointer text-[17px] font-medium tracking-tight text-foreground transition-colors hover:text-[var(--color-brand-primary)]"
          >
            사용 흐름
          </a>
        </nav>

        <div className="flex flex-1 items-center justify-end gap-2">
          <button
            type="button"
            onClick={openModal}
            className="inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap rounded-md border border-black/10 bg-white px-3 py-2 text-[15px] font-semibold text-foreground transition-colors hover:bg-black/[0.04] active:scale-[0.97] md:px-4 md:text-[17px]"
          >
            문의하기
          </button>
          <a
            href="https://app.sodoknote.com"
            className="inline-flex shrink-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-md bg-[var(--color-brand-primary)] px-3 py-2 text-[15px] font-semibold text-white transition-colors hover:bg-[var(--color-brand-primary-active)] active:scale-[0.97] md:px-4 md:text-[17px]"
          >
            콘솔로 이동
          </a>
        </div>
      </div>
    </header>
  );
}
