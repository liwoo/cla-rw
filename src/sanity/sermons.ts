import { SermonItem } from "@/utils/types";
import client from "./client";
import { Sermon } from "./schema";

export async function getAllSermons(): Promise<SermonItem[]> {
    const query = `*[_type == "sermon"] | order(_updatedAt desc) {
        ...,
        "imageUrl": mainImage.asset->url,
        mainImage {
            asset-> {
                ...,
                metadata
            }
        },
        "scriptureRef":scripture->
      }`;
    return await client.fetch(query);
}

export async function getLatestSermon(): Promise<SermonItem> {
    const query = `*[_type == "sermon"] | order(_updatedAt desc) [0] {
      ...,
      "imageUrl": mainImage.asset->url,
      mainImage {
          asset-> {
              ...,
              metadata
          }
      },
      "scriptureRef":scripture->
    }`;
    return await client.fetch(query);
  }