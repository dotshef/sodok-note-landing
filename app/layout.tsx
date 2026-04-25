import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "소독노트 — 소독·방역업체용 방문 관리 SaaS",
  description:
    "엑셀·카톡 대신 — 시설별 방문 기록, 현장 완료 체크, 미완료 추적까지. 소독·방역 현장에 맞춰 만든 운영 도구.",
  openGraph: {
    title: "소독노트 — 소독·방역업체용 방문 관리 SaaS",
    description:
      "방문 일정, 시설 이력, 현장 완료 체크, 대시보드까지 한 화면에서.",
    type: "website",
    locale: "ko_KR",
  },
};

export const viewport: Viewport = {
  themeColor: "#1e6fd9",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "소독노트",
              description:
                "소독·방역업체 현장 운영을 한 화면에서 관리하는 SaaS. 방문 일정, 시설 이력, 직원 배정, 미완료 추적.",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web, iOS, Android (PWA)",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "KRW",
              },
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
