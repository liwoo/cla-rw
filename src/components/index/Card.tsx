import React from 'react'
import Image from 'next/image'
import { CardTitle } from '@/components/CardTitle'
import { ArrowRightIcon } from '@heroicons/react/20/solid'

interface CardProps {
  title: string
  subtitle: string
  image?: string
  href?: string
  imageWidth?: string
  imageHeight?: string
}
export const Card = ({ title, subtitle, image, href,imageWidth,imageHeight }: CardProps) => {
  return (
    <a className="pointer-cursor relative flex cursor-pointer items-center space-x-3 rounded-lg border border-gray-300 bg-white p-2 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400">
      <div className="min-w-1/3 flex-1">
        <Image
          className="rounded-md object-fill"
          width= {Number(imageWidth)}
          height={Number(imageHeight)}
          src={image}
          alt={title}
        />
      </div>
      <div className="flex-2 w-2/3 min-w-0">
        <div className="flex flex-col space-y-4 focus:outline-none">
          <CardTitle title={title} />
          <div className="flex">
            <p className="w-5/6 text-sm text-dark line-clamp-2">{subtitle}</p>
            <ArrowRightIcon className="mx-1 h-5 w-5 flex-1" />
          </div>
        </div>
      </div>
    </a>
  )
}
