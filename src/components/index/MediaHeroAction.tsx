"use client";
import { MediaHero } from "@/components/cta/MediaHero";
import { LargeButton } from "@/components/LargeButton";
import { ArrowRightIcon, PlayIcon } from "@heroicons/react/20/solid";
import { FC } from "react";
import { Sermon } from "@/sanity/schema";
import { UseNextSanityImageProps, useNextSanityImage } from "next-sanity-image";
import browserClient from "@/sanity/browser-client";
import { defaultImage } from "@/utils/default";
import Link from "next/link";

export const MediaHeroAction: FC<{
  sermon: Sermon;
  imageProps?: UseNextSanityImageProps;
}> = ({ sermon }) => {
  return (
    <div className={"my-8"}>
      <MediaHero
        title={sermon?.title ?? ""}
        description={sermon?.excerpt ?? ""}
        imageProps={useNextSanityImage(
          browserClient,
          sermon.mainImage ?? defaultImage
        )}
        blurDataURL={sermon.mainImage?.asset["metadata"]["lqip"]}
      >
        <LargeButton buttonType="Tertiary">
          <a
            href={sermon.youtubeLink}
            className="bg-primary mr-2 rounded-full p-1"
          >
            <PlayIcon
              className="h-6 w-6 text-white"
              fill="#fff"
              aria-hidden="true"
            />
          </a>
          Watch Sermon
        </LargeButton>
        {/*TODO: Link to their playlist*/}
        <Link
          href="https://youtube.com/playlist?list=PL--fbjZ3XxmuugRMtm_4efcIm4LhAcHz3"
          passHref
          legacyBehavior
        >
          <a target="_blank" rel="noopener noreferrer">
            <LargeButton buttonType="Secondary">
              More Sermons
              <ArrowRightIcon className="ml-2 h-6 w-6" aria-hidden="true" />
            </LargeButton>
          </a>
        </Link>
      </MediaHero>
    </div>
  );
};
