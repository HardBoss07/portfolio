import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    webpack(config) {
        config.module.rules.push({
            test: /\.txt$/,
            use: "raw-loader",
        });
        return config;
    },
    output: "export",
    basePath: "",
    assetPrefix: "",
};

export default nextConfig;
