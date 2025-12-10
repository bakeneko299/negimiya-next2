export default function HeroSection() {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden section">
        {/* 背景の流れる装飾（上下） */}
        <div
            aria-hidden="true"
            className="hero__bg-flow absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-purple-600/20 to-transparent pointer-events-none"
            id="bg-top"
        />
        <div
            aria-hidden="true"
            className="hero__bg-flow absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-pink-600/20 to-transparent pointer-events-none"
            id="bg-bottom"
        />

        {/* 全体にかかる薄いフィルター（雰囲気出し） */}
        <div
            aria-hidden="true"
            className="hero__filter absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50 pointer-events-none"
        />

        {/* メインコンテンツ */}
        <div className="container relative z-10 text-center px-6">
            <p className="hero__heading text-2xl md:text-4xl font-bold text-pink-300 mb-4 tracking-widest">
            葱野みやとは？
            </p>

            <h1 className="scramble-text text-5xl md:text-7xl lg:text-8xl font-black leading-tight text-white drop-shadow-2xl mb-8">
            セルフ受肉系Vtuber個人勢(*'▽'*)<br />
            好きなものは<br />
            ネギとアニメとねこ！
            </h1>

            <p className="text text-xl md:text-2xl text-gray-200 mb-12 max-w-2xl mx-auto leading-relaxed">
            このサイトは葱野みやのファンが勝手に作ったネタサイトです。
            </p>

            <a
            href="https://www.youtube.com/@葱野みや"
            target="_blank"
            rel="noopener noreferrer"
            className="link--youtube inline-block px-10 py-5 bg-red-600 hover:bg-red-700 text-white font-bold text-xl rounded-full shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-red-500/50"
            >
            YouTubeチャンネルへ
            </a>
        </div>

        {/* オプション：スクロール促しアイコン（かわいい） */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <p className="text-white text-4xl">↓</p>
        </div>
        </section>
    );
}