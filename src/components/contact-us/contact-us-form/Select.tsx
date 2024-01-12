import { ChangeEventHandler } from 'react'

interface FormInputProps {
  htmlFor: string
  label: string
  required?: boolean
  name: string
  placeholder: string
  value: string | number
  onChange: ChangeEventHandler<HTMLInputElement>
  options: { label: string; value: string | number }[]
}
const Select = ({
  htmlFor,
  label,
  required = false,
  name,
  placeholder,
  value,
  options,
  onChange,
}: FormInputProps) => {
  return (
    <div className="relative">
      <label
        htmlFor={htmlFor}
        className="my-4 block text-sm font-semibold leading-6 text-gray-900"
      >
        {label} {required && <span className="text-primary">*</span>}
      </label>
      <select
        name={name}
        placeholder={placeholder}
        className="shodow-md block w-full rounded-full border-0 px-2 md:px-4 py-2.5 md:py-5 text-lg text-gray-900 shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-800 sm:text-sm sm:leading-6"
      >
        <option className='text-surface-dark'>{placeholder}</option>
        {options.map((option) => (
          <option value={option.value} selected={value == option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Select
