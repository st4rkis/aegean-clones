import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,

  experimental: {
    serverActions: {
      bodySizeLimit: "2mb",
    },
  },

  // REQUIRED so multi-domain works in dev
  allowedDevOrigins: [
    "http://jmk.local:3000",
    "http://pas.local:3000",
    "http://jnx.local:3000",
    "http://zth.local:3000",
    "http://bjv.local:3000",
    "http://kgs.local:3000",
    "http://cfu.local:3000",
    "http://efl.local:3000",
    "http://mlo.local:3000",
    "http://ath.local:3000",
    "http://rho.local:3000",
    "http://her.local:3000",
    "http://jtr.local:3000",
    "http://skg.local:3000",
  ],
};

export default nextConfig;
