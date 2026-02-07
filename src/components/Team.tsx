"use client";

import Reveal from "./ui/Reveal";
import { players, positionColors, type Position } from "@/data/players";

export default function Team() {
  return (
    <section
      id="team"
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
            <span>Players</span>
          </div>
          <h2 className="section-title">選手紹介</h2>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
            gap: 16,
          }}
        >
          {players.map((player, i) => (
            <Reveal key={player.number} direction="scale" delay={i * 0.06}>
              <PlayerCard
                number={player.number}
                name={player.name}
                position={player.position}
                grade={player.grade}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function PlayerCard({
  number,
  name,
  position,
  grade,
}: {
  number: number;
  name: string;
  position: Position;
  grade: string;
}) {
  const color = positionColors[position];

  return (
    <div
      className="card-base"
      style={{
        cursor: "pointer",
        transition: "all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)",
        overflow: "hidden",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.transform = "translateY(-8px)";
        el.style.borderColor = "rgba(212,175,55,0.3)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.transform = "translateY(0)";
        el.style.borderColor = "rgba(212,175,55,0.08)";
      }}
    >
      {/* Photo area */}
      <div
        style={{
          height: 140,
          background: `linear-gradient(135deg, rgba(${position === "GK" ? "212,175,55" : position === "DF" ? "107,45,139" : position === "MF" ? "45,139,90" : "139,45,45"},0.12), rgba(20,20,35,0.8))`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {/* Number */}
        <span
          style={{
            position: "absolute",
            top: 8,
            left: 10,
            fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
            fontSize: 28,
            color: "rgba(255,255,255,0.15)",
            transition: "all 0.3s",
          }}
        >
          {number}
        </span>

        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="rgba(255,255,255,0.15)"
          strokeWidth="1.5"
        >
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      </div>

      {/* Position color bar */}
      <div style={{ height: 3, background: color }} />

      {/* Info */}
      <div style={{ padding: "12px 14px" }}>
        <span
          style={{
            fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
            fontSize: 10,
            letterSpacing: 2,
            color: color,
            display: "block",
            marginBottom: 4,
          }}
        >
          {position}
        </span>
        <span
          style={{
            fontSize: 13,
            fontWeight: 700,
            color: "#f0f0f0",
            display: "block",
            marginBottom: 2,
          }}
        >
          {name}
        </span>
        <span style={{ fontSize: 11, color: "#666" }}>{grade}</span>
      </div>
    </div>
  );
}
