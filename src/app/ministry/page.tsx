import Hero from '@/components/ministry/Hero'
import { Container } from '@/components/Container'
import { Notice } from '@/components/cta/Notice'
import Discover from '@/components/ministry/Discover'
import Testimonials from '@/components/ministry/Testimonials'

const Ministry = () => {
  const notice = {
    title: 'New Frontiers',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, voluptatem! Amet saepe, at deleniti id voluptate, adipisci iusto molestias repudiandae reprehenderit illo temporibus dolorum animi eum earum',
    startDate: '',
    endDate: '',
    coverImage: null,
    link: '',
  }
  return (
    <div>
      <Hero />
      <Container className="my-16">
        <Notice notice={notice as any} />
      </Container>
      <Discover/>
      <Testimonials/>
    </div>
  )
}

export default Ministry
