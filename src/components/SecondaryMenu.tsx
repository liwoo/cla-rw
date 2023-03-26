import {FC, Fragment} from "react";
import {Popover, Transition} from "@headlessui/react";

export type SecondaryMenuItem = {
    name: string;
    description: string;
    href: string;
}

export const SecondaryMenu: FC<{ items: SecondaryMenuItem[] }> = ({items}) => {
    return (
        <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
        >
            <Popover.Panel
                className="absolute left-1/2 z-10 mt-3 w-screen max-w-xs -translate-x-1/2 transform px-2 sm:px-0">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                        {items.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="-m-3 block rounded-md p-3 transition duration-150 ease-in-out hover:bg-gray-50"
                            >
                                <p className="text-base font-medium text-gray-900">{item.name}</p>
                                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                            </a>
                        ))}
                    </div>
                </div>
            </Popover.Panel>
        </Transition>
    )
}