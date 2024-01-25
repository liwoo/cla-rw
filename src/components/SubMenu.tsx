import clsx, { ClassValue } from 'clsx'
import React, { HTMLAttributes } from 'react'
import { Container } from '@/components/Container'
import {MenuItem} from "@/utils/types";

type ModifiedHTMLAttributes<T> = Omit<HTMLAttributes<T>, 'className'> & {
  className?: ClassValue;
};

interface SubMenuProps  extends ModifiedHTMLAttributes<HTMLDivElement> {
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
  className="flex items-center justify-center"
}: SubMenuProps) => {
  return (
    <Container className="pb-8">
      <div className={clsx(className)}>
        {items.map((item) => (
          <MenuItem
            key={item.name}
            item={item}
            active={item.name == active?.name}
            color={color}
            onClick={() => onItemClick(item)}
            activeBorderColor={activeBorderColor}
          />
        ))}
      </div>
    </Container>
  )
}

export default SubMenu

interface MenuItemProps {
  item: MenuItem
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
    <div className="mr-2 md:mr-6 cursor-pointer" onClick={() => onClick(item)}>
      <div
        className={clsx(
          color,
          `whitespace-nowrap text-sm font-semibold capitalize md:uppercase md:text-base ease-in-out hover:opacity-70 transition-all duration-400 `
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


