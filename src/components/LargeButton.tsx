import {FC, ReactNode} from "react";
import {classNames} from "@headlessui/react/dist/utils/class-names";

type ButtonType = "Primary" | "Secondary" | "Tertiary";

export const LargeButton: FC<{ buttonType?: ButtonType, children: ReactNode }> = ({
                                                                                      children,
                                                                                      buttonType = "Primary"
                                                                                  }) => {
    const buttonColor = {
        Primary: "bg-primary bg-origin-border text-white",
        Secondary: "bg-secondary bg-origin-border text-white",
        Tertiary: "bg-tertiary bg-origin-border text-dark hover:text-white"
    }
    return (
        <button
            className={classNames(buttonColor[buttonType], "transition-all inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent h-12 px-4 lg:px-8 text-base font-medium shadow-sm hover:bg-primary-dark")}
        >
            {children}
        </button>
    )
}