'use client'
import {
  LifebuoyIcon,
  NewspaperIcon,
  PhoneIcon,
} from '@heroicons/react/20/solid'
import BackgroundImage from '@/components/about/ServiceTimes/BackgroundImage'
import SubMenu from '@/components/SubMenu'
import ItemDetailsCard from '@/components/about/ServiceTimes/ItemDetailsCard'
import ServiceTimeLocation from '@/components/about/ServiceTimes/ServiceTimeLocation'
import { Container } from '@/components/Container'

const cards = [
  {
    name: 'Adults',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod possimus sit modi rerum exercitationem quaerat atque tenetur ullam.',
    icon: PhoneIcon,
  },
  {
    name: 'Technical Support',
    description:
      'Quod possimus sit modi rerum exercitationem quaerat atque tenetur ullam.',
    icon: LifebuoyIcon,
  },
  {
    name: 'Media Inquiries',
    description:
      'Ratione et porro eligendi est sed ratione rerum itaque. Placeat accusantium impedit eum odit.',
    icon: NewspaperIcon,
  },
]

export const ServiceTimes = () => {
  const backgroungImg =
    'https://res.cloudinary.com/c99/image/upload/v1704981714/Placeholders/Church-Growth-Magazine-Article-Images-1-1280x640.png'
  return (
    <>
      <div className="relative isolate overflow-hidden bg-gray-600 py-16 sm:py-32 lg:py-16">
        <BackgroundImage src={backgroungImg} alt="Background" />
        <SubMenu items={cards} active="Adults" />

        <Container className="mt-56">
          <ItemDetailsCard item={cards[0]} />
        </Container>
      </div>
      <ServiceTimeLocation
        time="18:00AM"
        location="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      />
    </>
  )
}
