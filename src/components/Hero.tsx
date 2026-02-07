"use client";

import Reveal from "./ui/Reveal";
import AnimatedCounter from "./ui/AnimatedCounter";

const stats = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2">
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5C7 4 9 7 12 7s5-3 7.5-3a2.5 2.5 0 0 1 0 5H18" />
        <path d="M18 14v-3a6 6 0 0 0-12 0v3" />
        <path d="M6 14a6 6 0 0 0 12 0" />
        <line x1="12" y1="14" x2="12" y2="21" />
        <line x1="9" y1="21" x2="15" y2="21" />
      </svg>
    ),
    value: 12,
    suffix: "年",
    label: "創部",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    value: 45,
    suffix: "名",
    label: "部員数",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2">
        <circle cx="12" cy="8" r="7" />
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
      </svg>
    ),
    value: 3,
    suffix: "回",
    label: "県大会出場",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    value: 85,
    suffix: "%",
    label: "勝率（今季）",
  },
];

export default function Hero() {
  const handleScroll = (id: string) => {
    const el = document.querySelector(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
        padding: "120px 24px 0",
      }}
    >
      {/* Background Layers */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 20% 50%, rgba(107,45,139,0.15) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(212,175,55,0.08) 0%, transparent 50%), radial-gradient(ellipse at 50% 80%, rgba(107,45,139,0.1) 0%, transparent 50%)",
          zIndex: 0,
        }}
      />

      {/* Noise overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E\")",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* Rotating rings */}
      <div
        style={{
          position: "absolute",
          top: "-100px",
          right: "-100px",
          width: 400,
          height: 400,
          borderRadius: "50%",
          border: "1px solid rgba(212,175,55,0.08)",
          animation: "spin 60s linear infinite",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-80px",
          left: "-80px",
          width: 300,
          height: 300,
          borderRadius: "50%",
          border: "1px solid rgba(107,45,139,0.1)",
          animation: "spinReverse 45s linear infinite",
          zIndex: 0,
        }}
      />

      {/* Diagonal lines */}
      <svg
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        {Array.from({ length: 20 }).map((_, i) => (
          <line
            key={i}
            x1={`${(i + 1) * 5}%`}
            y1="0"
            x2={`${(i + 1) * 5 + 20}%`}
            y2="100%"
            stroke="#D4AF37"
            strokeWidth="1"
            opacity="0.03"
          />
        ))}
      </svg>

      {/* Content */}
      <div style={{ position: "relative", zIndex: 1, maxWidth: 900 }}>
        {/* Team Photo Placeholder */}
        <Reveal direction="up" delay={0}>
          <div
            style={{
              width: "min(90vw, 800px)",
              height: "min(50vw, 400px)",
              borderRadius: 16,
              border: "2px dashed rgba(212,175,55,0.3)",
              background:
                "linear-gradient(135deg, rgba(107,45,139,0.08), rgba(10,10,20,0.5))",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 16,
              margin: "0 auto 48px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage:
                  "repeating-conic-gradient(rgba(107,45,139,0.05) 0% 25%, transparent 0% 50%)",
                backgroundSize: "60px 60px",
                transform: "rotate(45deg) scale(1.5)",
                pointerEvents: "none",
              }}
            />
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="rgba(212,175,55,0.4)"
              strokeWidth="1.5"
              style={{ position: "relative", zIndex: 1 }}
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            <span
              style={{
                fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
                fontSize: 14,
                letterSpacing: 4,
                color: "rgba(212,175,55,0.4)",
                position: "relative",
                zIndex: 1,
              }}
            >
              TEAM PHOTO
            </span>
          </div>
        </Reveal>

        {/* Main Title */}
        <Reveal direction="up" delay={0.2}>
          <h1
            style={{
              fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
              fontSize: "clamp(48px, 10vw, 120px)",
              letterSpacing: 6,
              lineHeight: 0.95,
              marginBottom: 24,
            }}
          >
            <span className="gradient-text" style={{ display: "block" }}>
              SAMPLE
            </span>
            <span
              style={{
                display: "block",
                WebkitTextStroke: "1px rgba(212,175,55,0.5)",
                WebkitTextFillColor: "transparent",
              }}
            >
              FOOTBALL CLUB
            </span>
          </h1>
        </Reveal>

        {/* Catchcopy */}
        <Reveal direction="up" delay={0.4}>
          <p
            style={{
              fontSize: "clamp(14px, 2vw, 18px)",
              fontWeight: 300,
              color: "#aaa",
              lineHeight: 1.8,
              maxWidth: 500,
              margin: "0 auto 40px",
            }}
          >
            全力で闘い、仲間と共に成長する。
            <br />
            私たちの挑戦は、ここから始まる。
          </p>
        </Reveal>

        {/* CTA Buttons */}
        <Reveal direction="up" delay={0.6}>
          <div
            style={{
              display: "flex",
              gap: 16,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <button className="btn-primary" onClick={() => handleScroll("#selection")}>
              セレクション情報
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
            <button className="btn-outline" onClick={() => handleScroll("#contact")}>
              お問い合わせ
            </button>
          </div>
        </Reveal>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: 100,
          left: "50%",
          transform: "translateX(-50%)",
          animation: "float 3s ease-in-out infinite",
          zIndex: 1,
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="rgba(212,175,55,0.4)"
          strokeWidth="2"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>

      {/* Stats Bar */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          background: "linear-gradient(180deg, transparent, rgba(10,10,20,0.9))",
          padding: "60px 24px 24px",
          zIndex: 1,
        }}
      >
        <div
          style={{
            maxWidth: 800,
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            gap: 20,
          }}
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 4,
              }}
            >
              {stat.icon}
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              <span
                style={{
                  fontSize: 11,
                  color: "#888",
                  letterSpacing: 1,
                }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
