export default function Footer() {
  return (
    <footer
      id="footer"
      className="footerSection py-16 fade-in"
      style={{ backgroundColor: "var(--footer-bg)", color: "var(--footer-text)" }}
    >
      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* ▼ 統一デザインのタイトル */}
        <hr className="section-divider fade-in" />

        {/* コピーライト */}
        <div className="mt-10 space-y-2 fade-in">
          <p>&copy; 2021-2026 葱野みや（活動してる人）</p>
          <p>&copy; 2025-2026 化野ネコ（ファンサイト作った人）</p>
        </div>

        {/* スペシャルサンクス */}
        <div className="my-10 fade-in">
          <p className="font-bold text-xl text-black-300">★スペシャルサンクス★</p>
        </div>

        {/* メッセージ */}
        <p className="leading-relaxed fade-in">
          後方ガッツポーズ組、葱野みやリスナーの皆様、<br />
          このサイトを最後まで楽しんでいただいた皆様
        </p>

      </div>
    </footer>
  );
}