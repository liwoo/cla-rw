import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

const Pagination = () => {
  return (
    <div className="flex items-center justify-between md:justify-end">
      <div className="p-4 bg-secondary items-center text-center cursor-pointer">
        <ChevronLeftIcon className="h-8 text-white" />
      </div>
      <div className="p-4 bg-secondary ml-4 items-center text-center cursor-pointer">
        <ChevronRightIcon className="h-8 text-white" />
      </div>
    </div>
  );
};

export default Pagination;
