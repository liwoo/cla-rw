import {FC} from "react";
import Image from "next/image";
import {PageTitle} from "@/components/PageTitle";
import {H2} from "@/components/typography/H2";
import {Subheading} from "@/components/typography/Subheading";
import {CalendarIcon} from "@heroicons/react/20/solid";
import Link from "next/link";

export interface Blog {
    id: number
    title: string
    href: string
    description: string
    imageUrl: string
    date: string
    datetime: string
    author: {
        name: string
        imageUrl: string
    }
}

const posts: Blog[] = [
    {
        id: 1,
        title: 'Sunday Celebratrion',
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        imageUrl:
            'https://res.cloudinary.com/dpbuspblx/image/upload/v1679958909/cla-cta/Sunday_Celebration_IG_wfnxzj.png',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        author: {
            name: 'Michael Foster',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        imageWidth:1080,
        imageHeight:1080
    },
    {
        id: 2,
        title: 'Improve Your Productivity and Work',
        href: '#',
        description: 'Dolorum voluptatem ab molestias in magni nostrum. Sint deleniti corporis nam et deserunt illo consequatur. Cupiditate expedita fugit illum. Officia veniam atque dolorem a. Quisquam corrupti eveniet nam. Est fugit doloremque repellendus omnis quis id voluptatum.',
        imageUrl: 'https://res.cloudinary.com/dpbuspblx/image/upload/v1679958907/cla-cta/Sermon_Quote_2_Twitter_iotdpu.png',
        date: 'May 12, 2020',
        datetime: '2020-05-12',
        author: {
            name: 'Julia Thomas',
            imageUrl: 'https://images.unsplash.com/photo-1566053618601-6c0b8bb10c15?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        imageWidth:1024,
        imageHeight:512
    },
    {
        id: 3,
        title: 'Baby Dedication',
        href: '#',
        description: 'Velit voluptate voluptas qui architecto alias aut. Et suscipit autem. Omnis distinctio sequi a velit maiores. Eum maxime necessitatibus et cumque. Porro maiores rem nesciunt. Nihil quae qui quae ipsa.',
        imageUrl: 'https://res.cloudinary.com/dpbuspblx/image/upload/v1679958908/cla-cta/Sunday_Service_IG_cprhra.png',
        date: 'Aug 22, 2020',
        datetime: '2020-08-22',
        author: {
            name: 'John Smith',
            imageUrl: 'https://images.unsplash.com/photo-1585952034126-3aa3ea3a27d9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        imageWidth:1080,
        imageHeight:1080
    },
]

export const BlogSection = () => {
    return (
        <div className="bg-white py-12 sm:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <PageTitle title="Latest Posts & Devotionals" />
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {posts.map((post) => (
                        <article
                            key={post.id}
                            className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-60 sm:pt-48 lg:pt-60"
                        >
                            <Image 
                            width={post.imageWidth}
                            height={post.imageHeight}
                            src={post.imageUrl} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover aspect-video" />
                            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                            <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

                           
                            <H2>
                                <Link href={post.href}>
                                    <span className="absolute inset-0" />
                                    {post.title}
                                </Link>
                            </H2>
                            <Subheading classOverrides={"flex items-center text-white gap-x-2"}>
                                <CalendarIcon className="flex-shrink-0 h-5 w-5 text-white" aria-hidden="true" />
                                <time dateTime={post.datetime} className="mr-8">
                                    {post.date}
                                </time>
                            </Subheading>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    )
}
