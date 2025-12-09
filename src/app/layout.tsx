// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "葱野みやファンサイト｜Vtuber・ゲーム実況・歌ってみた",
  description:
    "葱野みやのファンサイト。セルフ受肉系Vtuberのゲーム実況、歌ってみた、イラストを応援！",
  metadataBase: new URL("https://negimiya.pages.dev"),
  openGraph: {
    title: "葱野みやファンサイト",
    description: "葱野みやのファンサイト！セルフ受肉系Vtuberの活動を応援。",
    images: "/images/banner.jpg",
    url: "/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "葱野みやファンサイト",
    description: "葱野みやのファンサイト！セルフ受肉系Vtuberの魅力を満喫。",
    images: "/images/banner.jpg",
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
        {/* 必要最低限だけ残す */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicons/icon-32x32.png" />
      </head>
      <body className="min-h-screen bg-gradient-to-b from-cyan-50 to-green-50">
        {children}
      </body>
    </html>
  );
}