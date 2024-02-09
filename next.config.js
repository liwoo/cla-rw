/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
  images: {
    domains: ['res.cloudinary.com', 'images.unsplash.com', 'cdn.sanity.io'],
  },
  publicRuntimeConfig: {
    footerChurchDescription: `Christian Life Assembly is a multi-national, 
      multi-cultural Church that believes in the changing power of the Word of God 
      and that seeks to see transformation of our communities through the love of Jesus Christ.`,
    footerChurchAddress: '2 KG 270 St, Kigali',
    footerChurchEmail: 'info@clarwanda.com',
    footerChurchNumber: '0788 302 013',
    footerChurchYoutube:
      'https://www.youtube.com/channel/UClwCYTUDAa2PCLPxQ46BfkA',
    footerChurchInstagram: 'https://www.instagram.com/clarwanda/?hl=en',
    footerChurchFacebook: 'https://www.facebook.com/clarwanda/',
    footerChurchTwitter: 'https://twitter.com/clarwanda',
  },
}

module.exports = nextConfig
