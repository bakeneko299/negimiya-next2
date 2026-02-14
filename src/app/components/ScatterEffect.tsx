"use client";

import { useEffect } from "react";

export default function ScatterEffect() {
  useEffect(() => {
    const scatterImages = [
      "/images/icon-128x128.png",
      "/images/karamiya128.png",
      "/images/kissmiya128.png",
    ];

    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      if (target.closest("header") || target.closest(".nav--mobile")) return;

      const clickX = e.clientX;
      const clickY = e.clientY;
      const totalIcons = 6;

      for (let i = 0; i < totalIcons; i++) {
        const imgSrc =
          scatterImages[Math.floor(Math.random() * scatterImages.length)];

        const flyImg = document.createElement("img");
        flyImg.src = imgSrc;
        flyImg.className = "scatter-fly";
        flyImg.style.left = `${clickX - 64}px`;
        flyImg.style.top = `${clickY - 64}px`;
        flyImg.style.opacity = "1";
        flyImg.style.transform = "translate(0,0) rotate(0deg)";

        document.body.appendChild(flyImg);

        const baseAngle = (i / totalIcons) * 360;
        const angle = baseAngle + (Math.random() * 20 - 10);
        const rad = (angle * Math.PI) / 180;
        const distance = 100 + Math.random() * 60;

        const x = Math.cos(rad) * distance;
        const y = Math.sin(rad) * distance;
        const rotateAngle = Math.random() * 720 - 360;

        setTimeout(() => {
          flyImg.style.transform = `translate(${x}px, ${y}px) rotate(${rotateAngle}deg)`;
        }, Math.random() * 100);

        setTimeout(() => {
          flyImg.remove();
        }, 600);
      }
    };

    document.body.addEventListener("click", onClick);
    return () => document.body.removeEventListener("click", onClick);
  }, []);

  return null;
}
