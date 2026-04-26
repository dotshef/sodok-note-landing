import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "소독노트 — 소독·방역업체용 방문 관리 SaaS",
  description:
    "엑셀, 카톡 그만. 시설별 방문 기록부터 현장 완료 체크, 미완료 추적까지. 한 화면에서 끝내는 소독·방역 전용 SaaS.",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "소독노트 — 소독·방역업체용 방문 관리 SaaS",
    description:
      "방문 일정, 시설 이력, 현장 완료 체크, 대시보드까지 한 화면에서.",
    type: "website",
    locale: "ko_KR",
  },
};

export const viewport: Viewport = {
  themeColor: "#009098",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
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
