import { ReactNode } from "react";
import { PageTitle } from "@/components/PageTitle";
import { Container } from "@/components/Container";
import clsx from "clsx";
import ClientImage from "@/components/ClientImage";

interface SectionProps {
  title: string;
  imgSrc?: string;
  children: ReactNode;
  secondaryContent?: ReactNode;
  mainContentLeft?: boolean;
}
const Section = ({
  title,
  imgSrc,
  children,
  mainContentLeft = true,
  secondaryContent,
}: SectionProps) => {
  return (
    <section className="bg-surface py-8">
      <PageTitle title={title} />
      <Container>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-9">
          <div
            className={clsx(
              mainContentLeft ? "order-last md:order-first" : "order-last",
              "md:col-span-5 md:p-8"
            )}
          >
            {children}
          </div>
          <div className="relative md:col-span-4 md:p-8">
            {secondaryContent ? (
              secondaryContent
            ) : (
              <div className="relative w-full overflow-hidden rounded-md pt-[100%] md:pt-[120%]">
                {imgSrc && <ClientImage fill src={imgSrc} />}
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Section;
