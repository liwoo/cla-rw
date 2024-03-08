import { EventItem } from "@/utils/types";
import client from "./client";

export async function getAllEvents(): Promise<EventItem[]> {
    const query = `*[_type == "events"] | order(_updatedAt desc){
        ...,
        "imageUrl": eventsCoverImage.asset->url,
        audience-> {
          ...,
          "imageUrl": secondaryImage.asset->url
        },
        venue->,
        eventCategory->,
        speakerReference[]-> {
          ...,
          "imageUrl": speakerImage.asset->url
        }
      }`;
    return await client.fetch(query);
  }

  export async function getEventById(id: string): Promise<EventItem> {
    const query = `*[_type == "events" && _id == $id][0] {
      ...,
      "imageUrl": eventsCoverImage.asset->url,
      audience-> {
        ...,
        "imageUrl": secondaryImage.asset->url
      },
      venue->,
      eventCategory->,
      speakerReference[]-> {
        ...,
        "imageUrl": speakerImage.asset->url
      }
    }`;
    return await client.fetch(query, { id });
  }