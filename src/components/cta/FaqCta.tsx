import React from 'react'
import { Container } from '@/components/Container'
import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/20/solid'

interface FaqProps {
  items: Faq[]
}
interface Faq {
  title: string
  description: string
  ctaText: string
  to: string
}

const FaqCTA = ({ items }: FaqProps) => {
  return (
    <div className="bg-surface-dark py-16">
      <Container className="flex items-center">
        {items.map((item, index) => (
          <>
            <Item {...item}></Item>
            {index != items.length - 1 && (
              <div className="mx-16 border-l border-muted pt-[10%]" />
            )}
          </>
        ))}
      </Container>
    </div>
  )
}

export default FaqCTA

const Item = ({ title, description, ctaText, to }: Faq) => {
  return (
    <div className="h-full">
      <div className="my-6 text-3xl font-semibold">{title}</div>
      <div className="my-6 line-clamp-4">{description}</div>
      <Link className="flex items-center font-bold  text-primary" href={to}>
        <div>{ctaText}</div>
        <ArrowRightIcon className="mx-2 h-6 text-primary" />
      </Link>
    </div>
  )
}
