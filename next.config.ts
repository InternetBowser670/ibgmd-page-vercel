import type { NextConfig } from "next";
const path = require('path');

const nextConfig: NextConfig = {
  async headers() {
    return [
    ];
  },

  images: {
    domains: ['www.internetbowser.com'],
  },

  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname);
    return config;
  },

  async rewrites() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'convoes.example.com', // Your subdomain
          },
        ],
        destination: '/convoes/:path*', // Route all subdomain traffic here
      },
    ];
  },

  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    }
  }
};

export default nextConfig;
