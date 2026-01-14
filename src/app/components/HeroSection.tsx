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

  // ループ用に複製（継ぎ目安定）
  const upperLoop = upperImages.concat(upperImages);
  const lowerLoop = lowerImages.concat(lowerImages);

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
          // 共通キーフレーム flow を使う（下段は reverse）
          style={{ width: "200%", animation: "flow 80s linear infinite", willChange: "transform" }}
        >
          {upperLoop.map((num, index) => (
            <div
              key={`upper-${index}`}
              className="flex-shrink-0"
              // **ここで各アイテムの横幅を固定または最小幅にする**
              // 例: width: 380px（お好みで調整）。minWidth にすると小画面で縮む。
              style={{ width: 380, height: 256, display: "flex", alignItems: "center", justifyContent: "center" }}
            >
              <img
                src={`/images/heroback/${num}.jpg`}
                alt=""
                // 高さを256pxに固定、縦横比を維持して縮める
                className="h-[256px] object-contain block"
                // もし Tailwind の任意値が効かない環境なら下記 style を代わりに使ってください
                // style={{ height: 256, objectFit: 'contain', display: 'block', maxWidth: '100%' }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* 下部：右に流れる帯（同じキーフレームを逆再生） */}
      <div
        className="absolute bottom-0 left-0 w-full flex justify-start pointer-events-none z-10 overflow-hidden"
        style={{ height: 256 }}
      >
        <div
          className="flex"
          style={{
            width: "200%",
            animation: "flow 80s linear infinite",
            animationDirection: "reverse",
            willChange: "transform",
          }}
        >
          {lowerLoop.map((num, index) => (
            <div
              key={`lower-${index}`}
              className="flex-shrink-0"
              style={{ width: 380, height: 256, display: "flex", alignItems: "center", justifyContent: "center" }}
            >
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

      {/* メインコンテンツ（文字はそのまま） */}
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

      {/* アニメーション定義（共通キーフレーム flow） */}
      <style jsx global>{`
        @keyframes flow {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}