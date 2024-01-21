import {Container} from "@/components/Container";
import {Notice} from "@/components/cta/Notice";
import {MediaHeroAction} from "@/components/index/MediaHeroAction";
import browserClient from "@/sanity/browser-client";
import {defaultImage} from "@/utils/default";
import {PageTitle} from "@/components/PageTitle";
import {Highlights} from "@/components/index/Highlights";
import {FindCell} from "@/components/index/FindCell";
import {BlogSection} from "@/components/index/BlogSection";

export default function Page() {
    const welcomeTitle = "Welcome to Christian Life Assembly";
    const welcomeDescription = "CLA is a cell based Church that believes in the Bible and the power to change lives through a living relationship with Jesus Christ. Come join us!";
    return (
        <>
            <Container className={"mt-8"}>
                {/*<Notice notice={notice} />*/}
                {/*<MediaHeroAction sermon={sermon} imageProps={useNextSanityImage(browserClient, sermon.mainImage ?? defaultImage)} />*/}
                <div className="my-4 lg:my-20">
                    <PageTitle title={welcomeTitle} description={welcomeDescription}/>
                </div>
                <Highlights/>
            </Container>
            <FindCell/>
            <BlogSection/>
        </>
    )
}