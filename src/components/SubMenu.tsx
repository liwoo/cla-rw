import clsx from 'clsx'
import React from 'react'
import { Container } from './Container'
import {MenuItem} from "@/components/about/ServiceTimes/ServiceTimes";

interface SubMenuProps {
  items: MenuItem[]
  active?: {name:string} | null
  color?: string
  activeBorderColor?: string
  onItemClick: Function
}
const SubMenu = ({
  items,
  active,
  color = 'text-white',
  activeBorderColor = 'border-tertiary',
  onItemClick,
}: SubMenuProps) => {
  return (
    <Container className="pb-8">
      <div className="flex items-center justify-center">
        {items.map((item) => (
          <MenuItem
            key={item.name}
            item={item}
            active={item.name == active?.name}
            color={color}
            onClick={() => onItemClick(item.index)}
            activeBorderColor={activeBorderColor}
          />
        ))}
      </div>
    </Container>
  )
}

export default SubMenu

interface MenuItemProps {
  item: {name:string}
  active?: boolean
  color: string
  activeBorderColor: string
  onClick: Function
}

const MenuItem = ({
  item,
  active = false,
  color,
  activeBorderColor,
  onClick,
}: MenuItemProps) => {
  return (
    <div className="mx-2 md:mx-6 cursor-pointer" onClick={() => onClick(item)}>
      <div
        className={clsx(
          color,
          `whitespace-nowrap text-sm font-semibold uppercase md:text-base`
        )}
      >
        {item.name}
      </div>
      <div
        className={clsx(
          active ? activeBorderColor : 'border-transparent',
          `mt-2 border`
        )}
      ></div>
    </div>
  )
}
