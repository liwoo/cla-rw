import { Container } from "@/components/Container";
import SermonCard from "@/components/sermons/SermonCard";

const RecentSermons = () => {
  const recentSermons = Array.from(Array(2).keys()).map(() => ({
    title: "Sermon Title",
    img: "https://res.cloudinary.com/c99/image/upload/v1704981714/Placeholders/Church-Growth-Magazine-Article-Images-1-1280x640.png",
    book: "2 Timothy 5",
    date: "20, June 2021",
  }));
  return (
    <section className="bg-surface py-8">
      <Container>
        <div className="text-2xl font-bold">Recent Sermons</div>
        {recentSermons.map((sermon) => (
          <SermonCard key={sermon.title} className="my-8" {...sermon} />
        ))}
      </Container>
    </section>
  );
};

export default RecentSermons;
