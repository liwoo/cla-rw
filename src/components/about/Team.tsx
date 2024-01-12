'use client'
import React from 'react'
import { PageTitle } from '@/components/PageTitle'
import SubMenu from '@/components/SubMenu'
import Image from 'next/image'
import { Container } from '@/components/Container'

const Team = () => {
  const categories = [{ name: 'All Staff' }, { name: 'Pastoral Staff' }]
  const members = Array.from(Array(12).keys()).map((i) => {
    return {
      name: 'Staff Name',
      office: 'Office',
      imgSrc:
        'https://res.cloudinary.com/c99/image/upload/v1704981693/Placeholders/Screenshot_2024-01-11_at_15.53.47.png',
    }
  })
  return (
    <section className="bg-surface py-8">
      <PageTitle title={'Our Staff'} />
      <Container>
        <SubMenu
          items={categories}
          active={categories[0]}
          color={'text-black'}
          activeBorderColor={'border-primary'}
          onItemClick={()=>{}}
        />
        <div className="mt-6 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 3xl:grid-cols-6 gap-16">
          {members.map((item) => {
            return <Member key={item.name} {...item} />
          })}
        </div>
      </Container>
    </section>
  )
}

export default Team

interface MemberProps {
  name: string
  office: string
  imgSrc: string
}
const Member = ({ name, office, imgSrc }: MemberProps) => {
  return (
    <div>
      <div className="relative my-4 w-full overflow-hidden rounded-md pt-[100%]">
        <Image
          quality={50}
          placeholder={'blur'}
          fill
          blurDataURL={
            'https://res.cloudinary.com/tiyeni/image/upload/c_scale,h_678,q_auto:low/v1679808591/2X0A4983.jpg'
          }
          src={imgSrc}
          alt={name}
          className="absolute top-0 object-cover"
        />
      </div>
      <div className="font-semibold">{name}</div>
      <div className="font-extralight">{office}</div>
    </div>
  )
}
