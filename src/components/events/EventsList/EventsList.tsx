"use client";
import { PageTitle } from "@/components/PageTitle";
import EventCard from "./EventCard";
import { Container } from "@/components/Container";
import { LargeButton } from "@/components/LargeButton";
import SubMenu from "@/components/SubMenu";
import { EventItem, MenuItem } from "@/utils/types";
import { useState } from "react";
import { eventsFilters } from "@/data/ui";
import { Events } from "@/sanity/schema";

const EventsList = ({ events }: { events: EventItem[] }) => {
  const filteredEvents = events;

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
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
          {filteredEvents.map((event) => (
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
