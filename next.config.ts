import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
