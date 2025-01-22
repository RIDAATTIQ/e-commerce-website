
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['cdn.sanity.io'], // Sanity ke image domain ko allow karna
  },
};

export default nextConfig;
