/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    //accept all domains
    domains: ["*"],
  },
};

module.exports = nextConfig;
