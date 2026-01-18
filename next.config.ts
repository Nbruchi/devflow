import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  experimental: {
    turbopackFileSystemCacheForDev: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "c.pxhere.com",
      },
      {
        protocol: "https",
        hostname: "www.goodfreephotos.com",
      },
      {
        protocol: "https",
        hostname: "p2.piqsels.com",
      },
      {
        protocol: "https",
        hostname: "p0.piqsels.com",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
  serverExternalPackages: ["pino", "pino-pretty"],
};

export default nextConfig;
