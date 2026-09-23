import { LanternIcon } from "@/components/icons";

/** Branded suspense fallback shown while a route segment loads. */
export default function Loading() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="grid min-h-[70vh] place-items-center px-4"
    >
      <div className="flex flex-col items-center gap-5 text-center">
        <span className="relative grid size-20 place-items-center">
          <span className="absolute inset-0 animate-pulse-ring rounded-full border border-gold/40" />
          <span className="absolute inset-0 animate-pulse-ring rounded-full border border-gold/30 [animation-delay:1.2s]" />
          <LanternIcon className="size-10 animate-float text-gold" />
        </span>
        <p className="text-script text-2xl">Lighting the lantern…</p>
        <span className="sr-only">Loading</span>
      </div>
    </div>
  );
}
