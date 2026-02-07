"use client";

import Reveal from "./ui/Reveal";
import { newsItems } from "@/data/news";

export default function News() {
  return (
    <section
      id="news"
      className="noise-bg"
      style={{
        padding: "100px 24px",
        background: "#0d0d1a",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <Reveal direction="up">
          <div className="section-label">
            <span>Latest News</span>
          </div>
          <h2 className="section-title">最新ニュース</h2>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 28,
          }}
        >
          {newsItems.map((item, i) => (
            <Reveal key={i} direction="up" delay={i * 0.15}>
              <article
                className="card-base card-hover card-glow"
                style={{ cursor: "pointer" }}
              >
                {/* Thumbnail placeholder */}
                <div
                  style={{
                    height: 180,
                    background:
                      "linear-gradient(135deg, rgba(107,45,139,0.2), rgba(20,20,35,0.8))",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: "16px 16px 0 0",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      backgroundImage:
                        "repeating-conic-gradient(rgba(107,45,139,0.05) 0% 25%, transparent 0% 50%)",
                      backgroundSize: "40px 40px",
                      transform: "rotate(45deg) scale(1.5)",
                      pointerEvents: "none",
                    }}
                  />
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="rgba(212,175,55,0.3)"
                    strokeWidth="1.5"
                    style={{ position: "relative", zIndex: 1 }}
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                </div>

                {/* Content */}
                <div style={{ padding: 24 }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      marginBottom: 12,
                    }}
                  >
                    <span style={{ fontSize: 12, color: "#888" }}>{item.date}</span>
                    <span
                      style={{
                        fontSize: 10,
                        letterSpacing: 1,
                        color: "#D4AF37",
                        border: "1px solid rgba(212,175,55,0.3)",
                        borderRadius: 20,
                        padding: "3px 10px",
                      }}
                    >
                      {item.tag}
                    </span>
                  </div>
                  <h3
                    style={{
                      fontSize: 16,
                      fontWeight: 700,
                      lineHeight: 1.5,
                      color: "#f0f0f0",
                      marginBottom: 8,
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 13,
                      color: "#888",
                      lineHeight: 1.7,
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
