// app/components/Header.tsx
"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "header-scrolled" : ""}`}>
      <div className="header-inner">
        <div className="logo">葱野みやファンサイト</div>

        <nav className="nav">
          <a href="#hero">Top</a>
          <a href="#about">About</a>
          <a href="#videos">Activities</a>
          <a href="#links">Links</a>
        </nav>
      </div>
    </header>
  );
}
