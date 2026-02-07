"use client";

import Reveal from "./ui/Reveal";
import { matches, resultColors } from "@/data/matches";

export default function Results() {
  return (
    <section
      id="results"
      style={{
        padding: "100px 24px",
        background: "#0a0a14",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <Reveal direction="up">
          <div className="section-label">
            <span>Match Results</span>
          </div>
          <h2 className="section-title">試合結果</h2>
        </Reveal>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {matches.map((match, i) => {
            const colors = resultColors[match.result];
            return (
              <Reveal key={i} direction="up" delay={i * 0.1}>
                <div
                  className="card-base card-hover"
                  style={{
                    borderRadius: 12,
                    padding: "20px 28px",
                    borderLeft: `4px solid ${colors.border}`,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: 16,
                  }}
                >
                  {/* Left: Date + Tournament */}
                  <div style={{ display: "flex", alignItems: "center", gap: 12, minWidth: 200 }}>
                    <span
                      style={{
                        fontFamily: "monospace",
                        fontSize: 12,
                        color: "#888",
                        minWidth: 85,
                      }}
                    >
                      {match.date}
                    </span>
                    <span
                      style={{
                        fontSize: 11,
                        color: "#ccc",
                        background: "rgba(107,45,139,0.15)",
                        borderRadius: 6,
                        padding: "3px 10px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {match.tournament}
                    </span>
                  </div>

                  {/* Center: Score */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 16,
                      flex: "1 1 auto",
                      justifyContent: "center",
                      minWidth: 280,
                    }}
                  >
                    <span
                      style={{
                        fontSize: 14,
                        fontWeight: 600,
                        color: "#f0f0f0",
                        textAlign: "right",
                        minWidth: 90,
                      }}
                    >
                      SAMPLE FC
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
                        fontSize: 28,
                        color: colors.score,
                        letterSpacing: 2,
                        minWidth: 70,
                        textAlign: "center",
                      }}
                    >
                      {match.scoreHome} - {match.scoreAway}
                    </span>
                    <span
                      style={{
                        fontSize: 14,
                        fontWeight: 600,
                        color: "#f0f0f0",
                        textAlign: "left",
                        minWidth: 90,
                      }}
                    >
                      {match.opponent}
                    </span>
                  </div>

                  {/* Right: Venue */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      minWidth: 120,
                      justifyContent: "flex-end",
                    }}
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#666"
                      strokeWidth="2"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span style={{ fontSize: 12, color: "#666" }}>{match.venue}</span>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
