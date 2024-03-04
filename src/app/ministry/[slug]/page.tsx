import { NotFound } from "@/components/NotFound";
import Ministry from "@/components/ministry/Ministry";
import { getAllMinistries } from "@/sanity/ministries";
import { slugify } from "@/utils/helpers";
import { PathsParams } from "@/utils/types";

export default async function Page({ params }: Readonly<PathsParams>) {
  const allMinistries = await getAllMinistries();
  const ministry = allMinistries.find(
    (ministry) => slugify(ministry.name ?? "not found") === params.slug
  );

  if (!ministry) return <NotFound />;
  return <Ministry ministry={ministry} />;
}
