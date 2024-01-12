import React from 'react'
import FormInput from './FormInput'
import FormTextArea from './FormTextArea'
import Select from './Select'
import { LargeButton } from '@/components/LargeButton'

const ContactUsForm = () => {
  return (
    <form action="#" method="POST" className="my-8 md:my-16">
      <div className="my-8 rounded-4xl bg-white p-8 shadow-sm md:my-16 md:p-16">
        <div className="my-8 text-2xl font-bold">Contact Form</div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-12">
          <FormInput
            htmlFor={'full-name'}
            label={'Full Name'}
            name={'full-name'}
            placeholder={'ex. John Doe'}
            value={''}
            onChange={() => {}}
            required
          />
          <FormInput
            htmlFor={'email'}
            label={'Email'}
            name={'email'}
            placeholder={'ex. john@mail.com'}
            value={''}
            onChange={() => {}}
            required
          />
          <FormInput
            htmlFor={'phone'}
            label={'Phone Number'}
            name={'phone'}
            placeholder={'ex. 0088'}
            value={''}
            onChange={() => {}}
            required
          />
          <Select
            options={[]}
            htmlFor={'subject'}
            label={'Select a subject'}
            name={'subject'}
            placeholder={'Please Select'}
            value={''}
            onChange={() => {}}
            required
          />
        </div>
        <div className="my-8 md:my-16">
          <FormTextArea
            htmlFor={'message'}
            label={'Message'}
            name={'message'}
            placeholder={'Write your message here'}
            value={''}
            onChange={() => {}}
            required
          />
        </div>
      </div>
      <div className="my-8 text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas rem
        ipsa eos exercitationem numquam quidem quam porro libero, suscipit eaque
        repellendus magnam eveniet inventore id reiciendis ducimus aspernatur
        mollitia ratione.
      </div>
      <div className="flex justify-end">
        <LargeButton>
          <div className="font-bold">Submit</div>
        </LargeButton>
      </div>
    </form>
  )
}

export default ContactUsForm
