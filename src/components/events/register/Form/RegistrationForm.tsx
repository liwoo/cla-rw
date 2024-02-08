'use client'
import { Container } from '@/components/Container'
import { BookOpenIcon, EnvelopeIcon, UserIcon } from '@heroicons/react/20/solid'
import React, { ReactNode, useState } from 'react'
import NumberOfPeopleForm from '@/components/events/register/Form/NumberOfPeopleForm'
import Google from '@/components/icons/Google'
import SpeakersList from '@/components/events/register/Speakers/SpeakersList'
import Menu from '@/components/events/register/Menu/Menu'
import ShareEvent from '@/components/events/register/ShareEvent'

export interface Step {
  step: number
  title: string
  more: string
  icon: ReactNode
  form: () => JSX.Element
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
        <div className="block lg:flex">
          <div className="mb-4 flex items-center justify-between lg:hidden">
            <Menu steps={steps} activeStep={activeStep} />
          </div>
          <div className="hidden w-[30%] border-r border-secondary lg:block">
            <div className="mb-4 text-xl font-semibold">Steps</div>
            <Menu steps={steps} activeStep={activeStep} size="large" />
            <div className="pt-24">
              <SpeakersList />
              <ShareEvent />
            </div>
          </div>
          <div className="w-full lg:w-[70%] lg:px-16">
            <div>
              <div className="text-xl font-semibold md:text-2xl">
                Register For This Event
              </div>
              <GoogleSignin />
              <Divider />
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

const Divider = () => (
  <div className="flex items-center justify-between">
    <div className="h-[1px] flex-1 bg-gray-700"></div>
    <div className="mx-2 font-bold">Or</div>
    <div className="h-[1px] flex-1 bg-gray-700"></div>
  </div>
)

const GoogleSignin = () => (
  <div className="my-8 flex items-center justify-center bg-white py-4">
    <div className="mr-2 w-10">
      <Google />
    </div>
    <span className="text-xl">Sign in to register</span>
  </div>
)
