import React from 'react'
import { PageTitle } from '@/components/PageTitle'
import { Container } from '@/components/Container'

const Beliefs = () => {
  return (
    <section className="bg-surface-dark py-8">
      <PageTitle title={'Our Beliefs'} />
      <Container>
      <div className="grid grid-cols-1 lg:grid-cols-9 gap-8">
      <div className="lg:col-span-4 md:p-8">
            <div className="h-full rounded-md bg-white p-8">
              <div className="my-4 text-4xl font-semibold text-muted">01</div>
              <div className="text-2xl font-semibold">Name of Belief</div>
              <div className="mb-4 text-lg text-muted">"Supporting verse"</div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis sit dolores odio excepturi culpa harum minus nulla
                accusamus officiis repellat dolorem assumenda unde, saepe
                suscipit velit soluta itaque voluptatibus tempora!
              </p>
              <br />

              <p>
                Lorem ipsum dolor sit amet consectetur,adipisicing elit. Ex
                consequuntur id iure ullam maiores at ipsa, excepturi sunt
                architecto fuga consectetur rerum inventore pariatur iste
                consequatur laboriosam temporibus, porro nostrum!
              </p>
              <br />

              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit
                libero laboriosam eum, consectetur totam ducimus rem dolores
                natus atque itaque. Aliquid natus omnis nam animi aspernatur
                voluptatem excepturi quibusdam tempora.
              </p>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded md:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2  gap-4">
                {Array.from(Array(10).keys()).map((item) => {
                  return <Belief key={item} />
                })}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Beliefs

const Belief = () => {
  return (
    <div className="rounded border border-muted p-6 text-center">
      <div className="font-semibold">Name of Belief</div>
      <div className="text-muted">"Supporting verse"</div>
    </div>
  )
}
