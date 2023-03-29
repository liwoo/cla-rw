<<<<<<< HEAD
import React, {FC} from "react";
import Image from "next/image";
import {H2} from "@/components/typography/H2";
import {H1} from "@/components/typography/H1";
import {Subheading} from "@/components/typography/Subheading";
import {useNextSanityImage, UseNextSanityImageProps} from "next-sanity-image";
import Image from "next/image";
import {Notices} from "@/sanity/schema";
import {SanityImageAsset} from "sanity-codegen";
import browserClient from "@/sanity/browser-client";
import {Star} from "@/components/icons/Star";
import {ST} from "next/dist/shared/lib/utils";
import Link from "next/link";

type NoticeWithoutImage = Omit<Notices, "coverImage">;
export type NoticeWithImage = NoticeWithoutImage & {
    coverImage: {
        asset: SanityImageAsset
    }
}

export const Notice: FC<{notice: NoticeWithImage}> = ({notice : {title, description, startDate, endDate, coverImage, link}}) => {
    
    return (
        <div className="relative isolate overflow-hidden bg-gray-900 py-8 sm:py-8">
<<<<<<< HEAD
            <div className="image-blend absolute inset-0"></div>
            <Image
                {...useNextSanityImage(browserClient, coverImage)}
                placeholder={"blur"}
                blurDataURL={coverImage.asset.metadata.lqip}
=======
            <Image
            width={2830}
            height={1500}
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
>>>>>>> b4bfdaf (added Image and url for splash)
                alt=""
                className="absolute inset-0 -z-10 h-full w-full object-cover object-top image-filters"
            />
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1097 845"
                aria-hidden="true"
                className="hidden transform-gpu blur-3xl sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:w-[68.5625rem]"
            >
                <path
                    fill="url(#10724532-9d81-43d2-bb94-866e98dd6e42)"
                    fillOpacity=".2"
                    d="M301.174 646.641 193.541 844.786 0 546.172l301.174 100.469 193.845-356.855c1.241 164.891 42.802 431.935 199.124 180.978 195.402-313.696 143.295-588.18 284.729-419.266 113.148 135.13 124.068 367.989 115.378 467.527L811.753 372.553l20.102 451.119-530.681-177.031Z"
                />
                <defs>
                    <linearGradient
                        id="10724532-9d81-43d2-bb94-866e98dd6e42"
                        x1="1097.04"
                        x2="-141.165"
                        y1=".22"
                        y2="363.075"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#776FFF" offset=""/>
                        <stop offset={1} stopColor="#FF4694"/>
                    </linearGradient>
                </defs>
            </svg>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1097 845"
                aria-hidden="true"
                className="absolute left-1/2 -top-52 -z-10 w-[68.5625rem] -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0"
            >
                <path
                    fill="url(#8ddc7edb-8983-4cd7-bccb-79ad21097d70)"
                    fillOpacity=".2"
                    d="M301.174 646.641 193.541 844.786 0 546.172l301.174 100.469 193.845-356.855c1.241 164.891 42.802 431.935 199.124 180.978 195.402-313.696 143.295-588.18 284.729-419.266 113.148 135.13 124.068 367.989 115.378 467.527L811.753 372.553l20.102 451.119-530.681-177.031Z"
                />
                <defs>
                    <linearGradient
                        id="8ddc7edb-8983-4cd7-bccb-79ad21097d70"
                        x1="1097.04"
                        x2="-141.165"
                        y1=".22"
                        y2="363.075"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#776FFF" offset=""/>
                        <stop offset={1} stopColor="#FF4694"/>
                    </linearGradient>
                </defs>
            </svg>
            <Link
                href={link}
                className="absolute p-4 text-center h-16 bg-secondary transform -skew-x-12 origin-bottom-right right-0 -mr-12 pr-20 scale-y-(1)">
                {(startDate && endDate) && <H2>{startDate} - {endDate}</H2> || <H2>Find out More</H2>}
            </Link>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <H1>{title}</H1>
                    <div className="hidden lg:block">
                        <Subheading>
                            {description}
                        </Subheading>
                    </div>
                </div>
            </div>
=======
import React, { FC } from 'react'
import Image from 'next/image'
import { H2 } from '@/components/typography/H2'
import { H1 } from '@/components/typography/H1'
import { Subheading } from '@/components/typography/Subheading'

export const Notice: FC<{ title: string; description?: string }> = ({
  title,
  description,
}) => {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-8 sm:py-8">
      <Image
        width={2830}
        height={1500}
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1097 845"
        aria-hidden="true"
        className="hidden transform-gpu blur-3xl sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:w-[68.5625rem]"
      >
        <path
          fill="url(#10724532-9d81-43d2-bb94-866e98dd6e42)"
          fillOpacity=".2"
          d="M301.174 646.641 193.541 844.786 0 546.172l301.174 100.469 193.845-356.855c1.241 164.891 42.802 431.935 199.124 180.978 195.402-313.696 143.295-588.18 284.729-419.266 113.148 135.13 124.068 367.989 115.378 467.527L811.753 372.553l20.102 451.119-530.681-177.031Z"
        />
        <defs>
          <linearGradient
            id="10724532-9d81-43d2-bb94-866e98dd6e42"
            x1="1097.04"
            x2="-141.165"
            y1=".22"
            y2="363.075"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#776FFF" offset="" />
            <stop offset={1} stopColor="#FF4694" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1097 845"
        aria-hidden="true"
        className="absolute left-1/2 -top-52 -z-10 w-[68.5625rem] -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0"
      >
        <path
          fill="url(#8ddc7edb-8983-4cd7-bccb-79ad21097d70)"
          fillOpacity=".2"
          d="M301.174 646.641 193.541 844.786 0 546.172l301.174 100.469 193.845-356.855c1.241 164.891 42.802 431.935 199.124 180.978 195.402-313.696 143.295-588.18 284.729-419.266 113.148 135.13 124.068 367.989 115.378 467.527L811.753 372.553l20.102 451.119-530.681-177.031Z"
        />
        <defs>
          <linearGradient
            id="8ddc7edb-8983-4cd7-bccb-79ad21097d70"
            x1="1097.04"
            x2="-141.165"
            y1=".22"
            y2="363.075"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#776FFF" offset="" />
            <stop offset={1} stopColor="#FF4694" />
          </linearGradient>
        </defs>
      </svg>
      <div className="scale-y-(1) absolute right-0 -mr-12 h-16 origin-bottom-right -skew-x-12 transform bg-secondary p-4 pr-20 text-center">
        <H2>18 May - 20 May</H2>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <H1>{title}</H1>
          <div className="hidden lg:block">
            <Subheading>{description}</Subheading>
          </div>
>>>>>>> 199ffd7 (added Image and url for splash)
        </div>
      </div>
    </div>
  )
}
