import React, {FC, ReactNode} from "react";
import {H2} from "@/components/typography/H2";
import {Subheading} from "@/components/typography/Subheading";

export const MediaHero: FC<{ children: ReactNode }> = ({children}) => {
    return (
        <div className="relative">
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100"/>
            <div className="mx-auto">
                <div className="relative shadow-xl sm:overflow-hidden sm:rounded-xl">
                    <div className="absolute inset-0">
                        <img
                            className="h-full w-full object-cover"
                            src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
                            alt="People working on laptops"
                        />
                        <div
                            className="absolute inset-0 bg-gradient-to-r from-purple-800 to-indigo-200 mix-blend-multiply"/>
                    </div>
                    <div
                        className="relative lg:w-1/3 py-20 px-6 md:py-24 xl:py-28 flex flex-col gap-y-24 lg:gap-y-32 lg:px-8">
                        <div>
                            <H2>
                                Data to enrich your online business
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
