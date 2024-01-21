"use client"
import { Transition } from '@headlessui/react'
import { MinusIcon, PlusIcon } from '@heroicons/react/20/solid'
import React, { useState } from 'react'

interface AccordionProps {
  items: {
    title: string
    description: string
  }[]
}
const Accordion = ({ items }: AccordionProps) => {
  const [open,setOpen]=useState(null as {title}|null)
  const onItemClick=(item)=>{
    setOpen(item)
  }
  return (
    <div>
      {items.map((item) => (
        <AccordionItem key={item.title} item={item} open={item.title==open?.title} onOpen={onItemClick} onClose={()=>setOpen(null)} />
      ))}
    </div>
  )
}

export default Accordion

interface AccordionItem {
  item:{
    title: string
    description: string
  }
  open: boolean
  onOpen:(item:any)=>void
  onClose:()=>void
}
const AccordionItem = ({item, open,onOpen,onClose }: AccordionItem) => {
  return (
    <div >
      <div className="cursor-pointer flex justify-between border-b border-muted py-4 items-center ">
        <div>{item.title}</div>
        {open ? (
          <MinusIcon className="cursor-pointer text-primary h-6 hover:text-primary-200 transition-all duration-200"  onClick={()=>onClose()}/>
        ) : (
          <PlusIcon className="cursor-pointer text-primary h-6  " onClick={()=>onOpen(item)}/>
        )}
      </div>
      <Transition show={open} enter="ease-out duration-300"><div className='py-2 text-muted'>{item.description}</div></Transition>
    </div>
  )
}
