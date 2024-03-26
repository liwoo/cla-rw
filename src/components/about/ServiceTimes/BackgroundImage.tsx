import ClientImage from "@/components/ClientImage";
interface ImageProps {
  alt?: string;
  src: string;
}

export default function BackgroundImage({
  alt = "coming soon",
  src,
}: ImageProps) {
  return <ClientImage className="zoom-animation" fill src={src} alt={alt} />;
}
