import React, { FC } from "react";
import { Card } from "@/components/index/Card";
import { P } from "@/components/typography/P";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { CallToAction } from "@/sanity/schema";
import { truncateString } from "@/utils/helpers";
import Link from "next/link";

export const Highlights: FC<{ highlights: CallToAction[] }> = ({ highlights }) => {

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-3 gap-6 my-16 items-stretch">
            <div className="col-span-1 row-span-1">
                    <Card title={highlights[0].title}
                        subtitle={truncateString(highlights[0].description)}
                        image={highlights[0].coverImage} 
                        href={highlights[0].link} />
            
            </div>
            <div className="col-span-1 row-span-1">
             
                    <Card title={highlights[1].title}
                        subtitle={truncateString(highlights[1].description)}
                        image={highlights[1].coverImage} 
                        href={highlights[1].link}/>
          
            </div>
            <div className="col-span-1 row-span-1 md:row-span-2 lg:row-span-3 hidden md:block">
                <div className="h-full overflow-hidden relative rounded-md bg-cover bg-[url('https://cdn.sanity.io/images/xq3nx3je/cla/94ceb3fa819b4f22f41dde71ed9d3455937e9ccc-500x500.png')]" />
            </div>
            <div className="col-span-1 row-span-1">
             
                    <Card title={highlights[2].title}
                        subtitle={truncateString(highlights[2].description)}
                        image={highlights[2].coverImage} 
                        href= {highlights[2].link}
                        />
             
            </div>
            <div className="col-span-1 row-span-1">
                    <Card title={highlights[3].title}
                        subtitle={truncateString(highlights[3].description)}
                        image={highlights[3].coverImage}
                        href= {highlights[3].link} />
              
            </div>
            <div
                className="col-span-1 md:col-span-2 row-span-1 hover:shadow-lg p-4 hover:rounded-md transition-all cursor-pointer">
                <Link href={highlights[4].link}>
                    <a className="text-lg font-semibold flex items-center text-primary">
                        {highlights[4].title}
                        <ArrowRightIcon className="h-5 w-5 mx-1" />
                    </a>
                    <P>
                        {truncateString(highlights[4].description, 1000)}
                    </P>
                </Link>
            </div>
        </div>
    )
}
