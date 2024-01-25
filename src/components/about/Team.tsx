'use client'
import React, { useState } from 'react'
import { PageTitle } from '@/components/PageTitle'
import SubMenu from '@/components/SubMenu'
import { Container } from '@/components/Container'
import ClientImage from '@/components/ClientImage'

const Team = () => {
  const categories = [{ name: 'All Staff' }, { name: 'Pastoral Staff' }]
  const [activeCategory, setActiveCategory] = useState(categories[0] ?? null)
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
          active={activeCategory}
          color={'text-black'}
          activeBorderColor={'border-primary'}
          onItemClick={(item) => {
            setActiveCategory(item)
          }}
        />
        <div className="xs:grid-cols-2 3xl:grid-cols-6 mt-6 grid grid-cols-1 gap-16 sm:grid-cols-3 lg:grid-cols-4">
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
        <ClientImage fill src={imgSrc} alt={name} />
      </div>
      <div className="font-semibold">{name}</div>
      <div className="font-extralight">{office}</div>
    </div>
  )
}
