import React from "react";
import {BlogSection} from "@/components/index/BlogSection";
import {Container} from "@/components/Container";
import {Notice, NoticeWithImage} from "@/components/cta/Notice";
import {MediaHeroAction} from "@/components/index/MediaHeroAction";
import {PageTitle} from "@/components/PageTitle";
import {Highlights} from "@/components/index/Highlights";
import {FindCell} from "@/components/index/FindCell";
import {MainLayout} from "@/components/layouts/MainLayout";
import {getLatestNotice, getLatestSermon} from "@/sanity/home-page-data";
import {Sermon} from "@/sanity/schema";
import {useNextSanityImage} from "next-sanity-image";
import browserClient from "@/sanity/browser-client";
import {defaultImage, defaultPageDetails} from "@/utils/default";
interface ServerProps {
    notice: NoticeWithImage,
    sermon: Sermon
}

export default function Home({notice, sermon}: Readonly<ServerProps>) {
    const welcomeTitle = "Welcome to Christian Life Assembly";
    const welcomeDescription = "CLA is a cell based Church that believes in the Bible and the power to change lives through a living relationship with Jesus Christ. Come join us!";
    return (
        <MainLayout seo={defaultPageDetails}>
            <Container className={"mt-8"}>
                <Notice notice={notice} />
                <MediaHeroAction sermon={sermon} imageProps={useNextSanityImage(browserClient, sermon.mainImage ?? defaultImage)} />
                <div className="my-4 lg:my-20">
                    <PageTitle title={welcomeTitle} description={welcomeDescription}/>
                </div>
                <Highlights/>
            </Container>
            <FindCell/>
            <BlogSection/>
        </MainLayout>
    )
}

export async function getStaticProps() {
    // do whatever you want to do to get your props
    const notice = await getLatestNotice();
    const sermon = await getLatestSermon();
    return {
        props: {
           notice,
            sermon
        },
    }
}