import siteConfig from "@/data/site";

// Required for metadata routes when `output: "export"` is enabled.
export const dynamic = "force-static";

const BASE_URL = siteConfig.url.replace(/\/$/, "");

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
