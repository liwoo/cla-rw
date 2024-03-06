import client from "./client";
import { Ministries } from "./schema";

export async function getAllMinistries(): Promise<Ministries[]> {
  const query = `*[_type == "ministries"] | order(_updatedAt desc) 
    {
      ...,
      "imageUrl": ministryImage.asset->url,
      ministryImage {
        asset-> {
            ...,
            metadata
        }
     },
    tenets[]->,
    leaders[]->
  }`;
  return await client.fetch(query);
}
