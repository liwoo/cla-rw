import { PageTitle } from "@/components/PageTitle";
import FindSermons from "@/components/sermons/FindSermons";
import Hero from "@/components/sermons/Hero";
import RecentSermons from "@/components/sermons/RecentSermons";
import { getAllSermons, getLatestSermon } from "@/sanity/sermons";

const Sermons = async () => {
  const sermon = await getLatestSermon();
  const sermons=await getAllSermons()
  return (
    <div className="pt-16">
      <PageTitle title={"Sermons"} />
      <Hero sermon={sermon}/>
      <RecentSermons sermons={sermons}/>
      {/* <FindSermons /> */}
    </div>
  );
};

export default Sermons;
