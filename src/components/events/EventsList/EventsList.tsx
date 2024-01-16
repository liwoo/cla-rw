'use client'
import { PageTitle } from '@/components/PageTitle'
import EventCard from './EventCard'
import { Container } from '@/components/Container'
import { LargeButton } from '@/components/LargeButton'
import SubMenu from '@/components/SubMenu'

const EventsList = () => {
  const events = Array.from(Array(8).keys()).map(() => ({
    title: 'Title',
  }))

  const filters = [
    {
      name: 'All',
    },
    {
      name: 'Upcoming',
    },
    {
      name: 'Past',
    },
  ]

  return (
    <section className="bg-surface py-16">
      <PageTitle title="Events" />
      <div className="my-8 mb-16 flex justify-center">
        <SubMenu
          color="text-black"
          activeBorderColor="border-primary"
          items={filters}
          active={filters[0]}
          onItemClick={() => {}}
        />
      </div>

      <Container>
        <div className="grid grid-cols-2 gap-16">
          {events.map((event) => (
            <EventCard key={event.title} />
          ))}
        </div>
        <div className="my-16 text-center">
          <LargeButton>Load More</LargeButton>
        </div>
      </Container>
    </section>
  )
}

export default EventsList
