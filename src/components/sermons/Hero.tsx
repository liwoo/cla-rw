import {
  MagnifyingGlassIcon,
  PlayCircleIcon,
} from '@heroicons/react/20/solid'
import React from 'react'
import { Container } from '@/components/Container'
import Youtube from '@/components/icons/Youtube'
import ClientImage from '../ClientImage'
import { LargeButton } from '../LargeButton'
import Link from 'next/link'
import SoundCloudIcon from '../icons/SoundCloud'
import { SermonItem } from '@/utils/types'

const Hero = ({sermon}:{sermon:SermonItem}) => {
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
          <ClientImage className="zoom-animation" fill src={sermon.imageUrl} alt={sermon.title} />
          <div className="flex h-full w-full flex-col justify-between">
            <div className="relative max-w-[14rem] text-white">
              <div className="my-2 font-bold">
                Your word is lamp for my feet a light to my path.
              </div>
              <div className="text-sm">{`${sermon.scriptureRef?.bibleBook} ${sermon.scriptureRef?.chapter}:${sermon.scriptureRef?.verseStart}`}</div>
            </div>
            {
              sermon.youtubeLink && <Link href={sermon.youtubeLink} className="relative flex justify-center md:justify-start" target='__blank'>
              <LargeButton className="mr-4">
                <PlayCircleIcon className="h-10" />
              </LargeButton>
            </Link>
            }
            
          </div>
        </div>
      </div>
      <div>
          <div className="mb-4 text-center text-2xl font-bold">
            Listen,download & be blessed anywhere you are
          </div>
          <div className="flex items-center justify-center">
            {
              sermon.youtubeLink && <Link href={sermon.youtubeLink} className="mr-4 w-10 md:w-14" target='__blank'>
              <Youtube />
            </Link>
            }
            {
              sermon.soundcloudLink && <Link href={sermon.soundcloudLink} target='__blank' className="mr-4 w-10 md:w-14">
              <SoundCloudIcon />
            </Link>
            }
          </div>
        </div>

    </Container>
  );
};

export default Hero;
