import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      "*.txt": {
        loaders: ["raw-loader"],
        as: "*.js",
      },
    },
  },

  // DELETE OR COMMENT OUT THE FOLLOWING:
  // output: "export",        <-- Remove to enable SSR, API routes, and Middleware
  // trailingSlash: true,     <-- Optional, Vercel handles this automatically
  // images: {                <-- Remove 'unoptimized' to let Vercel resize images for you
  //   unoptimized: true,
  // },

  // These are default, so you can safely remove them to keep it clean:
  // basePath: "",
  // assetPrefix: "",
};

export default nextConfig;
