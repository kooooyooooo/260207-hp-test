export default function Marquee() {
  const items = [
    "⚽ PRIDE",
    "🔥 PASSION",
    "💪 POWER",
    "🏆 VICTORY",
    "⭐ GLORY",
    "👊 FIGHT",
    "🎯 FOCUS",
    "💎 DIAMOND",
  ];

  const track = items.map((item, i) => (
    <span
      key={i}
      style={{
        fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
        fontSize: 16,
        letterSpacing: 4,
        color: "rgba(212,175,55,0.7)",
        whiteSpace: "nowrap",
        paddingRight: 60,
      }}
    >
      {item}
    </span>
  ));

  return (
    <div
      style={{
        background: "linear-gradient(90deg, #6B2D8B, #4a1d63)",
        padding: "12px 0",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          animation: "marquee 20s linear infinite",
          width: "fit-content",
        }}
      >
        <div style={{ display: "flex" }}>{track}</div>
        <div style={{ display: "flex" }}>{track}</div>
      </div>
    </div>
  );
}
