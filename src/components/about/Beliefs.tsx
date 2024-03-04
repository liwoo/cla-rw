"use client";
import React, { Fragment, useState } from "react";
import { PageTitle } from "@/components/PageTitle";
import { Container } from "@/components/Container";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import { pad } from "@/utils/helpers";
import { MenuItem } from "@/utils/types";

interface BeliefItem {
  id: string;
  name: string;
  verse: string;
  description: string;
}
const Beliefs = () => {
  const beliefs = Array.from(Array(10).keys()).map((i) => ({
    id: pad(String(i + 1)),
    name: "Name of belief",
    verse: "Supporting verse",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta iure beatae debitis, nobis repudiandae doloribus sit voluptatibus facilis voluptatum, eos corrupti quaerat, sunt perspiciatis enim expedita! Iure aspernatur alias maxime?",
  }));

  const [active, setActive] = useState<BeliefItem | null>(beliefs[0] ?? null);

  const onOptionClick = (option) => {
    setActive(option);
  };

  return (
    <section className="bg-surface-dark py-8">
      <PageTitle title={"Our Beliefs"} />
      <Container>
        <div className="my-8 flex w-full md:hidden">
          <Select
            options={beliefs}
            selected={active as MenuItem}
            onChange={onOptionClick}
          />
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-9">
          <div className="md:p-8 lg:col-span-4">
            <div className="h-full rounded-md bg-white p-8">
              <div className="my-4 text-4xl font-semibold text-muted">
                {active?.id}
              </div>
              <div className="text-2xl font-semibold">{active?.name}</div>
              <div className="mb-4 text-lg text-muted">
                &ldquo;{active?.verse}&rdquo;
              </div>
              <p>{active?.description}</p>
            </div>
          </div>

          <div className="hidden md:block lg:col-span-5">
            <div className=" rounded md:p-8">
              <div className="grid grid-cols-1 gap-4  sm:grid-cols-2">
                {beliefs.map((item) => {
                  return (
                    <Belief
                      onClick={onOptionClick}
                      key={item.name}
                      item={item}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Beliefs;

interface BeliefProps {
  item: BeliefItem;
  onClick: Function;
}

const Belief = ({ item, onClick }: BeliefProps) => {
  return (
    <div
      onClick={() => onClick(item)}
      className="cursor-pointer rounded border border-muted p-6 text-center transition-all duration-300 hover:bg-surface hover:shadow-lg"
    >
      <div className="font-semibold">{item.name}</div>
      <div className="quoted text-muted">&ldquo;{item.verse}&rdquo;</div>
    </div>
  );
};

interface SelectProps {
  options: { name: string }[];
  selected: { name: string };
  onChange: Function;
}

export const Select = ({ options, selected, onChange }: SelectProps) => {
  return (
    <Listbox value={selected} onChange={(item) => onChange(item)}>
      {({ open }) => (
        <>
          <div className="relative mt-2 w-full">
            <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6">
              <span className="block truncate">{selected.name}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {options.map((option) => (
                  <Listbox.Option
                    key={option.name}
                    className={({ active }) =>
                      clsx(
                        active ? "bg-primary text-white" : "text-gray-900",
                        "relative cursor-default select-none py-2 pl-8 pr-4"
                      )
                    }
                    value={option}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={clsx(
                            selected ? "font-semibold" : "font-normal",
                            "block truncate"
                          )}
                        >
                          {option.name}
                        </span>

                        {selected ? (
                          <span
                            className={clsx(
                              active ? "text-white" : "text-primary",
                              "absolute inset-y-0 left-0 flex items-center pl-1.5"
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
};
