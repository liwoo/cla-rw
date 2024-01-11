'use client'

import Image from 'next/image'
interface ImageProps {
  alt?: string
  src: string
}

export default function BackgroundImage({ alt='coming soon', src }: ImageProps) {
  return (
    <Image
      fill
      quality={50}
      placeholder={'blur'}
      blurDataURL={
        'https://res.cloudinary.com/tiyeni/image/upload/c_scale,h_678,q_auto:low/v1679808591/2X0A4983.jpg'
      }
      src={src}
      alt={alt}
      className="absolute inset-0 -z-10 h-full w-full object-cover object-top"
    />
  )
}
