"use client";

import { useEffect, useState } from "react";

const navItems = [
  { label: "ホーム", href: "#hero" },
  { label: "ニュース", href: "#news" },
  { label: "クラブ紹介", href: "#about" },
  { label: "セレクション", href: "#selection" },
  { label: "選手紹介", href: "#team" },
  { label: "試合結果", href: "#results" },
  { label: "スポンサー", href: "#sponsors" },
  { label: "お問い合わせ", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection("#" + entry.target.id);
          }
        });
      },
      { rootMargin: "-300px 0px 0px 0px", threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      id="header"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: scrolled ? "12px 24px" : "20px 24px",
        background: scrolled ? "rgba(10,10,20,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(212,175,55,0.15)" : "1px solid transparent",
        transition: "all 0.5s cubic-bezier(0.25,0.8,0.25,1)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: "50%",
              border: "2px solid #D4AF37",
              background: "linear-gradient(135deg, rgba(107,45,139,0.3), rgba(10,10,20,0.8))",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2">
              <path d="M12 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z" />
            </svg>
          </div>
          <div>
            <div
              style={{
                fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
                fontSize: 22,
                letterSpacing: 3,
                color: "#D4AF37",
                lineHeight: 1,
              }}
            >
              SAMPLE FC
            </div>
            <div
              style={{
                fontSize: 9,
                letterSpacing: 4,
                color: "#888",
                textTransform: "uppercase",
              }}
            >
              Football Club
            </div>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav
          style={{
            display: "flex",
            gap: 24,
            alignItems: "center",
          }}
          className="desktop-nav"
        >
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              style={{
                background: "none",
                border: "none",
                fontFamily: "var(--font-noto), 'Noto Sans JP', sans-serif",
                fontSize: 13,
                fontWeight: 500,
                letterSpacing: 1.5,
                color: activeSection === item.href ? "#D4AF37" : "#ccc",
                cursor: "pointer",
                position: "relative",
                padding: "4px 0",
                transition: "color 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#D4AF37";
              }}
              onMouseLeave={(e) => {
                if (activeSection !== item.href) {
                  e.currentTarget.style.color = "#ccc";
                }
              }}
            >
              {item.label}
              <span
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  height: 2,
                  width: activeSection === item.href ? "100%" : 0,
                  background: "linear-gradient(90deg, #D4AF37, #6B2D8B)",
                  transition: "width 0.3s",
                }}
              />
            </button>
          ))}
        </nav>

        {/* Hamburger Button */}
        <button
          className="hamburger-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニューを開く"
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 8,
            zIndex: 1002,
          }}
        >
          <div style={{ width: 24, display: "flex", flexDirection: "column", gap: 5 }}>
            <span
              style={{
                display: "block",
                height: 2,
                background: "#D4AF37",
                borderRadius: 2,
                transition: "all 0.3s",
                transform: menuOpen ? "translateY(7px) rotate(45deg)" : "none",
              }}
            />
            <span
              style={{
                display: "block",
                height: 2,
                background: "#D4AF37",
                borderRadius: 2,
                transition: "all 0.3s",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display: "block",
                height: 2,
                background: "#D4AF37",
                borderRadius: 2,
                transition: "all 0.3s",
                transform: menuOpen ? "translateY(-7px) rotate(-45deg)" : "none",
              }}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(10,10,20,0.98)",
          backdropFilter: "blur(20px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 24,
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "all" : "none",
          transition: "opacity 0.4s",
          zIndex: 1001,
        }}
      >
        {navItems.map((item, i) => (
          <button
            key={item.href}
            onClick={() => handleNavClick(item.href)}
            style={{
              background: "none",
              border: "none",
              fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
              fontSize: 24,
              letterSpacing: 3,
              color: activeSection === item.href ? "#D4AF37" : "#ccc",
              cursor: "pointer",
              animation: menuOpen ? `slideUp 0.5s ease ${i * 0.06}s both` : "none",
            }}
          >
            {item.label}
          </button>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: block !important; }
        }
      `}</style>
    </header>
  );
}
