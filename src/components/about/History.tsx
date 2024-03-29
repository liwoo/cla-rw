"use client";
import React from "react";
import { PageTitle } from "@/components/PageTitle";
import Image from "next/image";
import { P } from "@/components/typography/P";
import { Container } from "@/components/Container";
import ClientImage from "@/components/ClientImage";

const History = () => {
  return (
    <section className="bg-surface py-8">
      <PageTitle title={"Brief History"} />
      <Container>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-9">
          <div className="order-last md:order-first md:col-span-5  md:p-8">
            <P>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Veritatis sit dolores odio excepturi culpa harum minus nulla
              accusamus officiis repellat dolorem assumenda unde, saepe suscipit
              velit soluta itaque voluptatibus tempora!
            </P>
            <br />

            <P>
              Lorem ipsum dolor sit amet consectetur,adipisicing elit. Ex
              consequuntur id iure ullam maiores at ipsa, excepturi sunt
              architecto fuga consectetur rerum inventore pariatur iste
              consequatur laboriosam temporibus, porro nostrum!
            </P>
            <br />

            <P>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit
              libero laboriosam eum, consectetur totam ducimus rem dolores natus
              atque itaque. Aliquid natus omnis nam animi aspernatur voluptatem
              excepturi quibusdam tempora.
            </P>
          </div>
          <div className="relative md:col-span-4 md:p-8">
            <div className="relative w-full overflow-hidden rounded-md pt-[100%] md:pt-[120%]">
              <ClientImage
                fill
                className="zoom-on-hover"
                src="https://res.cloudinary.com/c99/image/upload/v1704981698/Placeholders/Screenshot_2024-01-11_at_15.54.48.png"
                alt="Coming Soon"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default History;
