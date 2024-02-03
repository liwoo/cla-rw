import { LargeButton } from '@/components/LargeButton'
import React from 'react'

const NumberOfPeopleForm = () => {
  return (
    <div>
      <div className="text-xl font-bold">
        How many people do you want to register
      </div>
      <div className="">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </div>

      <div className="my-8">
        <label
          htmlFor="number"
          className="my-2 block text-sm font-semibold leading-6 text-gray-900 md:my-2"
        ></label>
        <div className="mt-2">
          <input
            type="text"
            name="number"
            className="block w-full border-0 px-2 py-1 text-lg text-gray-900 shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-800 sm:text-sm sm:leading-6 md:px-3 md:py-4"
          />
        </div>
      </div>
      <div className="flex justify-end"><LargeButton className="rounded-none">Next</LargeButton></div>
      
    </div>
  )
}

export default NumberOfPeopleForm
