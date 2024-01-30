'use client'

export interface SelectItem {
  text: string
  value: string
}
interface SelectProps {
  name: string
  label?: string
  options: SelectItem[]
  onChange: any
}
const Select = ({ name, label, options, onChange }: SelectProps) => {
  return (
    <div className="w-full">
      <label htmlFor="underline_select" className="font-semibold">
        {label}
      </label>
      <select
        name={name}
        onChange={onChange}
        className="peer block w-full appearance-none border-0 border-b-2 border-gray-200 bg-transparent py-2.5 px-0 text-sm text-gray-500 focus:border-gray-200 focus:outline-none focus:ring-0 dark:border-gray-700 dark:text-gray-400"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>{option.text}</option>
        ))}
      </select>
    </div>
  )
}

export default Select
