/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  httpAgentOptions: {
    keepAlive: false,
  },
  images: {
    domains: ["dev-to-uploads.s3.amazonaws.com"],
  },
};

module.exports = nextConfig;
