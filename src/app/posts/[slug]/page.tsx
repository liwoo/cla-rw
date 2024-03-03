import { getAllPosts, getPostBySlug } from "@/sanity/posts";
import { Author, Post } from "@/sanity/schema";
import { NotFound } from "@/components/NotFound";
import { SanityImageAsset } from "sanity-codegen";
import PostPageContent from "@/components/posts/PostPageContent";

export type PostWithAuthor = PostWithoutAuthor & {
  author: AuthorWithImage;
  mainImage: {
    asset: SanityImageAsset;
  };
};

type AuthorWithoutImage = Omit<Author, "image">;

type AuthorWithImage = AuthorWithoutImage & {
  image: {
    asset: SanityImageAsset;
  };
};

type PostWithoutAuthor = Omit<Post, "author" | "mainImage">;

interface PostProps {
  paths: PostWithAuthor;
}

interface PathsParams {
  params: {
    slug?: string;
  };
}

//TODO: Get this from env
const baseUrl = "https://clarwanda.org";

async function generateStaticParams() {
  const posts = await getAllPosts();

  if (!posts) {
    return {
      paths: [],
    };
  }

  const paths: PathsParams[] = posts?.map(({ slug }) => ({
    params: { slug: slug?.current ?? "" },
  }));

  return paths;
}

export default async function Page({
  params: { slug },
}: Readonly<PathsParams>) {
  if (!slug) {
    return <NotFound />;
  }

  const post = await getPostBySlug(slug);

  return (
    <PostPageContent
      post={post as unknown as PostWithAuthor}
      baseUrl={baseUrl}
    />
  );
}
