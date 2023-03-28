import {FC, Fragment} from 'react';
import {Popover, Transition} from '@headlessui/react';
import logo from '@/images/logo.svg';

import {
    Bars3Icon,
    ChatBubbleBottomCenterTextIcon,
    ChatBubbleLeftRightIcon,
    ChevronDownIcon,
    InboxIcon,
    MagnifyingGlassIcon,
    QuestionMarkCircleIcon,
    XMarkIcon
} from "@heroicons/react/20/solid";
import {ExpandableMenuItem} from "@/components/ExpandableMenuItem";
import {SecondaryMenu} from "@/components/SecondaryMenu";
import Image from "next/image";
import {LargeButton} from "@/components/LargeButton";
import Link from "next/link";

const solutions = [
    {
        name: 'Inbox',
        description: 'Get a better understanding of where your traffic is coming from.',
        href: '#',
        icon: InboxIcon,
    },
    {
        name: 'Messaging',
        description: 'Speak directly to your customers in a more meaningful way.',
        href: '#',
        icon: ChatBubbleBottomCenterTextIcon,
    },
    {
        name: 'Live Chat',
        description: "Your customers' data will be safe and secure.",
        href: '#',
        icon: ChatBubbleLeftRightIcon,
    },
    {
        name: 'Knowledge Base',
        description: "Connect with third-party tools that you're already using.",
        href: '#',
        icon: QuestionMarkCircleIcon,
    },
]


export const Header: FC<{ company: string }> = ({company}) => {
    return (
        <header className="bg-background fixed w-full z-50">
            <Popover className="relative">
                <div
                    className="mx-auto flex max-w-7xl items-center p-2 md:p-6 md:justify-start justify-between md:space-x-10 lg:px-8">
                    <div className="flex justify-start items-center pr-12 h-20">
                        <Link href="/">
                            <span className="sr-only">{company}</span>
                            <Image
                                className="h-16 w-auto"
                                priority={true}
                                src={logo}
                                alt=""
                                width={200}
                                height={50}
                            />
                        </Link>
                    </div>
                    <div className="-my-2 -mr-2 md:hidden">
                        <Popover.Button
                            className="inline-flex items-center justify-center rounded-md bg-white p-2 mr-8 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <span className="sr-only">Open menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true"/>
                        </Popover.Button>
                    </div>
                    <Popover.Group as="nav" className="hidden space-x-10 md:flex">
                        <Popover className="relative">
                            {({open}) => (
                                <>
                                    <ExpandableMenuItem item="Visting" open={open}/>

                                    <SecondaryMenu items={solutions}/>
                                </>
                            )}
                        </Popover>

                        <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                            Connect
                        </a>
                        <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                            Grow
                        </a>
                        <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                            Serve
                        </a>
                        <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                            Give
                        </a>
                    </Popover.Group>
                    <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0 space-x-4">
                        <a href="#"
                           className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                            <MagnifyingGlassIcon width={24}/>
                        </a>
                        <LargeButton>
                            <>
                                <span>Register</span>
                                <span><ChevronDownIcon width={20} className="mx-1"/></span>
                            </>
                        </LargeButton>
                    </div>
                </div>
                <Transition
                    as={Fragment}
                    enter="duration-200 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-100 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <Popover.Panel
                        focus
                        className="absolute inset-x-0 top-0 z-30 origin-top-right transform p-2 transition md:hidden"
                    >
                        <div
                            className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="px-5 pt-5 pb-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <Image
                                            className="h-12 w-auto"
                                            src={logo}
                                            width={200}
                                            height={50}
                                            priority={true}
                                            alt={company}
                                        />
                                    </div>
                                    <div className="-mr-2">
                                        <Popover.Button
                                            className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                            <span className="sr-only">Close menu</span>
                                            <XMarkIcon className="h-6 w-6" aria-hidden="true"/>
                                        </Popover.Button>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <nav className="grid grid-cols-1 gap-7">
                                        {solutions.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className="-m-3 flex items-center rounded-lg p-3 hover:bg-gray-50"
                                            >
                                                <div
                                                    className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                                                    <item.icon className="h-6 w-6" aria-hidden="true"/>
                                                </div>
                                                <div
                                                    className="ml-4 text-base font-medium text-gray-900">{item.name}</div>
                                            </a>
                                        ))}
                                    </nav>
                                </div>
                            </div>
                            <div className="py-6 px-5">
                                <div className="grid grid-cols-2 gap-4">
                                    <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                        Visiting
                                    </a>
                                    <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                        Connect
                                    </a>
                                    <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                        Grow
                                    </a>
                                    <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                        Serve
                                    </a>
                                    <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                        Give
                                    </a>
                                </div>
                                <div className="mt-6">
                                    <a
                                        href="#"
                                        className="flex w-full items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-purple-800 to-indigo-900 bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm hover:from-purple-700 hover:to-indigo-700"
                                    >
                                        Donate
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Popover.Panel>
                </Transition>
            </Popover>
        </header>
    )
}

