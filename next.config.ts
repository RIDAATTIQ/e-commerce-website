import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
  async rewrites() {
    return [
      { source: '/studio', destination: '/studio/index.html' },
    ];
  },
};

export default nextConfig;
