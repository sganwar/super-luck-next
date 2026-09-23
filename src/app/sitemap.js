import siteConfig from "@/data/site";

// Required for metadata routes when `output: "export"` is enabled.
export const dynamic = "force-static";

const BASE_URL = siteConfig.url.replace(/\/$/, "");

const routes = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/download/", changeFrequency: "monthly", priority: 0.9 },
  { path: "/contact/", changeFrequency: "yearly", priority: 0.7 },
  { path: "/terms-and-conditions/", changeFrequency: "yearly", priority: 0.5 },
  { path: "/privacy-policy/", changeFrequency: "yearly", priority: 0.5 },
];

export default function sitemap() {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
