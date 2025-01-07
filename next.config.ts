/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  // This tells Next.js to look for the 'app' directory inside 'src'
  basePath: "",
  reactStrictMode: true,
};

module.exports = nextConfig;
