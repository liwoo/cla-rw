"use client";
import { PageTitle } from "@/components/PageTitle";
import EventCard from "./EventCard";
import { Container } from "@/components/Container";
import { LargeButton } from "@/components/LargeButton";
import SubMenu from "@/components/SubMenu";
import { EventItem, MenuItem } from "@/utils/types";
import { useState } from "react";
import { eventsFilters } from "@/data/ui";

const EventsList = () => {
  const events: EventItem[] = Array.from(Array(8).keys()).map(() => ({
    title: "Event Title",
    type: "Event Type",
    date: "10-10-2024",
    startTime: "18:00",
    endTime: "18:30",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia culpa velit fugiat? Quas fuga, ad hic, tempora temporibus voluptates, ut quo porro accusamus sint pariatur rerum harum commodi omnis veniam.",
    coverImg:
      "https://res.cloudinary.com/c99/image/upload/v1705326472/Placeholders/Screenshot_2024-01-15_at_15.47.16.png",
  }));

  const [filter, setFilter] = useState(eventsFilters[0] as MenuItem);

  return (
    <section className="bg-surface py-16">
      <PageTitle title="Events" />
      <div className="my-8 mb-16 flex justify-center">
        <SubMenu
          color="text-black"
          activeBorderColor="border-primary"
          items={eventsFilters}
          active={filter}
          onItemClick={(filter: MenuItem) => setFilter(filter)}
        />
      </div>

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {events.map((event) => (
            <EventCard key={event.title} event={event} />
          ))}
        </div>
        <div className="my-16 text-center">
          <LargeButton>Load More</LargeButton>
        </div>
      </Container>
    </section>
  );
};

export default EventsList;
