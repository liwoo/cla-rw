"use client";

import { ClassValue } from "clsx";
import Image from "next/image";
import { HTMLAttributes } from "react";

type ModifiedHTMLAttributes<T> = Omit<HTMLAttributes<T>, "className"> & {
  className?: ClassValue;
};
interface ImageProps extends ModifiedHTMLAttributes<HTMLDivElement> {
  fill?: boolean;
  width?: number;
  height?: number;
  quality?: number;
  src: string;
  blurDataURL?: string;
  alt?: string;
}

export default function ClientImage({
  fill,
  width,
  height,
  quality = 50,
  src,
  blurDataURL = "https://res.cloudinary.com/tiyeni/image/upload/c_scale,h_678,q_auto:low/v1679808591/2X0A4983.jpg",
  alt = "Background",
  className = "absolute inset-0 h-full w-full object-cover object-top",
}: ImageProps) {
  const dimensions = fill ? { fill } : { width, height };
  return (
    <Image
      {...dimensions}
      src={src}
      alt={alt}
      placeholder={"blur"}
      blurDataURL={blurDataURL}
      className={className as any}
      quality={quality}
    />
  );
}
