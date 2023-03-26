import type {FC, ReactNode} from "react";

export const H2: FC<{ children: ReactNode }> = ({children}) => {
    return (
        <h2 className="lg:text-xl tracking-tight text-white sm:text-xl">{children}</h2>
    )
}
