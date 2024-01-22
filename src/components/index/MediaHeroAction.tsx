"use client"
import {MediaHero} from "@/components/cta/MediaHero";
import {LargeButton} from "@/components/LargeButton";
import {ArrowRightIcon, PlayIcon} from "@heroicons/react/20/solid";
import {FC} from "react";
import {Sermon} from "@/sanity/schema";
import {UseNextSanityImageProps, useNextSanityImage} from "next-sanity-image";
import browserClient from "@/sanity/browser-client";
import { defaultImage } from "@/utils/default";

export const MediaHeroAction: FC<{sermon: Sermon, imageProps?: UseNextSanityImageProps}> = ({sermon, imageProps}) => {
    return (
        <div className={"my-8"}>
            <MediaHero title={sermon?.title ?? ""} description={sermon?.excerpt ?? ""} imageProps={useNextSanityImage(browserClient, sermon.mainImage ?? defaultImage)} blurDataURL={sermon.mainImage?.asset["metadata"]["lqip"]}>
                <LargeButton buttonType="Tertiary">
                    <a href={sermon.youtubeLink} className="mr-2 p-1 bg-primary rounded-full">
                        <PlayIcon className="h-6 w-6 text-white" fill="#fff" aria-hidden="true"/>
                    </a>
                    Watch Sermon
                </LargeButton>
                {/*TODO: Link to their playlist*/}
                <LargeButton buttonType="Secondary">
                    More Sermons
                    <ArrowRightIcon className="h-6 w-6 ml-2" aria-hidden="true"/>
                </LargeButton>
            </MediaHero>
        </div>
    )
}