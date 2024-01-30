'use client'
import { Container } from '@/components/Container'
import SermonCard from '@/components/sermons/SermonCard'
import SubMenu from '@/components/SubMenu'
import { sermonFilters } from '@/data/ui'
import BookFilterForm from '@/components/sermons/FilterForm/BookFilterForm'
import Pagination from '@/components/sermons/Pagination'
import { useState } from 'react'
import Select from '@/components/Select'
import { MenuItem } from '@/utils/types'

interface Sermon{
  title:string,
  img:string,
  book:string,
  date:string
}

const FindSermons = () => {
  const recentSermons:Sermon[] = Array.from(Array(4).keys()).map((_i, index) => ({
    title: 'Sermon Title',
    img: 'https://res.cloudinary.com/c99/image/upload/v1704981714/Placeholders/Church-Growth-Magazine-Article-Images-1-1280x640.png',
    book: '2 Timothy 5',
    date: '20, June 2021',
  }))
  const [filter, setFilter] = useState<MenuItem | null>(sermonFilters[0] ?? null)

  return (
    <section className="bg-surface py-8">
      <Container>
        <div className="text-2xl font-bold">Find Sermons</div>

        <div className="my-8 block w-full md:hidden">
          <Select
            options={sermonFilters.map((i, index) => ({
              text: i.name,
              value: i.name,
              index,
            }))}
            onChange={(item) => {
              setFilter(item)
            }}
            name={'filter'}
          />
        </div>
        <div className="hidden md:block">
          <SubMenu
            active={filter}
            items={sermonFilters.map((i, index) => ({ ...i, index }))}
            onItemClick={(filter:MenuItem) => {
              setFilter(filter)
            }}
            color="text-black"
            activeBorderColor="border-primary"
            className="my-8 flex justify-start px-0"
          />
        </div>

        <div className="block justify-between md:flex">
          <div className="w-full md:w-1/2">
            <BookFilterForm />
          </div>
          <div className="hidden md:block">
            <Pagination />
          </div>
        </div>
        <div className="my-8 text-xl font-semibold">65 Sermons</div>
        {recentSermons.map((sermon) => (
          <SermonCard key={sermon.title} className="my-8" {...sermon} />
        ))}
        <div className="block md:hidden">
          <Pagination />
        </div>
      </Container>
    </section>
  )
}

export default FindSermons
