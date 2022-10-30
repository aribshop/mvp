/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images:{
    domains: ['laknabil.me']
  }
};

module.exports = nextConfig;
