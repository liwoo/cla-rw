import { MinistryItem } from "@/utils/types";
import client from "./client";

export async function getAllMinistries(): Promise<MinistryItem[]> {
  const query = `*[_type == "ministries"] | order(_updatedAt desc) {
      ...,
      "imageUrl": ministryCoverImage.asset->url,
      ministryCoverImage {
        asset-> {
            ...,
            metadata
        }
    },
    tenets[]->,
    "leader": leaders->{
      ...,
      "imageUrl":image.asset->url
    },
    testimonials[]->{
      ...,
      "imageUrl":image.asset->url
    }
  }`;
  return await client.fetch(query);
}
