/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  swcMinify: true,
  env: {
    NEXT_PUBLIC_ENDPOINT_BASE: process.env.NEXT_PUBLIC_ENDPOINT_BASE,
  },
  async rewrites() {
    return [
      {
        source: '/api/v1/:path*',
        destination: 'http://backend-service:3500/v1/:path*', // Adjust the URL if needed
      },
    ];
  },
};

module.exports = nextConfig;