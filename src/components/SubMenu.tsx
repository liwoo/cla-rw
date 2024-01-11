import { classNames } from '@headlessui/react/dist/utils/class-names'
import clsx from 'clsx'
import React from 'react'
import { Container } from './Container'

interface SubMenuProps {
  items: {
    name: string
  }[]
  active: string
  color?: string
  activeBorderColor?: string
}
const SubMenu = ({
  items,
  active,
  color = 'text-white',
  activeBorderColor = 'border-tertiary',
}: SubMenuProps) => {
  return (
    <Container className="pb-8">
      <div className="flex items-center justify-center">
        {items.map((item) => (
          <MenuItem
            key={item.name}
            item={item}
            active={item.name == active}
            color={color}
            activeBorderColor={activeBorderColor}
          />
        ))}
      </div>
    </Container>
  )
}

export default SubMenu

interface MenuItemProps {
  item: {
    name: string
  }
  active?: boolean
  color: string
  activeBorderColor: string
}

const MenuItem = ({
  item,
  active = false,
  color,
  activeBorderColor,
}: MenuItemProps) => {
  return (
    <div className="mx-2 md:mx-6">
      <div className={clsx(`font-semibold uppercase text-sm md:text-base whitespace-nowrap`, color)}>{item.name}</div>
      <div
        className={clsx(
          `mt-2 border`,
          active ? `${activeBorderColor}` : 'border-transparent'
        )}
      ></div>
    </div>
  )
}
