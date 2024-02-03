'use client'
import { Container } from '@/components/Container'
import { BookOpenIcon, EnvelopeIcon, UserIcon } from '@heroicons/react/20/solid'
import React, { ReactNode, useState } from 'react'
import NumberOfPeopleForm from './NumberOfPeopleForm'
import clsx from 'clsx'
import Google from '@/components/icons/Google'

export interface Step {
  step: number
  title: string
  more: string
  icon: ReactNode
  form: () => React.JSX.Element
}
const RegistrationForm = () => {
  const steps: Step[] = [
    {
      step: 1,
      title: 'Number Of People',
      more: 'How many people are attending',
      icon: <UserIcon className="w-7" />,
      form: NumberOfPeopleForm,
    },
    {
      step: 2,
      title: 'Fill in details',
      more: 'Provide their details',
      icon: <BookOpenIcon className="w-7" />,
      form: NumberOfPeopleForm,
    },
    {
      step: 3,
      title: 'Number Of People',
      more: 'How many people are attending',
      icon: <EnvelopeIcon className="w-7" />,
      form: NumberOfPeopleForm,
    },
  ]

  const [activeStep, setActiveStep] = useState(steps[0])

  return (
    <div className="py-8">
      <Container>
        <div className="flex">
          <div className="w-[30%] border-r border-secondary">
            <div className="mb-4 text-xl">Steps</div>
            {steps.map((step) => (
              <StepMenuItem key={step.step} step={step} active={activeStep} />
            ))}
          </div>
          <div className="w-[70%] px-16">
            <div>
              <div className="text-2xl font-semibold">
                Register For This Event
              </div>
              <div className="my-8 flex items-center justify-center bg-white py-4">
                <div className="mr-2 w-10">
                  <Google />
                </div>
                <span className="text-xl">Sign in to register</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="h-[1px] flex-1 bg-gray-700"></div>
                <div className="mx-2 font-bold">Or</div>
                <div className="h-[1px] flex-1 bg-gray-700"></div>
              </div>
              <div className="my-2 text-gray-700">
                Step {activeStep.step}/{steps.length}
              </div>
            </div>
            <div className="py-4">
              <activeStep.form />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default RegistrationForm

interface StepMenuItemProps {
  step: Step
  active: Step
}
const StepMenuItem = ({ step, active }: StepMenuItemProps) => {
  return (
    <div className="relative flex justify-between py-6">
      <div className="relative">
        <div className="font-bold">{step.title}</div>
        <div>{step.more}</div>
      </div>

      <div className="relative mr-12">
        {step.step > 1 && (
          <div className="absolute bottom-[100%] left-[50%] z-0 h-full border-r border-secondary" />
        )}
        <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-surface-dark text-secondary">
          {step.icon}
        </div>
      </div>
      <div
        className={clsx(
          active.step >= step.step ? 'bg-secondary' : 'bg-white',
          'absolute right-0 top-[50%] h-4 w-4 -translate-y-2 translate-x-2 rounded-full border border-secondary'
        )}
      ></div>
    </div>
  )
}
