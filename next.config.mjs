/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  outputFileTracing: false, // Disables trace scanning for 20-30 second ultra-fast Vercel builds!
  swcMinify: true,
  experimental: {
    optimizeCss: true,
  },
  async redirects() {
    return [
      {
        source: '/services/door-to-door-auto-transport',
        destination: '/services/door-to-door-transport',
        permanent: true,
      },
      {
        source: '/car-shipping/:state',
        destination: '/locations/:state',
        permanent: true,
      },
    ];
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'core-js': false,
    };
    return config;
  },
};

export default nextConfig;
