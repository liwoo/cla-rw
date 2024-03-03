import { FC } from "react";

export const CardTitle: FC<{ title: string }> = ({ title }) => {
  return <p className="text-sm font-medium text-gray-900">{title}</p>;
};
