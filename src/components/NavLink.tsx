import Link from "next/link";
import React from "react";
import clsx from "clsx";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  active?: boolean;
  noEffect?: boolean;
}

export function NavLink({
  href,
  children,
  active,
  noEffect = false,
}: NavLinkProps) {
  const linkAccent =
    "after:h-1 after:w-full after:absolute after:-bottom-1 after:left-0 after:rounded-lg after:border-2 after:bg-secondary after:border-secondary";
  const linkAccentHover =
    "after:hover:h-1 after:hover:w-full after:hover:absolute after:hover:-bottom-1 after:hover:left-0 after:hover:rounded-lg after:hover:border-2 after:hover:bg-secondary after:hover:border-secondary";
  return (
    <Link
      href={href}
      className={clsx(
        `inline-block font-semibold py-1 px-2 text-sm text-white relative ${
          noEffect === false && linkAccentHover
        }`,
        active && linkAccent
      )}
    >
      {children}
    </Link>
  );
}
