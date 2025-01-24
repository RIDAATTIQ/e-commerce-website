import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: '/studio', destination: '/studio/index.html' },
    ];
  },
};

export default nextConfig;
