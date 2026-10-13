import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [{ source: "/cores", destination: "/agents", permanent: true }];
  },
};

export default nextConfig;
