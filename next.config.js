/** @type {import('next').NextConfig} */
   const nextConfig = {
     reactStrictMode: true,
     images: {
       domains: ['localhost'],
       formats: ['image/webp', 'image/avif'],
     },
     // No experimental section
   }
   
   module.exports = nextConfig