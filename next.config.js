/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    mdxRs: true,
  },
  images: {
    domains: ["pbs.twimg.com"],
  },
  reactStrictMode: true,
};

const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);
