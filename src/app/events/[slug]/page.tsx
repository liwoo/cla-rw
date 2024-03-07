import NotFound from "@/app/not-found";
import About from "@/components/events/register/About";
import RegistrationForm from "@/components/events/register/Form/RegistrationForm";
import Hero from "@/components/events/register/Hero";
import { getEventById } from "@/sanity/events";
import { PathsParams } from "@/utils/types";
import React from "react";

const EventRegistration = async ({
  params: { slug },
}: Readonly<PathsParams>) =>{
  if (!slug) {
    return <NotFound />;
  }

  const event = await getEventById(slug);

  console.log(event)
  return (
    <div>
      <Hero event={event} />
      <About about={event.description}/>
      <RegistrationForm event={event}/>
    </div>
  );
};

export default EventRegistration;
