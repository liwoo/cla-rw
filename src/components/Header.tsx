"use client";

import { FC, Fragment, useEffect, useState } from "react";
import { Disclosure, Popover, Transition } from "@headlessui/react";
import logo from "@/images/logo.svg";
import { menu } from "@/data/menu";
import type { Menu, DynamicMenu } from "@/data/menu";

import {
  ArrowRightIcon,
  Bars3Icon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import { LargeButton } from "@/components/LargeButton";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { Ministries, Notices } from "@/sanity/schema";
import { slugify } from "@/utils/helpers";
import Banner from "./index/Banner";
import { getBannerCookie, setBannerCookie } from "@/utils/cookies";

const bannerId = "my-banner-id-5";

export const Header: FC<{
  company: string;
  ministries: Ministries[];
  notice?: Notices;
}> = ({ company, ministries, notice }) => {
  const pathName = usePathname();

  const ministryMenu: Menu[] = ministries.map((ministry) => {
    return {
      name: ministry.name ?? "Not Found",
      description: "",
      href: `/ministry/${slugify(ministry.name ?? "not-found")}`,
      icon: ArrowRightIcon,
    };
  });

  const getDynamicMenuDetails = (dynamicMenu?: DynamicMenu) => {
    switch (dynamicMenu) {
      case "Ministry":
        return ministryMenu;
      default:
        return [];
    }
  };

  useEffect(() => {
    //btn with data-headlessui-state=open and type is button
    const closeBtn = document.querySelector(
      "button[data-headlessui-state=open][type=button]"
    ) as HTMLButtonElement;
    console.log({ closeBtn });
    if (closeBtn) {
      closeBtn.click();
    }
  }, [pathName]);

  const [isClosed, setIsClosed] = useState<boolean>(notice === undefined);
  const bannerCookie = getBannerCookie(notice?._id ?? bannerId);
  const dismissBanner = () => {
    setIsClosed(true);
    setBannerCookie(notice?._id ?? bannerId);
  };
  const isBannerClosed = isClosed || bannerCookie !== undefined;

  return (
    <header id="header" className={clsx(isBannerClosed ? "mb-24" : "mb-36")}>
      <div className="bg-background fixed z-20 w-full">
        {notice && (
          <Banner
            notice={notice}
            onDismissBanner={dismissBanner}
            isClosed={isBannerClosed}
          />
        )}
        <Popover className="relative">
          <div className="mx-auto flex max-w-7xl items-center justify-between p-2 md:space-x-10 md:p-6 lg:justify-start lg:px-8">
            <div className="flex h-14 items-center justify-start pr-12">
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
            <div className="-my-2 -mr-2 lg:hidden">
              <Popover.Button
                id="menuBtn"
                className="mr-8 inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <div className="hidden md:gap-x-8 lg:flex lg:flex-1 lg:gap-x-12">
              {menu.map((men) => {
                if (men.subMenu || men.dynamicMenu) {
                  return (
                    <Popover.Group
                      className="hidden lg:flex lg:gap-x-12"
                      key={men.name}
                    >
                      <Popover className="relative">
                        <Popover.Button className="flex items-center gap-x-1 text-lg leading-6 text-gray-900">
                          {men.name}
                          <ChevronDownIcon
                            className="h-5 w-5 flex-none text-gray-400"
                            aria-hidden="true"
                          />
                        </Popover.Button>

                        {men.subMenu && (
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                          >
                            <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                              <div className="p-4">
                                {men.subMenu?.map((item) => (
                                  <div
                                    key={item.name}
                                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                                  >
                                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                      <item.icon
                                        className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                                        aria-hidden="true"
                                      />
                                    </div>
                                    <div className="flex-auto">
                                      <a
                                        href={item.href}
                                        className="block font-semibold text-gray-900"
                                      >
                                        {item.name}
                                        <span className="absolute inset-0" />
                                      </a>
                                      <p className="mt-1 text-gray-600">
                                        {item.description}
                                      </p>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </Popover.Panel>
                          </Transition>
                        )}

                        {men.dynamicMenu && (
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                          >
                            <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
                              <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5 lg:max-w-3xl">
                                <div className="grid grid-cols-1 gap-x-6 gap-y-1 p-4 lg:grid-cols-2">
                                  {getDynamicMenuDetails(men.dynamicMenu).map(
                                    (item) => (
                                      <div
                                        key={item.name}
                                        className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50"
                                      >
                                        <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                          <item.icon
                                            className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                                            aria-hidden="true"
                                          />
                                        </div>
                                        <div>
                                          <a
                                            href={item.href}
                                            className="font-semibold text-gray-900"
                                          >
                                            {item.name}
                                            <span className="absolute inset-0" />
                                          </a>
                                          <p className="mt-1 text-gray-600">
                                            {item.description}
                                          </p>
                                        </div>
                                      </div>
                                    )
                                  )}
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        )}
                      </Popover>
                    </Popover.Group>
                  );
                } else
                  return (
                    <Link
                      key={men.name}
                      href={men.href ?? "/"}
                      prefetch
                      className="text-lg leading-6 text-gray-900"
                    >
                      {men.name}
                    </Link>
                  );
              })}
            </div>

            <div className="hidden items-center justify-end space-x-4 lg:flex lg:w-0 lg:flex-1">
              <a
                href="#"
                className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
              >
                <MagnifyingGlassIcon width={24} />
              </a>
              <LargeButton>
                <>
                  <span>Register</span>
                  <span>
                    <ChevronDownIcon width={20} className="mx-1" />
                  </span>
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
              className="absolute inset-x-0 top-0 z-30 origin-top-right transform p-2 transition lg:hidden"
            >
              <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
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
                        id="closeBtn"
                        className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                      >
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <div className="-my-6 divide-y divide-gray-500/10">
                      <div className="space-y-2 py-6">
                        {menu.map((men) => {
                          if (men.subMenu || men.dynamicMenu) {
                            return (
                              <Disclosure
                                key={men.name}
                                as="div"
                                className="-mx-3"
                              >
                                {({ open }) => (
                                  <>
                                    <Disclosure.Button
                                      id="popover"
                                      className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                      {men.name}
                                      <ChevronDownIcon
                                        className={clsx(
                                          open ? "rotate-180" : "",
                                          "h-5 w-5 flex-none"
                                        )}
                                        aria-hidden="true"
                                      />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="mt-2 space-y-2">
                                      {men.subMenu?.map((item) => (
                                        <Disclosure.Button
                                          key={item.name}
                                          className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        >
                                          <Link href={item.href}>
                                            {item.name}
                                          </Link>
                                        </Disclosure.Button>
                                      ))}
                                      {getDynamicMenuDetails(
                                        men.dynamicMenu
                                      ).map((item) => (
                                        <Disclosure.Button
                                          key={item.name}
                                          className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        >
                                          <Link href={item.href}>
                                            {item.name}
                                          </Link>
                                        </Disclosure.Button>
                                      ))}
                                    </Disclosure.Panel>
                                  </>
                                )}
                              </Disclosure>
                            );
                          } else {
                            return (
                              <Link
                                key={men.name}
                                href={men.href ?? "/"}
                                prefetch
                                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                              >
                                {men.name}
                              </Link>
                            );
                          }
                        })}
                        <LargeButton className="w-full">
                          <>
                            <span>Register</span>
                            <span>
                              <ChevronDownIcon width={20} className="mx-1" />
                            </span>
                          </>
                        </LargeButton>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </div>
    </header>
  );
};
