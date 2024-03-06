import client from "./client";
import { Audience, EventCategory, Events, Venue } from "./schema";

export async function getAllEvents(): Promise<Event[]> {
    const query = `*[_type == "events"] | order(eventDate desc){
        ...,
        "imageUrl": eventsCoverImage.asset->url,
        audience->,
        venue->,
        eventCategory->,
        eventsCoverImage {
          asset-> {
              ...,
              metadata
          }
      }
      }`;
    return await client.fetch(query);
  }