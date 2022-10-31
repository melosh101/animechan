/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: process.env.API_SERVER_1,
      },
    ];
  },
};

export default nextConfig;
