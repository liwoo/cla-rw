'use client'
import clsx from 'clsx'
import ContactIcon from '@/components/ContactIcon'
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/20/solid'
import ContactUsForm from '@/components/contact-us/contact-us-form/ContactUsForm'
import { Container } from '@/components/Container'
import LocateUs from '@/components/contact-us/locate-us/LocateUs'
import ContactList from '@/components/contact-us/contact-list/ContactList'
import { Content } from 'next/font/google'
import { useState } from 'react'

const GetInTouch = () => {
  const contactsMenu = [
    {
      name: 'Locate Us Easily',
      icon: MapPinIcon,
      content: <LocateUs/>
    },
    {
      name: 'Contact List',
      icon: PhoneIcon,
      content: <ContactList/>
    },
    {
      name: 'Send Us an Email',
      icon: EnvelopeIcon,
      content: <ContactUsForm/>
    },
  ]

  const [active,setActive]=useState(contactsMenu[contactsMenu.length - 1]??null)

  return (
    <Container>
      <div className="my-8 flex justify-center">
        {contactsMenu.map((item) => (
          <ContactIcon
            onClick={()=>setActive(item)}
            key={item.name}
            className={clsx(
              active.name == item.name ? 'bg-surface-dark' : 'bg-transparent',
              'mx-2 md:mx-4 hover:bg-gray-100 cursor-pointer'
            )} icon={item.icon} name={item.name}          />
        ))}
      </div>

      {active.content}
    </Container>
  )
}

export default GetInTouch
