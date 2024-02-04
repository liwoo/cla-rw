import clsx from 'clsx'
import { Step } from '@/components/events/register/Form/RegistrationForm'

interface StepMenuItemProps {
  step: Step
  active: Step
  size?: 'small' | 'large'
}
const MenuItem = ({ step, active, size = 'small' }: StepMenuItemProps) => {
  if (size == 'small') {
    return <StepMenuMobileItem step={step} active={active} />
  }
  return <StepMenuItem step={step} active={active} />
}

export default MenuItem

const StepMenuItem = ({ step, active }: StepMenuItemProps) => {
  return (
    <div className="relative flex items-center justify-between py-6">
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

const StepMenuMobileItem = ({ step, active }: StepMenuItemProps) => {
  return (
    <>
      {step.step > 1 && <div className="h-[1px] flex-1 bg-secondary"></div>}
      <div
        className={clsx(
          active.step >= step.step ? 'bg-secondary text-white' : 'bg-white',
          'flex h-6 w-6 items-center justify-center rounded-full border border-secondary text-sm'
        )}
      >
        {step.step}
      </div>
    </>
  )
}
