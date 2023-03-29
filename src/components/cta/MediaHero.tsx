import React, {FC, ReactNode} from "react";
import Image from "next/image";
import {H2} from "@/components/typography/H2";
import {Subheading} from "@/components/typography/Subheading";


export const MediaHero: FC<{ children: ReactNode }> = ({children}) => {
    return (
        <div className="relative">
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100"/>
            <div className="mx-auto">
                <div className="relative shadow-xl sm:overflow-hidden sm:rounded-xl">
                    <div className="absolute inset-0">
                        <Image
                            className="h-full w-full object-cover"
                            src="https://res.cloudinary.com/dpbuspblx/image/upload/v1679958908/cla-cta/sunday_sermon_lzcko2.jpg"
                            alt="People working on laptops"
                            width={1920}
                            height={1080}
                        />
                        <div
                            className="absolute inset-0 bg-gradient-to-r from-purple-800 to-indigo-200 mix-blend-multiply"/>
                    </div>
                    <div
                        className="relative lg:w-1/3 py-20 px-6 md:py-24 xl:py-28 flex flex-col gap-y-24 lg:gap-y-32 lg:px-8">
                        <div>
                            <H2>
                                Enjoy this weeks sermon
                            </H2>
                            <Subheading>
                                Your word is a lamp to my feet and a light to my path.
                            </Subheading>
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
