"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 900);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={cn(
        "cursor-pointer fixed right-4 bottom-4 z-40 grid size-11 place-items-center rounded-full border border-gold/45 bg-background/85 text-gold shadow-lg backdrop-blur-md transition-all duration-500 hover:border-gold hover:bg-gold hover:text-background sm:right-6 sm:bottom-6",
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0",
      )}
    >
      <ArrowUp className="size-5" />
    </button>
  );
}
