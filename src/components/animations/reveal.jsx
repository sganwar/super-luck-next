"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

/**
 * Scroll-reveal wrapper that fails **visible**.
 *
 * The markup is painted fully visible. Content is only hidden when this
 * component can prove it is able to bring it back: the element is below the
 * fold *and* a live IntersectionObserver has been attached. If JavaScript
 * never runs, the observer is missing, or it stays silent (a watchdog covers
 * that), the element is simply never hidden.
 *
 * The state lives on the DOM node as `data-reveal` — `pending` while it waits,
 * `true` once it is on screen — so nothing re-renders while scrolling.
 */
export default function Reveal({
  as: Tag = "div",
  anim = "up",
  delay = 0,
  once = true,
  threshold = 0,
  className,
  style,
  children,
  ...rest
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    // Reduced motion: never hide anything, the CSS disables the transition too.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const viewport = window.innerHeight || document.documentElement.clientHeight;
    const box = el.getBoundingClientRect();

    // Already on screen — show it immediately, no flash and no waiting.
    if (box.top < viewport * 0.96 && box.bottom > 0) {
      el.dataset.reveal = "true";
      return;
    }

    let reported = false;

    const observer = new IntersectionObserver(
      (entries) => {
        reported = true;
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.dataset.reveal = "true";
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            el.dataset.reveal = "pending";
          }
        }
      },
      { threshold, rootMargin: "0px 0px -6% 0px" },
    );

    el.dataset.reveal = "pending";
    observer.observe(el);

    // An observer always reports the initial state of everything it watches,
    // so silence here means it is not working on this device. Reveal rather
    // than leave the text invisible.
    const watchdog = window.setTimeout(() => {
      if (!reported) el.dataset.reveal = "true";
    }, 1500);

    return () => {
      window.clearTimeout(watchdog);
      observer.disconnect();
    };
  }, [once, threshold]);

  return (
    <Tag
      ref={ref}
      data-anim={anim}
      className={cn("reveal", className)}
      style={{ "--reveal-delay": `${delay}ms`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
