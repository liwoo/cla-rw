"use client";

import {
  LifebuoyIcon,
  NewspaperIcon,
  PhoneIcon,
} from "@heroicons/react/20/solid";
import BackgroundImage from "@/components/about/ServiceTimes/BackgroundImage";
import SubMenu from "@/components/SubMenu";
import ItemDetailsCard from "@/components/about/ServiceTimes/ItemDetailsCard";
import ServiceTimeLocation from "@/components/about/ServiceTimes/ServiceTimeLocation";
import { Container } from "@/components/Container";
import { useState } from "react";

export interface ChurchService {
  index: number;
  name: string;
  start_time: string;
  venue: string;
  description: string;
  icon: any;
}

const cards: ChurchService[] = [
  {
    index: 0,
    name: "Adults",
    start_time: "10:20AM",
    venue: "Chichiri",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod possimus sit modi rerum exercitationem quaerat atque tenetur ullam.",
    icon: PhoneIcon,
  },
  {
    index: 1,
    name: "Technical Support",
    start_time: "10:20AM",
    venue: "Nyambadwe",
    description:
      "Quod possimus sit modi rerum exercitationem quaerat atque tenetur ullam.",
    icon: LifebuoyIcon,
  },
  {
    index: 2,
    name: "Media Inquiries",
    start_time: "10:20AM",
    venue: "Manja",
    description:
      "Ratione et porro eligendi est sed ratione rerum itaque. Placeat accusantium impedit eum odit.",
    icon: NewspaperIcon,
  },
];

const ServiceTimes = () => {
  const [active, setActive] = useState<ChurchService>(cards[0] ?? null);
  const backgroungImg =
    "https://res.cloudinary.com/c99/image/upload/v1704981714/Placeholders/Church-Growth-Magazine-Article-Images-1-1280x640.png";
  const image =
    "https://res.cloudinary.com/tiyeni/image/upload/v1679808591/2X0A4983.jpg";
  return (
    <>
      <div className="relative isolate overflow-hidden bg-gray-600 py-16 ">
        <BackgroundImage src={backgroungImg} alt="Background" />
        <Container className="relative flex min-h-[450px] flex-col justify-between">
          <SubMenu
            items={cards}
            active={active}
            onItemClick={(item: ChurchService) => setActive(item)}
          />
          <ItemDetailsCard item={active} />
        </Container>
      </div>
      <ServiceTimeLocation
        time={active?.start_time}
        location={active?.venue}
        imageSrc={image}
      />
    </>
  );
};

export default ServiceTimes;
