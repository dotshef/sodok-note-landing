"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";

type Status = "idle" | "submitting" | "success" | "error";

type ContactModalContextValue = {
  openModal: () => void;
  closeModal: () => void;
};

const ContactModalContext = createContext<ContactModalContextValue | null>(null);

export function useContactModal(): ContactModalContextValue {
  const ctx = useContext(ContactModalContext);
  if (!ctx) {
    throw new Error(
      "useContactModal must be used within <ContactModalProvider>"
    );
  }
  return ctx;
}

export function ContactModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);

  const value = useMemo<ContactModalContextValue>(
    () => ({
      openModal: () => setOpen(true),
      closeModal: () => {
        setOpen(false);
        setStatus("idle");
        setErrorMessage(null);
      },
    }),
    []
  );

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && status !== "submitting") {
        setOpen(false);
        setStatus("idle");
        setErrorMessage(null);
      }
    };
    document.addEventListener("keydown", onKey);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const t = window.setTimeout(() => firstFieldRef.current?.focus(), 30);

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
      window.clearTimeout(t);
    };
  }, [open, status]);

  const close = useCallback(() => {
    if (status === "submitting") return;
    setOpen(false);
    setStatus("idle");
    setErrorMessage(null);
  }, [status]);

  async function submitForm(form: HTMLFormElement) {
    if (status === "submitting") return;

    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? ""),
      company: String(data.get("company") ?? ""),
      message: String(data.get("message") ?? ""),
    };

    setStatus("submitting");
    setErrorMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
      };
      if (!res.ok || !json.ok) {
        throw new Error(json.error ?? "전송에 실패했습니다.");
      }
      form.reset();
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "전송에 실패했습니다."
      );
    }
  }

  const modal =
    open && typeof window !== "undefined"
      ? createPortal(
          <div
            className="fixed inset-0 z-[200] flex items-end justify-center bg-black/50 px-4 py-6 backdrop-blur-sm sm:items-center"
            onMouseDown={(e) => {
              if (e.target === e.currentTarget) close();
            }}
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="contact-modal-title"
              className="relative w-full max-w-[520px] overflow-hidden rounded-2xl bg-white text-left shadow-[0_30px_60px_-20px_rgba(0,0,0,0.25)]"
            >
              <button
                type="button"
                onClick={close}
                aria-label="닫기"
                className="absolute right-4 top-4 z-10 inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full text-[var(--muted)] transition-colors hover:bg-black/[0.05] hover:text-foreground"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>

              <div className="px-7 pb-6 pt-8">
                <h2
                  id="contact-modal-title"
                  className="m-0 text-[22px] font-bold leading-[1.3] tracking-[-0.5px] text-foreground"
                >
                  1:1 문의하기
                </h2>
                <p className="m-0 mt-1.5 text-[14px] leading-[1.55] text-[var(--muted)]">
                  보내주시면 빠르게 답변드리겠습니다.
                </p>
              </div>

              {status === "success" ? (
                <div className="px-7 pb-8">
                  <div className="rounded-xl bg-[var(--color-brand-primary-soft)] px-5 py-6 text-center">
                    <div className="mx-auto mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-brand-primary)] text-white">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2.4}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </div>
                    <p className="m-0 text-[15px] font-semibold text-[var(--color-brand-primary)]">
                      문의가 정상적으로 전송되었습니다.
                    </p>
                    <p className="m-0 mt-1 text-[13px] text-[var(--muted)]">
                      영업일 기준 1–2일 내로 답변드리겠습니다.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={close}
                    className="mt-4 w-full cursor-pointer rounded-lg bg-[var(--color-brand-primary)] px-5 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-[var(--color-brand-primary-active)]"
                  >
                    확인
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    void submitForm(e.currentTarget);
                  }}
                  className="px-7 pb-7"
                >
                  <div className="grid gap-3">
                    <Field label="이름" required>
                      <input
                        ref={firstFieldRef}
                        name="name"
                        type="text"
                        required
                        maxLength={60}
                        autoComplete="name"
                        placeholder="홍길동"
                        className="w-full rounded-md border border-black/10 bg-white px-3 py-2.5 text-[15px] text-foreground outline-none transition-colors placeholder:text-[var(--muted-foreground)] focus:border-[var(--color-brand-primary)] focus:ring-2 focus:ring-[var(--color-brand-primary)]/20"
                      />
                    </Field>
                    <Field label="이메일" required>
                      <input
                        name="email"
                        type="email"
                        required
                        maxLength={120}
                        autoComplete="email"
                        placeholder="you@example.com"
                        className="w-full rounded-md border border-black/10 bg-white px-3 py-2.5 text-[15px] text-foreground outline-none transition-colors placeholder:text-[var(--muted-foreground)] focus:border-[var(--color-brand-primary)] focus:ring-2 focus:ring-[var(--color-brand-primary)]/20"
                      />
                    </Field>
                    <div className="grid gap-3 sm:grid-cols-2">
                      <Field label="연락처">
                        <input
                          name="phone"
                          type="tel"
                          maxLength={30}
                          autoComplete="tel"
                          placeholder="010-0000-0000"
                          className="w-full rounded-md border border-black/10 bg-white px-3 py-2.5 text-[15px] text-foreground outline-none transition-colors placeholder:text-[var(--muted-foreground)] focus:border-[var(--color-brand-primary)] focus:ring-2 focus:ring-[var(--color-brand-primary)]/20"
                        />
                      </Field>
                      <Field label="업체명">
                        <input
                          name="company"
                          type="text"
                          maxLength={80}
                          autoComplete="organization"
                          placeholder="OO 소독"
                          className="w-full rounded-md border border-black/10 bg-white px-3 py-2.5 text-[15px] text-foreground outline-none transition-colors placeholder:text-[var(--muted-foreground)] focus:border-[var(--color-brand-primary)] focus:ring-2 focus:ring-[var(--color-brand-primary)]/20"
                        />
                      </Field>
                    </div>
                    <Field label="문의 내용" required>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        maxLength={5000}
                        placeholder="궁금한 점이나 요청사항을 적어 주세요."
                        className="w-full resize-y rounded-md border border-black/10 bg-white px-3 py-2.5 text-[15px] text-foreground outline-none transition-colors placeholder:text-[var(--muted-foreground)] focus:border-[var(--color-brand-primary)] focus:ring-2 focus:ring-[var(--color-brand-primary)]/20"
                      />
                    </Field>
                  </div>

                  {status === "error" && errorMessage ? (
                    <p className="mt-3 rounded-md bg-[#fef0ef] px-3 py-2 text-[13px] text-[#b1390e]">
                      {errorMessage}
                    </p>
                  ) : null}

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="mt-5 inline-flex w-full cursor-pointer items-center justify-center gap-1.5 rounded-lg bg-[var(--color-brand-primary)] px-5 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-[var(--color-brand-primary-active)] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {status === "submitting" ? "전송 중..." : "문의 보내기"}
                  </button>
                  <p className="mt-3 text-center text-[12px] text-[var(--muted-foreground)]">
                    입력하신 내용은 문의 응대 목적으로만 사용되며, 별도 저장되지
                    않습니다.
                  </p>
                </form>
              )}
            </div>
          </div>,
          document.body
        )
      : null;

  return (
    <ContactModalContext.Provider value={value}>
      {children}
      {modal}
    </ContactModalContext.Provider>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-[13px] font-semibold text-foreground">
        {label}
        {required ? (
          <span className="ml-1 text-[var(--color-brand-primary)]">*</span>
        ) : null}
      </span>
      {children}
    </label>
  );
}
