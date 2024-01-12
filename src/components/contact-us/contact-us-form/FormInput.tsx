import React, { ChangeEventHandler } from 'react'

interface FormInputProps {
  htmlFor: string
  label: string
  required?: boolean
  name: string
  placeholder: string
  value: string
  onChange: ChangeEventHandler<HTMLInputElement>
}
const FormInput = ({
  htmlFor,
  label,
  required = false,
  name,
  placeholder,
  value,
  onChange,
}: FormInputProps) => {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="my-2 block text-sm font-semibold leading-6 text-gray-900 md:my-4"
      >
        {label} {required && <span className="text-primary">*</span>}
      </label>
      <div className="mt-2.5">
        <input
          type="text"
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="block w-full rounded-full border-0 px-3.5 py-2.5 text-lg text-gray-900 shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-800 sm:text-sm sm:leading-6 md:px-4 md:py-5"
        />
      </div>
    </div>
  )
}

export default FormInput
