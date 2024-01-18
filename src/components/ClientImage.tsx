'use client';

import Image from "next/image";
interface ImageProps {
    width?:number
    height?:number
    fill?:boolean
    quality:number
    blurDataURL:string
    src:string
    alt:string
    className?:string
}

export default function ClientImage({width,height,fill,quality,blurDataURL,src,alt,className}:ImageProps) {
    const props=fill?{fill,quality,blurDataURL,src,alt,className}:{width,height,quality,blurDataURL,src,alt,className}
    return (
        <Image
            {...props}
        />
    )
}