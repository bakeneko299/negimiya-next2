export default function HeroSection() {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* 流れる背景（上） */}
            <div className="hero__bg-flow absolute top-16 left-0 w-[1500%] h-64 opacity-80 -z-10">
                <div className="hero__thumb" style={{backgroundImage: 'url(/hero-bg1.png)'}}></div>
                <div className="hero__thumb" style={{backgroundImage: 'url(/hero-bg2.png)'}}></div>
                {/* 必要ならもっと追加 */}
            </div>

            {/* 流れる背景（下） */}
            <div id="bg-bottom" className="hero__bg-flow absolute bottom-0 left-0 w-[1500%] h-64 opacity-80 -z-10">
                <div className="hero__thumb" style={{backgroundImage: 'url(/hero-bg3.png)'}}></div>
                {/* 同じ画像を繰り返し */}
            </div>

            {/* フィルター */}
            <div className="hero__filter absolute inset-0 bg-black/10 pointer-events-none" />

            {/* コンテンツ（前回のやつそのまま） */}
            <div className="container relative z-10 text-center px-6">
                <h1 className="scramble-text text-5xl md:text-8xl font-black leading-tight text-[#00CED1] mb-8">
                セルフ受肉系Vtuber個人勢(*'▽'*)<br />
                好きなものは<br />
                ネギとアニメとねこ！
                </h1>
                {/* 以下同じ */}
            </div>
        </section>
    );
}