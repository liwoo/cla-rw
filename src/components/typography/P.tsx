import clsx from "clsx";
import type { FC, ReactNode } from "react";

export const P: FC<{
  children: ReactNode;
  color?: string;
  center?: boolean;
}> = ({ children, color = "dark", center = false }) => {
  return (
    <p className={clsx(center ? "text-center" : "", `leading-1 text-${color}`)}>
      {children}
    </p>
  );
};
