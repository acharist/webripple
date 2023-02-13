// eslint-disable-next-line @typescript-eslint/no-var-requires
const publicRuntimeConfig = require('./publicRuntimeConfig')
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  publicRuntimeConfig,
}

module.exports = nextConfig
