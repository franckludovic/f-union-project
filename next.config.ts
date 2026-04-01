import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repoName = "/f-union-project";

const nextConfig: NextConfig = {
  // This is the critical line
  output: "export",

  // GitHub Pages requires these so assets load correctly in production
  basePath: isProd ? repoName : "",
  assetPrefix: isProd ? `${repoName}/` : "",

  // Disable Next.js image optimization (not supported on GitHub Pages)
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
