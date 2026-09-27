import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  redirects() {
    return [{ source: "/my-wallpapers", destination: "/mis-fondos", permanent: true }];
  },
};

export default nextConfig;
