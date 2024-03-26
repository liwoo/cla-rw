import { FC, useEffect, useState } from "react";
import { P } from "@/components/typography/P";

export const PageTitle: FC<{ title: string; description?: string }> = ({
  title,
  description,
}) => {
  return (
    <div className="mx-auto max-w-7xl py-6 text-center sm:px-6 lg:px-8">
      <h3 className="text-dark text-2xl font-bold lg:text-3xl">{title}</h3>
      <div className="mx-auto my-4 flex w-1/4">
        <div className="bg-primary h-1 w-1/2" />
        <div className="h-1 w-1/2 bg-white" />
      </div>
      <P>{description}</P>
      <div></div>
    </div>
  );
};
