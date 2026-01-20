// app/components/ActivityCard.tsx
"use client";
import Image from "next/image";
import React from "react";

type CTA = { href: string; label: string } | null;

type Props = {
  image?: string | null;
  alt?: string;
  title: string;
  text: string | string[]; // ← 配列対応
  bgColor?: string;
  compact?: boolean;
  cta?: CTA;
  label?: string | null;
  className?: string;
};

export default function ActivityCard({
  image = null,
  alt = "",
  title,
  text,
  bgColor = "rgba(255,255,255,0.12)",
  compact = false,
  cta = null,
  label = null,
  className = "",
}: Props) {
  return (
    <article
      className={`group relative w-full rounded-2xl overflow-hidden border border-white/10 shadow-lg transform transition-transform duration-300 ease-out ${compact ? "p-4" : "p-6 md:p-8"} ${className} hover:scale-[1.02] hover:shadow-2xl`}
      style={{
        background: bgColor,
        backdropFilter: "blur(6px)",
        color: "var(--text-color, #111827)",
        willChange: "transform",
      }}
      aria-label={title}
      role="article"
    >
      {image ? (
        <div className={`mb-4 flex justify-center ${compact ? "" : "mb-6"}`}>
          <Image
            src={image}
            alt={alt || title}
            width={compact ? 96 : 128}
            height={compact ? 96 : 128}
            className="rounded-full object-cover shadow-md transition-transform duration-300 ease-out group-hover:scale-[1.02]"
            priority={false}
          />
        </div>
      ) : null}

      <div className="text-center">
        {label ? (
          <h3 className="text-pink-300 font-semibold text-sm md:text-base tracking-widest mb-2">
            {label}
          </h3>
        ) : null}

        <h2
          className="text-xl md:text-2xl font-extrabold leading-tight mb-3"
          style={{ color: "var(--accent-alt, #006666)" }}
        >
          {title}
        </h2>

        {/* ★ text が配列なら改行して表示 */}
        <p
          className="text-sm md:text-base leading-relaxed mb-4 px-2 whitespace-pre-line"
          style={{ color: "var(--text-color, #111827)" }}
        >
          {Array.isArray(text)
            ? text.map((line, i) => (
                <span key={i}>
                  {line}
                  {i < text.length - 1 && <br />}
                </span>
              ))
            : text}
        </p>

        {cta ? (
          <div className="mt-2">
            <a
              href={cta.href}
              className="inline-block text-sm md:text-base font-bold px-5 py-2 bg-red-600 hover:bg-red-700 text-white rounded-full shadow-md transition-transform duration-300 ease-out group-hover:scale-[1.02]"
              aria-label={cta.label}
            >
              {cta.label}
            </a>
          </div>
        ) : null}
      </div>
    </article>
  );
}