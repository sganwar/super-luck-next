"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/** Counts from 0 to `value` the first time it scrolls into view. */
export default function Counter({
  value = 0,
  duration = 1600,
  suffix = "",
  prefix = "",
  className,
}) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting || started.current) continue;

          observer.unobserve(entry.target);
          started.current = true;

          // Users who prefer reduced motion see the final figure immediately.
          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            setDisplay(value);
            continue;
          }

          const start = performance.now();
          const tick = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            // easeOutExpo
            const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            setDisplay(Math.round(eased * value));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
