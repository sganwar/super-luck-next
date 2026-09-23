import { cn } from "@/lib/utils";

/**
 * Infinite horizontal marquee.
 *
 * The track holds two identical copies of the content and slides -50%, which
 * loops seamlessly — but only when one copy is at least as wide as the
 * viewport. Short lists (the wall of wishes) are therefore repeated inside
 * each copy so the loop holds on a wide desktop screen too.
 *
 * `duration` is the time for one full cycle at the base width; it is scaled
 * by `repeat` so the travel speed stays constant however many times we repeat.
 */
export default function Marquee({
  children,
  duration = 44,
  repeat = 3,
  reverse = false,
  className,
  itemClassName,
}) {
  const items = Array.from({ length: Math.max(1, repeat) });

  return (
    <div
      className={cn("marquee select-none", className)}
      data-direction={reverse ? "reverse" : "forward"}
    >
      <div
        className="marquee-track"
        style={{ "--marquee-duration": `${duration * items.length}s` }}
      >
        {[0, 1].map((copy) => (
          <div
            key={copy}
            className={cn("flex shrink-0 items-center", itemClassName)}
            aria-hidden={copy === 1 ? "true" : undefined}
          >
            {items.map((_, index) => (
              <div key={index} className="flex shrink-0 items-center">
                {children}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
