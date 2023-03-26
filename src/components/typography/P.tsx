import type {FC, ReactNode} from "react";

export const P: FC<{ children: ReactNode, color?: string }> = ({children, color="dark"}) => {
    return (
        <p className={`leading-1 text-${color}`}>
            {children}
        </p>
    )
}
