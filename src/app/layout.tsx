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
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}