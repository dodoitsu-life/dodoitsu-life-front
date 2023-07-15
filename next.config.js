/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    mdxRs: true,
  },
  reactStrictMode: true,
};

const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);
