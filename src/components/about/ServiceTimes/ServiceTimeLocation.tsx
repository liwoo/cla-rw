import React from "react";
import { Container } from "@/components/Container";
import ClientImage from "@/components/ClientImage";

interface ServiceTimeLocationProps {
  time: string;
  location: string;
  imageSrc: string;
}
const ServiceTimeLocation = ({
  time,
  location,
  imageSrc,
}: ServiceTimeLocationProps) => {
  return (
    <div className="relative bg-tertiary">
      <Container className="relative">
        <div className="flex py-20">
          <div>
            <div className="mb-4 text-2xl font-semibold uppercase">Time</div>
            <div className="text-xl font-semibold uppercase md:text-3xl">
              {time}
            </div>
          </div>
          <div className="mx-12 border-l-2 border-black md:mx-20"></div>
          <div>
            <div className="mb-4 text-2xl font-semibold uppercase">Venue</div>
            <div className="max-w-sm">{location}</div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 hidden w-2/5 overflow-hidden pt-[30%] md:block">
          <ClientImage fill src={imageSrc} alt="Coming Soon" />
        </div>
      </Container>
    </div>
  );
};

export default ServiceTimeLocation;
