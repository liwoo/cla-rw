import type {FC, ReactNode} from "react";

export const H1: FC<{ children: ReactNode }> = ({children}) => {
    return (
        <h1 className="lg:text-3xl font-bold tracking-tight text-white text-2xl">{children}</h1>
    )
}
