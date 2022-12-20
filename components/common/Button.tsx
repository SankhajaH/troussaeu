import React from 'react'
import {ButtonHTMLAttributes, DetailedHTMLProps, ReactNode} from 'react'

type Props = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  variant?: 'primary' | 'secondary'
  loading?: boolean
  children: ReactNode | string
  fullWidth?: boolean
  className?: string
}

const Button = ({
  disabled = false,
  loading = false,
  children,
  variant = 'primary',
  fullWidth,
  className,
  ...rest
}: Props) => {
  return (
    <button
      role={'button'}
      type={'button'}
      className={`${fullWidth ? 'w-full' : 'min-w-[96px]'} ${
        variant === 'primary'
          ? `${
              loading || disabled ? 'text-grey opacity-30' : 'text-grey-main'
            } bg-indigo-main`
          : `${
              loading || disabled ? 'text-grey opacity-30' : 'text-grey-main'
            } bg-indigo-main`
      } font-light py-2.5 px-4 rounded-lg shadow transition ease-in ${
        loading || disabled
          ? 'cursor-not-allowed bg-opacity-30'
          : 'cursor-pointer hover:bg-opacity-70'
      } ${className}`}
      disabled={disabled || loading}
      {...rest}
    >
      {loading ? 'Loading...' : children}
    </button>
  )
}

export default Button
