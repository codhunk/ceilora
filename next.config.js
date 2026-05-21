/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Ignore ESLint errors during production builds for faster, robust compile
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      {
        source: '/aboutus',
        destination: '/about-us',
        permanent: true,
      },
      {
        source: '/contactus',
        destination: '/contact-us',
        permanent: true,
      },
      {
        source: '/clientgallery',
        destination: '/client-gallery',
        permanent: true,
      },
      {
        source: '/clientgalrey',
        destination: '/client-gallery',
        permanent: true,
      },
      {
        source: '/client-galrey',
        destination: '/client-gallery',
        permanent: true,
      },
      {
        source: '/clientgallery/:projectId',
        destination: '/client-gallery/:projectId',
        permanent: true,
      },
      {
        source: '/clientgalrey/:projectId',
        destination: '/client-gallery/:projectId',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
