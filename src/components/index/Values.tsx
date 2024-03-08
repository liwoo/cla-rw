"use client";

import {
  LifebuoyIcon,
  NewspaperIcon,
  PhoneIcon,
} from "@heroicons/react/20/solid";

export default function Values() {
  const cards = [
    {
      name: "Cell Based",
      description:
        "Consectetur vel non. Rerum ut consequatur nobis unde. Enim est quo corrupti consequatur.",
      icon: PhoneIcon,
    },
    {
      name: "Bible Believing",
      description:
        "Quod possimus sit modi rerum exercitationem quaerat atque tenetur ullam.",
      icon: LifebuoyIcon,
    },
    {
      name: "Media Inquiries",
      description:
        "Ratione et porro eligendi est sed ratione rerum itaque. Placeat accusantium impedit eum odit.",
      icon: NewspaperIcon,
    },
  ];

  return (
    <div className="isolate my-8 mx-0 overflow-hidden bg-gray-900 sm:relative md:my-8 lg:sticky lg:top-44 lg:z-20 lg:mx-8 lg:rounded-xl">
      <div className="hidden sm:absolute sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl">
        <div
          className="from-primary to-secondary aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr opacity-20"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="left-1/2 -z-10 hidden -translate-x-1/2 transform-gpu blur-3xl sm:absolute sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu">
        <div
          className="from-primary to-secondary aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr opacity-20"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto my-8 grid max-w-2xl grid-cols-1 gap-6 px-8 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
        {cards.map((card) => (
          <div
            key={card.name}
            className="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/10"
          >
            <card.icon
              className="h-7 w-5 flex-none text-indigo-400"
              aria-hidden="true"
            />
            <div className="text-base leading-7">
              <h3 className="font-semibold text-white">{card.name}</h3>
              <p className="mt-2 text-gray-300">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
