/** @type {import('next').NextConfig} */const nextConfig = {
  reactCompiler: true,

  // Static HTML export — deploy the generated `out/` folder anywhere.
  output: "export",

  // The default loader needs a server, so serve images as-is.
  images: {
    unoptimized: true,
  },

  // Emit `/download/index.html`. Every static host then serves
  // `/download/` without rewrite rules, which keeps canonical URLs stable.
  trailingSlash: true,
};

export default nextConfig;
