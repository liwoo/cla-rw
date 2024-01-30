import clsx, { ClassValue } from 'clsx'
import { FC, HTMLAttributes, ReactNode } from 'react'

type ButtonType = 'Primary' | 'Secondary' | 'Tertiary'
type ModifiedHTMLAttributes<T> = Omit<HTMLAttributes<T>, 'className'> & {
  className?: ClassValue
}

interface LargeButtonProps extends ModifiedHTMLAttributes<HTMLDivElement> {
  buttonType?: ButtonType
  children: ReactNode
}
const LargeButtonOutline: FC<LargeButtonProps> = ({
  className,
  children,
  buttonType = 'Primary',
}) => {
  const buttonColor = {
    Primary: 'bg-transparent bg-origin-border text-primary border-primary',
    Secondary:
      'bg-transparent bg-origin-border text-secondary border-secondary',
    Tertiary: 'bg-transparent bg-origin-border text-tertiary border-tertiary',
  }
  return (
    <button
      className={clsx(
        className,
        buttonColor[buttonType],
        'inline-flex h-12 items-center justify-center whitespace-nowrap rounded-md border-2 px-7 lg:px-14 text-base font-medium shadow-sm transition-all'
      )}
    >
      {children}
    </button>
  )
}

export default LargeButtonOutline
