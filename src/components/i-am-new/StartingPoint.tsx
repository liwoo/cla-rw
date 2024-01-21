import React from 'react'
import { PageTitle } from '@/components/PageTitle'
import { PhoneIcon } from '@heroicons/react/20/solid'
import Accordion from '../Accordion'
import { Container } from '../Container'

const StartingPoint = () => {
  const how = Array.from(Array(4).keys()).map((_i,index) => ({
    title: `Lorem ipsum dolor sit amet consectetur adipisicing elit. ${index}`,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi facere eaque esse consequuntur quidem impedit incidunt repellendus sapiente eum veniam tempora officiis aperiam cum optio, sed voluptatum recusandae aut dignissimos.',
  }))
  return (
    <section className="bg-surface py-8">
      <PageTitle title={'Starting Point'} />
      <Container className='my-8'>
      <div className="md:flex">
        <div className='flex-1  my-8'>
          <div className="mb-2 max-w-sm text-xl font-bold text-black text-center md:text-left">
            What Should I Wear?
          </div>
          <div className='my-4 text-center md:text-left'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi facere
            eaque esse consequuntur quidem impedit incidunt repellendus sapiente
            eum veniam tempora officiis aperiam cum optio, sed voluptatum
            recusandae aut dignissimos.
          </div>
          <div className="md:text-left text-center">
          <div className="bg-white px-8 py-6 inline-block rounded-md text-center my-4">
            <PhoneIcon className="h-12 text-secondary mx-auto" />
            <div>+250888888888</div>
          </div>
          </div>
         
        </div>
        <div className="hidden md:block border-l-[1.5px] mx-20 border-black"></div>
        <div className='flex-1 my-8'>
          <div className="mb-2 max-w-sm text-xl font-bold text-black text-center md:text-left">
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
