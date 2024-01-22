import React, {FC, ReactNode} from "react";
import Image from "next/image";
import {H2} from "@/components/typography/H2";
import {Subheading} from "@/components/typography/Subheading";;
import {truncateString} from "@/utils/helpers";
import {SanityAsset} from "@sanity/image-url/lib/types/types";
import {useNextSanityImage, UseNextSanityImageProps} from "next-sanity-image";
import client from "@/sanity/client";
import {H1} from "@/components/typography/H1";

interface MediaHeroProps {
    children: ReactNode;
    title: string;
    description: string;
    blurDataURL?: string;
    imageProps?: UseNextSanityImageProps;
}

export const MediaHero: FC<MediaHeroProps> = ({children, title, description, imageProps, blurDataURL}) => {
    return (
        <div className="relative">
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100"/>
            <div className="mx-auto">
                <div className="relative shadow-xl sm:overflow-hidden sm:rounded-xl">
                    <div className="absolute inset-0">
                        <Image
                            {...imageProps}
                            priority={true}
                            placeholder={"blur"}
                            blurDataURL={blurDataURL}
                            className="h-full w-full object-cover"
                            alt="People working on laptops"
                        
                        />
                        <div
                            className="absolute inset-0 bg-gradient-to-r from-purple-800 to-indigo-200 mix-blend-multiply"/>
                    </div>
                    <div
                        className="relative lg:w-1/2 py-20 px-6 md:py-24 xl:py-28 flex flex-col gap-y-24 lg:gap-y-32 lg:px-8">
                        <div>
                            <H1>{title}</H1>
                            <Subheading classOverrides={"hidden lg:block text-white"}>{truncateString(description, 170)}</Subheading>
                        </div>
                        <div className="mt-10 flex flex-col space-y-4 md:space-y-0 md:space-x-4 md:flex-row">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
