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
const VisitPlan = () => {
  const active = cards[0]
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
      <div className="md:flex bg-white">
        <div className="flex-1">
          <Map />
        </div>
        <div className="flex-1">
          <div className="md:px-16 py-12 md:py-24">
            <SubMenu
              color="text-black"
              activeBorderColor="border-tertiary"
              items={cards}
              active={cards[0] ?? null}
              onItemClick={() => {}}
              className="justify-between px-6 md:px-0"
            />
            <div>
              <div className="flex justify-center p-10 md:p-20 py-8 md:py-16">
                <div>
                  <div className="mb-4 text-lg md:text-xl font-semibold uppercase">
                    TIME
                  </div>
                  <div className="text-xl font-semibold uppercase md:text-2xl">
                    18:00AM
                  </div>
                </div>
                <div className="mx-8 border-l-2 border-muted md:mx-16"></div>
                <div>
                  <div className="mb-4 text-lg md:text-xl font-semibold uppercase">
                    Venue
                  </div>
                  <div className="max-w-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4">
              <div className="flex items-center text-2xl font-bold text-tertiary">
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