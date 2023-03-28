/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        scrollRestoration: true,
    },
    images: {
        domains: ["res.cloudinary.com", "images.unsplash.com"],
    }
}

module.exports = nextConfig
