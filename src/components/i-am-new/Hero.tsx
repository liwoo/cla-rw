import ClientImage from "@/components/ClientImage";

interface HeroProps {
  alt: string;
  src: string;
}
const Hero = ({ src, alt }: HeroProps) => {
  return (
    <div className="relative isolate min-h-[300px] overflow-hidden bg-gray-600 py-16 sm:py-32 md:min-h-[550px] lg:py-16">
      <ClientImage
        fill
        src={src}
        alt={alt}
        className="zoom-animation absolute inset-0 h-full w-full object-cover object-bottom"
      />
    </div>
  );
};

export default Hero;
