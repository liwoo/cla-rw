import { MinusIcon, PlusIcon } from '@heroicons/react/20/solid'
import React from 'react'

interface AccordionProps {
  items: {
    title: string
    description: string
  }[]
}
const Accordion = ({ items }: AccordionProps) => {
  return (
    <div>
      {items.map((item) => (
        <AccordionItem key={item.title} {...item} open={false} />
      ))}
    </div>
  )
}

export default Accordion

interface AccordionItem {
  title: string
  description: string
  open: boolean
}
const AccordionItem = ({ title, description, open }: AccordionItem) => {
  return (
    <div>
      <div className="flex justify-between border-b border-muted py-4 items-center">
        <div>{title}</div>
        {open ? (
          <MinusIcon className="text-primary h-6" />
        ) : (
          <PlusIcon className="text-primary h-6" />
        )}
      </div>
      {open && <div>{description}</div>}
    </div>
  )
}
