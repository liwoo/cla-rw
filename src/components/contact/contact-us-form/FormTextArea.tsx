import React, { ChangeEventHandler } from "react";

interface FormInputProps {
  htmlFor: string;
  label: string;
  required?: boolean;
  name: string;
  placeholder: string;
  value: string;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
}

const FormTextArea = ({
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
        className="my-4 block text-sm font-semibold leading-6 text-gray-900"
      >
        {label} {required && <span className="text-primary">*</span>}
      </label>
      <div className="mt-2">
        <textarea
          name={name}
          value={value}
          rows={10}
          onChange={onChange}
          placeholder={placeholder}
          className="text-lg block w-full rounded-3xl border-0 p-8 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-800 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
};

export default FormTextArea;
