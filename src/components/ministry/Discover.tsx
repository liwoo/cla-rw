import { Container } from "@/components/Container";
import { PageTitle } from "@/components/PageTitle";
import PersonCard from "@/components/ministry/PersonCard";
import { Tenets } from "@/sanity/schema";
import { MinistryItem } from "@/utils/types";

interface AboutItem {
  title: string;
  description: string;
  more: string;
  tenets: Tenets[]
}
const Discover = ({
  ministry
}: {
  ministry: MinistryItem;
}) => {
  
  return (
    <section className="my-8">
      <PageTitle title={`Discover ${ministry.name}`} />
      <Container>
        <div className="my-8 grid grid-cols-1 gap-16 md:grid-cols-5">
          <div className="col-span-1 md:col-span-3">
            <Title title={ministry.name} />
            <Quote verse={ministry.description} />
            <AboutList items={ministry.tenets} />
          </div>
          <div className="col-span-1 md:col-span-2 ">
            <PersonCard
              img={ministry.leader.imageUrl}
              name={ministry.leader.name}
              position={ministry.leader.title}
              about={
                ministry.leader.description
              }
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Discover;

const Title = ({ title }: { title: string }) => {
  return (
    <>
      <div className="font-bold md:text-xl">What is {title} about?</div>
    </>
  );
};

const Quote = ({ verse }: { verse: string }) => {
  return (
    <div className="my-8">
      <div className="text-primary text-4xl">&ldquo;</div>
      <div className="-mt-8 px-4">
        {verse}
        <br />
      </div>
      <div className="text-primary -mt-8 text-right text-4xl ">&rdquo;</div>
    </div>
  );
};

const AboutList = ({ items }: { items: AboutItem[] }) => {
  return (
    <>
      {items.map((item) => (
        <div
          className="border-muted border-x border-t p-4 last:border-b"
          key={item.title}
        >
          <div className="flex">
            <span className="text-secondary mr-2 font-bold">
              {item.title}:{" "}
            </span>{" "}
            <span className="font-semibold"> {item.description}</span>
          </div>
          <div>{item.more}</div>
        </div>
      ))}
    </>
  );
};
