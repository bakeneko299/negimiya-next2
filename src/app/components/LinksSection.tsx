// components/LinksSection.tsx
import React from 'react';

const LinksSection: React.FC = () => {
    return (
        <section className="links fade-in" id="Links">
        <div className="container">
            <h2>Links</h2>
            <hr />
            <ul>
            <li>
                <a
                className="link--youtube"
                href="https://www.youtube.com/@葱野みや"
                target="_blank"
                rel="noopener noreferrer"
                >
                YouTube
                </a>
            </li>
            <li>
                <a
                className="link--x"
                href="https://x.com/Negi_008"
                target="_blank"
                rel="noopener noreferrer"
                >
                X（旧Twitter）
                </a>
            </li>
            <li>
                <a
                className="link--marshmallow"
                href="https://marshmallow-qa.com/negi_008"
                target="_blank"
                rel="noopener noreferrer"
                >
                マシュマロ
                </a>
            </li>
            <li>
                <a
                className="link--skeb"
                href="https://skeb.jp/@Negi_008"
                target="_blank"
                rel="noopener noreferrer"
                >
                skeb.jp
                </a>
            </li>
            <li>
                <a
                className="link--booth"
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
    );
};

export default LinksSection;
