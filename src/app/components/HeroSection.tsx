// app/components/HeroSection.tsx
"use client";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [upperImages, setUpperImages] = useState<string[]>([]);
  const [lowerImages, setLowerImages] = useState<string[]>([]);

  useEffect(() => {
    const getRandomImages = (count: number) => {
      const allNumbers = Array.from({ length: 28 }, (_, i) => i + 1);
      const shuffled = [...allNumbers].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, count).map(n => String(n).padStart(3, "0"));
    };
    setUpperImages(getRandomImages(10));
    setLowerImages(getRandomImages(10));
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-16 overflow-hidden bg-gradient-to-b from-purple-900/30 to-pink-900/30 flex items-center justify-center"
    >
      {/* 上部：左に流れる帯（ラッパーの高さを256pxに固定） */}
      <div
        className="absolute top-16 left-0 w-full flex justify-start pointer-events-none z-10 overflow-hidden"
        style={{ height: 256 }}
      >
        <div
          className="flex"
          style={{ width: "200%", animation: "flowLeft 80s linear infinite" }}
        >
          {upperImages.concat(upperImages).map((num, index) => (
            <div key={`upper-${index}`} className="flex-shrink-0">
              <img
                src={`/images/heroback/${num}.jpg`}
                alt=""
                className="h-[256px] object-contain block"
              />
            </div>
          ))}
        </div>
      </div>

      {/* 下部：右に流れる帯 */}
      <div
        className="absolute bottom-0 left-0 w-full flex justify-start pointer-events-none z-10 overflow-hidden"
        style={{ height: 256 }}
      >
        <div
          className="flex"
          style={{ width: "200%", animation: "flowRight 80s linear infinite", animationDirection: "reverse" }}
        >
          {lowerImages.concat(lowerImages).map((num, index) => (
            <div key={`lower-${index}`} className="flex-shrink-0">
              <img
                src={`/images/heroback/${num}.jpg`}
                alt=""
                className="h-[256px] object-contain block"
              />
            </div>
          ))}
        </div>
      </div>

      {/* 暗転フィルター */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none z-20" />

      {/* メインコンテンツ（文字サイズを控えめに調整） */}
      <div className="relative z-30 text-center px-6 max-w-4xl">
        <p className="text-base md:text-lg lg:text-xl font-semibold text-pink-300 mb-4 tracking-widest">
          葱野みやとは？
        </p>

        <h1 className="scramble-text text-3xl md:text-5xl lg:text-6xl xl:text-6xl font-extrabold leading-tight text-white drop-shadow-2xl mb-8">
          セルフ受肉系Vtuber個人勢(*'▽'*)<br />
          好きなものは<br />
          ネギとアニメとねこ！
        </h1>

        <p className="text-base md:text-lg lg:text-lg text-gray-200 mb-12 max-w-2xl mx-auto leading-relaxed">
          このサイトは葱野みやのファンが公認を頂いて作ったネタサイトです
        </p>

        <a
          href="https://www.youtube.com/@葱野みや"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-sm md:text-base lg:text-base font-bold px-6 md:px-8 py-3 md:py-4 bg-red-600 hover:bg-red-700 text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-red-500/50"
        >
          YouTubeチャンネルへ
        </a>
      </div>

      {/* アニメーション定義（元のまま） */}
      <style jsx global>{`
        @keyframes flowLeft {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes flowRight {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}