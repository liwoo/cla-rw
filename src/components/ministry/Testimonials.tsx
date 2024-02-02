'use client'
import Image from 'next/image'
import { PageTitle } from '../PageTitle'
import { Container } from '../Container'
import ClientImage from '../ClientImage'
import { TestimonialItem } from '@/utils/types'

const Testimonials = () => {
  const testimonials:TestimonialItem[] = Array.from(Array(4).keys()).map(() => ({
    name: 'Name',
    img: 'https://res.cloudinary.com/c99/image/upload/v1705412894/Placeholders/Screenshot_2024-01-16_at_15.47.58.png',
    testimonial:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est itaque odit architecto. Dolorum cum id quod ut mollitia delectus vel, tempore, pariatur, molestias nisi quisquam eius amet! Modi, labore esse.',
  }))
  return (
    <section className="pt-8">
      <PageTitle
        title="Testimonials"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      />
      <Container>
        <div className="my-16 flex items-center justify-center">
          {testimonials.map((testimonial) => (
            <div  key={testimonial.name} className="relative -ml-8 h-24 w-24 overflow-hidden rounded-full border-4 border-white">
              <ClientImage
                fill
                blurDataURL={
                  'https://res.cloudinary.com/tiyeni/image/upload/c_scale,h_678,q_auto:low/v1679808591/2X0A4983.jpg'
                }
                src={testimonial.img}
                alt="Coming Soon"
                className="absolute inset-0 h-full w-full object-cover object-top"
              />
            </div>
          ))}
        </div>
      </Container>
      <div className="bg-surface-dark py-16 text-center">
        <Container>
          <div className="relative my-4 mx-auto h-32 w-32 overflow-hidden rounded-full">
            <ClientImage
              fill
              blurDataURL={
                'https://res.cloudinary.com/tiyeni/image/upload/c_scale,h_678,q_auto:low/v1679808591/2X0A4983.jpg'
              }
              src={testimonials[0].img}
              alt="Coming Soon"
              className="absolute inset-0 h-full w-full object-cover object-top"
            />
          </div>
          <div className="my-2 font-bold">Name Name</div>
          <div className="font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
          <div className="my-4 font-semibold text-secondary">
            Year(s) discipled
          </div>
          <div className="my-4">
            <div className="text-left text-4xl text-primary">&ldquo;</div>
            <div className="-mt-8 px-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
              accusantium incidunt sequi aut cum repudiandae similique
              consectetur architecto in rerum corrupti accusamus, deserunt error
              natus, quia tempore quibusdam, at ad.
            </div>
            <div className="-mt-8 text-right text-4xl text-primary ">
              &rdquo;
            </div>
          </div>
        </Container>
      </div>
    </section>
  )
}

export default Testimonials
