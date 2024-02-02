import React from 'react'
import { PageTitle } from '@/components/PageTitle'
import { PhoneIcon } from '@heroicons/react/20/solid'
import Accordion from '../Accordion'
import { Container } from '../Container'

interface StartingPointItem {
  title: string
  description: string
}

const StartingPoint = () => {
  const how: StartingPointItem[] = Array.from(Array(4).keys()).map(
    (_i, index) => ({
      title: `Lorem ipsum dolor sit amet consectetur adipisicing elit. ${index}`,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi facere eaque esse consequuntur quidem impedit incidunt repellendus sapiente eum veniam tempora officiis aperiam cum optio, sed voluptatum recusandae aut dignissimos.',
    })
  )
  return (
    <section className="bg-surface py-8">
      <PageTitle title={'Starting Point'} />
      <Container className="my-8">
        <div className="md:flex">
          <div className="my-8  flex-1">
            <div className="mb-2 max-w-sm text-center text-xl font-bold text-black md:text-left">
              What Should I Wear?
            </div>
            <div className="my-4 text-center md:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              facere eaque esse consequuntur quidem impedit incidunt repellendus
              sapiente eum veniam tempora officiis aperiam cum optio, sed
              voluptatum recusandae aut dignissimos.
            </div>
            <div className="text-center md:text-left">
              <div className="my-4 inline-block rounded-md bg-white px-8 py-6 text-center">
                <PhoneIcon className="mx-auto h-12 text-secondary" />
                <div>+250888888888</div>
              </div>
            </div>
          </div>
          <div className="mx-20 hidden border-l-[1.5px] border-black md:block"></div>
          <div className="my-8 flex-1">
            <div className="mb-2 max-w-sm text-center text-xl font-bold text-black md:text-left">
              What Should I Wear?
            </div>
            <Accordion items={how} />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default StartingPoint
