import Image from 'next/image'; // ← Next.jsの最適化画像を使うとさらに最高！

export default function AboutSection() {
    return (
        <section id="about" className="section py-20 bg-white">
        <div className="container max-w-6xl mx-auto px-6">

            <div className="grid md:grid-cols-3 gap-12">
            <AboutCard
                imageSrc="/images/Image-1.jpeg"
                alt="Vtuber活動"
                title="Vtuber活動"
                description={
                <>
                    葱野みやは、2021年にデビューしたバーチャルYouTuber（Vtuber）です。<br />
                    主にゲーム実況や歌ってみた動画を投稿しており、その明るい性格と魅力的な声で多くのファンを獲得しています。<br />
                    ホラーゲームからアクションゲームまで幅広いジャンルを配信し、視聴者との交流もとっても積極的！
                </>
                }
            />

            <AboutCard
                imageSrc="/images/Image-2.jpeg"
                alt="イラストレーター"
                title="イラストレーター"
                description={
                <>
                    イラストレーターとしても大活躍！<br />
                    彼女の描くキャラクターはとっても可愛らしく、ファンアートも続出しています。<br />
                    SNSで公開される独特なタッチと色使いが大人気で、他のクリエイターとのコラボも多数！
                </>
                }
            />

            <AboutCard
                imageSrc="/images/Image-3.jpeg"
                alt="うたってみた"
                title="うたってみた"
                description={
                <>
                    透き通るような美しい歌声で「歌ってみた」動画も大人気！<br />
                    アニソン、J-POP、ボカロ曲まで幅広くカバーしており、表現力豊かな歌唱に感動のコメントが殺到しています。<br />
                    YouTubeで聴くだけで心が浄化されます♡
                </>
                }
            />
            </div>

        </div>
        </section>
    );
    }

    // カードコンポーネント（画像サイズ完璧調整済み）
    function AboutCard({
    imageSrc,
    alt,
    title,
    description,
    }: {
    imageSrc: string;
    alt: string;
    title: string;
    description: React.ReactNode;
    }) {
    return (
        <div className="flex flex-col items-center text-center fade-in group">
        {/* 画像エリア：高さ固定＋きれいに切り抜き */}
        <div className="mb-8 w-full overflow-hidden rounded-2xl shadow-lg transition-transform group-hover:scale-105">
            <Image
            src={imageSrc}
            alt={alt}
            width={600}   // 任意の幅（実際はコンテナに合わせて縮小される）
            height={400}  // 3:2の黄金比（h-80相当）
            className="w-full h-80 object-cover object-center"
            loading="lazy"
            />
        </div>

        {/* テキストエリア */}
        <div className="space-y-4 px-4">
            <h2 className="text-2xl md:text-3xl font-bold scramble-text">{title}</h2>
            <hr className="w-20 mx-auto border-2 border-purple-500 rounded-full" />
            <p className="text text-lg leading-relaxed text-gray-700">
            {description}
            </p>
        </div>
        </div>
    );
}