import { Container } from "@/components/Container";
import { NoticeWithImage } from "@/components/cta/NoticeWithImage";
import { MediaHeroAction } from "@/components/index/MediaHeroAction";
import { PageTitle } from "@/components/PageTitle";
import { Highlights } from "@/components/index/Highlights";
import { FindCell } from "@/components/index/FindCell";
import { BlogSection } from "@/components/index/BlogSection";
import {
  getCallToActions,
  getCells,
  getLatestDevotionals,
  getLatestNotice,
  getLatestSermon,
} from "@/sanity/home-page-data";
import Values from "@/components/index/Values";

async function getData() {
  const notice = await getLatestNotice();
  const sermon = await getLatestSermon();
  return {
    notice,
    sermon,
  };
}

export default async function Page() {
  const { sermon } = await getData();
  const callToActions = await getCallToActions();
  const cells = await getCells();
  const posts = await getLatestDevotionals();
  const welcomeTitle = "Welcome to Christian Life Assembly";
  const welcomeDescription =
    "CLA is a cell based Church that believes in the Bible and the power to change lives through a living relationship with Jesus Christ. Come join us!";
  return (
    <>
      <Container className={"mt-8"}>
        <MediaHeroAction sermon={sermon} />
      </Container>
      <Values />
      <Container>
        <div className="my-4 lg:my-20">
          <PageTitle title={welcomeTitle} description={welcomeDescription} />
        </div>
        <Highlights highlights={callToActions} />
      </Container>
      <FindCell cells={cells} />
      <BlogSection posts={posts} />
    </>
  );
}
