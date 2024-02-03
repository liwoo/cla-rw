import { ChevronDownIcon } from '@heroicons/react/20/solid'
import React from 'react'

const SortBy = () => {
  return (
    <div >
      <div className="flex items-center">
        <div className='mr-4 font-semibold'>Latest</div>
        <div><ChevronDownIcon className='h-8'/></div>
      </div>
    </div>
  )
}

export default SortBy