import client from "./client";
import { Ministries } from "./schema";

export async function getAllMinistries(): Promise<Ministries[]> {
  const query = `*[_type == "ministries"] | order(_updatedAt desc)`;
  return await client.fetch(query);
}
