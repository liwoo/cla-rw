"use client"
import clsx, { ClassValue } from 'clsx'
import React, { HTMLAttributes } from 'react'

type ModifiedHTMLAttributes<T> = Omit<HTMLAttributes<T>, 'className'> & {
    className?: ClassValue;
};


interface SubMenuProps extends ModifiedHTMLAttributes<HTMLDivElement> {
  items: {name:string}[]
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
  className="justify-center"
}: SubMenuProps) => {
  return (
      <div className={clsx(className, "flex items-center")}>
        {items.map((item) => (
          <MenuItem
            key={item.name}
            item={item}
            active={item.name == active?.name}
            color={color}
            onClick={onItemClick}
            activeBorderColor={activeBorderColor}
          />
        ))}
      </div>
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
    <div className="mr-2 md:mr-6" onClick={() => onClick(item)}>
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
          `mt-2 border-[1.5px]`
        )}
      ></div>
    </div>
  )
}