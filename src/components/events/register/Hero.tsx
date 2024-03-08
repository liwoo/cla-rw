import ClientImage from "@/components/ClientImage";
import { Container } from "@/components/Container";
import Overlay from "@/components/Overlay";
import { defaultImage } from "@/utils/default";
import { EventItem } from "@/utils/types";
import { CalendarIcon, CheckIcon, ClockIcon } from "@heroicons/react/20/solid";
import moment from "moment";
import React, { ReactNode } from "react";

const Hero = ({event}:{event: EventItem}) => {
  
  return (
    <div className="relative h-[550px]">
      <ClientImage
        fill
        quality={50}
        blurDataURL={
          "https://res.cloudinary.com/tiyeni/image/upload/c_scale,h_678,q_auto:low/v1679808591/2X0A4983.jpg"
        }
        src={event.imageUrl ?? defaultImage.asset.url}
        alt={event.title}
        className="absolute inset-0 h-full w-full object-cover object-top"
      />
      <Overlay/>
      <Container className="h-full">
        <div className="relative flex h-full items-end py-8 md:py-16 text-white">
          <div>
            <div className="my-2 text-xl md:text-4xl font-bold">
              {event.title}
            </div>
            <div className="my-2 md:my-4 flex items-center md:text-2xl">
              <div className="mr-8 my-2 flex items-center">
                <CalendarIcon className="mr-2 w-8" /> 21 May 2021
              </div>
              <div className="flex my-2 items-center">
                <ClockIcon className="mr-2 w-8" />
                {moment(event.startTime, "HHmm").format("HH:mm")} - {moment(event.endTime, "HHmm").format("HH:mm")}
              </div>
            </div>
            <div className="hidden md:block">
              <div className="grid grid-cols-3 gap-8">
                {event.topics.map((topic) => (
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
