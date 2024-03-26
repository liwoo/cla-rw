import { createClient } from "@sanity/client";

const sanityConfig = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  apiVersion: "2021-03-25",
  useCdn: false,
};

const browserClient = createClient(sanityConfig);

export default browserClient;
