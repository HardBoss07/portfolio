import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // In Next.js 16, turbopack is a top-level property
  turbopack: {
    rules: {
      "*.txt": {
        loaders: ["raw-loader"],
        as: "*.js",
      },
    },
  },

  // Static Export Settings
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  
  // Explicitly ensuring no base path interference
  basePath: "",
  assetPrefix: "",
};

export default nextConfig;
