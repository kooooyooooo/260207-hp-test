"use client";

import Reveal from "./ui/Reveal";

export default function Sponsors() {
  return (
    <section
      id="sponsors"
      className="noise-bg"
      style={{
        padding: "80px 24px",
        background: "#0d0d1a",
        textAlign: "center",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <Reveal direction="up">
          <div className="section-label" style={{ justifyContent: "center" }}>
            <span>Partners</span>
          </div>
          <h2 className="section-title">スポンサー</h2>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: 20,
            maxWidth: 700,
            margin: "0 auto",
          }}
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <Reveal key={i} direction="scale" delay={i * 0.08}>
              <div
                className="card-hover card-glow"
                style={{
                  height: 100,
                  borderRadius: 12,
                  border: "1px dashed rgba(212,175,55,0.15)",
                  background: "rgba(20,20,35,0.6)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <span
                  style={{
                    fontSize: 11,
                    color: "#555",
                    letterSpacing: 2,
                    fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
                  }}
                >
                  LOGO {i + 1}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
