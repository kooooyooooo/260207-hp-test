"use client";

import Reveal from "./ui/Reveal";

export default function Selection() {
  const handleApply = () => {
    const el = document.querySelector("#contact");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="selection"
      style={{
        padding: "80px 24px",
        background: "linear-gradient(135deg, #6B2D8B, #4a1d63, #2d1145)",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Diagonal pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent 0px, transparent 20px, rgba(212,175,55,0.1) 20px, rgba(212,175,55,0.1) 21px)",
          opacity: 0.1,
          pointerEvents: "none",
        }}
      />

      {/* JOIN US decoration */}
      <div
        style={{
          position: "absolute",
          right: "-2%",
          top: "50%",
          transform: "translateY(-50%)",
          fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
          fontSize: "clamp(80px, 20vw, 200px)",
          color: "rgba(255,255,255,0.03)",
          whiteSpace: "nowrap",
          pointerEvents: "none",
          lineHeight: 1,
        }}
      >
        JOIN US
      </div>

      <div style={{ position: "relative", zIndex: 1, maxWidth: 700, margin: "0 auto" }}>
        <Reveal direction="up" delay={0}>
          <div
            style={{
              display: "inline-block",
              border: "1px solid rgba(212,175,55,0.5)",
              borderRadius: 30,
              padding: "6px 24px",
              marginBottom: 24,
              animation: "borderGlow 2s ease-in-out infinite",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
                fontSize: 14,
                letterSpacing: 4,
                color: "#D4AF37",
              }}
            >
              🔥 RECRUITMENT
            </span>
          </div>
        </Reveal>

        <Reveal direction="up" delay={0.15}>
          <h2
            style={{
              fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
              fontSize: "clamp(36px, 8vw, 64px)",
              letterSpacing: 4,
              color: "#fff",
              marginBottom: 20,
            }}
          >
            セレクション開催中
          </h2>
        </Reveal>

        <Reveal direction="up" delay={0.3}>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.7)", marginBottom: 8 }}>
            2026年度 新入部員募集
          </p>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", marginBottom: 40 }}>
            対象：中学3年生 ｜ 日程：2026年3月15日（日）・22日（日）
          </p>
        </Reveal>

        <Reveal direction="up" delay={0.45}>
          <button
            className="btn-primary"
            onClick={handleApply}
            style={{
              padding: "18px 48px",
              animation: "pulse 2s infinite",
            }}
          >
            今すぐ申し込む
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </Reveal>
      </div>
    </section>
  );
}
