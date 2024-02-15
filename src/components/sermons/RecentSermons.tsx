import { Container } from '@/components/Container'
import SermonCard from '@/components/sermons/SermonCard'
import { getAllSermons } from '@/sanity/sermons'
import { defaultImage } from '@/utils/default'
import moment from 'moment'

const RecentSermons = async () => {
  const sermons=await getAllSermons()

  const recentSermons = sermons.map((sermon) => ({
    title: sermon.title ?? '',
    img: sermon.mainImage?.asset.url ?? defaultImage.asset.url,
    book: `${sermon.scripture?.bibleBook} ${sermon.scripture?.chapter}`,
    date: sermon.publishedAt ? moment(sermon.publishedAt).format('DD MMM YYYY') : '',
  }))
  
  return (
    <section className="bg-surface py-8">
      <Container>
        <div className="text-2xl font-bold">Recent Sermons</div>
        {recentSermons.map((sermon) => (
          <SermonCard key={sermon.title} className="my-8" {...sermon} />
        ))}
      </Container>
    </section>
  )
}

export default RecentSermons
