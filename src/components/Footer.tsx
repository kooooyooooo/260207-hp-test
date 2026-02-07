"use client";

const menuLinks = [
  { label: "ホーム", href: "#hero" },
  { label: "ニュース", href: "#news" },
  { label: "クラブ紹介", href: "#about" },
  { label: "セレクション", href: "#selection" },
  { label: "選手紹介", href: "#team" },
];

const externalLinks = [
  { label: "学校公式サイト", href: "#" },
  { label: "県サッカー協会", href: "#" },
  { label: "高体連", href: "#" },
  { label: "JFA", href: "#" },
];

export default function Footer() {
  const handleClick = (href: string) => {
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      id="footer"
      style={{
        padding: "60px 24px 30px",
        background: "linear-gradient(180deg, #0a0a14, #06060e)",
        borderTop: "1px solid rgba(212,175,55,0.1)",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 40,
          marginBottom: 40,
        }}
      >
        {/* Brand */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2">
              <path d="M12 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z" />
            </svg>
            <span
              style={{
                fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
                fontSize: 20,
                color: "#D4AF37",
                letterSpacing: 2,
              }}
            >
              SAMPLE FC
            </span>
          </div>
          <p
            style={{
              fontSize: 12,
              color: "#666",
              lineHeight: 1.8,
              marginBottom: 20,
            }}
          >
            ○○高等学校サッカー部の公式ホームページです。チーム情報、試合結果、セレクション情報を発信しています。
          </p>

          {/* SNS */}
          <div style={{ display: "flex", gap: 12 }}>
            {/* X (Twitter) */}
            <a
              href="#"
              aria-label="X (Twitter)"
              style={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                border: "1px solid rgba(212,175,55,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#888",
                transition: "all 0.3s",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#D4AF37";
                e.currentTarget.style.color = "#D4AF37";
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(212,175,55,0.2)";
                e.currentTarget.style.color = "#888";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            {/* Instagram */}
            <a
              href="#"
              aria-label="Instagram"
              style={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                border: "1px solid rgba(212,175,55,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#888",
                transition: "all 0.3s",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#D4AF37";
                e.currentTarget.style.color = "#D4AF37";
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(212,175,55,0.2)";
                e.currentTarget.style.color = "#888";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            {/* YouTube */}
            <a
              href="#"
              aria-label="YouTube"
              style={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                border: "1px solid rgba(212,175,55,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#888",
                transition: "all 0.3s",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#D4AF37";
                e.currentTarget.style.color = "#D4AF37";
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(212,175,55,0.2)";
                e.currentTarget.style.color = "#888";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Menu */}
        <div>
          <h4
            style={{
              fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
              fontSize: 14,
              letterSpacing: 3,
              color: "#D4AF37",
              marginBottom: 20,
            }}
          >
            MENU
          </h4>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
            {menuLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleClick(link.href)}
                  style={{
                    background: "none",
                    border: "none",
                    fontSize: 13,
                    color: "#888",
                    cursor: "pointer",
                    padding: 0,
                    transition: "color 0.3s",
                    fontFamily: "var(--font-noto), 'Noto Sans JP', sans-serif",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#f0f0f0")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#888")}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* External Links */}
        <div>
          <h4
            style={{
              fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
              fontSize: 14,
              letterSpacing: 3,
              color: "#D4AF37",
              marginBottom: 20,
            }}
          >
            LINKS
          </h4>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
            {externalLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  style={{
                    fontSize: 13,
                    color: "#888",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    transition: "color 0.3s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#f0f0f0")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#888")}
                >
                  {link.label}
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div
        style={{
          borderTop: "1px solid rgba(212,175,55,0.1)",
          paddingTop: 24,
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: 11,
            color: "#444",
            letterSpacing: 1,
          }}
        >
          &copy; 2026 SAMPLE FC ○○高等学校サッカー部 All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
