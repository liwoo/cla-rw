import ClientImage from "@/components/ClientImage";
import { LargeButton } from "@/components/LargeButton";
import { P } from "@/components/typography/P";
import { defaultImage } from "@/utils/default";
import { EventItem } from "@/utils/types";
import { BookOpenIcon } from "@heroicons/react/20/solid";
import moment from "moment";

const EventCard = ({ event }: { event: EventItem }) => {
  return (
    <div>
      <div className="flex">
        <Date
          date={moment(event.eventDate, "YYYY-MM-DD").format("DD")}
          month={moment(event.eventDate, "YYYY-MM-DD").format("MMM")}
        />
        <About
          name={event.title ?? ""}
          startTime={`${event.startTime}`}
          endTime={`${event.endTime}`}
          type={event.eventCategory.title}
          description={event.description ?? ""}
        />
      </div>
      <div className="relative my-8 w-full overflow-hidden rounded-lg pt-[60%]">
        <ClientImage
          fill
          quality={50}
          blurDataURL={
            "https://res.cloudinary.com/tiyeni/image/upload/c_scale,h_678,q_auto:low/v1679808591/2X0A4983.jpg"
          }
          src={event.imageUrl ?? defaultImage.asset.url}
          alt={event.title}
          className="absolute !-top-[10%] !h-[110%] w-full object-cover"
        />
        <div className="relative flex items-end p-8">
          <div className="flex items-center text-white">
            <span className="mr-2 text-lg font-bold">
              {event.audience.name}
            </span>{" "}
            <BookOpenIcon className="h-6" />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end">
        <div className="mr-4 text-xl font-semibold text-secondary">
          23 Places Left
        </div>
        <div>
          <LargeButton>Register</LargeButton>
        </div>
      </div>
    </div>
  );
};

export default EventCard;

interface DateProps {
  date: string;
  month: string;
}
const Date = ({ date, month }: DateProps) => {
  return (
    <div className="flex flex-col items-center justify-center rounded-md border border-muted p-4 px-10">
      <div className="mb-4 text-3xl text-secondary">{date}</div>
      <div className="uppercase text-secondary">{month}</div>
    </div>
  );
};

interface AboutProps {
  name: string;
  startTime: string;
  endTime: string;
  type: string;
  description: string;
}
const About = ({ name, startTime, endTime, type, description }: AboutProps) => {
  return (
    <div className="w-full px-6">
      <div className="block justify-between lg:flex">
        <div className="text-lg font-bold">{name}</div>
        <div className="font-semibold md:text-xl">
          {startTime} - {endTime}
        </div>
      </div>
      <div className="my-2 font-semibold text-secondary md:text-lg">{type}</div>
      <div className="line-clamp-2">
        <P>{description}</P>
      </div>
    </div>
  );
};
