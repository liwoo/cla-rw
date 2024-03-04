"use client";

import Hero from "@/components/ministry/Hero";
import { Container } from "@/components/Container";
import { NoticeWithoutImage } from "@/components/cta/NoticeWithoutImage";
import Discover from "@/components/ministry/Discover";
import Testimonials from "@/components/ministry/Testimonials";
import { NoticeItem } from "@/utils/types";
import { Ministries } from "@/sanity/schema";

export const Ministry = ({ ministry }: { ministry: Ministries }) => {
  const notice: NoticeItem = {
    title: "New Frontiers",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, voluptatem! Amet saepe, at deleniti id voluptate, adipisci iusto molestias repudiandae reprehenderit illo temporibus dolorum animi eum earum",
    startDate: null,
    endDate: null,
    coverImage: null,
    link: null,
  };
  const heroImg =
    "https://res.cloudinary.com/c99/image/upload/v1705414035/Placeholders/Screenshot_2024-01-16_at_16.06.56.png";
  const details = {
    title: ministry.name ?? "Not Found",
    description: ministry.description ?? "Not Found",
    more: ministry.minstryVerse ?? "Not Found",
  };
  return (
    <div>
      <Hero img={heroImg} />
      <Container className="my-16">
        <NoticeWithoutImage notice={notice as any} />
      </Container>
      <Discover details={details} />
      <Testimonials />
    </div>
  );
};

export default Ministry;
