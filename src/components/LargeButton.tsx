import { FC, HTMLAttributes, ReactNode } from "react";
import clsx, { ClassValue } from "clsx";

type ButtonType = "Primary" | "Secondary" | "Tertiary";
type ModifiedHTMLAttributes<T> = Omit<HTMLAttributes<T>, "className"> & {
  className?: ClassValue;
};

interface LargeButtonProps extends ModifiedHTMLAttributes<HTMLDivElement> {
  buttonType?: ButtonType;
  children: ReactNode;
}

export const LargeButton: FC<LargeButtonProps> = ({
  children,
  buttonType = "Primary",
  className,
}) => {
  const buttonColor = {
    Primary: "bg-primary bg-origin-border text-white",
    Secondary: "bg-secondary bg-origin-border text-white",
    Tertiary:
      "bg-white bg-origin-border text-dark hover:text-slate-700 hover:bg-slate-200",
  };
  return (
    <button
      className={clsx(
        className,
        buttonColor[buttonType],
        "hover:bg-primary-dark inline-flex h-12 items-center justify-center whitespace-nowrap rounded-md border border-transparent px-7 text-base font-medium shadow-sm transition-all lg:px-14",
        buttonColor[buttonType]
      )}
    >
      {children}
    </button>
  );
};
