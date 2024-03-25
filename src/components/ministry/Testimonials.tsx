"use client";
import { PageTitle } from "@/components/PageTitle";
import { Container } from "@/components/Container";
import ClientImage from "@/components/ClientImage";
import { TestimonialsItem } from "@/utils/types";
import { useEffect, useState } from "react";
import { titles } from "@/data/ui";

const Testimonials = ({
  testimonials,
}: {
  testimonials: TestimonialsItem[];
}) => {
  const [activeTestimonial, setTestimonial] = useState(
    null as TestimonialsItem | null
  );

  useEffect(() => {
    if (testimonials?.length > 0)
      setTestimonial(testimonials[0] as TestimonialsItem);
  }, [testimonials]);
  return (
    <section className="py-8">
      <PageTitle
        title={titles.testimonials.title}
        description={titles.testimonials.description}
      />
      <Container>
        <div className="flex items-center justify-center pb-24 pt-16">
          {testimonials?.map((testimonial) => (
            <div
              key={testimonial.name}
              className="relative -ml-8 h-24 w-24 overflow-hidden rounded-full border-4 border-white"
            >
              <ClientImage
                fill
                blurDataURL={
                  testimonial.imageUrl
                }
                src={testimonial.imageUrl}
                alt={testimonial.title}
                className="absolute inset-0 h-full w-full object-cover object-top"
              />
            </div>
          ))}
        </div>
      </Container>
      {activeTestimonial && (
        <div className="bg-surface-dark py-16 text-center">
          <Container>
            <div className="relative mx-auto my-4 h-32 w-32 overflow-hidden rounded-full">
              <ClientImage
                fill
                blurDataURL={
                  activeTestimonial.imageUrl
                }
                src={activeTestimonial.imageUrl}
                alt="Coming Soon"
                className="absolute inset-0 h-full w-full object-cover object-top"
              />
            </div>
            <div className="my-2 font-bold">{activeTestimonial.name}</div>
            <div className="font-semibold">{activeTestimonial.title}</div>
            <div className="my-4 font-semibold text-secondary">
              {activeTestimonial.subtitle}
            </div>
            <div className="my-4">
              <div className="text-left text-4xl text-primary">&ldquo;</div>
              <div className="-mt-8 px-4">{activeTestimonial.testimonial}</div>
              <div className="-mt-8 text-right text-4xl text-primary ">
                &rdquo;
              </div>
            </div>
          </Container>
        </div>
      )}
    </section>
  );
};

export default Testimonials;
