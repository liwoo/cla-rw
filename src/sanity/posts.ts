import {Post} from "@/sanity/schema";
import client from "@/sanity/client";

export async function getAllPosts(): Promise<Post[]> {
    const query = `*[_type == "post"] | order(_updatedAt desc)`;
    return await client.fetch(query);
}

export async function getPostBySlug(slug: string): Promise<Post> {
    const query = `*[_type == "post" && slug.current == $slug][0] {
  ..., 
  mainImage {
        asset-> {
            ...,
            metadata
        }
    },
  "author": author->{
    _id,
    name,
    bio,
    "image": image {
        asset-> {
            ...,
            metadata
        }
    },
    slug
  },
  body[]{
    ...,
    _type == "image" => {
      asset-> {
        ...,
        metadata
      }
    }
  }
}`;
    return await client.fetch(query, {slug});
}