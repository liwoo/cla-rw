import React from 'react'

const Select = () => {
  return (
    <div className='w-64'>
      <label htmlFor="underline_select" className="font-semibold">
        Underline select
      </label>
      <select
        id="underline_select"
        className="peer block w-full appearance-none border-0 border-b-2 border-gray-200 bg-transparent py-2.5 px-0 text-sm text-gray-500 focus:border-gray-200 focus:outline-none focus:ring-0 dark:border-gray-700 dark:text-gray-400"
      >
        <option selected>Choose a country</option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
      </select>
    </div>
  )
}

export default Select