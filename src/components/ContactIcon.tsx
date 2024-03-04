"use client";
import clsx, { ClassValue } from "clsx";
import {
  ForwardRefExoticComponent,
  HTMLAttributes,
  ReactNode,
  SVGProps,
} from "react";

type ModifiedHTMLAttributes<T> = Omit<HTMLAttributes<T>, "className"> & {
  className?: ClassValue;
};

interface ContactIconProps extends ModifiedHTMLAttributes<HTMLDivElement> {
  icon: ForwardRefExoticComponent<SVGProps<SVGSVGElement>>;
  name: string;
}

const ContactIcon = ({ className, ...props }: ContactIconProps) => {
  return (
    <div
      className={clsx(
        className,
        "p-2 md:p-8 rounded-lg text-center inline-block"
      )}
      {...props}
    >
      <props.icon className="h-6 md:h-14 my-2 mx-auto text-secondary" />
      <div className="text-xs md:text-base whitespace-nowrap">{props.name}</div>
    </div>
  );
};

export default ContactIcon;
