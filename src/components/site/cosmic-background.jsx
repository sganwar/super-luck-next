/**
 * Fixed backdrop: soft sky wash, nebula orbs, twinkling star dust and a
 * horizon glow. Every color comes from src/theme.css (--sky-*, --orb-*,
 * --star-dust), so this layer re-themes itself with the rest of the site.
 * Pure CSS — no JS, no layout cost, safe on mobile.
 */

const starLayer = (size, opacity) => ({
  backgroundImage:
    "radial-gradient(circle, var(--star-dust) 0.9px, transparent 1.2px)",
  backgroundSize: `${size}px ${size}px`,
  opacity,
});

export default function CosmicBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, var(--sky-top) 0%, var(--sky-mid) 38%, var(--sky-bottom) 100%)",
      }}
    >
      {/* nebula orbs */}
      <div
        className="absolute -top-40 left-1/2 h-[46rem] w-[46rem] -translate-x-1/2 rounded-full blur-2xl animate-drift"
        style={{ background: "radial-gradient(circle, var(--orb-gold), transparent 62%)" }}
      />
      <div
        className="absolute -left-32 top-1/4 h-[34rem] w-[34rem] rounded-full blur-3xl animate-float-slow"
        style={{ background: "radial-gradient(circle, var(--orb-pray), transparent 65%)" }}
      />
      <div
        className="absolute -right-40 top-1/2 h-[38rem] w-[38rem] rounded-full blur-3xl animate-drift"
        style={{ background: "radial-gradient(circle, var(--orb-manifest), transparent 65%)" }}
      />
      <div
        className="absolute bottom-[-14rem] left-1/4 h-[32rem] w-[32rem] rounded-full blur-3xl animate-float-slow"
        style={{ background: "radial-gradient(circle, var(--orb-protect), transparent 66%)" }}
      />

      {/* star fields */}
      <div
        className="absolute inset-0 animate-twinkle"
        style={starLayer(120, 0.5)}
      />
      <div
        className="absolute inset-0 animate-twinkle [animation-delay:1.6s]"
        style={{
          ...starLayer(210, 0.42),
          backgroundPosition: "40px 70px",
        }}
      />
      <div
        className="absolute inset-0 animate-twinkle [animation-delay:3.2s]"
        style={{
          ...starLayer(320, 0.3),
          backgroundPosition: "130px 30px",
        }}
      />

      {/* horizon glow + soft edge vignette */}
      <div
        className="absolute inset-x-0 bottom-0 h-72"
        style={{
          background: "linear-gradient(180deg, transparent, var(--horizon-glow))",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(130% 100% at 50% 0%, transparent 55%, var(--sky-edge) 100%)",
        }}
      />
    </div>
  );
}
