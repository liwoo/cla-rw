import {Notices, Sermon} from "@/sanity/schema";
import client from "@/sanity/client";
import {useNextSanityImage, UseNextSanityImageProps} from "next-sanity-image";

export async function getLatestNotice(): Promise<Notices> {
  const query = `*[_type == "notices"] | order(_updatedAt desc) [0] {
    ...,
    coverImage {
        asset-> {
            ...,
            metadata
        }
    }
  }`;
  return await client.fetch(query);
}

export async function getLatestSermon(): Promise<Sermon> {
  const query = `*[_type == "sermon"] | order(_updatedAt desc) [0] {
    ...,
    mainImage {
        asset-> {
            ...,
            metadata
        }
    }
  }`;
  return await client.fetch(query);
}