"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Edge-to-edge horizontal scroller with snap points and arrow controls.
 * Used on small screens so wide grids become a smooth single-row carousel.
 */
export default function SnapRow({ children, className }) {
  const trackRef = useRef(null);

  const scrollByPage = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({
      left: direction * track.clientWidth * 0.85,
      behavior: "smooth",
    });
  };

  return (
    <div className={className}>
      <div
        ref={trackRef}
        className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 sm:-mx-6 sm:px-6"
      >
        {children}
      </div>

      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => scrollByPage(-1)}
          aria-label="Scroll left"
          className="grid size-11 place-items-center rounded-full border border-foreground/15 bg-card/70 text-parchment transition-colors active:border-gold/50 active:text-gold"
        >
          <ChevronLeft className="size-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => scrollByPage(1)}
          aria-label="Scroll right"
          className="grid size-11 place-items-center rounded-full border border-foreground/15 bg-card/70 text-parchment transition-colors active:border-gold/50 active:text-gold"
        >
          <ChevronRight className="size-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
