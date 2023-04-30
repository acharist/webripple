// eslint-disable-next-line @typescript-eslint/no-var-requires
const publicRuntimeConfig = require('./publicRuntimeConfig')
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  publicRuntimeConfig,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '5001',
      },
    ],
  },
}

module.exports = nextConfig
