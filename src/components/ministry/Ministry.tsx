import Hero from "@/components/ministry/Hero";
import Discover from "@/components/ministry/Discover";
import Testimonials from "@/components/ministry/Testimonials";
import { MinistryItem} from "@/utils/types";


export const Ministry = ({ ministry }: { ministry: MinistryItem }) => {
  
  const heroImg = ministry.imageUrl;
  return (
    <div>
      <Hero img={heroImg} />
      <Discover ministry={ministry} />
      <Testimonials testimonials={ministry.testimonials}/>
    </div>
  );
};

export default Ministry;
