import type { FC, ReactNode } from "react";

export const Subheading: FC<{
  children: ReactNode;
  classOverrides?: string;
}> = ({ children, classOverrides = "text-gray-300" }) => {
  return (
    <div className={`text-lg leading-8 ${classOverrides}`}>{children}</div>
  );
};
