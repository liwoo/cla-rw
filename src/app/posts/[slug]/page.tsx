import { getAllPosts, getPostBySlug } from "@/sanity/posts";
import { Author, Post } from "@/sanity/schema";
import { NotFound } from "@/components/NotFound";
import { SanityImageAsset } from "sanity-codegen";
import PostPageContent from "@/components/posts/PostPageContent";
import { PathsParams } from "@/utils/types";

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

//TODO: Get this from env
const baseUrl = "https://clarwanda.org";

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
