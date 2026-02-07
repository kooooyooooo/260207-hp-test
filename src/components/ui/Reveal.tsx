"use client";

import React, { useEffect, useRef, useState, type CSSProperties } from "react";

type Direction = "up" | "down" | "left" | "right" | "scale";

interface RevealProps {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
  style?: CSSProperties;
}

const initialTransforms: Record<Direction, string> = {
  up: "translateY(60px)",
  down: "translateY(-60px)",
  left: "translateX(60px)",
  right: "translateX(-60px)",
  scale: "scale(0.85)",
};

export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  className = "",
  style,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translate(0) scale(1)" : initialTransforms[direction],
        transition: `all 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
