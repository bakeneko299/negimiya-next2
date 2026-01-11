// app/components/ActivitiesSection.tsx
import Image from "next/image";

export default function ActivitiesSection() {
  return (
    <section
      id="about"
      className="bg-[var(--section2-bg)] py-16 md:py-24"
    >
      <div className="container max-w-7xl mx-auto px-5 md:px-8 lg:px-12">

        {/* セクションタイトル */}
        <div className="text-center mb-12 md:mb-20">
          <h1 
            className="scramble-text text-4xl md:text-5xl lg:text-6xl font-black tracking-wider"
            style={{ color: "var(--accent-color)" }}
          >
            What's 葱野みや？
          </h1>
          <hr 
            className="w-24 md:w-40 mx-auto border-4 border-[var(--accent-alt)] mt-6 rounded-full"
          />
        </div>

        {/* カードグリッド */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 xl:gap-12">
          <ActivityCard
            image="/images/Image-1.jpeg"
            alt="Vtuber活動"
            title="Vtuber活動"
            text="葱野みやは2021年にデビューしたVtuberです。モデリング、デザイン含め全て自作です。"
            bgColor="rgba(255, 249, 177, 0.25)"
          />
          <ActivityCard
            image="/images/Image-2.jpeg"
            alt="イラストレーター"
            title="イラストレーター"
            text="イラストレーターとしても活動しており、skebでのイラスト受注、Boothでのオリジナルグッズを販売しています。"
            bgColor="rgba(224, 255, 255, 0.35)"
          />
          <ActivityCard
            image="/images/Image-3.jpeg"
            alt="声の活動"
            title="声の活動"
            text="声が葱野みやの真骨頂といっても過言ではありません（諸説あり）。まずは下のショートから聞いてみましょう。"
            bgColor="rgba(240, 248, 255, 0.3)"
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
  bgColor,
}: {
  image: string;
  alt: string;
  title: string;
  text: string;
  bgColor: string;
}) {
  return (
    <div
      className="
        group relative
        bg-white/5 backdrop-blur-sm
        rounded-2xl overflow-hidden
        shadow-lg hover:shadow-2xl
        transition-all duration-300
        hover:-translate-y-3
        border border-white/10
      "
      style={{ backgroundColor: bgColor }}
    >
      <div className="p-6 md:p-8 flex flex-col items-center">
        {/* ワンポイント画像 */}
        <div className="mb-6">
          <Image
            src={image}
            alt={alt}
            width={128}
            height={128}
            className="
              w-32 h-32 object-cover object-center 
              rounded-full shadow-md
              transition-transform duration-500 
              group-hover:scale-110
            "
          />
        </div>

        <h2 className="scramble-text text-xl md:text-2xl font-bold text-[var(--accent-alt)] mb-4 text-center">
          {title}
        </h2>

        {/* ドット問題を完全に解決した横線 */}
        <div 
          className="h-1 mx-auto mb-6 rounded-full"
          style={{
            width: '128px',
            backgroundColor: 'var(--accent-alt)',
          }}
        />

        <p className="text-[15px] md:text-[16px] lg:text-[17px] leading-relaxed text-[var(--text-color)] text-center opacity-90 px-2">
          {text}
        </p>
      </div>
    </div>
  );
}