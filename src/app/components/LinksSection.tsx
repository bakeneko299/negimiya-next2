// components/LinksSection.tsx
"use client";

export default function LinksSection() {
    return (
        <>
        {/* =========================
            Links Section
        ========================== */}
        <section id="links" className="links-section fade-in">
            <div className="links-container">
            <h2 className="links-title">Links</h2>
            <hr className="links-divider" />

            <ul className="links-list">
                <li>
                <a
                    className="link-btn link-youtube"
                    href="https://www.youtube.com/@葱野みや"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    YouTube
                </a>
                </li>

                <li>
                <a
                    className="link-btn link-x"
                    href="https://x.com/Negi_008"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    X（旧Twitter）
                </a>
                </li>

                <li>
                <a
                    className="link-btn link-marshmallow"
                    href="https://marshmallow-qa.com/negi_008"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    マシュマロ
                </a>
                </li>

                <li>
                <a
                    className="link-btn link-skeb"
                    href="https://skeb.jp/@Negi_008"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    skeb.jp
                </a>
                </li>

                <li>
                <a
                    className="link-btn link-booth"
                    href="https://neginomiya.booth.pm"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Booth
                </a>
                </li>
            </ul>
            </div>
        </section>
        </>
    );
}
