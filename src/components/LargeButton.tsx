import { FC, HTMLAttributes, ReactNode } from 'react'
import clsx, { ClassValue } from 'clsx'

type ButtonType = 'Primary' | 'Secondary' | 'Tertiary' 
type ModifiedHTMLAttributes<T> = Omit<HTMLAttributes<T>, 'className'> & {
  className?: ClassValue
}

interface LargeButtonProps extends ModifiedHTMLAttributes<HTMLDivElement> {
  buttonType?: ButtonType
  children: ReactNode
  outlined?: boolean
}

export const LargeButton: FC<LargeButtonProps> = ({
  children,
  buttonType = 'Primary',
  outlined = false,
  className
}) => {
  const buttonColor = {
    Primary: outlined
      ? 'bg-transparent bg-origin-border text-primary border-primary'
      : 'bg-primary bg-origin-border text-white border-transparent hover:bg-primary-dark',
    Secondary: outlined
      ? 'bg-transparent bg-origin-border text-secondary border-secondary'
      : 'bg-primary bg-origin-border text-white border-transparent hover:bg-secondary-dark',
    Tertiary: outlined
      ? 'bg-transparent bg-origin-border text-tertiary border-tertiary'
      : 'bg-primary bg-origin-border text-white border-transparent',
  }
  return (
    <button
      className={clsx(
        className,buttonColor[buttonType],
        'inline-flex h-12 items-center justify-center whitespace-nowrap rounded-md border-2 px-4 text-base font-medium shadow-sm transition-all lg:px-8'
      )}
    >
      {children}
    </button>
  )
}
