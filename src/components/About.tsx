"use client";

import Reveal from "./ui/Reveal";

const facilities = [
  {
    name: "天然芝グラウンド",
    detail: "照明設備完備",
  },
  {
    name: "クラブハウス",
    detail: "ミーティングルーム・更衣室",
  },
  {
    name: "トレーニングルーム",
    detail: "ウェイト機器完備",
  },
];

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: "100px 24px",
        background: "#0a0a14",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <Reveal direction="up">
          <div className="section-label">
            <span>About Club</span>
          </div>
          <h2 className="section-title">クラブ紹介</h2>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 48,
          }}
        >
          {/* Director's Message */}
          <Reveal direction="left">
            <div
              style={{
                background:
                  "linear-gradient(145deg, rgba(107,45,139,0.12), rgba(10,10,20,0.8))",
                borderRadius: 20,
                padding: 40,
                border: "1px solid rgba(107,45,139,0.2)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Background decoration */}
              <span
                style={{
                  position: "absolute",
                  top: -20,
                  right: -10,
                  fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
                  fontSize: 120,
                  color: "rgba(107,45,139,0.08)",
                  lineHeight: 1,
                  pointerEvents: "none",
                }}
              >
                監督
              </span>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  marginBottom: 24,
                }}
              >
                {/* Director photo placeholder */}
                <div
                  style={{
                    width: 100,
                    height: 100,
                    borderRadius: "50%",
                    border: "2px solid rgba(212,175,55,0.3)",
                    background:
                      "linear-gradient(135deg, rgba(107,45,139,0.15), rgba(20,20,35,0.8))",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="rgba(212,175,55,0.3)"
                    strokeWidth="1.5"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: 22,
                      fontWeight: 700,
                      color: "#D4AF37",
                      marginBottom: 4,
                    }}
                  >
                    監督挨拶
                  </h3>
                  <p style={{ fontSize: 13, color: "#888" }}>監督 サンプル 太郎</p>
                </div>
              </div>

              <p
                style={{
                  fontSize: 14,
                  color: "#ccc",
                  lineHeight: 2.0,
                  position: "relative",
                  zIndex: 1,
                }}
              >
                当サッカー部は、技術の向上だけでなく、人間性の成長を大切にしています。仲間との絆、勝利への執念、そして感謝の心。これらを日々の練習を通じて育んでいます。私たちと一緒に、最高の高校生活を送りましょう。
              </p>
            </div>
          </Reveal>

          {/* Facilities */}
          <Reveal direction="right">
            <div>
              <h3
                style={{
                  fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
                  fontSize: 28,
                  letterSpacing: 3,
                  color: "#D4AF37",
                  marginBottom: 24,
                }}
              >
                FACILITIES
              </h3>

              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {facilities.map((f, i) => (
                  <div
                    key={i}
                    className="card-base"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 16,
                      padding: 16,
                    }}
                  >
                    {/* Thumbnail placeholder */}
                    <div
                      style={{
                        width: 80,
                        height: 80,
                        borderRadius: 12,
                        border: "1px dashed rgba(212,175,55,0.2)",
                        background:
                          "linear-gradient(135deg, rgba(107,45,139,0.08), rgba(20,20,35,0.5))",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="rgba(212,175,55,0.3)"
                        strokeWidth="1.5"
                      >
                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                      </svg>
                    </div>
                    <div>
                      <h4
                        style={{
                          fontSize: 15,
                          fontWeight: 700,
                          color: "#f0f0f0",
                          marginBottom: 4,
                        }}
                      >
                        {f.name}
                      </h4>
                      <p style={{ fontSize: 12, color: "#888" }}>{f.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
