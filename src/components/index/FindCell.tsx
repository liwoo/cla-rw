import Image from "next/image";
import { PageTitle } from "@/components/PageTitle";
import { Subheading } from "@/components/typography/Subheading";
import { Container } from "@/components/Container";
import { LargeButton } from "@/components/LargeButton";
import { CallToAction, Cell, ZoneSection } from "@/sanity/schema";
import { FC } from "react";
import browserClient from "@/sanity/browser-client";
import { useNextSanityImage } from "next-sanity-image";


interface cellProps {
    cell: CallToAction,
    cells: ZoneSection[]
}


export const FindCell = ({ cell, cells }: cellProps) => {
    const cellBased = "Cell based churches are small groups of people who meet together regularly to worship, pray, and study the Bible.";
    return (
        <section className="bg-surface-dark py-12">
            <Container>
                <PageTitle title={cell.title} />
                <div className="flex flex-col md:flex-row flex-wrap justify-between my-16">
                    <div className="w-full md:w-1/2 lg:w-2/5">
                        <Image
                            {...useNextSanityImage(browserClient, cell.coverImage)}
                            width={720}
                            height={480}
                            className="w-full aspect-square lg:aspect-[4/3] object-cover object-middle rounded-md" alt="Cell Group" />

                    </div>
                    <div className="w-full md:w-1/2 lg:w-3/5 md:px-12 lg:px-20">
                        <Subheading classOverrides="text-dark my-8">
                            {cellBased}
                        </Subheading>
                        <h3 className="font-bold my-4">Where do you Stay?</h3>
                        <div className={"flex flex-col lg:flex-row items-start lg:items-center mb-8 lg:mb-0 lg:gap-x-2 xl:gap-x-4"}>
                            <div className={"w-full lg:w-1/2"}>
                                <label htmlFor="location"
                                    className="block text-sm font-medium text-gray-700">Location</label>
                                <select id="location" name="location"
                                    className="mt-1 block w-full rounded-md border-gray-300 my-4 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                    {
                                        cells.map(cell => (
                                            <option
                                                key={cell._id}
                                                selected={cell.zoneSectionName === 'Nyamirambo'}>
                                                {cell.zoneSectionName}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <input
                                type="email"
                                name="first-name"
                                placeholder={"Enter your email address"}
                                id="first-name"
                                autoComplete="given-name"
                                className="block w-full lg:w-1/2 rounded-md border-0 py-2.5 text-base mt-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                        <LargeButton buttonType="Secondary">
                            Find Cell Group
                        </LargeButton>
                    </div>
                </div>
            </Container>
        </section>
    )
}