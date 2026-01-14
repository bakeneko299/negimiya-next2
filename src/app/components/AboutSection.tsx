// app/components/AboutSection.tsx
"use client";
import ActivityCard from "./ActivityCard";

export default function AboutSection() {
  return (
    <section id="about" className="bg-[var(--section2-bg)] py-16 md:py-24">
      <div className="container max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        {/* セクションタイトル */}
        <div className="text-center mb-12 md:mb-20">
          <h1
            className="scramble-text text-4xl md:text-5xl lg:text-6xl font-black tracking-wider"
            style={{ color: "var(--accent-color)" }}
          >
            What's 葱野みや？
          </h1>
          <hr className="w-24 md:w-40 mx-auto border-4 border-[var(--accent-alt)] mt-6 rounded-full" />
        </div>

        {/* カードグリッド（背景色は以前のまま、文字色は CSS 変数を使用） */}
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