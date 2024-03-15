import { Container } from "@/components/Container";
import { PageTitle } from "@/components/PageTitle";
import PersonCard from "@/components/ministry/PersonCard";

interface AboutItem {
  title: string;
  description: string;
  more: string;
}
const Discover = ({
  details: { title, more, description },
}: {
  details: AboutItem;
}) => {
  const items: AboutItem[] = Array.from(Array(5).keys()).map(() => ({
    title: "Prayer",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    more: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae velit quidem veritatis earum! A illo temporibus error impedit voluptatem illum ducimus aut officiis obcaecati alias, amet suscipit quod autem incidunt.",
  }));
  return (
    <section className="my-20">
      <PageTitle title={`Discover ${title}`} />
      <Container className="relative">
        <div className="my-8 grid grid-cols-1 gap-16 md:grid-cols-5">
          <div className="col-span-1 md:col-span-3">
            <Title title={title} />
            <Quote verse={more} />
            <AboutList items={items} />
          </div>
          <div className="sticky col-span-1 md:col-span-2">
            <PersonCard
              img={
                "https://res.cloudinary.com/c99/image/upload/v1705410832/Placeholders/Screenshot_2024-01-16_at_15.11.21.png"
              }
              name={"Peace Kampingo"}
              position={"Chair Person"}
              about={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore quae tenetur beatae veritatis voluptate assumenda minima quis delectus, laborum fugit architecto id aspernatur repellat iusto similique corporis officiis dolorum! Nesciunt?"
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
