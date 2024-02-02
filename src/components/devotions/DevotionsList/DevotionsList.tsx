import React from 'react'
import DevotionCard from './DevotionCard'
import { LargeButton } from '@/components/LargeButton'
import { Container } from '@/components/Container'

const DevotionsList = () => {
  const devotions = Array.from(Array(9).keys()).map(() => ({
    title: 'Devotional Name',
  }))
  return (
    <Container className="my-16">
      <div className="grid grid-cols-3 gap-8">
        {devotions.map((devotion) => (
          <DevotionCard key={devotion.title} />
        ))}
      </div>
      <div className="my-8 text-center">
        <LargeButton>Load More</LargeButton>
      </div>
    </Container>
  )
}

export default DevotionsList
