import type { NextConfig } from "next";
const path = require('path');

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/api/:path*", // Match all API routes
        headers: [
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET, POST, OPTIONS" },
          { key: "Access-Control-Allow-Headers", value: "Content-Type, Authorization" },
        ],
      },
    ];
  },
  images: {
    domains: ['www.internetbowser.com'],
  },
  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
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

};

export default nextConfig;
