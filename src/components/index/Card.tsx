import React from "react";
import Image from "next/image";
import {CardTitle} from "@/components/CardTitle";
import {ArrowRightIcon} from "@heroicons/react/20/solid";

interface CardProps {
    title: string;
    subtitle: string;
    image?: string;
    href?: string;
}
export const Card = ({title, subtitle, image, href}: CardProps) => {
    return (
        <a className="relative cursor-pointer flex items-center space-x-3 pointer-cursor rounded-lg border border-gray-300 bg-white p-2 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400">
            <div className="flex-1 min-w-1/3">
                <Image className="rounded-md"
                width={1000}
                height={1000}
                     src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                     alt="" />
            </div>
            <div className="min-w-0 flex-2 w-2/3">
                <div className="focus:outline-none space-y-4 flex flex-col">
                    <CardTitle title={title}/>
                    <div className="flex">
                        <p className="text-sm text-dark line-clamp-2 w-5/6">{subtitle}</p>
                        <ArrowRightIcon className="h-5 w-5 mx-1 flex-1"/>
                    </div>
                </div>
            </div>
        </a>
    )
}