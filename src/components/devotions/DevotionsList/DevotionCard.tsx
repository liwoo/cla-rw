"use client"
import ChatBubble from '@/components/icons/ChatBubble'
import DocumentOutline from '@/components/icons/DocumentOutline'
import { CalendarIcon, DocumentIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
const DevotionCard = () => {
  const background =
    'https://res.cloudinary.com/c99/image/upload/v1704981714/Placeholders/Church-Growth-Magazine-Article-Images-1-1280x640.png'
  return (
    <div className="relative overflow-hidden rounded-md pt-[100%]">
      <Background alt="background" src={background} />
      <div className="absolute top-0 left-0 h-full w-full p-8 text-white">
        <div className="flex h-full w-full items-end">
          <div className='w-full'>
            <div className='font-bold text-2xl'>Title</div>
            <div className='font-semibold text-lg my-2'>Author</div>
            <div className="flex justify-between w-full items-center">
              <div className='flex text-sm items-center mr-2'><CalendarIcon className='h-6 mr-1'/><span className="whitespace-nowrap">10, June 2022</span></div>
              <div className='flex text-sm items-center mr-2'><div className='h-6 mr-1 w-6'><DocumentOutline /></div><span className="whitespace-nowrap">category</span></div>
              <div className='flex text-sm items-center'><div className='h-6 mr-1'><ChatBubble /></div><span className="whitespace-nowrap">Comments</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DevotionCard

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
