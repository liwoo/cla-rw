'use client';
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative w-full min-h-[600px]">
        <Image
           fill
            quality={50}
            placeholder={"blur"}
            blurDataURL={"https://res.cloudinary.com/tiyeni/image/upload/c_scale,h_678,q_auto:low/v1679808591/2X0A4983.jpg"}
            src="https://res.cloudinary.com/c99/image/upload/v1705414035/Placeholders/Screenshot_2024-01-16_at_16.06.56.png"
            alt="Coming Soon"
            className="absolute inset-0 h-full w-full object-cover object-top"
        />
    </div>
  )
}

export default Hero