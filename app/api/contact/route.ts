import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

type Body = {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  message?: string;
};

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (c) => {
    switch (c) {
      case "&":
        return "&amp;";
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case '"':
        return "&quot;";
      case "'":
        return "&#39;";
      default:
        return c;
    }
  });
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let payload: Body;
  try {
    payload = (await request.json()) as Body;
  } catch {
    return NextResponse.json(
      { error: "요청 형식이 올바르지 않습니다." },
      { status: 400 }
    );
  }

  const name = payload.name?.trim() ?? "";
  const email = payload.email?.trim() ?? "";
  const phone = payload.phone?.trim() ?? "";
  const company = payload.company?.trim() ?? "";
  const message = payload.message?.trim() ?? "";

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "이름, 이메일, 문의 내용은 필수 항목입니다." },
      { status: 400 }
    );
  }
  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: "올바른 이메일 주소를 입력해 주세요." },
      { status: 400 }
    );
  }
  if (message.length > 5000) {
    return NextResponse.json(
      { error: "문의 내용이 너무 깁니다." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY is not configured");
    return NextResponse.json(
      { error: "이메일 발송이 구성되지 않았습니다. 관리자에게 문의하세요." },
      { status: 500 }
    );
  }

  const fromAddress = "소독노트 <no-reply@dotshef.com>";
  const toAddress = "contact@dotshef.com";

  const resend = new Resend(apiKey);

  const html = `
    <div style="font-family: -apple-system, system-ui, 'Segoe UI', Helvetica, sans-serif; color: #111; line-height: 1.6;">
      <h2 style="margin: 0 0 12px;">소독노트 1:1 문의</h2>
      <table cellpadding="6" cellspacing="0" style="border-collapse: collapse; font-size: 14px;">
        <tr><td style="color:#666;">이름</td><td style="font-weight:600;">${escapeHtml(name)}</td></tr>
        <tr><td style="color:#666;">이메일</td><td>${escapeHtml(email)}</td></tr>
        ${phone ? `<tr><td style="color:#666;">연락처</td><td>${escapeHtml(phone)}</td></tr>` : ""}
        ${company ? `<tr><td style="color:#666;">업체명</td><td>${escapeHtml(company)}</td></tr>` : ""}
      </table>
      <h3 style="margin: 20px 0 8px; font-size: 14px;">문의 내용</h3>
      <div style="white-space: pre-wrap; padding: 14px; background: #f6f5f4; border-radius: 8px; font-size: 14px;">${escapeHtml(message)}</div>
    </div>
  `;

  const { error } = await resend.emails.send({
    from: fromAddress,
    to: toAddress,
    replyTo: email,
    subject: `[소독노트 문의] ${name}${company ? ` · ${company}` : ""}`,
    html,
  });

  if (error) {
    console.error("[contact] Resend error", error);
    return NextResponse.json(
      { error: "이메일 발송에 실패했습니다. 잠시 후 다시 시도해 주세요." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
