"use client";

import React, { FC } from "react";
import { Card } from "@/components/index/Card";
import { P } from "@/components/typography/P";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { truncateString } from "@/utils/helpers";
import Link from "next/link";
import { CallToAction } from "@/sanity/schema";
import { animated } from "@react-spring/web";
import useInViewSpring from "@/utils/hooks";

export const Highlights: FC<{ highlights: CallToAction[] }> = ({
  highlights,
}) => {
  const [springProps, ref] = useInViewSpring(
    { transform: "translateY(50px)", opacity: 0 },
    { transform: "translateY(0)", opacity: 1 }
  );

  return (
    <animated.div
      style={springProps}
      ref={ref}
      className="my-16 grid grid-cols-1 grid-rows-3 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3"
    >
      <div className="col-span-1 row-span-1">
        {highlights[0] && (
          <Card
            title={highlights[0]?.title ?? ""}
            subtitle={truncateString(highlights[0].description ?? "")}
            image={highlights[0].coverImage}
            href={highlights[0].link}
          />
        )}
      </div>
      <div className="col-span-1 row-span-1">
        {highlights[1] && (
          <Card
            title={highlights[1]?.title ?? ""}
            subtitle={truncateString(highlights[1].description ?? "")}
            image={highlights[1].coverImage}
            href={highlights[1].link}
          />
        )}
      </div>
      <div className="col-span-1 row-span-1 hidden md:row-span-2 md:block lg:row-span-3">
        <div className="subtle-zoom-on-hover relative z-10 h-full overflow-hidden rounded-md bg-[url('https://cdn.sanity.io/images/xq3nx3je/cla/94ceb3fa819b4f22f41dde71ed9d3455937e9ccc-500x500.png')] bg-cover" />
      </div>
      <div className="col-span-1 row-span-1">
        {highlights[2] && (
          <Card
            title={highlights[2]?.title ?? ""}
            subtitle={truncateString(highlights[2].description ?? "")}
            image={highlights[2].coverImage}
            href={highlights[2].link}
          />
        )}
      </div>
      <div className="col-span-1 row-span-1">
        {highlights[3] && (
          <Card
            title={highlights[3]?.title ?? ""}
            subtitle={truncateString(highlights[3].description ?? "")}
            image={highlights[3].coverImage}
            href={highlights[3].link}
          />
        )}
      </div>
      <div className="col-span-1 row-span-1 cursor-pointer p-4 transition-all hover:rounded-md hover:shadow-lg md:col-span-2">
        {highlights[4] && (
          <Link href={highlights[4].link ?? ""}>
            <div className="text-primary flex items-center text-lg font-semibold">
              {highlights[4].title}
              <ArrowRightIcon className="mx-1 h-5 w-5" />
            </div>
            <P>{truncateString(highlights[4].description ?? "", 1000)}</P>
          </Link>
        )}
      </div>
    </animated.div>
  );
};
