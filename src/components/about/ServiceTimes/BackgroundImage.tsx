import ClientImage from '@/components/ClientImage'
import Image from 'next/image'
interface ImageProps {
  alt?: string
  src: string
}

export default function BackgroundImage({ alt='coming soon', src }: ImageProps) {
  return (
    <ClientImage
      fill
      src={src}
      alt={alt}
    />
  )
}
