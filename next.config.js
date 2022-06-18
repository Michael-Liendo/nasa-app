/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['apod.nasa.gov', 'mars.nasa.gov'],
  },
};

module.exports = nextConfig;
