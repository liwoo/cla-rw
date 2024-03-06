import Hero from "@/components/ministry/Hero";
import { Container } from "@/components/Container";
import { NoticeWithoutImage } from "@/components/cta/NoticeWithoutImage";
import Discover from "@/components/ministry/Discover";
import Testimonials from "@/components/ministry/Testimonials";
import { Ministries } from "@/sanity/schema";
import { getLatestNotice } from "@/sanity/home-page-data";
import { defaultImage } from "@/utils/default";

export const Ministry = async ({ ministry }: { ministry: Ministries }) => {
  const notice = await getLatestNotice();
  const heroImg = ministry.imageUrl ?? defaultImage.asset.url
  const details = {
    title: ministry.name ?? "Not Found",
    description: ministry.description ?? "Not Found",
    more: ministry.minstryVerse ?? "Not Found",
    tenets:ministry.tenets
  };

  return (
    <div>
      <Hero img={heroImg} />
      <Container className="my-16">
        <NoticeWithoutImage notice={notice} />
      </Container>
      <Discover details={details} />
      <Testimonials />
    </div>
  );
};

export default Ministry;
