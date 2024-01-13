'use client'
import PlayButton from '@/components/PlayButton'
import { BookOpenIcon, CalendarIcon } from '@heroicons/react/20/solid'
import clsx, { ClassValue } from 'clsx'
import Image from 'next/image'
import { HTMLAttributes } from 'react'
type ModifiedHTMLAttributes<T> = Omit<HTMLAttributes<T>, 'className'> & {
  className?: ClassValue
}
interface SermonProps extends ModifiedHTMLAttributes<HTMLDivElement> {
  title: string
  img: string
  book?: string
  date?: string
}
const SermonCard = ({ title, img, book, date, className }: SermonProps) => {
  return (
    <div className={clsx(className)}>
      <div className="flex items-end justify-between">
        <div>
          <div className="flex">
            <div className="relative w-32">
              <Image
                fill
                quality={50}
                placeholder={'blur'}
                blurDataURL={
                  'https://res.cloudinary.com/tiyeni/image/upload/c_scale,h_678,q_auto:low/v1679808591/2X0A4983.jpg'
                }
                src={img}
                alt={title}
                className="absolute inset-0 h-full w-full object-cover object-top"
              />
            </div>

            <div className="mx-8">
              <div className="my-2 text-xl font-bold">{title}</div>
              <div className="my-2 flex items-center">
                <BookOpenIcon className="mr-2 h-8" /> {book ?? '-'}
              </div>
              <div className="my-2 flex items-center">
                <CalendarIcon className="mr-2 h-8" /> {date ?? '-'}
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex">
            <PlayButton className="mr-4" />
            <PlayButton type="audio" />
          </div>
        </div>
      </div>
      <div className="mt-4 border-[0.9px] border-dashed border-muted"></div>
    </div>
  )
}

export default SermonCard
