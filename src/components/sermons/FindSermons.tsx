'use client'
import { Container } from '@/components/Container'
import SermonCard from '@/components/sermons/SermonCard'
import SubMenu from '../SubMenu'
import { sermonFilters } from '@/data/ui'
import BookFilterForm from './FilterForm/BookFilterForm'
import Pagination from './Pagination'

const FindSermons = () => {
  const recentSermons = Array.from(Array(4).keys()).map(() => ({
    title: 'Sermon Title',
    img: 'https://res.cloudinary.com/c99/image/upload/v1704981714/Placeholders/Church-Growth-Magazine-Article-Images-1-1280x640.png',
    book: '2 Timothy 5',
    date: '20, June 2021',
  }))
  const activeFilter = sermonFilters[0] ?? null
  return (
    <section className="bg-surface py-8">
      <Container>
        <div className="text-2xl font-bold">Find Sermons</div>
        <SubMenu
          active={activeFilter}
          items={sermonFilters}
          onItemClick={() => {}}
          color="text-black"
          activeBorderColor="border-primary"
          className="my-8 justify-start px-0"
        />
        <div className="flex justify-between">
          <BookFilterForm />
          <Pagination />
        </div>
        <div className="text-xl font-semibold my-8">65 Sermons</div>
        {recentSermons.map((sermon) => (
          <SermonCard key={sermon.title} className="my-8" {...sermon} />
        ))}
      </Container>
    </section>
  )
}

export default FindSermons
