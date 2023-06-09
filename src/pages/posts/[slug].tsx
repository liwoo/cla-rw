import {MainLayout} from "@/components/layouts/MainLayout";
import {PageTitle} from "@/components/PageTitle";
import Image from "next/image";
import {P} from "@/components/typography/P";
import {Container} from "@/components/Container";
import {getAllPosts, getPostBySlug} from "@/sanity/posts";
import {Author, Post} from "@/sanity/schema";
import {getHumanReadableDate} from "@/utils/helpers";
import {NotFound} from "@/components/NotFound";
import {SanityImageAsset} from "sanity-codegen";
import {useNextSanityImage} from "next-sanity-image";
import browserClient from "@/sanity/browser-client";
import {PortableText, PortableTextComponents} from "@portabletext/react";
import {H2} from "@/components/typography/H2";
import {H1} from "@/components/typography/H1";

type PostWithAuthor = PostWithoutAuthor & {
   author: AuthorWithImage,
    mainImage: {
        asset: SanityImageAsset
    }
}

type AuthorWithoutImage = Omit<Author, "image">;

type AuthorWithImage = AuthorWithoutImage & {
    image: {
        asset: SanityImageAsset
    }
}

type PostWithoutAuthor = Omit<Post, "author" | "mainImage">;

interface PostProps {
    post: PostWithAuthor
}

//TODO: Get this from env
const baseUrl = "https://clarwanda.org";

function PostPageContent(post: PostWithAuthor) {
    return (
        <MainLayout seo={{title: post.title, description: post.title, image: post.mainImage.asset.url, url: `${baseUrl}/posts/${post.slug}`}}>
            <Container className={"md:mt-8 lg:mt-10"}>
                <PageTitle title={post.title}/>
            </Container>
            <Container>
                <div className={"flex items-center space-x-2 justify-center my-8"}>
                    <Image
                        {...useNextSanityImage(browserClient, post.author.image)}
                        className={"h-12 w-12 rounded-full"}
                        alt={post.author.name}
                        placeholder={"blur"}
                        blurDataURL={post.author.image.asset.metadata.lqip}
                    />
                    <P>by <strong>{post.author.name}</strong></P>
                    <time className={"text-gray-600"}>{getHumanReadableDate(post._updatedAt)}</time>
                </div>
                <Image
                    {...useNextSanityImage(browserClient, post.mainImage)}
                    className={"rounded-md mb-8 aspect-video object-cover w-full lg:w-4/5 mx-auto"}
                    alt={post.title}
                    placeholder={"blur"}
                    blurDataURL={post.mainImage.asset.metadata.lqip}
                />
                <article className={"mx-0 md:mx-24 lg:mx-40 xl:mx-60"}>
                    <PortableText
                        components={components}
                        value={post.body}
                    />
                </article>
            </Container>
        </MainLayout>
    )
}

export default function PostPage({post}: PostProps) {
    
    if (!post) {
        return <NotFound />
    }
    
    return PostPageContent(post);
}

type PortableTextImageNode = {
    _type: "image",
    asset: SanityImageAsset
}

const CustomImage = (node: {node: {value: PortableTextImageNode}}) => {
    console.log(node.node.value);
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
        blockquote: ({children}) => <blockquote className="py-4 mx-12 my-8 text-3xl font-light border-t border-b border-gray-200">{children}</blockquote>,
    },
    marks: {
        strong: ({children}) => <strong className={"font-semibold"}>{children}</strong>,
        em: ({children}) => <em className={"italic"}>{children}</em>,
        code: ({children}) => <code className={"bg-gray-200 p-1 rounded"}>{children}</code>,
    },
    types: {
        image: (node) => <CustomImage node={(node as unknown) as {value: PortableTextImageNode}} />,
    },
    list: {
        bullet: ({children}) => <ul className={"my-4"}>{children}</ul>,
    },
    listItem : {
        bullet: ({children}) => <li className={"text-lg"}>&#8594; {children}</li>,
    }
}

export async function getStaticPaths() {
    const posts = await getAllPosts();
    if (!posts) {
        return {
            paths: [],
            fallback: false
        }
    }
    const paths = posts.map((post) => ({
        params: {slug: post.slug.current}
    }));
    return {
        paths,
        fallback: true
    }
}

export async function getStaticProps({params}) {
    const post = await getPostBySlug(params.slug);
    if (!post) {
        return {
            notFound: true
        }
    }
    return {
        props: {
            post
        }
    }
}