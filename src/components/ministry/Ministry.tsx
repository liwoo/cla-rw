import Hero from "@/components/ministry/Hero";
import { Container } from "@/components/Container";
import { NoticeWithoutImage } from "@/components/cta/NoticeWithoutImage";
import Discover from "@/components/ministry/Discover";
import Testimonials from "@/components/ministry/Testimonials";
import { MinistryItem} from "@/utils/types";
import { Notices } from "@/sanity/schema";

export const Ministry = ({ ministry,notice }: { ministry: MinistryItem,notice:Notices }) => {
  
  const heroImg = ministry.imageUrl;
  return (
    <div>
      <Hero img={heroImg} />
      <Container className="my-16">
        <NoticeWithoutImage notice={notice} />
      </Container>
      <Discover ministry={ministry} />
      <Testimonials testimonials={ministry.testimonials}/>
    </div>
  );
};

export default Ministry;
