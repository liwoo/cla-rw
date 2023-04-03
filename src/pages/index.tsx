import React from "react";
import {SEO, SEOProps} from "@/components/SEO";
import {BlogSection} from "@/components/index/BlogSection";
import {Container} from "@/components/Container";
import {Notice, NoticeWithImage} from "@/components/cta/Notice";
import {MediaHeroAction} from "@/components/index/MediaHeroAction";
import {PageTitle} from "@/components/PageTitle";
import {Highlights} from "@/components/index/Highlights";
import {FindCell} from "@/components/index/FindCell";
import {getLatestNotice, getLatestSermon} from "@/sanity/home-page-data";
import { MainLayout } from "@/components/layouts/MainLayout";
import browserClient from "@/sanity/browser-client";
import { Sermon } from "@/sanity/schema";
import { useNextSanityImage } from "next-sanity-image";



const pageDetails: SEOProps = {
  title: 'Welcome to Christian Life Assembly',
  description:
    'CLA is a cell based Church that believes in the Bible and the power to change lives through a living relationship with Jesus Christ. Come join us!',
  image: 'https://i.ytimg.com/vi/VKcrBGDRyVc/maxresdefault.jpg',
  url: 'https://clarwanda.org/',
  keywords: [
    'Christian Life Assembly',
    'CLA',
    'Rwanda',
    'Church',
    'Cell Based Church',
    'Christian',
    'Jesus',
    'Christ',
    'Bible',
    'Bible Study',
    'Bible Study Group',
    'Bible Study Cell',
  ],
}

interface ServerProps {
    notice: NoticeWithImage,
    sermon: Sermon
}

export default function Home({notice, sermon}: ServerProps) {
    const welcomeTitle = "Welcome to Christian Life Assembly";
    const welcomeDescription = "CLA is a cell based Church that believes in the Bible and the power to change lives through a living relationship with Jesus Christ. Come join us!";
    return (
        <MainLayout seo={pageDetails}>
            <Container className={"mt-8 md:mt-16"}>
                <Notice notice={notice} />
                <MediaHeroAction sermon={sermon} imageProps={useNextSanityImage(browserClient, sermon.mainImage)} />
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