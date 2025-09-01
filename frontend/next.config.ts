/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '/Laxmi-Shree-Investment-Website',
  assetPrefix: '/Laxmi-Shree-Investment-Website',
  eslint: { ignoreDuringBuilds: true }, // optional
};

module.exports = nextConfig;