import ClientImage from "@/components/ClientImage";
import { Container } from "@/components/Container";
import { CalendarIcon, CheckIcon, ClockIcon } from "@heroicons/react/20/solid";
import React, { ReactNode } from "react";

const Hero = () => {
  const topics: string[] = Array.from(Array(6).keys()).map(
    () => "Conference Topic"
  );
  return (
    <div className="relative h-[550px]">
      <ClientImage
        fill
        quality={50}
        blurDataURL={
          "https://res.cloudinary.com/tiyeni/image/upload/c_scale,h_678,q_auto:low/v1679808591/2X0A4983.jpg"
        }
        src="https://res.cloudinary.com/c99/image/upload/v1704981714/Placeholders/Church-Growth-Magazine-Article-Images-1-1280x640.png"
        alt="Coming Soon"
        className="absolute inset-0 h-full w-full object-cover object-top"
      />
      <Container className="h-full">
        <div className="relative flex h-full items-end py-8 md:py-16 text-white">
          <div>
            <div className="my-2 text-xl md:text-4xl font-bold">
              Mens Conference
            </div>
            <div className="my-2 md:my-4 flex items-center md:text-2xl">
              <div className="mr-8 my-2 flex items-center">
                <CalendarIcon className="mr-2 w-8" /> 21 May 2021
              </div>
              <div className="flex my-2 items-center">
                <ClockIcon className="mr-2 w-8" />
                08:00 - 13:30
              </div>
            </div>
            <div className="hidden md:block">
              <div className="grid grid-cols-3 gap-8">
                {topics.map((topic) => (
                  <TopicItem key={topic}>{topic}</TopicItem>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;

const TopicItem = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex items-center">
      <CheckIcon className="mr-2 h-6" />
      <div className="md:text-xl">{children}</div>
    </div>
  );
};
