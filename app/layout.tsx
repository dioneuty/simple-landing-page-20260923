import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSansKr = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "남다른 음식 | 배달 전문 중식",
  description:
    "남다른 맛, 남다른 중식. 대표 메뉴와 고객 후기를 확인하고 지금 주문하세요.",
  openGraph: {
    title: "남다른 음식 | 배달 전문 중식",
    description:
      "남다른 맛, 남다른 중식. 대표 메뉴와 고객 후기를 확인하고 지금 주문하세요.",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className={`${notoSansKr.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
