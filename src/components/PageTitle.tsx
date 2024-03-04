import { FC } from "react";
import { P } from "@/components/typography/P";

export const PageTitle: FC<{ title: string; description?: string }> = ({
  title,
  description,
}) => {
  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 text-center lg:px-8">
      <h3 className="text-2xl lg:text-3xl font-bold text-dark">{title}</h3>
      <div className="flex w-1/4 mx-auto my-4">
        <div className="bg-primary h-1 w-1/2" />
        <div className="bg-white h-1 w-1/2" />
      </div>
      <P>{description}</P>
    </div>
  );
};
