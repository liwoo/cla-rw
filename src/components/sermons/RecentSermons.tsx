import { Container } from '@/components/Container'
import SermonCard from '@/components/sermons/SermonCard'
import { defaultImage } from '@/utils/default'
import { SermonItem } from '@/utils/types'
import moment from 'moment'

const RecentSermons =  ({sermons}:{sermons:SermonItem[]}) => {
  
  const recentSermons = sermons.map((sermon) => ({
    title: sermon.title ?? '',
    img: sermon.imageUrl ?? defaultImage.asset.url,
    book: `${sermon.scriptureRef?.bibleBook} ${sermon.scriptureRef?.chapter}`,
    date: sermon.publishedAt ? moment(sermon.publishedAt).format('DD MMM YYYY') : '',
    videoLink: sermon.youtubeLink
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
  );
};

export default RecentSermons;
