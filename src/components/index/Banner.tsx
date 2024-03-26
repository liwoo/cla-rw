import { Notices } from "@/sanity/schema";
import { XMarkIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import Link from "next/link";

export default function Banner({
  isClosed,
  onDismissBanner,
  notice,
}: {
  isClosed: boolean;
  onDismissBanner: () => void;
  notice: Notices;
}) {
  return (
    <div
      className={clsx(
        isClosed
          ? "hidden"
          : "bg-primary flex items-center gap-x-6 px-6 py-2.5 sm:px-3.5 sm:before:flex-1"
      )}
    >
      <p className="text-sm leading-6 text-white">
        <Link href={notice?.link ?? "/"}>
          <strong className="font-semibold">{notice.title}</strong>
          <svg
            viewBox="0 0 2 2"
            className="mx-2 inline h-0.5 w-0.5 fill-current"
            aria-hidden="true"
          >
            <circle cx={1} cy={1} r={1} />
          </svg>
          {notice.description}
          {`  `}
          <span aria-hidden="true">&rarr;</span>
        </Link>
      </p>
      <div className="flex flex-1 justify-end">
        <button
          type="button"
          onClick={onDismissBanner}
          className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
        >
          <span className="sr-only">Dismiss</span>
          <XMarkIcon className="h-5 w-5 text-white" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
