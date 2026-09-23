import type { NextConfig } from "next";

const repo =
  process.env.GITHUB_REPOSITORY?.split("/")[1] ??
  "simple-landing-page-20260923";
const basePath = `/${repo}`;

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: `${basePath}/`,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
