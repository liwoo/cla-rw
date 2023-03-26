export function Heart({className, fill = "primary"}: { className: string, fill?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} fill={fill} viewBox="0 0 24 24">
            <path fill={fill}
                  d="M7 8C6.44772 8 6 8.44772 6 9C6 9.55228 6.44772 10 7 10C7.55228 10 8 9.55228 8 9C8 8.44772 7.55228 8 7 8Z"/>
            <path fill={fill} fillRule="evenodd"
                  d="M2 9.69623C2 15.9769 9.78063 20.0415 11.6156 20.9128C11.8621 21.0298 12.1379 21.0298 12.3844 20.9128C14.2194 20.0415 22 15.9769 22 9.69623C22 6.55029 19.4416 4 16.2857 4C14.6604 4 13.1935 4.67643 12.153 5.76229C12.07 5.84898 11.93 5.84898 11.847 5.76229C10.8065 4.67643 9.33962 4 7.71429 4C4.55837 4 2 6.55029 2 9.69623ZM7.43961 15.8304C9.11403 17.3013 10.962 18.3452 12 18.873C13.038 18.3452 14.886 17.3013 16.5604 15.8304C18.5746 14.0611 20 11.978 20 9.69623C20 7.66082 18.343 6 16.2857 6C15.2268 6 14.2753 6.43824 13.5971 7.14602C12.153 8.4 11.847 8.4 10.4029 7.14602C9.72469 6.43824 8.77316 6 7.71429 6C5.65697 6 4 7.66082 4 9.69623C4 11.978 5.42542 14.0611 7.43961 15.8304Z"
                  clipRule="evenodd"/>
        </svg>
    )
}