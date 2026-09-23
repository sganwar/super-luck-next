"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/** Distance from the top of the viewport that counts as "currently reading". */
const READING_LINE = 148;

/**
 * Sticky table of contents with scroll-spy highlighting.
 *
 * Publishing order decides the answer: the active section is the last one
 * whose heading has passed the reading line. Unlike an IntersectionObserver
 * band this is exact for short sections, long sections and anchor jumps.
 */
export default function Toc({ sections, className }) {
  const [active, setActive] = useState(sections[0]?.id ?? "");
  const navRef = useRef(null);

  useEffect(() => {
    let frame = 0;

    const measure = () => {
      frame = 0;
      const line = window.scrollY + READING_LINE;
      let current = sections[0]?.id ?? "";

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (!element) continue;

        const top = element.getBoundingClientRect().top + window.scrollY;
        if (top <= line) current = section.id;
        else break;
      }

      // At the very bottom of the page the last section wins, even if its
      // heading never reaches the reading line.
      const doc = document.documentElement;
      if (window.innerHeight + window.scrollY >= doc.scrollHeight - 8) {
        current = sections[sections.length - 1]?.id ?? current;
      }

      setActive(current);
    };

    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    window.addEventListener("hashchange", schedule);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      window.removeEventListener("hashchange", schedule);
    };
  }, [sections]);

  /* Keep the highlighted entry visible: the list is longer than the sidebar,
     so it has to scroll itself without ever moving the page. */
  useEffect(() => {
    const nav = navRef.current;
    const scroller = nav?.closest("[data-toc-scroller]");
    const link = nav?.querySelector(`[data-toc="${active}"]`);
    if (!nav || !scroller || !link || scroller.scrollHeight <= scroller.clientHeight) {
      return;
    }

    const linkBox = link.getBoundingClientRect();
    const scrollerBox = scroller.getBoundingClientRect();
    const margin = 12;

    if (linkBox.top < scrollerBox.top + margin) {
      scroller.scrollTop += linkBox.top - scrollerBox.top - margin;
    } else if (linkBox.bottom > scrollerBox.bottom - margin) {
      scroller.scrollTop += linkBox.bottom - scrollerBox.bottom + margin;
    }
  }, [active]);

  return (
    <nav ref={navRef} aria-label="On this page" className={cn("text-sm", className)}>
      <p className="eyebrow mb-4">On this page</p>
      <ol className="flex flex-col gap-0.5 border-l border-border">
        {sections.map((section, index) => {
          const isActive = active === section.id;
          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                data-toc={section.id}
                onClick={() => setActive(section.id)}
                aria-current={isActive ? "location" : undefined}
                className={cn(
                  "-ml-px flex items-start gap-2 border-l py-1.5 pl-4 transition-colors duration-300",
                  isActive
                    ? "border-gold text-gold"
                    : "border-transparent text-muted-foreground hover:border-foreground/30 hover:text-foreground",
                )}
              >
                <span className="mt-px font-mono text-[0.65rem] opacity-60">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="leading-snug">{section.title}</span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
