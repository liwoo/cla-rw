'use client'
import { LargeButton } from '@/components/LargeButton'
import { P } from '@/components/typography/P'
import { BookOpenIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'

const EventCard = () => {
  return (
    <div>
      <div className="flex">
        <div className="rounded-md border border-muted p-4 px-10">
          <div className="mb-4 text-3xl text-secondary">21</div>
          <div className="uppercase text-secondary">MAY</div>
        </div>
        <div className="w-full px-6">
          <div className="flex justify-between">
            <div className="text-xl font-bold">Event Name</div>
            <div className="text-xl font-semibold">19:00 - 20:00</div>
          </div>
          <div className="my-2 text-lg font-semibold text-secondary">
            Event Type
          </div>
          <div className="line-clamp-2">
            <P>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum
              repellendus amet hic! Harum, aspernatur aperiam impedit ducimus
              molestias quibusdam. Ea quasi vero impedit asperiores corrupti
              natus a quos, sequi iure.
            </P>
          </div>
        </div>
      </div>
      <div className="relative my-8 w-full overflow-hidden rounded-lg pt-[60%]">
        <Image
          fill
          quality={50}
          placeholder={'blur'}
          blurDataURL={
            'https://res.cloudinary.com/tiyeni/image/upload/c_scale,h_678,q_auto:low/v1679808591/2X0A4983.jpg'
          }
          src="https://res.cloudinary.com/c99/image/upload/v1705326472/Placeholders/Screenshot_2024-01-15_at_15.47.16.png"
          alt="Coming Soon"
          className="absolute !-top-[10%] !h-[110%] w-full object-cover"
        />
        <div className="relative flex items-end p-8">
          <div className='text-white flex items-center'><span className='font-bold text-lg mr-2'>Adults</span> <BookOpenIcon className='h-6'/></div>
        </div>
      </div>
      <div className="flex justify-end items-center">
        <div className='text-xl font-semibold mr-4 text-secondary'>23 Places Left</div><div><LargeButton>Register</LargeButton></div>
      </div>
    </div>
  )
}

export default EventCard
