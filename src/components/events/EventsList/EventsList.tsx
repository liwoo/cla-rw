"use client";
import { PageTitle } from "@/components/PageTitle";
import EventCard from "./EventCard";
import { Container } from "@/components/Container";
import SubMenu from "@/components/SubMenu";
import { EventItem, MenuItem } from "@/utils/types";
import { useState } from "react";
import { eventsFilters } from "@/data/ui";

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
      </Container>
    </section>
  );
};

export default EventsList;
