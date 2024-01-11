import React from 'react'
import Image from 'next/image'
import { Container } from '@/components/Container'

interface ServiceTimeLocationProps {
  time: string
  location: string
}
const ServiceTimeLocation = ({ time, location }: ServiceTimeLocationProps) => {
  const image =
    'https://res.cloudinary.com/tiyeni/image/upload/v1679808591/2X0A4983.jpg'
  return (
    <div className="relative bg-tertiary">
      <Container className="relative">
        <div className="flex py-16">
          <div >
            <div className="mb-4 text-2xl font-semibold uppercase">TIME</div>
            <div className="text-xl md:text-3xl font-semibold uppercase">{time}</div>
          </div>
          <div className="mx-12 border-l-2 border-black"></div>
          <div>
            <div className="mb-4 text-2xl font-semibold uppercase">Venue</div>
            <div className="max-w-sm">{location}</div>
          </div>
        </div>
        <div className="hidden md:block absolute bottom-0 right-0 overflow-hidden pt-[30%] w-2/5">
          <Image
            fill
            quality={50}
            placeholder={'blur'}
            blurDataURL={
              'https://res.cloudinary.com/tiyeni/image/upload/c_scale,h_678,q_auto:low/v1679808591/2X0A4983.jpg'
            }
            src={image}
            alt="Coming Soon"
            className="absolute top-0 object-cover"
          />
        </div>
      </Container>
    </div>
  )
}

export default ServiceTimeLocation
