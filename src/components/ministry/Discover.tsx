'use client'
import Image from 'next/image'
import { Container } from '../Container'
import { PageTitle } from '../PageTitle'

const Discover = () => {
  const items = Array.from(Array(5).keys()).map(() => ({
    title: 'Prayer',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    more: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae velit quidem veritatis earum! A illo temporibus error impedit voluptatem illum ducimus aut officiis obcaecati alias, amet suscipit quod autem incidunt.',
  }))
  return (
    <section className="my-8">
      <PageTitle title="Discover the Church" />
      <Container>
        <div className="my-8 grid grid-cols-5 gap-16">
          <div className="col-span-3">
            <div className="mb-4 text-3xl font-bold">
              An overview about women ministry
            </div>
            <div className="text-xl font-bold">
              What is intercessory ministry about?
            </div>
            <div className="my-8">
              <div className="text-4xl text-primary">&ldquo;</div>
              <div className="-mt-8 px-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
                accusantium incidunt sequi aut cum repudiandae similique
                consectetur architecto in rerum corrupti accusamus, deserunt
                error natus, quia tempore quibusdam, at ad.
                <br />
                <span className="mt-4 inline-block font-semibold">1 Tim 6</span>
              </div>
              <div className="-mt-8 text-right text-4xl text-primary ">
                &rdquo;
              </div>
            </div>
            {items.map((i) => (
              <div
                className="border-x border-t border-muted p-4 last:border-b"
                key={i.title}
              >
                <div className="flex">
                  <span className="mr-2 font-bold text-secondary">
                    {i.title}:{' '}
                  </span>{' '}
                  <span className="font-semibold"> {i.description}</span>
                </div>
                <div>{i.more}</div>
              </div>
            ))}
          </div>
          <div className="col-span-2 ">
            <div className="relative overflow-hidden rounded-lg pt-[120%]">
              <Image
                fill
                quality={50}
                placeholder={'blur'}
                blurDataURL={
                  'https://res.cloudinary.com/tiyeni/image/upload/c_scale,h_678,q_auto:low/v1679808591/2X0A4983.jpg'
                }
                src="https://res.cloudinary.com/c99/image/upload/v1705410832/Placeholders/Screenshot_2024-01-16_at_15.11.21.png"
                alt="Coming Soon"
                className="absolute inset-0 h-full w-full object-cover object-top"
              />
              <div className="relative flex h-full w-full items-end">
                <div className="w-full bg-primary p-8 text-center text-white">
                  <div className="text-2xl font-bold">Peace Kampingo</div>
                  <div className="text-2xl">Women Ministry</div>
                </div>
              </div>
            </div>
            <div className="my-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              doloremque totam soluta unde adipisci tenetur labore? Corporis,
              blanditiis quaerat, cupiditate officia aperiam assumenda,
              exercitationem vel reiciendis sed non at quos.
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Discover
