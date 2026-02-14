// app/components/HeroSection.tsx
"use client";

import { useState, useEffect } from "react";
import ActivityCard from "./ActivityCard";

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

  const upperLoop = upperImages.concat(upperImages);
  const lowerLoop = lowerImages.concat(lowerImages);

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-16 overflow-hidden flex items-center justify-center bg-transparent"
    >
      {/* 上部トラック */}
      <div
        className="absolute top-16 left-0 w-full flex justify-start pointer-events-none z-20 overflow-hidden"
        style={{ height: 256 }}
      >
        <div className="flex flow-track" style={{ width: "200%" }}>
          {upperLoop.map((num, index) => (
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

      {/* 下部トラック */}
      <div
        className="absolute bottom-0 left-0 w-full flex justify-start pointer-events-none z-20 overflow-hidden"
        style={{ height: 256 }}
      >
        <div
          className="flex flow-track"
          style={{ width: "200%", animationDirection: "reverse" }}
        >
          {lowerLoop.map((num, index) => (
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

      {/* 中央カード */}
      <div className="relative z-30 w-full flex items-center justify-center px-6">
        <div className="w-full max-w-xl sm:max-w-2xl">
          <ActivityCard
            image={null}
            title="葱野みやとは？"
            text={[
              "セルフ受肉系Vtuber個人勢(*'▽'*)",
              "好きなものは ネギとアニメとねこ！"
            ]}
            bgColor="rgba(240, 248, 255, 0.28)"
            cta={{
              href: "https://www.youtube.com/@葱野みや",
              label: "YouTubeチャンネルへ"
            }}
          />
        </div>
      </div>

      {/* グローバルアニメーション定義 */}
      <style jsx global>{`
        @keyframes flow {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .flow-track {
          animation: flow 80s linear infinite;
          will-change: transform;
        }

        /* スマホだけ速くする */
        @media (max-width: 640px) {
          .flow-track {
            animation-duration: 40s;
          }
        }
      `}</style>
    </section>
  );
}
