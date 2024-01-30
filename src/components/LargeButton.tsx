import {FC, HTMLAttributes, ReactNode} from "react";
import clsx, { ClassValue } from "clsx";

type ButtonType = 'Primary' | 'Secondary' | 'Tertiary'
type ModifiedHTMLAttributes<T> = Omit<HTMLAttributes<T>, 'className'> & {
  className?: ClassValue
}

interface LargeButtonProps extends ModifiedHTMLAttributes<HTMLDivElement> {
  buttonType?: ButtonType
  children: ReactNode
}

export const LargeButton: FC<LargeButtonProps> = ({
                                                                                      children,
                                                                                      buttonType = "Primary",
                                                                                      className
                                                                                  }) => {
    const buttonColor = {
        Primary: "bg-primary bg-origin-border text-white",
        Secondary: "bg-secondary bg-origin-border text-white",
        Tertiary: "bg-tertiary bg-origin-border text-dark hover:text-white"
    }
    return (
        <button
            className={clsx(className,buttonColor[buttonType], "transition-all inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent h-12 px-7 lg:px-14 text-base font-medium shadow-sm hover:bg-primary-dark")}
        >
            {children}
        </button>
    )
}