"use client";
import clsx from "clsx";
import ContactIcon from "@/components/ContactIcon";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/20/solid";
import ContactUsForm from "@/components/contact/contact-us-form/ContactUsForm";
import { Container } from "@/components/Container";
import LocateUs from "@/components/contact/locate-us/LocateUs";
import ContactList from "@/components/contact/contact-us-list/ContactList";
import { useState } from "react";

interface ContactItem {
  name: string;
  icon: any;
  content: JSX.Element;
}
const GetInTouch = () => {
  const contactsMenu = [
    {
      name: "Locate Us Easily",
      icon: MapPinIcon,
      content: <LocateUs />,
    },
    {
      name: "Contact List",
      icon: PhoneIcon,
      content: <ContactList />,
    },
    {
      name: "Send Us an Email",
      icon: EnvelopeIcon,
      content: <ContactUsForm />,
    },
  ];

  const [active, setActive] = useState<ContactItem | null>(
    contactsMenu[contactsMenu.length - 1] ?? null
  );

  return (
    <Container className="mx-auto 2xl:w-4/6">
      <div className="mx-auto xl:w-5/6">
        <div className="my-8 flex justify-center">
          {contactsMenu.map((item) => (
            <ContactIcon
              onClick={() => setActive(item)}
              key={item.name}
              className={clsx(
                active?.name == item.name
                  ? "bg-surface-dark"
                  : "bg-transparent",
                "mx-2 cursor-pointer hover:bg-gray-100 md:mx-4"
              )}
              icon={item.icon}
              name={item.name}
            />
          ))}
        </div>

        {active?.content}
      </div>
    </Container>
  );
};

export default GetInTouch;
