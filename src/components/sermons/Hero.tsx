'use client'
import { MagnifyingGlassIcon} from '@heroicons/react/20/solid'
import React from 'react'
import { Container } from '@/components/Container'
import Image from 'next/image'
import PlayButton from '@/components/PlayButton'

const Hero = () => {
  const background =
    'https://res.cloudinary.com/c99/image/upload/v1704981714/Placeholders/Church-Growth-Magazine-Article-Images-1-1280x640.png'
  return (
    <Container className="my-8">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-bold">Latest Sermon</div>
        <div className="rounded-md bg-white py-3 px-6">
          <MagnifyingGlassIcon className="h-6" />
        </div>
      </div>
      <div className="relative my-8 overflow-hidden rounded-md pt-[50%]">
        <div className="absolute top-0 left-0 h-full w-full p-12">
          <Background src={background} alt="background" />
          <div className="flex h-full w-full flex-col justify-between">
            <div className="relative max-w-[14rem] text-white">
              <div className="my-2 font-bold">
                Your word is lamp for my feet a light to my path.
              </div>
              <div className="text-sm">Psalms 119:105</div>
            </div>
            <div className="relative flex">
              <PlayButton className="mr-4" />
              <PlayButton type="audio" className="!text-white border-white" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="text-center mb-4 text-2xl font-bold">
            Listen,download & be blessed anywhere you are
        </div>
        <div className="flex justify-center">
            logos
        </div>
      </div>
    </Container>
  )
}

export default Hero

interface BackgroundProps {
  src: string
  alt: string
}

const Background = ({ src, alt }: BackgroundProps) => {
  return (
    <Image
      fill
      quality={50}
      placeholder={'blur'}
      blurDataURL={
        'https://res.cloudinary.com/tiyeni/image/upload/c_scale,h_678,q_auto:low/v1679808591/2X0A4983.jpg'
      }
      src={src}
      alt={alt}
      className="absolute inset-0 h-full w-full object-cover object-top"
    />
  )
}
