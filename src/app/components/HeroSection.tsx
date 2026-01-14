// app/components/HeroSection.tsx
"use client";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [upperImages, setUpperImages] = useState<string[]>([]);
  const [lowerImages, setLowerImages] = useState<string[]>([]);

  useEffect(() => {
    const getRandomImages = (count: number) => {
      const allNumbers = Array.from({ length: 28 }, (_, i) => i + 1);
      const shuffled = [...allNumbers].sort(() => 0.5 - Math.random());  // ← ここを修正！
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
      {/* 上部：左に流れる帯 */}
      <div
        className="absolute top-16 left-0 w-[2000%] h-48 md:h-64 flex opacity-80 pointer-events-none z-10"
        style={{ animation: "flowLeft 80s linear infinite" }}
      >
        {upperImages.map((num, index) => (
          <div
            key={`upper-${index}`}
            className="w-[10%] h-full bg-cover bg-center flex-shrink-0"
            style={{ backgroundImage: `url("/images/heroback/${num}.jpg")` }}
          />
        ))}
        {upperImages.slice(0, 2).map((num, index) => (
          <div
            key={`upper-loop-${index}`}
            className="w-[10%] h-full bg-cover bg-center flex-shrink-0"
            style={{ backgroundImage: `url("/images/heroback/${num}.jpg")` }}
          />
        ))}
      </div>

      {/* 下部：右に流れる帯 */}
      <div
        className="absolute bottom-0 left-0 w-[2000%] h-48 md:h-64 flex opacity-80 pointer-events-none z-10"
        style={{ animation: "flowRight 100s linear infinite" }}
      >
        {lowerImages.map((num, index) => (
          <div
            key={`lower-${index}`}
            className="w-[10%] h-full bg-cover bg-center flex-shrink-0"
            style={{ backgroundImage: `url("/images/heroback/${num}.jpg")` }}
          />
        ))}
        {lowerImages.slice(0, 2).map((num, index) => (
          <div
            key={`lower-loop-${index}`}
            className="w-[10%] h-full bg-cover bg-center flex-shrink-0"
            style={{ backgroundImage: `url("/images/heroback/${num}.jpg")` }}
          />
        ))}
      </div>

      {/* 暗転フィルター */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none z-20" />

      {/* メインコンテンツ */}
      <div className="relative z-30 text-center px-6 max-w-4xl">
        <p className="text-xl md:text-3xl font-bold text-pink-300 mb-4 tracking-widest">
          葱野みやとは？
        </p>
        <h1 className="scramble-text text-5xl md:text-7xl lg:text-8xl font-black leading-tight text-white drop-shadow-2xl mb-8">
          セルフ受肉系Vtuber個人勢(*'▽'*)<br />
          好きなものは<br />
          ネギとアニメとねこ！
        </h1>
        <p className="text-lg md:text-2xl text-gray-200 mb-12 max-w-2xl mx-auto leading-relaxed">
          このサイトは葱野みやのファンが勝手に作ったネタサイトです♡
        </p>
        <a
          href="https://www.youtube.com/@葱野みや"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-5 bg-red-600 hover:bg-red-700 text-white font-bold text-xl rounded-full shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-red-500/50"
        >
          YouTubeチャンネルへ
        </a>
      </div>

      {/* アニメーション定義 */}
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