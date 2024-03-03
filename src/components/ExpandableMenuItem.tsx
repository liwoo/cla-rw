import { FC } from "react";
import { Popover } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";

export const ExpandableMenuItem: FC<{ item: string; open: boolean }> = ({
  item,
  open,
}) => {
  return (
    <Popover.Button
      className={clsx(
        open ? "text-gray-900" : "text-gray-500",
        "group inline-flex items-center rounded-md bg-background text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      )}
    >
      <span>{item}</span>
      <ChevronDownIcon
        className={clsx(
          open ? "text-gray-600" : "text-gray-400",
          "ml-2 h-5 w-5 group-hover:text-gray-500"
        )}
        aria-hidden="true"
      />
    </Popover.Button>
  );
};
