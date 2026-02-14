"use client";

export default function ShortsSection() {
  const shortIds = [
    "_7IpauUNmio",
    "Hrnann3SWgk",
    "4qgdIbN4vWk",
    "Wzw1H6-vLaQ",
    "OHso3KipCK0",
    "kOoJhl-tGXc",
    "jAXuN3AdWlM",
    "OgqmzCCmOtM",
    "5iyzl6kFgM8",
    "uw52egyGDuk",
    "HEnTPFyVQGY",
    "X9PaIPHGDs8",
    "o4H-_V6GYqI",
    "",
    "",
  ];

  const displayedShorts = shortIds.slice(0, 4);
  const hasMore = shortIds.length > 4;

  return (
    <section
      id="shorts"
      className="section py-20 fade-in"
      style={{ backgroundColor: "var(--section5-bg)" }}
    >
      <div className="container max-w-6xl mx-auto px-6">

        {/* ▼ 統一デザインのタイトル */}
        <h2 className="section-title fade-in">Shorts</h2>
        <hr className="section-divider fade-in" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-12">
          {displayedShorts.map((id) => (
            <a
              key={id}
              href={`https://www.youtube.com/shorts/${id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block aspect-video rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 fade-in"
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
          <div className="text-center mt-12 fade-in">
            <a
              href="https://www.youtube.com/@葱野みや/shorts"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 text-lg font-bold rounded-lg shadow-lg transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: "var(--youtube-bg)",
                color: "var(--footer-text)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "var(--youtube-hover)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "var(--youtube-bg)")
              }
            >
              and more...
            </a>
          </div>
        )}
      </div>
    </section>
  );
}