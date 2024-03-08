import ClientImage from "@/components/ClientImage";
import { Container } from "@/components/Container";
import { LargeButton } from "@/components/LargeButton";
import Overlay from "@/components/Overlay";
import { defaultImage } from "@/utils/default";
import { EventItem } from "@/utils/types";
import { ArrowRightIcon, FolderOpenIcon } from "@heroicons/react/20/solid";
import moment from "moment";
import Link from "next/link";

const Hero = ({ event }: { event?: EventItem }) => {
  return (
    <div className="relative min-h-[500px]">
      <ClientImage
        fill
        quality={50}
        blurDataURL={
          "https://res.cloudinary.com/tiyeni/image/upload/c_scale,h_678,q_auto:low/v1679808591/2X0A4983.jpg"
        }
        src={event.audience.imageUrl ?? defaultImage.asset.url}
        alt={event.audience.name}
        className="absolute inset-0 h-full w-full object-cover object-top"
      />
      <Overlay/>
      <Container>
        <div className="relative py-40 text-white">
          <div className="my-2 text-lg font-bold md:text-2xl">
            {moment(event.eventDate, "YYYY-MM-DD").isBefore(moment())
              ? "Recent Event:"
              : "Upcoming Event:"}
          </div>
          <div className="my-2 text-2xl font-bold md:text-4xl">
            {event.title}
          </div>
          <div className="my-2 flex items-center">
            <span className="mr-4 text-lg font-bold text-yellow-300 md:text-2xl">
              {event.audience.name}
            </span>
            <FolderOpenIcon className="h-8 text-yellow-300" />
          </div>
        </div>
      </Container>
      <div className="relative  w-full bg-yellow-300">
        <div className="absolute bottom-0 left-0 z-0 w-full bg-yellow-300"></div>
        <Container>
          <div className="block items-center justify-evenly py-6 md:flex md:py-0 lg:justify-between">
            <div className="relative flex-1 p-6 lg:p-0">
              <div className="block items-center justify-between md:flex">
                <DetailItem
                  title={"date"}
                  value={moment(event.eventDate, "YYYY-MM-DD").format("DD MMM")}
                />
                <div className="hidden border-[0.5px] border-black pt-[20%] md:block"></div>
                <DetailItem title={"venue"} value={event.venue.name ?? ""} />
                <div className="hidden border-[0.5px] border-black pt-[20%] md:block"></div>
                <DetailItem title={"time"} value={moment(event.startTime, "HHmm").format("HH:mm")} />
              </div>
              <Link href={`events/${event._id}`} className="mt-8 flex items-end justify-start md:justify-end">
                <LargeButton>Register</LargeButton>
              </Link>
            </div>
            <div className="relative mx-12 hidden w-[30%] pt-[25%] lg:block">
              <ClientImage
                fill
                quality={50}
                blurDataURL={
                  "https://res.cloudinary.com/tiyeni/image/upload/c_scale,h_678,q_auto:low/v1679808591/2X0A4983.jpg"
                }
                src={event.imageUrl ?? defaultImage.asset.url}
                alt={event.title}
                className="absolute !-top-[10%] !h-[110%] w-full object-cover overlay"
              />
              
            </div>

            <div className="relative w-full py-6 md:w-[35%] lg:w-[25%] lg:py-0">
              <div>
                <div className="line-clamp-6">{event.description}</div>
                <Link href={`events/${event._id}`} className="my-4 flex items-center">
                  <span className="mr-2 cursor-pointer font-bold">
                    Read More
                  </span>
                  <ArrowRightIcon className="h-6" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Hero;

interface DetailItemProps {
  title: string;
  value: string;
}
const DetailItem = ({ title, value }: DetailItemProps) => {
  return (
    <div className="my-4">
      <div className="text-2xl font-bold lg:text-3xl">{value}</div>
      <div className="my-2 font-semibold uppercase">{title}</div>
    </div>
  );
};
