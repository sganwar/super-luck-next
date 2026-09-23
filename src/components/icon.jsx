import {
  BellRing,
  Flame,
  HandHeart,
  Heart,
  HeartHandshake,
  ImagePlus,
  LockKeyhole,
  PencilLine,
  Send,
  Share2,
  ShieldCheck,
  Smartphone,
  Sparkle,
  Sparkles,
  Globe,
  Users,
  WandSparkles,
} from "lucide-react";

/** Icon keys used across the content files. */
const icons = {
  BellRing,
  Flame,
  Globe,
  HandHeart,
  Heart,
  HeartHandshake,
  ImagePlus,
  LockKeyhole,
  PencilLine,
  Send,
  Share2,
  ShieldCheck,
  Smartphone,
  Sparkle,
  Sparkles,
  Users,
  WandSparkles,
};

/** Renders a Lucide icon by its data-file key. */
export default function Icon({ name, className = "size-5" }) {
  const Component = icons[name] ?? Sparkles;
  return <Component className={className} aria-hidden="true" />;
}
