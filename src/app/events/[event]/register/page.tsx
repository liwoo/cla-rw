import About from "@/components/events/register/About";
import RegistrationForm from "@/components/events/register/Form/RegistrationForm";
import Hero from "@/components/events/register/Hero";
import React from "react";

const EventRegistration = () => {
  return (
    <div>
      <Hero />
      <About />
      <RegistrationForm />
    </div>
  );
};

export default EventRegistration;
