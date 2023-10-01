/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  swcMinify: true,
  reactStrictMode: true,
  compress: true,
  images: {
    domains: ['avatars.githubusercontent.com', "images-eu.ssl-images-amazon.com"],
  },
  webpack: (config) => {
    config.experiments = {
      topLevelAwait: true,
      layers: true,
    };
    return config;
  }
}


module.exports = nextConfig
