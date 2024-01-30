import { SVGProps } from "react"

const GooglePodcast = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={43}
    aria-label="Google Podcasts"
    viewBox="0 0 512 512"
    {...props}
  >
    <rect width={512} height={512} fill="#fff" rx="15%" />
    <path stroke="#fab908" d="M256 109v22zm0 86v122m0 64v22z" />
    <path stroke="#ea4335" d="M181 176v75zm0 139v21z" />
    <path stroke="#34a853" d="M331 176v21zm0 85v75z" />
    <path stroke="#4285f4" d="M405 245v22" />
    <path stroke="#0066d9" d="M107 245v22" />
  </svg>
  )
}

export default GooglePodcast