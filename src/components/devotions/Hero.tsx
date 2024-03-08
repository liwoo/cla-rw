"use client";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import React from "react";
import { Container } from "@/components/Container";
import Image from "next/image";
import SortBy from "./SortBy";
import { LargeButton } from "../LargeButton";
import Facebook from "../icons/Facebook";
import Twitter from "../icons/Twitter";

const Hero = () => {
  const background =
    "https://res.cloudinary.com/c99/image/upload/v1704981714/Placeholders/Church-Growth-Magazine-Article-Images-1-1280x640.png";
  return (
    <Container className="my-8">
      <div className="border-muted flex items-baseline justify-between border-b pb-4">
        <div className="rounded-md bg-white py-3 px-6">
          <MagnifyingGlassIcon className="h-6" />
        </div>
        <SortBy />
      </div>
      <div className="relative my-8 overflow-hidden rounded-md pt-[50%]">
        <div className="absolute top-0 left-0 h-full w-full p-12">
          <Background src={background} alt="background" />
        </div>
      </div>
      <div>
        <div className="mb-4 text-4xl font-bold">Devotional title</div>
        <div className="flex">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At iusto
          nostrum eius non iste, consequatur quae, voluptate incidunt
          perferendis in nobis repellendus assumenda ipsam quia expedita illum.
          Autem, saepe deserunt.
        </div>
        <div className="flex justify-center">
          <LargeButton buttonType="Secondary" className="my-6">
            <div className="font-semibold">Continue Reading</div>
          </LargeButton>
        </div>
      </div>
      <div className="my-16">
        <div className="mb-4 text-center text-2xl font-bold">
          Share devotionals with your online community
        </div>
        <div className="text-secondary flex justify-center">
          <div className="mr-2 w-12">
            <Facebook />
          </div>
          <div className="mr-2 w-12">
            <Twitter />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Hero;

interface BackgroundProps {
  src: string;
  alt: string;
}

const Background = ({ src, alt }: BackgroundProps) => {
  return (
    <Image
      fill
      quality={50}
      placeholder={"blur"}
      blurDataURL={
        "https://res.cloudinary.com/tiyeni/image/upload/c_scale,h_678,q_auto:low/v1679808591/2X0A4983.jpg"
      }
      src={src}
      alt={alt}
      className="zoom-animation absolute inset-0 h-full w-full object-cover object-top"
    />
  );
};
