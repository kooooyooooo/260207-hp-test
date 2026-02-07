"use client";

import type { CSSProperties } from "react";

interface GlitchTextProps {
  text: string;
  style?: CSSProperties;
  className?: string;
}

export default function GlitchText({ text, style, className }: GlitchTextProps) {
  return (
    <span className={className} style={{ position: "relative", display: "inline-block", ...style }}>
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "3px",
          left: "3px",
          color: "#D4AF37",
          opacity: 0.2,
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        {text}
      </span>
      <span style={{ position: "relative", zIndex: 1 }}>{text}</span>
    </span>
  );
}
