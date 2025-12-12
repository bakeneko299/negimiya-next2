// app/components/Header.tsx

export default function Header() {
    return (
        <header className="header">
        <div className="header-inner">
            <div className="logo">NEGIMIYA</div>

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
