import React, { FC } from 'react'
import { Card } from '@/components/index/Card'
import { P } from '@/components/typography/P'
import { ArrowRightIcon } from '@heroicons/react/20/solid'

export const Highlights: FC = () => {
  const images = [
    {
      id: 1,
      title: 'Volunteer',
      subtitle: 'An opportuntity for you to serve in one of our ministries',
      imageUrl:
        'https://res.cloudinary.com/dpbuspblx/image/upload/v1679955491/cla-cta/volunteer_2_qsvhks.png',
      href: '#',
  
    },
    {
      id: 2,
      title: 'Find A Cell',
      subtitle: 'CLA is a Cell based church, join a cell',
      imageUrl:
        'https://res.cloudinary.com/dpbuspblx/image/upload/v1679955491/cla-cta/Find_a_cell_ux9g0m.png',
      href: '#',
    
    },
    {
      id: 3,
      title: 'Talk To A Pastor',
      subtitle: 'Our Pastors and elders are happy to server you',
      imageUrl:
        'https://res.cloudinary.com/dpbuspblx/image/upload/v1679955491/cla-cta/talk_to_a_pastor_dx5ewc.png',
      href: '#',
    
    },

    {
      id: 4,
      title: 'Online Service',
      subtitle: 'Unable To Physically be at Church Join Our Online Service',
      imageUrl:
        'https://res.cloudinary.com/dpbuspblx/image/upload/v1679955492/cla-cta/online_service_ccspkn.png',
      href: '#',
     
    },
  ]

  return (
    <div className="my-16 grid grid-cols-1 grid-rows-3 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
      {images.splice(0, 2).map((image) => {
        return (
          <div key={image.id} className="col-span-1 row-span-1">
            <Card
              title={image.title}
              subtitle={image.subtitle}
              image={image.imageUrl}
              imageHeight={'500'}
              imageWidth={'500'}
              href={image.href}
            />
          </div>
        )
      })}

      <div className="col-span-1 row-span-1 hidden md:row-span-2 md:block lg:row-span-3">
        <div className="relative h-full overflow-hidden rounded-md bg-[url('https://res.cloudinary.com/dpbuspblx/image/upload/v1679958148/cla-cta/worship_and_creative_arts_image_wd5yav.jpg')] bg-cover" />
      </div>

      {images.splice(0, 2).map((image) => {
        return (
          <div key={image.id} className="col-span-1 row-span-1">
            <Card
              title={image.title}
              subtitle={image.subtitle}
              image={image.imageUrl}
              imageHeight={'500'}
              imageWidth={'500'}
              href={image.href}
            />
          </div>
        )
      })}

      <div className="col-span-1 row-span-1 cursor-pointer p-4 transition-all hover:rounded-md hover:shadow-lg md:col-span-2">
        <a className="flex items-center text-lg font-semibold text-primary">
          Become a Christian
          <ArrowRightIcon className="mx-1 h-5 w-5" />
        </a>
        <P>
          This can stand, from the other options or services that the church
          provides. It agrees with the main goal of a church, to bring more
          souls to Christ. Provide some description, not more that 3 lines, to
          prevent an overlap of this section.
        </P>
      </div>
    </div>
  )
}
