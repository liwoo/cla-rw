'use client'
import Image from 'next/image'

interface HeroProps {
    alt: string
    src: string
  }
const Hero = ({src,alt}:HeroProps) => {
  return (
    <div className="relative isolate overflow-hidden bg-gray-600 py-16 sm:py-32 lg:py-16 min-h-[500px]">
        <Image
      fill
      quality={50}
      placeholder={'blur'}
      blurDataURL={
        'https://res.cloudinary.com/tiyeni/image/upload/c_scale,h_678,q_auto:low/v1679808591/2X0A4983.jpg'
      }
      src={src}
      alt={alt}
      className="absolute inset-0 -z-10 h-full w-full object-cover object-bottom"
    />
    </div>
  )
}

export default Hero