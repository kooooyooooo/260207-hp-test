"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  duration?: number;
}

export default function AnimatedCounter({
  target,
  suffix = "",
  duration = 2000,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    const steps = Math.ceil(duration / 16);
    const increment = target / steps;
    let current = 0;
    let frame: number;

    const tick = () => {
      current += increment;
      if (current >= target) {
        setCount(target);
        return;
      }
      setCount(Math.floor(current));
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [started, target, duration]);

  return (
    <span
      ref={ref}
      style={{
        fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
        fontSize: "clamp(28px, 4vw, 36px)",
        color: "#fff",
      }}
    >
      {count}
      {suffix}
    </span>
  );
}
