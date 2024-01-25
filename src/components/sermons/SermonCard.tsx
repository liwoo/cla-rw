'use client'
import PlayButton from '@/components/PlayButton'
import {  CalendarIcon } from '@heroicons/react/20/solid'
import clsx, { ClassValue } from 'clsx'
import { HTMLAttributes } from 'react'
import ClientImage from '@/components/ClientImage'
import BookOpenIcon from '@/components/icons/BookOpenIcon'

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
      <div className="block md:flex items-end justify-between">
        <div>
          <div className="block md:flex">
            <div className="relative w-full md:w-36 pt-[50%] md:pt-0 my-2 md:my-0">
              <ClientImage
                fill
                quality={50}
                src={img}
                alt={title}
              />
            </div>

            <div className="mx-0 md:mx-8 py-2">
              <div className="my-2 text-xl font-bold">{title}</div>
              <div className="my-2 flex items-center">
                <div className="mr-2 h-8 w-8"><BookOpenIcon   /></div>
                 {book ?? '-'}
              </div>
              <div className="my-2 flex items-center">
                <CalendarIcon className="mr-2 h-8" /> {date ?? '-'}
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-center md:justify-end">
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
