import type { NextConfig } from "next";
const path = require('path');

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname, 'app');
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
