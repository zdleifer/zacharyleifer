import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Produce a fully static site in ./out — served by Cloudflare static assets.
  output: "export",
  // No image optimization server in a static export; we use plain <img> tags.
  images: {
    unoptimized: true,
  },
  // Emit each route as a folder with index.html for clean static hosting.
  trailingSlash: true,
};

export default nextConfig;
