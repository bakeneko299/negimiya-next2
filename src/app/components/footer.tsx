// app/components/FooterSection.tsx
export default function Footer() {
    return (
        <footer id="footer" className="footerSection">
        <div className="max-w-4xl mx-auto px-6">
            <p>&copy; 2025 葱野みや（活動してる人）</p>
            <p>&copy; 2025 化野ネコ（ファンサイト作った人）</p>
            
            <div className="my-6">
            <p className="font-bold text-lg text-yellow-300">★スペシャルサンクス★</p>
            </div>
            
            <p>
            後方ガッツポーズ組、葱野みやリスナーの皆様、<br />
            このサイトを最後まで楽しんでいただいた皆様
            </p>
            
            {/* 必要ならSNSリンクとかもここに入れる */}
        </div>
        </footer>
    );
}