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
      // Old URLs reported as 404 in Search Console (Nov 2026).
      { source: '/tools', destination: '/tools/car-shipping-cost-calculator', permanent: true },
      { source: '/resources/car-shipping-cost-calculator', destination: '/tools/car-shipping-cost-calculator', permanent: true },
      { source: '/resources/car-shipping-cost-guide', destination: '/resources/car-shipping-rates-by-state', permanent: true },
      { source: '/ship-a-car/sedan', destination: '/services/open-auto-transport', permanent: true },
      { source: '/ship-a-car/suv', destination: '/ship-a-car/suv-and-truck', permanent: true },
      { source: '/ship-a-car/truck', destination: '/ship-a-car/suv-and-truck', permanent: true },
      { source: '/ship-a-car/non-running-vehicle', destination: '/ship-a-car/non-running', permanent: true },
      { source: '/es/ubicaciones', destination: '/es/transporte-de-autos-estados-unidos', permanent: true },
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
