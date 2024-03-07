import client from "./client";
import { Audience, EventCategory, Events, Venue } from "./schema";

export async function getAllEvents(): Promise<Event[]> {
    const query = `*[_type == "events"] | order(_updatedAt desc){
        ...,
        "imageUrl": eventsCoverImage.asset->url,
        audience-> {
          ...,
          "imageUrl": secondaryImage.asset->url
        },
        venue->,
        eventCategory->
      }`;
    return await client.fetch(query);
  }