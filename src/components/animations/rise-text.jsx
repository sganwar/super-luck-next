import { cn } from "@/lib/utils";

/**
 * Splits a string into words that rise into place, staggered.
 *
 * Each word runs its own CSS keyframe (see `.word-rise` in globals.css), so
 * the headline animates on the first paint — no JavaScript, no observer and
 * no chance of the text being stuck invisible.
 */
export default function RiseText({ text, className, step = 70, delay = 0 }) {
  const words = text.split(" ");

  return (
    <span className={cn("inline", className)}>
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          className="word-rise"
          style={{ "--word-delay": `${delay + index * step}ms` }}
        >
          {word}
          {index < words.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </span>
  );
}
