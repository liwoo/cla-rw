'use client';

import Image from "next/image";
interface ImageProps {
    title?: string
    width?: number
    height?: number
    src?: string
    alt?: string
    className?: string
}

export default function ClientImage({title = "About Page"}: Readonly<ImageProps>) {
    return (
        <Image
            width={1920}
            height={1080}
            quality={50}
            placeholder={"blur"}
            blurDataURL={"https://res.cloudinary.com/tiyeni/image/upload/c_scale,h_678,q_auto:low/v1679808591/2X0A4983.jpg"}
            src="https://res.cloudinary.com/tiyeni/image/upload/v1679808591/2X0A4983.jpg"
            alt="Coming Soon"
            className="absolute inset-0 -z-10 h-full w-full object-cover object-top"
        />
    )
}