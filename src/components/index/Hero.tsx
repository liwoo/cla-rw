"use client";

import { Container } from "@/components/Container";
import { MediaHeroAction } from "@/components/index/MediaHeroAction";
import { Sermon } from "@/sanity/schema";
import {
  HeartIcon,
  RocketLaunchIcon,
  UserGroupIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";
import { ForwardRefExoticComponent, useEffect, useState } from "react";
import { animated } from "@react-spring/web";
import useInViewSpring from "@/utils/hooks";

function Value(value: {
  onMobile?: boolean;
  title: string;
  description: string;
  icon: ForwardRefExoticComponent<
    React.PropsWithoutRef<React.SVGProps<SVGSVGElement>>
  >;
}) {
  return (
    <Link
      href="/about"
      key={value.title}
      className="from-secondary/5 to-secondary/10 hover:from-secondary/90 hover:to-secondary group-transition-all group flex flex-row-reverse items-center justify-between rounded bg-gradient-to-r p-4 duration-500 ease-in-out lg:flex-col lg:items-start lg:justify-start"
    >
      <div className="bg-primary/5 group-hover:bg-tertiary/5 rounded-md p-2 ring-1 ring-white/10">
        <value.icon
          className="text-primary h-6 w-6 text-center group-hover:text-white lg:text-left"
          aria-hidden="true"
        />
      </div>
      <dt className="text-primary mt-4 text-lg font-semibold group-hover:text-white">
        {value.onMobile && <h3 className="text-sm text-slate-800">We are</h3>}
        {value.title}
      </dt>
      <dd className="text-secondary mt-2 hidden leading-7 group-hover:text-slate-200 xl:block">
        {value.description}
      </dd>
    </Link>
  );
}

function CarouselValues({ values }: { values: Value[] }) {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentValue((currentValue + 1) % values.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentValue, values.length]);

  return (
    <div>
      <Value {...values[currentValue]} onMobile={true} />
      <hr className="border-primary scale-x-animation border-2" />
    </div>
  );
}

interface Value {
  title: string;
  description: string;
  icon: ForwardRefExoticComponent<
    React.PropsWithoutRef<React.SVGProps<SVGSVGElement>>
  >;
}

export default function HomeHero({ sermon }: { sermon: Sermon }) {
  const values: Value[] = [
    {
      title: "Christ Centered",
      description: "Christ Alone through faith alone by grace alone",
      icon: HeartIcon,
    },
    {
      title: "Cell based",
      description:
        "Do not stop meeting together, as some are in the habit of doing.",
      icon: UserGroupIcon,
    },
    {
      title: "Transformational",
      description: "But He came to give us life and life in abundance.",
      icon: RocketLaunchIcon,
    },
  ];

  const [springProps, ref] = useInViewSpring(
    { transform: "translateY(100px)", opacity: 0 },
    { transform: "translateY(0)", opacity: 1 }
  );

  return (
    <Container className={"mt-8 flex max-w-[98rem] flex-col lg:flex-row"}>
      <div className="bg-tertiary hidden w-full rounded-xl p-4 md:mt-8 lg:m-8 lg:block lg:w-1/4">
        <dl className="lg:gap-y-auto flex h-full flex-col gap-y-2 lg:justify-center lg:pt-2 xl:justify-between">
          {values.map((value) => {
            return (
              <animated.div key={value.title} style={springProps} ref={ref}>
                <Value {...value} />
              </animated.div>
            );
          })}
        </dl>
      </div>
      <div className="mt-2 w-full lg:hidden">
        <CarouselValues values={values} />
      </div>
      <div className="w-full lg:w-3/4">
        <MediaHeroAction sermon={sermon} />
      </div>
    </Container>
  );
}
