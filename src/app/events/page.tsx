import EventsList from "@/components/events/EventsList/EventsList";
import Hero from "@/components/events/Hero/Hero";
import { getAllEvents } from "@/sanity/events";

const Events = async () => {
  const allEvents = await getAllEvents();

  console.log(allEvents)
  return (
    <div>
      <Hero event={allEvents[0]} />
      <EventsList events={allEvents} />
    </div>
  );
};

export default Events;
