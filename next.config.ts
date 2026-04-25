import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable Next.js image optimization (we can keep this enabled or disabled, but unoptimized: true is safer if you don't want to configure Vercel image limits)
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
