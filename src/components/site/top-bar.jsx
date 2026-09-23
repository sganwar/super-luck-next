import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AppleIcon, GooglePlayIcon } from "@/components/icons";

/** Thin announcement strip: the app just launched on both stores. */
export default function TopBar() {
  return (
    <div className="topbar-strip relative z-40 border-b border-border">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-x-3 gap-y-1 px-4 py-2 text-center text-[0.72rem] sm:px-6 sm:text-xs">
        <span className="hidden items-center gap-1.5 text-parchment/80 sm:inline-flex">
          <GooglePlayIcon className="size-3.5 text-gold" />
          <AppleIcon className="size-3.5 text-gold" />
        </span>
        <span className="text-parchment/90">
          Release your first lantern today.
        </span>
        <Link
          href="/download"
          className="group inline-flex shrink-0 items-center gap-1 font-semibold text-gold transition-colors hover:text-gold-bright"
        >
          Get the app
          <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </div>
  );
}
