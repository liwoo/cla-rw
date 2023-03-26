/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        scrollRestoration: true,
    },
    images: {
        domains: ["res.cloudinary.com"],
    }
}

module.exports = nextConfig
