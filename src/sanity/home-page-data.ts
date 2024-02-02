import {Notices, Sermon,Post, CallToAction, ZoneSection} from "@/sanity/schema";
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

export async function getLatestDevotionals(): Promise<Post[]> {
  const query = `*[_type == "post" && postType == "Devotional"] | order(_createdAt desc)[0...3] {
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

export async function getCallToActions(): Promise<CallToAction[]> {
  const query = `*[_type == "callToAction"] | order(_createdAt desc) {
    ...,
    "imageUrl": coverImage.asset->url,
    coverImage {
      asset-> {
          ...,
          metadata
      }
  }
  }`;
  return await client.fetch(query);
}


export async function getCells(): Promise<ZoneSection[]> {
  const query = `*[_type == "zoneSection"] | order(_createdAt desc) `;
  return await client.fetch(query);
}