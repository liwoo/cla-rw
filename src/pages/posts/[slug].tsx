import {useRouter} from "next/dist/client/router";
import {MainLayout} from "@/components/layouts/MainLayout";
import {PageTitle} from "@/components/PageTitle";
import Image from "next/image";
import {P} from "@/components/typography/P";
import {Container} from "@/components/Container";
import {getAllPosts, getPostBySlug} from "@/sanity/posts";
import {Post} from "@/sanity/schema";
import {getHumanReadableDate} from "@/utils/helpers";

interface PostProps {
    post: Post
}

export default function PostPage({post}: PostProps) {
    return (
        <MainLayout seo={{title: "Post", description: "Post", image: "Post", url: "Post", keywords: ["Post"]}}>
            <Container className={"md:mt-8 lg:mt-10"}>
                <PageTitle title={post.title}  />
            </Container>
            <Container>
                <div className={"flex items-center space-x-2 justify-center my-4"}>
                    <Image className={"h-12 w-12 rounded-full"} src={"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"} alt={"Some Avatar"} width={1000} height={1000} />
                    <P>by <strong>{"CLA"}</strong></P>
                    <time className={"text-gray-600"}>{getHumanReadableDate(post._updatedAt)}</time>
                </div>
                <Image className={"rounded-md mb-8 aspect-video object-cover"} src={"https://images.unsplash.com/photo-1518601794912-1af91724e528?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80"} alt={"Some Cool Post"} width={1920} height={1080} />
                <article className={"mx-0 md:mx-16 lg:mx-24 xl:mx-60"}>
                    lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci alias aliquid amet animi
                    asperiores atque autem beatae blanditiis consequatur corporis cumque cupiditate delectus deleniti
                    deserunt dignissimos doloremque doloribus ea earum eius eligendi enim eos esse est et eum ex excepturi
                    expedita explicabo facilis fuga fugiat fugit harum hic id illum impedit in incidunt inventore ipsa
                </article>
            </Container>
        </MainLayout>
    )
}

export async function getStaticPaths() {
    const posts = await getAllPosts();
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