import React, {FC} from "react";
import {Card} from "@/components/index/Card";
import {P} from "@/components/typography/P";
import {ArrowRightIcon} from "@heroicons/react/20/solid";

export const Highlights: FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-3 gap-6 my-16 items-stretch">
            <div className="col-span-1 row-span-1">
                <Card title="Some Cool Title"
                      subtitle="Some other boring subtitle over here which is supposed to truncate after 2 lines, maybe"/>
            </div>
            <div className="col-span-1 row-span-1">
                <Card title="Some Cool Title" subtitle="Some other boring subtitle over here"/>
            </div>
            <div className="col-span-1 row-span-1 md:row-span-2 lg:row-span-3 hidden md:block">
                <div className="h-full overflow-hidden relative rounded-md bg-cover bg-[url('https://images.unsplash.com/photo-1658273114791-6942e762fd78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')]" />
            </div>
            <div className="col-span-1 row-span-1">
                <Card title="Some Cool Title" subtitle="Some other boring subtitle over here"/>
            </div>
            <div className="col-span-1 row-span-1">
                <Card title="Some Cool Title" subtitle="Some other boring subtitle over here"/>
            </div>
            <div
                className="col-span-1 md:col-span-2 row-span-1 hover:shadow-lg p-4 hover:rounded-md transition-all cursor-pointer">
                <a className="text-lg font-semibold flex items-center text-primary">
                    Become a Christian
                    <ArrowRightIcon className="h-5 w-5 mx-1"/>
                </a>
                <P>
                    This can stand, from the other options or services that the church provides. It agrees with the main
                    goal of a church, to bring more souls to Christ. Provide some description, not more that 3 lines, to
                    prevent an overlap of this section.
                </P>
            </div>
        </div>
    )
}