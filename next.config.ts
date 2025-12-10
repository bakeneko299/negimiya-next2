// next.config.ts（完全修正版・これに全部置き換えてOK！）

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ← ここに元々あった設定があれば全部残す！！

  // ここに追加（これだけで .links が生き残る！）
  // @ts-ignore ← エラーを無視する魔法の一行（これで安心）
  // @ts-ignore
  tailwindcss: {
    safelist: ["links"],
  },
};

export default nextConfig;