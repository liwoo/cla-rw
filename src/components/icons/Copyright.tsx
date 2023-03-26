import {FC} from "react";

interface LogoProps {
    className?: string;
}

export const CopyrightLogo: FC<LogoProps> = ({className = "w-8 h-8"}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" id="copyright"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-.236 17c1.375 0 2.705-.57 3.647-1.563a1.001 1.001 0 0 1 1.451 1.377 7.053 7.053 0 0 1-5.099 2.187c-3.873 0-7.023-3.142-7.023-7s3.119-7 6.953-7c2.291 0 4.366 1.115 5.693 3.062a1.002 1.002 0 0 1-1.655 1.127c-.947-1.391-2.42-2.188-4.041-2.188-2.731 0-4.953 2.243-4.953 5S8.994 17 11.764 17z"></path></svg>
    )
}