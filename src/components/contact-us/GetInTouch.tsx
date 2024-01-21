'use client'
import clsx from 'clsx'
import ContactIcon from '@/components/ContactIcon'
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/20/solid'
import ContactUsForm from '@/components/contact-us/contact-us-form/ContactUsForm'
import { Container } from '@/components/Container'

const GetInTouch = () => {
  const contactsMenu = [
    {
      name: 'Locate Us Easily',
      icon: MapPinIcon,
    },
    {
      name: 'Contact List',
      icon: PhoneIcon,
    },
    {
      name: 'Send Us an Email',
      icon: EnvelopeIcon,
    },
  ]
  const active = contactsMenu[contactsMenu.length - 1]

  console.log(active)
  return (
    <Container>
      <div className="my-8 flex justify-center">
        {contactsMenu.map((item) => (
          <ContactIcon
            key={item.name}
            {...item}
            className={clsx(
              active.name == item.name ? 'bg-surface-dark' : 'bg-transparent',
              'mx-2 md:mx-4 hover:bg-gray-100 cursor-pointer'
            )}
          />
        ))}
      </div>

      <ContactUsForm></ContactUsForm>
    </Container>
  )
}

export default GetInTouch
