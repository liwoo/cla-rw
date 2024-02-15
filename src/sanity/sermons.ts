import client from "./client";
import { Sermon } from "./schema";

export async function getAllSermons(): Promise<Sermon[]> {
    const query = `*[_type == "sermon"] | order(_updatedAt desc) {
        ...,
        mainImage {
            asset-> {
                ...,
                metadata
            }
        },
        scripture ->
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
      },
      scripture ->
    }`;
    return await client.fetch(query);
  }