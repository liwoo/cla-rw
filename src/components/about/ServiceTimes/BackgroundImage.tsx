import ClientImage from '@/components/ClientImage'
interface ImageProps {
  alt?: string
  src: string
}

export default function BackgroundImage({
  alt = 'coming soon',
  src,
}: ImageProps) {
  return (
    <ClientImage
      fill
      src={src}
      alt={alt}
      className="absolute inset-0 h-full w-full object-cover object-top"
    />
  )
}
