'use client';

import Image from "next/image";
interface ImageProps {
    fill?:boolean
    width?: number
    height?: number
    src: string
    blurDataURL?:string
    alt?: string
    className?: string
}

export default function ClientImage({
    fill,
    width,
    height,
    src,
    blurDataURL="https://res.cloudinary.com/tiyeni/image/upload/c_scale,h_678,q_auto:low/v1679808591/2X0A4983.jpg",
    alt="Background",
    className="absolute inset-0 h-full w-full object-cover object-top"
}:ImageProps) {
    const dimensions=fill ? {fill}:{width,height}
    return (
        <Image
            {...dimensions}
            quality={50}
            placeholder={"blur"}
            blurDataURL={blurDataURL}
            src={src}
            alt={alt}
            className={className}
        />
    )
}