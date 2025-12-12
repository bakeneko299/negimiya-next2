import React from 'react';

/**
 * ActivityItem コンポーネント
 * 各動画/説明ブロックのレイアウトを担当します。
 * PC (md:以上) では動画と説明が横並び (flex-row) になります。
 */
function ActivityItem({
    title,
    videoId,
    description,
}: {
    title: string;
    videoId: string;
    description: React.ReactNode;
}) {
    return (
        // ルート要素: mb-[60px] で間隔を確保。モバイルは縦積み、PCは横並び。
        <div className="flex flex-col md:flex-row justify-around items-center mb-[60px] fade-in">
            
            {/* 1. タイトルと説明文のコラム (左側) */}
            {/* PCサイズ (md:) 以上で幅を46%に設定 (元のCSS .videos .column w: 46% を再現) */}
            <div className="w-full md:w-[46%] mb-6 md:mb-0">
                
                {/* h2: 元のCSS .videos h2 を再現 */}
                <h2 className="scramble-text text-2xl md:text-[28px] font-bold text-[var(--accent-alt)] mb-4 md:mb-[18px] leading-[1.3]">
                    {title}
                </h2>
                
                {/* hr: 元のCSS .videos hr を再現 */}
                <hr className="border-2 border-[var(--accent-color)] w-[60px] mb-5 md:mb-[20px]" />
                
                {/* p: 元のCSS .videos .text を再現 */}
                <p className="text-[15px] md:text-[16px] leading-[1.8] text-[var(--text-color)] mb-5 md:mb-[20px]">
                    {description}
                </p>
            </div>

            {/* 2. 動画のコラム (右側) */}
            {/* PCサイズ (md:) 以上で幅を46%に設定 */}
            <div className="w-full md:w-[46%]">
                <div className="aspect-video w-full">
                    {/* 動画コンテナ: PCのCSSで設定されていた最大幅 600px を再現 */}
                    <div className="w-full h-full md:max-w-[600px] md:mx-auto"> 
                        <iframe
                            className="w-full h-full rounded-xl shadow-lg"
                            src={`https://www.youtube.com/embed/${videoId}`}
                            title={title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}

/**
 * ActivitySection コンポーネント (セクション全体)
 * 元のCSSの .videos セクションに対応します。
 */
export default function ActivitySection() {
    return (
        // section: 元のCSS .videos を再現
        <section id="videos" className="videos bg-[var(--section3-bg)] py-0 pb-10"> 
            <div className="container max-w-[1080px] w-[90%] mx-auto">

                <ActivityItem
                    title="ハロウィン×グミ＝お祭り"
                    videoId="iY6u2zJ9X78"
                    description={
                        <>
                            25種類のグミを使ってハロウィンパーティーを開催！<br />
                            葱野みやが選んだグミは、見た目も味も個性的で、視聴者を楽しませています。<br />
                            <a
                                href="https://93gummy.jp/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 underline"
                            >
                                日本グミ協会
                            </a>
                            に所属してはいないものの、彼女のグミ愛は本物です。<br />
                            気になったグミはぜひチェックしてみてください。<br />
                            ※2025年10月31日時点の情報です。
                        </>
                    }
                />

                <ActivityItem
                    title="アルピニストとしてのプライド"
                    videoId="FJ-lsDIjono"
                    description={
                        <>
                            登山ゲーム「PEAK」をアルピニストとしてのプライドを持って配信しています。<br />
                            リュックサックをけり落とさない、弁当箱でギャンブルなど、取れ高のあるプレイスタイルが特徴。<br />
                            彼女の悲鳴には、多くの人々がガッツポーズしてしまいます。
                        </>
                    }
                />
                
                <ActivityItem
                    title="食事を楽しみましょう"
                    videoId="z1HCukNoFFE"
                    description={
                        <>
                            葱野みやは特に家系ラーメンが好きで、がっつりした食事を好んでいます。<br />
                            期間限定品の食レポ動画も大人気！<br />
                            視聴者にとっても参考になる内容が多く、高評価続出です。
                        </>
                    }
                />
                <ActivityItem
                    title="悲鳴はリスナーの栄養"
                    videoId="f2vSnWngjJY"
                    description={
                        <>
                            怖がりながらも視聴者を楽しませるために頑張るホラー実況。<br />
                            耳から心の栄養を摂取できるのは葱野みやだけ！<br />
                            思わず「たすかる」とスパチャしてしまいますね。
                        </>
                    }
                />
                <ActivityItem
                    title="心の葛藤"
                    videoId="CH7L6ZQgASc"
                    description={
                        <>
                            活動を続ける中での理想と現実のギャップ、心の葛藤。<br />
                            そんなリアルな姿も含めて応援したくなる……<br />
                            「伸びろーッ！」
                        </>
                    }
                />
            </div>
        </section>
    );
}