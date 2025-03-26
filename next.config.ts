// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
        pathname: '/s/files/**',
      },
      {
        protocol: 'https',
        hostname: '3bc01d2807fb1bc0d25c-a86d2521f1af8989841b9619f5314be5.ssl.cf1.rackcdn.com',
        pathname: '/products/market-img/**',
      },
      {
        protocol: 'https',
        hostname: 'www.nyxcosmetics.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.purpicks.com',
        pathname: '/**',
      }
    ],
  },
}

module.exports = nextConfig