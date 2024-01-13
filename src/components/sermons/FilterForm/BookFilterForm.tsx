import React from 'react'
import Select from './Select'

const BookFilterForm = () => {
  return (
    <div className='grid grid-cols-2 gap-16'>
        <Select/>
        <Select/>
    </div>
  )
}

export default BookFilterForm
