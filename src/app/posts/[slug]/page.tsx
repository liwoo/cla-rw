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
import ClientImage from "@/components/ClientImage";
import PostPageContent from "@/components/posts/PostPageContent";

export type PostWithAuthor = PostWithoutAuthor & {
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
    paths: PostWithAuthor
}

interface PathsParams {
    params: {
        slug?: string
    }
}

//TODO: Get this from env
const baseUrl = "https://clarwanda.org";

export async function generateStaticParams() {
    const posts = await getAllPosts();
    
    if (!posts) {
        return {
            paths: [],
        }
    }
    
    const paths: PathsParams[] = posts?.map(({slug}) => ({
        params: {slug: slug?.current ?? ''}
    }));
    
    return paths;
}

export default async function Page({params: {slug}}: Readonly<PathsParams>) {

    if (!slug) {
        return <NotFound/>
    }

    const post = await getPostBySlug(slug);

    // <MainLayout seo={{
    //     title: post.title ?? '',
    //     description: post.title ?? '',
    //     image: post.mainImage.asset.url,
    //     url: `${baseUrl}/posts/${post.slug}`
    // }}>

    return <PostPageContent post={(post as unknown) as PostWithAuthor} baseUrl={baseUrl} />
}

