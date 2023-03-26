import {MediaHero} from "@/components/cta/MediaHero";
import {LargeButton} from "@/components/LargeButton";
import {ArrowRightIcon, PlayIcon} from "@heroicons/react/20/solid";
import {FC} from "react";

export const MediaHeroAction: FC = () => {
    return (
        <div className={"my-8"}>
            <MediaHero>
                <LargeButton buttonType="Tertiary">
                    <div className="mr-2 p-1 bg-primary rounded-full ">
                        <PlayIcon className="h-6 w-6 text-white" fill="#fff" aria-hidden="true"/>
                    </div>
                    Watch Sermon
                </LargeButton>
                <LargeButton buttonType="Secondary">
                    More Sermons
                    <ArrowRightIcon className="h-6 w-6 ml-2" aria-hidden="true"/>
                </LargeButton>
            </MediaHero>
        </div>
    )
}