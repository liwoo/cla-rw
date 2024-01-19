"use client"

import {MainLayout} from "@/components/layouts/MainLayout";
import {Container} from "@/components/Container";
import {PageTitle} from "@/components/PageTitle";
import {useNextSanityImage} from "next-sanity-image";
import browserClient from "@/sanity/browser-client";
import {P} from "@/components/typography/P";
import {getHumanReadableDate} from "@/utils/helpers";
import {PortableText, PortableTextComponents} from "@portabletext/react";
import {SanityImageAsset} from "sanity-codegen";
import {H1} from "@/components/typography/H1";
import {H2} from "@/components/typography/H2";
import {PostWithAuthor} from "@/app/posts/[slug]/page";
import Image from "next/image";

export default function PostPageContent({post, baseUrl}: { post: PostWithAuthor, baseUrl: string }) {
    return (
        <div>
            <Container className={"md:mt-8 lg:mt-10"}>
                <PageTitle title={post.title ?? ''}/>
            </Container>
            <Container>
                <div className={"flex items-center space-x-2 justify-center my-8"}>
                    <Image
                        {...useNextSanityImage(browserClient, post.author.image)}
                        className={"h-12 w-12 rounded-full"}
                        alt={post.author.name ?? ''}
                        placeholder={"blur"}
                        blurDataURL={post.author.image.asset.metadata.lqip}
                    />
                    <P>by <strong>{post.author.name}</strong></P>
                    <time className={"text-gray-600"}>{getHumanReadableDate(post._updatedAt)}</time>
                </div>
                <Image
                    {...useNextSanityImage(browserClient, post.mainImage)}
                    className={"rounded-md mb-8 aspect-video object-cover w-full lg:w-4/5 mx-auto"}
                    alt={post.title ?? ''}
                    placeholder={"blur"}
                    blurDataURL={post.mainImage.asset.metadata.lqip}
                />
                <article className={"mx-0 md:mx-24 lg:mx-40 xl:mx-60"}>
                    {
                        post?.body && (
                            <PortableText
                                components={components}
                                value={post.body}
                            />
                        )
                    }
                </article>
            </Container>
        </div>
    )
}

type PortableTextImageNode = {
    _type: "image",
    asset: SanityImageAsset
}

const CustomImage = (node: { node: { value: PortableTextImageNode } }) => {
    return <Image
        {...useNextSanityImage(browserClient, node.node.value.asset)}
        className={"rounded-md my-8 aspect-video object-cover w-full"}
        alt="image"
        placeholder={"blur"}
        blurDataURL={node.node.value.asset.metadata.lqip}
    />
};

const components: PortableTextComponents = {
    block: {
        normal: ({children}) => <p className={"my-4 text-lg"}>{children}</p>,
        h1: ({children}) => <H1>{children}</H1>,
        h2: ({children}) => <H2>{children}</H2>,
        h3: ({children}) => <h3 className={"text-lg font-semibold"}>{children}</h3>,
        h4: ({children}) => <h4 className={"text-lg"}>{children}</h4>,
        li: ({children}) => <li className={"text-lg"}>&#8594; {children}</li>,
        blockquote: ({children}) => <blockquote
            className="py-4 mx-12 my-8 text-3xl font-light border-t border-b border-gray-200">{children}</blockquote>,
    },
    marks: {
        strong: ({children}) => <strong className={"font-semibold"}>{children}</strong>,
        em: ({children}) => <em className={"italic"}>{children}</em>,
        code: ({children}) => <code className={"bg-gray-200 p-1 rounded"}>{children}</code>,
    },
    types: {
        image: (node) => <CustomImage node={(node as unknown) as { value: PortableTextImageNode }}/>,
    },
    list: {
        bullet: ({children}) => <ul className={"my-4"}>{children}</ul>,
    },
    listItem: {
        bullet: ({children}) => <li className={"text-lg"}>&#8594; {children}</li>,
    }
}

