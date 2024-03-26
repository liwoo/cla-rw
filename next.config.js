/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
  images: {
    domains: ["res.cloudinary.com", "images.unsplash.com", "cdn.sanity.io"],
  },
  publicRuntimeConfig: {},
};

module.exports = nextConfig;
