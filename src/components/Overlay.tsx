import clsx from 'clsx'
import React from 'react'

const Overlay = ({opacity="bg-opacity-50"}:{opacity?:string}) => {
  return (
    <div
      className={clsx(opacity,"absolute inset-0 bg-black w-full h-full top-0 left-0")}
    />
  )
}

export default Overlay