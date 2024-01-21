'use client'
import {
  LifebuoyIcon,
  NewspaperIcon,
  PhoneIcon,
} from '@heroicons/react/20/solid'
import { Container } from '@/components/Container'
import { PageTitle } from '@/components/PageTitle'
import SubMenu from '@/components/SubMenu'
import Map from '@/components/i-am-new/Map'
import { useState } from 'react'
import { Service } from '@/components/about/ServiceTimes/ServiceTimes'

const cards: Service[] = [
  {
    index: 0,
    name: 'Adults',
    start_time: '18:00AM',
    venue: 'Location',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod possimus sit modi rerum exercitationem quaerat atque tenetur ullam.',
    icon: PhoneIcon,
  },
  {
    index: 1,
    name: 'Technical Support',
    start_time: '18:00AM',
    venue: 'Location',
    description:
      'Quod possimus sit modi rerum exercitationem quaerat atque tenetur ullam.',
    icon: LifebuoyIcon,
  },
  {
    index: 2,
    name: 'Media Inquiries',
    start_time: '18:00AM',
    venue: 'Location',
    description:
      'Ratione et porro eligendi est sed ratione rerum itaque. Placeat accusantium impedit eum odit.',
    icon: NewspaperIcon,
  },
]
const VisitPlan = () => {
  const [active, setActive] = useState(cards[0] ?? null)

  return (
    <section className="bg-surface py-8">
      <PageTitle title={'First Vist Plan'} />
      <Container>
        <div className="mx-auto mb-16 text-center md:w-1/2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          soluta nemo voluptate odit atque rerum ipsa excepturi blanditiis
          obcaecati repellat sequi tenetur, ut, corrupti officiis quibusdam,
          consequuntur magni libero! Sit?
        </div>
      </Container>
      <div className="bg-white md:flex">
        <div className="flex-1">
          <Map />
        </div>
        <div className="flex-1">
          <div className="py-12 md:px-16 md:py-24">
            <SubMenu
              color="text-black"
              activeBorderColor="border-tertiary"
              items={cards}
              active={active ?? null}
              onItemClick={(index) => {
                setActive(cards[index])
              }}
              className="justify-left flex items-center px-6 md:px-0"
            />
            <div>
              <div className="justify-center md:justify-left  flex p-10 py-8 md:p-20 md:py-16">
                <div>
                  <div className="mb-4 text-lg font-semibold uppercase md:text-xl">
                    TIME
                  </div>
                  <div className="text-xl font-semibold uppercase md:text-2xl">
                    {active?.start_time}
                  </div>
                </div>
                <div className="mx-8 border-l-2 border-muted md:mx-16"></div>
                <div>
                  <div className="mb-4 text-lg font-semibold uppercase md:text-xl">
                    Venue
                  </div>
                  <div className="max-w-sm">{active?.venue}</div>
                </div>
              </div>
            </div>
            <div className="px-4 md:text-left text-center">
              <div className="flex items-center justify-center md:justify-start text-2xl font-bold text-tertiary">
                {active.name} <active.icon className="mx-2 my-4 h-6" />
              </div>
              <div className="mb-2 max-w-sm text-xl font-bold text-black">
                What Should I Wear?
              </div>
              <div className="max-w-sm text-black">{active.description}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VisitPlan
