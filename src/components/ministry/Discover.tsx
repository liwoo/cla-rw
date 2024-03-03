import { Container } from "@/components/Container";
import { PageTitle } from "@/components/PageTitle";
import PersonCard from "@/components/ministry/PersonCard";

interface AboutItem {
  title: string;
  description: string;
  more: string;
}
const Discover = () => {
  const items: AboutItem[] = Array.from(Array(5).keys()).map(() => ({
    title: "Prayer",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    more: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae velit quidem veritatis earum! A illo temporibus error impedit voluptatem illum ducimus aut officiis obcaecati alias, amet suscipit quod autem incidunt.",
  }));
  return (
    <section className="my-8">
      <PageTitle title="Discover the Church" />
      <Container>
        <div className="my-8 grid grid-cols-1 md:grid-cols-5 gap-16">
          <div className="col-span-1 md:col-span-3">
            <Title />
            <Quote />
            <AboutList items={items} />
          </div>
          <div className="col-span-1 md:col-span-2 ">
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

const Title = () => {
  return (
    <>
      <div className="mb-4 text-xl md:text-3xl font-bold">
        An overview about women ministry
      </div>
      <div className="md:text-xl font-bold">
        What is intercessory ministry about?
      </div>
    </>
  );
};

const Quote = () => {
  return (
    <div className="my-8">
      <div className="text-4xl text-primary">&ldquo;</div>
      <div className="-mt-8 px-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
        accusantium incidunt sequi aut cum repudiandae similique consectetur
        architecto in rerum corrupti accusamus, deserunt error natus, quia
        tempore quibusdam, at ad.
        <br />
        <span className="mt-4 inline-block font-semibold">1 Tim 6</span>
      </div>
      <div className="-mt-8 text-right text-4xl text-primary ">&rdquo;</div>
    </div>
  );
};

const AboutList = ({ items }: { items: AboutItem[] }) => {
  return (
    <>
      {items.map((item) => (
        <div
          className="border-x border-t border-muted p-4 last:border-b"
          key={item.title}
        >
          <div className="flex">
            <span className="mr-2 font-bold text-secondary">
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
