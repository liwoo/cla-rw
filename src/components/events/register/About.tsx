import { Container } from "@/components/Container";
import React, { ReactNode } from "react";

const About = ({about}:{about: string}) => {
  return (
    <div className="bg-surface-dark py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-4xl" dangerouslySetInnerHTML={{ __html: about }}>
        </div>
      </Container>
    </div>
  );
};

export default About;
