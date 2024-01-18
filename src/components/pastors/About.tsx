import React from 'react'
import { PageTitle } from '../PageTitle'
import ClientImage from '../ClientImage'
import { Container } from '../Container'

const About = () => {
  const blurImg =
    'https://res.cloudinary.com/tiyeni/image/upload/c_scale,h_678,q_auto:low/v1679808591/2X0A4983.jpg'
  const background =
    'https://res.cloudinary.com/c99/image/upload/v1704981693/Placeholders/Screenshot_2024-01-11_at_15.53.47.png'
  return (
    <section className="bg-surface py-16">
      <PageTitle title="About Pastor"/>
      <Container className="py-8">
      <div className="grid grid-cols-5 gap-8">
        <div className="col-span-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga facilis
          necessitatibus excepturi expedita id ratione fugit eveniet doloribus
          eius libero, delectus quo dolorem hic iusto aperiam quibusdam
          inventore quos sit.
          <br /><br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
          temporibus corporis, ex officiis repellat qui omnis voluptas corrupti
          soluta laboriosam beatae nisi et voluptates culpa optio, sed
          consectetur. Numquam, excepturi.
          <br /><br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quo
          explicabo dignissimos id quae, blanditiis quibusdam odit neque ad ex
          dolore nam, assumenda nisi totam omnis perspiciatis quos, et magnam.
          <br /><br />
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed quidem
          voluptate officia assumenda blanditiis nam nihil dolores! Maiores
          asperiores voluptas tenetur vitae facere. Tempore nostrum optio quod
          assumenda pariatur possimus?
        </div>
        <div className="col-span-2">
          <div className="relative overflow-hidden pt-[120%]">
            <ClientImage
              fill
              quality={0}
              blurDataURL={blurImg}
              src={background}
              alt={'pastor'}
              className="absolute inset-0 h-full w-full object-cover object-top"
            />
          </div>
        </div>
      </div>
      </Container>
    </section>
  )
}

export default About
