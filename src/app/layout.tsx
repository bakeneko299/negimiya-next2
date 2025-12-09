// app/layout.tsx
import "./globals.css";
import Header from "./components/Header";

export const metadata = {
  title: "Negimiya",
  description: "サイト説明…あとで調整できます",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
