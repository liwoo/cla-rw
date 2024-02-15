import {
  MagnifyingGlassIcon,
  MicrophoneIcon,
  PlayCircleIcon,
} from '@heroicons/react/20/solid'
import React from 'react'
import { Container } from '@/components/Container'
import Youtube from '@/components/icons/Youtube'
import Spotify from '@/components/icons/Spotify'
import ApplePodcast from '@/components/icons/ApplePodcast'
import GooglePodcast from '@/components/icons/GooglePodcast'
import ClientImage from '../ClientImage'
import { LargeButton } from '../LargeButton'
import LargeButtonOutline from '../LargeButtonOutline'
import { getLatestSermon } from '@/sanity/sermons'

const Hero =async  () => {
  const sermon = await getLatestSermon();
  return (
    <Container className="my-8">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-bold">Latest Sermon</div>
        <div className="rounded-md bg-white px-6 py-3">
          <MagnifyingGlassIcon className="h-6" />
        </div>
      </div>
      <div className="relative my-8 overflow-hidden rounded-md pt-[60%] md:pt-[50%]">
        <div className="absolute left-0 top-0 h-full w-full p-6 md:p-12">
          <Background src={sermon.mainImage?.asset.url} alt="background" />
          <div className="flex h-full w-full flex-col justify-between">
            <div className="relative max-w-[14rem] text-white">
              <div className="my-2 font-bold">
                Your word is lamp for my feet a light to my path.
              </div>
              <div className="text-sm">{`${sermon.scripture?.bibleBook} ${sermon.scripture?.chapter}:${sermon.scripture?.verseStart}`}</div>
            </div>
            <div className="relative flex justify-center md:justify-start">
              <LargeButton className="mr-4">
                <PlayCircleIcon className="h-10" />
              </LargeButton>
              <LargeButtonOutline className="mr-4 border-white">
                <MicrophoneIcon className="h-7 text-white" />
              </LargeButtonOutline>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="mb-4 text-center text-2xl font-bold">
          Listen,download & be blessed anywhere you are
        </div>
        <div className="flex items-center justify-center">
          <div className="mr-4 w-10 md:w-14">
            <Youtube />
          </div>
          <div className="mr-4 w-8 md:w-12">
            <Spotify />
          </div>
          <div className="mr-4 w-8 md:w-12">
            <ApplePodcast />
          </div>
          <div className="mr-4 w-8 md:w-12">
            <GooglePodcast />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Hero

interface BackgroundProps {
  src: string
  alt: string
}

const Background = ({ src, alt }: BackgroundProps) => {
  return <ClientImage fill src={src} alt={alt} />
}
