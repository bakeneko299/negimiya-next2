// app/layout.tsx
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/footer";

export const metadata = {
  title: "Negimiya",
  description: "サイト説明…あとで調整できます",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" data-theme="default">
      <body>
        <div className="min-h-screen relative">
          {/* 明るめの青ネギ系ライトグリーンから早めに白へフェード */}
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, #DFF7E8 0%, #F6FBF7 25%, #FFFFFF 60%)",
              zIndex: 0,
            }}
          />

          {/* 薄いノイズ（任意） */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              zIndex: 1,
              backgroundImage: "url('/images/noise-8.png')",
              backgroundRepeat: "repeat",
              opacity: 0.03,
            }}
          />

          {/* 軽いオーバーレイで文字のコントラストを安定 */}
          <div className="absolute inset-0 bg-black/6 pointer-events-none" style={{ zIndex: 2 }} />

          {/* コンテンツ（Header / main / Footer） */}
          <div style={{ position: "relative", zIndex: 10 }}>
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}