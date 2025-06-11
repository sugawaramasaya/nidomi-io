import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            // SVGRのオプション（必要に応じて）
            icon: true,
          },
        },
      ],
    });
    return config;
  },
};

export default nextConfig;
