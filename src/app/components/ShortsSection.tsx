// app/components/ShortsSection.tsx
"use client";  // fade-inとかで使うかもなので一応

export default function ShortsSection() {
  // ここに表示したい最新のShorts動画のURLを4つ入れる（embed用IDだけ）
  // 例: https://www.youtube.com/shorts/ABC123DEF → IDは "ABC123DEF"
  const shortIds = [
    "5iyzl6kFgM8",  // ← ここを実際のIDに変えてね！
    "jAXuN3AdWlM",
    "OHso3KipCK0",
    "Wzw1H6-vLaQ",
    // 5つ目以降は自動で「and more」になる
  ];

  const displayedShorts = shortIds.slice(0, 4);  // 最大4つ表示
  const hasMore = shortIds.length > 4;

  return (
    <section
      id="shorts"
      className="section py-20 fade-in"
      style={{ backgroundColor: "var(--section5-bg)" }}  // 他のセクションと揃えるor変えてもOK
    >
      <div className="container max-w-6xl mx-auto px-6">
        <h2
          className="text-4xl md:text-5xl font-black text-center mb-12 tracking-wider"
          style={{ color: "var(--accent-alt)" }}
        >
          Shorts
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {displayedShorts.map((id) => (
            <a
              key={id}
              href={`https://www.youtube.com/shorts/${id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block aspect-video rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <img
                src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`}
                alt="YouTube Shorts thumbnail"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </a>
          ))}
        </div>

        {hasMore && (
          <div className="text-center mt-12">
            <a
              href="https://www.youtube.com/@葱野みや/shorts"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 text-lg font-bold rounded-lg shadow-lg transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: "var(--youtube-bg)",
                color: "var(--footer-text)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--youtube-hover)")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--youtube-bg)")}
            >
              and more...
            </a>
          </div>
        )}
      </div>
    </section>
  );
}