/** @type {import('next').NextConfig} */
const nextConfig = {
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
};

export default nextConfig;
