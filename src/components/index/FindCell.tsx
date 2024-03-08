import { PageTitle } from "@/components/PageTitle";
import { Subheading } from "@/components/typography/Subheading";
import { Container } from "@/components/Container";
import { LargeButton } from "@/components/LargeButton";
import ClientImage from "@/components/ClientImage";
import { ZoneSection } from "@/sanity/schema";
import { FC } from "react";

export const FindCell: FC<{ cells: ZoneSection[] }> = ({ cells }) => {
  //TODO: Is this in the CTAs somewhere
  const description =
    "We are a cell-based church. We believe that the church is not a building but a community of believers. We have cells in different parts of the city. Find a cell near you.";

  return (
    <section className="bg-surface-dark py-12">
      <Container>
        <PageTitle title="Find Cell" />
        <div className="my-16 flex flex-col flex-wrap justify-between md:flex-row">
          <div className="w-full md:w-1/2 lg:w-2/5">
            <ClientImage
              width={1470}
              height={980}
              src="https://images.unsplash.com/photo-1526746323784-6bc814d79273?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              className="subtle-zoom-on-hover w-full rounded-md"
              alt="Cell Group"
            />
          </div>
          <div className="w-full md:w-1/2 md:px-12 lg:w-3/5 lg:px-20">
            <Subheading classOverrides="text-dark my-8">
              {description}
            </Subheading>
            <h3 className="my-4 font-bold">Where do you Stay?</h3>
            <div
              className={
                "mb-8 flex flex-col items-start lg:mb-0 lg:flex-row lg:items-center lg:gap-x-2 xl:gap-x-4"
              }
            >
              <div className={"w-full lg:w-1/2"}>
                <label
                  htmlFor="location"
                  className="block text-sm font-medium text-gray-700"
                >
                  Location
                </label>
                <select
                  id="location"
                  name="location"
                  defaultValue={"United States"}
                  className="my-4 mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                >
                  {cells.map((cell) => (
                    <option
                      key={cell._id}
                      selected={cell.zoneSectionName === "Nyamirambo"}
                    >
                      {cell.zoneSectionName}
                    </option>
                  ))}
                </select>
              </div>
              <input
                type="email"
                name="first-name"
                placeholder={"Enter your email address"}
                id="first-name"
                autoComplete="given-name"
                className="mt-2 block w-full rounded-md border-0 py-2.5 text-base text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 lg:w-1/2"
              />
            </div>
            <LargeButton buttonType="Secondary">Find Cell Group</LargeButton>
          </div>
        </div>
      </Container>
    </section>
  );
};
