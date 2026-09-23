import siteConfig from "@/data/site";

// Required for metadata routes when `output: "export"` is enabled.
export const dynamic = "force-static";

export default function manifest() {
  return {
    name: `${siteConfig.name} — Wish, Pray & Manifest`,
    short_name: siteConfig.name,
    description: siteConfig.shortDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#faf7f0",
    theme_color: "#faf7f0",
    categories: ["lifestyle", "social"],
    lang: "en",
    icons: [
      {
        src: "/icon.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
