import React from 'react'
import ClientImage from '../ClientImage'

interface ItemCardProps {
  date: string
  title: string
  img: string
}
const ItemCard = ({ date, title, img }: ItemCardProps) => {
  const blurImg =
    'https://res.cloudinary.com/tiyeni/image/upload/c_scale,h_678,q_auto:low/v1679808591/2X0A4983.jpg'
  return (
    <div className="relative flex items-end p-4 w-full pt-[60%] rounded-md overflow-hidden">
      <ClientImage
        fill
        quality={50}
        blurDataURL={blurImg}
        src={img}
        alt={''}
        className="absolute inset-0 h-full w-full object-cover object-top"
      />
      <div className='text-white relative'>
        <div>{date}</div>
        <div className="text-lg font-bold">{title}</div>
      </div>
    </div>
  )
}

export default ItemCard
