import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";

const pretendard = localFont({
  src: "../public/font/PretendardVariable.woff2",
  display: "swap",
  weight: "100 900",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sodoknote.com"),
  title: "소독노트 — 소독·방역업체용 방문 관리 SaaS",
  description:
    "엑셀, 카톡 그만. 시설별 방문 기록부터 현장 완료 체크, 미완료 추적까지. 한 화면에서 끝내는 소독·방역 전용 SaaS.",
  icons: {
    icon: "/favicon.png",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "소독노트 — 소독·방역업체용 방문 관리 SaaS",
    description:
      "방문 일정, 시설 이력, 현장 완료 체크, 대시보드까지 한 화면에서.",
    url: "/",
    siteName: "소독노트",
    type: "website",
    locale: "ko_KR",
    images: [
      {
        url: "/og-image.png",
        width: 1210,
        height: 871,
        alt: "소독노트 - 소독·방역업체 전용 운영 SaaS",
      },
    ],
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
    <html lang="ko" className={`h-full antialiased ${pretendard.variable}`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "닷셰프",
              url: "https://www.sodoknote.com",
              logo: "https://www.sodoknote.com/images/logo-banner.png",
              email: "contact@dotshef.com",
              address: {
                "@type": "PostalAddress",
                addressCountry: "KR",
                addressRegion: "경기도",
                addressLocality: "성남시 수정구",
                streetAddress: "창업로 43, 업무동 1층 61호",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "소독노트",
              url: "https://www.sodoknote.com",
              inLanguage: "ko-KR",
            }),
          }}
        />
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
              operatingSystem: "Web",
              url: "https://www.sodoknote.com",
              image: "https://www.sodoknote.com/og-image.png",
              publisher: {
                "@type": "Organization",
                name: "닷셰프",
                url: "https://www.sodoknote.com",
              },
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "KRW",
              },
            }),
          }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
