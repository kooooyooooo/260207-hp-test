import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SAMPLE FC | ○○高等学校サッカー部 公式サイト",
  description:
    "○○高等学校サッカー部の公式ホームページです。試合結果、ニュース、セレクション情報などを発信しています。",
  openGraph: {
    title: "SAMPLE FC | ○○高等学校サッカー部 公式サイト",
    description:
      "○○高等学校サッカー部の公式ホームページです。試合結果、ニュース、セレクション情報などを発信しています。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Noto+Sans+JP:wght@300;400;500;700;900&family=Outfit:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
