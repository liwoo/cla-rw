import React from 'react'
import { SEO, SEOProps } from '@/components/SEO'
import { BlogSection } from '@/components/index/BlogSection'
import { Container } from '@/components/Container'
import { Notice } from '@/components/cta/Notice'
import { MediaHeroAction } from '@/components/index/MediaHeroAction'
import { PageTitle } from '@/components/PageTitle'
import { Highlights } from '@/components/index/Highlights'
import { FindCell } from '@/components/index/FindCell'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

const pageDetails: SEOProps = {
  title: 'Welcome to Christian Life Assembly',
  description:
    'CLA is a cell based Church that believes in the Bible and the power to change lives through a living relationship with Jesus Christ. Come join us!',
  image: 'https://i.ytimg.com/vi/VKcrBGDRyVc/maxresdefault.jpg',
  url: 'https://clarwanda.org/',
  keywords: [
    'Christian Life Assembly',
    'CLA',
    'Rwanda',
    'Church',
    'Cell Based Church',
    'Christian',
    'Jesus',
    'Christ',
    'Bible',
    'Bible Study',
    'Bible Study Group',
    'Bible Study Cell',
  ],
}

export default function Home() {
  const welcomeTitle = 'Welcome to Christian Life Assembly'
  const welcomeDescription =
    'CLA is a cell based Church that believes in the Bible and the power to change lives through a living relationship with Jesus Christ. Come join us!'

  const noticeTitle = 'The Season of being rooted'
  const noticeSubtitle =
    'Being rooted in truth, Bearing fruit and Extending influence'
  return (
    <>
      <SEO
        title={pageDetails.title}
        description={pageDetails.description}
        image={pageDetails.image}
        url={pageDetails.url}
        keywords={pageDetails.keywords}
      />
      <Header company="CLA Rwanda" />
      <main className={'bg-surface'}>
        <Container className={'mt-32 md:mt-40'}>
          <Notice description={noticeSubtitle} title={noticeTitle} />
          <MediaHeroAction />
          <div className="my-4 lg:my-20">
            <PageTitle title={welcomeTitle} description={welcomeDescription} />
          </div>
          <Highlights />
        </Container>
        <FindCell />
        <BlogSection />
      </main>
      <Footer />
    </>
  )
}
