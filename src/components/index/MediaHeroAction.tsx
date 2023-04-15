import {MediaHero} from "@/components/cta/MediaHero";
import {LargeButton} from "@/components/LargeButton";
import {ArrowRightIcon, PlayIcon} from "@heroicons/react/20/solid";
import {FC} from "react";
import {Sermon} from "@/sanity/schema";
import {UseNextSanityImageProps} from "next-sanity-image";
import Link from "next/link";

export const MediaHeroAction: FC<{sermon: Sermon, imageProps?: UseNextSanityImageProps}> = ({sermon, imageProps}) => {
    return (
        <div className={"my-8"}>
            <MediaHero title={sermon.title} description={sermon.excerpt} imageProps={imageProps} blurDataURL={sermon.mainImage.asset["metadata"]["lqip"]}>
            <Link href={sermon.youtubeLink} passHref legacyBehavior>
            <a target="_blank" rel="noopener noreferrer">
                <LargeButton buttonType="Tertiary">
                    <div className="mr-2 p-1 bg-primary rounded-full ">
                        <PlayIcon className="h-6 w-6 text-white" fill="#fff" aria-hidden="true"/>
                    </div>
                    Watch Sermon
                </LargeButton>
                </a>
                </Link>

                {/*TODO: Link to their playlist*/}
                <Link href="https://youtube.com/playlist?list=PL--fbjZ3XxmuugRMtm_4efcIm4LhAcHz3" passHref legacyBehavior>
                <a target="_blank" rel="noopener noreferrer">
                <LargeButton buttonType="Secondary">
                    More Sermons
                    <ArrowRightIcon className="h-6 w-6 ml-2" aria-hidden="true"/>
                </LargeButton>
                </a>
                </Link>
            </MediaHero>
        </div>
    )
}