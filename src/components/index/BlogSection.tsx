import Image from 'next/image'
import { PageTitle } from '@/components/PageTitle'
import { H2 } from '@/components/typography/H2'
import { Subheading } from '@/components/typography/Subheading'
import { CalendarIcon } from '@heroicons/react/20/solid'
import { Post } from '@/sanity/schema'
import {useNextSanityImage, UseNextSanityImageProps} from "next-sanity-image";
import browserClient from "@/sanity/browser-client";
import Link from 'next/link';
import { getHumanReadableDate } from '@/utils/helpers'



export const BlogSection = ({posts}: {posts:Post[]}) => {
  return (
    <div className="bg-white py-12 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <PageTitle title="Latest Posts & Devotionals" />
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post,index) => (
            <article
              key={index}
              className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-60 sm:pt-48 lg:pt-60"
            >
              <Image
                width={500}
                height={500}
                {...useNextSanityImage(browserClient, post.mainImage)}
                alt=""
                className="absolute inset-0 -z-10 aspect-video h-full w-full object-cover"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
              <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

              <H2>
                <Link href={`/posts/${post.slug.current}`}>
                  <span className="absolute inset-0" />
                  {post.title}
                </Link>
              </H2>
              <Subheading
                classOverrides={'flex items-center text-white gap-x-2'}
              >
                <CalendarIcon
                  className="h-5 w-5 flex-shrink-0 text-white"
                  aria-hidden="true"
                />
                <time dateTime={post.publishedAt} className="mr-8">
                {getHumanReadableDate(post._updatedAt)}
                </time>
              </Subheading>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
