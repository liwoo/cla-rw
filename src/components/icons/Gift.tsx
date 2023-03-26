export function Gift({className, fill = "primary"}: { className: string, fill?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} fill={fill} viewBox="0 0 24 24">
            <path fill={fill}
                  d="M3 20V12H5V19.2C5 19.6418 5.35817 20 5.8 20H11V12H13V20H18.2C18.6418 20 19 19.6418 19 19.2V12H21V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20Z"/>
            <path fill={fill} fill-rule="evenodd"
                  d="M2 8C2 6.89543 2.89543 6 4 6H20C21.1046 6 22 6.89543 22 8V11C22 11.5523 21.5523 12 21 12H3C2.44772 12 2 11.5523 2 11V8ZM19.2 8C19.6418 8 20 8.35817 20 8.8V9.6C20 9.82091 19.8209 10 19.6 10H13V8H19.2ZM11 8V10H4.4C4.17909 10 4 9.82091 4 9.6V8.8C4 8.35817 4.35817 8 4.8 8H11Z"
                  clip-rule="evenodd"/>
            <path fill={fill}
                  d="M11 6C11 4.89543 10.1046 4 9 4C7.89543 4 7 4.89543 7 6H5C5 3.79086 6.79086 2 9 2C10.1947 2 11.2671 2.52376 12 3.35418C12.7329 2.52376 13.8053 2 15 2C17.2091 2 19 3.79086 19 6H17C17 4.89543 16.1046 4 15 4C13.8954 4 13 4.89543 13 6H11Z"/>
        </svg>
    )
}