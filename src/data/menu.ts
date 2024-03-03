import BookOpenIcon from "@/components/icons/BookOpenIcon";
import {
  BookmarkIcon,
  CalendarIcon,
  ChartPieIcon,
  MegaphoneIcon,
  PhoneIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/20/solid";
import { ForwardRefExoticComponent } from "react";

export type DynamicMenu = "Ministry" | "Pastoral";

export type Menu = {
  name: string;
  href: string;
  icon: ForwardRefExoticComponent<
    React.PropsWithoutRef<React.SVGProps<SVGSVGElement>>
  >;
  description?: string;
  dynamicMenu?: DynamicMenu;
  subMenu?: Menu[];
};

export const menu: Menu[] = [
  {
    name: "Visiting",
    icon: QuestionMarkCircleIcon,
    href: "/i-am-new",
  },
  {
    name: "Connect",
    icon: QuestionMarkCircleIcon,
    href: "#",
    subMenu: [
      {
        name: "Events",
        href: "/events",
        icon: CalendarIcon,
        description: "Welcome to Christian Life Assembly",
      },
      {
        name: "About",
        icon: QuestionMarkCircleIcon,
        href: "/about",
        description: "Learn more about Christian Life Assembly",
      },
      {
        name: "Get in Touch",
        href: "/contact",
        icon: PhoneIcon,
        description: "Contact Christian Life Assembly",
      },
    ],
  },
  {
    name: "Grow",
    icon: QuestionMarkCircleIcon,
    href: "#",
    subMenu: [
      {
        name: "Sermons",
        icon: MegaphoneIcon,
        href: "/sermons",
        description: "Listen to our sermons",
      },
      {
        name: "Devotionals",
        icon: BookmarkIcon,
        href: "/devotions",
        description: "Read our devotionals",
      },
    ],
  },
  {
    name: "Serve",
    icon: QuestionMarkCircleIcon,
    href: "#",
    dynamicMenu: "Ministry",
  },
  {
    name: "Give",
    icon: QuestionMarkCircleIcon,
    href: "/give",
  },
];
