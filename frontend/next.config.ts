/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',              
  images: { unoptimized: true }, 
  basePath: process.env.NODE_ENV === 'production' ? '/Laxmi-Shree-Investment-Website' : '',
};

module.exports = nextConfig;
