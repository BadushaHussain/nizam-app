/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
    formats: ['image/webp', 'image/avif'],
  },
  // Removed experimental optimizeCss to fix Vercel deployment
}

module.exports = nextConfig
