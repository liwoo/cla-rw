import {createClient} from "@sanity/client";

const sanityConfig = {
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: process.env.SANITY_DATASET,
    apiVersion: process.env.SANITY_API_VERSION,
    useCdn: process.env.SANITY_USE_CDN === 'true',
};

const client = createClient(sanityConfig);

export default client;