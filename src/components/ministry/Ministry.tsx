import Hero from "@/components/ministry/Hero";
import { Container } from "@/components/Container";
import { NoticeWithoutImage } from "@/components/cta/NoticeWithoutImage";
import Discover from "@/components/ministry/Discover";
import Testimonials from "@/components/ministry/Testimonials";
import { getLatestNotice } from "@/sanity/home-page-data";
import { defaultImage } from "@/utils/default";
import { MinistryItem } from "@/utils/types";

export const Ministry = async ({ ministry }: { ministry: MinistryItem }) => {
  const notice = await getLatestNotice();
  const heroImg = ministry.imageUrl;
  
  console.log(ministry);
  return (
    <div>
      <Hero img={heroImg} />
      <Container className="my-16">
        <NoticeWithoutImage notice={notice} />
      </Container>
      <Discover ministry={ministry} />
      <Testimonials />
    </div>
  );
};

export default Ministry;
