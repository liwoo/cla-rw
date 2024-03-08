import NotFound from "@/app/not-found";
import About from "@/components/events/register/About";
import RegistrationForm from "@/components/events/register/Form/RegistrationForm";
import Hero from "@/components/events/register/Hero";
import { getAllEvents, getEventById } from "@/sanity/events";
import { slugify } from "@/utils/helpers";
import { PathsParams } from "@/utils/types";
import React from "react";

const EventRegistration = async ({
  params: { slug },
}: Readonly<PathsParams>) =>{
  
  const allEvents = await getAllEvents();
  const event = allEvents.find(
    (event) => slugify(event.title ?? "not found") === slug
  );

  if (!event) {
    return <NotFound />;
  }

  return (
    <div>
      <Hero event={event} />
      <About about={event.description}/>
      <RegistrationForm event={event}/>
    </div>
  );
};

export default EventRegistration;
