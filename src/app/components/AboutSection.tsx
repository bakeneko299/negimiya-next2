// app/components/ActivitiesSection.tsx
import Image from "next/image";

export default function ActivitiesSection() {
    return (
        <section
        id="about"
        className="bg-[var(--section2-bg)] py-20"
        >
        <div className="container max-w-[1080px] w-[90%] mx-auto">
            <div className="flex justify-between flex-wrap gap-6">
            <ActivityCard
                image="/images/Image-1.jpeg"
                alt="Vtuber活動"
                title="Vtuber活動"
                text="葱野みやは、2021年にデビューしたバーチャルYouTuber（Vtuber）です。彼女は主にゲーム実況や歌ってみた動画を投稿しており、その明るい性格と魅力的な声で多くのファンを獲得しています。葱野みやのチャンネルでは、ホラーゲームからアクションゲームまで幅広いジャンルのゲームが取り上げられており、視聴者との交流も積極的に行っています。"
            />

            <ActivityCard
                image="/images/Image-2.jpeg"
                alt="イラストレーター"
                title="イラストレーター"
                text="イラストレーターとしても活動しており、彼女の描くキャラクターは可愛らしく、ファンアートも多く見られます。葱野みやは、自身のイラストをSNSで公開することもあり、その独特なスタイルと色使いが注目されています。また、他のVtuberやクリエイターとのコラボも積極的で、多才な才能が光っています。"
            />

            <ActivityCard
                image="/images/Image-3.jpeg"
                alt="うたってみた"
                title="うたってみた"
                text="葱野みやは、歌ってみた動画も人気があります。透き通るような声と表現力豊かな歌唱力は、多くのリスナーを魅了しています。アニソン、J-POP、ボーカロイド曲など幅広くカバーしており、YouTubeでも高い支持を集めています。"
            />
            </div>
        </div>
        </section>
    );
    }

    function ActivityCard({
    image,
    alt,
    title,
    text,
    }: {
    image: string;
    alt: string;
    title: string;
    text: string;
    }) {
    return (
        <div
        className="
            w-full md:w-[32%]
            bg-[var(--news-bg)] text-[var(--text-color)]
            p-6 rounded-xl fade-in
        "
        >
        <Image
            src={image}
            alt={alt}
            width={100}
            height={100}
            className="w-24 h-24 object-cover object-center mx-auto mb-4 rounded-xl"
        />

        <h2 className="scramble-text text-[20px] font-bold text-[var(--accent-alt)] mb-4">
            {title}
        </h2>

        <hr className="border-2 border-[var(--accent-alt)] w-12 mb-4" />

        <p className="text text-[15px] leading-[1.8]">
            {text}
        </p>
        </div>
    );
}
